import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Home from './pages/Home'
import Students from './pages/Students'
import Sports from './pages/Sports'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Session from './pages/Session'
import Events from './pages/Events'


function App() {

  return (
    <>
    <Header/>
    
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/students' element={<Students/>}/>
      <Route path='/sports' element={<Sports/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/session' element={<Session/>}/>
      <Route/>
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App
