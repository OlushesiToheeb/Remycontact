import React from 'react';
import Toolbar from '../component/Toolbar/Toolbar';
import SideDrawer from '../component/Sidedrawer/Sidedrawer'
import './ContactBuilder.css';


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
          <SideDrawer open={this.state.showSideDrawer}/>
        </div>
      </div>   
    )
  }
}

export default ContactBuilder

