import * as actionTypes  from  './actionTypes';

export const deleteContact = (id) =>{
  return{
    type:actionTypes.DELETE_CONTACT,
    id
  }

}