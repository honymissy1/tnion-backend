


const mongoose = require('mongoose');
const Users = require('../model/users')




const signup = async (req, res) =>{
    const username = req.body.fullname;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    

    
        const user = await Users.findOne({email: email})
        if(user){
            res.status(404).json({error: 'User Aleady exist'})
        }else{
            Users.create({
                fullname: username,
                email: email,
                phone: phone,
                password: password
            }).then(response =>{
                res.status(200).json({message: 'Successfully Signed In', data: {
                    fullname: response.fullname,
                    email: response.email
                } });
                console.log(response);
            })

        }
        
    
    
}


module.exports = signup

