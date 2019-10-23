import React, { Fragment } from 'react';
import './StartPage.css';


const StartPage = ()=>{
    const transitions = () => {
        const newList = document.querySelector('.newList');
        const colFullwidth = document.querySelector('.col-full-width');
        colFullwidth.classList.toggle('transitionForColFullWidth');
        newList.classList.toggle('hidden');
      }
    return(
        <Fragment>
            <div className="col-full-width">
                <div className="form">
                    <h1><span className="changedStyle">Do things</span> The Right Way</h1>
                    <div className="form-group-1">

                    <div className="newList btn-outline-warning" roll="button" onClick = {transitions}>
                        <i className="fas fa-th-list"></i>
                        <h5 className="font-weight-light ">Start Planning</h5>
                    </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

}

export default StartPage;