import {GETMODEL} from './actionType'

export const getModel = (models) => {
  return {
    'type': GETMODEL,
    models
  }
}