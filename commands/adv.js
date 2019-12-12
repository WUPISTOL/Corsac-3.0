const Discord = require("discord.js");
exports.run = (client, message, args) => {
    const messageWords = message.content.split(' ');
    var rollMod = messageWords[2];
    var reason = messageWords.slice(3).join(' ');
    var emoji = "<:d20:651242071557931008>";
    if (!rollMod) {
        rollMod = 0;
    } else if (isNaN(rollMod)) {
        rollMod = 0;
        reason = messageWords.slice(2).join(' ');
    };
  if(!reason) {
      reason = "Result";
  }
    
    var colour = '#FFAA00';
    if (messageWords.length === 1) {
        return message.reply("Please specify the die and number of dice you want to roll. Modifiers go after the die. *\(Example: c!roll 1d20 +5\)*");
    }

    let sides = messageWords[1];
    let rolls = 1;
    if (sides > 100) return message.reply("The maximum number of sides is 100.")

    if (!isNaN(messageWords[1][0] / 1) && messageWords[1].includes('d')) {
        // !roll 4d20
        rolls = messageWords[1].split('d')[0] / 1;
        sides = messageWords[1].split('d')[1];
        if (sides > 100) return message.reply("The maximum number of sides is 100.");
        if (rolls > 25) return message.reply("You rolled a.... hold up, we don't have that many dice!");
    } else if (messageWords[1][0] === 'd') {
        // !roll d20
        sides = sides.slice(1);
        if (sides > 100) return message.reply("The maximum number of sides is 100.");
    }
    sides = sides / 1; //Darn isNaN messing up meh commands
    if (isNaN(sides) || isNaN(rolls)) {
        return;
    }
        colour = '#FF7700';
        message.delete().catch(O_o=>{}); 
    //I'm out of Kelloggs Frosted Flakes.
        const rollResults = [];
        for (let i = 0; i < 2; i++) {
            rollResults.push(Math.floor(Math.random() * sides) + 1);
        }
        var higherVal = "bruh"
        var lowerVal = "bruh2"
        if(rollResults[0] > rollResults[1]) {
            higherVal = rollResults[0];
            lowerVal = rollResults[1];
        } else {
            higherVal = rollResults[1];
            lowerVal = rollResults[0];
        }
    
        let hsum = higherVal + (rollMod / 1);
        let lsum = lowerVal + (rollMod / 1);
        if (rollMod === 0) {
            rollMod = '0';
        }
        const highersum = `[${higherVal}] + (${rollMod}) = ${hsum}`;
        const lowersum = `[${lowerVal}] + (${rollMod}) = ${lsum}`;
        let embed = new Discord.RichEmbed()
            .setColor(colour)
            .setTitle(`**${message.author} rolls with advantage!**`)
            .setDescription(highersum)
            .addField(lowersum, "<a:KirbyJam:583773264401137696>")
            .setFooter(`${reason}`)
        message.channel.send(embed);
         }
};

module.exports.help = {
    name: "adv"
}
