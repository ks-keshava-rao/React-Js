import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import LoginAdmin from './components/LoginAdmin';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Signup' element={<Signup/>}/>
        <Route exact path='/admin_login' element={<LoginAdmin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
