exports.run = async (client, message, args) => {
  let roll = Math.floor(Math.random() * 100) + 1;
  if(roll === 99) {
    message.delete().catch(O_o=>{}); 
    message.channel.send("<:haha:664246257404870656>")
  } else {
  message.channel.send("Poyo!");
  message.channel.send("<a:KirbyJam:583773264401137696>");
  }
}

module.exports.help = {
  name: "kirbyjam"
}
