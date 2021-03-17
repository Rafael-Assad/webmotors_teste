import {GETVERSION} from './actionType'

export const getVersion = (versions) => {
  return {
    'type': GETVERSION,
    versions
  }
}