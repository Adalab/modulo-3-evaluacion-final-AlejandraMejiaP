function FilterHouse(props) {
  const handleInputHouse = (ev) => {
    props.handleFilter({
      key: "house",
      value: ev.currentTarget.value,
    });
  };

  return (
    <>
      <label className="filter__label" htmlFor="">
       Casa:
      </label>
      <select
        className="filter__select"
        name="house"
        id="house"
        onChange={handleInputHouse}
        value={props.filterHouse}      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
      </select>
    </>
  );
}

export default FilterHouse;
