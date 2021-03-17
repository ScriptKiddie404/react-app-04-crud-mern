import React, { useState } from 'react';
import './FormTask.css';
import Utilities from '../../helpers/Utilities';

const FormTask = ({ onClickButton }) => {

    const [term, setTerm] = useState('');

    const handleClick = () => {
        onClickButton(term);
    }

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    }

    return (
        <>
            <div className="form">
                <label htmlFor="taskName" className="form__label">Insert your task:</label>
                <input className="form__input"
                    type="text"
                    id="taskName"
                    value={term}
                    onChange={event => setTerm(event.target.value)}
                    onFocus={() => Utilities.closeAllInputs()}
                    onKeyPress={handleKey} />
                <button className="form__button" onClick={handleClick}>
                    <i className="fas fa-plus form__button-icon" />ADD TASK
                </button>
            </div>
        </>
    );
};

export default FormTask;