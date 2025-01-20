import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import Connection from './utils/DBConnection.js';

dotenv.config({});

const app = express(); 

app.use(cors({
    origin:"*",
    credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser()); 


const PORT = process.env.PORT || 3000;



Connection()
.then(()=>{
    app.listen(PORT,()=>{
    console.log(`Server is running on port nu ${PORT}`);
});
})
.catch((err)=>{
    console.log(err)
})
