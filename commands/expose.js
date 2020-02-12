const Discord = require("discord.js");
const fs = require("fs");
const cooldown = new Set();
exports.run = async (client, message, args) => {
  if (cooldown.has(message.author.id))
        return message.reply("You can only expose once every 30 seconds!");

    cooldown.add(message.author.id);
    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 30000);
var snipes = JSON.parse(fs.readFileSync("./snipe.json", "utf8")); // file containing snipes
let chn = `${message.channel.id}`;
var snipechannel = snipes[chn]; // to call an specific deleted message I guess

if (snipechannel[0] === "No snipes") {
  message.channel.send("There seems to be nobody to expose.");
} else {
  const embed = {
    "color": 5608903,
    "footer": {
      "text": `~~Exposed by ${message.author}~~`
    },
    "fields": [{
      "name": `${snipechannel[1]} said:`,
      "value": `\"${snipechannel[0]}\"`
    }]
  };
  await message.channel.send({
    embed
  });
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
