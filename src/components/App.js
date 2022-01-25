import { useEffect, useState } from "react";
import callToApi from "../services/api";
import "../styles/App.scss";

// Componentes:
import Header from "./Header";
import Filters from "./Filters/Filters";
import CharacterList from "./CharacterList";

function App() {
  const [charactersData, setCharactersData] = useState([]);
   const [filterName, setFilterName] = useState("");
  const [filterHouse, setHouse] = useState("");

  useEffect(() => {
    callToApi().then((characterApiData) => {
      setCharactersData(characterApiData);
    });
  }, []);

  const handleFilter = (data) => {
    setFilterName(data);
  }


  const filteredCharacters = charactersData.filter((character) => { return character.name.toLowerCase().includes(filterName.toLowerCase()) });

  return (
    <>
      <Header />
      <Filters handleFilter={handleFilter}/>
      <CharacterList charactersData={filteredCharacters} />
    </>
  );
}

export default App;
