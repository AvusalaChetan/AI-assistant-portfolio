import express, { Request, Response } from "express";
import { chat } from "../controllers/chat";

const router = express.Router()

router.post("/",chat);

export default router;