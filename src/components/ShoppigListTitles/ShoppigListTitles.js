import React from 'react';
import './ShoppigListTitles.css';


const ShoppingListTitles = ({ inputvalues}) => {
    

    return (
        <ul id="myListSummaryReact" className="myListSummary">
            {
                inputvalues.map((value, index ) => 
                            <li key={index} className="newListLi">
                                <button type="button" className="btn btn-outline-warning btn-lg btn-block capitalize button-color-orange ">{value}</button>
                            </li>
                )
            }
        </ul>
    );

}

export default ShoppingListTitles;

