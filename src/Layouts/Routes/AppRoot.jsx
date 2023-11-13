import React from 'react'
import AppLayout from '../AppLayout'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'


export default () => {

  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  )
}
