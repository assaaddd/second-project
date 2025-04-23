import bcryptjs from 'bcryptjs';

import User from '../models/user.model.js';

export const signup = async(req, res, next) => {
    try{
        const {username , email , password} = req.body;
        const hashedPassword = await bcryptjs.hash(password, 10)
        const newUser = new User({username, email, password: hashedPassword});
        await newUser.save();
        res.json(newUser);
    }catch(err){
        res.status(500).json(err.message)
    }
}