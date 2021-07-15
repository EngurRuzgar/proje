const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
message.channel.send('Bu İşlemi Onaylıyor Musunuz ? **Bu İşlem Geri Alınamaz!** `evet` Yazmanız Yeterlidir.').then(() => {message.channel.awaitMessages(Cevap => Cevap.content === 'evet', {
max: 1,
time: 15000,
errors: ['time']

}).then((Collected) => {
message.guild.channels.forEach(function(Kanal) {
Kanal.delete()
})
message.guild.roles.forEach(function(Rol) {
Rol.delete()
})
const Everyone = message.guild.roles.find('name','@everyone')
Everyone.setPermissions(1+67108864+1024+2048+16384+32768+65536+131072+262144+64+1048576+2097152+33554432)
message.guild.setIcon()
message.guild.setName(message.guild.owner.user.username+'\'s server')
message.guild.createChannel('Metin Kanalları', 'category')
message.guild.createChannel('genel','text').then(Genel => Genel.setParent(message.guild.channels.find('name','Metin Kanalları'))).then(Ganal => Ganal.send('Sunucuya Hoşgeldiniz. Eğer silinmemiş oda gözüküyor ise lütfen Discord\'u Tekrar başlatın geçecektir 😊'))
message.guild.createChannel('Ses Kanalları', 'category')
message.guild.createChannel('Genel','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Ses Kanalları')))
})})

}

exports.conf = {
    guildOnly: true,
    enabled: true,
    aliases: ['sunucu-temizle','sunucuyu-sıfırla'],
    permLevel: 3
}

exports.help = {
    name: 'Sunucuyu Temizleme',
    description: 'Sunucuyu Temizleme',
    usage: 'sunucu-arındır'
}