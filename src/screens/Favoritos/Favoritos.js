import "../../App.css";
import Carousel from "../../components/Carousel";
import { useEffect, useMemo, useState } from "react";
import { useAuthenticationData } from "../../contexts/authentication";
import axios from "axios";
function Favoritos() {
  const authenticationData = useAuthenticationData();
  const [favorito, setFavorito] = useState([]);
  console.log(authenticationData);
  useEffect(() => {
    if (!authenticationData.authenticationData?.user?.id) return;
    axios
      .get(
        `http://localhost:3001/api/favorites/${authenticationData.authenticationData?.user?.id}`
      )
      .then((favorites) => setFavorito(favorites.data.favoritos));
  }, []);

  const favoritos = useMemo(
    () =>
      favorito.map((film) => ({
        title: film.title,
        description: film.overview,
        imageUrl: "https://www.themoviedb.org/t/p/original" + film.poster_path,
      })),
    [favorito]
  );

  return (
    <div className="App">
      <header className="App-header">
        {favoritos?.length > 0 && <Carousel favoritos={favoritos} />}
      </header>
    </div>
  );
}

export default Favoritos;
