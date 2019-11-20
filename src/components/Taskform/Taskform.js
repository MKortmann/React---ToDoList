import React, { Fragment } from 'react';
import './Taskform.css';



const Taskform = ({
    inputvalues,
    onInputChangeNewItem,
    iconId,
    addNewItem, 
    listButton,
    listButtonArray,
    listItemsElements,
    handleShow,
    editListItemName,
    save,
    changeIconState,
    // uncheckedIconState,
    // checkedIconState,
    lineThroughText }) => {

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

    let classStringUncheckedIcon = null;
    let classStringCheckedIcon = null;

    listButtonArray.forEach((list) => {
        if (list.id=== listButton) {
          list.listItems.forEach((element) => {
            if (element[0] === iconId && element[1]===true) {
              classStringUncheckedIcon = "";
            }
            else if (element[0] === iconId && element[1]===false){
                classStringUncheckedIcon = "hidden";
            }
          });
        }
      });

      listButtonArray.forEach((list) => {
        if (list.id=== listButton) {
          list.listItems.forEach((element) => {
            if (element[0] === iconId && element[1]===true) {
                classStringCheckedIcon = "hidden";
            }
            else if (element[0] === iconId && element[1]===false){
                classStringCheckedIcon = "";
            }
          });
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
                    listItemsElements.map((element, index) =>
                        (<li key={`${element[0]}${index}`} className="li-item">
                            <div className="list-component text-secondary">
                                <div className="check-list">
                                    <i id={element[0]} className={`far fa-circle ${classStringUncheckedIcon}`} role="button" onClick={changeIconState} aria-hidden="true"></i>
                                    <i id={element[0]} className={`far fa-check-circle text-success ${classStringCheckedIcon}`} role="button" onClick={changeIconState} aria-hidden="true"></i>
                                    <p className={`p-text ${lineThroughText()}`}>
                                        {
                                            save === false ? editListItemName() : element
                                        }
                                    </p>
                                </div>
                                <div className="edit-list">
                                    <i className="far fa-times-circle text-danger" role="button" aria-hidden="true"></i>
                                    <i id={element[0]} className="far fa-edit text-info" role="button" onClick={handleShow} aria-hidden="true"></i>
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