import React, { Fragment } from 'react';
import './Taskform.css';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';



const Taskform = ({
    inputvalues,
    onInputChangeNewItem,
    addNewItem, listButton,
    listItemsElements,
    handleShow,
    editListItemName,
    save,
    changeCircleIconState,
    uncheckedIconState }) => {

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


    // const uncheckedIconState = () => {
    //     let className = [];
    //     if (this.state.circleIconState === true) {
    //         if (className.includes('hidden')) {
    //             className.pop();
    //             return className.join(' ');
    //         }
    //     }
    //     else if (this.state.circleIconState === false) {
    //         if (!className.includes('hidden')) {
    //             className.push('hidden');
    //             return className.join(' ');
    //         }
    //     }
    // }

  




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
                {/*Bootstrap Modal*/}
                {/* <Modal show={show} onHide={handleClose} className="modal-sm " >
                    <Modal.Header closeButton className="modal-header text-white">
                        <Modal.Title>Edit Entry</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <input defaultValue = {setButtonValue} onClick={modalOnInputChange} type="text" className="form-control inputForModal" placeholder="Your edit in here" aria-label="edit"
                            aria-describedby="edit an existing entry field" />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button id="modalCancelButton" className="btn text-white" onClick={handleClose}>Close</Button>
                        <Button id="modalSaveButton" className="btn bg-warning text-white" >Save</Button>
                    </Modal.Footer>
                </Modal > */}
                {/*Modal*/}
                {renderedTaskFormId}
                {
                    listItemsElements.map((element, index) =>
                        (<li key={`${element}${index}`} className="li-item">
                            <div className="list-component text-secondary">
                                <div className="check-list">
                                    <i  className={`far fa-circle ${uncheckedIconState}`} role="button" onClick={changeCircleIconState} aria-hidden="true"></i>
                                    <i className="far fa-check-circle text-success hidden" role="button" aria-hidden="true"></i>
                                    <p className="p-text">
                                        {
                                            save === false ? editListItemName() : element
                                        }
                                    </p>
                                </div>
                                <div className="edit-list">
                                    <i className="far fa-times-circle text-danger" role="button" aria-hidden="true"></i>
                                    <i id={element} className="far fa-edit text-info" role="button" onClick={handleShow} aria-hidden="true"></i>
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