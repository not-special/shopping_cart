import axios from 'axios'
const baseUrl = 'http://localhost:5001/api'

const getAll = () => {
  const request = axios.get(`${baseUrl}/products`)
  return request.then(response => response.data)
}

const remove = (id) => {
  return axios.delete(`${baseUrl}/products/${id}`)
} 

const add = (product) => {
  return axios.post(`${baseUrl}/products`, product)
}

export default {
  getAll, 
  remove,
  add,
}
