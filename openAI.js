require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");

const apiKey = process.env.OPENAI_API_KEY;
const configuration = new Configuration({
  apiKey: apiKey
});
const openai = new OpenAIApi(configuration);

//let messages = 'The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\
//Hello, who are you?\n\
//I am an AI created by OpenAI. How can I help you today?\n';

async function getGPTResponse() {
    const gptResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: "what it is 2 + 2 ?"}],
    });
    console.log(gptResponse.data.choices[0].message.content)
    return gptResponse.data.choices[0].message.content;
  }
  
module.exports = { getGPTResponse };