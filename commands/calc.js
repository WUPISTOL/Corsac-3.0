const Discord = require("discord.js");
exports.run = (client, message, args) => {
const embed1 = new Discord.MessageEmbed()
        .setTitle('Embed #1')
        .setColor('RED');
        
    const embed2 = new Discord.MessageEmbed()
        .setTitle('Embed #2')
        .setColor('YELLOW');
        
    const embed3 = new Discord.MessageEmbed()
        .setTitle('Embed #3')
        .setColor('BLUE');
    
    const embedPages = [embed1, embed2, embed3];
    ButtonPages.createPages(client.interaction, msg, embedPages, 60 * 1000, "red", "👉", "👈", "❌");
}
module.exports.help = {
  name: "calc"
}
