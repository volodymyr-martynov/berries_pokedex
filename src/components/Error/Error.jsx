import styles from "./Error.module.css";

export default function Error() {
  return (
    <div className={styles.errorWrapper}>
      <h1>Something went wrong. Try again latter.</h1>
    </div>
  );
}
