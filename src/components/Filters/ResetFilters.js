function ResetFilters (props) {
    const handleResetFilters = (ev) => {
        props.handleReset(ev.currentTarget);
    }
    return (
        <button onClick={handleResetFilters} >Borrar todos los filtros</button>
    )
}

export default ResetFilters;