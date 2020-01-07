exports.run = async (client, message, args) => {
  let roll = Math.floor(Math.random() * 100) + 1;
  if(sides === 1) {
    message.channel.send("<:haha:664246257404870656>")
  } else {
  message.channel.send("Poyo!");
  message.channel.send("<a:KirbyJam:583773264401137696>");
  }
}

module.exports.help = {
  name: "kirbyjam"
}
