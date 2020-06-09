import * as actionTypes  from  './actionTypes';

export const deleteContact = (ids) =>{
  return{
    type:actionTypes.DELETE_CONTACT,
    ids
  }
}

export const addContact = (data) => {
  return{
    type:actionTypes.ADD_CONTACT,
    data
  }
  
}