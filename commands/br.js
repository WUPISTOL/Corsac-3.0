const Discord = require("discord.js");
exports.run = (client, message, args) => {
    message.delete().catch(O_o=>{}); 
    message.channel.send("\`\`\` \`\`\`");
}

module.exports.help = {
  name: "br"
}
