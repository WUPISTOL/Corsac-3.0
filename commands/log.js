const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  const messageWords = message.content.split(' ');
  var reason = messageWords.slice(1).join(' ');
  let logchannel = message.guild.channels.find(`name`, "log");
  if(!logchannel) return message.reply("Create a \`log\` channel so that I can actually log something.");
  logchannel.send(`\`\`\`${reason}\`\`\``);
  message.delete().catch(O_o=>{}); 
  const e = await message.channel.send(":white_check_mark:");
   setTimeout(() => { e.delete(); }, 2000);
}

module.exports.help = {
  name: "log"
}
