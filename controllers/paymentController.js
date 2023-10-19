import {instance} from "../index.js";
import dotenv from 'dotenv';
dotenv.config();
export const checkout=async(req,res)=>{
let amt=req.body.paymentAmount
   
    var options = {
      amount: amt*100,  // amount in the smallest currency unit
      currency: "INR",
    };
    try {
        const order =await instance.orders.create(options)
      
        res.status(200).json({order:order,success:true,message:"order created",key:process.env.RAZoRPAY_API_KEY})
    } catch (error) {
        res.status(200).json({message:"failed"})
  
    }
  
}
export const paymentverification=async(req,res)=>{
// saving all payment ref id in data base
let refid=Math.random() * 10000000;
   
  let uri=process.env.PAYMENT_REDIRECT_URL
    res.redirect(`${uri}/paymentsuccess?ref=${refid}`)
  

}