import { GETMAKE} from './actionType'

const makeReducer = (state =[], action) =>{
  switch (action.type) {
    case GETMAKE:
      
      return state = [...action.maker]
  
    default:
      return state
  }
}

export default makeReducer