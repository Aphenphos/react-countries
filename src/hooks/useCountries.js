import { useEffect, useState } from 'react';
import { getCountries } from '../services/getCountries';

export function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      const c = await getCountries();
      setCountries(c);
    }
    fetchCountries();
  }, []);
  return countries;
}