const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
const cooldown = new Set();
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

});
process.on("unhandledRejection", console.error);

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
    
  let prefix = config.prefix;
  
    if(message.content.indexOf(prefix) !== 0) return;
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if (cooldown.has(message.author.id))
  return message.reply("You're sending messages way too fast!");

cooldown.add(message.author.id);
setTimeout(() => {
  cooldown.delete(message.author.id);
}, 700);
                                
  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client, message, args);
   if(!cmd) return message.channel.send("...?");
  
    const blargs = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const pcommand = blargs.shift().toLowerCase();

    if(message.content.indexOf(prefix) !== 0) return;
    if(!cmd) return message.channel.send("Please use an actual command.")

        const numvar = parseInt(args[0], 10);
    if(pcommand === "purge") {
        if(!message.member.roles.some(r=>["HIGH COMMAND"].includes(r.name)) )
            return message.reply("Nice try.");

        if(!numvar || numvar < 2 || numvar > 100)
            return message.reply("Please choose a number between 2 and 100 to purge.");
                
        const fetched = await message.channel.fetchMessages({limit: numvar});
        message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});


client.login(process.env.BOT_TOKEN);
