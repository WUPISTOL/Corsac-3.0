const Discord = require("discord.js");
exports.run = (client, message, args) => {
    message.channel.send("foo");
}

module.exports.help = {
  name: "foo"
}
