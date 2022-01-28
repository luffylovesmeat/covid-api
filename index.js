import express from "express";
import cors from "cors";
import "dotenv/config";
import apiRoute from "./apiRoutes/apiV1Route.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", apiRoute)

app.get("/",(req, res)=>{
    res.send(`Hello Home`)
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on port: ${process.env.PORT}`)
})