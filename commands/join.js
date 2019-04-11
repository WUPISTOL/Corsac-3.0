const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const channel = client.channels.get("510559055165521921");
  if (!channel) return console.error("Couldn't find channel.");
  channel.join().then(connection => {
    console.log("Connected successfully to voice channel");
  }).catch(e => {
    console.error(e);
  });
  }
  module.exports.help = {
  name: "join"
  }
