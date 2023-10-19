import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Razorpay from 'razorpay';
import paymentRoute from './routes/paymanetRoute.js'

dotenv.config();

export const instance = new Razorpay({
    key_id: process.env.RAZoRPAY_API_KEY,
    key_secret: process.env.RAZoRPAY_API_SECRETE,
  });




const App=express();
App.use(cors());
App.use(express.json())


App.use("/api/v1",paymentRoute);





App.listen(process.env.PORT,()=>{
    console.log("server is runnig on port 4000")
})