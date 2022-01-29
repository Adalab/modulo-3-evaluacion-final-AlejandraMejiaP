function FilterStudents(props) {
  const handleCheckStudent = (ev) => {
    props.handleFilter({
      key: "student",
      value: ev.currentTarget.checked,
    });
  };
  return <>
    <label className="filter__label" htmlFor="">
      Solo estudiantes <input
      type="checkbox"
      name="students"
      id="students"
      value="students"
      onChange={handleCheckStudent}
      checked={props.filterStudents}
    />
    </label>
    
  </>;
}
export default FilterStudents;
