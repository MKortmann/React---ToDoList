import React, {Component} from 'react';
import './Namelist.css';

class Namelist extends Component {
    constructor(){
        super();
        this.state = {
            visible:false
        }
    }

    render() {
        return(
        
            <form className="form-inline formWraper">
                <input type="text" id="inputNewListItem" className="form-control" placeholder="Name Your List"
                aria-label="Insert text" aria-describedby="edit an existing entry field"/>
                <button type="button" id="plusButton" className="btn-warning">+</button>
                <button type="button" id="minusButton" className="btn-warning">-</button>
          </form>
    );


    }

    



}

export default Namelist;