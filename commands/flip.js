
const Discord = require("discord.js");
exports.run = (client, message, args) => {
let outcomes = ["Heads", "Tails"];
let outcomesIndex = Math.round(Math.random() * outcomes.length);
const e = await message.channel.send("*A holographic coin materializes before you, and falls.*");
setTimeout(() => {
    e.edit(`*It lands on ${outcomes[outcomesIndex]}.*`);
}, 500);
}

module.exports.help = {
  name: "flip"
}
