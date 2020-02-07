const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("Nice try.");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.channel.send("Please mention a user to kick.");
    if(!member.kickable) 
      return message.channel.send("I can't kick this user.");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided.";
    member.kick(reason)
      .catch(error => message.channel.send(`${message.author}, I couldn't kick because of : ${error}`));
    message.channel.send(`${message.author.tag} kicked ${member.user.tag} because: ${reason}`);
}

module.exports.help = {
  name: "skick"
}
