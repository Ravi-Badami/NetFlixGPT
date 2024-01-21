import { useEffect, useState } from 'react';
import { API_OPTIONS } from '../utils/constants';

const useRecommendation = (id) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/' + id + '/recommendations?language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();
    setData(json);
  };

  return data;
};
export default useRecommendation;
