import React, { useState } from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Burger from './pages/Burger'
import Pasta from './pages/Pasta'
import Pizza from './pages/Pizza'
import NavBar from './components/NavBar'

export default function App() {
  const [search, setSearch] = useState('')

  return (
    <BrowserRouter>
      <NavBar search={search} setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<LandingPage search={search} />} />
        <Route path='/burger' element={<Burger search={search} />} />
        <Route path='/pizza' element={<Pizza search={search} />} />
        <Route path='/pasta' element={<Pasta search={search} />} />
      </Routes>
    </BrowserRouter>
  )
} 
