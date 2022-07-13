const express = require('express');
const router = express.Router();
const users = [
  {
    "studentName": "keshav",
    "rollNumber": "111",
    "password": "password",
    "Useremail": "kskrao@gmail.com"
  },
  {
    "studentName": "john",
    "rollNumber": "112",
    "password": "password",
    "Useremail": "stephen@gmail.com"
  },
  {
    "studentName": "stephen",
    "rollNumber": "113",
    "password": "password",
    "Useremail": "bb@gmail.com"
  },
  {
    "studentName": "rose",
    "rollNumber": "114",
    "password": "password",
    "Useremail": "rose@gmail.com"
  },
  { "rollNumber": "12", "studentName": "Virginie", "Useremail": "vfrede0@shutterfly.com", "password": "password" },
  { "rollNumber": "177", "studentName": "Charla", "Useremail": "cnorsworthy1@zimbio.com", "password": "password" },
  { "rollNumber": "14", "studentName": "Kaine", "Useremail": "ktiler2@e-recht24.de", "password": "password" },
  { "rollNumber": "110", "studentName": "Fianna", "Useremail": "feadington3@go.com", "password": "password" },
  { "rollNumber": "143", "studentName": "Maitilde", "Useremail": "mtellenbroker4@meetup.com", "password": "password" },
  { "rollNumber": "86", "studentName": "Tome", "Useremail": "tdaniellot5@craigslist.org", "password": "password" },
  { "rollNumber": "24", "studentName": "Neila", "Useremail": "ngrovier6@domainmarket.com", "password": "password" },
  { "rollNumber": "82", "studentName": "Moyra", "Useremail": "mbladen7@opera.com", "password": "password" }
]
const admindata = [
  {
    "adminID": "4321",
    "adminName": "john",
    "adminpass": "adminpass",
    "adminEmail": "john@gmail.com",
    "adminNumber":"900077668"
  }
]
/* GET home page. */
router.get('/', function (req, res, next) {
  res.send("welcome");
});
router.post('/login', (req, res, next) => {
  let result = users.find((user) => {
    console.log(user.rollNumber)
    console.log(req.body.idNumber)
    return (user.rollNumber == req.body.idNumber)
  });
  console.log(result)
  if (result) {
    if (result.password == req.body.password) {
      res.status(200).send({
        loggedData:result,
        auth: true,
        message: "Login successfull",
      })
    } else {
      res.status(200).send({
        auth: false,
        message: "incorrect password"
      })
    }
  }
  else {
    res.status(200).send({
      auth: false,
      message: "user not found",
    })
  }
})
router.post('/adminlogin', (req, res, next) => {
  let adminfound = admindata.find((user) => {
    console.log(req.body.idNumber)
    return (user.adminID == req.body.idNumber)
  });
  console.log(adminfound)
  if (adminfound) {
    if (adminfound.adminpass == req.body.password) {
      res.status(200).send({
        loggedData : adminfound,
        auth: true,
        message: "admin Login successfull",
      })
    } else {
      res.status(200).send({
        auth: false,
        message: "incorrect password"
      })
    }
  }
  else {
    res.status(200).send({
      auth: false,
      message: "admin not found",
    })
  }
})

router.post('/register', (req, res, next) => {
  console.log(req.body);

  let foundrollnumber = users.find((user) => {
    return (req.body.rollNumber == user.rollNumber)
  })
  console.log(foundrollnumber);
  if (foundrollnumber) {
    res.send({
      found: true,
      message: "user already registered"
    }).status(200);
  }
  else {
    users.push(req.body)
    res.send({
      userdata: users[users.length - 1],
      found: false,
      message: "student successfully registered"
    }).status(200);
  }
})
router.get('/usersdata', (req, res) => {
  res.send(users)
})
router.get('/student/:id', (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;
  // res.send(id).status(200)
  const userdata = users.find((user) => {
    return (user.rollNumber === id)
  })
  if (userdata) {
    res.send(userdata).status(200)
  }
  else {
    res.send({ message: "user not found" }).status(404)
  }
})
router.put('/updatedata/:id', (req, res) => {
  const { id } = req.params;
  let exists = users.find((user) => {
    return (req.body.rollNumber === user.rollNumber)
  })
  let resultid = users.findIndex((user) => {
    return (id === user.rollNumber);
  })

  const { studentName, rollNumber, Useremail, password } = req.body;
  console.log(exists, id, rollNumber);
  if (resultid >= 0) {
    [users[resultid].studentName, users[resultid].password, users[resultid].rollNumber, users[resultid].Useremail] = [studentName, password, rollNumber, Useremail];
    res.send({
      message: "successfully updated",
      updatedData: users[resultid]
    });
  }
  else {
    res.send(
      {
        message: "Invalid roll number"
      })
  }
})
router.delete('/deleteuser/:id',(req,res)=>{
  
})
module.exports = router;
