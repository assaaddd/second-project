import express from 'express';

const app = express();
const URI = 3000;

app.listen(URI , () => {
    try{
        console.log(`Server is running on ${URI} port`);
    }catch(err){
        throw new Error("Error in listen app")
    }
})

