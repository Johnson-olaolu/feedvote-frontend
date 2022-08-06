import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProfileRoutes from './profile'

const DashboardRoutes = () => {
  return (
    <Routes>
        <Route path='profile/*' element={<ProfileRoutes/>}/>
    </Routes>
  )
}

export default DashboardRoutes