import { useEffect, useState } from 'react';
import { getCountries } from '../services/getCountries';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');
  const [continent, setContinent] = useState('');
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

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
    if (continent === '' && search !== '') {
      return countries.filter((country) => country.name.includes(search));
    }
    if (continent === '') { countries; } else {
      return filterAndSearch();
    }
    if (search === '') { countries; } else {
      return filterAndSearch();
    }

    function filterAndSearch() {
      let filtered = countries.filter((country) => country.continent === continent);
      let searched = filtered.filter((country) => country.name.includes(search));
      return searched; 
    }
    return countries;
  };




  return { filterCountries, error, continent, setContinent, loading, search, setSearch };
}