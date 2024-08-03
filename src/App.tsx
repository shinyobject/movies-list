import './App.css';
import { movies } from './movies.ts';

function App() {
  return (
    <>
      <h1>Movies on YouTube</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie}>
            <a
              href={`https://youtube.com/results?search_query=${movie.replace(
                ' ',
                '+'
              )}`}
            >
              {movie}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
