const Discord = require("discord.js");
exports.run = (client, message, args) => {
  var amember = message.mentions.users.first();
    if(!amember){
  let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setColor('#9900CC')
    message.channel.send(embed)
    } else {
      let uembed = new Discord.RichEmbed()
  .setThumbnail(amember.avatarURL)
  .setColor('#275BF0')
    message.channel.send(uembed)
    }
}
    module.exports.help = {
  name: "userinfo"
}
