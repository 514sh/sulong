import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  Flex,
  CardFooter,
  Button
} from '@chakra-ui/react'
import { GoLocation } from 'react-icons/go'

const CarCard = ({ ...props }) => {
  return(
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={props.car.images[0]}
        alt={props.car.make + props.car.model + props.car.year}
      />

      <Stack>
        <CardBody>
          <Heading size='md'>{props.car.make} {props.car.model} {props.car.year}</Heading>

          <Flex>
            <GoLocation /> {props.car.placeName}
          </Flex>
          <Text>
            Price per day: {props.car.pricePerDay}
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant='solid' colorScheme='blue' onClick={() => props.handleOpenCarModal(props.car)}>
            See details
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}

CarCard.propTypes = {
  car: PropTypes.object.isRequired,
  handleOpenCarModal: PropTypes.func.isRequired,
}

export default CarCard