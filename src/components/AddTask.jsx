import PropTypes from "prop-types";

import { useState } from "react";
import { idGenerator } from "../utils/idGenerator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddTask({onAdd}) {
    const [description, setDescription] = useState("");

    const handleInputChange = (e) => {
        setDescription(e.target.value);
    }

    const addTaskHandler = (e) => {
        e.preventDefault();

        if (description.trim() === "") return;
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);

        const newTask = {
            id: idGenerator(),
            description: description,
            dateCreated: today.toLocaleDateString(),
            completedDate: null
        }

        onAdd(newTask);
        setDescription("");
    }

    return (
        <form className="task-form" onSubmit={addTaskHandler}>
            <textarea
                type="text"
                placeholder="Task description"
                className="task-input"
                value={description}
                onChange={handleInputChange}
                rows={2} />
            <button className="btn btn-add" type="submit">
                <FontAwesomeIcon icon={faPlus} />
                <span> ADD</span>
            </button>
        </form>
    )
}

AddTask.propTypes = {
    onAdd: PropTypes.func
}

export default AddTask;