import { useEffect, useState } from 'react';
import { getCountries } from '../services/getCountries';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');
  const [continent, setContinent] = useState('All');

  useEffect(() => {
    async function fetchCountries() {
      try {
        const c = await getCountries();
        setCountries(c);
      } catch (e) {
        setError(e.message);
      }
    }
    fetchCountries();
  }, []);

  const filterCountries = () => {
    if (continent === 'All') return countries;
    return countries.filter((country) => country.continent === continent);
  };

  return { filterCountries, error, continent, setContinent };
}