const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client({ intents: ["Guilds", "GuildMessages", "MessageContent"] });

client.on("messageCreate", function (message) {
  console.log(message)
  if (message.author.bot) return;
  if (!message.content.startsWith(config.PREFIX)) return;

  const commandBody = message.content.slice(config.PREFIX.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);         
  }  
});

client.login(config.BOT_TOKEN);