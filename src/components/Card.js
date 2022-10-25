import "../styles/Card.css";
const Card = function ({ title, description, imageUrl }) {
  return (
    <div class="card">
        <br></br>
        <br></br>
      <div class="card-body">
        <h3 class="card-title">{title}</h3>
        <img src={imageUrl} style={{ width: "200px", height: "200px" }} />
        <p class="card-text">{description}</p>
        <button class="btn third">Agregar a favoritos ⭐</button>
      </div>
    </div>
  );
};

export default Card;
