import axios from 'axios'

const URL = process.env.REACT_APP_API_URL

export const api = {
  getCrates: async () => {
    const res = await axios.get(`${URL}/crates.json`)
    return res.data.data
  }
}
