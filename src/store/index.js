import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import makeReducer from './modules/make/reducer'
import modelReducer from './modules/model/reducer'
import versionReducer from './modules/version/reducer'
import vehicleReducer from './modules/vehicles/reducer'

const reducer = combineReducers({
  'make': makeReducer,
  'model': modelReducer,
  'version': versionReducer,
  'vehicle': vehicleReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
