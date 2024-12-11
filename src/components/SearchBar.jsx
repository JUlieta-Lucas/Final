import React from 'react';

const SearchBar = ({ setSearchQuery, onSearch }) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') onSearch(); // Permitir búsqueda con "Enter"
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Escribe el nombre de un país..."
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={onSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
