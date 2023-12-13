import { useEffect, useState } from "react";
import { ListMovie } from "../components/ListMovie/ListMovie";

const urlFilme =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const urlGenero = "https://api.themoviedb.org/3/genre/movie/list";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  //Url dos gêneros
  useEffect(() => {
    async function getGenres() {
      try {
        // setIsLoading(true);
        const resGenres = await fetch(urlGenero, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTZlYzU2MTUxZDMxY2NkYTkwODgyNWE2MWY1OWY5MiIsInN1YiI6IjY0YTA3NDA0NGE1MmY4MDBjOTk0NmI0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5wk8x7guVIb_Qhk2zgPydKG99VIjgaAV75gufu9zk10",
          },
        });

        const data = await resGenres.json();

        setGenres(data.genres);
        // setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        // setError("Erro ao carregar os dados");
        // setIsLoading(false);
      }
    }
    getGenres();
  }, []);

  //Url dos filmes
  useEffect(() => {
    async function getData() {
      try {
        // setIsLoading(true);
        const res = await fetch(urlFilme, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTZlYzU2MTUxZDMxY2NkYTkwODgyNWE2MWY1OWY5MiIsInN1YiI6IjY0YTA3NDA0NGE1MmY4MDBjOTk0NmI0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5wk8x7guVIb_Qhk2zgPydKG99VIjgaAV75gufu9zk10",
          },
        });

        const data = await res.json();

        setMovies(data.results);
        // setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        // setError("Erro ao carregar os dados");
        // setIsLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <ListMovie movies={movies} genres={genres} />
    </div>
  );
};

export default Home;
