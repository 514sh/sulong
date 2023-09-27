import React from 'react'
import PropTypes from 'prop-types'
import {
  IconButton,
  Box,
  Image
} from '@chakra-ui/react'
import {
  GoChevronLeft,
  GoChevronRight
} from 'react-icons/go'

const CarImages = ({ ...props }) => {
  console.log(props.images)
  return (
    <Box position="relative" textAlign="center">
      <IconButton
        icon={<GoChevronLeft />}
        position="absolute"
        left="0"
        top="50%"
        transform="translateY(-50%)"
        onClick={props.handlePrevImgClick}
        aria-label="Previous"
      />
      <Image
        borderRadius="xl"
        size="lg"
        m={4}
        src={props.images[props.carImgIndex]}
        alt={props.images[props.carImgIndex]}
      />
      <IconButton
        icon={<GoChevronRight />}
        position="absolute"
        right="0"
        top="50%"
        transform="translateY(-50%)"
        onClick={() => props.handleNextImgClick(props.images)}
        aria-label="Next"
      />
    </Box>
  )
}

CarImages.propTypes = {
  images: PropTypes.array,
  handlePrevImgClick: PropTypes.func.isRequired,
  handleNextImgClick: PropTypes.func.isRequired,
  carImgIndex: PropTypes.number.isRequired
}

export default CarImages