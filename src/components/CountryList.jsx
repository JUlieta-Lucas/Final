import React from 'react';

const CountryList = ({ countries }) => {
  if (countries.length === 0) {
    return <p>No hay resultados para mostrar.</p>;
  }

  return (
    <div className="country-list">
      {countries.map((country) => (
        <div key={country.cca3} className="country-card">
          <h2>{country.name.common}</h2>
          <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
          <p><strong>Población:</strong> {country.population.toLocaleString()}</p>
          <img src={country.flags.png} alt={`Bandera de ${country.name.common}`} />
        </div>
      ))}
    </div>
  );
};

export default CountryList;
