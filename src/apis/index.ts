import axios from 'axios'

/**
 * Create axios instances
 */
const BASE_URL = process.env.VITE_API_URL
const api = axios.create({
  baseURL: BASE_URL,
})

// api.interceptors.request.use((config) => {
//   config.headers.Authorization = 
// })

export default api
