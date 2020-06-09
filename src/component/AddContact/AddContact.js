import React from 'react';
import './AddContact.css';

class AddContact extends React.Component{

  state = {
    firstName:'',
    lastName:'',
    company:'',
    jobTitle:'',
    email:'',
    phoneNo:'',
    notes:'',
    country:''
  }

  handleChange = (e) => {
    const { name, value} = e.target;
    this.setState({ [name] : value})
  }

  close = this.props.closeModal;

  handleSubmit = (e) => {
    e.preventDefault()
    const { 
      firstName, 
      lastName, 
      company,
      jobTitle,
      email,
      phoneNo,
      notes,
      country } = this.state


      this.setState=({
        firstName:'',
        lastName:'',
        company:'',
        jobTitle:'',
        email:'',
        phoneNo:'',
        notes:'',
        country:''
      })

      this.close()
      
  }


  render(){

    const { 
      firstName, 
      lastName, 
      company,
      jobTitle,
      email,
      phoneNo,
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
                  name="firstName" 
                  placeholder="First Name" 
                  value={firstName}
                  onChange={this.handleChange}/>
                <input 
                  type="text" 
                  name="lastName" 
                  placeholder="Last Name" 
                  value={lastName}
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
              <div className="modal-body__input--email">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  value={email}
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
                    name="phoneNo" 
                    placeholder="Phone" 
                    value={phoneNo}
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

