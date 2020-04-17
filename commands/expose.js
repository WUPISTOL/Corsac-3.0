const Discord = require("discord.js");
const fs = require("fs");
const cooldown = new Set();
exports.run = async (client, message, args) => {
  if (cooldown.has(message.author.id))
        return message.reply("You can only expose once every 30 seconds!");

    cooldown.add(message.author.id);
    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 1000);
var snipes = JSON.parse(fs.readFileSync("./snipe.json", "utf8")); // file containing snipes
let chn = `${message.channel.id}`;
var snipechannel = snipes[chn]; // to call an specific deleted message I guess

if (snipechannel[0] === "No snipes") {
  message.channel.send("There seems to be nobody to expose.");
} else {
  const embed = new Discord.RichEmbed()
  .setAuthor(`${snipechannel[1]} was exposed by ${message.author.tag}`);
  
  if (snipechannel[0]) embed.setDescription(`\"${snipechannel[0]}\"`);
  
  if (snipechannel[2]) {
    embed.setImage(snipechannel[2]);
  }
  
  await message.channel.send(embed);
  
  snipechannel[0] = "No snipes";

  var fileName = './snipe.json';
  var file = require(fileName);

  fs.writeFile(fileName, JSON.stringify(file, null, 2), function(error) {
    if (error) {
      return console.log('oops');
    }
  });
}
}

module.exports.help = {
  name: "expose"
}
