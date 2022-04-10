import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//screens
import HomeScreen from './screens/HomeScreen'
import UserScreen from './screens/UserScreen'

//components
import NavbarComponent from './components/NavbarComponent';
// import NavbarComponent from './components/NavbarComponent';
// import ListComponent from './components/ListComponent';


function App() {  
  return (
    <Router>
    <NavbarComponent />
    {/* <NavbarComponent /> */}
    <main>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/user/:id" element={<UserScreen/>}/>
      </Routes>
    </main>
    </Router>
  )


}

export default App;
