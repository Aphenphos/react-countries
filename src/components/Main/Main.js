import { useCountries } from '../../hooks/useCountries';
import CountryCard from '../CountryCard';

export default function Main() {
  const countries = useCountries();

  return (
    <main>
      {countries.map((country) => (
        <CountryCard key={country.id} {...country}></CountryCard>
      ))}
    </main>
  );
}