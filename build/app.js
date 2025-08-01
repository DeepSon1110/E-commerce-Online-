"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
require("./model/index");
app.get("/", (req, res) => {
    res.status(200).json({
        "message": "Hello, World!"
    });
});
app.get('/about', (req, res) => {
    res.status(200).json({
        "message": "This is the about page"
    });
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
