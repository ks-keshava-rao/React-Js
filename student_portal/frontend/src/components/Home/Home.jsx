import React from 'react'
import Studentcontext from '../context/studentContext';
import { useContext } from 'react';
import DisplayNamecontext from '../context/DisplayNamecontext';
function Home(props) {
  const {studentdetails,updatestudentdetails} = useContext(Studentcontext);
  const {displayname} = useContext(DisplayNamecontext);
  console.log(displayname);
  return (
    <div className='container'>
            <br /> <br />
            <br /> <br />
        <h1 className='text-center'>Welcome to Portal {displayname} </h1>
    </div>
  )
}

export default Home