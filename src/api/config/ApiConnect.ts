import axios from 'axios'

const API_ENDPOINT = 'https://puvel.ru:8033/'

export const ApiConnect = axios.create({
    baseURL: API_ENDPOINT,
    withCredentials: true,
})
