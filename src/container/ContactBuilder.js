import React from 'react';
import Toolbar from '../component/Toolbar/Toolbar';
import SideDrawer from '../component/Sidedrawer/Sidedrawer';
import Contactlist from '../component/Contactlist/Contactlist';
import './ContactBuilder.css';
import {connect} from 'react-redux';


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
          showContacts={this.props.contactList}/>
          <Contactlist 
          open={this.state.showSideDrawer}
          showContacts={this.props.contactList}/>
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

export default connect(mapStateToProps)(ContactBuilder)

