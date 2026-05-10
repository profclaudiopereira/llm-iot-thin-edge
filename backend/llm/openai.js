require("dotenv").config();

const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function askLLM(message)
{
    try
    {
        const response =
            await client.chat.completions.create({
                model: "gpt-4.1-mini",
                messages: [
                    {
                        role: "user",
                        content: message,
                    },
                ],
            });

        return response.choices[0].message.content;
    }
    catch (error)
    {
        console.error("LLM Error:", error);

        return "LLM request failed";
    }
}

module.exports = {
    askLLM,
};