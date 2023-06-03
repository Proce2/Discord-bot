require('dotenv').config()
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,  GatewayIntentBits.MessageContent] });
const apiSecret = process.env.BOT_TOKEN
const { getGPTResponse} = require('./openAI');


client.once("ready", () => {
  console.log("Bot is online!");
});

client.on("messageCreate", function(message) {
  console.log(message.content)
  if (message.author.bot) return;
  message = 
  
  (async () => {
    const gptResponse = await getGPTResponse(message);
    message.reply(`${gptResponse}`);
  })();
}); 

client.login(apiSecret);



