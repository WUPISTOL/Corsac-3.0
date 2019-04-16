const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if(!message.member.roles.some(r=>["Commanding Officer", "LVL. 100 GODFATHER"].includes(r.name)) )
        return message.reply("err");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
}

module.exports.help = {
  name: "say"
}
