exports.run = async (client, message, args) => {
  let norole = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!norole) return message.reply("Couldn't find user.");
  if(!message.author.hasPermission("MANAGE_MEMBERS")) return message.reply("You don't have permission to Manage Members.");
  let nargs = args.slice(1).join(" ");
  let rrole = message.guild.roles.find(`name`, nargs);

    if(!rrole) return message.reply("There was an error with the role. Perhaps you spelled it incorrectly.");
  norole.removeRole(rrole.id); 
  message.channel.send(`<@${norole.id}>\'s role has been removed.`);
}
  
module.exports.help = {
  name: "removerole"
}
