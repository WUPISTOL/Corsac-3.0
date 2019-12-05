const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    const fetched = await message.channel.fetchMessages({
    limit: 100
    });
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.reply("You don't have the necessary permissions.");
    message.react('👍').then(() => message.react('👎'));

    const filter = (reaction, user) => {
        return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    message.awaitReactions(filter, {
            max: 1,
            time: 60000,
            errors: ['time']
        })
        .then(collected => {
            const reaction = collected.first();

            if (reaction.emoji.name === '👍')  {
                message.delete().catch(O_o => {});
                var messageString = message.content.split(' ');
                var Num = messageString.slice(1).join(' ');
                if (!isNaN(Num)) {
                    if (!Num || Num < 1 || Num > 10)
                        return message.reply("Please choose a number between 1-10 to incinerate.");

                    for(var i=0; i < fetched; i++){
                        setTimeout(() => {
                        message.channel.bulkDelete(fetched)
                        .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
                        }, 1500);
                        }
                      }
                        .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
                } else return;
            } else {
                message.delete().catch(O_o => {});
            }
        })
        .catch(collected => {
            console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
            message.reply('you didn\'t react with neither a thumbs up, nor a thumbs down.');
        });
}

module.exports.help = {
    name: "incinerate"
}
