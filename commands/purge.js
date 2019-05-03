exports.run = (message, client, args) => {

        if(!message.member.roles.some(r=>["HIGH COMMAND"].includes(r.name)) )
            return message.reply("Nice try.");
        async function purge() {
                message.delete();
                
                if(isNaN(args[0])) {
                        message.channel.send("You must supply a number as your argument. *Example:* \`c!purge 10\`");
                }

                const fetched = await message.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + 'messages found and currently deleting.');
            message.channel.bulkDelete(fetched)
            .catch(error => message.channel.send(`Could not delete messages because: ${error}`));
  }
    purge();
}

module.exports.help = {
  name: "purge"
}
