import { GETMAKE } from './actionType'

export const getMake = (maker) => {
  return {
    'type': GETMAKE,
    maker
  }
}