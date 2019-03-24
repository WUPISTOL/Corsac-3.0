const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  console.log(`Corsac has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    client.user.setActivity("over the Echo", {type: 3});
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on("guildDelete", guild => {
  console.log(`Corsac has been removed from: ${guild.name} (id: ${guild.id}) at ${new Date()}`);
});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome-leave');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed ()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | name : ', `${member}`)
        .addField(':microphone2: | Welcome!', `Welcome to the server, ${member}`)
        .addField(':id: | User :', "**[" + `${member.id}` + "]**")
        .addField('You are member #', `${member.guild.memberCount}`)
        .addField('Server', `${member.guild.name}`, true )
        .setFooter(`**__${member.guild.name}__**`)
        .setTimestamp()
        
        channel.sendEmbed(embed);
});

client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'welcome-leave');
    let memberavatar = member.user.avatarURL
        if (!channel) return
        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(memberavatar)
            .addField('Oh no!', `${member}`)
            .addField('Has been yeeted out the airlock', ';(')
            .addField('See ya', ':wave:')
            .addField('The server now has', `${member.guild.memberCount}` + " members")
            .setFooter(`${member.guild.name}`)
            .setTimestamp()
    
    channel.sendEmbed(embed)
});


client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

    if(!command) return message.channel.send("Please use an actual command.")
    
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! The latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms.`);
  }
  
  if(command === "say") {
    if(!message.member.roles.some(r=>["Commanding Officer"].includes(r.name)) )
      return message.reply("I'm not saying that.");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
  
  if(command === "kick") {
    if(!message.member.roles.some(r=>["HIGH COMMAND", "Commanding Officer"].includes(r.name)) )
      return message.reply("Nice try.");
 
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Kick who?");
    if(!member.kickable) 
      return message.reply("Negative.");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided.";
    
    await member.kick(reason)
      .catch(error => message.reply(`${message.author}, I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been yeeted out the airlock by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "ban") {
 
    if(!message.member.roles.some(r=>["HIGH COMMAND"].includes(r.name)) )
      return message.reply("Nice try.");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("excuse me, ban who?");
    if(!member.bannable) 
      return message.reply("I can't ban this user.");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided.";
    
    await member.ban(reason)
      .catch(error => message.reply(`${message.author}, I couldn't ban because of : ${error}`));
    message.reply(`${message.author.tag} summoned ***PROHIBITION HAMMER*** and banned ${member.user.tag} because: ${reason}`);
  }
  
if(command === "purge") {

    if(!message.member.roles.some(r=>["HIGH COMMAND", "LVL 35 MAFIA BOSS"].includes(r.name)) )
        return message.reply("Nice try.");
       
        const numvar = parseInt(args[0], 10);
    
    if(!numvar || numvar < 2 || numvar > 100)
        return message.reply("Please choose a number between 2 and 100 to purge.");
    
        const fetched = await message.channel.fetchMessages({limit: numvar});
        message.channel.bulkDelete(fetched)
        .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
if(command === "roll") {
    const numvar = parseInt(args[0], 10);
    if(!numvar || numvar < 6 || numvar > 100)
    return message.reply("Please choose a number between 6 and 100 to roll.");
    message.reply(":game_die: You rolled a " + Math.floor((Math.random() * numvar) + 1) + " :game_die:")
        .catch(error => message.reply(`Couldn't roll die because of: ${error}`));
  }
if(command === "avatar") {
      let embed = new Discord.RichEmbed()
    .setImage(message.author.avatarURL)
    .setColor('#275BF1')
      message.channel.send(embed)
}
    if(command === "dm"){
  dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if (!dUser) return message.channel.send("Can't find user!")
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No.")
let dMessage = args.join(" ").slice(22);
if(dMessage.length < 1) return message.reply('You must supply a message!')

dUser.send(`${dUser} A member from ${dUser.guild.name} sent you a message: ${dMessage}`)

message.author.send(`${message.author} You have sent your message to ${dUser}`)

}
  if(command === "watch"){
    if(!message.member.roles.some(r=>["Commanding Officer", "HIGH COMMAND"].includes(r.name)) )
    const sayMessage = args.join(" ");
    client.user.setActivity(sayMessage, {type: 3});
}
});

client.login(process.env.BOT_TOKEN);
