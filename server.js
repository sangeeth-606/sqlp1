import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config(); 

const app = express();
const port = 4000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL database");
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
