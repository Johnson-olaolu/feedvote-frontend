import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateFeed from './create'

const FeedRoutes = () => {
  return (
    <Routes>
      <Route path='/create' element ={<CreateFeed/>}/>
    </Routes>
  )
}

export default FeedRoutes