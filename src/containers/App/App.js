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
      inputAddNewButtonValue: '',
      inputAddNewItemValue: '',
      save: true,
      modalInput: '',
      iconId:'',
      circleIconState: true,
      elementName: '',
      show: false,
      inputvalues: [],
      inputValuesNewItem: [],
      listButton: '',
      listButtonArray: [
        // {
        //   id:'',
        //   listItems:[itemName,true]
        // }
      ],
      container: [
        // {
        // BUTTON: "Button1", ITEMS: [
                              // {
                                    // ITEM: "item"
                              // }
                            // ]
        // }
      ],
      allListButtons: [],
    };
  }
  onInputchange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ inputAddNewButtonValue: event.target.value });

  }

  onInputChangeNewItem = (event) => {
    event.preventDefault();
    this.setState({ inputAddNewItemValue: event.target.value });
  }

  printInputValue = (event) => {

    const container = [...this.state.container];

    container.push( {BUTTON: `${this.state.inputAddNewButtonValue}`, ITEMS: [  ] } );
    this.setState({
      container: container,
      inputAddNewButtonValue: ""
    })

    console.log(this.container)

  }

  showButton = (event) => {
    this.setState({ listButton: event.target.id });
  }

  addNewItem = () => {
    if (this.state.inputAddNewItem !== '') {
      this.setState({ inputValuesNewItem: [...this.state.inputValuesNewItem, this.state.inputAddNewItem] });
      this.setState({ inputAddNewItem: '' });

      let listButtonArray = [...this.state.listButtonArray];
      listButtonArray.forEach((element) => {
        if (element.id === this.state.listButton) {
          element.listItems.push([this.state.inputAddNewItem,true ]);
        }
      });
    }

  }

  //Taskform List Items functionalities

  changeIconState = (event) => {
    this.setState({iconId:event.target.id});
    const listButtonArray = [...this.state.listButtonArray];
    listButtonArray.forEach((list) => {
      if (list.id === this.state.listButton) {
        console.log(list.listItems);
        list.listItems.forEach((element) => {
          if (element[0] === event.target.id && element[1]===true ) {
            console.log(element[0] === event.target.id && element[1]===true);
              element.splice(1,1,false);
          }
          else if(element[0] === event.target.id && element[1]===false){
            element.splice(1,1,true);
          }
        });
        this.setState({listButtonArray:listButtonArray});
      }
    });
        // if (this.state.circleIconState === true) {
        //   this.setState({ circleIconState: false });

        // }
        // else {
        //   this.setState({ circleIconState: true });
        // }

    }

  //  uncheckedIconState =()=>{
  //       return !this.state.circleIconState ? "hidden" : ""
  // }
  //  checkedIconState =()=>{
  //       return this.state.circleIconState ? "hidden" : ""
  // }
  // lineThroughText = () => {
  //           return !this.state.circleIconState ? "lineThrough" : ""
  //         }




  // Modal Functionality

  modalOnInputChange = (event) => {
    this.setState({ modalInput: event.target.value });
  }

  saveModalNewValue = (event) => {
    const listButtonArray = [...this.state.listButtonArray];

    if (this.state.save === true) {
      listButtonArray.forEach((list) => {
        if (list.id === this.state.listButton) {
          list.listItems.forEach((element, index) => {
            if (element[0] === this.state.elementName) {
              element.splice(0, 1, this.state.modalInput)
            }
          });
        }
      });
      this.setState({ show: false });
      this.setState({ listButtonArray: listButtonArray });
    }
  }

  editListItemName = () => {
    return this.state.modalInput;
  }

  handleClose = (event) => {
    this.setState({ show: false });
    if (event.target.id === 'modalCancelButton')
      this.setState({ show: false });

  }

  handleShow = (event) => {
    this.state.listButtonArray.forEach((list) => {
      list.listItems.forEach((element) => {
        if (event.target.id === element[0]) {
          this.setState({ elementName: event.target.id });
        }
      });
    });
    this.setState({ show: true });
    this.setState({ save: true });
  }




  render() {
    let componentToBeRender = null;
    this.state.inputvalues.forEach((value, index) => {
      if (this.state.listButton === value) {
        componentToBeRender = (
          <div id={value} className="list-wraper" key={`${value}${index}`}>
            <Taskform inputvalues={this.state.inputvalues}
              onInputChangeNewItem={this.onInputChangeNewItem}
              iconId = {this.state.iconId}
              addNewItem={this.addNewItem}
              listButton={this.state.listButton}
              listItemsElements={this.state.listButtonArray[index].listItems}
              listButtonArray={this.state.listButtonArray}
              handleShow={this.handleShow}
              editListItemName={this.editListItemName}
              save={this.state.save}
              changeIconState = {this.changeIconState}
              uncheckedIconState={this.uncheckedIconState}
              checkedIconState = {this.checkedIconState}
              lineThroughText={this.lineThroughText}
            />
          </div>
        )
      }
    })


    return (
      <Fragment>
        {/*Bootstrap Modal*/}
        < Modal show={this.state.show} className="modal-sm " >
          <Modal.Header className="modal-header text-white">
            <Modal.Title>Edit Entry</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <input onChange={this.modalOnInputChange} type="text" className="form-control inputForModal" placeholder="Your edit in here" aria-label="edit"
              aria-describedby="edit an existing entry field" />
          </Modal.Body>

          <Modal.Footer>
            <Button id="modalCancelButton" className="btn text-white" onClick={this.handleClose}>Close</Button>
            <Button onClick={this.saveModalNewValue} id="modalSaveButton" className="btn bg-warning text-white" >Save</Button>
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
