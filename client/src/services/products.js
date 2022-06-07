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

const update = (id, changedProduct) => {
  const request = axios.put(`${baseUrl}/products/${id}`, changedProduct);
  return request.then(response => response.data);
}

export default {
  getAll, 
  remove,
  add,
  update, 
}
