const mongoose = require('mongoose');


const BlogPost = new mongoose.Schema({
    title: {type: String },
    content: {type: String},
    file: {
        fileName: {type: String},
        filetype: {type: String}
    },
    like: {type: Number},
    posted: {type: String},
    comment: [
        {
            name: {type: String},
            content: {type: String}
        }
    ]
})

module.exports = mongoose.model('blog_post', BlogPost);