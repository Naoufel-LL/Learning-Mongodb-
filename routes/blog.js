const express=require('express');
const router = express.Router();
const app = express();
const Blog = require('../collection/blogmodel');
const mongoose = require('mongoose')

app.use(express.json());
//Get All Blogs
router.route('/').get((req,res)=>{
    Blog.find().then((result)=>{res.json(result)}).catch((err)=>console.log(err))
    });
//Get A Blog By id
router.route('/:id').get((req,res)=>{
    Blog.findById(req.params.id).then((result)=>{res.json(result)}).catch((err)=>console.log(err))
  });
//Add new Blog
router.route('/add').post((req,res)=>{
    const username=req.body.username;
    const blog=req.body.blog;
    const bloger=new Blog({username,blog})
    bloger.save().then((result)=>{res.json("Blog Added")}).catch((err)=>console.log(err))
    });
//Delete Blog By Id
router.route('/:id').delete((req,res)=>{
        Blog.findByIdAndDelete(req.params.id)
        .then((result)=>{res.json("Blog Deleted")})
        .catch((err)=>console.log(err))
});
//Update Blog By Id
router.route('/:id').post((req,res)=>{
    Blog.findById(req.params.id)
    .then((theblog)=>{
      theblog.username = req.body.username;
      theblog.blog=req.body.blog;
      theblog.save()
      .then((result)=>res.send('Blog Updated !'))
      .catch((err)=>console.log(err))
    })
    .catch((err)=>console.log(err))
  });
//Get  Blog by User-Name
router.route('/name/:name').get((req,res)=>{
    Blog.find({username: req.params.name}).then((result)=>{res.json(result)}).catch((err)=>console.log(err))
  });
module.exports=router;