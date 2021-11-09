import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";
import book from "./routes/book.js";


dotenv.config();

const app = express(); 

app.use(express.json());
app.use(cors()); 
app.use("/api/book", book)

app.listen(process.env.PORT, () =>   
 console.log("backend server running on port:  " + process.env.PORT)
 ); 

db.dbConnection();