import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import { Box } from '@chakra-ui/react'

import Find from './components/Find/Find'
import CarCard from './components/Find/CarCard'
import Transactions from './components/MyTransactions/Transactions'

import carService from './services/cars'
import reviewService from './services/reviews'
import transactionService from './services/transactions'

import { generateUniqueKey } from './utils/helper'

const App = () => {
  const [cars, setCars] = useState([])
  const [reviews, setReviews] = useState([])
  const [isOpenCarModal, setIsOpenCarModal] = useState(false)
  const [openedCar, setOpenedCar] = useState({})
  const [carImgIndex, setCarImgIndex] = useState(0)
  const [carsOfUser, setCarsOfUser] = useState([])
  const [transactionsOfUser, setTransactionOfUser] = useState([])

  const handleOpenCarModal = (car) => {
    car = { ...car, reviews: car.reviews.map(review => reviews.find(allReview => review.reviewId === allReview.reviewId )) }
    setOpenedCar(car)
    setIsOpenCarModal(true)
  }

  const handlePrevImgClick = () => {
    setCarImgIndex(Math.max(0, carImgIndex - 1))
  }

  const handleNextImgClick = (images) => {
    setCarImgIndex(Math.min(images.length - 1, carImgIndex + 1))
  }

  useEffect(() => {
    carService
      .getAll()
      .then(cars => {
        setCars(cars.filter(car => car.approved && car.availability ))
        setCarsOfUser(cars.filter(car => parseInt(car.owner) === 1))
      })
    reviewService.getAll().then(reviews => setReviews(reviews))

    transactionService
      .getAll()
      .then(transactions => {
        setTransactionOfUser(transactions)
      })
  }, [])
  console.log('cars of user ',carsOfUser)
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/find">Find</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/transactions">Transaction</Link>
      </div>

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/find" element={<Find
          cars={cars}
          handleCloseCarModal={() => setIsOpenCarModal(false)}
          handleOpenCarModal={(car) => handleOpenCarModal(car)}
          isOpenCarModal={isOpenCarModal}
          openedCar={openedCar}
          handlePrevImgClick={handlePrevImgClick}
          handleNextImgClick={handleNextImgClick}
          carImgIndex={carImgIndex}
        />} />
        <Route path="/cars" element={
          <Box>
            {carsOfUser.map(car => <CarCard key={generateUniqueKey(car.id)} car={car} handleOpenCarModal={(car) => handleOpenCarModal(car)} />)}
          </Box>} />
        <Route path="/transactions" element={<Transactions transactions={transactionsOfUser} />} />
      </Routes>
    </Router>
  )
}

export default App
