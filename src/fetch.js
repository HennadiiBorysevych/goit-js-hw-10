const API = 'https://restcountries.com/v3.1/name/';

export default function fetchCountries(countryname) {
  return fetch(`https://restcountries.com/v3.1/name/${countryname}`).then(
    response => {
      return response.json();
    }
  );
}
