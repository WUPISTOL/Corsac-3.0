const Discord = require("discord.js");
const fs = require("fs");
let warnings = JSON.parse(fs.readFileSync("./warnlist.json", "utf8"));

module.exports.run = async (client, message, args) => {

  let wuser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wuser) return message.reply("Specify a user to warn.");
  let reason = args.join(" ").slice(22);

  if(!warnings[wuser.id]) warnings[wuser.id] = {
    warnings: 0
  };

  warnings[wuser.id].warnings++;

  fs.writeFile("./warnlist.json", JSON.stringify(warnings), (err) => {
    if (err) console.log(err)
  });

  let warnchannel = message.guild.channels.find(`name`, "log");
  if(!warnchannel) return message.reply("Create a \`log\` channel so I can log the incident.");
  
    let wembed = new Discord.RichEmbed()
    .setColor('#FF0000')
    .setDescription('*USER HAS BEEM WARNED*')
    .addField('**User warned:**', `${wuser.user.tag}`)
    .addField('**Warned in:**', `${message.channel}`)
    .addField('**Number of warnings:**', `${warnings[wuser.id].warnings}`)
    .setFooter(`Reason: ${reason}`)
    .setTimestamp()
    warnchannel.send(wembed);
  message.channel.send("User has been successfully warned.");
}

module.exports.help = {
  name: "warn"
}
