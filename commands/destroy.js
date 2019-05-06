const Discord = require("discord.js");
exports.run = (client, message, args) => {
      if (message.author.id !== '39534584145340007') return message.reply("Nice try.");
      console.log("successful!");
}

module.exports.help = {
  name: "destroy"
}
