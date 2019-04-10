module.exports.help = {
  name: "setAct"
}

exports.run = (client, message, args) => {
  const actno = args.join( );
    let actmessage = args.slice(1).join(" ")
    if(!message.member.roles.some(r=>["Commanding Officer", "HIGH COMMAND"].includes(r.name)) )
    return message.reply("Nice try.");
  if(actno > 4 || actno < 1) return message.reply("Please use a number from 1-4.");
    
    client.user.setActivity(actmessage, {type: actno})
}
