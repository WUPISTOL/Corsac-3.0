const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let users = message.guild.members
  let rando = Math.floor(Math.random() * users.length) + 1
  message.channel.send(`${users[rando]}`);
}

module.exports.help = {
  name: "random"
}
