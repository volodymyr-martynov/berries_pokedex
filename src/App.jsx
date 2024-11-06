import { useState } from "react";
import { FirmnessSlider } from "./components/FirmnessSlider";
import styles from "./App.module.css";
import { BerriesCardsList } from "./components/BerriesCardsList";
import { useMemo } from "react";
import { useBerriesData } from "./hooks/useBerriesData";

function App() {
  const { items, firmnessOptions, isLoading, error } = useBerriesData();

  const [selectedFirmness, setSelectedFirmness] = useState(null);

  const filteredItems = useMemo(() => {
    return items.filter((item) => item.firmness.name === selectedFirmness);
  }, [selectedFirmness, items]);

  return (
    <div>
      {isLoading ? (
        <h1>loading</h1>
      ) : error ? (
        <h1>Something went wrong</h1>
      ) : (
        <>
          <div>
            <h1>Pok`e Berries</h1>
            <span>How tought are you?</span>
          </div>
          <div className={styles.appWrapper}>
            <FirmnessSlider
              options={firmnessOptions}
              setSelectedFirmness={setSelectedFirmness}
            />
            <BerriesCardsList items={filteredItems} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
