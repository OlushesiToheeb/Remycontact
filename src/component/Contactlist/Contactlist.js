import React from 'react';

import './Contactlist.css';

class Contactlist extends React.Component{

  state={
    toggleIconIds:[],
  }


  toggleIconIdHandler = (id) => {
    const newToggleState = this.state.toggleIconIds;
    const index = newToggleState.indexOf(id);
    if (index > -1) {
      newToggleState.splice(index, 1);
    }else{
      newToggleState.push(id)
    }
    this.setState({toggleIconIds: newToggleState})
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
                    <tr className={this.state.toggleIconIds.includes(contact.id) ? ['row', 'bg'].join(' ') : ['row'] } key={contact.id}>
                      <td className='list-icon contact-selected'>
                      <i className={this.state.toggleIconIds.includes(contact.id) ? ['fas fa-check-square'] : ['far fa-square']}
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
                          onClick={() => this.toggleIconIdsHandler(contact.id)}></i>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className={this.state.toggleIconIds.length > 0 ? ['delete-contact','display-f'].join(' ') : 'delete-contact'}
            onClick={
              () => {
                if (this.state.toggleIconIds.length > 0) {
                    this.props.removeContact(this.state.toggleIconIds);
                }
              }
            }>
            <i class="fas fa-trash"></i>
          </div>
          <div className="create-new-contact"
            onClick={() =>{
             this.props.popModal()
             alert('hello')
            }}
            >
              <i class="fas fa-plus"></i>
          </div>
        </div>
    )
  }
}

export default Contactlist