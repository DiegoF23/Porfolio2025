import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../../context/LanguageContext";

const SWIPE_THRESHOLD = 50;

export default function Lightbox({ images = [], startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const touchStartX = useRef(0);
  const { t } = useLanguage();

  const slides = (images || []).map(it =>
    typeof it === "string" ? { src: it, type: "image" } : it
  );
  const size = slides.length;

  const prev = useCallback(() => setIndex((i) => ((i - 1) % size + size) % size), [size]);
  const next = useCallback(() => setIndex((i) => (i + 1) % size), [size]);

  // Touch swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;
    if (dx > 0) prev();
    else next();
  };

  useEffect(() => {
    const previousActiveElement = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") setIndex((i) => ((i - 1) % size + size) % size);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % size);

      if (e.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll(
          'button, [href], video, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      previousActiveElement?.focus?.();
    };
  }, [size, onClose]);

  if (!size) return null;

  const s = slides[index];

  const content = (
    <div className="lightbox" role="dialog" aria-modal="true">
      <div className="lightbox__backdrop" onClick={onClose} />
      <div
        className="lightbox__content"
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="lightbox__slide lightbox__slide--active">
          {s.type === "video" ? (
            <video className="lightbox__media" src={s.src} poster={s.poster} controls autoPlay playsInline />
          ) : (
            <img className="lightbox__media" src={s.src} alt={`${t.projects.image} ${index + 1}`} />
          )}
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
              onClick={() => setIndex(i)}
              aria-label={`${t.projects.goToView} ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
