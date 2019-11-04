import React from 'react';
import './ShoppigListTitles.css';


const ShoppingListTitles = ({inputvalues, showButton}) => {
    

    return (
        <ul id="myListSummaryReact" className="myListSummary">
            {
                inputvalues.map((value,index) => 
                        <li key={`${value}${index}`} className="newListLi" >
                            <button id={value} key={`${value}${index}`} onClick={showButton} type="button" className="btn btn-outline-warning btn-lg btn-block capitalize button-color-orange ">{value}</button>
                        </li>
                )
            }
        </ul>
    );

}

export default ShoppingListTitles;

