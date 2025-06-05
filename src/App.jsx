import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Browse from './components/Browse'

function App() {
  return (
  <BrowserRouter>
   <Routes>
       <Route path='/' element={<Login/>}></Route>
       <Route path='/browse' element={<Browse/>}></Route>
      </Routes>
  </BrowserRouter>
  )
}

export default App