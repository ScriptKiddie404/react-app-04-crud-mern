import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import './components/FormTask/FormTask'
import FormTask from './components/FormTask/FormTask';

const App = () => {

    const [taskList, setTaskList] = useState([]);

    const onClickButton = async (term) => {
        await axios.post('http://localhost:4000/create-task', {
            description: term
        });
    };

    return (
        <>
            <h1 className={'title flex'}>
                <i className="fas fa-tasks title__icon" />
                <span className="title__span">TO DO</span> LIST
            </h1>
            <FormTask onClickButton={onClickButton} />

        </>
    );
};

export default App;