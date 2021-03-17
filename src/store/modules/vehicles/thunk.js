import axios from "axios";
import { getVehicle } from "./action";

//This approch is made due the chalange API limitation
// because it cant scale well but with this short
// amount of data is good enought

export const vehicleThunk = () => async (dispatch, getState) => {
  try {
    for (let i = 1; i <= 3; i++) {
      const URL = `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=${i}`;

      const allVehicles = await axios.get(URL);
      dispatch(getVehicle(allVehicles.data));
    }
  } catch (error) {
    console.error(error);
  }
};