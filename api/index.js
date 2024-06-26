import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js';


dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>console.log('Mongodb Database connected')).catch((err)=>console.log(err));

const app=express()
app.use(express.json());
app.listen(3000,()=>{console.log("server started on port 3000!")});

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

app.use((err,req,res,next )=>{
    const status=err.statusCode || 500;
    const message=err.message ||'Internal Server Error';

    res.json({
        success:"false",
        status,
        message
    });
});