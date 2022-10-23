import { Link } from "react-router-dom";

const Course = ({course, id, selected, toggleSelected, conflicted, profile}) => (
    <div className="card m-1 p-2 h-100" onClick={() => toggleSelected(course)}>
        <div className={`card-body ${selected.includes(course) ? 'selected' : conflicted ? 'conflicted' : ''}`}>
            <h5 className="card-title">{course.term} CS {course.number}</h5>
            <p className="card-text">{course.title}</p>
            <p>
                {profile?.isAdmin && <Link to={`/course/${id}/edit`}>
                    <i class="bi bi-pencil-square"></i>
                </Link>}
            </p>
        </div>
        <div className="card-footer bg-white">
            <p className="card-text">{course.meets}</p>
        </div>
    </div>
);


export default Course;