import { useEffect, useRef, useState, useCallback } from "react";
import "./styles.css";

const SLIDE_DATA = [
  {
    id: "a1",
    src: "https://placehold.co/600x400?text=Slide+1",
    alt: "Ocean view with waves",
  },
  {
    id: "b2",
    src: "https://placehold.co/600x400?text=Slide+2",
    alt: "Snowy mountain peak",
  },
  {
    id: "c3",
    src: "https://placehold.co/600x400?text=Slide+3",
    alt: "Desert dunes at sunset",
  },
];

// Custom Hook to encapsulate logic (Separation of Concerns)
function useCarousel(length, delay, autoSlide) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === length - 1 ? 0 : prev + 1));
  }, [length]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === 0 ? length - 1 : prev - 1));
  }, [length]);

  useEffect(() => {
    if (!autoSlide || isPaused || length <= 1) return;

    const timer = setInterval(nextSlide, delay);
    // CLEANUP: Prevents memory leaks
    return () => clearInterval(timer);
  }, [nextSlide, delay, autoSlide, isPaused, length]);

  return { activeSlide, setActiveSlide, nextSlide, prevSlide, setIsPaused };
}

function SlideShow({ slides = SLIDE_DATA, autoSlide = true, delay = 3000 }) {
  const { activeSlide, setActiveSlide, nextSlide, prevSlide, setIsPaused } =
    useCarousel(slides.length, delay, autoSlide);

  // Defensive check for empty data
  if (!slides || slides.length === 0) return <p>No slides available.</p>;

  return (
    <div
      className="carousel-root"
      style={{ maxWidth: "800px", margin: "0 auto" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="slide-viewport"
        style={{
          overflow: "hidden",
          position: "relative",
          borderRadius: "8px",
        }}
      >
        {/* The "Track" - uses transform for GPU acceleration */}
        <div
          className="img-track"
          style={{
            display: "flex",
            transform: `translateX(-${activeSlide * 100}%)`,
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {slides.map((item) => (
            <img
              key={item.id}
              src={item.src}
              alt={item.alt}
              style={{ width: "100%", flexShrink: 0, objectFit: "cover" }}
            />
          ))}
        </div>

        {/* Semantic buttons for Accessibility */}
        <button
          className="nav-btn prev"
          onClick={prevSlide}
          aria-label="Previous slide"
          style={{ ...btnStyle, left: "10px" }}
        >
          ❮
        </button>
        <button
          className="nav-btn next"
          onClick={nextSlide}
          aria-label="Next slide"
          style={{ ...btnStyle, right: "10px" }}
        >
          ❯
        </button>
      </div>

      {/* Pagination Dots */}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              ...dotStyle,
              backgroundColor: activeSlide === idx ? "#333" : "#ccc",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const btnStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(0,0,0,0.5)",
  color: "white",
  border: "none",
  padding: "12px",
  cursor: "pointer",
  borderRadius: "50%",
};

const dotStyle = {
  height: "12px",
  width: "12px",
  margin: "0 5px",
  border: "none",
  borderRadius: "100%",
  cursor: "pointer",
  display: "inline-block",
};

export default SlideShow;
