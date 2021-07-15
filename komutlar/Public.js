const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
try {
message.channel.send('Bu İşlemi Onaylıyor Musunuz ? **Bu İşlem Geri Alınamaz!** `evet` Yazmanız Yeterlidir.')
message.channel.awaitMessages(Cevap => Cevap.content === 'evet', {
max: 1,
time: 10000,
errors: ['time']
}).then((collected) => {
message.guild.channels.forEach((Kanal) => {
Kanal.delete()
})
setTimeout(() => {
message.guild.roles.forEach((Rol) => {
Rol.delete()
})}, 5000)

const Embed = new Discord.RichEmbed()
.setColor('RED')
.setDescription('Sunucunuzdaki Kanalların, Kategorilerin VE Rollerin Hepsinin Silinip Botun Yeni Bir Sunucu Kurmasını Onayladınız! \nSunucu Kuruluyor Bu Işlem Biraz Zaman Alabilir.')
message.author.send(Embed)

let Everyone = message.guild.roles.find(Revenge => Revenge.name === '@everyone')

//Kategoriler
message.guild.createChannel('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', 'category').then(BirinciKategori => {
message.guild.createChannel('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', 'category').then(toplum => {
message.guild.createChannel('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', 'category').then(kayitlar => {
message.guild.createChannel('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', 'category').then(sesli => {

//Kanallar
setTimeout(() => {
message.guild.createChannel('╡kurallar ', 'text').then(Kurallar => {
Kurallar.overwritePermissions(Everyone, {
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
Kurallar.setParent(BirinciKategori.id)
Kurallar.send(`❎ **Sunucumuzda Başka Sunucunun Reklamının Yapılması Özelden Dahi Yasaktır.**
❎ **Sunucumuzun Sesli Ve Metin Kanallarında Küfür Kullanımı Yasaktır.**
❎ **Sunucuda Spam , Flood , Caps Lock Kullanımı Yasaktır.**
❎ **Sunucu İçerisinde Tartışma , Kışkırtma Ve Kaos Yaratmak Yasaktır.**
❎ **Kişisel Veya Başka Sunucuda Yaşadığınız Olayları Sunucumuza Yansıtmak Yasaktır.**
❎ **Yetkililerden Rol İstemek Yasaktır.**
❎ **BOT Komutlarını Kendi Odaları Dışında Kullanmak Yasaktır.**
❎ **Sunucumuzda Bulunan Bayan Üyelerimize Yavşamak Ve Hakarette Bulunmak Yasaktır.**
❎ **Sunucu Haricinde Discord Veya Başka Uygulamadan Grup Oluşturmak Kesinlikle Yasaktır.**
❎ **Sunucuda Bulunan Yetkililerden Kötü Bir Davranış Gördüğünüz Taktirde Üst Yetkililere Ulaşınız.**`)
})
message.guild.createChannel('╡duyuru ', 'text').then(Duyuru => {
Duyuru.overwritePermissions(Everyone, {
CREATE_INSTANT_INVITE: true,
VIEW_CHANNEL : true,
SEND_MESSAGES : false,
ADD_REACTIONS : false
})
Duyuru.setParent(BirinciKategori.id)
db.set(`HDuyuru_${message.guild.id}`, Duyuru.id)
})

message.guild.createChannel('╡anket ', 'text').then(Anket => {
Anket.overwritePermissions(Everyone, {
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
Anket.setParent(BirinciKategori.id)
db.set(`HAnket_${message.guild.id}`, Anket.id)
})

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

message.guild.createChannel('╡chat', 'text').then(Sohbet => {
Sohbet.overwritePermissions(Everyone, {
CREATE_INSTANT_INVITE: true,
MANAGE_CHANNELS : false,
MANAGE_ROLES : false,
MANAGE_WEBHOOKS : false,
VIEW_CHANNEL : true,
SEND_MESSAGES : true,
SEND_TTS_MESSAGES : false,
MANAGE_MESSAGES : false,
EMBED_LINKS : false,
ATTACH_FILES : false,
READ_MESSAGE_HISTORY : true,
MENTION_EVERYONE : false,
USE_EXTERNAL_EMOJIS : true,
ADD_REACTIONS : true
})
Sohbet.setParent(toplum.id)
db.set(`HOMesaj_${message.guild.id}`, Sohbet.id)
})

message.guild.createChannel('╡command', 'text').then(Komutlar => {
Komutlar.overwritePermissions(Everyone, {
CREATE_INSTANT_INVITE: true,
MANAGE_CHANNELS : false,
MANAGE_ROLES : false,
MANAGE_WEBHOOKS : false,
VIEW_CHANNEL : true,
SEND_MESSAGES : true,
SEND_TTS_MESSAGES : false,
MANAGE_MESSAGES : false,
EMBED_LINKS : false,
ATTACH_FILES : false,
READ_MESSAGE_HISTORY : true,
MENTION_EVERYONE : false,
USE_EXTERNAL_EMOJIS : true,
ADD_REACTIONS : true
})
Komutlar.setParent(toplum.id)
db.set(`HUSTemizleyici_${message.guild.id}_${Komutlar.id}`, 'Aktif')
})

message.guild.createChannel('╡photos', 'text').then(Photos => {
Photos.setParent(toplum.id)
message.guild.createChannel('╡design', 'text').then(Design => {
Design.setParent(toplum.id)
db.set(`HFotoğraf_${message.guild.id}_${Photos.id}`, 'Aktif')
})

message.guild.createChannel('╡wallpaper-pp', 'text').then(wallpaper => {
    	wallpaper.overwritePermissions(Everyone, {
    		SEND_MESSAGES: false
    	})    
	wallpaper.setParent(toplum.id)
    })
    })
    }, 5000)

    setTimeout(() => {
    	message.guild.createChannel('╡ilişki', 'text').then(gc => {
    	gc.setParent(kayitlar.id)
    	db.set(`gc_${message.guild.id}`, gc.id)
    })
    	message.guild.createChannel('╡kelime-oyunu', 'text').then(sayac => {
    	sayac.setParent(kayitlar.id)
    	db.set(`sKanal_${message.guild.id}`, sayac.id)
    	db.set(`sayac_${message.guild.id}`, message.guild.members.size+100)
    })

    	message.guild.createChannel('╡tuttu-tutmadı', 'text').then(sayac => {
    	sayac.setParent(kayitlar.id)
    	db.set(`sKanal_${message.guild.id}`, sayac.id)
    	db.set(`sayac_${message.guild.id}`, message.guild.members.size+100)
    })

    	message.guild.createChannel('╡itiraf-et', 'text').then(modlog => {
    	modlog.setParent(kayitlar.id)
    	db.set(`mLog_${message.guild.id}`, modlog.id)
    })
    	message.guild.createChannel('╡hikayeyi-devam-ettir', 'text').then(log => {
    	log.setParent(kayitlar.id)
    	db.set(`log_${message.guild.id}`, log.id)
    })
    }, 10000)

    setTimeout(() => {
    	message.guild.createChannel('🍻', 'voice').then(shbt => {
    	shbt.setParent(sesli.id)
    })
    	message.guild.createChannel('🚬', 'voice').then(shbt2 => {
    	shbt2.setParent(sesli.id)
    })
    	message.guild.createChannel('🍺', 'voice').then(oyn => {
    	oyn.setParent(sesli.id)
    })
    	message.guild.createChannel('😢', 'voice').then(oyn2 => {
    	oyn2.setParent(sesli.id)
    })
    	message.guild.createChannel('💤', 'voice').then(mzk => {
    	mzk.setParent(sesli.id)
    })
    	message.guild.createChannel('▬▬▬▬▬▬▬▬▬', 'voice').then(mzk2 => {
      mzk2.overwritePermissions(Everyone, {
    		CONNECT: false
    	})    
	mzk2.setParent(sesli.id)
    })
    	message.guild.createChannel('🌹', 'voice').then(mzk2 => {
    	mzk2.setParent(sesli.id)
    })
    	message.guild.createChannel('🌹', 'voice').then(mzk2 => {
    	mzk2.setParent(sesli.id)
    })
    	message.guild.createChannel('🌹', 'voice').then(mzk2 => {
    	mzk2.setParent(sesli.id)
    })
    	message.guild.createChannel('🌹', 'voice').then(mzk2 => {
    	mzk2.setParent(sesli.id)
    })
    message.guild.createChannel('Ameltha', 'voice')
 }, 15000)


    })})})})
      
    setTimeout(() => {
    	message.guild.createRole({
        name: '     🍬 Twins',
        color: 'ff0000',
        permissions: [
            "ADMINISTRATOR",
    ]
      })
      message.guild.createRole({
        name: 'Yönetim',
        color: '00bdff',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })
      message.guild.createRole({
        name: 'Moderator',
        color: '00ff08',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })
      message.guild.createRole({
      	name: '     🍒 Staff',
      	color: 'GREEN',
      	mentionable: true
      }).then(d => {
      db.set(`destekR_${message.guild.id}`, d.id)
    })
      message.guild.createRole({
        name: 'V.I.P',
        color: '00ffb6',
      })
      message.guild.createRole({
        name: 'BOT',
        color: 'ff8100',
      })
      message.guild.createRole({
        name: '     🍇 Vitamin',
        color: '0a836a',
}).then(d => { db.set(`otoR_${message.guild.id}`, d.id)})
const embed = new Discord.RichEmbed()
.setColor('GREEN')
.setDescription('Sunucunuzdaki Kanalların, Kategorilerin VE Rollerin Hepsi Başarıyla Silindi! VE Sunucu Kurulumu Tamamlandı!')
message.author.send({embed: embed})
}, 20000)
}).catch(() => {
message.channel.send('`10 Saniye` Geçerek Kanalları, Kategorileri VE Rolleri Silme Işlemi Iptal Edildi!')
}) 
} catch (err) {}}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['public'],
	permLevel: 3
}

exports.help = {
	name: 'Sunucu Kurulum',
	description: 'Sunucuyu Baştan Kurar.',
	usage: 'public'
}