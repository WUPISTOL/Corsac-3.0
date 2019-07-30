const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let people = Array.from(message.member.guild.members);
    let count = message.member.guild.memberCount;
    let countIndex = (Math.round(Math.random() * count) - 1);
    let victim = people[countIndex];
    //"victim" bc they're gonna get pinged lma0
    message.channel.send(`${victim}`);
}

module.exports.help = {
  name: "rando"
}
