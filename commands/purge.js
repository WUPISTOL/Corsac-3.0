exports.run = async (message, client, args) => {

        if(!message.member.roles.some(r=>["HIGH COMMAND"].includes(r.name)) )
            return message.reply("Nice try.");
        
        const numvar = parseInt(args[0], 10);
    
        if(!numvar || numvar < 2 || numvar > 100) return message.reply("Choose a number between 2 and 100 to purge.");
    
        const fetched = await message.channel.fetchMessages({limit: numvar});
        message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }

module.exports.help = {
  name: "purge"
}
