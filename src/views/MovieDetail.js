import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MovieService } from '../services/MovieService'

export const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    const { data } = await MovieService.getMoviesById(id);
    setMovie(data)
    console.log('aqui', data)
  }

  useEffect(() => {
    fetchMovie();
  }, [])

  return (
    <h1>{movie.title}</h1>
  )
}
