import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function Carousel({ images = [], auto = true, interval = 3500, onOpen }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const videoTimeoutRef = useRef(null);
  const { t } = useLanguage();

  const slides = (images || []).map((it) =>
    typeof it === "string" ? { src: it, type: "image" } : it
  );
  const size = slides.length;

  const isVideo = (i) => slides[i]?.type === "video";

  const clearAll = () => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    if (videoTimeoutRef.current) { clearTimeout(videoTimeoutRef.current); videoTimeoutRef.current = null; }
  };

  const startImageInterval = () => {
    if (!auto || size <= 1) return;
    if (isVideo(index)) return;
    clearAll();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % size);
    }, interval);
  };

  useEffect(() => {
    startImageInterval();
    return clearAll;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auto, interval, size, index]);

  useEffect(() => {
    if (!auto || size < 1) return;

    if (videoTimeoutRef.current) {
      clearTimeout(videoTimeoutRef.current);
      videoTimeoutRef.current = null;
    }

    if (!isVideo(index)) return;

    const slide = slides[index];
    const ms = Number(slide?.autoplayMs) || 0;

    if (size === 1) {
      return;
    }

    if (ms > 0) {
      videoTimeoutRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % size);
      }, ms);
      return () => clearTimeout(videoTimeoutRef.current);
    }

    const el = document.getElementById(`carousel-video-${index}`);
    if (el) {
      const onEnded = () => setIndex((i) => (i + 1) % size);
      el.addEventListener("ended", onEnded);
      return () => el.removeEventListener("ended", onEnded);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auto, size, index, slides]);

  const pauseAllTimers = () => clearAll();
  const resumeIfNeeded = () => startImageInterval();

  useEffect(() => {
    const onVis = () => {
      if (document.hidden) {
        clearAll();
      } else {
        startImageInterval();
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, auto, interval, size]);

  const go = (i) => setIndex(((i % size) + size) % size);
  const prev = () => go(index - 1);
  const next = () => go(index + 1);

  if (!size) return null;

  const current = slides[index];

  return (
    <div className="carousel" onMouseEnter={pauseAllTimers} onMouseLeave={resumeIfNeeded}>
      <div className="carousel__viewport">
        <div className="carousel__slide" key={index}>
          {current.type === "video" ? (
            <video
              id={`carousel-video-${index}`}
              className="carousel__media"
              src={current.src}
              poster={current.poster}
              muted
              playsInline
              autoPlay
              controls={false}
              loop={size === 1 || Boolean(current.loop)}
              onClick={() => onOpen?.(index)}
            />
          ) : (
            <button
              className="carousel__imgbtn"
              onClick={() => onOpen?.(index)}
              aria-label={`${t.projects.openImage} ${index + 1} ${t.projects.vista} ${size}`}
            >
              <img className="carousel__media" src={current.src} alt={`${t.projects.vista} ${index + 1}`} />
            </button>
          )}
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
                onClick={() => go(i)}
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
