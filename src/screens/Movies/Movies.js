import "../../App.css";
import Carousel from "../../components/Carousel";
import useGetMovies from "../../queries/useGetMovies";
import { useEffect, useMemo } from "react";
function Movies() {
  const { data, isLoading, isError } = useGetMovies();
  const movies = useMemo(
    () =>
      data?.data?.results?.map((film) => ({
        title: film.title,
        description: film.overview,
        imageUrl: "https://www.themoviedb.org/t/p/original" + film.poster_path,
        original_language: "Idioma:" + film.original_language,
        popularity: "Popularidad:" + film.popularity,
        release_date: "Fecha de estreno" + film.release_date,
        vote_average: "Voto promedio:" + film.vote_average,
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

export default Movies;
