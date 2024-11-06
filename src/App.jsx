import { useState } from "react";
import { FirmnessSlider } from "./components/FirmnessSlider";
import styles from "./App.module.css";
import { BerriesCardsList } from "./components/BerriesCardsList";
import { useMemo } from "react";
import { useBerriesData } from "./hooks/useBerriesData";
import { Loading } from "./components/Loading";
import { Error } from "./components/Error";
import SearchInput from "./components/SearchInput/SearchInput";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const { items, firmnessOptions, isLoading, error } = useBerriesData();

  const [selectedFirmness, setSelectedFirmness] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (debouncedSearchValue) {
        return (
          item.firmness.name === selectedFirmness &&
          item.name.includes(debouncedSearchValue)
        );
      } else {
        return item.firmness.name === selectedFirmness;
      }
    });
  }, [selectedFirmness, items, debouncedSearchValue]);

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className={styles.container}>
      <h1>Pok`e Berries</h1>
      <h4>How tought are you?</h4>
      <div className={styles.appWrapper}>
        <FirmnessSlider
          options={firmnessOptions}
          setSelectedFirmness={setSelectedFirmness}
        />
        <div className={styles.appContent}>
          <SearchInput value={searchValue} setSearchValue={setSearchValue} />
          <BerriesCardsList items={filteredItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
