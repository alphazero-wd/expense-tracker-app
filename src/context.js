import React, { useState, useContext, useEffect, useCallback } from 'react';
// make sure to use https
export const url = `http://www.omdbapi.com/?apikey=861edbb5`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [value, setValue] = useState('batman');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({ isError: false, msg: '' });
  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}&s=${value}`);
      const data = await res.json();
      const { Search, Response, Error } = data;

      if (Response === 'True') {
        setMovies(Search);
        setError({ isError: false, msg: '' });
      } else {
        setError({ isError: true, msg: Error });
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, [value]);
  useEffect(() => fetchMovies(), [fetchMovies]);
  useEffect(() => fetchMovies(), [value, fetchMovies]);
  return (
    <AppContext.Provider
      value={{ value, setLoading, setValue, loading, movies, error }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
