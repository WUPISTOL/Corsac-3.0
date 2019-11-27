const Discord = require("discord.js");
exports.run = (client, message, args) => {
        let link = client.generateInvite(['ADMINISTRATOR'])
        let embed = new Discord.RichEmbed()
        .setColor('#00ED24')
        .setDescription(`[Here you are.](${link})`)
        message.channel.send(embed);
}
module.exports.help = {
  name: "invite"
}
