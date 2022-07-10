import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const EditData = () => {
  const [users, setUser] = useState([])
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/usersdata")
    // console.log(result.data);
    setUser(result.data)
  }
  console.log(users)
  const deleteuser = () =>{
    console.log('deleted')
  }
  return (
    <>
      <div className='container'>
      <h2 className="text-center mt-4">Edit student details</h2>
        <div className='py-4'>
          <table className="table border shadow">
            <thead className='bg-dark text-white'>
              <tr>
                <th scope='col'>Sno.</th>
                <th scope='col'>Roll Number</th>
                <th scope='col'>Student Name</th>
                <th scope='col'>Email-id</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody >
              {
                users.map((user, index) => 
                  (
                  <tr key={index}>
                    <td scope='row'>{index+1}</td>
                    <td>{user.rollNumber}</td>
                    <td>{user.studentName}</td>
                    <td>{user.Useremail}</td>
                    <td>
                      <Link className='btn btn-primary bg-gradient me-2' to={`/editdata/${user.rollNumber}`}>View</Link>
                      <Link className='btn btn-outline-primary me-2' to={`/editdata/edit/${user.rollNumber}`}>Edit</Link>
                      <button className='btn btn-danger bg-gradient me'>Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default EditData