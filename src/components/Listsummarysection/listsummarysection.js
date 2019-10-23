import React, { Fragment } from 'react';
import './listsummarysection.css';
import Namelist from '../Namelist/Namelist';


const Listsummarysection = () => {
    

    return (
        <Fragment>

            <div className="col-lg-4 listSummarySection">
                <Namelist/>
                <div className="myListSummary-wraper">
                    <button type="button" id="dropdownMenuButton" className="btn btn-outline-warning dropdown-toggle btn-lg btn-block capitalize hidden " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Your Lists</button>
                    <ul className="myListSummary"></ul>
                </div>

            </div>{/*End Of Col-lg-4*/}

            <div className="col-lg-8 list-content"></div>


        </Fragment>



    );
}

export default Listsummarysection;
