import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from './components/Admin/Signup';
import Login from './components/Home/Login';
import Home from './components/Home/Home';
import Navbar2 from './components/Header/Navbar2';
import Marks from './components/common/Marks';
import Attendance from './components/common/Attendance';
import Logout from './components/common/Logout';
import EditData from './components/Admin/EditData';
import NavbarState from './components/context/NavState';
import { useContext } from 'react'
import NavbarContext from './components/context/NavContext';
import Studentstate from './components/context/studentState';
import ProtectedRoutes from './components/Private/ProtectedRoutes';
import Userstate from './components/context/Userstate';
import Notfound from './components/NotFound/Notfound';
function App() {

  return (
    <>
      <Studentstate>
        <NavbarState>
          <Userstate>
            <Router>
              <Navbar2 />
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='*' element={<Notfound />} />
                <Route element={<ProtectedRoutes />}>
                  <Route exact path='/marks' element={<Marks />} />
                  <Route exact path='/attendance' element={<Attendance />} />
                  <Route exact path='/logout' element={<Logout />} />
                  <Route exact path='/signup' element={<Signup />} />
                  <Route exact path='/marks_edit' element={<Marks />} />
                  <Route exact path='/editdata' element={<EditData />} />
                </Route>
              </Routes>
            </Router>
          </Userstate>
        </NavbarState>
      </Studentstate>

    </>
  );
}

export default App;
