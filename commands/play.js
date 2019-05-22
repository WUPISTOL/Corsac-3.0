module.exports.help = {
  name: "play"
}

exports.run = (client, message, args) => {
        const watchmessage = args.join(" ");
        if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply("Nice try.");
    
    client.user.setActivity(watchmessage, {type: 1});
}
