import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'

const LandingRoutes = () => {
  return (
    <Routes>
        <Route index element={<LandingPage/>}/>
    </Routes>
  )
}

export default LandingRoutes