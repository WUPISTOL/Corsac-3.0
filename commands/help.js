const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setColor('#FFEE00')
    .setTitle('COMMAND LIST')
    .setDescription('*More commands coming soon. Current commands are:*')
    .addField('**foo**', 'Very simple command to check if the bot is working.')
    .addField('**roll**', 'Rolls dice. Nothing too complicated.')
    .addField('**flip**', 'Flips a coin.')
    .addField('**reload**', 'Reloads an outdated command.')
    .addField('**ping**', 'Self explanatory. Tells you the bot\'s current ping.')
    .addField('**avatar**', 'Displays your or somebody else\'s avatar. \(Example: c!avatar @user\)')
    .setFooter('All commands have the prefix \(c!\). For Admin commands, use c!adminhelp.')
    .setTimestamp()
        message.channel.send(embed);
}
module.exports.help = {
  name: "help"
}
