import { useEffect, useState } from 'react';
import { getCountries } from '../services/getCountries';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');
  const [continent, setContinent] = useState('All');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCountries() {
      try {
        setLoading(true);
        const c = await getCountries();
        setCountries(c);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(e.message);
      }
    }
    fetchCountries();
  }, []);

  const filterCountries = () => {
    if (continent === 'All') return countries;
    return countries.filter((country) => country.continent === continent);
  };

  return { filterCountries, error, continent, setContinent, loading };
}