"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// importing routers 
const chat_1 = __importDefault(require("./routers/chat"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: ["http://localhost:5173/"],
    credentials: true,
    methods: ["POST", "GET", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
// router setup 
app.use("/api/chat", chat_1.default);
app.get('/', (req, res) => {
    try {
        res.status(200).json({ message: 'working api ' });
    }
    catch (error) {
        console.log(error);
    }
});
app.listen(3000, () => {
    console.log("server is running on port 3000");
});
