const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({
    disableEveryone: true
});
const cooldown = new Set();
client.commands = new Discord.Collection();
// h
fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldn't find commands.");
        return;
    }
    //Js is c o n f u s i n g
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        client.commands.set(props.help.name, props);
    });

});


client.on("ready", async () => {
    console.log(`${client.user.username} is online on ${client.guilds.size} guilds!`);
    client.user.setActivity(`c!help`);
});
process.on("unhandledRejection", console.error);

client.on("message", async message => {
    if (message.author.bot) return;

    if (message.content.toLowerCase() === 'sokolov sokolov sokolov') {
    const sokolovs = ['\`\`\`Got it\`\`\`', '\`\`\`Got it\`\`\`', '\`\`\`Got it\`\`\`', '\`\`\`Got it\`\`\`', '\`\`\`Got it\`\`\`', '\`\`\`Got it\`\`\`', '\`\`\`Got it\`\`\`', '\`\`\`Got it\`\`\`', '\`\`\`Got it\`\`\`', '\`\`\`Got it\`\`\`', '\`\`\`Got it\`\`\`', '\`\`\`Got it\`\`\`', '\`\`\`Got it\`\`\`', '\`\`\`Got it\`\`\`', '\`\`\`Got it\`\`\`', '\`\`\`Got it\`\`\`', '\`\`\`Got it\`\`\`', '\`\`\`Got it\`\`\`', '\`\`\`Got it\`\`\`', '\`\`\`Got it\`\`\`', '\`\`\`Got it\`\`\`', '\`\`\`Soldier Soldier Soldier\`\`\`', '\`\`\`The Pain!\`\`\`', '\`\`\`This isn\'t interesting.\`\`\`', `***Not yet, ${message.author}, it's not over yet.***`, '\`\`\`You\'re pretty good.\`\`\`', '\`\`\`I loVe jApaN.\`\`\`', '\`\`\`The Fear!\`\`\`', '\`\`\`Wipe this meme off the face of the earth.\`\`\`', '\`\`\`Psycho Mantis?\`\`\`', '\`\`\`Sokolob\`\`\`', '\`\`\`THEY PLAYED US LIKE A DAMN FIDDLE\`\`\`', '\`\`\`Played college ball, you know. Try University of Texas. Coulda gone pro if I hadn\'t joined the Navy. I\'m not one of those beltway pansies. I could break the President in two... with my bare hands. Don\'t fuck with **this** senator!\`\`\`', '\`\`\`Memes. The DNA of the soul.\`\`\`', '\`\`\`Kept you waiting, huh?\`\`\`'];

    return message.channel.send(sokolovs[Math.floor(Math.random() * sokolovs.length)])
    }

    let prefix = config.prefix;

    if (message.content.indexOf(prefix) !== 0) return;

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
    if (commandfile) commandfile.run(client, message, args);
    if (!cmd) return message.channel.send("...?");

    if (message.content.indexOf(prefix) !== 0) return;
    if (!cmd) return message.channel.send("Please use an actual command.")

});
client.on("messageDelete", (message) => {
  if (message.author.bot) return;

  var snipes = require("./snipe.json");
  snipes[`${message.channel.id}`] = [`${message}`, `${message.author.tag}`];

  var fileName = './snipe.json';

  fs.writeFile(fileName, JSON.stringify(snipes, null, 2), function(error) {
    if (error) {
      return console.log(error)
    }
  });
});
//kirbyjam, it works
client.login(process.env.BOT_TOKEN);
