import React from 'react'
import Navbar  from "./Common/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Experience from './Pages/Experience/Experience'
import { Routes ,Route, BrowserRouter} from "react-router-dom"

const App = () => {
  return (
    <>
    <Navbar/>
   
 
   
    <BrowserRouter>
      <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/experience' element={<Experience/>} />
  

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App