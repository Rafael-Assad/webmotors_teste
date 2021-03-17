import axios from 'axios'
import { getMake } from './action'

const makeThunk = () => async (dispatch, getState) => {

  const URL = 'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make'
  try {
    const allMake = await axios.get(URL)

    dispatch(getMake(allMake.data))
  } catch (error) {
    console.log(error)
  }
}

export default makeThunk