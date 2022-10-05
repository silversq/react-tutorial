const Course = ({course, id, selected, toggleSelected}) => (
    <div className="card m-1 p-2 h-100" onClick={() => toggleSelected(id)}>
        <div className={`card-body ${selected.includes(id) ? 'selected' : ''}`}>
            <h5 className="card-title">{course.term} CS {course.number}</h5>
            <p className="card-text">{course.title}</p>
        </div>
        <div className="card-footer bg-white">
            <p className="card-text">{course.meets}</p>
        </div>
    </div>
);


export default Course;