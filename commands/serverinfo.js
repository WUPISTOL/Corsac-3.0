  const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let servericon = message.guild.iconURL;
  let embed = new Discord.RichEmbed()
  .setThumbnail(servericon)
  .setColor('#9900CC')
  .setTitle("**Server Info**")
  .setDescription(`This server was made on ${message.guild.createdAt}`)
  .addField("*Number of Members:*", `**${message.guild.memberCount}**`, true)
  .addField("*Server Owner:*", `${message.guild.owner.displayName}`, true)
  .addField("*Verification Level:*", `**${message.guild.verificationLevel}**`, true)
  .addField("*Region:*", `**${message.guild.region}**`, true)
    message.channel.send(embed)
}
    module.exports.help = {
  name: "serverinfo"
}
