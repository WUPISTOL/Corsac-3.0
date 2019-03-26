const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  //!addrole @Jackson contributor
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You don't have the Manage Members permission.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find user/please mention somebody to give the role.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find the role.");

  if(rMember.roles.has(gRole.id)) return message.reply("I'm afraid they already have that role.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`You have been given the role ${gRole.name} in ${rMember.guild.name}`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
  }
}

module.exports.help = {
  name: "role"
}
