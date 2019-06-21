const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()
  .setColor('##FFEE00')
  .setTitle('Creator Info')
  .setDescription('~~Why did I make this my hobby~~')
  .addField('Well, you probably know that the creator of this bot is Jari.', 'You know, the guy that likes birbs?')
  .setFooter(`Sorry for being oddly specific but I was bored and created this bot version on ${client.user.createdAt}`)
  .setTimestamp()
  message.channel.send(embed);
}

module.exports.help = {
  name: "creatorinfo"
}
