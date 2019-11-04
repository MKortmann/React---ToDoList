import React, { Fragment } from 'react';
import './Todoul.css';

const Todoul = ({ inputValuesNewItem }) => {

    return (
        
        <Fragment>
            {
                
                inputValuesNewItem.map((valueNewItem, index) =>
                  <ul key={`${valueNewItem}${index}`} className="todo-list">
                        <li className="li-item">
                            <div className="list-component text-secondary">
                                <div className="check-list">
                                    <i className="far fa-circle" role="button" aria-hidden="true"></i>
                                    <i className="far fa-check-circle text-success hidden" role="button" aria-hidden="true"></i>
                                    <p className="p-text">{valueNewItem}</p>
                                </div>
                                <div className="edit-list">
                                    <i className="far fa-times-circle text-danger" role="button" aria-hidden="true"></i>
                                    <i className="far fa-edit text-info" role="button" data-toggle="modal" data-target="#Modal" aria-hidden="true"></i>
                                    <input className="quantity" type="number" aria-label="Insert a number" name="quantity" min="1" max="20" aria-describedby="number of items of the same kind" placeholder="1" />
                                </div>
                            </div>
                        </li>

                    </ul>
                )
            }
        </Fragment>






    );

}

export default Todoul;