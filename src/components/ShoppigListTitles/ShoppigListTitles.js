import React from 'react';
import './ShoppigListTitles.css';


const ShoppingListTitles = ({inputvalues, showListWraper}) => {
    

    return (
        <ul id="myListSummaryReact" className="myListSummary">
            {
                inputvalues.map((value,index) => 
                        <li key={`${value}${index}`} className="newListLi" >
                            <button id={value} onClick={showListWraper} type="button" className="btn btn-outline-warning btn-lg btn-block capitalize button-color-orange ">{value}</button>
                        </li>
                )
            }
        </ul>
    );

}

export default ShoppingListTitles;

