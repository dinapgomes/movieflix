import { useEffect, useState } from "react";
import { ListMovie } from "../components/ListMovie/ListMovie";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

const urlFilme = "https://api.themoviedb.org/3/movie/popular?language=en-US";
const urlGenero = "https://api.themoviedb.org/3/genre/movie/list";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

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
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [currentPage]);

  const getData = async () => {
    try {
      // setIsLoading(true);
      const res = await fetch(`${urlFilme}&page=${currentPage}`, {
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
  };

  return (
    <div>
      <ListMovie movies={movies} genres={genres} />
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;
