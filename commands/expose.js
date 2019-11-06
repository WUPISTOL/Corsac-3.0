const Discord = require("discord.js");
const fs = require("fs");
exports.run = async (client, message, args) => {
var snipes = JSON.parse(fs.readFileSync("./snipe.json", "utf8")); // file containing snipes
let chn = `${message.channel.id}`;
var snipechannel = snipes[chn]; // to call an specific deleted message I guess

if (!snipechannel[1]) {
  message.channel.send("There seems to be nobody to expose.");
} else {
  const embed = {
    "color": 5608903,
    "footer": {
      "text": `Exposed by ${message.author.tag}`
    },
    "fields": [{
      "name": `\"${snipechannel[0]}\"`,
      "value": `lmao`
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
