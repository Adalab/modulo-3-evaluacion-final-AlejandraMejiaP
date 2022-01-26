import {Link} from "react-router-dom";
import defaultImg from "../images/default_image.jpg"

function EachCharacter (props) {
  

  return (    
    
     <ul className="main__section--element">
        <li className="main__section--name" >{props.charactersData.name}</li>
        <li className="main__section--list">
            <img className="main__section--image" src={props.charactersData.image ? props.charactersData.image : defaultImg} alt={props.charactersData.name} title={props.charactersData.name} />
        </li>
        
        <li className="main__section--list">{props.charactersData.species === "human" ? "Humano/a" : props.charactersData.species === "half-giant" ? "Semigigante" : props.charactersData.species ==="werewolf" ? "Hombre lobo" : props.charactersData.species === "ghost" ? "Fantasma" : "No definido" }</li>
        <Link to={`/character-detail/${props.charactersData.id}`}><li><i class="fas fa-magic"></i> Más info</li></Link>
      </ul>  
  );
};

export default EachCharacter;
