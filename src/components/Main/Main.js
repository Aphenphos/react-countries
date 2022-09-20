import { useCountries } from '../../hooks/useCountries';
import CountryCard from '../CountryCard';
import './Main.css';

export default function Main() {
  const { filterCountries, error, setContinent, continent, loading, search, setSearch } = useCountries();
  if (loading === true) {
    return (
      <h1>Loading Loading Loading Loading Loading Loading Loading Loading Loading Loading </h1>
    );
  }
  return (
    <main>
      <p className='error'>{error}</p>

      <input type="text" value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}></input>
      <select
        value={continent}
        onChange={(e) => {
          setContinent(e.target.value);
        }}
      >
        <option value="">All</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctica">Antarctica</option>
      </select>
      <div id="country-container">
        {filterCountries().map((country) => (
          <CountryCard key={country.id} {...country}></CountryCard>
        ))}
      </div>
    </main>
  );
}