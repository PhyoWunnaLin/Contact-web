import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'

const Path = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>} />
    </Routes>
  )
}

export default Path
