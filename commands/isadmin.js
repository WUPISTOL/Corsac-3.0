const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let Amember = message.mentions.users.first();
    if (!Amember.hasPermission("ADMINISTRATOR")) {
        message.reply("This user is not an admin.")
    } else {
        message.reply("This user is an admin.")
    }
};

module.exports.help = {
  name: "isadmin"
}
