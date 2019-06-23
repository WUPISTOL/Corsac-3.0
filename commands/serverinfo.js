  const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let servericon = message.guild.iconURL;
  let embed = new Discord.RichEmbed()
  .setThumbnail(servericon)
  .setColor('#9900CC')
  .setTitle("Server Info")
    message.channel.send(embed)
}
    module.exports.help = {
  name: "servericon"
}
