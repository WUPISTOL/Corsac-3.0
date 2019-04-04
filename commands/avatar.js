const Discord = require("discord.js");
exports.run = (client, message, args) => {
  var auser = message.mentions.users.first();
  let embed = new Discord.RichEmbed()
  .setImage(auser.avatarURL)
  .setColor('#275BF0')
    message.channel.send(embed)
    
}
    module.exports.help = {
  name: "ban"
}
