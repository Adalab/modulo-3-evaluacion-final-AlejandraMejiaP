import EachCharacter from "./EachCharacter";

function CharacterList (props) {

let htmlCharacterList = "";
if (props.charactersData.length === 0){
  htmlCharacterList = "No se han encontrado resultados a su búsqueda" 
}
else {   
  htmlCharacterList = props.charactersData.map((character, index) => (
    <EachCharacter key={index} charactersData={character} />
  ));
} 

  return (
    <section className="main__section--container">
      
       {htmlCharacterList}
     
    </section>
  );
};

export default CharacterList;