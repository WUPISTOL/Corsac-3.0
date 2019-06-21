const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setColor('#FFEE00')
    .setTitle('COMMAND LIST')
    .setDescription('*More commands coming soon. Current commands are:*')
    .setThumbnail(client.user.avatarURL)
    .addField('**foo**', 'Just responds \'bar\'.', true)
    .addField('**roll**', 'Rolls dice w/ modifiers.\(Example: c!roll 1d20 + 4\)', true)
    .addField('**flip**', 'Flips a coin.', true)
    .addField('**reload**', 'Updates outdated commands. \(Example: c!reload help\)', true)
    .addField('**ping**', 'Bot\'s current ping.', true)
    .addField('**avatar**', 'Displays a user\'s avatar. \(Example: c!avatar @user\)', true)
    .addField('**servericon**', 'Displays the server\'s icon.', true)
    .addField('**id**', 'Grabs someone\'s user ID.', true)
    .addField('**creatorinfo**', '^^^', true)
    .addField('**link**', 'Gives you the link to invite Corsac.', true)
    .setFooter('All commands have the prefix \(c!\). For Admin commands, use c!adminhelp.')
    .setTimestamp()
        message.channel.send(embed);
}
module.exports.help = {
  name: "help"
}
