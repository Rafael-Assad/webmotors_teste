import { GETVEHICLE, FILTERVEHICLE } from './actionType'

export const getVehicle = (vehicles) =>{
  return {
    'type': GETVEHICLE,
    vehicles
  }
}