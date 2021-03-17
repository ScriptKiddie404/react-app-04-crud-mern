import React from 'react';
import './FormTask.css';

const FormTask = () => {
    return (
        <>
            <div className="form">
                <label htmlFor="taskName" className="form__label">Insert your task:</label>
                <input className="form__input" type="text" id="taskName" />
                <button className="form__button"><i className="fas fa-plus form__button-icon" />ADD TASK</button>
            </div>
        </>
    );
};

export default FormTask;