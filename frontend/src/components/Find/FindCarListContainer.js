import React from 'react'
import PropTypes from 'prop-types'
import {
  Box
} from '@chakra-ui/react'

const FindCarListContainer = ({ children }) => {
  return (
    <Box>
      {children}
    </Box>
  )
}

FindCarListContainer.propTypes = {
  children: PropTypes.element
}

export default FindCarListContainer