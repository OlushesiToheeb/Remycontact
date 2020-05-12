import React from 'react';
import './Toolbar.css';
import ot from '../../assets/ot.png';
import ToggleSidedrawer from '../Toolbar/ToggleSidedrawer/ToggleSidedrawer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

class Toolbar extends React.Component{



  render(){
    return(
      <header  className = "Header">

        <div className="header-left">
          <ToggleSidedrawer />
          <h1>Remy Contact</h1>
        </div>
        <div className="header-right">
          <form className="inputs-wrapper">
            <FontAwesomeIcon 
              icon={faSearch} 
              className="SearchIcon" 
            />
            <input type="text" 
            placeholder="Search" 
            className="input-field"
            />
          </form>
          <div className="header-profile-logo">
            <img src={ot} alt="Profile" />
          </div>
        </div>
      </header>
    )
  }
}

export default Toolbar