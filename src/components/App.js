import { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import callToApi from "../services/api";
import "../styles/App.scss";
import ls from "../services/localStorage";

// Componentes:
import Header from "./Header";
import Filters from "./Filters/Filters";
import CharacterList from "./CharacterList";
import CharacterDetails from "./CharacterDetails";

function App() {
  const [charactersData, setCharactersData] = useState(
    ls.get("charactersData", [])
  );
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterHouse, setFilterHouse] = useState(
    ls.get("filterHouse", "Gryffindor")
  );

  useEffect(() => {
    callToApi(filterHouse).then((characterApiData) => {
      setCharactersData(characterApiData);
    });
  }, [filterHouse]);

  useEffect(() => {
    ls.set("charactersData", charactersData);
    ls.set("filterName", filterName);
    ls.set("filterHouse", filterHouse);
  }, [charactersData, filterName, filterHouse]);

  //Filters:

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "house") {
      setFilterHouse(data.value);
    }
  };

  const handleReset = () => {
    setFilterHouse("Gryffindor");
    setFilterName("");
  };

  const filteredCharacters = charactersData.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  // const handleSort = () => {
  //   return filteredCharacters.map((character) =>
  //   character.name.sort());
  // }

  // Route:

  const routeData = useRouteMatch("/character-detail/:characterId");
  const characterId = routeData !== null ? routeData.params.characterId : null;
  const characterDetails = charactersData.find(
    (eachCharacter) => eachCharacter.id === characterId
  );

  return (
    <>
      <Header />
      <main className="main__container">
        <Switch>
          <Route exact path="/">
            <Filters
              handleReset={handleReset}
              handleFilter={handleFilter}
              filterName={filterName}
              filterHouse={filterHouse}
              // handleSort={handleSort}
            />
            <CharacterList charactersData={filteredCharacters} />
          </Route>
          <Route exact path="/character-detail/:characterId">
            <CharacterDetails characterDetails={characterDetails} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
