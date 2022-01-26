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
  const [filterHouse, setFilterHouse] = useState("Gryffindor");
  


  useEffect(() => {
    callToApi(filterHouse).then((characterApiData) => {
      setCharactersData(characterApiData);
    });
  }, [filterHouse]);

  //Filters:

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "house") {
      setFilterHouse(data.value);
    }
  };

  const filteredCharacters = charactersData.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  const handlerSubmit = (ev) => {
    ev.preventDefault();
  };
  // Route:

  const routeData = useRouteMatch("/character-detail/:characterId");
  const characterId = routeData !== null ? routeData.params.characterId : null;
  const characterDetails = charactersData.find(
    (eachCharacter) => eachCharacter.id === characterId
  );

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Filters
            handlerSubmit={handlerSubmit}
            handleFilter={handleFilter}
            filterName={filterName}
            filterHouse={filterHouse}
          />
          <CharacterList charactersData={filteredCharacters} />
        </Route>
        <Route exact path="/character-detail/:characterId">
          <CharacterDetails characterDetails={characterDetails} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
