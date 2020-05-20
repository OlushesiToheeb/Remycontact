import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) =>{
  return(
    <div>
      <Backdrop open={props.show} close={props.closeModal}/>
      <div className='modal-main'
      style={{opacity:props.show ? '1' : '0'}}>
        {props.children}
      </div>
    </div>
  )
}

export default Modal;