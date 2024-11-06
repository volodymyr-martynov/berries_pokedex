import { useState } from "react";
import { BerryCard } from "./components/BerryCard";
import { useEffect } from "react";
import { FirmnessSlider } from "./components/FirmnessSlider";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);

  const fetchItems = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/berry");
      const data = await res.json();

      setItems(data.results);
    } catch (error) {}
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <div>
        <h1>Pok`e Berries</h1>
        <span>How tought are you?</span>
      </div>
      <div className={styles.appWrapper}>
        <FirmnessSlider />
        <div>
          {items.map((item) => (
            <BerryCard key={item.name} name={item.name} url={item.url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
