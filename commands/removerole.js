const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let rargs = args.slice(1).join(" ");
  let grole = message.guild.roles.find(`name`, rargs);
  let torole = message.mentions.members.first();
  if(!torole) return message.reply("Couldn't find user.");
  if(!message.author.hasPermission("MANAGE_MEMBERS")) return message.reply("You don't have permission to Manage Members.");


  if(!grole) return message.reply("There was an error with the role. Perhaps you spelled it incorrectly.");

  await(torole.removeRole(grole.id));
  message.reply(`<@${torole.id}> has been given the ${grole.id} role.`);
}

module.exports.help = {
  name: "giverole"
}
