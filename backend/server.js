const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")

const app = express();
dotenv.config();
app.use(cors());

// Connect Database
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
.then((result) => {
    console.log("mongodb connected");
}).catch((err) => {
    console.log(err);
});

// Routes
const image = require("./routes/imageRoute")

app.use("/api/v1", image)

const port = 5000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});