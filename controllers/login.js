

const mongoose = require('mongoose');
const Users = require('../model/users')





const login = async (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;

    const user = await Users.findOne({email: email})
    
    if(user){
        if(user.password === password){
            res.status(200).json(user)
        }else{
            res.status(404).json({error: 'Username/Password Not valid'})
        }
    }else{
        res.status(404).json({error: 'Username/Password Not valid'})
    }
}


module.exports = login

