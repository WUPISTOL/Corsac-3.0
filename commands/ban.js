const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if(!message.member.roles.some(r=>["HIGH COMMAND"].includes(r.name)) )
      return message.reply("Nice try.");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a user to ban.");
    if(!member.bannable) 
      return message.reply("I can't ban this user.");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided.";
    let embed = new Discord.richEmbed();
    .setColor(#ff0400)
    .setTitle('BAN REPORT');
    .setDescription(`A member has been banned from ${member.guild.name}`)
    .addField('User banned:', `${member.id}`)
    .setTimestamp()
    
    let reportchannel = client.channels.find("name", "incidents")
    
    if(!reportchannel) return message.reply("Could not find the incidents channel.")
    
    message.reply(`${message.author.tag} summoned ***PROHIBITION HAMMER*** and banned ${member.user.tag} because: ${reason}`);
    reportchannel.send(embed)
    member.send(`${member} You've been banned from: ${member.guild.name} because: ${reason}`)
    member.ban(reason)
      .catch(error => message.reply(`${message.author}, I couldn't ban because of : ${error}`));
    
}

module.exports.help = {
  name: "ban"
}
