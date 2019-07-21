const Discord = require("discord.js");
exports.run = (client, message, args) => {
    message.channel.send("FOO");
}

module.exports.help = {
  name: "FOO"
}
