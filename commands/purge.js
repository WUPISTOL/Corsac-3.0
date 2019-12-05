exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.reply("You don't have the necessary permissions.");
    const messageString = message.content.split(' ');
    const Num = messageString.slice(1).join(' ');
    if (!isNaN(Num)) {
        if (!Num || Num < 2 || Num > 100)
            return message.reply("Please choose a number between 2 and 100 to purge.");

        //     const fetched = await message.channel.fetchMessages({limit: Num});
        //     message.channel.bulkDelete(fetched)
        var amount = 0
        for (var i = 0; i < Num; i++) {
            message.channel.fetchMessages({ limit: 1 }).then(messages => {
            let lastMessage = messages.first();
            lastMessage.delete().catch(O_o => {});
            amount++;
            }
        }
        message.channel.send(`Deleted ${amount} messages.`);  
    } else return;
}

module.exports.help = {
    name: "purge"
}
