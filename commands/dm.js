const Discord = require("discord.js");
exports.run = (client, message, args) => {

    if(!message.member.roles.some(r=>["HIGH COMMAND"].includes(r.name)) )
      return message.reply("Nice try.");
    
    let dmember = message.mentions.members.first();
    let guildname = dmember.guild.name
    if(!dmember)
      return message.reply("Please mention a user to dm.");

    let dmessage = args.slice(1).join(' ');
    if(!dmessage) return message.reply("You must supply a message!");
      dmember.send("A member from " + guildname + " sent you a message: ${dmessage}")
}

module.exports.help = {
  name: "dm"
}
