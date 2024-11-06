import { BerryCard } from "../BerryCard";
import styles from "./BerriesCardsList.module.css";

export default function BerriesCardsList({ items }) {
  if (!items.length) {
    return <h3>There is no results for your query.</h3>;
  }

  return (
    <div className={styles.list}>
      {items.map((item) => (
        <BerryCard key={item.id} item={item} />
      ))}
    </div>
  );
}
