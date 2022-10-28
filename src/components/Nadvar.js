import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthenticationData } from "../contexts/authentication";
import "../styles/Nadvar.css";

const Navbar = () => {
  const { authenticationData, setAuthenticationData } = useAuthenticationData();
  const navigate = useNavigate();
  const [buscador, setBuscador] = useState("");

  const handlerBuscador = (evento) => {
    setBuscador(evento.target.value);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    navigate(`/buscador/${buscador}`);
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="navbar-nav">
            <Link to="/movies">
              <a class="nav-link" href="">
                Peliculas
              </a>
            </Link>

            <Link to="series">
              <a class="nav-link" href="#">
                Series
              </a>
            </Link>

            <Link to="favorites">
              <a class="nav-link" href="#">
                Favoritos
              </a>
            </Link>

            <form onSubmit={handleSubmit} class="d-flex" role="search">
              <input
                onChange={handlerBuscador}
                class="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>


          <div className="navbar-item navbar-end">
            {!!authenticationData ? (
              <>
                <p class="nombre" className="has-text-white">
                  {authenticationData.user.username}
                </p>
                <button onClick={() => setAuthenticationData(null)} class="btn">
                  {" "}
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="button">
                  <strong>Sign up</strong>
                </Link>
                <Link to="/signin">
                  <strong>Sign in</strong>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
