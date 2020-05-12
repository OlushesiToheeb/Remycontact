import React from 'react';
import Toolbar from '../component/Toolbar/Toolbar';
import SideDrawer from '../component/Sidedrawer/Sidedrawer'
import './ContactBuilder.css';


class ContactBuilder extends React.Component{
  render(){
    return(
      <div>
        <Toolbar/>
        <div className="main-wrapper">
          <SideDrawer/>
        </div>
      </div>   
    )
  }
}

export default ContactBuilder

