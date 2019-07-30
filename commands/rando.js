const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let people = Array.from(message.member.guild.members);
    let count = message.member.guild.memberCount;
    let countIndex = (Math.round(Math.random() * count) - 1);
    message.channel.send(`${people[countIndex]}`);
}

module.exports.help = {
  name: "rando"
}
