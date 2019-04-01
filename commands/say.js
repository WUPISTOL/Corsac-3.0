const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if(!message.member.roles.some(r=>["Contributor"].includes(r.name)) )
        return message.reply("I'm not saying that.");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
}

module.exports.help = {
  name: "say"
}
