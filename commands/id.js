const Discord = require("discord.js");
exports.run = (client, message, args) => {
      var imember = message.mentions.users.first();
    if(!imember){
    message.delete().catch(O_o=>{}); 
    message.author.send(`${message.author.id}`);
    } else {
    message.delete().catch(O_o=>{}); 
    imember.send(`${imember.id}`);
    }
}

module.exports.help = {
  name: "id"
}
