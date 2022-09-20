import { useCountries } from '../../hooks/useCountries';
import CountryCard from '../CountryCard';

export default function Main() {
  const { filterCountries, error, setContinent, continent } = useCountries();

  return (
    <main>
      <p className='error'>{error}</p>
      <select
        value={continent}
        onChange={(e) => {
          setContinent(e.target.value);
        }}
      >
        <option value="All">All</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
      </select>
      {filterCountries().map((country) => (
        <CountryCard key={country.id} {...country}></CountryCard>
      ))}
    </main>
  );
}