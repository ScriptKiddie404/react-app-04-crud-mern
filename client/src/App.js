import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import './components/FormTask/FormTask'
import FormTask from './components/FormTask/FormTask';

const App = () => {

    const onClickButton = async (term) => {
        const response = axios.post();
    };


    return (
        <>
            <h1 className={'title flex'}>
                <i className="fas fa-tasks title__icon" />
                <span className="title__span">TO DO</span> LIST
            </h1>
            <FormTask />

        </>
    );
};

export default App;