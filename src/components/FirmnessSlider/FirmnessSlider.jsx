import { useEffect, useState } from "react";
import { dotHeight, firmnessColors } from "./constants";
import styles from "./FirmnessSlider.module.css";

export default function FirmnessSlider({ options, setSelectedFirmness }) {
  const [dotPosition, setDotPosition] = useState(`calc(100% - ${dotHeight}px)`);
  const [dotColor, setDotColor] = useState();

  useEffect(() => {
    if (options.length) {
      const option = options.at(-1);
      setDotColor(firmnessColors[option.id]);
      setSelectedFirmness(option.name);
    }
  }, [options]);

  const onFirmnessLevelChange = (option, index) => {
    return () => {
      const step = 100 / (options.length - 1);

      const percantagePosition = step * index;

      setDotPosition(
        `calc(${percantagePosition}% - ${
          (percantagePosition * dotHeight) / 100
        }px)`
      );
      setDotColor(firmnessColors[option.id]);
      setSelectedFirmness(option.name);
    };
  };

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderBody}>
        <div className={styles.sliderInner}>
          <span
            className={styles.sliderDot}
            style={{ top: `${dotPosition}`, color: dotColor }}
          ></span>
        </div>
      </div>
      <div className={styles.sliderButtonsList}>
        {options.map((option, i) => (
          <button
            key={option.id}
            className={styles.sliderButton}
            style={
              dotColor === firmnessColors[option.id]
                ? { color: dotColor, fontWeight: "bold" }
                : {}
            }
            onClick={onFirmnessLevelChange(option, i)}
          >
            {/* Assume that order will not be changed. */}
            {option.names[4].name}{" "}
            <span className={styles.sliderButtonAmmount}>
              {option.quantity}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
