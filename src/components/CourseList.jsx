import Course from './Course';
import { useState } from "react";
import Modal from './Modal';
import CoursePlan from './CoursePlan';
import { timeConflict } from '../utilities/conflict';
const terms = {
  Fall: 'Fall', 
  Winter: 'Winter',
  Spring: 'Spring'
};

const TermButton = ({term, selection, setSelection}) => (
  <div>
    <input type="radio" id={term} className="btn-check" checked={term === selection} autoComplete="off"
      onChange={() => setSelection(term)} />
    <label className="btn btn-success mb-1 p-2" htmlFor={term}>
    { term }
    </label>
  </div>
);

const TermSelector = ({selection, setSelection}) => (
  <div className="btn-group">
    { 
      Object.keys(terms).map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} />)
    }
  </div>
);

const TermPage = ({courses}) => {
  const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
  const [selected, setSelected] = useState([]);
  const toggleSelected = (course) => {
    setSelected(
    selected.includes(course) 
    ? selected.filter(x => x !== course) 
    : selectedConflict(course) ? selected
    : [...selected, course] 
  )};

  const selectedConflict = (course) => {
    // console.log(selected.filter(selectedCourse => timeConflict(course, selectedCourse)));
    // console.log(selected);
    return selected.filter(selectedCourse => timeConflict(course, selectedCourse)).length > 0;
  }
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <div className="d-flex justify-content-between">
        <TermSelector selection={selection} setSelection={setSelection} />
        <button className="ms-auto btn btn-primary" onClick={openModal}>Course Selection</button>
      </div>
      <div className="course-list">
        {
          Object.entries(courses).filter(course => course[1].term === selection).map(([name, course]) => 
            <Course course={course} key={name} id = {name} selected={selected} toggleSelected={toggleSelected} conflicted={selectedConflict(course)}/>)
        };
      </div>
      <Modal open={open} close={closeModal}>
        <CoursePlan courses={Object.entries(courses).filter(([id, course]) => selected.includes(course))} />
      </Modal>
    </div>
  );
}

// const ProductPage = ({products}) => {
//   const [selected, setSelected] = useState([]);

//   const toggleSelected = (item) => setSelected(
//     selected.includes(item)
//     ? selected.filter(x => x !== item)
//     : [...selected, item]
//   );

//   return (
//     <ProductList products={products} selected={selected} toggleSelected={toggleSelected} />
//   );
// };


export default TermPage;