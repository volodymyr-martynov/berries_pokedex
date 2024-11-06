import styles from "./BerryCard.module.css";
import BerryIcon from "../../assets/berry_icon.svg";

export default function BerryCard({ item }) {
  const { flavors, name } = item;

  return (
    <div className={styles.card}>
      <div className={styles.cardTitleBlock}>
        <div className={styles.berryIconWrapper}>
          <img src={BerryIcon} alt={name} className={styles.berryIcon} />
        </div>
        <h3>{name}</h3>
      </div>
      <ul className={styles.cardChipsList}>
        {flavors.map(
          ({ flavor, potency }) =>
            potency > 0 && (
              <li key={flavor.name} className={styles.cardChip}>
                {flavor.name}
              </li>
            )
        )}
      </ul>
    </div>
  );
}
