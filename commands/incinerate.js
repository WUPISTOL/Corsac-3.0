const Discord = require("discord.js");
exports.run = async (client, message, args) => {
//     var messageString = message.content.split(' ');
//     var Num = messageString.slice(1).join(' ');
//     if(isNaN(Num)) return message.channel.send("You must provide a number to incinerate.");
//     var toDelete = 100
//     const fetched = await message.channel.fetchMessages({
//         limit: toDelete
//     });
//     if (!message.member.hasPermission("MANAGE_MESSAGES"))
//         return message.reply("You don't have the necessary permissions.");
//     message.react('👍').then(() => message.react('👎'));

//     const filter = (reaction, user) => {
//         return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
//     };

//     message.awaitReactions(filter, {
//             max: 1,
//             time: 30000,
//             errors: ['time']
//         })
//         .then(collected => {
//             const reaction = collected.first();

//             if (reaction.emoji.name === '👍') {
//                 message.delete().catch(O_o => {});
//                 if (!isNaN(Num)) {
//                     if (!Num || Num < 1 || Num > 10)
//                         return message.reply("Please choose a number between 1-10 to incinerate.");

//                     for (var i = 0; i < Num; i++) {
//                         message.channel.bulkDelete(fetched)
//                             .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
//                     }
//                 } else return;
//             } else {
//                 message.delete().catch(O_o => {});
//             }
//         })
//         .catch(collected => {
//             console.log(`After 30 seconds, only ${collected.size} out of 4 reacted.`);
//             message.reply('you didn\'t react with neither a thumbs up, nor a thumbs down.');
//         });
}

module.exports.help = {
    name: "incinerate"
}
