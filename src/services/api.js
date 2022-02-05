import axios from 'axios'

const URL = process.env.REACT_APP_API_URL

export const api = {
  getCrates: async () => {
    try {
      const res = await axios.get(`${URL}/cratses.json`)
      return res.data.data
    } catch (e) {
      console.log({ e })
    }
  }
}
