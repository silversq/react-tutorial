import Course from './Course';
import { useState } from "react";

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

const Term = ({selection}) => (
  <div className="card" >
  { terms[selection] }
  </div>
);

const TermPage = ({courses, term}) => {
  const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
  return (
    <div>
      <TermSelector selection={selection} setSelection={setSelection} />
      <div className="course-list">
        {
          Object.entries(courses).filter(course => course[1].term === selection).map(([name, course]) => <Course course={course} key={name}/>)
        };
      </div>
    </div>
  );
}

export default TermPage;