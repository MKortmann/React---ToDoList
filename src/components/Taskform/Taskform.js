import React, { Fragment } from 'react';
import './Taskform.css';


const Taskform = ({ inputvalues, onInputChangeNewItem, addNewItem, listButton, listItemsElements }) => {
    let renderedTaskFormId = null;
    inputvalues.forEach((value, index) => {
        if (listButton === value) {
            renderedTaskFormId = (
                <Fragment>
                    <h3 className="todo-name">{value}</h3>
                </Fragment>
            )
        }
    });

 


    return (
        <Fragment>
            <form className="taskForm">
                <div className="component1">
                    <input onChange={onInputChangeNewItem} type="text" className="form-control shadow input-new-line" placeholder="New item" aria-label="Insert text" aria-describedby="edit an existing entry field" />
                </div>
                <div onClick={addNewItem} className="component2 insertEntryButton" role="button">
                    <i className="far fa-plus-square" aria-hidden="true"></i>
                    <h5 className="addTask">Add new item</h5>
                </div>
            </form>
            <ul className="todo-list">
                {renderedTaskFormId}
                {
                listItemsElements.map((element,index) => 
                    (<li key={`${element}${index}`} className="li-item">
                    <div className="list-component text-secondary">
                      <div className="check-list">
                        <i className="far fa-circle" role="button" aria-hidden="true"></i>
                        <i className="far fa-check-circle text-success hidden" role="button" aria-hidden="true"></i>
                        <p className="p-text">{element}</p>
                      </div>
                      <div className="edit-list">
                        <i className="far fa-times-circle text-danger" role="button" aria-hidden="true"></i>
                        <i className="far fa-edit text-info" role="button" data-toggle="modal" data-target="#Modal" aria-hidden="true"></i>
                        <input className="quantity" type="number" aria-label="Insert a number" name="quantity" min="1" max="20" aria-describedby="number of items of the same kind" placeholder="1" />
                      </div>
                    </div>
                  </li>)
                )
                }
            </ul>

        </Fragment>


    );



}

export default Taskform;