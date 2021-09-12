import { useState, useEffect } from 'react'
import { MovieService } from '../services/MovieService'
import { MoviesList } from '../components/MoviesList'
import { MoviesContainer } from '../styles/MoviesContainer'

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const { data } = await MovieService.getMovies();
    setMovies(data.results)
  }

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <MoviesContainer>
      <MoviesList movies={movies} />
    </MoviesContainer>
  );
}

