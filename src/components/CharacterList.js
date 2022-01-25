import EachCharacter from "./EachCharacter";

const CharacterList = (props) => {
  const htmlCharacterList = props.charactersData.map((character,index) => (
    <EachCharacter key={index} charactersData={character} characterImg={props.characterImg}/>
  ));


  return (
    <main className="main__container">
      
       {htmlCharacterList}
     
    </main>
  );
};

export default CharacterList;