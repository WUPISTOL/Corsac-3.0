const Discord = require("discord.js");
const fs = require("fs");
let warnings = JSON.parse(fs.readFileSync("./warnlist.json", "utf8"));

module.exports.run = async (client, message, args) => {
//   if (!message.member.hasPermission("ADMINISTRATOR"))
//     return message.reply("Nice try. Actually wait, there's no point in not allowing other people to use this command because damn Heroku resets the warning file every 24 hours so warnings get wiped every day, so why tf did I make it this way lma0");
//   let wuser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
//   if(!wuser) return message.reply("Specify a user to warn.");
//   let reason = args.join(" ").slice(22);

//   if(!warnings[wuser.id]) warnings[wuser.id] = {
//     warnings: 0
//   };

//   warnings[wuser.id].warnings++;

//   fs.writeFile("./warnlist.json", JSON.stringify(warnings), (err) => {
//     if (err) console.log(err)
//   });

//   let warnchannel = message.guild.channels.find(`name`, "log");
//   if(!warnchannel) return message.reply("Create a \`log\` channel so I can log the incident.");
  
//     let wembed = new Discord.RichEmbed()
//     .setColor('#FF0000')
//     .setDescription('*USER HAS BEEN WARNED*')
//     .addField('**User warned:**', `${wuser.user.tag}`)
//     .addField('**Warned in:**', `${message.channel}`)
//     .addField('**Number of warnings:**', `${warnings[wuser.id].warnings}`)
//     .setFooter(`Reason: ${reason}`)
//     .setTimestamp()
//     warnchannel.send(wembed);
//   message.channel.send("User has been successfully warned.");
}

module.exports.help = {
  name: "warn"
}
