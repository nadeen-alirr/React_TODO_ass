const express = require("express");
const app = express();
const cors = require("cors"); 
const mongoose = require('mongoose');
const port = process.env.PORT || 1338;
require('dotenv').config();
const userRoutes = require("./routes/userroutes.js");

const DB = process.env.DB;
app.use(express.json());
app.use(cors());


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

app.use("/api", userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});