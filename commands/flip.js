
const Discord = require("discord.js");
exports.run = async (client, message, args) => {
let outcomes = ["Heads", "Tails", "Heads", "Tails", "Tails", "Heads"];
let outcomesIndex = (Math.round(Math.random() * 5) / 1);
const e = await message.channel.send("*A holographic coin materializes before you, and falls.*");
setTimeout(() => {
    e.edit(`*It lands on ${outcomes[outcomesIndex]}.*`);
}, 1500);
}

module.exports.help = {
  name: "flip"
}
