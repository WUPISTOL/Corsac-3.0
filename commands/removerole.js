const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.roles.some(r=>["HIGH COMMAND"].includes(r.name)) )
      return message.reply("Nice try.");
    
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find user.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("You must provide a role to give.");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find role.");

  if(!rMember.roles.has(gRole.id)) return message.reply("This user does not have that role.");
  rMember.removeRole(gRole.id);
    message.reply("User's role has been removed.");
}

module.exports.help = {
  name: "removerole"
}
