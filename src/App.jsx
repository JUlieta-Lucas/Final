import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';
import SearchHistory from './components/SearchHistory';

const App = () => {
  const [controlador, setControlador] = useState('');
  const [paises, setPaises] = useState([]);
  const [historial, setHistorial] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!controlador.trim()) {
      setError('Por favor, ingresa un término para buscar.');
      return;
    }

    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${controlador}`);
      if (!response.ok) throw new Error('No se encontraron países.');
      const data = await response.json();
      setPaises(data);
      setError(null);

    
      setHistorial((prevHistory) => {
        const updatedHistory = [controlador, ...prevHistory.filter((item) => item !== controlador)];
        return updatedHistory.slice(0, 5); 
      });
    } catch (err) {
      setError(err.message);
      setPaises([]);
    }
  };

  return (
    <div className="app-container">
      <h1>Buscador de Países</h1>
      <SearchBar setSearchQuery={setControlador} onSearch={handleSearch} />
      {error ? <p className="error">{error}</p> : <CountryList countries={paises} />}
      <SearchHistory history={historial} />
    </div>
  );
};

export default App;
