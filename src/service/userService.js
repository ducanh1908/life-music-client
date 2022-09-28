import axios from 'axios'


const baseURL = 'http://localhost:4000/api'

export const register = async (dispatch, user) => {
   
await axios.post(baseURL+'/register', user)
}

