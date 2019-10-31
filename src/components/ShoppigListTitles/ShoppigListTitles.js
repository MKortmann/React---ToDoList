import React from 'react';
import './ShoppigListTitles.css';


const ShoppingListTitles = ({inputvalues, showListWraper}) => {
    

    return (
        <ul id="myListSummaryReact" className="myListSummary">
            {
                inputvalues.map((value, index) => 
                            <li key={index} className="newListLi">
                                <button onClick={showListWraper} type="button"  className="btn btn-outline-warning btn-lg btn-block capitalize button-color-orange ">{value}</button>
                            </li>
                )
            }
        </ul>
    );

}

export default ShoppingListTitles;

