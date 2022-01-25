const callToApi = () => {
  // Llamamos al API


  
  return fetch(
  "http://hp-api.herokuapp.com/api/characters/house/gryffindor"
  )
  .then((response) => response.json())
  .then((dataFromApi) => {
    const cleanData = dataFromApi.map((character) => {
      return {
        id: `${character.name} ${character.dateOfBirth}`,
        name: character.name,
        image: character.image,
        alive: character.alive,
        gender: character.gender,
        ancestry: character.ancestry,
        species: character.species,
      };
    });
    return cleanData;
  });
  };
  
  export default callToApi; 