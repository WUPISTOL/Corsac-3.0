const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setColor('#FFEE00')
    .setTitle('COMMAND LIST')
    .setDescription('*More commands coming soon. Current commands are:*')
    .addField('**foo**', 'Very simple command that I use to check if the bot is working.')
    .addField('**roll**', 'Rolls dice. Nothing too complicated.')
    .addField('**flip**', 'Flips a coin.')
    .addField('**reload**', 'Reloads an outdated command. \(Example: c!reload help\)')
    .addField('**ping**', 'Tells you the bot\'s current ping.')
    .addField('**avatar**', 'Displays your or somebody else\'s avatar. \(Example: c!avatar @user\)')
    .addField('**id**', 'Grabs someone\'s user ID. Not sure why you\'d use it, though.')
    .setFooter('All commands have the prefix \(c!\). For Admin commands, use c!adminhelp.')
    .setTimestamp()
        message.channel.send(embed);
}
module.exports.help = {
  name: "help"
}
