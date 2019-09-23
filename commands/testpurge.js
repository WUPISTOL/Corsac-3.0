const Discord = require("discord.js");
exports.run = (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply("Nice try.");
    
    const messageWords = message.content.split(' ');
    const rollMod = messageWords.slice(2).join(' ');
    
    if(!numvar || numvar < 2 || numvar > 100)
    return message.reply("Please choose a number between 2 and 100 to purge.");
    
    const fetched = await message.channel.fetchMessages({limit: numvar});
    message.channel.bulkDelete(fetched)
    .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
            }
module.exports.help = {
  name: "testpurge"
}

