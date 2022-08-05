import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './login'
import SignUp from './sign-up'

const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>} />
    </Routes>
  )
}

export default AuthRoutes