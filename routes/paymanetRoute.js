import express from 'express';
import { checkout,paymentverification } from '../controllers/paymentController.js';
const router=express.Router();

router.post("/checkout",checkout)
router.post("/paymentverification",paymentverification)


export default router;