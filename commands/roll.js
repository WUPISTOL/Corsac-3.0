const Discord = require("discord.js");
exports.run = (client, message, args) => {
let enumvar = parseInt(args[0], 10);
        if(!enumvar || enumvar < 4 || enumvar > 100)
            return message.reply("Please choose a number from 4 to 100 to roll.")
        let embed = new Discord.RichEmbed ()
        .setColor('#FFA62B')
        .setTitle('Die Roller')
        .setDescription(':game_die: You rolled a ' + Math.floor((Math.random() * enumvar) + 1) + ' :game_die:')
        .setTimestamp()
        message.channel.send(embed);
}

module.exports.help = {
  name: "roll"
}
