const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setColor('#FFFF33')
    .setTitle('COMMAND LIST')
    .setDescription('*More commands coming soon. Current commands are:*')
    .addField('**avatar**', 'Displays a user\'s avatar. \(Example: c!avatar @user\)')
    .addField('**servericon**', 'Displays the server\'s icon.')
    .addField('**roll**', 'Rolls dice w/ modifiers.\(Example: c!roll 1d20 + 4\)')
    .addField('**flip**', 'Flips a coin.')
    .addField('**ping**', 'Bot\'s current ping.', true)
    .addField('**reload**', 'Updates outdated commands. \(Example: c!reload help\)')
    .addField('**id**', 'Grabs someone\'s user ID.')
    .addField('**link**', 'Gives you the link to invite Corsac.')
    .addField('**userinfo**', 'Tells you info about someone. \(Example: c!userinfo @user\)')
    .addField('**creatorinfo**', '^^^')
    .addField('**foo**', 'Just responds \'bar\' xc.')
    .setFooter('All commands have the prefix \(c!\). For Admin commands, use c!adminhelp.')
    .setTimestamp()
        message.channel.send(embed);
}
module.exports.help = {
  name: "help"
}
