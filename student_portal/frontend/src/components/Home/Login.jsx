import React,{useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Navbar2 from '../Header/Navbar2';
var studentAuth = false
const Login = () => {
    
    const navigate = useNavigate();
    const initialvalue = {
        idNumber : '',
        password : ''
    }
    const [logindata,setLoginData] = useState(initialvalue);
    let verifydata; 
    const HandleLoginInputs = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name,value);
        setLoginData({...logindata,[name]:value});
        verifydata = logindata;
        console.log(logindata)
        
    } 
    const HandleLogin = (event) => {
        event.preventDefault()
        const targetButton = event.target.name
        console.log(targetButton); 
        console.log(logindata)
        verifydata = {...logindata,user:targetButton}
        // verifydata.user = targetButton
        console.log(verifydata)
        axios.post('http://localhost:8080/login',verifydata)
        .then((response)=>{
            alert(response.data.message)
            console.log(response.status)
            console.log(response.data.auth)
            console.log(response.data.studentName)
            studentAuth = !studentAuth;
            if(response.data.auth){
                studentAuth=!studentAuth;
                navigate('/studenthome');
                
            } 
            else alert("enter correct details")
            
        })
        .catch((error)=>{
            console.error(error)
        })
        setLoginData(initialvalue)
    }
    return ( 
        <div className="container-sm">
            <br /> <br />
            <form  name='loginform'>
                <div className="form-group py-2">
                    <label >Roll No or ID No.</label>
                    <input type="text" value={logindata.idNumber} 
                    name='idNumber'
                    autoComplete='off'
                    onChange={HandleLoginInputs} 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter Roll number" 
                    required/>
                </div>
                <div className="form-group py-2">
                    <label >Password</label>
                    <input type="password" 
                    value={logindata.password} 
                    name='password' 
                    onChange={HandleLoginInputs} 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Password" 
                    required/>
                </div> <br />
                <div className="container">
                <button  name='studentsubmit' 
                onClick={HandleLogin}  
                id='studentbtn'
                className="btn btn-primary m-4">Login</button> 
                <button  name='adminsubmit' 
                onClick={HandleLogin} 
                 id='adminbtn' 
                 className="btn btn-primary">Login as Admin</button>
                </div>
            </form>
        </div>
    )
}

export default Login
export {studentAuth};