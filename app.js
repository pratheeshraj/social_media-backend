const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const cors=require("cors")
const dotenv = require("dotenv").config();


// Using Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors())
app.use(cookieParser());

// Importing Routes
const post = require("./routes/post");
const user = require("./routes/user");

// Using Routes
app.use("/api/v1", post);
app.use("/api/v1", user);



module.exports = app;
