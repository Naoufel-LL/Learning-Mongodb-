const express=require('express');
const router = express.Router();
const app = express();
const User = require('../collection/usermodel');
const mongoose = require('mongoose')

app.use(express.json());

//Get All Users
router.route('/').get((req,res)=>{
   User.find().then((result)=>{res.json(result)}).catch((err)=>console.log(err))
 });
 //Get  Users by Age
router.route('/age/:age').get((req,res)=>{
  User.find({age:parseInt(req.params.age)}).then((result)=>{res.json(result)}).catch((err)=>console.log(err))
});
//Get  Users by Name
router.route('/name/:name').get((req,res)=>{
  User.find({username: req.params.name}).then((result)=>{res.json(result)}).catch((err)=>console.log(err))
});
 //Get A User by Id
router.route('/:id').get((req,res)=>{
     User.findById(req.params.id).then((result)=>{res.json(result)}).catch((err)=>console.log(err))
   });
//Add New User
router.route('/add').post((req,res)=>{
 const username=req.body.username;
 const age=req.body.age;
 const user=new User({username,age})
 user.save().then((result)=>{
   res.json("User Added !");
   router.get('/');
  }).catch((err)=>console.log(err))
 });
//Delete User By Id
router.route('/:id').delete((req,res)=>{
  User.findByIdAndDelete(req.params.id)
  .then((result)=>{res.json("User Deleted")})
  .catch((err)=>console.log(err))
});
//Update User By Id
router.route('/:id').post((req,res)=>{
  User.findById(req.params.id)
  .then((theuser)=>{
    theuser.username = req.body.username;
    theuser.age=req.body.age;
    theuser.save()
    .then((result)=>res.send('User Updated !'))
    .catch((err)=>console.log(err))
  })
  .catch((err)=>console.log(err))
});

module.exports=router;