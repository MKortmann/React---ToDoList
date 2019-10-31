import React, { Component} from 'react';
import './Listcontent.css';
import Listwraper from '../../components/Listwraper/Listwraper';

class Listcontent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
       
        
    }

  
    

    render() {
        
        return (
            this.props.inputvalues.map((value, index) =>
                <div className="list-wraper" key={index} style = {this.props.displayState}>
                    {console.log(this.props.displayState)}
                        <Listwraper />
                        <h3 className="todo-name">{value}</h3>
                        <ul className="todo-list"></ul>
                </div>


            )

        );
    }


}

export default Listcontent;