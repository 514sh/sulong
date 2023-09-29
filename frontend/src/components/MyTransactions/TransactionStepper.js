import React from 'react'
import PropTypes from 'prop-types'
import {
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepTitle,
  StepDescription,
  StepSeparator,
  Box,
  useSteps,
  StepIcon,
  StepNumber
} from '@chakra-ui/react'



const TransactionStepper = ({ ...props }) => {
  const steps = [
    { title: 'Notify', description: 'Notified Owner' },
    { title: 'Available', description: 'Marked as Available by the Owner' },
    { title: 'Booked', description: 'Car is now booked' },
    { title: 'Ongoing', description: 'On going transaction' },
    { title: 'Successful', description: 'Successful Transaction' },
  ]

  const { activeStep } = useSteps({
    index: 4,
    count: steps.length,
  })

  return (
    <Stepper index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  )
}

TransactionStepper.propTypes = {
  transaction: PropTypes.object.isRequired
}

export default TransactionStepper