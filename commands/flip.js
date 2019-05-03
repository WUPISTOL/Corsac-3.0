
const Discord = require("discord.js");
exports.run = (client, message, args) => {
let outcomes = ["Heads", "Tails"];
let outcomesIndex = Math.round(Math.random() * outcomes.length);
message.channel.send(`${outcomes[outcomesIndex]}`);
}

module.exports.help = {
  name: "flip"
}
