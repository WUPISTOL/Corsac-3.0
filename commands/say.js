const Discord = require("discord.js");
exports.run = (client, message, args) => {
 //a is 1782
 //j is 3953
 //d is 6062
if ((message.author.id !== '178242199924899840') && (message.author.id !== '395345841453400075') && (message.author.id !== '854739864784601159') && (message.author.id !== '340598257237360640')) return console.log("h");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
}

module.exports.help = {
  name: "say"
}
