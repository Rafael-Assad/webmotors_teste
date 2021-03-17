import axios from 'axios'
import { getVersion} from './action'

const versionThunk = (modelID) => async (dispatch, getState) => {
  const URL = `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=${modelID}`

  try {
    const allVersions = await axios.get(URL)
    
    dispatch(getVersion(allVersions.data))
  } catch (error) {
    console.error(error)
  }
}

export default versionThunk