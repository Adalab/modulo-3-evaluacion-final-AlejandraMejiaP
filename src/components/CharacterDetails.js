import { Link } from "react-router-dom";
import defaultImg from "../images/default_image.jpg";

// Emblems

import GryffindorEmblem from "../images/Gryffindor-Logo.png";
import RavenclawEmblem from "../images/ravenclaw__logo.png";
import SlytherinEmblem from "../images/slytherin_logo.png";
import HufflepuffEmblem from "../images/hufflepuff__logo.png";


function CharacterDetails(props) {
  return (
    <div className="details">
      <div>
        
        <img
          className="details__img"
          src={
            props.characterDetails.image
              ? props.characterDetails.image
              : defaultImg
          }
          alt={props.characterDetails.name}
        />
      </div>
      <ul className="details__list">
        <li className="details__list--name">
          {props.characterDetails?.name}
        </li>
        <li className="details__list--element">
          Género:{" "}
          {props.characterDetails.gender === "female"
            ? "Femenino"
            : props.characterDetails.gender === "male"
            ? "Masculino"
            : ""}
        </li>
        <li className="details__list--element">
          Especie:{" "}
          {props.characterDetails.species === "human"
            ? "Humana/o"
            : props.characterDetails.species === "half-giant"
            ? "Semigigante"
            : props.characterDetails.species === "werewolf"
            ? "hombre lobo"
            : props.characterDetails.species === "ghost"
            ? "Fantasma"
            : "No definido"}
        </li>
        <li>Ascendencia: {props.characterDetails.ancestry === "half-blood" ? "Mestiza" : props.characterDetails.ancestry === "muggleborn" ? "Hija/o de muggles" : props.characterDetails.ancestry === "pure-blood" ? "Sangre pura" : "Desconocida" }</li>
        <li className="details__list--element">
          Estado:{" "}
          {props.characterDetails.alive ? `Está viva/o` : `Está muerta/o`} <i className="fas fa-heartbeat"></i>
        </li>
        <li>
          <div  className="details__list--div">
          <img className="details__list--emblem" src={props.characterDetails.house === "Gryffindor" ? GryffindorEmblem : props.characterDetails.house === "Slytherin" ? SlytherinEmblem : props.characterDetails.house === "Ravenclaw" ? RavenclawEmblem : props.characterDetails.house === "Hufflepuff" ? HufflepuffEmblem : "" } alt="Emblema de su casa" title="Emblema de su casa" /></div>
        </li>
        <li><Link className="backLink" to="/">
        <i className="fas fa-quidditch"></i> Volver
        </Link></li>
      </ul>
    </div>
  );
}

export default CharacterDetails;
