import React from 'react';

import './Contactlist.css';

class Contactlist extends React.Component{

  state={
    toggleIcon :false
  }

  toggleIconHandler = () =>{
    this.setState((prevState) =>{ 
      return{
        toggleIcon: !prevState.toggleIcon
      }});
  }


  render(){
    
    let changeIconClass = ['far fa-square'];
    if(this.state.toggleIcon){
      changeIconClass = ['fas fa-check-square']
    }

    return(
      <div className={this.props.open? ["contact-view display-w"] : ["contact-view display-wm"] }>
        <div className="contact-view-wrapper">
          <h3>Starred Contacts(0)</h3>
        </div>
        <div className="contact-view-wrapper">
          <h3>Contact(5)</h3>
          <div className="list-table">
            <table>
              <tbody>
                <tr className={this.state.toggleIcon ? ['row', 'bg'].join(' ') : ['row'] }>
                  <td className='list-icon contact-selected'>
                  <i className={changeIconClass.join('')}
                  onClick={this.toggleIconHandler}></i>
                  </td>
                  <td className='list-image'>
                    <img src="https://gravatar.com/avatar/0d0ffa03556e256298a110179b0a7fd9?s=200&d=robohash&r=x" alt="profile"/>
                  </td>
                  <td className='list-name'>
                    <span>
                      <strong>Ola</strong>
                    </span>
                    <span>
                      <strong>Toheeb</strong>
                    </span>
                  </td>
                  <td className='list-mail'>olaot@aol.com</td>
                  <td className='list-number'>+2349055398799</td>
                  <td className='list-icon-group'>
                    <i class="far fa-star"></i>
                    <div class="modal-icon-launcher">
                      <i class="fas fa-pen"></i>
                    </div>
                    <i class="fas fa-ellipsis-v"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Contactlist