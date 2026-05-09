const express = require("express");

const app = express();

app.use(express.json());

app.post("/ping", (req, res) => {

    console.log("Request received:");
    console.log(req.body);

    res.json({
        status: "ok",
        message: "Hello from backend"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});