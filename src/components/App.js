import { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import callToApi from "../services/api";
import "../styles/App.scss";


// Componentes:
import Header from "./Header";
import Filters from "./Filters/Filters";
import CharacterList from "./CharacterList";
import CharacterDetails from "./CharacterDetails";

function App() {
  const [charactersData, setCharactersData] = useState([]);
   const [filterName, setFilterName] = useState("");
  const [filterHouse, setHouse] = useState("");

  useEffect(() => {
    callToApi().then((characterApiData) => {
      setCharactersData(characterApiData);
    });
  }, []);

  //Filters:

  const handleFilter = (data) => {
    setFilterName(data);
  }


  const filteredCharacters = charactersData.filter((character) => { return character.name.toLowerCase().includes(filterName.toLowerCase()) });

  // Route: 

  const routeData = useRouteMatch("/character-detail/:characterId");
  const characterId = routeData !== null ? routeData.params.characterId : null;
  const characterDetails = charactersData.find((eachCharacter) => eachCharacter.id === characterId);

console.log(routeData);


  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
      <Filters handleFilter={handleFilter}/>
      <CharacterList charactersData={filteredCharacters} />
      </Route>
      <Route exact path="/character-detail/:characterId" > 
      <CharacterDetails characterDetails={characterDetails}/></Route>
      </Switch>
    </>
  );
}

export default App;
