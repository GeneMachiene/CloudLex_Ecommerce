const express = require("express");
const {json, urlencoded} = express;
const cors = require("cors");
const mongoose = require('mongoose');
const userRoutes = require("./routes/user");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");

require("dotenv").config();

// app
const app = express();

// db
mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => {
    console.log("DB Connected")

    // Port & listener
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`server is running on port: ${port}`));
  
  })
  .catch(err => console.log("DB Connection Error: ", err));

//middleware
app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use(json());
app.use(urlencoded({extended:false}));
app.use(cookieParser());
app.use(expressValidator());

//routes
app.use('/', userRoutes)

