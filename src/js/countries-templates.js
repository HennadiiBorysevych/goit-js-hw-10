export function handleCountriesMarkUpList(options) {
  return options.reduce(
    (str, el) =>
      str +
      `<li class="country__item"><img class="country__img" src="${el.flags.svg}" alt="${el.flags.alt}"><p>${el.name.official}</p></li>`,
    ''
  );
}
export function handlechosenCountryInfo(country) {
  return country.reduce((str, el) => {
    const { flags, name, population, capital, languages } = el;
    const langs = Object.values(languages);

    str += `<ul>
      <li class="country__item--info">
      <div class="country-wrapper">
      <img class="country__img" src="${flags.svg}" alt="${flags.alt}">
      <h2>${name.official}</h2>
      </div>
      <p class="country__text"><span class="country__item--accent">Capital:</span> ${capital}</p>
      <p class="country__text"><span class="country__item--accent">Population:</span> ${population}</p>
      <p class="country__text"><span class="country__item--accent">Languages:</span> ${langs}</p>
      </li>
      </ul>`;
    console.log(str);
    return str;
  }, '');
}
