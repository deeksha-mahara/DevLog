const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user");

const app = express();
const PORT = 8000;
mongoose.connect("mongodb://127.0.0.1:27017/blogify")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("Mongo Error", err));

// 2. Middlewares
app.use(express.urlencoded({ extended: false })); // To parse form data
app.use(cookieParser()); // To parse auth cookies
app.use(express.static(path.resolve("./public"))); // Serve static assets
app.use("/user", userRoute);

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));

// 3. View Engine Setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// 4. Routes
app.get("/", (req, res) => {
  res.render("home");
});
app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));