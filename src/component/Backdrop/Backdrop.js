import React from 'react';
import './Backdrop.css';

const backDrop = (props) =>(
   props.open ? <div 
  className="Backdrop"
  onClick={props.close}></div> : null
)

export default backDrop;