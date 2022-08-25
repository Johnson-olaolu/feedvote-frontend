import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

const HomeRoutes = () => {
  return (
    <Routes>
        <Route index element={<Home/>}/>
    </Routes>
  )
}

export default HomeRoutes