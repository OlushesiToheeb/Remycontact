import React from 'react';
import './Modal.css';

const Modal = (props) =>{
  return(
    <div className='modal-main'
    style={{opacity:props.show ? '1' : '0'}}>
      {props.children}
    </div>
  )
}

export default Modal;