import { useState, useEffect, useRef, useCallback } from "react";
import { useLanguage } from "../../context/LanguageContext";

const SLIDE_MS = 400;

export default function Lightbox({ images = [], startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const [animating, setAnimating] = useState(false);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const animTimerRef = useRef(null);
  const { t } = useLanguage();

  const slides = (images || []).map(it =>
    typeof it === "string" ? { src: it, type: "image" } : it
  );
  const size = slides.length;

  const goTo = useCallback((target) => {
    if (animating || size <= 1) return;
    const tgt = ((target % size) + size) % size;
    if (tgt === index) return;
    setAnimating(true);
    setIndex(tgt);
    if (animTimerRef.current) clearTimeout(animTimerRef.current);
    animTimerRef.current = setTimeout(() => {
      setAnimating(false);
    }, SLIDE_MS);
  }, [animating, size, index]);

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    const previousActiveElement = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") goTo(index - 1);
      if (e.key === "ArrowRight") goTo(index + 1);

      if (e.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll(
          'button, [href], video, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previousActiveElement?.focus?.();
      if (animTimerRef.current) clearTimeout(animTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, index]);

  useEffect(() => {
    return () => {
      if (animTimerRef.current) clearTimeout(animTimerRef.current);
    };
  }, []);

  if (!size) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true">
      <div className="lightbox__backdrop" onClick={onClose} />
      <div className="lightbox__content" ref={dialogRef}>
        <div
          className="lightbox__track"
          style={{
            transform: `translateX(calc(-${index} * 100%))`,
            transition: animating
              ? `transform ${SLIDE_MS}ms cubic-bezier(0.25, 0.1, 0.0, 1.0)`
              : "none",
          }}
        >
          {slides.map((slide, i) => (
            <div
              className="lightbox__slide"
              key={i}
              style={{ opacity: i === index ? 1 : 0.3, transition: `opacity ${SLIDE_MS}ms ease` }}
            >
              {slide.type === "video" ? (
                <video
                  className="lightbox__media"
                  src={slide.src}
                  poster={slide.poster}
                  controls
                  autoPlay={i === index}
                  playsInline
                />
              ) : (
                <img className="lightbox__media" src={slide.src} alt={`${t.projects.image} ${i + 1}`} />
              )}
            </div>
          ))}
        </div>

        {size > 1 && (
          <>
            <button className="lightbox__arrow left" onClick={prev} aria-label={t.projects.previous}>‹</button>
            <button className="lightbox__arrow right" onClick={next} aria-label={t.projects.next}>›</button>
          </>
        )}
        <button ref={closeButtonRef} className="lightbox__close" onClick={onClose} aria-label={t.projects.close}>✕</button>

        <div className="lightbox__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`${t.projects.goToView} ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
