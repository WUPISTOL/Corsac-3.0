const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setColor('#FFFF33')
    .setTitle('COMMAND LIST')
    .setDescription('*More commands coming soon. Current commands are:*')
    .addField('**avatar**', 'Displays a user\'s avatar. \(Example: c!avatar @user\)')
    .addField('**icon**', 'Displays the server\'s icon.')
    .addField('**roll**', 'Rolls dice w/ modifiers.\(Example: c!roll 1d20 + 4\)')
    .addField('**flip**', 'Flips a coin.')
    .addField('**ping**', 'Bot\'s current ping.')
    .addField('**update**', 'Updates outdated commands. \(Example: c!update help\)')
    .addField('**id**', 'Grabs someone\'s user ID.')
    .addField('**invite**', 'Gives you the link to invite Corsac.')
    .addField('**userinfo**', 'Tells you info about someone. \(Example: c!userinfo @user\)')
    .addField('**serverinfo**', 'Tells you info about the server.')
    .addField('~~**creatorinfo**~~', '~~Some people don\'t believe I made this bot, so here you go.~~')
    .addField('**foo**', 'Just responds \'bar\' xc.')
    .addField('||***expose***||', '||reveals the last deleted message in a chat.||')
    .addField('**kirbyjam**', '[>](https://www.youtube.com/watch?v=U1l6ca2Q3YU)<a:KirbyJam:583773264401137696> !!')
    .setFooter('Some commands have shortened versions\(ie. c!p # = c!purge\). For Admin commands, use c!adminhelp.')
    .setTimestamp()
        message.channel.send(embed);
}
module.exports.help = {
  name: "help"
}
