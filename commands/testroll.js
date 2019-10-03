const Discord = require("discord.js");
exports.run = (client, message, args) => {
    const messageWords = message.content.split(' ');
    const rollMod = messageWords[2];
    var cresult = messageWords.slice(3).join(' ');
    if(!cresult) {
        cresult = "Result";
    }
    if(!rollMod) {
        rollMod = 0;
    }
    var colour = '#FFAA00';
    if (messageWords.length === 1) {
        return message.reply("Please specify the die and number of dice you want to roll. Modifiers go after the die. *\(Example: c!roll 1d20 +5\)*");
    }

    let sides = messageWords[1];
    let rolls = 1;
    if (sides > 100) return message.reply("The maximum number of sides is 100.")
       if (isNaN(rollMod.charAt(1)){
       rollMod = 0;
           }

    if (!isNaN(messageWords[1][0] / 1) && messageWords[1].includes('d')) {
        // !roll 4d20
        rolls = messageWords[1].split('d')[0] / 1;
        sides = messageWords[1].split('d')[1];
        if (sides > 100) return message.reply("The maximum number of sides is 100.");
        if (rolls > 23) return message.reply("You rolled a.... hold up, we don't have that many dice!");
    } else if (messageWords[1][0] == 'd') {
        // !roll d20
        sides = sides.slice(1);
        if (sides > 100) return message.reply("The maximum number of sides is 100.");
    }
    sides = sides / 1; //Darn isNaN messing up meh commands
    if (isNaN(sides) || isNaN(rolls)) {
        return;
    }
    if(messageWords[1].includes('20')) {
    colour = '#FFAA00';
    } else if (sides === 12){
        colour = '#000000';
    } else if (sides === 10){
        colour = '#003CFF';
    } else if (sides === 8) {
        colour = '#AA00FF';
    } else if (sides === 6) {
        colour = '#FFEE00';
    } else if (sides === 4) {
        colour = '#0DFF00';
    } else {
        colour = '#C2C2C2';
    }
    //I'm out of Kelloggs Frosted Flakes.
    if (rolls > 1) {
        const rollResults = [];
        for (let i = 0; i < rolls; i++) {
            rollResults.push(Math.floor(Math.random() * sides) + 1);
        }
        const sum = rollResults.reduce((a, b) => a + b);
        let dicesum = sum + (rollMod / 1)
            if(rollMod === 0)  {
                rollMod = '0';
            }
        let embed = new Discord.RichEmbed()
            .setColor(colour)
            .setDescription('*Dice Tower*')
            .addField(`*${message.author.username}\'s ${messageWords[1]}*`, `${cresult}: **${dicesum}**`)
            .setFooter(`[${rollResults.toString()}] + (${rollMod}) = ${dicesum}`)
            .setTimestamp()
        message.channel.send(embed);
    } else {
        if (!messageWords[1].includes('d')) {
            let roll = Math.floor(Math.random() * sides) + 1
            let diesum = roll + (rollMod / 1)
            if(rollMod === 0)  {
                rollMod = '0';
            }
            let embed = new Discord.RichEmbed()
                .setColor(colour)
                .setDescription(`**${message.author.username}\'s ${rolls}d${messageWords[1]}**`)
                .addField(`${cresult}: **__${diesum}__**`, `[${roll}] + (${rollMod}) = ${diesum}`)
                .setTimestamp()
            message.channel.send(embed);
        } else {
            let roll = Math.floor(Math.random() * sides) + 1
            let diesum = roll + (rollMod / 1)
            if(rollMod === 0)  {
                rollMod = '0';
            }
            let embed = new Discord.RichEmbed()
                .setColor(colour)
                .setDescription(`**${message.author.username}\'s ${messageWords[1]}**`)
                .addField(`${cresult}: **__${diesum}__**`, `[${roll}] + (${rollMod}) = ${diesum}`)
                .setTimestamp()
            message.channel.send(embed);
        }
    }
    console.log(rollMod);
    console.log(cresult);
};

module.exports.help = {
    name: "testroll"
}
