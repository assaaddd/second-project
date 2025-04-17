import mongoose from 'mongoose';

const connectToDataBase = async () => {
    try{
        await mongoose.connect(process.env.CONNECT_TO_MONGODB);
        console.log('Connected to MongoDb');
    }catch(err){
        throw new Error(`Error in connecting to database: ${err}`)
    }
}

export default connectToDataBase;