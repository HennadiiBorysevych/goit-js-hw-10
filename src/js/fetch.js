import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function fetchCountries(countryname) {
  return fetch(
    `https://restcountries.com/v3.1/name/${countryname}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      throw new Error(
        Notify.failure('Oops, there is no country with that name')
      );
    }
    return response.json();
  });
}
