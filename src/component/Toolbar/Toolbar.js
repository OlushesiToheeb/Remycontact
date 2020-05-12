import React from 'react';
import './Toolbar.css';
import ot from '../../assets/ot.png';
import ToggleSidedrawer from '../Toolbar/ToggleSidedrawer/ToggleSidedrawer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

class Toolbar extends React.Component{



  render(){
    return(
      <header  className = "Header">
        <ToggleSidedrawer />
        <h2>Remy Contact</h2>
        <form className="inputs-icon">
          <FontAwesomeIcon 
            icon={faBars} 
            className="SearchIcon" 
          />
          <input type="text" 
          placeholder="Search" 
          className="input-field"
          />
        </form>
        <img src={ot} alt="Profile"/>
      </header>
    )
  }
}

export default Toolbar