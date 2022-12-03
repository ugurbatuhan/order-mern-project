const express = require("express");
const app = express();
const mongoose = require("mongoose");


app.use(express.json());
app.use(express.urlencoded({extended: false}));


mongoose.connect(
    "mongodb+srv://batuhan:9ikDYo7EpFnWMDQP@cluster0.lutglh6.mongodb.net/test"
);

const personRouter = require("./routes/PersonRoutes")
const orderRouter = require("./routes/OrderRoutes")
app.use("/person", personRouter)
app.use("/order", orderRouter)

app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY!");
});