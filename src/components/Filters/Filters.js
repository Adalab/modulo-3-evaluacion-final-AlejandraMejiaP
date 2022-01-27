import FilterName from './FilterName';
import FilterHouse from './FilterHouse';
import ResetFilters from './ResetFilters';

function Filters (props) {

const handleOrderList = (ev) => { props.handleSort(ev.currentTarget);
}



return (<section className="section">
<h3 className='section__title'>Filtrar: </h3> 
<form onSubmit={(ev)=>ev.preventDefault()} className="section__filter" action="">

<FilterName handleFilter={props.handleFilter} filterName={props.filterName}/>
<FilterHouse   handleFilter={props.handleFilter} FilterHouse={props.FilterHouse} />
<button onClick={handleOrderList}><i className="fas fa-sort-alpha-down" ></i></button>
<ResetFilters handleReset={props.handleReset}/>
</form>
</section>
)
};
 

 export default Filters;