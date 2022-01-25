import {Link} from "react-router-dom";

function EachCharacter (props) {
  console.log(props.charactersData.id);

  return (    
    
     <ul className="mai.idn__container--element">
        <li>{props.charactersData.name}</li>
        <li>
            <img className="main__image" src={props.charactersData.image ? props.charactersData.image : "./src/images/default_image.jpg" } alt={props.charactersData.name} title={props.charactersData.name} />
        </li>
        
        <li>Especie: {props.charactersData.species}</li>
        <Link to={`/character-detail/${props.charactersData.id}`}><li>[+ Más detalles]</li></Link>
      </ul>  
  );
};

export default EachCharacter;
