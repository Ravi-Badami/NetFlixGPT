import { useEffect, useState } from 'react';

import { API_OPTIONS } from '../utils/constants';

const useMovieDetails = (id) => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  const fetchMovieDetails = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/' + id + '?language=en-US',
      API_OPTIONS
    );
    const json = await data.json();
    setData(json);
  };

  return data;
};

export default useMovieDetails;
