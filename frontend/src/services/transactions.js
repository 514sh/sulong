import axios from 'axios'

//eslint-disable-next-line
const baseUrl = `${BACKEND_URL}transactions`
const getAll =async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const services = {
  getAll
}

export default services