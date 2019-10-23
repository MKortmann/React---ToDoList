import React, { Component, Fragment } from 'react';
import StartPage from '../components/StartPage/StartPage';
import Modal from 'react-bootstrap/Modal';
import Navigation from '../components/Navigation/Navigation';
import Listsummarysection from '../components/Listsummarysection/listsummarysection';
import Button from 'react-bootstrap/Button';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      display:false
      
    };
  }

 

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  
  // createFormforAddingListButtons = () => {
  //           const inputAddingButtonsHtml = `<form class="form-inline formWraper">
  //           <input type="text" id="inputNewListItem" class="form-control" placeholder="Name Your List"
  //             aria-label="Insert text" aria-describedby="edit an existing entry field">
  //           <button type="button" id="plusButton" class="btn-warning ">+</button>
  //           <button type="button" id="minusButton" class="btn-warning ">-</button>
  //         </form>`;
  //           const listSummarySection = document.querySelector('.listSummarySection');
  //           listSummarySection.insertAdjacentHTML('afterbegin', inputAddingButtonsHtml);
  //       }
 



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
            <Navigation/>
            

            
          </div> {/*End Of Row*/}

          <div className="row">
            <Listsummarysection/>
          </div> {/*End Of Row*/}







        </div>{/*End Of Container Fluid*/}





      </Fragment>


    );
  }
}

export default App;
