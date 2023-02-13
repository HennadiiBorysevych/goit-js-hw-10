import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default async function fetchCountries(countryname) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${countryname}?fields=name,capital,population,flags,languages`
  );
  return await response.json();
}
