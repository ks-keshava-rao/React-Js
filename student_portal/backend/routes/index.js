const express = require('express');
const router = express.Router();
users = [
  {
    "studentName" : "keshav",
    "rollNo" : "123456",
    "password" : "password"
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("welcome");
});
router.post('/login',(req,res,next)=>{
   let result = users.find((user)=>{
    console.log(user.rollNo)
    console.log(req.body.idNumber)
    return (user.rollNo == req.body.idNumber)
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
module.exports = router;
