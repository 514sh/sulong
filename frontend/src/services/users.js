import axios from 'axios'

//eslint-disable-next-line
const baseUrl = `${BACKEND_URL}users`
const getAll =async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getOne =async (userId) => {
  //eslint-disable-next-line
  const url = `${BACKEND_URL}users/:${userId}`
  const response = await axios.get(url)
  return response.data
}

const services = {
  getAll,
  getOne
}

export default services