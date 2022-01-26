import { Link } from "react-router-dom";
import defaultImg from "../images/default_image.jpg"

function CharacterDetails (props) {
  
  return (
    <div>
      <ul>
        <li>{props.characterDetails?.name}</li>
         <li>
          <img
            className="character__img"
            src={props.characterDetails.image ? props.characterDetails.image : defaultImg } alt={props.characterDetails.name} />
        </li>
        <li>Género: {props.characterDetails.gender}</li>
        <li>Especie: {props.characterDetails.species === "human" ? "humano" : props.characterDetails.species === "half-giant" ? "Semigigante" : props.characterDetails.species ==="werewolf" ? "hombre lobo" : props.characterDetails.species === "ghost" ? "Fantasma" : "No definido" }</li>
        <li>Estado: {props.characterDetails.alive ? `Está vivo` : `Está muerto`}</li> 
      </ul>
      <Link to="/">
        <i className="fas fa-arrow-left"></i> Back
      </Link>
    </div>);
};

export default CharacterDetails;