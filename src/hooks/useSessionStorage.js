import { useEffect, useState } from "react";

export function useSessionStorage(key, value) {
  const [session, setSession] = useState(function setStorage() {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? storedValue : value;
  });
  useEffect(
    function () {
      sessionStorage.setItem(key, value);
    },
    [value, key]
  );
  return { session, setSession };
}
