const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("Nice try.");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("please mention a user to ban.");
    if(!member.bannable) 
      return message.reply("I can't ban this user.");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided.";
    member.ban(reason)
      .catch(error => message.reply(`there seems to have been a miscalculation: ${error}`));
    message.channel.send(`${message.author.tag} summoned ***PROHIBITION HAMMER*** and banned ${member.user.tag} because: ${reason}`);
}

module.exports.help = {
  name: "ban"
}
