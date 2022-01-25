const callToApi = () => {
  // Llamamos al API
  return fetch(
  "http://hp-api.herokuapp.com/api/characters/house/gryffindor"
  )
  .then((response) => response.json())
  .then((dataFromApi) => {
    const cleanData = dataFromApi.map((character) => {
      return {
        id: `${character.name} ${character.species}`,
        name: character.name,
        image: character.image,
        status: character.status,
        gender: character.gender,
        species: character.species,
      };
    });
    return cleanData;
  });
  };
  
  export default callToApi; 