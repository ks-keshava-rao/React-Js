import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';
import NavbarContext from '../context/NavContext';
import Studentcontext from '../context/studentContext';
import Userauth from '../context/Userauth';
import { Link } from 'react-router-dom';
const Login = () => {
    const studentinstance = useContext(Studentcontext);
    const navigate = useNavigate();
    const navstate = useContext(NavbarContext);
    const authstate = useContext(Userauth);
    console.log(authstate.AUTH_STATUS);

    const postLoginStudent = [{
        pageName: "Home", path: '/'
    },
    {
        pageName: "Marks", path: '/marks'
    },
    {
        pageName: "Attendance", path: "/attendance"
    },
    {
        pageName: "Logout", path: "/logout"
    },
    ]
    const postLoginAdmin = [{
        pageName: "Home", path: '/'
    },
    {
        pageName: "Marks", path: "/marks_edit"
    },
    {
        pageName: "Attendance", path: "/attendance_edit"
    },
    {
        pageName: "Student Details", path: "/editdata"
    },
    {
        pageName: "Add Student", path: "/signup"
    },
    {
        pageName: "Logout", path: "/logout"
    },
    ]
    const initialvalue = {
        idNumber: '',
        password: ''
    }
    const [logindata, setLoginData] = useState(initialvalue);
    const [toggle, setToggle] = useState(false);
    let verifydata;
    const HandleLoginInputs = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name,value);
        setLoginData({ ...logindata, [name]: value });
        verifydata = logindata;
        console.log(logindata)

    }
    const HandleLogin = (event) => {
        event.preventDefault()
        const targetButton = event.target.name
        console.log(targetButton);
        console.log(logindata)
        verifydata = { ...logindata, user: targetButton }
        // verifydata.user = targetButton
        console.log(verifydata)
        if (verifydata.user === 'studentsubmit') {
            axios.post('http://localhost:8080/login', verifydata)
                .then((response) => {
                    alert(response.data.message)
                    console.log(response.status)
                    console.log(response.data)
                    // console.log(response.data.studentName)
                    if (response.data.auth) {
                        authstate.UPDATE_AUTH({ USER_AUTH: true, ADMIN_AUTH: false })
                    }
                    if (response.data.auth === true) {
                        // console.log(navstate);
                        navigate('/');
                        navstate.updatechoice(postLoginStudent);
                        studentinstance.updatestudentdetails(response.data);

                        // console.log(navstate.navbarchoice)
                        console.log(authstate.AUTH_STATUS)
                    }
                    else alert("enter correct details")

                })
                .catch((error) => {
                    console.error(error)
                })
            setLoginData(initialvalue)
        }
        else if (verifydata.user === 'adminsubmit') {
            console.log(verifydata.user)
            console.log(verifydata)
            axios.post("http://localhost:8080/adminlogin", verifydata)
                .then((response) => {
                    alert(response.data.message);
                    console.log(response.data);
                    if (response.data.auth === true) {
                        navstate.updatechoice(postLoginAdmin)
                        navigate("/");
                    }
                })
                .catch((error) => {
                    console.error(error);
                })
            setLoginData(initialvalue);
        }
    }
    return (

        <div className="container border">
            <div className='py-4 '>

                <br /> <br />
                <form name='loginform'>
                    <div className="row justify-content-md-center">
                        <div className='col-3'>
                            <div className='py-3'>
                                <div className='text-center text-primary text-secondary'>
                                    <h1>Login</h1>
                                </div>
                            </div>
                            <div className="form-group py-2">
                                <label className='form-label'>Roll No or ID No.</label>
                                <input type="text" value={logindata.idNumber}
                                    name='idNumber'
                                    autoComplete='off'
                                    onChange={HandleLoginInputs}
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter Roll number"
                                    required />
                            </div>
                            <div className="form-group py-2">
                                <label className='form-label text-center' >Password</label>
                                <input type="password"
                                    value={logindata.password}
                                    name='password'
                                    onChange={HandleLoginInputs}
                                    className="form-control form-control-warning"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                    required />
                            </div> <br />
                            <div class="d-grid gap-2 d-md-block ms-4">
                                <button name='studentsubmit'
                                    onClick={HandleLogin}
                                    id='studentbtn'
                                    className="btn btn-success m-1 ">Login</button>
                                <button name='adminsubmit'
                                    onClick={HandleLogin}
                                    id='adminbtn'
                                    className="btn btn-danger ">Login as Admin</button>
                            </div>
                            <div className="col text-center py-3">
                                <Link to='/passrequest'>Forgot password?</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
