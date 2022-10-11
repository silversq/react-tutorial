const CoursePlan = ({courses}) => (
    <div className="plan">
      {
        courses.length === 0
        ? <h2>Your plan is empty. Click on a class to add it to your plan.</h2>
        : courses.map(course => (
            <div key={course}>
                <h5 className="card-text">{course[1].term} CS {course[1].number} {course[1].title} {course[1].meets}</h5>
            </div>
          ))
      }
    </div>
  );
  
  export default CoursePlan;