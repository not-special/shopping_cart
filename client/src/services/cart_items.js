import axios from 'axios'
const baseUrl = 'http://localhost:5001/api'

const getAll = () => {
  const request = axios.get(`${baseUrl}/cart`)
  return request.then(response => response.data)
}

const add = (productId) => {
  return axios.post(`${baseUrl}/add-to-cart`, {productId: productId})
}

const deleteAll = () => {
	return axios.post(`${baseUrl}/checkout`)
}

export default {
  getAll,
  add,
	deleteAll
}