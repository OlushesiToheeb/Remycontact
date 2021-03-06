import React from 'react';
import Toolbar from '../component/Toolbar/Toolbar';
import SideDrawer from '../component/Sidedrawer/Sidedrawer';
import Contactlist from '../component/Contactlist/Contactlist';
import Modal from '../component/Modal/Modal';
import AddContact from '../component/AddContact/AddContact'
import './ContactBuilder.css';
import {connect} from 'react-redux';
import * as contactsActions from '../Store/actions/index';


class ContactBuilder extends React.Component{
  state={
    showSideDrawer :false,
    showModal: false
  }

  sideDrawerToggleHandler = () =>{
    this.setState((prevState) =>{ 
      return{
        showSideDrawer: !prevState.showSideDrawer
      }});
  }

  showModalHandler=()=>{
    this.setState({showModal:true})
  }

  closeModalHandler=()=>{
    this.setState({showModal:false})
  }
            
  render(){
    return(
      <div>
        <Toolbar drawToggleClicked={this.sideDrawerToggleHandler}/>
        <div className="main-wrapper">  
          <SideDrawer 
          open={this.state.showSideDrawer}
          showContacts={this.props.contactList}
          />
          <Contactlist 
          open={this.state.showSideDrawer}
          showContacts={this.props.contactList}
          removeContact={this.props.onDeleteContact}
          popModal={this.showModalHandler}/>
          <Modal
            show={this.state.showModal}
            closeModal={this.closeModalHandler}
            >
            <AddContact 
              closeModal={this.closeModalHandler} 
              addContact={this.props.onAddContact}/>
          </Modal>
        </div>
      </div>   
    )
  }
}

const mapStateToProps = (state) => {
  return{
    contactList: state.contacts
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onDeleteContact : (ids) => dispatch(contactsActions.deleteContact(ids)),
    onAddContact: (data) => dispatch(contactsActions.addContact(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactBuilder)

