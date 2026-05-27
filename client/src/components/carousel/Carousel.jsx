import { useState, useRef, useEffect, useCallback } from "react";
import { useLanguage } from "../../context/LanguageContext";

const SLIDE_MS = 550;

export default function Carousel({ images = [], auto = true, interval = 3500, onOpen }) {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const animatingRef = useRef(false);
  const autoTimerRef = useRef(null);
  const videoTimerRef = useRef(null);
  const animTimerRef = useRef(null);
  const { t } = useLanguage();

  const slides = (images || []).map((it) =>
    typeof it === "string" ? { src: it, type: "image" } : it
  );
  const size = slides.length;

  const isVideo = (i) => slides[i]?.type === "video";

  // Only clears autoplay timers, NOT the animation timeout
  const clearAutoTimers = useCallback(() => {
    if (autoTimerRef.current) { clearInterval(autoTimerRef.current); autoTimerRef.current = null; }
    if (videoTimerRef.current) { clearTimeout(videoTimerRef.current); videoTimerRef.current = null; }
  }, []);

  const goTo = useCallback((target) => {
    if (animatingRef.current || size <= 1) return;
    if (target === indexRef.current) return;

    animatingRef.current = true;
    indexRef.current = target;
    setIndex(target);

    if (animTimerRef.current) clearTimeout(animTimerRef.current);
    animTimerRef.current = setTimeout(() => {
      animatingRef.current = false;
      animTimerRef.current = null;
    }, SLIDE_MS);
  }, [size]);

  const prev = useCallback(() => {
    goTo(((indexRef.current - 1) % size + size) % size);
  }, [goTo, size]);

  const next = useCallback(() => {
    goTo((indexRef.current + 1) % size);
  }, [goTo, size]);

  // Autoplay interval — uses clearAutoTimers (does NOT kill animation timeout)
  useEffect(() => {
    if (!auto || size <= 1) return;
    if (isVideo(indexRef.current)) return;

    clearAutoTimers();
    autoTimerRef.current = setInterval(() => {
      goTo((indexRef.current + 1) % size);
    }, interval);

    return clearAutoTimers;
  }, [auto, interval, size, index, clearAutoTimers, goTo]);

  // Video autoplay handling
  useEffect(() => {
    if (!auto || size < 1) return;

    if (videoTimerRef.current) {
      clearTimeout(videoTimerRef.current);
      videoTimerRef.current = null;
    }

    if (!isVideo(index)) return;

    const slide = slides[index];
    const ms = Number(slide?.autoplayMs) || 0;

    if (size === 1) return;

    if (ms > 0) {
      videoTimerRef.current = setTimeout(() => {
        goTo((indexRef.current + 1) % size);
      }, ms);
      return () => { if (videoTimerRef.current) clearTimeout(videoTimerRef.current); };
    }

    const el = document.getElementById(`carousel-video-${index}`);
    if (el) {
      const onEnded = () => goTo((indexRef.current + 1) % size);
      el.addEventListener("ended", onEnded);
      return () => el.removeEventListener("ended", onEnded);
    }
  }, [auto, size, index, slides, goTo]);

  const pauseAll = () => clearAutoTimers();

  const resumeAll = useCallback(() => {
    if (!auto || size <= 1) return;
    if (isVideo(indexRef.current)) return;
    clearAutoTimers();
    autoTimerRef.current = setInterval(() => {
      goTo((indexRef.current + 1) % size);
    }, interval);
  }, [auto, interval, size, clearAutoTimers, goTo]);

  // Visibility change handling
  useEffect(() => {
    const onVis = () => {
      if (document.hidden) {
        clearAutoTimers();
      } else {
        resumeAll();
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [resumeAll, clearAutoTimers]);

  // Cleanup animation timeout on unmount
  useEffect(() => {
    return () => {
      if (animTimerRef.current) clearTimeout(animTimerRef.current);
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    };
  }, []);

  if (!size) return null;

  return (
    <div className="carousel" onMouseEnter={pauseAll} onMouseLeave={resumeAll}>
      <div className="carousel__viewport">
        <div
          className="carousel__track"
          style={{
            transform: `translateX(calc(-${index} * 100%))`,
            transition: `transform ${SLIDE_MS}ms cubic-bezier(0.25, 0.1, 0.0, 1.0)`,
          }}
        >
          {slides.map((slide, i) => (
            <div
              className="carousel__slide"
              key={i}
              style={{ opacity: i === index ? 1 : 0.35, transition: `opacity ${SLIDE_MS}ms ease` }}
            >
              {slide.type === "video" ? (
                <video
                  id={`carousel-video-${i}`}
                  className="carousel__media"
                  src={slide.src}
                  poster={slide.poster}
                  muted
                  playsInline
                  autoPlay={i === index}
                  controls={false}
                  loop={size === 1 || Boolean(slide.loop)}
                  onClick={() => onOpen?.(i)}
                />
              ) : (
                <button
                  className="carousel__imgbtn"
                  onClick={() => onOpen?.(i)}
                  aria-label={`${t.projects.openImage} ${i + 1} ${t.projects.vista} ${size}`}
                >
                  <img className="carousel__media" src={slide.src} alt={`${t.projects.vista} ${i + 1}`} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {size > 1 && (
        <>
          <button className="carousel__arrow left" onClick={prev} aria-label={t.projects.previous}>‹</button>
          <button className="carousel__arrow right" onClick={next} aria-label={t.projects.next}>›</button>

          <div className="carousel__dots" role="tablist" aria-label={t.projects.goToView}>
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`${t.projects.goToView} ${i + 1}`}
                aria-selected={i === index}
                role="tab"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
