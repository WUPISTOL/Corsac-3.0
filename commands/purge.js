const Discord = require("discord.js");
exports.run = async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES") && (message.author.id !== '395345841453400075'))
    return message.reply("You don't have the necessary permissions.");
    const messageString = message.content.split(' ');
    const Num = messageString.slice(1).join(' ');
    if(!isNaN(Num)) {
    if(!Num || Num < 2 || Num > 99)  return message.reply("please choose a number between 2 and 99 to purge.");
    message.channel.bulkDelete(`${Num + 1}`).catch(err => {
              message.channel.send('Due to Discord Limitations :moyai:, I cannot delete messages older than 14 days') 
    });
    } else return;
}


module.exports.help = {
  name: "purge"
}
