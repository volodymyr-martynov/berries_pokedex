import { useState, useEffect, useRef } from "react";

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState("");
  const timer = useRef();

  useEffect(() => {
    timer.current = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timer.current);
    };
  }, [value, delay]);

  return debouncedValue;
}
