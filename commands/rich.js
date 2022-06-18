
const Discord = require("discord.js");
exports.run = (client, message, args) => {
if ((message.author.id !== '178242199924899840') && (message.author.id !== '395345841453400075') && (message.author.id !== '606287603188236318') && (message.author.id !== '340598257237360640')) return console.log("h");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    let embed = new Discord.MessageEmbed ()
        .setColor('#0964f7')
        .setDescription(sayMessage)
        message.channel.send(embed);
}

module.exports.help = {
  name: "rich"
}
