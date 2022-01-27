function FilterGender(props) {
    const handleInputGender = (ev) => {
      props.handleFilter({
        key: "gender",
        value: ev.currentTarget.value,
      });
    };
  
    return (
      <>
        <label className="filter__label" htmlFor="">Por sexo:</label>
        <select className="filter__select" name="gender" id="gender" onChange={handleInputGender} value={props.filterGender}>
          
        <option  value="">Todos</option>
          <option value="female">Mujer</option>
          <option value="male">Hombre</option>
                    
        </select>
      </>
    );
  }
  
  export default FilterGender;
  