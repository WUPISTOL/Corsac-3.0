const Discord = require("discord.js");
exports.run = (client, message, args) => {
let embed = new Discord.RichEmbed()
    .setColor('#00ED24')
    .setDescription('[Here you are.](https://discordapp.com/oauth2/authorize?client_id=548982802951962678&scope=bot&permissions=8)')

  message.channel.send(embed);
}
module.exports.help = {
  name: "invite"
}
