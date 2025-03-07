import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import Connection from './utils/DBConnection.js';
import userRoutes from './routes/user.routes.js'
import companyRoutes from './routes/company.routes.js'
import jobRoutes from './routes/job.routes.js'
import applicatonRoutes from './routes/application.routes.js'

dotenv.config({});

const app = express(); 

app.use(cors({
    origin:"http://localhost:5174",
    credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser()); 


app.use("/api/v1/user",userRoutes);
app.use("/api/v1/company",companyRoutes);
app.use("/api/v1/job",jobRoutes);
app.use("/api/v1/application",applicatonRoutes)


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
