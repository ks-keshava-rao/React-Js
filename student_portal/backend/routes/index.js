const express = require('express');
const router = express.Router();
users = [
  {
    "studentName" : "keshav",
    "rollNumber" : "123456",
    "password" : "password",
    "Useremail" : "kskrao@gmail.com"
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

router.post('/register',(req,res,next)=>{
  console.log(req.body);
  res.send(req.body);
  
  
})
module.exports = router;
