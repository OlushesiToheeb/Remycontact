import React from 'react';
import './Sidedrawer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressBook} from '@fortawesome/free-solid-svg-icons';
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import {faCog} from '@fortawesome/free-solid-svg-icons';

const sideDrawer = (props) => {
  return (
    <div className="sideDrawer">
      <ul className="sideDrawer-list">
        <li className='list-selected'>
          <FontAwesomeIcon 
            icon={faAddressBook} 
            className="list-icon" 
          />
          Contacts(5)
        </li>
        <div className="divider"></div>
        <li>
          <FontAwesomeIcon 
            icon={faQuestionCircle} 
            className="list-icon" 
          />
          Settings
        </li>
        <li>
          <FontAwesomeIcon 
            icon={faCog} 
            className="list-icon" 
          />
          Help
        </li>
      </ul>
    </div>
  )
}

export default sideDrawer