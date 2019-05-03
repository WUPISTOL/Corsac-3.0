const Discord = require("discord.js");
exports.run = (client, message, args) => {
    message.channel.send(${message.author.id});
}

module.exports.help = {
  name: "id"
}
