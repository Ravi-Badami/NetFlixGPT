import { useEffect, useState } from 'react';

import { API_OPTIONS } from '../utils/constants';

const useMovieDetails = (id) => {
  const [data, setData] = useState('');
  console.log(id);
  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/' + id + '?language=en-US',
      API_OPTIONS
    );
    const json = await data.json();
    setData(json);
  };

  console.log(data);
  return data;
};

export default useMovieDetails;
