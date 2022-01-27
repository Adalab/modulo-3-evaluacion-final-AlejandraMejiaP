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
  const [filterGender, setFilterGender] = useState(
    ls.get("filterGender", "Todos")
  );
  const [sortCharacterList, setSortCharacterList] = useState(
    ls.get("sortCharacterList", false)
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
    ls.set("filterGender", filterGender);   
    
  }, [
    charactersData,
    filterName,
    filterHouse,
    filterGender,
    
  ]);

  //Filters:

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "house") {
      setFilterHouse(data.value);
    } else if (data.key === "gender") {
      setFilterGender(data.value);
    }
  };

  let filterData = charactersData
.filter((character) => {
  return character.name.toLowerCase().includes(filterName.toLowerCase());
})
.filter((character) => {
  if (filterGender === "Todos") {
    return true;
  } else {
    return character.gender === filterGender;
  }
  });

  if (sortCharacterList) {
    filterData = charactersData.sort((a, b) =>
    a.name > b.name ? 1 : a.name < b.name ? -1 : 0
  );
  } 
 
  
  const handleSort = (data) => {
    setSortCharacterList(true);  
    };

  const handleReset = () => {
    setFilterHouse("Gryffindor");
    setFilterName("");
    setFilterGender("Todos");
    setSortCharacterList(false)
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
      <main className="main__container">
        <Switch>
          <Route exact path="/">
            <Filters
              handleReset={handleReset}
              handleFilter={handleFilter}
              filterName={filterName}
              filterHouse={filterHouse}
              filterGender={filterGender}
              handleSort={handleSort}
            />
            <CharacterList charactersData={filterData} />
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
