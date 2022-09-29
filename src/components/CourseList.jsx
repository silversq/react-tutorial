const CourseList = ({courses}) => {
  return (
    <div>
      {Object.entries(courses).map(([name, course]) => <div key={name}>{course.term} CS {course.number}: {course.title}</div>)}
    </div>
  );
  
};

export default CourseList;