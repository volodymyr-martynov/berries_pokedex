import { useRef } from "react";
import { useState } from "react";
import styles from "./FirmnessSlider.module.css";

const firmnessButtonsConfig = [
  {
    title: "Super Hard",
    id: "super_hard",
    color: "red",
  },
  {
    title: "Hard",
    id: "hard",
    color: "orange",
  },
  {
    title: "Soft",
    id: "soft",
    color: "green",
  },
  {
    title: "Very Soft",
    id: "very_soft",
    color: "lightgreen",
  },
];

export default function FirmnessSlider() {
  const [dotPosition, setDotPosition] = useState(100);
  const [dotColor, setDotColor] = useState(firmnessButtonsConfig.at(-1).color);

  const total = useRef(firmnessButtonsConfig.length);

  const onFirmnessLevelChange = (color, index) => {
    return () => {
      const step = 100 / (total.current - 1);
      //   console.log("index", index, step, step * index);

      const newDotPosition = step * index;

      setDotPosition(newDotPosition);
      setDotColor(color);
    };
  };

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderBody}>
        <span
          className={styles.sliderDot}
          style={{ top: `${dotPosition}%`, color: dotColor }}
        ></span>
      </div>
      <div className={styles.sliderButtonsList}>
        {firmnessButtonsConfig.map((fbc, i) => (
          <button
            key={fbc.id}
            className={styles.sliderButton}
            style={
              dotColor === fbc.color
                ? { color: dotColor, fontWeight: "bold" }
                : {}
            }
            onClick={onFirmnessLevelChange(fbc.color, i)}
          >
            {fbc.title} <span className={styles.sliderButtonAmmount}>1</span>
          </button>
        ))}
      </div>
    </div>
  );
}
