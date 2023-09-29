import React from 'react'
import PropTypes from 'prop-types'
import MapboxGLMap from './MapboxGLMap'
import { Flex } from '@chakra-ui/react'
import CarModal from './CarModal'
import CarCardList from './CarCardList'
import FindCarListContainer from './FindCarListContainer'

const Find = ({ ...props }) => {

  return(
    <>
      <Flex>
        <MapboxGLMap flex={1} cars={props.cars} />
        <FindCarListContainer>
          <CarCardList {...props} />
        </FindCarListContainer>
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
  handlePrevImgClick: PropTypes.func.isRequired,
  handleNextImgClick: PropTypes.func.isRequired,
}

export default Find