import React from 'react'
import './App.css'
import { BrowserRouter , Routes, Route , Outlet } from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Country from './pages/Country.jsx'
import Contact from './pages/Contact.jsx'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CountryDetails from "./components/UI/CountryDetails.jsx";



const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Header/>
         <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/country' element={<Country/>}/>
             <Route path='/contact' element={<Contact/>}/>
             <Route path="/country/:countryName" element={<CountryDetails />} />
         </Routes>
          <Outlet />
          <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
