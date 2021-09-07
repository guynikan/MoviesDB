import { Header } from "./components/Header"
import { MoviesList } from './components/MoviesList'
import { MoviesContainer } from './styles/MoviesContainer'

function App() {
  return (
    <div className="App">
      <Header />

      <MoviesContainer>
        <MoviesList movies={[{ titulo: 'teste' }]} />
      </MoviesContainer>
    </div>
  );
}

export default App;
