const Discord = require("discord.js");
exports.run = (client, message, args) => {
    var imember = message.mentions.users.first();
    var authors = message.author;
    if(!imember){
    message.delete().catch(O_o=>{}); 
    authors.send(`${message.author.id}`);
    } else {
    message.delete().catch(O_o=>{}); 
    authors.send(`${imember.id}`);
    }
}

module.exports.help = {
  name: "id"
}
