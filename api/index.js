import express from 'express';
import dotenv from 'dotenv';

import connectToDataBase from './config/connectToDataBase.js';
import userRouter from './routes/user_route.js';

dotenv.config()

const app = express();
const URI = 3000;

app.use('/api/user', userRouter);


app.listen(URI , () => {
    try{
        console.log(`Server is running on ${URI} port`);
        connectToDataBase()
    }catch(err){
        throw new Error("Error in listen app")
    }
});
