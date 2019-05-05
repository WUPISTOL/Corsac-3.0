const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed ()
    .setColor('#00FF99')
    .setTitle('ADMIN COMMAND LIST')
    .setDescription('*More commands coming soon. Current commands are:*')
    .addField('**ban & kick**', 'Simple. Bans or kicks heretics.')
    .addField('**giverole & removerole**', 'Gives or removes roles accordingly.')
    .addField('**purge**', 'deletes up to 100 messages.')
    .addField('**play\, listento\, watch\, & stream**', 'Changes my current status.')
    .addField('**dm**', 'DMs a user with a message.')
    .addField('**warn**', 'Warns a user (W.I.P)')
    .setFooter('All commands have the prefix (c!).')
    .setTimestamp()
        message.channel.send(embed);
}
module.exports.help = {
  name: "adminhelp"
}
