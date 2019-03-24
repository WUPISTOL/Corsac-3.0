module.exports.help = {
  name: "stream"
}

exports.run = (client, message, args) => {
        const watchmessage = args.join(" ");
    if(!message.member.roles.some(r=>["Commanding Officer", "HIGH COMMAND"].includes(r.name)) )
    return message.reply("Nice try.");
    
    client.user.setActivity(watchmessage, {type: 'STREAMING'});
}