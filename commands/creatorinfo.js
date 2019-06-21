const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()
  .setColor('##FCAA53')
  .setTitle('Creator Info')
  .setDescription('~~Why did I make this my hobby~~')
  .addField('Well, you probably know that the creator of this bot is Jari.', 'You know, the guy that likes birbs?')
  .setFooter(`I was bored and created this bot on ${client.user.createdTimestamp()}`)
  .setTimestamp()
  message.channel.send(embed);
}

module.exports.help = {
  name: "creatorinfo"
}
