const Discord = require("discord.js");
const fs = require("fs");
let warnings = JSON.parse(fs.readFileSync("./warnlist.json", "utf8"));

module.exports.run = async (client, message, args) => {

  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!user) return message.reply("Specify a user to warn.");
  let reason = args.join(" ").slice(22);

  if(!warnings[user.id]) warnings[user.id] = {
    warnings: 0
  };

  warnings[user.id].warnings++;

  fs.writeFile("./warnlist.json", JSON.stringify(warnings), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed ()
  .setDescription("User has been warned")
  .setColor("#ff0000")
  .addField("Warned User", `<@${user.id}>`)
  .addField("Warned In", message.channel)
  .addField("Current Number of Warnings", warnings[user.id].warnings)
  .addField("Reason", reason);

  let warnchannel = message.guild.channels.find(`name`, "log");
  if(!warnchannel) return message.reply("Create a \`log\` channel so I can log the incident.");

  warnchannel.send(warnEmbed);
}

module.exports.help = {
  name: "warn"
}
