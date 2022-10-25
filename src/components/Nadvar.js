import { Link } from "react-router-dom";
import { useAuthenticationData } from "../contexts/authentication";
import movies from "../screens/Movies/Movies";
import "../styles/Nadvar.css";

const Navbar = () => {
  const {authenticationData} = useAuthenticationData()
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">

          <Link to="/">
          <a class="navbar-brand nav-link" href="#">
            TMDB
          </a>
          </Link>

          <div class="navbar-nav">
            <Link to="/movies" >
            <a class="nav-link" href="">
              Peliculas
            </a>
            </Link>

            <Link to="series">
            <a class="nav-link" href="#">
              Series
            </a>
            </Link>

            <Link to="favoritos">
            <a class="nav-link" href="#">
              Favoritos
            </a>
            </Link>

            <a>
            <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"></input>
            <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
            </a>
          </div>


      {/* aca voy a ahcer un condicional que si el usuario existe, lo deje guardado y si no existe, diga login*/}

      <div className="navbar-item navbar-end">
        {!!authenticationData ? (
          <p className="has-text-white">{authenticationData.user.username}</p>
        ) : (
          <Link
            to="/login"
            className="button"
            >
            <strong>Sign up</strong>
          </Link>
         )} 
            </div>
      </div>
      </nav>
    </div>
  );
};

export default Navbar;
