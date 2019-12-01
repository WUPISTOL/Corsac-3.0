const Discord = require("discord.js");
exports.run = (client, message, args) => {
  var amember = message.mentions.users.first();
    if(!amember){
  let embed = new Discord.RichEmbed()
  .setImage(message.author.avatarURL)
  .setColor('#3300FF')
    message.channel.send(embed)
    } else {
      let uembed = new Discord.RichEmbed()
  .setImage(amember.avatarURL)
  .setColor('#3300FF')
    message.channel.send(uembed)
    }
}
    module.exports.help = {
  name: "a"
}
