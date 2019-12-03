const Discord = require("discord.js");
exports.run = (client, message, args) => {
    const messageWords = message.content.split(' ');
    var rollMod = messageWords[2];
    var reason = messageWords.slice(3).join(' ');
    var emoji = ":game_die:";
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
    if (messageWords[1].includes('20')) {
        colour = '#FF7700';
        emoji = "<:d20:651242071557931008>";
    } else if (sides === 12) {
        colour = '#FFE600';
        emoji = "<:d12:651242056060108800>";
    } else if (sides === 10) {
        colour = '#000000';
        emoji = "<:d10:651242032160964608>";
    } else if (sides === 8) {
        colour = '#387CC9';
        emoji = "<:d8:651242016554090527>";
    } else if (sides === 6) {
        colour = '#FF4D00';
        emoji = "<:d6:651241999806103562>";
    } else if (sides === 4) {
        colour = '#12C934';
        emoji = "<:d4:651241982378901521>";
    } else if (sides === 100 {
        colour = '#F2F2F2';
        emoji = ":100:";
    } else {
        colour = '#808080';
    }
        message.delete().catch(O_o=>{}); 
    //I'm out of Kelloggs Frosted Flakes.
    if (rolls > 1) {
        const rollResults = [];
        for (let i = 0; i < rolls; i++) {
            rollResults.push(Math.floor(Math.random() * sides) + 1);
        }
        const sum = rollResults.reduce((a, b) => a + b);
        let dicesum = sum + (rollMod / 1)
        if (rollMod === 0) {
            rollMod = '0';
        }
        let embed = new Discord.RichEmbed()
            .setColor(colour)
            .setDescription('*Dice Tower*')
            .setDescription(`**${message.author}\'s ${messageWords[1]}** ${emoji}`)
            .addField(`${reason}: **${dicesum}**`, `[${rollResults.toString()}] + (${rollMod}) = ${dicesum}`)
        message.channel.send(embed);
    } else {
        if (!messageWords[1].includes('d')) {
            let roll = Math.floor(Math.random() * sides) + 1;
            console.log(`${sides}`);
            let diesum = roll + (rollMod / 1)
            if (rollMod === 0) {
                rollMod = '0';
            }
            
            let embed = new Discord.RichEmbed()
                .setColor(colour)
                .setDescription(`**${message.author}\'s ${rolls}d${messageWords[1]}** ${emoji}`)
                .addField(`${reason}: **__${diesum}__**`, `[${roll}] + (${rollMod}) = ${diesum}`)
            message.channel.send(embed);
            if(sides === 1) {
                message.channel.send("Bruh");
            } else if(roll === sides) {
                message.channel.send("**Critical Success!**");
            } else if (roll === 1) {
                message.channel.send("**Critical Failure!**");
            }
        } else {
            let roll = Math.floor(Math.random() * sides) + 1;
            let diesum = roll + (rollMod / 1)
            if (rollMod === 0) {
                rollMod = '0';
            }
            
            let embed = new Discord.RichEmbed()
                .setColor(colour)
                .setDescription(`**${message.author}\'s ${messageWords[1]}** ${emoji}`)
                .addField(`${reason}: **__${diesum}__**`, `[${roll}] + (${rollMod}) = ${diesum}`)
            message.channel.send(embed);
            if(sides === 1) {
                message.channel.send("Bruh");
            } else if(roll === sides) {
                message.channel.send("**Critical Success!**");
            } else if (roll === 1) {
                message.channel.send("**Critical Failure!**");
            }
        }
    }
};

module.exports.help = {
    name: "roll"
}
