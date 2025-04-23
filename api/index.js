import express from 'express';
import dotenv from 'dotenv';

import connectToDataBase from './config/connectToDataBase.js';
import userRouter from './routes/user_route.js';
import authRouter from './routes/auth_route.js';

dotenv.config()

const app = express();
const URI = 3000;

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/auth' , authRouter);


app.listen(URI , () => {
    try{
        console.log(`Server is running on ${URI} port`);
        connectToDataBase()
    }catch(err){
        throw new Error("Error in listen app")
    }
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})
