import "../../App.css";
import Carousel from "../../components/Carousel";
import useGetMovies from "../../queries/useGetMovies";
import { useEffect, useMemo } from "react";
function Home() {
  const { data, isLoading, isError } = useGetMovies();
  const movies = useMemo(
    () =>
      data?.data?.results?.map((film) => ({
        title: film.title,
        description: film.overview,
        imageUrl: "https://www.themoviedb.org/t/p/original" + film.poster_path,
      })),
    [data?.data]
  );

  return (
    <div className="App">
      <header className="App-header">
        {movies?.length > 0 && <Carousel movies={movies} />}
      </header>
    </div>
  );
}

export default Home;
