
const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if(!message.member.roles.some(r=>["bot-dev"].includes(r.name)) )
        return message.reply("I'm not saying that.");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    let embed = new Discord.RichEmbed ()
        .setColor('#FFA62B')
        .setDescription(sayMessage)
        .setTimestamp()
        message.channel.send(embed);
}

module.exports.help = {
  name: "sayembed"
}
