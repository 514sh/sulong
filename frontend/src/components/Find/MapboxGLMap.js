import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import { Box } from '@chakra-ui/react'

mapboxgl.workerClass = MapboxWorker

//eslint-disable-next-line
mapboxgl.accessToken = MAPBOX_TOKEN

const addMarker = (lngLat, map) => {
  new mapboxgl.Marker()
    .setLngLat(lngLat)
    .addTo(map)
}

const MapboxGLMap = ({ ...props }) => {
  const mapContainer = useRef(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11', // You can choose a different map style
      center: [120.979683, 14.582919], // Initial map center coordinates
      zoom: 9, // Initial zoom level
    })
    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
      })
    )

    props.cars.forEach(car => {
      const lngLat = [car.location.longitude, car.location.latitude]
      addMarker(lngLat, map)
    })
    console.log('map', mapContainer.current)
    // addMarker([120.772720, 14.946988], map)
    // Clean up the map when the component unmounts
    return () => map.remove()
  }, [])

  return <Box
    ref={mapContainer}
    borderWidth='1px'
    borderRadius='lg'
    w={{ base: '80%', sm: '60%', md: '50%' }}
    h='70vh'

  />
}

MapboxGLMap.propTypes = {
  cars: PropTypes.array.isRequired,
}

export default MapboxGLMap