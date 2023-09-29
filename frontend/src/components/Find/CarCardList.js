import React from 'react'
import PropTypes from 'prop-types'
import CarCard from './CarCard'
import { generateUniqueKey } from '../../utils/helper'

const CarCardList = ({ ...props }) => {
  return (
    <>
      {props.cars.map(car => <CarCard key={generateUniqueKey(car.id)} car={car} handleOpenCarModal={props.handleOpenCarModal} />)}
    </>
  )
}

CarCardList.propTypes = {
  cars: PropTypes.array.isRequired,
  handleOpenCarModal: PropTypes.func.isRequired,
}

export default CarCardList