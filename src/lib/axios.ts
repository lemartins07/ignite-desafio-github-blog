import axios from 'axios'

// const URL = 'https://api.github.com'
const DEV_URL = 'http://localhost:3000'
/* const API_KEY =
  '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' */

export const api = axios.create({
  baseURL: DEV_URL,
  headers: {
    // Authorization: API_KEY,
    'Access-Control-Allow-Origin': '*',
  },
})
