import express from "express";
import { chat } from "../controllers/chat";
import { inputValidator } from "../validator/chat.validator";

const router = express.Router()

router.post("/",inputValidator,chat);

export default router;