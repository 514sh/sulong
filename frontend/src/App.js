import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import Find from './components/Find/Find'

import carService from './services/cars'
import reviewService from './services/reviews'

const App = () => {
  const [cars, setCars] = useState([])
  const [reviews, setReviews] = useState([])
  const [isOpenCarModal, setIsOpenCarModal] = useState(false)
  const [openedCar, setOpenedCar] = useState({})
  const [lngLats, setLngLats] = useState([])

  const handleOpenCarModal = (car) => {
    car = { ...car, reviews: car.reviews.map(review => reviews.find(allReview => review.reviewId === allReview.reviewId )) }
    setOpenedCar(car)
    setIsOpenCarModal(true)
  }

  useEffect(() => {
    carService
      .getAll()
      .then(cars => {
        setCars(cars)
        setLngLats(lngLats.concat(cars.map(car => [car.location.longitude, car.location.latitude])))
      })
    reviewService.getAll().then(reviews => setReviews(reviews))
  }, [])
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
          lngLats={lngLats}
        />} />
        <Route path="/cars" element={<h1>My cars</h1>} />
        <Route path="/transactions" element={<h1>Transactions</h1>} />
      </Routes>
    </Router>
  )
}

export default App
