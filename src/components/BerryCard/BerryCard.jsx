import styles from "./BerryCard.module.css";
import BerryIcon from "../../assets/berry_icon.svg";

export default function BerryCard({ name, url }) {
  // console.log("url");
  return (
    <div className={styles.card}>
      <div className={styles.cardTitleBlock}>
        <div className={styles.berryIconWrapper}>
          <img src={BerryIcon} alt={name} className={styles.berryIcon} />
        </div>
        <h3>{name}</h3>
      </div>
      <ul className={styles.cardChipsList}>
        <li className={styles.cardChip}>spicy</li>
        <li className={styles.cardChip}>sour</li>
      </ul>
    </div>
  );
}
