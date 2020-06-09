import React from 'react';
import './AddContact.css';

class AddContact extends React.Component{

  state = {
    name:'',
    otherName:'',
    company:'',
    jobTitle:'',
    emails:'',
    number:'',
    notes:'',
    country:''
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value });
  }


  handleSubmit = (e) => {
    e.preventDefault()
      const { 
        name, 
        otherName, 
        company,
        jobTitle,
        emails,
        number,
        notes,
        country 
      } = this.state

      this.props.addContact(this.state);

      this.setState=({
        name:'',
        otherName:'',
        company:'',
        jobTitle:'',
        emails:'',
        number:'',
        notes:'',
        country:''
      })

      // this.props.closeModal()
      
  }


  render(){

    const { 
      name, 
      otherName, 
      company,
      jobTitle,
      emails,
      number,
      notes,
      country } = this.state

    return(
      <div>
        <div className="modal-title">
          <h3>Create Contact</h3>
          <div>
            <i className="fas fa-times" onClick={this.props.closeModal}></i>
          </div>
        </div>
        <div className="modal-body">
          <div className="modal-body-icon-row">
            <i className="far fa-grin-tongue contact-avatar"></i>
            <i className="fas fa-folder-plus"></i>
            <i className="fas fa-envelope"></i>
            <i className="fas fa-phone"></i>
            <i className="fas fa-file-alt"></i>
          </div>
          <div className="modal-body-input">
            <form id="new-contact-form" onSubmit={this.handleSubmit}>
              <div className="modal-body__input--name">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="First Name" 
                  value={name}
                  onChange={this.handleChange}/>
                <input 
                  type="text" 
                  name="otherName" 
                  placeholder="Last Name" 
                  value={otherName}
                  onChange={this.handleChange}/>
              </div>
              <div className="modal-body__input--job">
                <input 
                  type="text" 
                  name="company" 
                  placeholder="Company" 
                  value={company}
                  onChange={this.handleChange}/>
                <input 
                  type="text" 
                  name="jobTitle" 
                  placeholder="Job Title" 
                  value={jobTitle}
                  onChange={this.handleChange}/>
              </div>
              <div className="modal-body__input--emails">
                <input 
                  type="email" 
                  name="emails" 
                  placeholder="Email" 
                  value={emails}
                  onChange={this.handleChange}/>
              </div>
              <div className="modal-body__input--phone">
                <select 
                  id="country" 
                  name='country'
                  value={country}
                  onChange={this.handleChange}>
                  <option value="nigeria">NGR</option>
                  <option value="ghana">Ghana</option>
                </select>
                  <input 
                    type="tel" 
                    name="number" 
                    placeholder="Phone" 
                    value={number}
                    onChange={this.handleChange}/>
              </div>
              <div className="modal-body__input--notes">
                <input 
                  type="textarea" 
                  name="notes" 
                  placeholder="Notes" 
                  value={notes}
                  onChange={this.handleChange}/>
              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <div className="button__wrapper">
            <button 
              className="button__button" 
              onClick={this.props.closeModal}>
              <div className="button__title">
                <div>Cancel</div>
              </div>
            </button>
          </div>
          <div className="button__wrapper">
            <button 
              className="button__button"
              type='submit'
              onClick={this.handleSubmit}>
              <div className="button__title">
                <div>Save</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddContact

