import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import axios from 'axios';
import Search from './components/ui/Search';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setCharacters(result.data);
      setLoading(false);
    };

    fetchCharacters();
  }, [query]);

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
};

export default App;
