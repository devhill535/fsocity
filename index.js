require('dotenv').config();
require("events").EventEmitter.defaultMaxListeners = 200;
const GuardianClient = require('./core/client.js');
const client = new GuardianClient();

client.on("ready", () => {
 console.log(`
ONLINE
`
	    );
  let channel = client.channels.cache.get("898665579991433326");
  if (!channel) return console.error("The channel does not exist!");
  setInterval(function() {

  channel.join()
  .then(connection => console.log('🟢 | Connected'))
  .catch(console.error);
}, 30000)

  let botStatus = [
    `f.help | Server's : ${client.guilds.cache.size}`,
    `f.help | Feoxy is here `,
  ]
  
  setInterval(function() {
    let status = botStatus[Math.floor(Math.random() * botStatus.length)];
    client.user.setActivity(status, {type: "WATCHING"});
  
    }, 5000)
  });







  
  


const Discord = require('discord.js')

const { RichEmbed  } = require('discord.js')
   
    
    



const cooldown = new Set();
const cdtime = 10;

 const prefix = "f.";











client.on("message", async message => {
  if (message.content.startsWith(prefix+"help")) {
   if (!message.channel.guild)
      return message.channel.send(
         "**❌ | Sorry This Command Only For Servers **")

    
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`<a:emoji_49:861993526560161852> | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor("#3f00ff")
      .setFooter(message.author.username, message.author.AvatarURL)
     
      .setThumbnail(message.author.avatarURL())
      .setImage("https://media.discordapp.net/attachments/896739448610517104/911614892962906132/F72AF9B0-5B43-441C-B0B1-BF42F4482841.png")
      .setDescription("Here is the list of commands!\nneed more help? Come join our [guild](https://discord.gg/bexvXNbKAF)")
      .addField("**🌍 ┊Info Commands : {7}**", "`user, botlist, invite, bots, uptime, messages, vote`")
      .addField("**🔧┊Admin Commands : {11}**", "`lock, unlock, lock all, unlock all, clear, ban, kick, nick, mute, unmute, slowmode`")
      .addField("**🛡┊Security Commands : {7}**", "`settings, anti, log, stats, logs`")
      .addField("**🔗┊Links : **", `add me [here!](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)\nmy support server [join us!](https://discord.gg/bexvXNbKAF)`)

    message.channel.send(help);
  }
});
client.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "invite") {
     if (!message.channel.guild)
      return message.channel.send(
         "**❌ | Sorry This Command Only For Servers .**")

    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`⏳ | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild)
      return message.channel.send("** | Sorry This Command Only For Servers .**");
     let embed = new Discord.MessageEmbed()
       .setTitle(":link: Links")
      .addField(`:homes:`,`[ Support Server](https://discord.gg/bexvXNbKAF)` )
      
    . addField(`:envelope_with_arrow:`,`[ Invite Me](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`)
     .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL())
      
       .setFooter(`${message.author.tag}`, message.author.avatarURL())
      .setTimestamp()

        message.channel.send({ embed });
  }
});

client.on("message", message => {
  if (message.content === prefix + "bots") {
    
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`⏳ | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild)
      return message.channel.send(
       "** | Sorry This Command Only For Servers .**"
      );
    let embed = new Discord.MessageEmbed()
      
        .setTitle("Click Here To Add " + `${client.user.username}` )
         .setURL("https://discordapp.com/oauth2/authorize?client_id=" +`${client.user.id}` +"&scope=bot&permissions=2080374975")

      .setDescription(`
•••••
❯  **Servers** : ${client.guilds.cache.size}
•••••
❯  **Users** : ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}
•••••
❯  **Channels** : ${client.channels.cache.size}
•••••`
      )
      .setColor("#3f00ff")
      .setThumbnail(message.author.avatarURL())
      .setTimestamp()
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send({ embed });
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "lock")) {
    if (!message.channel.guild)
      return message.channel.send(
        "**❌ | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
     const lock = new Discord.MessageEmbed()
     
      .setColor("#3f00ff")
      .setDescription(
        `🔒 | Locked Channel
❯ **Channel Name :** <#${message.channel.id}>
❯ **Locked By :** <@${message.author.id}>
`
      )
      .setThumbnail(message.author.avatarURL())
     .setFooter(`${message.author.tag}`, message.author.avatarURL())
          .setTimestamp()

    message.channel.send(lock);
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "unlock")) {
    if (!message.channel.guild)
      return message.channel.send(
         "**❌ | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    });
    const unlock = new Discord.MessageEmbed()
      .setColor("#3f00ff")
      .setDescription(
        `🔓 | UnLocked Channel
❯ **Channel Name :** <#${message.channel.id}>
❯ **Locked By :** <@${message.author.id}>
`
      )
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(unlock);
  }
});

client.on('message', message => {
    if (message.content === '<@896377099856789544>') {
        message.channel.send('Hi There my prefix is `f.` you can use `f.help` for list of my commands');
    }
});


// ======== { • anti everyone • }======== //
client.on("message", msg => {
  if (!msg.channel.guild) return msg.channel.send("");
   if (msg.author.bot) return;
  if (msg.content.includes("@everyone")) {
    if (msg.member.hasPermission("MANAGE_MESSAGES")) return;
    msg.delete();
    const here = new Discord.MessageEmbed()
      .setColor("#3f00ff")
      .setDescription(
        `❌ | **Deleted Message**
 ❯ **Channel Name** : <#${msg.channel.id}>
 ❯ **Message By** : <@${msg.author.id}>
 ❯ **Reason** : Send Everyone : ❌
 `
      )
      .setThumbnail(msg.author.avatarURL())
      .setTimestamp()
      .setFooter(`${msg.author.tag}`, msg.author.avatarURL())
      .setTimestamp();

    msg.channel.send(here).then(m => {
          m.delete({ timeout: cdtime * 600 })
    });
  }
});
// ======== { • anti everyone • }======== //
// ======== { • anti here • }======== //
client.on("message", msg => {
  if (!msg.channel.guild) return msg.channel.send("");
   if (msg.author.bot) return;
  if (msg.content.includes("@here")) {
    if (msg.member.hasPermission("MANAGE_MESSAGES")) return;
    msg.delete();
    const here = new Discord.MessageEmbed()
      .setColor("#3f00ff")
      .setDescription(
        `❌ | **Deleted Message**
❯ **Channel Name** : <#${msg.channel.id}>
❯ **Message By** : <@${msg.author.id}>
❯ **Reason** : Send Here : ❌
 `
     )
      .setThumbnail(msg.author.avatarURL())
      .setTimestamp()
      .setFooter(`${msg.author.tag}`, msg.author.avatarURL())
      .setTimestamp();

    msg.channel.send(here).then(m => {
          m.delete({ timeout: cdtime * 600 })
    });
  }
});
// ======== { • anti here • }======== //
client.on("message", message => {
  if (message.content.startsWith(prefix + "nick")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check Your Permission.");
    if (!message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check My Permission.");
    let user = message.mentions.users.first();

    if (!user)
      return message.channel.send(`**${prefix}nick @mention nickname**`);
    let args = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args)
      message.guild
        .member(user)
        .setNickname("")
        .then(m => {
          message.channel.send(
            " " + user.username + " has been reseted nickname "
          );
        })
        .catch(error => {
          message.channel.send("Error: **" + error.message + "**");
        });
    message.guild
      .member(user)
      .setNickname(args)
      .then(m => {
        let embed = new Discord.MessageEmbed()
          .setTitle("Nicknamed User!")
          .setColor("#3f00ff")
          .setThumbnail(message.author.avatarURL)
           .setFooter(message.author.username,  `https://cdn.discordapp.com/emojis/771689685579333673.gif?v=1`
)
          .setTimestamp()

          .setDescription(
            "❯ **User**: ```" +
              user.username +
              "```\n❯ **By**: ```" +
              message.author.username +
              "```\n**❯ Nickname**: ```" +
              args +
              "``` "
          );
        message.channel.send(embed);
      })
      .catch(error => {
        message.channel.send("Error: **" + error.message + "** ");
      });
  }
  if (message.content.toLowerCase() === prefix + "help nick") {
    let nick = new Discord.MessageEmbed()
      .setTitle(`Command: nick`)
      .addField("Usage", `${prefix}nick @user nickname`)
      .addField("Information", "Nicknames");
    message.channel.send(nick);
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "slowmode")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("🧐 - Please Check Your Permission");
    if (
      !message.guild
        .member(message.client.user)
        .hasPermission("MANAGE_CHANNELS")
    )
      return message.channel.send(
        "🧐 - Please Check My Permission to can edit in this channel."
      );

    let time = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (isNaN(time)) return message.channel.send("**🧐 - Its not a time**");
    if (!time)
      return message.channel.send("**🧐 - Please Type a New SlowMode**");
    message.channel.setRateLimitPerUser(time);
    message.channel.send("**Done Changed A SlowMode To: " + time + "**");
  }
});

client.on("message", message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  let args = message.content.split(" ");
  let command = args[0].toLowerCase();
  if (command === prefix + "clear") {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ You are missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ I Am missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!args[1]) {
      message.channel
        .bulkDelete(100)
        .then(m =>
          message.channel
            .send(`\`\`\`\nDeleted ${m.size} messages\n\`\`\``)
            .then(p => p.delete({ timeout: 3000 }))
        );
    } else {
      message.delete().then(n => {
        message.channel
          .bulkDelete(args[1])
          .then(m =>
            message.channel
              .send(`\`\`\`\nDeleted ${m.size} messages\n\`\`\``)
              .then(p => p.delete({ timeout: 3000 }))
          );
      });
    }
  }
});
client.on("message", prof => {
  if (prof.content.startsWith(prefix + "user")) {
   
    var professor = new Discord.MessageEmbed()
      .setAuthor(client.user.username)
      .setThumbnail(client.user.avatarURL())
      .setColor("#0c0b0b")
      .setTitle("Your Info User")
      .addField(" **❯ Your Name**", `<@${prof.author.id}>`)
      .addField(" **❯ Your ID**", `${prof.author.id}`)
      .addField(" **❯ Create User**", prof.author.createdAt.toLocaleString())
      .setFooter(`Requested | ${prof.author.tag}`, prof.author.avatarURL())
      .setTimestamp();
    prof.channel.send(professor);
  }
});
client.on("message", async message => {
  let args = message.content.split(" ");
  let user =
    message.mentions.users.first() || message.guild.members.cache.get(args[1]);
  if (message.content.startsWith(prefix + "mute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user)
      return message.channel.send(`**${prefix}mute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "#3f00ff",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    message.channel.send(`**❌ ${user.username} has been muted!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help mute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("❯ **Usage**", `${prefix}mute @user`)
      .addField("❯ **Information**", "Mute Members");
    message.channel.send(mute);
  }
});

//////////unmute

client.on("message", async message => {
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  if (message.content.startsWith(prefix + "unmute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user)
      return message.channel.send(`**${prefix}unmute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.remove(mute);
    message.channel.send(`**✅ removed mute from ${user.username}!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help unmute`) {
    let unmute = new Discord.MessageEmbed()
      .setTitle(`Command: unmute `)
      .addField("❯ **Usage**", `${prefix}unmute @user`)
      .addField("❯ **Information**", "unmute Members");
    message.channel.send(unmute);
  }
});
client.on("message", async message => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.startsWith(prefix)
  )
    return;
  const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/),
    commandName = args.shift().toLowerCase();
  if (["ban", "kick"].includes(commandName)) {
    let mode = commandName;
    if (
      !message.member.hasPermission(
        mode == "kick" ? "KICK_MEMBERS" : "BAN_MEMBERS"
      )
    )
      return message.channel.send(
        "**❌ | You don't have Permissions do to this.**"
      );
    let user = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.cache.find(x => x.id == args[0])
    );
    if (!user) return message.channel.send("**❌ | Member not found!**");
    let bot = message.guild.member(client.user);
    if (user.user.id == client.user.id) return message.channel.send("lol no");
    if (user.user.id == message.guild.owner.id)
      return message.channel.send(`**❌ | You can't ${mode} the owner!**`);
    if (
      user.roles.highest.position >= message.member.roles.highest.position &&
      message.author.id !== message.guild.ownerID
    )
      return message.channel.send(
        `**❌ | You can't ${mode} people higher ranked than yourself!**`
      );
    if (user.roles.highest.position >= bot.roles.highest.position)
      return message.channel.send(
        `**❌ | I can't ${mode} people who are higher ranked than me!**`
      );
    if (!user[`${mode == "ban" ? "bann" : mode}able`])
      return message.channel.send(
        `**❌ | Specified user is not ${mode}able.**`
      );
    user[mode](
      mode == "ban"
        ? { days: 7, reason: `Banned by ${message.author.tag}` }
        : `Kicked by ${message.author.tag}`
    )
      .then(() =>
        message.channel.send(`
           Moderator: <@${message.author.id}>
** ${mode == "ban" ? "Bann" : mode}ed ${user.user.tag}**`
        )
      )
      .catch(console.error);
  }
});


client.on("guildCreate", guild => {
   let channel = client.channels.cache.get("896740177140125716");
  const embed = new Discord.MessageEmbed()
    .setColor("#3f00ff")
    .setTitle(`Joined!`)
    .setDescription(`
 **Name server: ${guild.name} **
**Server Owner: ${guild.owner}**
**ID Server: ${guild.id} **
**member count ${guild.memberCount}**
**Created at: ${guild.createdAt}**
**Verification Level: ${guild.verificationLevel}**
**thanks for invite bot  🤖 **
    `);
channel.send(embed);

});
client.on("guildDelete", guild => {
  let channel = client.channels.cache.get("896740177140125716");
  const embed = new Discord.MessageEmbed()
    .setColor("#3f00ff")
    .setTitle(`Kicked!`)
    .setDescription(`
**Name server: ${guild.name}**
**Server Owner: ${guild.owner}**
**ID Server: ${guild.id}**
**member count: ${guild.memberCount}**
**Created at : ${guild.createdAt}**
**Verification Level: ${guild.verificationLevel}**
   ` );
 channel.send(embed);
});


client.on("message", message => {
  if (message.content.startsWith(prefix + "botlist")) {
    var list_all = [];
    message.guild.members.cache.forEach(client => {
      if (!client.user.bot) return;
      list_all.push(`<@${client.user.id}>`);
    });
    message.channel.send(list_all.join(", "));
  }
});
client.on("message", msg => {
  if (msg.content === prefix + "lock all") {
    if (!msg.member.hasPermission("ADMINISTRATOR"))  return;
    msg.guild.channels.cache.forEach(c => {
      c.updateOverwrite(msg.guild.id, {
        SEND_MESSAGES: false,
      
      });
    });
    msg.channel.send("🔒 | All Channels Locked");
  }
});
 
client.on("message", msg => {
  if (msg.content === prefix + "unlock all") {
    if (!msg.member.hasPermission("ADMINISTRATOR"))  return;
    msg.guild.channels.cache.forEach(c => {
      c.updateOverwrite(msg.guild.id, {
        SEND_MESSAGES: true,
      
      });
    });
    msg.channel.send("🔓 | All Channels Unlocked");
  }
});


client.on('message',async message => {
  if(message.content.startsWith(prefix + "uptime")) { 
    let rozh= Math.floor(client.uptime / 86400000);
    let katzhmer= Math.floor(client.uptime / 3600000) % 24;
    let daqa= Math.floor(client.uptime / 60000) % 60;
    let chrka= Math.floor(client.uptime / 1000) % 60;
    
    return message.channel.send(`__Uptime:__\n${rozh}d ${katzhmer}h ${daqa}m ${chrka}s`);
  }
  
})


client.on("message", message => {
  if (message.content.startsWith(prefix + "messages")) {
    let args = message.content.split(" ").slice(1);
    if (!message.member.hasPermission("OWNERSHIP"))
      return message.reply("you dont have a Permission");

    var user = message.mentions.users.first();
    var rn = args.slice(1).join(" ");
    let em = new Discord.MessageEmbed()
      .setTitle("Error :")
      .setColor("#3f00ff")
      .setDescription(
        `
  **Usage:**
 ${prefix}messages (user) (reason)
  ${prefix}messages ${message.author} 
  ${prefix}messages ${message.author}  test
 
  `
      )
      .setAuthor(message.author.username, message.author.avatarURL());
    if (!user) return message.channel.send(em);

    let ffg = new Discord.MessageEmbed()
      .setColor("#3f00ff")
      .setTimestamp()
      .setTitle("Warned!")
      .setDescription(
        `


 ❯ **warned by  :** ${message.author.username}
 ❯ **reason     :** ${rn}


  `
      )
      .setAuthor(message.author.username, message.author.avatarURL())
      .setFooter(``);
    message.channel.send(ffg);
    user.send(ffg);
    message.delete();
  }
});




client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(JxA => {
          message.guild.unban(JxA);
        });
      });
      return message.channel.send(
        "** Unban all members **"
      );
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(
          `**<:emoji_5:852675815976337418> Unban this member ${m.username}**`
        );
      })
      .catch(stry => {
        message.channel.send(
          `**I can't find that person \`${args}\` in ban list**`
        );
      });
  }
});




client.on("message", message => {
  if (message.content === prefix + "vote") {
    
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`⏳ | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild)
      return message.channel.send(
       "** | Sorry This Command Only For Servers .**"
      );
    let embed = new Discord.MessageEmbed()
      
        .setTitle("Click Here To Join Support Server " + `${client.user.username}` )
         .setURL("https://discord.gg/bexvXNbKAF")

      .setDescription(`
•••••
❯  **dblstatistics** ;   [dblstatistics](https://dblstatistics.com/bot/${client.user.id})
•••••
❯  **Top.gg** : [vote](https://top.gg/bot/${client.user.id}/vote)
•••••
❯  **discordbotlist.com** : [vote](https://discordbotlist.com)
•••••`
      )
      .setColor("#3f00ff")
      .setThumbnail(message.author.avatarURL())
      .setTimestamp()
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send({ embed });
  }
});




client.login("ODk2Mzc3MDk5ODU2Nzg5NTQ0.YWGOOg.jAcgL19HWan7W4372FCKib9dQE0");
