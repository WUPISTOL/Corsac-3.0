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
    client.user.setActivity(`Dark Souls 3`);
});
process.on("unhandledRejection", console.error);

client.on("messageReactionAdd", async (reaction, user) => {
    let rMessage = reaction.message
    console.log("____________________");
    console.log('Message reaction detected.')
    console.log("____________________");
    console.log(`Message: ${rMessage.content}`);
    console.log(`Emoji: ${reaction.emoji.name}`);
    console.log(`Reaction recipient: ${rMessage.author.username}`)
    console.log(`Reaction sender: ${user.username}`);
    console.log("____________________");
        if (reaction.emoji.name !== "⭐") return console.log('wrong emoji name.EAFJIEOJG');
            let starredMessage = rMessage.guild.id;
            let starChannel = rMessage.guild.channels.find(ch => ch.name === 'starboard');
            if (!starChannel) return console.log("Star detected, but no starboard channel found.");
            console.log("Star detected, starChannel found. Counting star awards...");
            console.log(`Total number of awards given: ${reaction.count}`)
    console.log("____________________");
            if(reaction.count !== 1) return;
            let starredimage = rMessage.attachments.size > 0 ? rMessage.attachments.array()[0].url : '';
            if (starredimage === '' && rMessage.cleanContent.length < 1) return rMessage.channel.send('Did I just catch you trying to star an empty message? We don\'t do that here. Who do you take me for, a vitamin D deficient rodeo clown? You think you can trick me? I\'ll have you kno-');
            let embed = new Discord.RichEmbed()
                .setColor('#FF00FF')
                .setDescription(rMessage.cleanContent)
                .setAuthor(rMessage.author.tag, rMessage.author.displayAvatarURL)
                .setTimestamp(new Date())
                .setFooter(`⭐ | ${rMessage.id}`)
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
