import "../../App.css";
import Carousel from "../../components/Carousel";
import useGetBuscador from "../../queries/useGetBuscador";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
function Buscador(props) {
  const params = useParams();
  const buscador2 = params.buscador;

  const { data } = useGetBuscador(buscador2);
  const buscador = useMemo(
    () =>
      data?.data?.results?.map((film) => ({
        title: film.title || film.name,
        description: film.overview,
        imageUrl: "https://www.themoviedb.org/t/p/original" + film.poster_path,
        original_language: "Idioma: " + film.original_language,
        popularity: "Popularidad: " + film.popularity,
        vote_average: "Voto promedio: " + film.vote_average,
      })),
    [data?.data]
  );
  useEffect(() => {
    console.log("data", data);
  }, [data]);
  return (
    <div className="App">
      <header className="App-header">
        {buscador?.length > 0 && <Carousel buscador={buscador} />}
      </header>
    </div>
  );
}

export default Buscador;
