import { useState } from "react";
import { FirmnessSlider } from "./components/FirmnessSlider";
import styles from "./App.module.css";
import { BerriesCardsList } from "./components/BerriesCardsList";
import { useMemo } from "react";
import { useBerriesData } from "./hooks/useBerriesData";
import { Loading } from "./components/Loading";
import { Error } from "./components/Error";

function App() {
  const { items, firmnessOptions, isLoading, error } = useBerriesData();

  const [selectedFirmness, setSelectedFirmness] = useState(null);

  const filteredItems = useMemo(() => {
    return items.filter((item) => item.firmness.name === selectedFirmness);
  }, [selectedFirmness, items]);

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
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
  );
}

export default App;
