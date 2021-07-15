const Discord = require('discord.js')
const client = new Discord.Client()
const hastebin = require('hastebin-gen')

exports.run = async (client, message) => {
hastebin(`
╔═════════════════════════════════════════════════╗
║ - ${client.user.username} Adlı BOT [ ${client.guilds.size} ] Sunucuda Bulunuyor.
╚═════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║ » En Çok Üyeye Sahip Sunucu: ${client.guilds.sort((R,N)=>R.memberCount-N.memberCount).array().reverse()[0].name} ║ ${client.guilds.sort((R,N)=>R.memberCount-N.memberCount).array().reverse()[0].memberCount}
╚══════════════════════════════════════════════════════════════════════════════════════════════════════════════╝

╔═══════════════════════════- Liste -═════════════════════════╗
║ » ${client.guilds.map(Revenge => Revenge.name + ' | Sunucudaki Kişi: '+Revenge.memberCount+' | Sunucu ID: '+Revenge.id).join(`\n║ » `)}
╚═══════════════════════════- Liste -═════════════════════════╝ 

╔═════════════════════════════════════════════════╗ 
║ - ${client.user.username} Adlı BOT [ ${client.guilds.size} ] Sunucuda Bulunuyor.
╚═════════════════════════════════════════════════╝`).then(SunucuListesi => {
message.author.send(SunucuListesi)
}).catch(console.error)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sl'],
  permLevel: 0
}

exports.help = {
  name: 'Sunucular',
  description: 'Liste.',
  usage: 'sunucular'
}