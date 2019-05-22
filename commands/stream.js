module.exports.help = {
  name: "stream"
}

exports.run = (client, message, args) => {
        const watchmessage = args.join(" ");
    if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply("Nice try.");
    
    client.user.setActivity(watchmessage, {type: 'STREAMING'});
}
