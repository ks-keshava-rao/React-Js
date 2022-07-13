import React, { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AdminContext from '../context/AdminContext'
import Studentcontext from '../context/studentContext'
import Userauth from '../context/Userauth'
import { MdLogout,MdHome,MdPeopleAlt } from "react-icons/md";
const Logout = () => {
  const profiledisplay = useRef({})
  const { admindata } = useContext(AdminContext);
  const { studentdetails } = useContext(Studentcontext);
  const { AUTH_STATUS, UPDATE_AUTH } = useContext(Userauth);
  console.log(admindata, studentdetails);
  console.log(AUTH_STATUS)

  if (AUTH_STATUS.USER_AUTH) {
    profiledisplay.current = studentdetails
  }
  else if (AUTH_STATUS.ADMIN_AUTH) {
    profiledisplay.current = admindata
  }


  return (
    <>
      {/* {console.log(profiledisplay.current)} */}
      <div className="container mt-5">
        <div className="w-75 mx-auto shadow p-5">
          <h1 className='display-4 text-center  '> Profile <MdPeopleAlt/></h1>
          <ul className="list-group w-50 mt-3 mx-auto justify-content-center">
            {
              Object.keys(profiledisplay.current).map((property, index) =>
              (
                <li key={index} className="list-group-item">{property} :  {profiledisplay.current[property]}</li>
              ))
            }

          </ul>
          <div className="col-sm-12 text-center mt-4">
          <Link className="btn btn-danger btn-md me-5" to='/' type="button">Home <MdHome/></Link>
            <button className="btn btn-success btn-md ms-5" type="button">Logout <MdLogout/></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Logout

