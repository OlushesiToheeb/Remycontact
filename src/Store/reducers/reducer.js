import * as actionTypes from '../actions/actionTypes';

const initialState = {
  contacts : [
      {
          id:0,
          name:"Ola",
          otherName:'Toheeb',
          emails:"olaot@gmail.com",
          number:"+2349055398799",
          avatarUrl:"https://gravatar.com/avatar/b3e02b105845ea042f87aef7f990f395b?s=200&d=robohash&r=x"
      },
      {
          id:1,
          name:"Ola",
          otherName:'Toheeb',
          emails:"olaot@gmail.com",
          number:"+2349055398799",
          avatarUrl:"https://robohash.org/3.png?bgset=bg1"
      },
      {
          id:2,
          name:"Ola",
          otherName:'Toheeb',
          emails:"olaot@gmail.com",
          number:"+2349055398799",
          avatarUrl:"https://avatars.dicebear.com/v2/avataaars/122f8ceeafdd78568a6816af8f1924da.svg"
      },
      {
          id:3,
          name:"Ola",
          otherName:'Toheeb',
          emails:"olaot@gmail.com",
          number:"+2349055398799",
          avatarUrl:"https://gravatar.com/avatar/122f8ceeafdd78568a6816af8f1924da?s=400&d=robohash&r=x"
      }
  ]
}

const reducer = (state=initialState, action) =>{
  console.log(state.contacts)
  switch(action.type){
    case actionTypes.DELETE_CONTACT :
       return {
          ...state,
      contacts: state.contacts.filter(function(value) {
        return action.ids.indexOf(value.id) === -1;
    })
    }
    default:
      return state  
  }
}

export default reducer


