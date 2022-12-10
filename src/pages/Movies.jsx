import { getFilmsByQuery } from '../servises/api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList';

export const Movies = () => {
const [movie, setMovies] = useState ([]);
const [query, steQuery] = useState('');

const [params, setParams] = useSearchParams()

useEffect (() => {
  
  const movieName = params.get(`query`);
  if (!movieName) {
    return;
  }
  console.log(movieName)
  getFilmsByQuery(movieName).then(setMovies);

}, [params])

const onChange = (e) => {
steQuery(e.target.value)
}

const onSubmit = (e) => {
e.preventDefault();
setParams({query})
}
 
return <>
<form action="" onSubmit={onSubmit}>
  <input type="text" onChange={onChange}/>
  <button type="submit">Search</button>
 </form>
 <MoviesList movies={movie}/>
 </>;
};
