import React from 'react';

const SearchHistory = ({ history }) => {
  return (
    <div className="search-history">
      <h2>Historial de Búsquedas</h2>
      {history.length === 0 ? (
        <p>No hay búsquedas recientes.</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchHistory;
