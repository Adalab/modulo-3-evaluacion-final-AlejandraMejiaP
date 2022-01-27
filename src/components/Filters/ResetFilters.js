function ResetFilters (props) {
    const handleResetFilters = (ev) => {
        props.handleReset(ev.currentTarget);
    }
    return (
        <button className="rest__button" onClick={handleResetFilters} >Borrar todos los filtros</button>
    )
}

export default ResetFilters;