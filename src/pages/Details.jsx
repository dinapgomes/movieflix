import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const url = "https://api.themoviedb.org/3/movie";

const Details = () => {
  const { id } = useParams();
  const [detailMovie, setDetailMovie] = useState();

  useEffect(() => {
    async function getMovie() {
      try {
        // setIsLoading(true);
        const res = await fetch(`${url}/${id}`, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTZlYzU2MTUxZDMxY2NkYTkwODgyNWE2MWY1OWY5MiIsInN1YiI6IjY0YTA3NDA0NGE1MmY4MDBjOTk0NmI0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5wk8x7guVIb_Qhk2zgPydKG99VIjgaAV75gufu9zk10",
          },
        });

        const data = await res.json();

        setDetailMovie(data);
        // setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        // setError("Erro ao carregar os dados");
        // setIsLoading(false);
      }
    }
    getMovie();
  }, [id]);

  return (
    <div>
      {detailMovie && (
        <>
          <h2>Detalhes do filme {detailMovie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${detailMovie.poster_path}`}
            alt="imagem-filme"
          />
          <p>Sinopse: {detailMovie.overview}</p>
          <p>Gênero: </p>
          <ul>
            {detailMovie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <p>
            Assista em:{" "}
            <a
              href={detailMovie.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              {detailMovie.homepage}
            </a>
          </p>
        </>
      )}
    </div>
  );
};

export default Details;
