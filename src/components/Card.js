import "../styles/Card.css";
import { useContext, useState , useNavigate} from "react";
import axios from "axios";
import { useAuthenticationData } from "../contexts/authentication";
const Card = function ({ title, description, imageUrl, popularity , original_language,vote_average, favoritos}) {
  const [favorito, setFavoritos]= useState({})
  const { authenticationData, setAuthenticationData } = useAuthenticationData();
  const id = authenticationData?.user?.id



  const handlerFavorito=()=>{
    console.log("este es el id", authenticationData)
    setFavoritos({title, description, imageUrl, popularity})
    axios.post("http://localhost:3001/api/favorites", {id, title, description, imageUrl,
    original_language,vote_average}  )
  }


//console.log("holaCard", authenticationData)
  return (
    <div class="card">
        <br></br>
      <div class="card-body">
        <h3 class="card-title">{title}</h3>
        <img src={imageUrl} style={{ width: "200px", height: "200px" }} />
        <p class="card-text">{description}</p>
        <p>{popularity}</p>
        <p>{original_language}</p>
        <p>{vote_average}</p>
        {(!favoritos?.find((movie)=>movie.title==title)) ? (<button  onClick={handlerFavorito} class="btn third">Agregar a favoritos ⭐</button>) : (null)}
        
      </div>
    </div>
  );
};

export default Card;
