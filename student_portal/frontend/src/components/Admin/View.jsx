import React from 'react'
import { useState,useEffect } from 'react'
import { Link,useParams } from 'react-router-dom'
import axios from 'axios'
const View = () => {
    const initialdisplay = {
        rollNumber : "",
        UserEmail : "",
        studentName : "",
        password : ""
    }
    const [userdisplay,setuserdisplay]=useState(initialdisplay);
    const {id} =  useParams();
    console.log(id)
    const loadUser = () =>{
        const response = await axios.get(`http://localhost:8080/student/${id}`);
        setuserdisplay(response.data)
    }
      return (
    <> <h1>view</h1></>
  )
}

export default View