import axios from 'axios'
import { getModel } from './action'

const modelThunk = (makeID) => async (dispatch, getState) => {
  const URL = `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=${makeID}`
  try {
    const allModels = await axios.get(URL)

    dispatch(getModel(allModels.data))
  } catch (error) {
    console.error(error)
  }
}

export default modelThunk