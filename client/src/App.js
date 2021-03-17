import React from 'react';
import './App.css';
import './components/FormTask'
import FormTask from './components/FormTask';

const App = () => {
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