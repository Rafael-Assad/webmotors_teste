import {GETMODEL} from './actionType'

const modelReducer = (state =[], action) =>{
  switch (action.type) {
    case GETMODEL:
      
      return state = [...action.models];
  
    default:
      return state;
  }
}

export default modelReducer