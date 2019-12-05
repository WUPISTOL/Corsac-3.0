const Discord = require("discord.js");
exports.run = async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("You don't have the necessary permissions.");
    const messageString = message.content.split(' ');
    const Num = messageString.slice(1).join(' ');
    if(!isNaN(Num)) {
    if(!Num || Num < 2 || Num > 100)
    return message.reply("Please choose a number between 2 and 100 to purge.");
    
    const fetched = await message.channel.fetchMessages({limit: Num});
    message.delete().catch(O_o=>{}); 
    message.channel.bulkDelete(fetched)
    .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    } else return;
}

module.exports.help = {
  name: "purge"
}
