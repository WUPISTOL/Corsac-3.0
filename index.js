const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });

});


client.on("ready", async () => {
  console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);

  client.user.setActivity("tutorials because Grey is confused", {type: "WATCHING"});

  //bot.user.setGame("on SourceCade!");
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
    
  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client, message, args);
    
    const blargs = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const pcommand = blargs.shift().toLowerCase();

    if(message.content.indexOf(prefix) !== 0) return;
    if(!pcommand) return message.channel.send("Please use an actual command.")
    
    if(pcommand === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! The latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms.`);
  }
    if(pcommand === "purge") {

        if(!message.member.roles.some(r=>["HIGH COMMAND"].includes(r.name)) )
            return message.reply("Nice try.");
        //Get the delete count as a number.
        const numvar = parseInt(args[0], 10);
    
        if(!numvar || numvar < 2 || numvar > 100)
            return message.reply("Please choose a number between 2 and 100 to purge.");
    
        const fetched = await message.channel.fetchMessages({limit: numvar});
        message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
    
});


client.login(process.env.BOT_TOKEN);
