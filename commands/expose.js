//i was reading stephen king while next to my PC and said "ay lmao" and logged into github to revert to an old c!expose
//mfw you wouldn't even check this
//:peepoWIDE:
// NEW EXPOSE 2.0, IMAGE TESTING
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
let snipedimage = snipechannel[0].image.attachments.size > 0 ? message.attachments.array()[0].url : '';

if (snipechannel[0] === "No snipes") {
  message.channel.send("There seems to be nobody to expose.");
} else {
  const embed = {
    "color": 5608903,
    "footer": {
      "text": `${snipechannel[1]} has been exposed`
    },
    "fields": [{
      "name": `\"${snipechannel[0]}\"`,
      "value": `<a:KirbyJam:583773264401137696>` 
    }],
    "image": {
      url: `${snipedimage}`
    }
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
