import './App.scss';
import React, { useEffect, useState } from 'react';
import List from './components/list/list';
import { CONTENT_TYPE } from './constants/types';
import { getTrending } from './services/apis';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const prog = await getTrending(CONTENT_TYPE.MOVIE);
      setMovies(prog);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header>To-Watch</header>
      <p>The movie to do list</p>
      <List type={CONTENT_TYPE.MOVIE} content={movies} />
    </div>
  );
};

export default App;
