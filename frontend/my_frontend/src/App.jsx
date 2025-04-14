import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link , Route,Routes,BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/home';
import ImageGallary from './components/image_gallary';
const App = ()=>{
  try{
    return(
      <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar/>} >       
          <Route path="/image" element={<ImageGallary/>} />  
          <Route index element={<Home/>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/cart" element={<h1>Cart</h1>} />

        
          </Route>
        </Routes>
      </Router>
      </>
    )
  }
  catch(err){
    console.log(err)
  }
  finally{
    console.log("App component rendered")
  }
}


export default App
