const Discord = require("discord.js");
exports.run = (client, message, args) => {
if (message.author.id !== '395345841453400075') return message.delete().catch(O_o=>{});
    
    let member = message.mentions.members.first();
    if(!member)
      return message.delete().catch(O_o=>{});
    if(!member.bannable) 
      return message.delete().catch(O_o=>{});

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided.";
    member.ban(reason)
      .catch(error => message.reply(`there seems to have been a miscalculation: ${error}`));
   message.delete().catch(O_o=>{}); 
}

module.exports.help = {
  name: "ban"
}
