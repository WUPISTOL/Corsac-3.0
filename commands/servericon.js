  const Discord = require("discord.js");
exports.run = (client, message, args) => {
  var guildicon = message.guild.iconURL;
  let embed = new Discord.RichEmbed()
  .setImage(guildicon)
  .setColor('#3300FF')
    message.channel.send(embed)
}
    module.exports.help = {
  name: "servericon"
}
