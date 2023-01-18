const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    fullname: {type: String },
    email: {type: String},
    telephone: {type: String},
    password: {type: String},
})

module.exports = mongoose.model('user', userSchema);