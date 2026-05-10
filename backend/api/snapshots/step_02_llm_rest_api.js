const express = require("express");

const { askLLM } = require("../llm/openai");

const app = express();

app.use(express.json());

app.post("/ping", (req, res) => {

    console.log("Ping request received:");

    console.log(req.body);

    res.json({
        status: "ok",
        message: "Backend online"
    });
});

app.post("/ask", async (req, res) => {

    try
    {
        console.log("LLM request received:");

        console.log(req.body);

        const userMessage = req.body.message;

        const llmResponse =
            await askLLM(userMessage);

        res.json({
            response: llmResponse
        });
    }
    catch (error)
    {
        console.error("API Error:", error);

        res.status(500).json({
            error: "Internal server error"
        });
    }
});

const PORT = 3000;

app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`);
});