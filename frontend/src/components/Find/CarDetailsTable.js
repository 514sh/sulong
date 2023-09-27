import React from 'react'
import PropTypes from 'prop-types'
import {
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td
} from '@chakra-ui/react'

const CarDetailsTable = ({ ...props }) => {
  return(
    <TableContainer>
      <Table variant='striped' colorScheme='teal'>
        <Tbody>
          <Tr>
            <Td>Transmission Type</Td>
            <Td>{props.car.transmissionType}</Td>
          </Tr>
          <Tr>
            <Td>Seating Capacity</Td>
            <Td>{props.car.seatingCapacity}</Td>
          </Tr>
          <Tr>
            <Td>Fuel Type</Td>
            <Td>{props.car.fuelType}</Td>
          </Tr>
          <Tr>
            <Td>Engine Size</Td>
            <Td>{props.car.engineSize}</Td>
          </Tr>
          <Tr>
            <Td>Registered Until</Td>
            <Td>{props.car.registeredUntil}</Td>
          </Tr>
          <Tr>
            <Td>License Plate</Td>
            <Td>{props.car.licensePlate}</Td>
          </Tr>
          <Tr>
            <Td>Vehicle Identification Number</Td>
            <Td>{props.car.vin}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}

CarDetailsTable.propTypes = {
  car: PropTypes.object.isRequired
}

export default CarDetailsTable