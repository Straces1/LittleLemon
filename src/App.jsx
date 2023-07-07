import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';

//Pages
import Home from './Pages/HomePage';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Reservations from './Pages/Reservations';
import OrderOnline from './Pages/OrderOnline';
import Login from './Pages/Login';
import Navbar from './Components/Navbar/Navbar'


function App() {

  return (
    <Router>
      <GlobalStyles/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/reservations' element={<Reservations/>}/>
        <Route path='/order-online' element={<OrderOnline/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Outlet />
    </Router>
  )
}

export default App
