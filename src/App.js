import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//screens
import HomeScreen from './screens/HomeScreen'
import UserScreen from './screens/UserScreen'

//components
import NavbarComponent from './components/NavbarComponent';


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
