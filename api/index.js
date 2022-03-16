const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(() => console.log("MongoDB Connection Successfull !!")).catch((err) => { console.log(err); });

// if .env file contains PORT; use it. else use 5000 port
app.listen(process.env.PORT || 5000, () => { console.log('ok'); });

// enable JSON in express
app.use(express.json());

// this are the routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);





