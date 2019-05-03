const Discord = require("discord.js");
exports.run = (client, message, args) => {
  var amember = message.mentions.users.first();
    if(!amember){
    message.channel.send(message.author.id)
    } else (
    message.channel.send(amember.id)
  }
    module.exports.help = {
  name: "id"
}
