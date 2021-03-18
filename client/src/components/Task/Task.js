import React, { useState } from 'react';
import './Task.css';
import Utilities from '../../helpers/Utilities';
import FadeLoader from "react-spinners/ClipLoader";


const Task = ({ taskData, onEdit, onDelete }) => {

    const [term, setTerm] = useState('');

    const handleEdit = () => {

        Utilities.closeAllInputs();
        const inputField = document.getElementById(taskData._id);
        inputField.style.display = 'block';
        inputField.focus();

    }

    const handleKey = (event) => {
        const inputField = document.getElementById(taskData._id);
        if (term && event.key === 'Enter') {
            loadSpinner(document.querySelector(`.spinner-${taskData._id}`));
            //Llamar a UPDATE
            onEdit(term, taskData._id);
            inputField.style.display = 'none';
        }
    }



    const handleDelete = () => {
        loadSpinner(document.querySelector(`.spinner-${taskData._id}`));
        onDelete(taskData._id);
    }

    const loadSpinner = (spinner) => {
        // Mostramos el spinner:
        spinner.style.display = 'flex';
        // Una vez hecho el fetch removemos el spinner
        setTimeout(() => {
            spinner.style.display = 'none';
        }, 500);
    }

    return (
        <>
            <div className="task">
                <div className={`spinner spinner-${taskData._id}`}><FadeLoader color={"#FFF"} /></div>
                <div className="task__name">{taskData.description}</div>
                <input id={taskData._id}
                    type="text"
                    value={term}
                    onChange={event => setTerm(event.target.value)}
                    className="task__input"
                    onKeyPress={handleKey} />
                <div className="task__buttons">
                    <button onClick={handleDelete} className="task__button"><i className="fas fa-times task__button-icon" /></button>
                    <button onClick={handleEdit} className="task__button"><i className="fas fa-edit" /></button>
                </div>
            </div>
        </>
    );
}

export default Task;