import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Signup from './components/Admin/Signup';
import Login from './components/Home/Login';
import Home from './components/Home/Home';
import Navbar2 from './components/Header/Navbar2';
import Marks from './components/common/Marks';
import Attendance from './components/common/Attendance';
import Logout from './components/common/Logout';
import EditData from './components/Admin/EditData';
function App() {
  const prelogin = [
    {
      pageName : "Home",
      path : '/'
    },
    {
      pageName : "Login",
      path : '/login'
    },
    {
      pageName : "sample",
      path : '/sample'
    }
  ]
  const postLoginStudent = [
    {
      pageName : "Home",
      path : '/'
    },
    {
      pageName : "Marks",
      path : '/marks'
    },
    {
      pageName : "Attendance",
      path : "/attendance"
    },
    {
      pageName : "Logout",
      path : "/logout"
    },
  ]
  const postLoginAdmin= [
    {
      pageName : "Home",
      path : '/'
    },
    {
      pageName : "Edit Marks",
      path : "/marks_edit"
    },
    {
      pageName : "Edit Attendance",
      path : "/attendance_edit"
    },
   
    {
      pageName : "Edit Details",
      path : "/editdata"
    },
    {
      pageName : "Logout",
      path : "/logout"
    },
  ]
  const currentNavDisplay = prelogin  
  return (
    <Router>
      <Navbar2 Navdisplay = {currentNavDisplay}/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/logout' element={<Logout/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/marks' element={<Marks/>}/>
        <Route exact path='/attendance' element={<Attendance/>}/>
        <Route exact path='/attendance_edit' element={<Attendance/>}/>
        <Route exact path='/marks_edit' element={<Marks/>}/>
        <Route exact path='/editdata' element={<EditData/>}/>
      </Routes>
    </Router>
  );
}

export default App;
