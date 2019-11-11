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
      inputAddNewItem: '',
      inputValuesNewItem: [],
      listButton: '',
      listButtonArray: [
        // {
        //   id:'',
        //   items:[]
        // }
      ],
      allListButtons: []
    };
  }


  onInputchange = (event) => {
    this.setState({ input: event.target.value });
  }

  onInputChangeNewItem = (event) => {
    this.setState({ inputAddNewItem: event.target.value });

  }

  printInputValue = () => {
    if (this.state.input !== '') {
      this.setState({ inputvalues: [...this.state.inputvalues, this.state.input] });
      this.setState({ input: '' });
    }
    console.log(this.state.inputvalues);
    this.setState({allListButtons : [...this.state.allListButtons, this.state.input]});

    const allListButtons = [...this.state.allListButtons];
    if (!allListButtons.includes(this.state.input)) {
     

      let listButtonArray = [...this.state.listButtonArray];
      listButtonArray.push({ id: this.state.input, listItems: [] });
      this.setState({ listButtonArray: listButtonArray });
      console.log(this.state.listButtonArray);
    }


  }

  showButton = (event) => {
    this.setState({ listButton: event.target.id });
  }






  addNewItem = (event) => {
    if (this.state.inputAddNewItem !== '') {
      this.setState({ inputValuesNewItem: [...this.state.inputValuesNewItem, this.state.inputAddNewItem] });
      this.setState({ inputAddNewItem: '' });
    }

    console.log(this.state.inputValuesNewItem);

    let listButtonArray = [...this.state.listButtonArray];
    

    listButtonArray.forEach((element) => {
      if (element.id === this.state.listButton) {
        element.listItems.push(this.state.inputAddNewItem);
      }
    });
  }


  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });







  render() {

    let componentToBeRender = null;
    this.state.inputvalues.forEach((value, index) => {
      if (this.state.listButton === value) {
        componentToBeRender = (
          <div id={value} className="list-wraper" key={`${value}${index}`}>
            <Taskform inputvalues={this.state.inputvalues}
              onInputChangeNewItem={this.onInputChangeNewItem}
              addNewItem={this.addNewItem}
              listButton={this.state.listButton}
              inputValuesNewItem={this.state.inputValuesNewItem}
              listItemsElements={this.state.listButtonArray[index].listItems}
            />
          </div>

        )
      }

    })







    return (
      <Fragment>
        {/*Bootstrap Modal*/}
        < Modal show={this.state.show} onHide={this.handleClose} className="modal-sm" >
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
        </Modal >
        {/*Modal*/}

        < StartPage />

        <div className="container-fluid border border-light">
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
                <ShoppigListTitles inputvalues={this.state.inputvalues} showButton={this.showButton} />
              </div>
            </div>{/*End Of Col-lg-4*/}
            <div className="col-lg-8 list-content">
              {componentToBeRender}
            </div>


          </div> {/*End Of Row*/}
        </div>{/*End Of Container Fluid*/}
      </Fragment >


    );
  }
}


export default App;
