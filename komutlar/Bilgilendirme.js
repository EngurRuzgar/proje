const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
if (message.author.id !== message.guild.owner.id) return message.channel.send(`Bunu Sadece <@${message.guild.owner.id}> Yapabilir.`)
if (!args[0]) return message.channel.send('Açacak Mısın Kapatacak Mısın ? Açmak İçin `aç` Kapatmak İçin `kapat` Yaz.')

if (args[0] == 'aç') {
db.set(`Bilgilendirme_${message.guild.id}`, 'Açık')
message.channel.send('✅ **Artık Seni Bilgilendireceğim.**')
}
  
if (args[0] == 'kapat') {
db.set(`Bilgilendirme_${message.guild.id}`,'Kapalı')
message.channel.send('✅ **Artık Seni Bilgilendirmeyeceğim!**')
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bilgilendirme'],
  permLevel: 0
}

exports.help = {
  name: 'Bilgilendirme',
  description: 'Bilgilendirmeyi Ayarlar',
  usage: 'bilgilendirme'
}