import React from 'react'

const Login = () => {
    return (
        <div className="container-sm">
            <br /> <br />
            <form>
                <div className="form-group py-2">
                    <label >Roll Number</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Roll number" required/>
                </div>
                <div className="form-group py-2">
                    <label >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                </div> <br />
                <div className="container">
                <button type="submit" className="btn btn-primary m-4">Login as Student</button> 
                <button type="submit" className="btn btn-primary">Login as Admin</button>
                </div>
            </form>
        </div>
    )
}

export default Login