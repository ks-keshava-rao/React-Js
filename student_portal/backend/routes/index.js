const express = require('express');
const router = express.Router();
const users = [
  {
    "studentName" : "keshav",
    "rollNumber" : "111",
    "password" : "password",
    "Useremail" : "kskrao@gmail.com"
  },
  {
    "studentName" : "aa",
    "rollNumber" : "112",
    "password" : "password",
    "Useremail" : "aa@gmail.com"
  },
  {
    "studentName" : "bb",
    "rollNumber" : "113",
    "password" : "password",
    "Useremail" : "bb@gmail.com"
  },
  {
    "studentName" : "cc",
    "rollNumber" : "114",
    "password" : "password",
    "Useremail" : "cc@gmail.com"
  }
]
const admindata = [
  {
    "adminID" : 4321,
    "adminName" : "john",
    "adminpass" : "adminpass"
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("welcome");
});
router.post('/login',(req,res,next)=>{
   let result = users.find((user)=>{
    console.log(user.rollNumber)
    console.log(req.body.idNumber)
    return (user.rollNumber == req.body.idNumber)
   });
   console.log(result)
   if(result){
    if(result.password==req.body.password){
      res.status(200).send({
        ...result,
        auth : true,
        message : "Login successfull",
      })
    }else{
      res.status(200).send({
        auth:false,
        message : "incorrect password"
      })
    }
   }
   else{
    res.status(200).send({
      auth:false,
      message : "user not found",
    })
   }
})
router.post('/adminlogin',(req,res,next)=>{
   let adminfound = admindata.find((user)=>{
    console.log(req.body.idNumber)
    return (user.adminID == req.body.idNumber)
   });
   console.log(adminfound)
   if(adminfound){
    if(adminfound.adminpass==req.body.password){
      res.status(200).send({
        ...adminfound,
        auth : true,
        message : "admin Login successfull",
      })
    }else{
      res.status(200).send({
        auth:false,
        message : "incorrect password"
      })
    }
   }
   else{
    res.status(200).send({
      auth:false,
      message : "admin not found",
    })
   }
})

router.post('/register',(req,res,next)=>{
  console.log(req.body);  

  let foundrollnumber = users.find((user)=>{
    return (req.body.rollNumber==user.rollNumber)
  })
  console.log(foundrollnumber);
  if(foundrollnumber){
    res.send({
      found:true,
      message:"user already registered"
    }).status(200);
  }
  else{
    users.push(req.body)
    res.send({
      userdata:users[users.length-1],
      found :  false,
      message : "student successfully registered"
    }).status(200);
  }
})
router.get('/usersdata',(req,res)=>{
  res.send(users)
})
router.get('/student/:id',(req,res)=>{
  console.log(req.params.id);
  const {id} = req.params;
  // res.send(id).status(200)
  const userdata = users.find((user)=>{
    return(user.rollNumber === id)
  })
  if(userdata){
    res.send(userdata).status(200)
  }
  else{
    res.send({message:"user not found"}).status(404)
  }
})
module.exports = router;
