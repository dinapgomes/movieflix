import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./Details.css";
import Card from "../components/Card/Card";
import CardRecommendation from "../components/CardRecommendation/CardRecommendation";

const url = "https://api.themoviedb.org/3/movie";

const Details = () => {
  const { id } = useParams();
  const [detailMovie, setDetailMovie] = useState();
  const [actorMovie, setActorMovie] = useState();
  const [trailer, setTrailer] = useState();
  const [recommendations, setRecommendations] = useState();
  const [error, setError] = useState(null);

  //url details movie
  useEffect(() => {
    getMovie();
    getActor();
    getTailer();
    getRecommendations();
  }, [id]);

  const getMovie = async () => {
    try {
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
    } catch (error) {
      console.log(error.message);
      setError("Erro ao carregar os dados");
    }
  };
  //url details actor
  const getActor = async () => {
    try {

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
    } catch (error) {
      console.log(error.message);
      setError("Erro ao carregar os dados");
    }
  };

  //url details Trailer
  const getTailer = async () => {
    try {
      const res = await fetch(`${url}/${id}/videos`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTZlYzU2MTUxZDMxY2NkYTkwODgyNWE2MWY1OWY5MiIsInN1YiI6IjY0YTA3NDA0NGE1MmY4MDBjOTk0NmI0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5wk8x7guVIb_Qhk2zgPydKG99VIjgaAV75gufu9zk10",
        },
      });

      const dataTrailer = await res.json();

      setTrailer(dataTrailer.results);
    } catch (error) {
      console.log(error.message);
      setError("Erro ao carregar os dados");
    }
  };

  //url details Recomendação
  const getRecommendations = async () => {
    try {
      const res = await fetch(`${url}/${id}/recommendations`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTZlYzU2MTUxZDMxY2NkYTkwODgyNWE2MWY1OWY5MiIsInN1YiI6IjY0YTA3NDA0NGE1MmY4MDBjOTk0NmI0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5wk8x7guVIb_Qhk2zgPydKG99VIjgaAV75gufu9zk10",
        },
      });

      const dataRecommendations = await res.json();

      setRecommendations(dataRecommendations.results.slice(0, 5));
    } catch (error) {
      console.log(error.message);
      setError("Erro ao carregar os dados");
    }
  };

  return (
    <div className="details">
      <div className="detalhar-filme">
        {error && <p>{error}</p>}
        {detailMovie && (
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

        )}
      </div>
      <div className="mais-info">
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

        <div className="detail-video">
          <h2>Trailer</h2>
          {trailer && (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${trailer[0].key}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          )}
        </div>
        <div className="card-recomendacao">
          <h2>Recomendações</h2>
          <CardRecommendation recommendations={recommendations} />
        </div>
      </div>
    </div>
  );
};

export default Details;
