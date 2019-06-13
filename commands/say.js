const Discord = require("discord.js");
exports.run = (client, message, args) => {
    //arctic
if (message.author.id !== '395345841453400075') return message.reply("I'm not saying that.");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
}

module.exports.help = {
  name: "say"
}
