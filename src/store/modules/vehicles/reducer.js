import { GETVEHICLE } from './actionType'

const versionReducer = (state =[], action) =>{
  switch (action.type) {
    case GETVEHICLE:
      
      return state = [...state, ...action.vehicles];

  
    default:
      return state;
  }
}

export default versionReducer