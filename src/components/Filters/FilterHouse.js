function FilterHouse(props) {
  const handleInputHouse = (ev) => {
    props.handleFilter({
      key: "house",
      value: ev.currentTarget.value,
    });
  };

  return (
    <>
      <label htmlFor="">Buscar por casa:</label>
      <select className="filterHouse-js" name="house" id="house" onChange={handleInputHouse} value={props.FilterHouse}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
      </select>
    </>
  );
}

export default FilterHouse;
