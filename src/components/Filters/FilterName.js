function FilterName (props) {

const handleInputName = (ev) => {
    props.handleFilter({
        key: "name",
        value:ev.currentTarget.value
    });
}

    return (
<>
<label className="filter__label" htmlFor="">Por nombre:</label>
<input className="filter__input" type="text" name="name" id="name" value={props.filterName}  onChange={handleInputName} placeholder="Harry P..." />
</>)
};

export default FilterName;