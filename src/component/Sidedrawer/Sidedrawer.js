import React from 'react';
import './Sidedrawer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressBook} from '@fortawesome/free-solid-svg-icons';
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import {faCog} from '@fortawesome/free-solid-svg-icons';

const sideDrawer = (props) => {
  let attachedClasses = ["sideDrawer" ];
    if(props.open){
        attachedClasses = ["sideDrawer", "open"];
    }   
  return (
    
    <div className={attachedClasses.join(' ')}>
      <ul className="sideDrawer-list">
        <li className='list-selected'>
          <FontAwesomeIcon 
            icon={faAddressBook} 
            className="list-icon" 
          />
          Contacts({props.showContacts.length})
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