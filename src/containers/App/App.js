import React, { Component, Fragment } from 'react';
import StartPage from '../../components/StartPage/StartPage';
import Modal from 'react-bootstrap/Modal';
import Navigation from '../../components/Navigation/Navigation';
import Button from 'react-bootstrap/Button';
import ShoppigListTitles from '../../components/ShoppigListTitles/ShoppigListTitles';
import Taskform from '../../components/Taskform/Taskform';
import '../App/App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      show: false,
      inputvalues: [],
      listContentVisibility: true,
      listWraperArray: [],
      currentlistWraperHtml: [],
    };
  }



  onInputchange = (event) => {
    this.setState({ input: event.target.value });
  }


  printInputValue = (event) => {
    event.preventDefault();
    if (this.state.input !== '') {
      this.setState({ inputvalues: [...this.state.inputvalues, this.state.input] });
      this.setState({ input: '' });


    }
  }

  listWraperContentArray = () => {
    return (this.state.inputvalues.map((value, index) =>
      <div id={value} className="list-wraper" key={`${value}${index}`}>
        <Taskform />
        <h3 className="todo-name">{value}</h3>
        <ul className="todo-list"></ul>
      </div>)

    )
  }

  generateListWraperArray = () => {
    this.setState({ listWraperArray: this.listWraperContentArray() });
    console.log(this.state.listWraperArray);

  }

  showListWraper = (event) => {
    this.generateListWraperArray();
    this.state.listWraperArray.forEach((list) => {
      console.log(`This is the list ${list.props}`);
      if (event.target.id === list.props.id) {
        let tempArray = []
        tempArray.push(list);
        this.setState({ currentlistWraperHtml: [...tempArray] });
      }
    });

  }

  printListWraper = () => {
    return this.state.currentlistWraperHtml[0];
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });


  render() {
    return (
      <Fragment>
        {/*Bootstrap Modal*/}
        <Modal show={this.state.show} onHide={this.handleClose} className="modal-sm">
          <Modal.Header closeButton className="modal-header text-white">
            <Modal.Title>Edit Entry</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <input type="text" className="form-control inputForModal" placeholder="Your edit in here" aria-label="edit"
              aria-describedby="edit an existing entry field" />
          </Modal.Body>

          <Modal.Footer>
            <Button id="modalCancelButton" className="btn text-white">Close</Button>
            <Button id="modalSaveButton" className="btn bg-warning text-white" >Save</Button>
          </Modal.Footer>
        </Modal>
        {/*Modal*/}

        <StartPage />

        <div className="container-fluid ">
          <div className="row">
            <Navigation />
          </div> {/*End Of Row*/}

          <div className="row">
            <div className="col-lg-4 listSummarySection">
              <form className="form-inline formWraper">
                <input onChange={this.onInputchange} value={this.state.input} type="text" id="inputNewListItem" className="form-control" placeholder="Name Your List"
                  aria-label="Insert text" aria-describedby="edit an existing entry field" />
                <button onClick={this.printInputValue} type="button" id="plusButton" className="btn-warning">+</button>
              </form>
              <div className="myListSummary-wraper">
                <button type="button" id="dropdownMenuButton" className="btn btn-outline-warning dropdown-toggle btn-lg btn-block capitalize hidden " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Your Lists</button>
                <ShoppigListTitles inputvalues={this.state.inputvalues} showListWraper={this.showListWraper} />
              </div>
            </div>{/*End Of Col-lg-4*/}

            <div className="col-lg-8 list-content">
              {this.printListWraper()}
            </div>

          </div> {/*End Of Row*/}
        </div>{/*End Of Container Fluid*/}
      </Fragment>


    );
  }
}

export default App;
