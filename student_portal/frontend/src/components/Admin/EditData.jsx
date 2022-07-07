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
  return (
    <>
      <div className='container'>
        <div className='py-4'>
          <table className="table border shadow">
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>Sno.</th>
                <th scope='col'>Roll Number</th>
                <th scope='col'>Student Name</th>
                <th scope='col'>Email-id</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, index) => 
                  (
                  <tr key={index}>
                    <td scope='row'>{index+1}</td>
                    <td>{user.rollNumber}</td>
                    <td>{user.studentName}</td>
                    <td>{user.Usermail}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default EditData