exports.run = async (client, message, args) => {
  let roll = Math.floor(Math.random() * 100) + 1;
  if(roll === 97) {
    message.delete().catch(O_o=>{}); 
    message.channel.send("<:haha:664261063532871697> You found Craig, the unfindable haha. Time will now begin to collapse.")
  } else {
  message.channel.send("Poyo!");
  message.channel.send("<a:KirbyJam:583773264401137696>");
  }
}

module.exports.help = {
  name: "kirbyjam"
}
