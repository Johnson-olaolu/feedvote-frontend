import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ConfirmRegistration from './confirm-reg'
import Login from './login'
import SignUp from './sign-up'

const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/confirm-reg/:userId/:confirmationToken' element={<ConfirmRegistration/>} />
    </Routes>
  )
}

export default AuthRoutes