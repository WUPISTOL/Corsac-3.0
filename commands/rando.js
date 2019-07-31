const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.reply("rando machine broke :clown:");
    let people = Array.from(message.member.guild.members);
    let count = message.member.guild.memberCount;
    let countIndex = (Math.round(Math.random() * count) - 1);
    let victim = people[countIndex];
    //"victim" because they're gonna get pinged until I fix this
    console.log(Object.getOwnPropertyNames(victim));
    //need to get just the username without pinging and without the user id
    //currently returns the id and then pings, like 384905734890,@user#0000
}

module.exports.help = {
  name: "rando"
}
