const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if(!message.member.roles.some(r=>["HIGH COMMAND", "LVL 35 MAFIA BOSS"].includes(r.name)) )
      return message.reply("Nice try.");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a user to kick.");
    if(!member.kickable) 
      return message.reply("I can't kick this user.");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided.";
      member.send(`${member} You've been banned from: ${member.guild.name} because: ${reason}`)
    member.kick(reason)
      .catch(error => message.reply(`${message.author}, I couldn't kick because of : ${error}`));
    message.reply(`${message.author.tag} kicked ${member.user.tag} because: ${reason}`);
}

module.exports.help = {
  name: "kick"
}
