import { Link } from "react-router-dom";

function CharacterDetails (props) {
  return (
    <div>
      <ul>
        <li>{props.characterDetails?.name}</li>
         <li>
          <img
            className="character__img"
            src={props.characterDetails.image ? props.characterDetails.image : "./src/images/default_image.jpg" } alt={props.characterDetails.name} />
        </li>
        <li>Gender: {props.characterDetails.gender}</li>
        <li>Specie: {props.characterDetails.species}</li>
        <li>Status: {props.characterDetails.status}</li> 
      </ul>
      <Link to="/">
        <i className="fas fa-arrow-left"></i> Back
      </Link>
    </div>);
};

export default CharacterDetails;