import axios from 'axios'

const MODE = 'dev'

const URL = MODE === 'dev' ? 'http://localhost:3334' : 'https://api.github.com'

export const api = axios.create({
  baseURL: URL,
})
