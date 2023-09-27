import axios from 'axios'
const baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'

const reverseGeocode = async (lngLat) => {
  //eslint-disable-next-line
  const completeUrl = `${baseUrl}${lngLat[0]},${lngLat[1]}.json?types=poi&access_token=${MAPBOX_TOKEN}`
  console.log(completeUrl)
  const response = await axios.get(completeUrl)
  return response.data.features[0].place_name
}

const services = { reverseGeocode }

export default services