"use client";

import { useEffect, useMemo, useState } from "react";

const TRENDING_ITEMS = [
  { name: "Granite", mediaClass: "trend-granite" },
  { name: "White Marble", mediaClass: "trend-white", swatchClass: "swatch-white" },
  { name: "Black Marble", mediaClass: "trend-black", swatchClass: "swatch-black" },
  { name: "Sky Blue", mediaClass: "trend-blue", swatchClass: "swatch-blue" },
];

function getVisibleCards(width) {
  if (width <= 640) return 1;
  if (width <= 980) return 2;
  return 3;
}

export default function TrendingSlider() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      const nextVisibleCards = getVisibleCards(window.innerWidth);
      const nextMaxIndex = Math.max(TRENDING_ITEMS.length - nextVisibleCards, 0);
      setVisibleCards(nextVisibleCards);
      setActiveIndex((prev) => Math.min(prev, nextMaxIndex));
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxIndex = useMemo(
    () => Math.max(TRENDING_ITEMS.length - visibleCards, 0),
    [visibleCards]
  );

  const gapRem = 0.85;
  const cardBasis = `calc((100% - ${(visibleCards - 1) * gapRem}rem) / ${visibleCards})`;
  const trackTransform = `translateX(calc(-${activeIndex} * (${cardBasis} + ${gapRem}rem)))`;

  return (
    <section className="trending-section">
      <h2 className="section-title">TRENDING COLLECTION</h2>

      <div className="trending-gallery">
        <div
          className="trending-track"
          style={{ gap: `${gapRem}rem`, transform: trackTransform }}
        >
          {TRENDING_ITEMS.map((item) => (
            <article className="trending-card" key={item.name} style={{ flexBasis: cardBasis }}>
              <div className={`trending-media ${item.mediaClass}`}>
                {item.swatchClass ? (
                  <span className={`trending-swatch ${item.swatchClass}`} aria-hidden="true" />
                ) : null}
              </div>
              <p>{item.name}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="trending-nav">
        <button
          type="button"
          className="trending-nav-btn"
          onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
          disabled={activeIndex === 0}
          aria-label="Previous trending collection slide"
        >
          &larr;
        </button>
        <button
          type="button"
          className="trending-nav-btn"
          onClick={() => setActiveIndex((prev) => Math.min(prev + 1, maxIndex))}
          disabled={activeIndex === maxIndex}
          aria-label="Next trending collection slide"
        >
          &rarr;
        </button>
      </div>
    </section>
  );
}
