const db = require('quick.db')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
if (!args[0]) return message.channel.send('** Merhaba Reklam Engel Açmak İçin `' + ayarlar.prefix +'reklam-engel aç/kapat` Yazabilirsin.**')
if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Bu Komutu Kullanabilmek İçin `Sunucuyu Yönet` Yetkisine Sahip Olman Gerek.**')

if (args[0] == 'aç') {
db.set(`Reklam_${message.guild.id}`, 'Açık')
message.channel.send('Reklam Filtresi **Başarıyla** Açıldı. `Yönetici` Yetkisi Olanları Engellemez.')
}
  
if (args[0] == 'kapat') {
db.set(`Reklam_${message.guild.id}`, 'Kapalı')
message.channel.send('Reklam Filtresi Başarıyla Kapatıldı!')
}

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['reklam','reklamengel','reklam-engel'],
  permLevel: 0
}

exports.help = {
  name: 'Reklam Engel',
  description: 'Reklam Engel AÇ/Kapat',
  usage: 'reklam'
}