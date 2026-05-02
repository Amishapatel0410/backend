const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
    res.cookie("name", "sec fb", {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false
    });

    res.send("Cookie is set");
});

app.get('/get-cookie', (req, res) => {
    const data = req.cookies.name;

    if (data) {
        res.send(data);
    } else {
        res.send("No cookie found");
    }
});

app.get('/delete-cookie', (req, res) => {
    res.clearCookie("name");
    res.send("Cookie deleted");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});