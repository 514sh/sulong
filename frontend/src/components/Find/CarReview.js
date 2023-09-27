import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardBody,
  Text
} from '@chakra-ui/react'


const CarReview = ({ ...props }) => {
  return(
    <Card>
      <CardBody>
        <Text>
          Comment: {props.review.comment}
        </Text>
        <Text>
          Reviewed by: {props.review.reviewer}
        </Text>
        <Text>
          Rating: {props.review.rating}
        </Text>
      </CardBody>
    </Card>
  )
}

CarReview.propTypes = {
  review: PropTypes.object.isRequired
}

export default CarReview