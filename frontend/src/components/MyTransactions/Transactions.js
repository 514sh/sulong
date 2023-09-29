import React from 'react'
import PropTypes from 'prop-types'
import TransactionStepperList from './TransactionStepperList'

const Transactions = ({ ...props }) => {
  return (
    <TransactionStepperList {...props} />
  )
}

Transactions.propTypes = {
  transactions: PropTypes.array.isRequired
}

export default Transactions