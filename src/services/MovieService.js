import axios from 'axios'

const API_KEY = "62e65410d6ac7ba2df70137f1993cb64"
const BASE_URL = "https://api.themoviedb.org/3/"
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MovieService {

  static getMovies() {
    return axios(withBaseUrl('movie/popular'))
  }

  static getMoviesById(id) {
    return axios(withBaseUrl(`movie/${id}`))
  }

}
