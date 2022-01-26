import {Link} from "react-router-dom";
import defaultImg from "../images/default_image.jpg"

function EachCharacter (props) {
  

  return (    
    
     <ul className="mai.idn__container--element">
        <li>{props.charactersData.name}</li>
        <li>
            <img className="main__image" src={props.charactersData.image ? props.charactersData.image : defaultImg} alt={props.charactersData.name} title={props.charactersData.name} />
        </li>
        
        <li>Especie: {props.charactersData.species === "human" ? "humano" : props.charactersData.species === "half-giant" ? "Semigigante" : props.charactersData.species ==="werewolf" ? "Hombre lobo" : props.charactersData.species === "ghost" ? "Fantasma" : "No definido" }</li>
        <Link to={`/character-detail/${props.charactersData.id}`}><li>[+ Más detalles]</li></Link>
      </ul>  
  );
};

export default EachCharacter;
