import {GETVERSION} from './actionType'

const vehicleReducer = (state =[], action) =>{
  switch (action.type) {
    case GETVERSION:
      
      return state = action.versions;
  
    default:
      return state;
  }
}

export default vehicleReducer