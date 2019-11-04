import React, { Fragment } from 'react';
import './Taskform.css';
import Todoul from '../Todoul/Todoul';


const Taskform = ({ inputvalues, onInputChangeNewItem, addNewItem, listButton, inputValuesNewItem }) => {
    let renderedTaskForm = null;
    inputvalues.forEach((value, index) => {
        if (listButton === value) {
            renderedTaskForm = (
                <Fragment>
                    <form id={value} key={`${value}${index}`} className="taskForm">
                        <div className="component1">
                            <input onChange={onInputChangeNewItem} type="text" className="form-control shadow input-new-line" placeholder="New item" aria-label="Insert text" aria-describedby="edit an existing entry field" />
                        </div>
                        <div onClick={addNewItem} className="component2 insertEntryButton" role="button">
                            <i className="far fa-plus-square" aria-hidden="true"></i>
                            <h5 className="addTask">Add new item</h5>
                        </div>
                    </form>
                    <h3 className="todo-name">{value}</h3>
                    <Todoul id={value} inputValuesNewItem={inputValuesNewItem} />
                </Fragment>


            )
        }


    });


    return (
        <Fragment>
            {renderedTaskForm}
        </Fragment>


    );



}

export default Taskform;