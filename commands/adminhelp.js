const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed ()
    .setColor('#00FF33')
    .setTitle('ADMIN COMMAND LIST')
    .setDescription('*More commands coming soon. Current commands are:*')
    .addField('**ban & kick**', 'Simple. Bans or kicks heretics.')
    .addField('**giverole & removerole**', 'Gives or removes roles accordingly.(c!grole, c!rrole)')
    .addField('**nick**', 'Changes a user\'s nickname.')
    .addField('**purge**', 'deletes up to 100 messages.')
    .addField('**dm**', 'DMs a user with a message.')
    .addField('**warn**', 'Warns a user (W.I.P)')
    .setFooter('You can silently kick or ban by putting an \'\s\'\ before it \(ie. c!skick\ won\'t send a message to the victim.)')
    .setTimestamp()
        message.channel.send(embed);
}
module.exports.help = {
  name: "adminhelp"
}
