
const apiUrl = "https://hp-api.herokuapp.com/api/characters/house/";

const callToApi = (filterHouse) => {
// selectedHouse = filterHouseSelector.value;  
  // Llamamos al API
  return fetch(apiUrl + filterHouse)  
  .then((response) => response.json())
  .then((dataFromApi) => {
    const cleanData = dataFromApi.map((character) => {
      return {
        id: `${character.name} ${character.species}`,
        name: character.name,
        image: character.image,
        alive: character.alive,
        gender: character.gender,
        species: character.species,
        ancestry: character.ancestry,
        house: character.house,
        hogwartsStudent: character.hogwartsStudent
      };
    });
    return cleanData;
  });
  };
  
  export default callToApi; 