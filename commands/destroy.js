const Discord = require("discord.js");
exports.run = (client, message, args) => {
      //      if (message.author.id !== 'id goes here') return message.reply("Nice try."); try this later
if(!message.member.roles.some(r=>["bot-dev"].includes(r.name)) )
      return message.reply("Nice try.");
    client.destroy();
}

module.exports.help = {
  name: "destroy"
}
