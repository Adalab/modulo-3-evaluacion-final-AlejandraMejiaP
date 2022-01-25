function FilterName (props) {

const handleInputName = (ev) => {
    props.handleFilter(ev.currentTarget.value);
}

    return (
<>
<label htmlFor="">Buscar por nombre:</label>
<input type="text" name="name" id="name" onKeyUp={handleInputName} />
</>)
};

export default FilterName;