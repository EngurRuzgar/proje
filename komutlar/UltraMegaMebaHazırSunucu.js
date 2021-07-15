const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
message.channel.send('Bu İşlemi Onaylıyor Musunuz ? **Bu İşlem Geri Alınamaz!** `evet` Yazmanız Yeterlidir.').then(() => {
message.channel.awaitMessages(Cevap => Cevap.content === 'evet', {
max: 1,
time: 15000,
errors: ['time']

}).then((Collected) => {
message.guild.channels.forEach(function(Kanal) {
Kanal.delete()
})
const Everyone = message.guild.roles.find('name','@everyone')
const RevengeNYKS = message.guild.members.get(message.guild.owner.id)
const Kayıt = new Discord.RichEmbed()
    .setColor('GREEN')
    .setAuthor(RevengeNYKS.user.username,RevengeNYKS.user.avatarURL)
    .setThumbnail(RevengeNYKS.user.avatarURL)
    .setDescription('Kayıt Kanalları Ayarlandı! Kayıt Sistemini Kurmak İçin MolarkaUP Botumuzu Getirebilirsin.😊')
    .setFooter(client.user.username,client.user.avatarURL)
const Kurallar = new Discord.RichEmbed()
    .setColor('GREEN')
    .setAuthor(message.guild.name,message.guild.iconURL)
    .setDescription(`**Kurallar**

♦️ **1.Küfür, Argo, Tehdit Edici, Aşağılayıcı, Alaycı, Siyasal, Din, Dil, Irk Ve Mezhepler İle İlgili Kelimeler/Videolar/Fotoğraflar/Gifler/Dosyalar/Siteler Kesinlikle Yasaktır. **

♦️ **2.Küfürlü, Argolu, Aşağılayıcı, Alaycı Ve Pornografik Profil Fotoğrafı Ve Nickler Kesinlikle Yasaktır. **

♦️ **3.Her Türlü Reklam Kesinlikle Yasaktır.**
 
♦️ **4.Sunucudaki Odaları Gereği Dışında Kullanmak Yasaktır**

♦️ **5.Kavga, Tartışma Gibi Olaylar Yasaktır ve Bu Olayları Yapan Her Kimselere Cezalar Uygulanır.**

♦️ **6.Bir Metin Kanalında Kelimelerin Tamamını Büyük Harflerle Yazmak Yasaktır.**

♦️ **7.Özelden İnsanları Rahatsız Etmek (Discord Linkleri vb.) Yasaktır.**

♦️ **8.Sesli Kanallarda İnsanları İahatsız Etmek (Mikrofana Üflemek vb.) Yasaktır. **

♦️ **9.Başkasına Ait Kişisel Bilgiler Yayınlamak (Telefon Numarası, E-Posta Adresi vb.) Yasaktır.**

♦️ **10.Oyun Odalarını Gereksiz İşgal Etmek Yasaktır.**   

*Sunucuya Giren Herkes Bu Kuralları Okumuş Sayılır.* ||@everyone||   

♦️ **CEZA SİSTEMİ**

♦️ **3 Uyarı Aldığınızda Aldığınız Uyarılara Göre Cezalandırılırsınız.(Ban,kick,mute vb.)(1,3,7 ve 9. Numaralı Kuralların İhlalinde Uyarılmadan Direk Ban Yersiniz.)**

♦️ **Cezaların Yumuşatılması Yetkilinin İnsiyatifine Bağlıdır.** 

♦️ **Burda Yaşanan Herhangi Bir Olayda Sorumlu Sunucu ve Sunucu Sahipleri Görülemez.**

*Sunucuya Giren Herkes Bu Ceza Sistemini Okumuş ve Onaylamış Sayılır.*  ||@everyone||

**Ek Not: Kurallar ve Ceza Sistemi <@675593025468235806> ve <@389424330846502913> Tarafından Ayarlanmıştır. **`)
.setFooter(client.user.username,client.user.avatarURL)
const Boosterlar = new Discord.RichEmbed()
    .setColor('GREEN')
    .setAuthor(message.guild.name,message.guild.iconURL)
    .setThumbnail(message.guild.iconURL)
    .setDescription('Boost Basarak Bu Ayrıcalıklara Sahip Olabilirsiniz.')
    .setImage('https://cdn.discordapp.com/attachments/688636018328600626/717043059371802648/nit.gif')
    .setFooter(client.user.username,client.user.avatarURL)
const Atatürk = new Discord.RichEmbed()
    .setColor('GREEN')
    .setAuthor('Atatürkü Saygı İle Anıyoruz','https://cdn.discordapp.com/attachments/688636018328600626/717060565339602954/Ataturkum.jpg')
    .setImage('https://cdn.discordapp.com/attachments/696668562617794640/696703003930918952/tumblr_phy1vgcp9h1wo66ab_640.gif')
    .setFooter(client.user.username,client.user.avatarURL)
message.guild.createChannel('Kayıt', 'category')
message.guild.createChannel('Kayıt Chat','text').then(Genel => Genel.setParent(message.guild.channels.find('name','Kayıt'))).then(Ganal => Ganal.send(Kayıt))
message.guild.createChannel('Kayıt 1','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Kayıt')))
message.guild.createChannel('Kayıt 2','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Kayıt')))
message.guild.createChannel('Kayıt 3','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Kayıt')))
message.guild.createChannel('Bilgi', 'category')
message.guild.createChannel('1881-193∞','text').then(Ganal => Ganal.send(Atatürk)).then(Yetkiler => {
    Yetkiler.overwritePermissions(Everyone, {
    CREATE_INSTANT_INVITE: true,
    MANAGE_CHANNELS : false,
    MANAGE_ROLES : false,
    MANAGE_WEBHOOKS : false,
    VIEW_CHANNEL : true,
    SEND_MESSAGES : false,
    SEND_TTS_MESSAGES : false,
    MANAGE_MESSAGES : false,
    EMBED_LINKS : false,
    ATTACH_FILES : false,
    READ_MESSAGE_HISTORY : true,
    MENTION_EVERYONE : false,
    USE_EXTERNAL_EMOJIS : false,
    ADD_REACTIONS : false
    })
    Yetkiler.setParent(message.guild.channel.find('name','Bilgi'))
    })
message.guild.createChannel('Kurallar','text').then(Ganal => Ganal.send(Kurallar)).then(Yetkiler => {
    Yetkiler.overwritePermissions(Everyone, {
    CREATE_INSTANT_INVITE: true,
    MANAGE_CHANNELS : false,
    MANAGE_ROLES : false,
    MANAGE_WEBHOOKS : false,
    VIEW_CHANNEL : true,
    SEND_MESSAGES : false,
    SEND_TTS_MESSAGES : false,
    MANAGE_MESSAGES : false,
    EMBED_LINKS : false,
    ATTACH_FILES : false,
    READ_MESSAGE_HISTORY : true,
    MENTION_EVERYONE : false,
    USE_EXTERNAL_EMOJIS : false,
    ADD_REACTIONS : false
    })
    Yetkiler.setParent(message.guild.channel.find('name','Bilgi'))
    })
message.guild.createChannel('Duyurular','text').then(Yetkiler => {
    Yetkiler.overwritePermissions(Everyone, {
    CREATE_INSTANT_INVITE: true,
    MANAGE_CHANNELS : false,
    MANAGE_ROLES : false,
    MANAGE_WEBHOOKS : false,
    VIEW_CHANNEL : true,
    SEND_MESSAGES : false,
    SEND_TTS_MESSAGES : false,
    MANAGE_MESSAGES : false,
    EMBED_LINKS : false,
    ATTACH_FILES : false,
    READ_MESSAGE_HISTORY : true,
    MENTION_EVERYONE : false,
    USE_EXTERNAL_EMOJIS : false,
    ADD_REACTIONS : false
    })
    Yetkiler.setParent(message.guild.channel.find('name','Bilgi'))
    })
message.guild.createChannel('Boost Ayrıcalıkları','text').then(Ganal => Ganal.send(Boosterlar)).then(Yetkiler => {
    Yetkiler.overwritePermissions(Everyone, {
    CREATE_INSTANT_INVITE: true,
    MANAGE_CHANNELS : false,
    MANAGE_ROLES : false,
    MANAGE_WEBHOOKS : false,
    VIEW_CHANNEL : true,
    SEND_MESSAGES : false,
    SEND_TTS_MESSAGES : false,
    MANAGE_MESSAGES : false,
    EMBED_LINKS : false,
    ATTACH_FILES : false,
    READ_MESSAGE_HISTORY : true,
    MENTION_EVERYONE : false,
    USE_EXTERNAL_EMOJIS : false,
    ADD_REACTIONS : false
    })
    Yetkiler.setParent(message.guild.channel.find('name','Bilgi'))
    })
message.guild.createChannel('Yazı', 'category')
message.guild.createChannel('Chat','text').then(Genel => Genel.setParent(message.guild.channels.find('name','Yazı')))
message.guild.createChannel('Bot Komut','text').then(Genel => Genel.setParent(message.guild.channels.find('name','Yazı')))
message.guild.createChannel('Fotoğraf','text').then(Genel => Genel.setParent(message.guild.channels.find('name','Yazı')))
message.guild.createChannel('Etkinlik','category')
message.guild.createChannel('Tasarım','text').then(Genel => Genel.setParent(message.guild.channels.find('name','Etkinlik')))
message.guild.createChannel('Gifli Gifsiz PP','text').then(Genel => Genel.setParent(message.guild.channels.find('name','Etkinlik')))
message.guild.createChannel('Sayı Sayma','text').then(Genel => Genel.setParent(message.guild.channels.find('name','Etkinlik')))
message.guild.createChannel('Kelime Türetmece','text').then(Genel => Genel.setParent(message.guild.channels.find('name','Etkinlik')))
message.guild.createChannel('Devamını Getir','text').then(Genel => Genel.setParent(message.guild.channels.find('name','Etkinlik')))
message.guild.createChannel('Tuttu Tutmadı','text').then(Genel => Genel.setParent(message.guild.channels.find('name','Etkinlik')))
message.guild.createChannel('Sesli Aktivite','category')
message.guild.createChannel('Film Odası','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Sesli Aktivite')))
message.guild.createChannel('Müzik 1','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Sesli Aktivite')))
message.guild.createChannel('Müzik 2','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Sesli Aktivite')))
message.guild.createChannel('Canlı Müzik','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Sesli Aktivite')))
message.guild.createChannel('Video Odası','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Sesli Aktivite')))
message.guild.createChannel('Oyunlar','category')
message.guild.createChannel('D-C Kuralları','text').then(Yetkiler => {
    Yetkiler.overwritePermissions(Everyone, {
    CREATE_INSTANT_INVITE: true,
    MANAGE_CHANNELS : false,
    MANAGE_ROLES : false,
    MANAGE_WEBHOOKS : false,
    VIEW_CHANNEL : true,
    SEND_MESSAGES : false,
    SEND_TTS_MESSAGES : false,
    MANAGE_MESSAGES : false,
    EMBED_LINKS : false,
    ATTACH_FILES : false,
    READ_MESSAGE_HISTORY : true,
    MENTION_EVERYONE : false,
    USE_EXTERNAL_EMOJIS : false,
    ADD_REACTIONS : false
    })
    Yetkiler.setParent(message.guild.channel.find('name','Oyunlar'))
    })
message.guild.createChannel('D-C Chat','text').then(Genel => Genel.setParent(message.guild.channels.find('name','Oyunlar')))
message.guild.createChannel('Doğruluk Cesaretlik','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Oyunlar')))
message.guild.createChannel('V-K Kuralları','text').then(Yetkiler => {
    Yetkiler.overwritePermissions(Everyone, {
    CREATE_INSTANT_INVITE: true,
    MANAGE_CHANNELS : false,
    MANAGE_ROLES : false,
    MANAGE_WEBHOOKS : false,
    VIEW_CHANNEL : true,
    SEND_MESSAGES : false,
    SEND_TTS_MESSAGES : false,
    MANAGE_MESSAGES : false,
    EMBED_LINKS : false,
    ATTACH_FILES : false,
    READ_MESSAGE_HISTORY : true,
    MENTION_EVERYONE : false,
    USE_EXTERNAL_EMOJIS : false,
    ADD_REACTIONS : false
    })
    Yetkiler.setParent(message.guild.channel.find('name','Oyunlar'))
    })
message.guild.createChannel('V-K Chat','text').then(Genel => Genel.setParent(message.guild.channels.find('name','Oyunlar')))
message.guild.createChannel('Vampir Köylü','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Oyunlar')))
message.guild.createChannel('Özel Odalar','category')
message.guild.createChannel('Özel Oda 1','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Özel Odalar'))).then(Sınır => Sınır.setUserLimit('2'))
message.guild.createChannel('Özel Oda 2','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Özel Odalar'))).then(Sınır => Sınır.setUserLimit('2'))
message.guild.createChannel('Özel Oda 3','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Özel Odalar'))).then(Sınır => Sınır.setUserLimit('3'))
message.guild.createChannel('Özel Oda 4','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Özel Odalar'))).then(Sınır => Sınır.setUserLimit('3'))
message.guild.createChannel('Özel Oda 5','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Özel Odalar'))).then(Sınır => Sınır.setUserLimit('4'))
message.guild.createChannel('Özel Oda 6','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Özel Odalar'))).then(Sınır => Sınır.setUserLimit('4'))
message.guild.createChannel('Özel Oda 7','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Özel Odalar'))).then(Sınır => Sınır.setUserLimit('5'))
message.guild.createChannel('Özel Oda 8','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Özel Odalar'))).then(Sınır => Sınır.setUserLimit('5'))
message.guild.createChannel('Özel Oda 9','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Özel Odalar'))).then(Sınır => Sınır.setUserLimit('6'))
message.guild.createChannel('Özel Oda 10','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Özel Odalar'))).then(Sınır => Sınır.setUserLimit('6'))
message.guild.createChannel('Herkes İçin Odalar','category')
message.guild.createChannel('Sunucunun Galaksisi','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Herkes İçin Odalar'))).then(Sınır => Sınır.setUserLimit('30'))
message.guild.createChannel('Sunucunun Bölgesi','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Herkes İçin Odalar'))).then(Sınır => Sınır.setUserLimit('20'))
message.guild.createChannel('Sunucunun Kara Bölgesi','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Herkes İçin Odalar'))).then(Sınır => Sınır.setUserLimit('15'))
message.guild.createChannel('Mars','voice').then(Genel => Genel.setParent(message.guild.channels.find('name','Herkes İçin Odalar'))).then(Sınır => Sınır.setUserLimit('10'))
message.guild.createChannel('Şikayet -- Destek','category')
message.guild.createChannel('Destek Kanalı','text').then(Genel => Genel.setParent(message.guild.channels.find('name','Şikayet -- Destek')))
message.guild.createChannel('Şikayet Kanalı','text').then(Genel => Genel.setParent(message.guild.channels.find('name','Şikayet -- Destek')))
})})}

/*
message.guild.createChannel('╡yetkiler ', 'text').then(Yetkiler => {
Yetkiler.overwritePermissions(Everyone, {
CREATE_INSTANT_INVITE: true,
MANAGE_CHANNELS : false,
MANAGE_ROLES : false,
MANAGE_WEBHOOKS : false,
VIEW_CHANNEL : true,
SEND_MESSAGES : false,
SEND_TTS_MESSAGES : false,
MANAGE_MESSAGES : false,
EMBED_LINKS : false,
ATTACH_FILES : false,
READ_MESSAGE_HISTORY : true,
MENTION_EVERYONE : false,
USE_EXTERNAL_EMOJIS : false,
ADD_REACTIONS : false
})
Yetkiler.setParent(BirinciKategori.id)
})
*/

exports.conf = {
    guildOnly: true,
    enabled: true,
    aliases: ['umhs','hazır-sunucu'],
    permLevel: 3
}

exports.help = {
    name: 'Hazır Sunucu Ama Gelişmiş',
    description: 'Ultra Gelişmiş Hazır Sunucu',
    usage: 'hazır-sunucu'
}
