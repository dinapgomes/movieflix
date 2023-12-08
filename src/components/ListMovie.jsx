import { Link } from "react-router-dom";
import "./ListMovie.css";

export const ListMovie = ({ movies = [] }) => {
  return (
    <div>
      <h2 className="titulo-inicial">Os 20 filmes mais populares do momento</h2>
      <ul className="lista-filmes">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              to={`details/${movie.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="imagem-filme"
              />
              <h2>{movie.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
