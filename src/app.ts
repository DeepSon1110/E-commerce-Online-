import express from 'express'
const app = express()

require("./model/index")

app.get("/",(req,res)=>{
    res.status(200).json({
        "message": "Hello, World!"
    });
})

app.get('/about',(req,res)=>{
    res.status(200).json({
        "message": "This is the about page"
    })
})

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})