import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'
import TransactionStepper from './TransactionStepper'
import { generateUniqueKey } from '../../utils/helper'

const TransactionStepperList = ({ ...props }) => {
  return (
    <Box>
      {props.transactions.map(transaction => <TransactionStepper key={generateUniqueKey(transaction.transactionId)} transaction={transaction} />)}
    </Box>
  )
}

TransactionStepperList.propTypes = {
  transactions: PropTypes.array.isRequired
}

export default TransactionStepperList