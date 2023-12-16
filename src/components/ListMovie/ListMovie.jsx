import { Link } from "react-router-dom";
import { FiltroGenero, ListaFilmes, ListaGenero, Title } from "./styles";

export const ListMovie = ({ movies = [], genres = [], onClick = () => {} }) => {
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
      <FiltroGenero>
        <Title>
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </Title>
        <p>Filtre por:</p>
        <ListaGenero>
          {genres.map((genre) => (
            <li key={genre.id} onClick={() => onClick(genre.id)}>
              <span>{genre.name}</span>
            </li>
          ))}
        </ListaGenero>
      </FiltroGenero>
      <ListaFilmes>
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
      </ListaFilmes>
    </div>
  );
};
