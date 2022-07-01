import React from 'react'
import Studentcontext from '../context/studentContext';
import { useContext } from 'react';
function Home(props) {
  const {studentdetails,updatestudentdetails} = useContext(Studentcontext);
  // console.log(studentdetails);
  return (
    <div className='container'>
            <br /> <br />
            <br /> <br />
        <h1>Welcome to Portal  </h1>
    </div>
  )
}

export default Home