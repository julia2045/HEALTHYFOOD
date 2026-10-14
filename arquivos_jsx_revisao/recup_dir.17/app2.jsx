import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import FormDish from './Components/Dish/FormDish'
import FormAllergen from './Components/Dish/FormAllergen'
import Home from './Components/Login/Home'

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header/>
          <main>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='cadastro/*' element={<FormRegisterUser/>}
          </main>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
