import FilterName from './FilterName';
import FilterHouse from './FilterHouse';


const Filters = (props) => {
return <section className='section'>
<form className="section__filter" action="">

<FilterName handleFilter={props.handleFilter}/>
<FilterHouse/>

</form>
</section>
};
 

 export default Filters;