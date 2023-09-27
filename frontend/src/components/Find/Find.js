import React from 'react'
import PropTypes from 'prop-types'
import MapboxGLMap from './MapboxGLMap'
import CarCard from './CarCard'
import { Flex, Box } from '@chakra-ui/react'
import CarModal from './CarModal'
import { generateUniqueKey } from '../../utils/helper'

const Find = ({ ...props }) => {

  return(
    <>
      <Flex>
        <MapboxGLMap flex={1} lngLats={props.lngLats} />
        <Box flex={1}>
          {props.cars.map(car => <CarCard key={generateUniqueKey(car.id)} car={car} handleOpenCarModal={props.handleOpenCarModal} />)}
        </Box>
      </Flex>
      <CarModal {...props} car={props.openedCar} />
    </>
  )
}

Find.propTypes = {
  cars: PropTypes.array.isRequired,
  isOpenCarModal: PropTypes.bool.isRequired,
  handleOpenCarModal: PropTypes.func.isRequired,
  handleCloseCarModal: PropTypes.func.isRequired,
  openedCar: PropTypes.object,
  lngLats: PropTypes.array.isRequired,
  handlePrevImgClick: PropTypes.func.isRequired,
  handleNextImgClick: PropTypes.func.isRequired,
}

export default Find