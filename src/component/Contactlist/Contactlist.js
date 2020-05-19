import React from 'react';

import './Contactlist.css';

class Contactlist extends React.Component{

  state={
    toggleIconId:null
  }

 

  toggleIconIdHandler = (id) => {
    console.log(id)
    const {toggleIconId} = this.state;
    const newToggleIconId = toggleIconId === id ? undefined : id;
    console.log(newToggleIconId)
    this.setState({toggleIconId: newToggleIconId})
  }

  

  render(){

    return(  
        <div className={this.props.open? ["contact-view display-w"] : ["contact-view display-wm"] }>
          <div className="contact-view-wrapper">
            <h3>Starred Contacts(0)</h3>
          </div>
          <div className="contact-view-wrapper">
            <h3>Contact({this.props.showContacts ?this.props.showContacts.length:0})</h3>
            <div className="list-table">
              <table>
                <tbody>
                  {this.props.showContacts.map((contact, index) => 
                    
                    <tr className={this.state.toggleIconId === contact.id ? ['row', 'bg'].join(' ') : ['row'] } key={contact.id}>
                      <td className='list-icon contact-selected'>
                      <i className={this.state.toggleIconId === contact.id ? ['fas fa-check-square'] : ['far fa-square']}
                        onClick={() => this.toggleIconIdHandler(contact.id)}></i>
                      </td>
                      <td className='list-image'>
                        <img src={contact.avatarUrl} alt="profile"/>
                      </td>
                      <td className='list-name'>
                        <span>
                          <strong>{contact.name}</strong>
                        </span>
                        <span>
                          <strong>{contact.otherName}</strong>
                        </span>
                      </td>
                      <td className='list-mail'>{contact.emails}</td>
                      <td className='list-number'>{contact.number}</td>
                      <td className='list-icon-group'>
                        <i className="far fa-star"></i>
                        <div className="modal-icon-launcher">
                          <i className="fas fa-pen"></i>
                        </div>
                        <i className="fas fa-ellipsis-v" 
                          onClick={() => this.toggleIconIdHandler(contact.id)}></i>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className={this.state.toggleIconId !== undefined ? ['display-f','delete-contact'].join(' ') : 'delete-contact'}
            onClick={
              () => {
                if (this.state.toggleIconId !== undefined) {
                    this.props.removeContact(this.state.toggleIconId);
                }
              }
            }>
            <i class="fas fa-trash"></i>
          </div>
          <div className="create-new-contact">
              <i class="fas fa-plus"></i>
          </div>
        </div>
    )
  }
}

export default Contactlist