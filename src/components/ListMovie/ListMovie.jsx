import { Link } from "react-router-dom";
import "./ListMovie.css";

export const ListMovie = ({ movies = [], genres = [] }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const monthNames = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];

    return `${date.getDate()} ${
      monthNames[date.getMonth()]
    } ${date.getFullYear()}`;
  };

  return (
    <div>
      <div className="filtro-genero">
        <h2 className="titulo-inicial">
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </h2>
        <p>Filtre por:</p>
        <ul className="lista-genero">
          {genres.map((genre) => (
            <li key={genre.id}>
              <span>{genre.name}</span>
            </li>
          ))}
        </ul>
      </div>
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
              <h2 className="titulo-filme">{movie.title}</h2>
              <p className="data-lacamento">{formatDate(movie.release_date)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
