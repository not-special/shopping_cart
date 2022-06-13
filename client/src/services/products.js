import axios from 'axios'
const baseUrl = 'http://localhost:5001/api'

const getAll = async () => {
  const { data } = await axios.get(`${baseUrl}/products`)
  return data
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
