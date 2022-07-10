import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Edit = () => {
    const {id} = useParams();
    console.log(id)
    const initialdata = {
        studentName : "",
        rollNumber : "",
        password : "",
        Useremail : "",
    }
    
    const [userdata,updateuserdata] = useState(initialdata)
    const handleInput = (event)=>{
            updateuserdata({...userdata,[event.target.name]:event.target.value});
    };
    useEffect(()=>{
        loaduser();
    },[]);
    const handlesubmit = async(event) =>{
        event.preventDefault();
    }
    const loaduser = async() =>{
        const response = await axios.get(`http://localhost:8080/student/${id}`)
        console.log(response.data);
        updateuserdata(response.data);

    }
  return (
    <>
    <div className="container">
        <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Edit student details</h2>
            <form onSubmit={(e)=>handlesubmit(e)}>
                <div className="form-group mb-4">
                    <input
                     type="text"
                     className='form-control form-control-lg'
                     placeholder='Enter name' 
                     name='studentName'
                     value={userdata.studentName}
                     onChange={(e)=>{handleInput(e)}}
                     />
                </div>
                <div className="form-group mb-4">
                    <input
                     type="text"
                     className='form-control form-control-lg'
                     placeholder='Enter email' 
                     name='Useremail'
                     value={userdata.Useremail}
                     onChange={(e)=>{handleInput(e)}}
                     />
                </div>
                <div className="form-group mb-4">
                    <input
                     type="text"
                     className='form-control form-control-lg'
                     placeholder='Enter name' 
                     name='rollNumber'
                     value={userdata.rollNumber}
                     onChange={(e)=>{handleInput(e)}}
                     />
                </div>
                <div className="form-group mb-4">
                    <input
                     type="text"
                     className='form-control form-control-lg'
                     placeholder='Enter name' 
                     name='password'
                     value={userdata.password}
                     onChange={(e)=>{handleInput(e)}}
                     />
                </div>
                <div class="d-grid gap-2 col-13 mx-auto">
                <button className="btn btn-danger ">Update data</button>
                <Link className="btn btn-success" to='/editdata'>Cancel</Link>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Edit