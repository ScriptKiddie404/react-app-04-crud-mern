import React from 'react';
import './Task.css';

const Task = ({ taskData }) => {

    const handleEdit = () => {
        const inputField = document.getElementById(taskData._id);
        inputField.style.display = 'block';
    }

    return (
        <>
            <div className="task">
                <div className="task__name">{taskData.description}</div>
                <input id={taskData._id} type="text" className="task__input" />
                <div className="task__buttons">
                    <button className="task__button"><i className="fas fa-times task__button-icon" /></button>
                    <button onClick={handleEdit} className="task__button"><i className="fas fa-edit" /></button>
                </div>
            </div>
        </>
    );
}

export default Task;