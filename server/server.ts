import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";


// importing routers
import chatRouter from "./routers/chat";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const FRONTEND_URL = process.env.FRONTEND_URL 
if(!FRONTEND_URL){
    throw new Error("FRONTEND_URL is not defined in .env file")
}

app.use(cors({
  origin: ["https://ai-assistant-portfolio-chi.vercel.app",'http://localhost:5173'],
  methods: ["POST"],
}));

import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000,
    max: 10,
    message: 'Too many requests from this IP, please try again after 1 minute'
})

// router setup 
app.use("/api/chat",limiter, chatRouter);

app.get('/health',(req:Request,res:Response)=>{
    try{
        res.status(200).json({message:'server is working  '})
    }catch(error){
        console.log(error);
        res.status(500).json({error})
    }
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
    
