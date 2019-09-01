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
    .addField('**ping**', 'Bot\'s current ping.')
    .addField('**update**', 'Updates outdated commands. \(Example: c!update help\)')
    .addField('**id**', 'Grabs someone\'s user ID.')
    .addField('**invite**', 'Gives you the link to invite Corsac.')
    .addField('**userinfo**', 'Tells you info about someone. \(Example: c!userinfo @user\) | \`Deprecated\`')
    .addField('**serverinfo**', 'Tells you info about the server.')
    .addField('~~**creatorinfo**', 'Some people don\'t believe I made this bot, so here you go.~~')
    .addField('**foo**', 'Just responds \'bar\' xc.')
    .addField('**kirbyjam**', '<a:KirbyJam:583773264401137696>!!')
    .setFooter('All commands have the prefix \(c!\). For Admin commands, use c!adminhelp.')
    .setTimestamp()
        message.channel.send(embed);
}
module.exports.help = {
  name: "help"
}
