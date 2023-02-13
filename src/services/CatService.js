import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/cckcoder/mockup-db',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
 

export default {
  getCats() {
    return apiClient.get('/cats')
  }
}
