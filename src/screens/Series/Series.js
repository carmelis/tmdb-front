import "../../App.css";
import Carousel from "../../components/Carousel";
import useGetSeries from "../../queries/useGetSeries";
import { useEffect, useMemo } from "react";
import "../../services/tv";

function Series() {
  const { data, isLoading, isError } = useGetSeries();
  const series = useMemo(
    () =>
      data?.data?.results?.map((film) => ({
        name: film.name,
        description: film.overview,
        imageUrl: "https://www.themoviedb.org/t/p/original" + film.poster_path,
        original_language: "Idioma: " + film.original_language,
        popularity: "Popularidad: " + film.popularity,
        vote_average: "Voto promedio: " + film.vote_average,
      })),
    [data?.data]
  );

  return (
    <div className="App">
      <header className="App-header">
        {series?.length > 0 && <Carousel series={series} />}
      </header>
    </div>
  );
}

export default Series;
