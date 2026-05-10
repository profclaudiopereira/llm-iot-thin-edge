const { askLLM } = require("../llm/openai");

async function main()
{
    console.log("Sending question to LLM...\n");

    const response =
        await askLLM(
            "Explain what an embedded system is.");

    console.log("LLM Response:\n");

    console.log(response);
}

main();