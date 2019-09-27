const Discord = require("discord.js");
exports.run = (client, message, args) => {
  var amember = message.mentions.users.first();
  var auser = message.guild.member(message.mentions.users.first())
  var abruh = message.guild.member(message.author)
    if(!amember){
  let embed = new Discord.RichEmbed()
  .setTitle("**User info**")
  .setThumbnail(message.author.avatarURL)
  .setColor('#9900CC')
  .setDescription(`${message.author} joined ${abruh.guild} at ${abruh.joinedAt}`)
  .addField('**User ID**', `${message.author.id}`)
  .addField('**Account Creation Date**', `${message.author} joined Discord on ${message.author.createdAt}`)
    message.channel.send(embed);
    } else {
      let uembed = new Discord.RichEmbed()
  .setTitle("**User info**")
  .setThumbnail(amember.avatarURL)
  .setColor('#9900CC')
  .setDescription(`${amember} joined ${auser.guild} on ${auser.joinedAt}`)
  .addField('**User ID**', `${amember.id}`)
  .addField('**Account Creation Date**', `${amember} joined Discord on ${amember.createdAt}`)
    message.channel.send(uembed);
    }
}
    module.exports.help = {
  name: "u"
}
