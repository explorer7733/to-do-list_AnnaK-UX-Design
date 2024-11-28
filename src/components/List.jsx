import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

function List({ list, heading, onComplete, onRemove }) {
    const removeTaskHandler = (e, id) => {
        e.preventDefault();
        onRemove(id);
    }

    const completeTaskHandler = (e, id) => {
        e.preventDefault();
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        const completedTask = list.find((task) => task.id === id);
        completedTask.completedDate = today.toLocaleDateString();
        onComplete(id);
    }

    return (
        <>
            <h2>{heading}</h2>
            <ul className="list">
                {list.map((item) => (
                    <li key={item.id} className={`list-item ${item.completedDate && "complete-task"}`}>
                        <div className="task-description">
                            <p>{item.dateCreated}</p>
                            <p>{item.description}</p>
                        </div>
                        {item.completedDate
                            ? <p>{item.completedDate}</p>
                            : <div className="task-actions">
                                <button className="btn btn-complete" onClick={(e) => completeTaskHandler(e, item.id)}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </button>
                                <button className="btn btn-delete" onClick={(e) => removeTaskHandler(e, item.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>}
                    </li>
                ))}
            </ul>
        </>
    )
}

List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        dateCreated: PropTypes.string,
        completedDate: PropTypes.string
    })),
    heading: PropTypes.string.isRequired,
    onComplete: PropTypes.func,
    onRemove: PropTypes.func
}

export default List;