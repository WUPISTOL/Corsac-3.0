const Discord = require("discord.js");
exports.run = (client, message, args) => {

    if(!message.member.roles.some(r=>["HIGH COMMAND"].includes(r.name)) )
      return message.reply("Nice try.");
    
    let dauthor = message.author;
    let dmember = message.mentions.members.first();
    if(!dmember)
      return message.reply("Please mention a user to dm.");
    
    let dmessage = args.slice(1).join(' ');
    if(!dmessage) return message.reply("You must supply a message!");
    dmember.send(`**${dmember} A member from ${dmember.guild.name} sent you a message:** ${dmessage}`)
    dauthor.send(`You've sent your message to ${dmember}.`)
}

module.exports.help = {
  name: "dm"
}
