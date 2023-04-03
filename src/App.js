import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import Header from './companents/header/header'
import Clients from './pages/clients/clients'
import Login from './pages/login/login'
import Main from './pages/main/main'
import Register from './pages/register/register'
import Suppliers from './pages/suppliers/suppliers'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/main' element={<Main />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/suppliers' element={<Suppliers />} />
      </Routes>
    </div>
  )
}

export default App