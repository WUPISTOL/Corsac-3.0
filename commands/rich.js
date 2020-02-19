
const Discord = require("discord.js");
exports.run = (client, message, args) => {
if ((message.author.id !== '178242199924899840') && (message.author.id !== '395345841453400075')) return console.log("h");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    let embed = new Discord.RichEmbed ()
        .setColor('#0964f7')
        .setDescription(sayMessage)
        message.channel.send(embed);
}

module.exports.help = {
  name: "rich"
}
