import { useEffect, useState } from "react";
import { ListMovie } from "../components/ListMovie";

const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        // setIsLoading(true);
        const res = await fetch(url, {
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
      <ListMovie movies={movies} />
    </div>
  );
};

export default Home;
