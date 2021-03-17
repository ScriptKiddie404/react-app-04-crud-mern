import React from 'react';
import './Task.css';
import Utilities from '../../helpers/Utilities';
import FadeLoader from "react-spinners/ClipLoader";


const Task = ({ taskData }) => {

    const handleEdit = () => {

        Utilities.closeAllInputs();
        const inputField = document.getElementById(taskData._id);
        inputField.style.display = 'block';
        inputField.focus();

    }

    const handleKey = (event) => {
        const inputField = document.getElementById(taskData._id);
        if (inputField.value !== '' && event.key === 'Enter') {
            inputField.style.display = 'none';
            //Llamar a la función para hacer update
        }
    }

    const handleDelete = () => {
        console.log("eliminadoo...");
        //Llamar a la función para eliminar
    }

    return (
        <>
            <div className="task">
                <div className="spinner"><FadeLoader color={"#FFF"} /></div>
                <div className="task__name">{taskData.description}</div>
                <input id={taskData._id} type="text" className="task__input" onKeyPress={handleKey} />
                <div className="task__buttons">
                    <button onClick={handleDelete} className="task__button"><i className="fas fa-times task__button-icon" /></button>
                    <button onClick={handleEdit} className="task__button"><i className="fas fa-edit" /></button>
                </div>
            </div>
        </>
    );
}

export default Task;