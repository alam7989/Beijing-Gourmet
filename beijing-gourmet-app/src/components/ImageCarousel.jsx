import { useState, useEffect, useRef } from "react";

const images = [
  "src/assets/images/chow_mein.JPG",
  "src/assets/images/mixed_veggies.JPG",
  "src/assets/images/bbq_pork.JPG",
  "src/assets/images/soup.JPG",
  "src/assets/images/mushu_pork.JPG",
  "src/assets/images/friedrice.JPG",
  "src/assets/images/shrimp.JPG",
  "src/assets/images/beijing_gourmet_meal.jpg"
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const restartAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 3000);
  };

  // Start autoplay
  useEffect(() => {
    restartAutoplay();
    return () => clearInterval(intervalRef.current);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
    restartAutoplay(); // reset the 3-second timer
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl">

      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-full h-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}   // 🔥 clicking resets autoplay above
            className={`w-3 h-3 rounded-full ${
              current === i ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
