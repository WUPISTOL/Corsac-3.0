const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR") && (message.author.id !== '395345841453400075'))
      return message.reply("Nice try.");
    
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("mention a user to give a role.");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("You must provide a role to give.");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("That role doesn't exist.");

  if(rMember.roles.has(gRole.id)) return message.channel.send("This user already has that role.");
  rMember.addRole(gRole.id);
    const e = await message.channel.send(":ok_hand:");
setTimeout(() => {
    e.delete();
}, 2000);
}

module.exports.help = {
  name: "gr"
}
