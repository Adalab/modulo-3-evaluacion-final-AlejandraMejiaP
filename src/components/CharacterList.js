import EachCharacter from "./EachCharacter";

function CharacterList (props) {

let htmlCharacterList = "";
if (props.charactersData !== []){
  console.log("entra 1ª condición");
  htmlCharacterList = props.charactersData.map((character, index) => (
    <EachCharacter key={index} charactersData={character} />
  ));
}
else  {  
  console.log("entra 2ª");
    htmlCharacterList = "hola" 
} 
console.log(props.charactersData);
  return (
    <main className="main__container">
      
       {htmlCharacterList}
     
    </main>
  );
};

export default CharacterList;