function FilterName (props) {

const handleInputName = (ev) => {
    props.handleFilter({
        key: "name",
        value:ev.currentTarget.value
    });
}

    return (
<>
<label htmlFor="">Buscar por nombre:</label>
<input type="text" name="name" id="name" value={props.FilterName} onKeyUp={handleInputName} />
</>)
};

export default FilterName;