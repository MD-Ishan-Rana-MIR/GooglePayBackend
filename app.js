const express = require("express");

const app = new express();

const cors = require('cors');


app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended:true}));



const router = require("./src/routes/api");


app.use("/api/v1",router)










module.exports = app