import React from 'react'
import PropTypes from 'prop-types'
import {
  UnorderedList,
  ListItem
} from '@chakra-ui/react'
import { generateUniqueKey } from '../../utils/helper'

const CarFeaturesList = ({ ...props }) => {
  return (
    <UnorderedList>
      {props.car.features.map(feature => <ListItem key={generateUniqueKey(`${props.car.id + feature}`)}>{feature}</ListItem>)}
    </UnorderedList>
  )
}

CarFeaturesList.propTypes = {
  car: PropTypes.object.isRequired
}

export default CarFeaturesList