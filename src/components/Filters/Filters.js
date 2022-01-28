import FilterName from './FilterName';
import FilterHouse from './FilterHouse';
import ResetFilters from './ResetFilters';
import FilterGender from './FilterGender';
import FilterStudents from './FilterStudents'; 

function Filters (props) {

const handleOrderList = (ev) => { props.handleSort({
    key: "sort",
    value: ev.currentTarget
});
}



return (<section className="section">
<h3 className='section__title'>Filtrar: </h3> 
<form onSubmit={(ev)=>ev.preventDefault()} className="section__filter" action="">

<FilterName handleFilter={props.handleFilter} filterName={props.filterName}/>
<FilterHouse   handleFilter={props.handleFilter} filterHouse={props.filterHouse} /><FilterGender handleFilter={props.handleFilter}/>
<FilterStudents filterStudents={props.filterStudents} handleFilter={props.handleFilter}/>
<button className='section__filter--button' onClick={handleOrderList}><i className="fas fa-sort-alpha-down" ></i></button>
<ResetFilters handleReset={props.handleReset}/>
</form>
</section>
)
};
 

 export default Filters;