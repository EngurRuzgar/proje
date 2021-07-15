const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
if (!args[0]) {
const embed = new Discord.RichEmbed()
.setColor('RED')
.setTitle('Hatalı Kullanım')
.setDescription("**Doğru Kullanım; "+ ayarlar.prefix +"rol-koruma aç & kapat**")
message.channel.send(embed)}
let RolKoruması = await db.fetch(`RolKoruma_${message.guild.id}`)
if (args[0] == 'aç') {
if (RolKoruması) {
const Revenge = new Discord.RichEmbed()
.setColor('RED')
.setTitle('Hata')
.setDescription('**Rol Koruma Zaten Aktif!**')
message.channel.send(Revenge)
} else {
db.set(`RolKoruma_${message.guild.id}`, 'Aktif')
const Nuccettere = new Discord.RichEmbed()
.setColor('GREEN')
.setDescription('**Rol Koruması Başarıyla Aktif Edildi**')
message.channel.send(Nuccettere)}
} else 
if (args[0] == 'kapat') {
db.delete(`RolKoruma_${message.guild.id}`)
const RevengeNYKS = new Discord.RichEmbed()
.setColor('RED')
.setDescription('**Rol Koruma Sistemi Kapatıldı !**')
message.channel.send(RevengeNYKS)
}}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rol-koruma'],
  permLevel: 3
}

exports.help = {
  name: 'Rol Koruması',
  description: 'Rol Korumayı Aktif Eder',
  usage: "rol-koruma"
}