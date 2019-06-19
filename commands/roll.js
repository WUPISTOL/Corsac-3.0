const Discord = require("discord.js");
exports.run = (client, message, args) => {
    const messageWords = message.content.split(' ');
    const rollMod = messageWords.slice(2).join(' ');
    if (messageWords.length === 1) {
        return message.reply("Please specify the die and number of dice you want to roll. Modifiers go after the die. *\(Example: c!roll 1d20 +5\)*");
    }

    let sides = messageWords[1];
    let rolls = 1;
    if (sides > 100) return message.reply("The maximum number of sides is 100.");
    if (!isNaN(messageWords[1][0] / 1) && messageWords[1].includes('d')) {
        // !roll 4d20
        rolls = messageWords[1].split('d')[0] / 1;
        sides = messageWords[1].split('d')[1];
        if (sides > 100) return message.reply("The maximum number of sides is 100.");
        if (rolls > 23) return message.reply("We don't have that many dice!");
    } else if (messageWords[1][0] == 'd') {
        // !roll d20
        sides = sides.slice(1);
        if (sides > 100) return message.reply("The maximum number of sides is 100.");
    }
    sides = sides / 1; //Darn isNaN messing up meh commands
    if (isNaN(sides) || isNaN(rolls)) {
        return;
    }
    //I'm out of Kelloggs Frosted Flakes.
    if (rolls > 1) {
        const rollResults = [];
        for (let i = 0; i < rolls; i++) {
            rollResults.push(Math.floor(Math.random() * sides) + 1);
        }
        const sum = rollResults.reduce((a, b) => a + b);
        let dicesum = sum + (rollMod / 1)
        let embed = new Discord.RichEmbed()
            .setColor('#FFAA00')
            .setTitle('Die Roller')
            .setDescription(`**Total: ${dicesum}**`)
            .addField(`*${messageWords[1]} result*`, `You rolled: ${rollResults.toString()} | Modifier: ${rollMod}`)
            .setFooter('All commands have the prefix (c!).')
            .setTimestamp()
        message.channel.send(embed);
    } else {
        if (!messageWords[1].includes('d')) {
            let roll = Math.floor(Math.random() * sides) + 1
            let diesum = roll + (rollMod / 1)
            let embed = new Discord.RichEmbed()
                .setColor('#FFAA00')
                .setTitle('Die Roller')
                .setDescription(`**Total: ${diesum}**`)
                .addField(`*d${messageWords[1]} result*`, `You rolled a: ${roll} | Modifier: ${rollMod}`)
                .setFooter('All commands have the prefix (c!).')
                .setTimestamp()
            message.channel.send(embed);
        } else {
            let roll = Math.floor(Math.random() * sides) + 1
            let diesum = roll + (rollMod / 1)
            let embed = new Discord.RichEmbed()
                .setColor('#FFAA00')
                .setTitle('Die Roller')
                .setDescription(`**Total: ${diesum}**`)
                .addField(`*${messageWords[1]} result*`, `You rolled a: ${roll} | Modifier: ${rollMod}`)
                .setFooter('All commands have the prefix (c!).')
                .setTimestamp()
            message.channel.send(embed);
        }
    }
};

module.exports.help = {
    name: "roll"
}
