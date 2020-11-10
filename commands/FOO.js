const Discord = require("discord.js");
exports.run = (client, message, args) => {
    message.channel.send("FOO");
}
//someone would not stop bothering me about c!foo responding "bar", and so now there's c!FOO
//bruh
module.exports.help = {
  name: "FOO"
}
