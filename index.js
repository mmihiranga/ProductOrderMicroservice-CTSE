require('dotenv').config()
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload')
const connectDB = require("./src/config/database");
const OrderAPI = require("./src/api/order.api");

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true
}))
connectDB();

app.get("/", (req, res) => {
    res.send("Hello Node!");
});

app.use("/order", OrderAPI());


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});