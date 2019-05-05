const Discord = require("discord.js");
exports.run = (client, message, args) => {
      if (message.author.id !== '395345841453400075') return message.reply("Nice try.");
      client.destroy();
}

module.exports.help = {
  name: "destroy"
}
