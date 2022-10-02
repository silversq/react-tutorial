import Course from './Course';

const CourseList = ({courses}) => (
  <div className="course-list">
    {
      Object.entries(courses).map(([name, course]) => <Course course={course} key={name}/>)
    };
  </div>
);

export default CourseList;