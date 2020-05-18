import React from 'react';
import Toolbar from '../component/Toolbar/Toolbar';
import SideDrawer from '../component/Sidedrawer/Sidedrawer';
import Contactlist from '../component/Contactlist/Contactlist';
import './ContactBuilder.css';
import {connect} from 'react-redux';
import * as contactsActions from '../Store/actions/index';


class ContactBuilder extends React.Component{
  state={
    showSideDrawer :false
  }

  sideDrawerToggleHandler = () =>{
    this.setState((prevState) =>{ 
      return{
        showSideDrawer: !prevState.showSideDrawer
      }});
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
          removeContact={this.props.onDeleteContact}/>
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
    onDeleteContact : (id) => dispatch(contactsActions.deleteContact(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactBuilder)

