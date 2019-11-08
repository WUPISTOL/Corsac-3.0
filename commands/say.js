const Discord = require("discord.js");
exports.run = (client, message, args) => {
 //a is 178242199924899840
if ((message.author.id !== '178242199924899840') && (message.author.id !== '395345841453400075')) return;
    const sayMessage = args.join(" ");
    message.channel.bulkDelete(1)
    message.channel.send(sayMessage);
}

module.exports.help = {
  name: "say"
}
