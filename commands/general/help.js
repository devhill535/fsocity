const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
  name: "h1",
  category: "help",
  description: "The help command, what do you expect?",

  run: async (client, message, args) => {


    //Sort your commands into categories, and make seperate embeds for each category

    
    const moderation = new Discord.MessageEmbed()
      .setTitle('<a:settings:856623683572989952>** | MODERATOR**')
      .addField('**tts**', 'no provide  was found')
      .addField('**baddthis**', 'for adding emoji for server Ex:- %addthis <a:discord:858372199127056434>')
      .addField('**ban**', 'Bans a member from your server via mention or ID')
      .addField('**purge**', 'Purges messages')
      .addField('**say**', 'to make bot say something with embed')
      .addField('**bug**', 'Please specify the bug. Example:\n`punch isnt working. It isnt mentioning the user Im trying to punch`')
      .addField('**kick**', 'kick a member from your server via mention or ID')
      .addField('**lock**', 'lock the channel')
      .addField('**unlock**', 'unlock the channel')
      .addField('**unmute**', 'unmute the user from text')
      .addField('**removerole**', ' remove user role')
      .addField('**restwarns**', 'rest all user warns')
      .addField('**nick**', 'changing user nickname')
      .addField('**slowmode**', 'for changing channel slowmode')
      .addField('**vkick**', 'kick user in voice channel')
      .addField('**warn**', 'warn ths user ')
      .addField('**warnings**', ' watching all user warnings')
      .setTimestamp()
      .setColor("00FFFF")
    const fun = new Discord.MessageEmbed()
      .setTitle('<:7a7a7a:855549263487959041>** | FUN**')
      .addField('**meme**', 'Generates a random meme')
      .addField('**ascii**', 'Converts text into ascii')
      .addField('**cat**', 'Generates a random Cat')
      .addField('**dog**', 'Generates a random Dog')
      .addField('**fact**', 'sends a cool factsends a cool factsends a cool fact')
      .addField('**hack**', 'fun hacking user')
      .addField('**kiss**', 'Kiss someone')
      .addField('**punch**', 'punch someone')
      .addField('**avatar**', 'show member avatar!')
      .addField('<a:AS200IQ:858370521451724860>** | A&Q**', '**aki**')
      .setTimestamp()
      .setColor('#0099ff')
    const sugg = new Discord.MessageEmbed()
      .setTitle('<:emoji_82:857780014455717889>** | SUGGESTION**')
      .addField('**sreply**', 'To replay a suggestion')
      .addField('**setsuggest**', 'set suggestion channel')
      .addField('**suggest**', 'To give a suggest for something')
      .setTimestamp()
      .setColor('#0099ff')
      const giveway = new Discord.MessageEmbed()
        .setTitle('<a:kililili:858371226207649803>** | GIVEAWAY**')
        .addField('**giveway**', 'Giveaway command')
        .setTimestamp()
        .setColor('#0099ff')
      const info = new Discord.MessageEmbed()
      .setTitle('<a:Twinkle:858371225545474058>** | INFO**')
      .addField('**Botinfo**', 'Get information about bot')
      .addField('**serverinfo**', 'get information about server')
      .addField('**uptime**', 'Get the bot\'s uptime')
      .addField('**inv**', 'Get invite link of bot')
      .addField('**bedges**', 'no information provide')
      .addField('**embed**', 'Generates embed')
      .addField('**imdb**', 'show about movie Ex:- %imdb lucifer')
      .addField('**servericon**', 'Get server icon')
      .addField('**userinfo**', 'Get user information')
      .setTimestamp()
      .setColor('#0099ff')
      const image = new Discord.MessageEmbed()
        .setTitle('<:emoji_83:857780037448368179>** | IMAGE**')
        .addField('**jail**', 'for jail someone')
        .addField('**speed**', 'i am speed')
        .addField('**stonks**', 'no information provide')
        .addField('**wasted**', 'no information provide')
        .addField('**achievement**', 'Gives you an achievment Ex:- %achievement hi')
        .addField('**changemymind**', 'for change my mind')
        .addField('**gay**', 'Return A Gay Image!')
        .addField('**meeting**', 'Generates a among us meeting')
        .addField('**pat**', 'Generates a pat pic')
        .addField('**rip**', 'Generates rip pic')
        .addField('**shame**', 'Generates shame pic')
        .addField('**smartcat**', 'Generates smat cat pic')
        .addField('**slap**', 'Generates slap pic when you slap someone')
        .setTimestamp()
        .setColor('#0099ff')
        /*const giveway = new Discord.MessageEmbed()
          .setTitle('<a:kililili:858371226207649803>** | GIVEAWAY**')
          .addField('giveway', 'Giveaway command')
          .setTimestamp()
          .setColor('#0099ff') */
    const pages = [
                moderation,
                fun,
                image,
                sugg,
                info
        ]

    const emojiList = ["⏪", "⏩"];

    const timeout = '120000';

    pagination(message, pages, emojiList, timeout)
  }
}
