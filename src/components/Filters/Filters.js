import FilterName from './FilterName';
import FilterHouse from './FilterHouse';


const Filters = (props) => {
return <section className="section">
<h3 className='section__title'>Filtrar:</h3>
<form onSubmit={(ev)=>ev.preventDefault()} className="section__filter" action="">

<FilterName handleFilter={props.handleFilter} filterName={props.filterName}/>
<FilterHouse   handleFilter={props.handleFilter} FilterHouse={props.FilterHouse} />

</form>
</section>
};
 

 export default Filters;