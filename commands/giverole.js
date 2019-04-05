const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let rargs = args.slice(1).join(' ');
  let torole = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!torole) return message.reply("Couldn't find user.");
  if(!message.author.hasPermission("MANAGE_MEMBERS")) return message.reply("You don't have permission to Manage Members.");
  let grole = message.guild.roles.find(`name`, "${rargs}");

    if(!grole) return message.reply("There was an error with the role. Perhaps you spelled it incorrectly.");

  await(torole.addRole(grole.id));
  message.reply(`<@${torole.id}> has been given the ${grole.id} role.`);

}

module.exports.help = {
  name: "giverole"
}
