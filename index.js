const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const BlogRoute = require('./Route/Blog_post');
const Blog = require('./model/blogPost');
const path = require('path');
require('dotenv').config()


// Multer
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, 'TNION' + '_'+ uniqueSuffix + path.extname(file.originalname))
    },

    mimetype: function (req, file, cb) {
      cb(null, 'we love mimi heyyy')
    },

    mimename: function (req, file, cb) {        
       
        let mimeTypeSplit = file.mimetype.split('/');

        if(mimeTypeSplit[0] === 'video'){ cb(null, 'video')}
      
        // To accept the file pass `true`, like so:
        if(mimeTypeSplit[0] === 'image'){ cb(null, 'picture')}      
      }
  })

const upload = multer({ storage: storage })
// controllers
const login = require('./controllers/login');
const signup = require('./controllers/signup');



const app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.listen(process.env.PORT);
app.use(express.static('public'))
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(response =>{
    console.log('Connected');
})



app.use('/blog', BlogRoute);
app.post('/signup', signup)
app.post('/login', login);


app.post('/post-blog', upload.single('file'), function (req, res, next) {
  const date = new Date()
  Blog.create({
        title: req.body.header,
        content: req.body.content,
        like: 0,
        posted: date.toDateString() + '-' +date.toLocaleTimeString(),
        file: {
          fileName: req.file ? req.file.filename: '',
          filetype: req.file ? req.file.mimetype.split('/')[0]: '',
        }
    })
    .then(result =>{
        res.redirect('/blog')
        console.log(result)
    })
})