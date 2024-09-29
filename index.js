import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from './Api/routes/auth.js';
import hotelsRoutes from './Api/routes/hotels.js';
import roomsRoutes from './Api/routes/rooms.js';
import userRoutes from './Api/routes/user.js';



const app=express()
dotenv.config();
const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to db")
      } catch (error) {
        throw error;
      }
};
mongoose.connection.on("disconnected",()=>{
    console.log("disconnected")
});

app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/rooms",roomsRoutes);
app.use("/api/hotels",hotelsRoutes);

app.listen(8800,()=>{
    connect();
    
    console.log("connected to backend!")
});