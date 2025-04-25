import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcryptjs.hash(password, 10)
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.json(newUser);
    } catch (err) {
        next(err);
    }
}

export const signIn = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, 'User not found'));
        const validPassword = await bcryptjs.compare(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;

        res
            .cookie('accos_token', token, { httpOnly: true })
            .status(200)
            .json(rest);
    } catch (err) {
        next(err)
    }
}
