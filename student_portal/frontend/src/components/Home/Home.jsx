import React from 'react'
import Studentcontext from '../context/studentContext';
import { useContext } from 'react';
import DisplayNamecontext from '../context/DisplayNamecontext';
import { FaReact } from "react-icons/fa";
function Home(props) {
  const {studentdetails,updatestudentdetails} = useContext(Studentcontext);
  const {displayname} = useContext(DisplayNamecontext);
  console.log(displayname);
  return (
    <>
    <div>
    <div className='container'>
            <br /> <br />
            <br /> <br />
            
        <h1 className=' display-4 text-center mt-9'> <FaReact/> Welcome to Portal {displayname} </h1>
    </div>
    </div>
    </>
  )
}

export default Home