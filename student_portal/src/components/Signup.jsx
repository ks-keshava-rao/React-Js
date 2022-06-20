import React from 'react'
import { useState } from 'react'
const Signup = () => {
    const [userData,setData] = useState({
        userName : "",
        rollNumber : "",
        studentName : "",
        password : ""
    })
    return (
        <>
            <div className="container-sm">
                <br /> <br />
                <form>
                    <div className="form-group py-2">
                        <label >Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                    </div>
                    <div className="form-group py-2">
                        <label >Roll Number</label>
                        <input type="text" class="form-control" id="exampleInputrollno" aria-describedby="emailHelp" placeholder="Enter Roll no" required/>
                    </div>
                    <div className="form-group py-2" >
                        <label >Student name</label>
                        <input type="email" class="form-control" id="exampleInputname" aria-describedby="emailHelp" placeholder="Enter name" required/>
                    </div>
                    <div className="form-group py-2" >
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                    </div> <br />
                    <button type="submit" className="btn btn-primary">Submit data</button>
                </form>
            </div>
        </>
    )
}

export default Signup