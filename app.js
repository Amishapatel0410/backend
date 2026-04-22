const express = require("express");
const app = express();
const { connectDB } = require("./models/config/db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');

connectDB("mongodb://127.0.0.1:27017/urlShortener")
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));


app.get("/", (req, res) => {
    res.render('index');
});



app.listen(5400, () => {
    console.log("Server running on http://localhost:5400");
});


