const Discord = require("discord.js");
exports.run = (client, message, args) => {
  var amember = message.mentions.users.first();
    if(!amember){
  let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setColor('#9900CC')
  .setDescription(`${message.author} joined ${message.author.guild} at ${message.author.guild.joinedAt}`)
  .addField('**User ID**', `${message.author.id}`)
  .addField('**Account Creation Date**', `${message.author} joined Discord on ${message.author.createdAt}`)
    message.channel.send(embed);
    } else {
      let uembed = new Discord.RichEmbed()
  .setThumbnail(amember.avatarURL)
  .setColor('#9900CC')
  .setDescription(`${amember} joined ${amember.guild} at ${amember.joinedAt}`)
  .addField('**User ID**', `${amember.id}`)
  .addField('**Account Creation Date**', `${amember} joined Discord on ${amember.createdAt}`)
    message.channel.send(uembed);
    }
}
    module.exports.help = {
  name: "userinfo"
}
