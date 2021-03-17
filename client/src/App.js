import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './components/FormTask/FormTask'
import FormTask from './components/FormTask/FormTask';
import Task from './components/Task/Task';

const App = () => {

    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await axios.get('http://localhost:4000/get-tasks');
        setTaskList(response.data);
    }

    const onClickButton = async (term) => {
        if (!(term === '')) {
            await axios.post('http://localhost:4000/create-task', { description: term });
        }
    };


    return (
        <>
            <div className="app">
                <h1 className={'title flex'}>
                    <i className="fas fa-tasks title__icon" />
                    <span className="title__span">TO DO</span> LIST
                </h1>
                <FormTask onClickButton={onClickButton} />
                <div className="task-container">
                    {
                        taskList.map((task, key) => {
                            return (
                                <Task taskData={task} key={key} />
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default App;