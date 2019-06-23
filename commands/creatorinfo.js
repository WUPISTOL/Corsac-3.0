const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()
  .setColor('#FFEE00')
  .setTitle('Creator Info')
  .setDescription('~~Why did I make this my hobby~~')
  .addField('Well, you probably know that the creator of this bot is **Jari/WUPISTOL**.', 'You know, the guy that likes birbs? Well, one day he was bored as all hell and decided to make a bot. That bot is now Corsac. End of story.')
  .setFooter(`Sorry for being oddly specific but I was bored and created this bot version on ${client.user.createdAt}`)
  message.channel.send(embed);
}

module.exports.help = {
  name: "creatorinfo"
}
