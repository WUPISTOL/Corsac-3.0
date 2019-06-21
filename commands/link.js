const Discord = require("discord.js");
exports.run = (client, message, args) => {
message.channel.send("Here you are: https://discordapp.com/oauth2/authorize?client_id=548982802951962678&scope=bot&permissions=0")
}
module.exports.help = {
  name: "link"
}
