const OpenAI = require('openai-api');
require('dotenv').config();

// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI(OPENAI_API_KEY);


const call = async () => {
    const gptResponse = await openai.complete({
        prompt: "Brainstorm some ideas combining AI and property search",
        temperature: 0.6,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1
    });

    console.log(gptResponse.data);
};

call();

