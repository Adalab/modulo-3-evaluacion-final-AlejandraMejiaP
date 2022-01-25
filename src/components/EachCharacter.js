import {Link} from "react-router-dom";

function EachCharacter (props) {
  return (
    
     <ul className="main__container--element">
        <li>{props.charactersData.name}</li>
        <li>
            <img className="main__image" src={props.charactersData.image} alt={props.charactersData.name} title={props.charactersData.name} />
        </li>
        <li>Especie: {props.charactersData.species}</li>
        <Link to={`/character-detail/${props.charactersData.id}`}><li>[+ INFO]</li></Link>
      </ul>
    
  );
};

export default EachCharacter;
