const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const channel = client.channels.get("510559055165521921");
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    console.log("Successfully connected.");
  }).catch(e => {
    console.error(e);
  });
  }
  module.exports.help = {
  name: "join"
  }
