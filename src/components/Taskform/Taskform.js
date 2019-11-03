import React from 'react';
import './Taskform.css';


const Listwraper = () => {

    return (
        <form className="taskForm">
            <div className="component1">
                <input type="text" className="form-control shadow input-new-line" placeholder="New item" aria-label="Insert text" aria-describedby="edit an existing entry field" />
            </div>
            <div className="component2 insertEntryButton" role="button">
                <i className="far fa-plus-square" aria-hidden="true"></i>
                <h5 className="addTask">Add new item</h5>
            </div>
        </form>

    );



}

export default Listwraper;