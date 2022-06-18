const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client({
    intents: ["GUILDS",
        "GUILD_MESSAGES",
        "GUILD_EMOJIS_AND_STICKERS",
        "GUILD_VOICE_STATES",
        "GUILD_MESSAGE_REACTIONS",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_REACTIONS",
        "GUILD_PRESENCES"
    ]
})
client.interaction = {}; //Creating interaction object
const DiscordButtons = require('discord-buttons'); //Requiring Discord-BUttons module.
const ButtonPages = require('discord-button-pages'); //Requiring Discord-Button-Pages module.
DiscordButtons(client);
const ytdl = require("ytdl-core");

const {
    join
} = require('path');
const fs = require("fs");

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
    console.log(`${client.user.username} is online on ${client.guilds.cache.size} guilds!`);
    client.user.setActivity(`Yakuza Ishin!`);
//   const channel = client.channels.cache.get("884267307143139399");
//   if (!channel) return console.error("The channel does not exist!");
//   channel.join().then(connection => {
//     // Yay, it worked!
//     console.log("Successfully connected.");
//   }).catch(e => {
//     // Oh no, it errored! Let's log it to console :)
//     console.error(e);
//   });
});

client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnect!");
});

client.on('clickButton', (button) => {
    ButtonPages.buttonInteractions(button, client.interaction);
});
process.on("unhandledRejection", console.error);

client.on("messageReactionAdd", async (reaction, user) => {
    //     if (reaction.emoji.name !== "🐻") console.log("emoji not found lmao");
    //     let rMember = reaction.message.author;
    //     let gRole = reaction.message.guild.roles.find(`name`, "Dawg");
    //     if(!gRole) return console.log("That role doesn't exist.");
    //     rMember.addRole(gRole.id);
    if (reaction.emoji.name !== "⭐") return;
        let rMessage = reaction.message;
        console.log("____________________");
        console.log('Message reaction detected.')
        console.log("____________________");
        console.log(`Message: ${rMessage.content}`);
        console.log(`Emoji: ${reaction.emoji.name}`);
        console.log(`Reaction recipient: ${rMessage.author.username}`)
        console.log(`Reaction sender: ${user.username}`);
        console.log("____________________");
        let starredMessage = rMessage.guild.id;
        let starChannel = rMessage.guild.channels.cache.find(ch => ch.name === 'starboard');
        if (!starChannel) return console.log("Star detected, but no starboard channel found.");
        console.log("Star detected, starChannel found. Counting star awards...");
        console.log(`Total number of awards given: ${reaction.count}`)
        console.log("____________________");
        if (reaction.count !== 1) return;
        let starredimage = rMessage.attachments.size > 0 ? rMessage.attachments.array()[0].url : '';
        if (starredimage === '' && rMessage.cleanContent.length < 1) return rMessage.channel.send('Unfortunately Guam can\'t figure out how to star embeds.');
        let embed = new Discord.MessageEmbed()
            .setColor('#FF00FF')
            .setDescription(rMessage.cleanContent)
            .setAuthor(rMessage.author.tag, rMessage.author.displayAvatarURL)
            .setTimestamp(new Date())
            .setFooter(`⭐`)
            .addField("⠀", `[Jump!](${rMessage.url})`)
            .setImage(starredimage);
        await starChannel.send(embed);
});

client.on("message", async message => {
    if (message.author.bot) return;
    
    if (message.content.toLowerCase() === 'sokolov sokolov sokolov') {
        const sokolovs = ['\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`got it\`', '\`Soldier Soldier Soldier\`', '\`The Pain!\`', '\`This isn\'t interesting.\`', `***Not yet, ${message.author}, it's not over yet.***`, '\`You\'re pretty good.\`', '\`I loVe jApaN.\`', '\`The Fear!\`', '\`Wipe this meme off the face of the earth.\`', '\`Psycho Mantis?\`', '\`Sokolob\`', '\`THEY PLAYED US LIKE A DAMN FIDDLE\`', '\`Played college ball, you know. Try University of Texas. Coulda gone pro if I hadn\'t joined the Navy. I\'m not one of those beltway pansies. I could break the President in two... with my bare hands. Don\'t fuck with **this** senator!\`', '\`Memes. The DNA of the soul.\`', '\`Kept you waiting, huh?\`', '\`La-Li-Lu-Le-Lo\`', '\`Never liked kids. Especially ones with guns.\`', '\`Nanomachines, son.\`', '\`Rise n\' shine, old-timer. It is complete! I had our best and brightest working overtime, fine-tuning the greatest burger the world has ever known!\`', '\`Curse the gods for they have forsaken me with the ability to code\`', '\`You\'re pretty bad.\`', '\`One hundred billion dollars!\`', '\`WHICH ONE OF YA WANNA \[REDACTED\]\`', 'Liquidus blocks of dried up crusty... things.', 'LMFAO', 'lmfao~', 'Bueno', 'Will you stop spamming Sokolov?', 'We\'ve managed to avoid drowning!', 'I got fired and blacklisted from Dennys for dropping a live rat into the deep fryer.', 'Harder daddy', 'BUENISSIMO', 'I don\'t speak japanese.', 'I\'m finished!', 'There are seven billion people on this earth, and not one of them asked you to spam Sokolov.', 'Don\'t hate me \'cause I\'m beautiful.', 'there is a pipe bomb in your mailbox', 'a mog ass', 'amogus', 'mongus', 'I\'ve written like 50 possible responses and I\'m out of ideas', 'Sunao ni I LOVE YOU! Todokeyou kitto YOU LOVE ME! Tsutawaru sa kimi ni Niau garasu no, Kutsu wo sagasou! Futari de STEP & GO! Itsu made mo, Shinya juuni-ji wo! Sugitatte kimi wa boku no itoshii Nijuuyo-jikan Shindereraaaa~', 'https://www.youtube.com/watch?v=Ntu_6ROG8EM', 'You\'re a cool person. :\)'];

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
    if (!cmd) return;
    
//     if (message.content.toLowerCase() === 'c!calc') {
//         if((message.author.id !== '395345841453400075') && (message.author.id !== '854739864784601159')) return;
//         const embed1 = new Discord.MessageEmbed()
//             .setTitle('I can')
//             .setColor('RED');

//         const embed2 = new Discord.MessageEmbed()
//             .setTitle('Do this')
//             .setColor('YELLOW');

//         const embed3 = new Discord.MessageEmbed()
//             .setTitle('too nigga')
//             .setColor('BLUE');

//         const embedPages = [embed1, embed2, embed3];
//         ButtonPages.createPages(client.interaction, message, embedPages, 60 * 1000, "red", "➡️", "⬅️", "❌");
//     }
});
client.on("messageDelete", (message) => {
    if (message.author.bot) return;
    let deletedimage = message.attachments.size > 0 ? message.attachments.array()[0].url : '';
    var snipes = require("./snipe.json");
    snipes[`${message.channel.id}`] = [`${message}`, `${message.author.tag}`, `${deletedimage}`];

    var fileName = './snipe.json';

    fs.writeFile(fileName, JSON.stringify(snipes, null, 3), function(error) {
        if (error) {
            return console.log(error)
        }
    });
});

const queue = new Map();

client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnect!");
});

client.on("message", async message => {
  if (message.author.bot) return;
  let prefix = config.prefix;
  if (!message.content.startsWith(prefix)) return;

  const serverQueue = queue.get(message.guild.id);

  if (message.content.startsWith(`${prefix}play`)) {
    execute(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}skip`)) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}stop`)) {
    stop(message, serverQueue);
    return;
  } else return;
});

async function execute(message, serverQueue) {
  const args = message.content.split(" ");

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "You need to be in a voice channel to play music!"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
        title: songInfo.videoDetails.title,
        url: songInfo.videoDetails.video_url,
   };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`${song.title} has been added to the queue!`);
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  if (!serverQueue)
    return message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
    
  if (!serverQueue)
    return message.channel.send("There is no song that I could stop!");
    
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send(`Start playing: **${song.title}**`);
}
//kirbyjam, it works
//Try 3 failed, unexpected identifier on async run
//Yep, gonna have to rewrite a lot
//good news is, making a starboard will actually be way easier now. I've been enlightened after listening TF2 spy theme again.
//you know what? I might be able to finish this today. 
//mainly have to figure out how to get Corsac to read reactions. Sounds simple enough.

//lmao, imagine being swage, actually clicking these links, and thinking that I'm coding here. Get cucked, I'm just commenting. My work is on a text editor.
// by the way, you should definitely learn some code lmao JS is easy as shiet
//except for when it isnt, but still
//ye could have infinite access to Borsac n be able to make ye own secret shiets
//Hell, you could make your own shiet. I would help if possible
//Testing on current Discord below.

client.login(process.env.BOT_TOKEN);
//All praise an Idiot's Guide.
