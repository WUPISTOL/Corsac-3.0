const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed ()
    .setColor('#FFEE00')
    .setTitle('COMMAND LIST')
    .setDescription('*More commands coming soon. Current commands are:*')
    .addField('**roll**', 'Rolls dice. Number of sides varies from 6-100.')
    .addField('**reload**', 'Reloads an outdated command.')
    .addField('**ping**', 'Self explanatory. Tells you the bot\'s current ping.')
    .addField('**avatar**, 'Displays you or someone else\'s avatar. \(Example: c!avatar @user\)')
    .setFooter('All commands have the prefix (c!)')
    .setTimestamp()
        message.channel.send(embed);
}
module.exports.help = {
  name: "help"
}
