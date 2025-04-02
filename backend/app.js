const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    next();
});

module.exports = app;
