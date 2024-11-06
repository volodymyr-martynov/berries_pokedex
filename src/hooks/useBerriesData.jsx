import { useEffect, useState } from "react";

export function useBerriesData() {
  const [items, setItems] = useState([]);
  const [firmnessOptions, setFirmnessOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchItems = async () => {
    const firmnessUrls = {};
    const firmnessFrequency = {};

    try {
      //   TODO: please uncomment, in case you want to see error)
      //   throw new Error("error ");

      // fetch all berries.
      const res = await fetch("https://pokeapi.co/api/v2/berry?limit=64");
      const data = await res.json();

      // fetch all berries details pages
      const fullBerriesSet = await Promise.all(
        data.results.map(
          ({ url }) =>
            new Promise(async (resolve) => {
              const response = await fetch(url);
              resolve(await response.json());
            })
        )
      );

      fullBerriesSet.forEach((berryData) => {
        if (firmnessFrequency[berryData.firmness.name]) {
          firmnessFrequency[berryData.firmness.name]++;
        } else {
          firmnessFrequency[berryData.firmness.name] = 1;
        }

        if (firmnessUrls[berryData.firmness.name] === undefined) {
          firmnessUrls[berryData.firmness.name] = berryData.firmness.url;
        }
      });

      const firmnessFiltersData = await Promise.all(
        Object.keys(firmnessUrls).map(
          (key) =>
            new Promise(async (resolve) => {
              const response = await fetch(firmnessUrls[key]);
              resolve({
                ...(await response.json()),
                quantity: firmnessFrequency[key],
              });
            })
        )
      );

      setFirmnessOptions(firmnessFiltersData.sort((a, b) => b.id - a.id));
      setItems(fullBerriesSet);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return { items, firmnessOptions, error, isLoading };
}
