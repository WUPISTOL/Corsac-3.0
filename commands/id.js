const Discord = require("discord.js");
exports.run = (client, message, args) => {
      var imember = message.mentions.users.first();
    if(!imember){
    message.channel.send(`${message.author.id}`);
    } else {
    message.channel.send(`${imember.id}`);
    }
}

module.exports.help = {
  name: "id"
}
