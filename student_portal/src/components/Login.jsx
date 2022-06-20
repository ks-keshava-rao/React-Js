import React from 'react'

function Login() {
    return (
        <div className="container-sm">
            <br /> <br />
            <form>
                <div className="form-group">
                    <label >Roll Number</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Roll number" required/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                </div> <br />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login