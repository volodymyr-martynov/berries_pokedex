import { BerryCard } from "../BerryCard";
import styles from "./BerriesCardsList.module.css";

export default function BerriesCardsList({ items }) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <BerryCard key={item.id} item={item} />
      ))}
    </div>
  );
}
