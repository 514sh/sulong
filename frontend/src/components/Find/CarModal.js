import React from 'react'
import PropTypes from 'prop-types'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from '@chakra-ui/react'
import CarDetailsTable from './CarDetailsTable'
import CarFeaturesList from './CarFeaturesList'
import CarReview from './CarReview'
import { generateUniqueKey } from '../../utils/helper'

const CarModal = ({ ...props }) => {
  console.log(props.car)
  return (
    <Modal size='lg' isOpen={props.isOpenCarModal} onClose={props.handleCloseCarModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.car.make} {props.car.model} {props.car.year}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            borderRadius="xl"
            size="lg"
            m={4}
            src={props.car.images}
            alt={props.car.make + props.car.model + props.car.year}
          />

          <Tabs variant='enclosed'>
            <TabList>
              <Tab>Car Details</Tab>
              <Tab>Features</Tab>
              <Tab>Reviews</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <CarDetailsTable {...props} />
              </TabPanel>
              <TabPanel>
                <CarFeaturesList {...props} />
              </TabPanel>
              <TabPanel>
                {props.car.reviews ? props.car.reviews.map(review => <CarReview key={generateUniqueKey(`${props.car.id + review.reviewId}`)} review={review} />): ''}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={props.handleCloseCarModal}>
              Close
          </Button>
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

CarModal.propTypes = {
  isOpenCarModal: PropTypes.bool.isRequired,
  handleCloseCarModal: PropTypes.func.isRequired,
  car: PropTypes.object.isRequired,
}

export default CarModal