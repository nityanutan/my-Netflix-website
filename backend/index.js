//step-1
// const express = require("express");
import dotenv from "dotenv";
import movieRoute from "./routes/movieRoute.js";
import express from "express";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

dotenv.config();
databaseConnection();

const app = express();
//middlewares 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: [
        "http://localhost:3000",
        "https://my-netflix-website.vercel.app"
    ],
    credentials:true
}
app.use(cors(corsOptions));
 
// api
app.use("/api/v1/user", userRoute);
app.use("/api/movies", movieRoute);

app.listen(process.env.PORT,() => {
    console.log(`Server listen at port ${process.env.PORT}`);
});
