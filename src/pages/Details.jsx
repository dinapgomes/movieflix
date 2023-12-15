import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./Details.css";
import Card from "../components/Card/Card";

const url = "https://api.themoviedb.org/3/movie";

const Details = () => {
  const { id } = useParams();
  const [detailMovie, setDetailMovie] = useState();
  const [actorMovie, setActorMovie] = useState();

  //url details movie
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

  //url details actor
  useEffect(() => {
    async function getActor() {
      try {
        // setIsLoading(true);
        const res = await fetch(`${url}/${id}/credits`, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTZlYzU2MTUxZDMxY2NkYTkwODgyNWE2MWY1OWY5MiIsInN1YiI6IjY0YTA3NDA0NGE1MmY4MDBjOTk0NmI0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5wk8x7guVIb_Qhk2zgPydKG99VIjgaAV75gufu9zk10",
          },
        });

        const dataActor = await res.json();

        setActorMovie(dataActor);
        // setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        // setError("Erro ao carregar os dados");
        // setIsLoading(false);
      }
    }

    getActor();
  }, [id]);

  return (
    <div className="details">
      <div className="detalhar-filme">
        {detailMovie && (
          <>
            <div className="img-info">
              <div className="img-filme">
                <img
                  src={`https://image.tmdb.org/t/p/w500${detailMovie.poster_path}`}
                  alt="imagem-filme"
                />
              </div>
              <div className="info-filme">
                <h2>{detailMovie.title}</h2>
                <div className="avaliacao">
                  <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbar
                      value={detailMovie.vote_average}
                      minValue={0}
                      maxValue={10}
                      text={`${detailMovie.vote_average * 10}%`}
                      styles={buildStyles({
                        textSize: "16px",
                        textColor: "#14FF00",
                        pathColor: "#14FF00",
                        trailColor: "rgba(0, 0, 0, 0)",
                      })}
                    />
                  </div>
                  <p>Avaliação dos usuários</p>
                </div>
                <h3>Sinopse </h3>
                <p>{detailMovie.overview}</p>
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
              </div>
            </div>
          </>
        )}
      </div>
      <div className="card-div">
        <ul className="card-actor">
          {actorMovie &&
            actorMovie.cast
              .filter((actor) => actor.known_for_department === "Acting")
              .map((actor) => (
                <li key={actor.id}>
                  <Card actor={actor} />
                </li>
              ))}
        </ul>
      </div>
      <div>
        <h2>Trailer</h2>
      </div>
    </div>
  );
};

export default Details;
