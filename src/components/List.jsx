// AK changes:
import React, { useState } from "react";
//
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

function List({ list, heading, onComplete, onRemove }) {
    // AK changes: add fade effect
    const [fadingTasks, setFadingTasks] = useState({});
    //
    const removeTaskHandler = (e, id) => {
        e.preventDefault();
        onRemove(id);
    };

    const completeTaskHandler = (e, id) => {
        e.preventDefault();
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        const completedTask = list.find((task) => task.id === id);
        completedTask.completedDate = today.toLocaleDateString();
        /*onComplete(id);
    };*/
        // AK changes
        setFadingTasks((prev) => ({
            ...prev,
            [id]: true,
        }));

        setTimeout(() => {
            onComplete(id);
            setFadingTasks((prev) => ({
                ...prev,
                [id]: false,
            }));
        }, 1000);
    };
    //

    // AK changes: add message when the to-do list is empty//
    return (
        <>
            <h2>{heading}</h2>
            {list.length === 0 ? (
                <div className="empty-list">
                    Your to-do list is empty! What is next?
                </div>
            ) : (
                <ul className="list">
                    {list.map((item) => (
                        <li key={item.id} className={`list-item ${item.completedDate || fadingTasks[item.id] ? "complete-task fade-in" : ""}`}>
                            <div className="task-description">
                                <p>{item.dateCreated}</p>
                                <p2>{item.description}</p2>
                            </div>
                            {item.completedDate
                                ? ( 
                                <p3>{item.completedDate}</p3>
                            ) : (
                            <div className="task-actions">
                                <button className="btn btn-complete" onClick={(e) => completeTaskHandler(e, item.id)}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </button>
                                <button className="btn btn-delete" onClick={(e) => removeTaskHandler(e, item.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
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
};

List.defaultProps = {
    list: [],
};

export default List;