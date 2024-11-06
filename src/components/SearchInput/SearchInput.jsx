import styles from "./SearchInput.module.css";

export default function SearchInput({ value, setSearchValue }) {
  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        onChange={onSearchChange}
        value={value}
        className={styles.input}
        placeholder="Search by name..."
      />
    </div>
  );
}
