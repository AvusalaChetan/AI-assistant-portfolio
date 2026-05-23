"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chat = void 0;
const chat = async (req, res) => {
    const { message } = req.body;
    try {
        console.log("message", message);
        res.status(200).json({ message });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.chat = chat;
