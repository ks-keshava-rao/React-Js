import React,{useEffect,useState} from 'react'
const Login = () => {
    const initialvalue = {
        idNumber : '',
        password : ''
    }
    const [logindata,setLoginData] = useState(initialvalue)
    const HandleLoginInputs = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name,value);
        setLoginData({...logindata,[name]:value});
    } 
    const HandleLogin = (event) => {
        event.preventDefault()
        const targetButton = event.target.name
        console.log(targetButton); 
    }
    return ( 
        <div className="container-sm">
            <br /> <br />
            <form  name='loginform'>
                <div className="form-group py-2">
                    <label >ID no.</label>
                    <input type="text" name='idNumber'onChange={HandleLoginInputs} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Roll number" required/>
                </div>
                <div className="form-group py-2">
                    <label >Password</label>
                    <input type="password" name='password' onChange={HandleLoginInputs} className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                </div> <br />
                <div className="container">
                <button  name='studentsubmit' onClick={HandleLogin}  id='studentbtn'className="btn btn-primary m-4">Login as Student</button> 
                <button  name='adminsubmit' onClick={HandleLogin}  id='adminbtn' className="btn btn-primary">Login as Admin</button>
                </div>
            </form>
        </div>
    )
}

export default Login