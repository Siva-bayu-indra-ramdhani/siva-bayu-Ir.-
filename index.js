//================================
// [❗] HAI NAMAKU SIVA BAYU INDRA RAMDHANI
// [❗] YAH DISINI AKU SEBAGAI PEMULA 
// [❗] MAU MENCOBA MEMBUAT BOT SENDIRI
// [❗] YANG PASTINYA PASTI BANYAK YG
// [❗] BAKAL NYOLONG CASE DISINI.
// [❗] OKE TERIMA KASIH
//================================

//================================
// [❗] THX TO JGN DIHAPUS/DIGANTI
// [❗] NAMA AUTHOR "SIVA BAYU INDRA RAMDHANI" JGN DI GANTI
// [❗] JANGAN DI PERJUAL BELIKAN
// [❗] PERATURAN DI LANGGAR? GW BERHENTI UPDATE
// [❗] JGN UPLOAD ULANG SC GW YAAA
//================================

//================================
//[❗] MAU CASE LANGKA??? 
//[❗] CARI DI FOLDER "CASE LANGKA"
//================================

//============[ THX TO ]============
//[❗] ALL CREATOR BOT
//[❗] PENYEDIA API DISINI
//================================
const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const request = require('request')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const crypto = require('crypto')  
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require("child_process")  
const ffmpeg = require('fluent-ffmpeg') 
const { nyz } = require('./private')
const imgbb = require('imgbb-uploader')  
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const nayz = JSON.parse(fs.readFileSync('./lib/tes.json'))


/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEEE ]==============================================================*/                  	    
/*====================================================[ VOLDER BOTZ ]==============================================================*/                    	   
const { 
	bayarLimit, 
	limitAdd
} = require('./lib/limitatm.js') 
const {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
} = require('./lib/level.js')

grub1 = setting.grub1
grub2 = setting.grub2
grub3 = setting.grub3
apikey = nayz.apikey
elitrespon = nayz.elitrespon
connet = nayz.connet
auth0r = nayz.auth0r
replytroli = nayz.replytroli
prefix = setting.prefix
limitawal = 25
blocked = []
apixteam = setting.apixteam
cr = setting.cr
ownerrf = setting.ownerrf
ownerrz = setting.ownerrz
tz = setting.tz 
cr1 = setting.cr1
cr2 = setting.cr2
numberbot = setting.numberbot
apivhtear = setting.apivhtear
fake1 = setting.fake1
fake2 = setting.fake2
author = setting.author
reply(ind.wait()) = setting.reply(ind.wait())
namebot = setting.namebot
ownername = setting.ownername
donasi = setting.donasi
l0lhuman = setting.l0lhuman
pulsa = setting.pulsa
gopay = setting.gopay
ovo = setting.ovo
dana = setting.dana
 
// NOTE MAU UBAH??? SILAHKAN UBAH DI SRC + SETTINGS.JSON
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ ROOM TO FILE ]==============================================================*/                  	                         	 

const _Elite = JSON.parse(fs.readFileSync('./client/Elite.json')) 
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json')) 
const antilink = JSON.parse(fs.readFileSync('./client/antilink.json'))
const event = JSON.parse(fs.readFileSync('./client/event.json'))
const antiwibu = JSON.parse(fs.readFileSync('./client/antiwibu.json'))
const antijawa = JSON.parse(fs.readFileSync('./client/antijawa.json'))
const prem = JSON.parse(fs.readFileSync('./client/prem.json'))
const welkom = JSON.parse(fs.readFileSync('./client/welkom.json'))
const antigay = JSON.parse(fs.readFileSync('./client/antigay.json'))
const antibocil = JSON.parse(fs.readFileSync('./client/antibocil.json'))
const _limit = JSON.parse(fs.readFileSync('./client/limit.json'))
const botx = JSON.parse(fs.readFileSync('./client/botx.json')) 
const nayXi = JSON.parse(fs.readFileSync('./client/nayXi.json')) 
const _leveling = JSON.parse(fs.readFileSync('./client/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./client/level.json'))
const nayXix = JSON.parse(fs.readFileSync('./client/nayXix.json')) 

 
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*======================================================[ TIME BOTZ ]==============================================================*/                  	                    	              
            function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}J ${pad(minutes)}M ${pad(seconds)}D`
            }

/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CONNECTING  ]==============================================================*/                  	    
                	 
            async function starts() {
        	const client = new WAConnection()
	        client.logger.level = 'warn'
	        console.log(banner.string)
        	client.on('qr', () => {
     		console.log(color('[','white'), color('!','red'), color(']','white'), color('SUBSCRIBE YT RIMURUBOTZ'))
	        })
	        fs.existsSync('./self-bot.json') && client.loadAuthInfo('./self-bot.json')
	        client.on('connecting', () => {
		    start('2', 'Connecting...')		   
        	})
	        client.on('open', () => {
	    	success('2', 'BY RIMURUBOTZ')
	    	setTimeout( () => {
	    	console.log(color(`[❗] BERHASIL CONNECT BOTZ`, 'pink'))
	    	}, 1000)
	    	setTimeout( () => {
	    	console.log(color(`[❗] THX TO JGN DIHAPUS/DIGANTI`, 'pink'))
	    	}, 2000)
	    	setTimeout( () => {
	    	console.log(color(`[❗] NAMA AUTHOR <NAYLA> JGN DI GANTI`, 'pink'))
	    	}, 3000)
	    	setTimeout( () => {
	    	console.log(color(`[❗] JANGAN DI PERJUAL BELIKAN`, 'pink'))
	    	}, 4000)
	    	setTimeout( () => {
	    	console.log(color(`[❗] PERATURAN DI LANGGAR? GW BERHENTI UPDATE`, 'pink'))
	    	}, 5000)
	    	setTimeout( () => {
	    	console.log(color(`[❗] JGN UPLOAD ULANG SC GW YA`, 'pink'))
	    	}, 6000)	    	     	
         	})         	
         	client.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, `SUKSES NIHH CONNECT BOT\nSILAHKAN KETIK ${prefix}elitebot\nSILAHKAN SUBS YT RIMURUBOTZ\nINGIN REQUEST FITUR BOT??\nSILAHKAN KETIK ${prefix}other`, MessageType.text)
        	await client.connect({timeoutMs: 30*1000})
            fs.writeFileSync('./self-bot.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
	        client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	        for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))     	
	        }
        	})
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=======================================================[ WELCOME ]==============================================================*/                  	    
            client.on('group-participants-update', async (anu) => {
	    	if (!welkom.includes(anu.jid)) return
		    try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
		    num = anu.participants[0]
		    try {
			ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
		    } catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		    }
			teks = `╔════════════════════\n`
			teks += `║╭───────────────────\n`
			teks += `║│➻ *HALO @${num.split('@')[0]}*\n`
			teks += `║│➻ *SELAMAT DATANG DIGRUB*\n`
			teks += `║│➻ *${mdata.subject}*\n`			
			teks += `║╰───────────────────\n`
			teks += `╠══[ *WELCOME [•] NEW* ]════\n`
			teks += `║╭───────[ *INTRO* ]──────\n`
			teks += `║│➻ *NAMA* :\n`
			teks += `║│➻ *UMUR* :\n`
			teks += `║│➻ *GENDER* :\n`
			teks += `║│➻ *ASKOT* :\n`
			teks += `║│➻ *AGAMA* :\n`
			teks += `║│➻ *ALASAN BERGABUNG* :\n`
			teks += `║╰───────────────────\n`
			teks += `╚════════════════════\n`
			let buff = await getBuffer(ppimg)
		    client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
			num = anu.participants[0]
			try {
			ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			teks = `akhirnya beban group berkurang 𝟭,bye bye🥳 @${num.split('@')[0]} jasamu akan di kubur dalam²`
			let buff = await getBuffer(ppimg)
			client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	        
             
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	                 
	        
	        client.on('chat-update', async (mek) => {
      		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked				 
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
	        const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
	      	runtime = process.uptime()   
	      	const fake3 = `*MY BOT* ${namebot}\n*RUNTIME* ${kyun(runtime)}` 	
	      	const freply = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": fake3} } } 
			const isCmd = body.startsWith(prefix)             
            const tescuk = ["0@s.whatsapp.net"]
			const botNumber = client.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const totalchat = await client.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isOwner = ownerNumber.includes(sender)
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isEventon = isGroup ? event.includes(from) : false
			const isAntigay = isGroup ? antigay.includes(from) : false
			const isAntibocil = isGroup ? antibocil.includes(from) : false
			const isAntiwibu = isGroup ? antiwibu.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false			 
			const isAntijawa = isGroup ? antijawa.includes(from) : false
			const isNayXi = isGroup ? nayXi.includes(from) : false			     
			const isNayXix = isGroup ? nayXix.includes(from) : false			 		 
			const isPrem = prem.includes(sender) || isOwner				
			const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isBotx = isGroup ? botx.includes(from) : false
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined									            
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
			}
		    const nay2 = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `MAAF FITUR ${command} TIDAK TERDAFTAR DIDALAM MENU`} } }
		    const nay3 = {
            key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `SIMI-SIMI CHAT\nCHAT OTOMATIS`} } }            			
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}				
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted: freply})
			}
			const nayz = (teks) => {
				client.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `ERROR FITUR. LAPORKAN SEGERA!!!!` }}})
			}			
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const createSerial = (size) => {
        	return crypto.randomBytes(size).toString('hex').slice(0, size)
            }            
            const addEliteUser = (userid, sender, time, serials) => {
	        const obj = { id: userid, name: sender, time: time, serial: serials }
	        _Elite.push(obj)
          	fs.writeFileSync('./client/Elite.json', JSON.stringify(_Elite))
            }	
            const checkEliteUser = (sender) => {
	        let status = false
	        Object.keys(_Elite).forEach((i) => {
		    if (_Elite[i].id === sender) {
			status = true
		    }
	        })
	        return status
            }       
            const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _limit[position].limit -= amount
            fs.writeFileSync('./client/limit.json', JSON.stringify(_limit))
            }
            }
        	       
            const nayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
            const bulan = nayBulan[moment().format('MM') - 1]
			const isElite = checkEliteUser(sender)
            const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
            const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
            const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
            const slot1 = ['🍋','🍐','🍓','🍇','🍒']
            const slot2 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot3 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot4 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot5 = ['🍋','🍐','🍓','🍇','🍒']
            const slot6 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot7 = ['🍋','🍐','🍓','🍇','🍒']
            const slot8 = ['🍋','🍐','🍓','🍇','🍒']   
            const slot9 = ['🍋','🍐','🍓','🍇','🍒']
            const notc = ['😊','😃','😗','🙂','😶','😣','🙁','😞','😬']
            const oxo1 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const oxo2 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']  
            const oxo3 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const oxo11 = oxo1[Math.floor(Math.random() * (oxo1.length))]
            const notc1 = notc[Math.floor(Math.random() * (notc.length))]
            const oxo22 = oxo2[Math.floor(Math.random() * (oxo2.length))]
            const oxo33 = oxo3[Math.floor(Math.random() * (oxo3.length))]
            const nayla3 = nayla1[Math.floor(Math.random() * (nayla1.length))]
            const nayla4 = nayla2[Math.floor(Math.random() * (nayla2.length))] 
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
            const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
		    const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
		    const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
		    const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
			const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
			const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
		    const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
		    const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
			const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]	                       
            const kapan2 = ['Hari ini','Mungkin besok','1 Minggu lagi','Masih lama','3 Bulan lagi','7 Bulan lagi','3 Tahun lagi','4 Bulan lagi','2 Bulan lagi','1 Tahun lagi','1 Bulan lagi','Coba ulangi']
            const tomxic = ["ajg","asu","Ajg","Asu","anjg","Anjg","olol","antek","elaso","Babi","babi","ontol","kntl","kintil","emek","entod"]
			const apa = ['Ya','Mungkin','Tidak','Coba Ulangi']
			var chat1 = `0@s.whatsapp.net`
		    var split = `ALL CHAT BOTZ`
		    var chat2 =         {
			contextInfo:   {
			participant: chat1,
			quotedMessage: {
			extendedTextMessage: {
	    	text: split,
	     	}
     		}
	    	}
		 	}
   	        tchat = `Total : ${totalchat.length}`   	            	                   
            const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:${ownername}\n` 
            + `ORG: Pengembang bot;\n`
            + `TEL;type=CELL;type=VOICE;waid=${ownerrf}:${ownerrz}\n`
            + 'END:VCARD' /*
            ____________________________
            INI BUAT AUTHOR JADI JGN
            DI UBAHH YAAAA OKEYY            
            */const vnayla = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN: NAYLACHAN\n` 
            + `ORG: AUTHOR;\n`
            + `TEL;type=CELL;type=VOICE;waid=62812874133914:+62 812-8741-33914\n`
            + 'END:VCARD' 
            colors = ['red', 'pink', 'white', 'black', 'blue', 'yellow', 'green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')			 			  
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m➻\x1b[1;37m]', color('NAMA', 'red'), color(pushname, 'yellow'), color('SEDANG', 'white'), color('MENGGUNAKAN', 'yellow'), color('FITUR', 'red'), color('➻', 'yellow'), color(command), 'DI :', color('PESAN PRIBADI', 'yellow')) 
			if (isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m➻\x1b[1;37m]', color('NAMA', 'red'), color(pushname, 'yellow'), color('SEDANG', 'white'), color('MENGGUNAKAN', 'yellow'), color('FITUR', 'red'), color('➻', 'yellow'), color(command), 'DI :', color(groupName, 'yellow'))			 
            const xxx = '```'  
            const limitAdd = (sender) => {
            let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id == sender) {
            position = i
            }
            })
            if (position !== false) {
            _limit[position].limit += 1
            fs.writeFileSync('./client/limit.json', JSON.stringify(_limit))
            }
            }
            const checkLimit = (sender) => {
          	let found = false
            for (let lmt of _limit) {
            if (lmt.id === sender) {
            let limitCounts = limitawal - lmt.limit
            if (limitCounts <= 0) return itsmeiky.sendMessage(from,`BATAS PENGGUNAN ANDA (LIMIT) TELAH HABIS`, text,{ quoted: mek})
            client.sendMessage(from, `SISA LIMIT ANDA : *${limitCounts}*`, text, { quoted : mek})
            found = true
            }
            }
            if (found === false) {
            let obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./client/limit.json', JSON.stringify(_limit))
            client.sendMessage(from, `SISA LIMIT ANDA : *${limitCounts}*`, text, { quoted : mek})
            }
         	}         	          
            const isLimit = (sender) =>{ 
	        let position = false
            for (let i of _limit) {
            if (i.id === sender) {
          	let limits = i.limit
            if (limits >= limitawal ) {
         	position = true
            client.sendMessage(from, `MAAF *${pushname}* BATAS PENGGUNAAN (LIMIT) HARI INI TELAH HABIS. (LIMIT) BISA DI GET DENGAN CARA KETIK *#claim*`, text, {quoted: mek})
            return true
            } else {
          	_limit
            position = true
            return false
            }
            }
            }
            if (position === false) {
           	const obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./client/limit.json',JSON.stringify(_limit))
            return false
            }
            }    
            if (isGroup && isElite && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
            if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
            const amountXp = Math.floor(Math.random() * 10) + 500
            const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
            const getLevel = getLevelingLevel(sender)
            addLevelingXp(sender, amountXp)
            if (requiredXp <= getLevelingXp(sender)) {
            addLevelingLevel(sender, 1)
            bayarLimit(sender, 3)
            await reply(nyz.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
            }
            } catch (err) {
            console.error(err)
            }
            }     
             
            switch (command) {
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
/*			        
			        
			        
			        MAU NYOLOMG CASE YA OM?? 
			        SETIDAKNYA ADD NAMA GW LAH
			        DI THX TO BOT KLEAN "NAYLA"
			        GK MAU?? OKE TERIMAKASIH			       			        
			        			       			        			       			        			       			        			        
			        
			        
*/                                        

			        case 'join':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka]) 
                    if (args.length < 1) return reply(`contoh ${prefix}join https://chat.whatsapp.com/CAPUjeauAafAskp3o5LDNj`)
                    const bug11 = body.slice(5)
                    if (bug11.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*MY BOTZ NEW*`} } }})
                    var nomor = mek.participant
                    const bug22 = `*[UNDANGAN JOIN]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug11}`
                    var optionsp = {
                    text: bug22,
                    contextInfo: {mentionedJid: [nomor]},
                    }                     
                    client.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `SUBSCRIBE YT RIMURUBOTZ`} } } })                    
                    reply('BOT AKAN SEGERA MASUK. SUBSCRIBE YT RIMURUBOTZ')                     
					break  
					case 'claim':
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isBotx) return reply(`MODE BOTX TIDAK AKTIF\nSILAHKAN KETIK ${prefix}botx`)
					reply(`SELAMAT ANDA MENDAPATKAN *${nayla3}*`)
					addLevelingLevel(sender, 1)
                    bayarLimit(sender, nayla3) 
                    break
                    case 'mygrub':
                    case 'mygrup':
                    my1 = `*YUKKK JOIN DIGRUB BOT*\n`
                    my1 += `➻ *GRUB1* = ${grub1}\n`
                    my1 += `➻ *GRUB2* = ${grub2}\n`
                    my1 += `➻ *GRUB3* = ${grub3}\n`
                    reply(my1)
                    break
			        case 'info':
			        inf1 = `➻ *NAMABOT* : ${namebot}\n`
			        inf1 += `➻ *OWNERNAME* : ${ownername}\n`
			        inf1 += `➻ *AUTHOR* : NAYLACHAN\n`
			        inf1 += `➻ *NUMBERBOT* : ${numberbot}\n`
			        inf1 += `SUBSCRIBE *https://youtube.com/channel/UCeQaKIQQhDNHMOq_odQh5Sw*`
			        reply(inf1)
			        break
					case 'elitebot': 				
					const serialUser = createSerial(20)
					veri = sender
					if (isGroup) {
					addEliteUser(sender, pushname, time, serialUser)
					try {					 
					} catch {						 
					}
				   	reply(nyz.elitenay(pushname, prefix))
					console.log(color(`SELAMAT ${pushname} TELAH RESMI MENJADI ELITE MEMBER`, 'pink'))
					} else {
					addEliteUser(sender, pushname, time, serialUser)
					try {						 
					} catch {						  
			    	}
			     	reply(nyz.elitenay(pushname, prefix))
		         	console.log(color(`SELAMAT ${pushname} TELAH RESMI MENJADI ELITE MEMBER`, 'pink'))
				    }
				    break						       	 			            			         
                  	case 'help':  
			    	case 'menu':                     
			    	if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    runtime = process.uptime()                              
                    reply(nyz.menuZ(ownername, auth0r, bulan, tchat, tz, prefix))                                    
                    break
                    case 'fastmenu':                      
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    reply(nyz.fastmenu(prefix, ownername, tz))                                                   
                    break     
                    case 'allmenu':                      
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    reply(nyz.allmenu(ownername, auth0r, bulan, tchat, tz, prefix))                                                   
                    break                    
                    case 'makerfoto':                      
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    reply(nyz.makerfoto(prefix, ownername, tz)) 
                    break                                                                                           
                    case 'ownermenu':                      
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    reply(nyz.ownermenu(prefix, ownername, tz))                                   
                    break
                    case 'spesialmenu':                      
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    reply(nyz.spesialmenu(prefix, ownername, tz)) 
                    break                    
                    case 'sertifikat':                      
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    reply(nyz.sertifikat(prefix, ownername, tz))  
                    break   
                    case 'stickmenu':                      
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    reply(nyz.stickmenu(prefix, ownername, tz)) 
                    break                                           
                    case 'randomtext':                      
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    reply(nyz.randomtext(prefix, ownername, tz))   
                    break                                  
                    case 'gamemenu':                      
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka]) 
                    reply(nyz.gamemenu(prefix, ownername, tz))   
                    break 
                    case 'tagmenu':                      
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])                                 
                    reply(nyz.tagmenu(prefix, ownername, tz))  
                    break
                    case 'cekmenu':                      
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])                                   
                    reply(nyz.cekmenu(prefix, ownername, tz))  
                    break
                    case 'newsmenu':                      
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])                                   
                    reply(nyz.newsmenu(prefix, ownername, tz))  
                    break
                    case 'internalmenu':                      
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])                                  
                    reply(nyz.internalmenu(prefix, ownername, tz))  
                    break 
                    case 'pornmenu':                      
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])                                  
                    reply(nyz.pornmenu(prefix, ownername, tz))   
                    break
                    case 'soundmenu':                      
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])                                  
                    reply(nyz.soundmenu(prefix, ownername, tz))   
                    break
                    case 'downloadmenu':                      
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])                                  
                    reply(nyz.downloadmenu(prefix, ownername, tz)) 
                    break
                    case 'promenu':                      
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])                                                        	
                    reply(nyz.promenu(prefix, ownername, tz))   
                    break    
                    case 'grupmenu':                      
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])                              
                    reply(nyz.grupmenu(prefix, ownername, tz)) 
                    break                         
                    case 'donasi':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])                      	
                    donasi1 = `[ *${donasi}* ]\n`
                    donasi1 += `➻ *PULSA* : ${pulsa}\n`
                    donasi1 += `➻ *GOPAY* : ${gopay}\n`
                    donasi1 += `➻ *OVO* : ${ovo}\n`
                    donasi1 += `➻ *DANA* : ${dana}\n`
                    reply(donasi1)
                    break
		            case 'play':  
		            if (!isPrem) return reply(nyz.prem1(command))                    	  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
					if (args.length < 1) return reply(`Contoh : ${prefix}play DJ 30 detik`)	
					reply(reply(ind.wait())) 				 
					anu = await fetchJson(`https://api.xteam.xyz/dl/play?lagu=${args[0]}&APIKEY=${apixteam}`)
					anu1 = `*LAGU TELAH DITEMUKAN*\n`
                    anu1 += `➸ *JUDUL* : ${anu.judul}\n`
                    anu1 += `➸ *SIZE* : ${anu.size}\n`
                    anu1 += `➸ *SOURCE* : ${anu.source}\n`
					anu2 = await getBuffer(anu.thumbnail)
					anu3 = await getBuffer(anu.url)
				    client.sendMessage(from, anu2, image, { quoted: mek, caption: anu1 })
					client.sendMessage(from, anu3, audio, { mimetype: 'audio/mp4', quoted: freply })
					break
				    case 'ytmp3':   
				    if (!isPrem) return reply(nyz.prem1(command))                   	  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])					 
					if (args.length < 1) return reply('Link Nya Mana Kak')
					if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link Nya Tidak Valid Kak')
					reply(reply(ind.wait())) 
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp3?url=${args[0]}&APIKEY=${apixteam}`)
					anu1 = `YTMP3 TELAH DITEMUKAN\n`
                    anu1 += `➻ *JUDUL* : ${anu.judul}\n`
                    anu1 += `➻ *SIZE* : ${anu.size}\n`
					anu2 = await getBuffer(anu.thumbnail)
					anu3 = await getBuffer(anu.url)
					client.sendMessage(from, anu2, image, { quoted: mek, caption: anu1 })
					client.sendMessage(from, anu3, audio, { mimetype: 'audio/mp4', quoted: freply })
					break
				    case 'ytmp4':  
				    if (!isPrem) return reply(nyz.prem1(command))                    	  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])				 
					if (args.length < 1) return reply('Link Nya Mana Kak')
					if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link Nya Tidak Valid Kak')
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${args[0]}&APIKEY=${apixteam}`)
					reply(reply(ind.wait())) 
					anu1 = `YTMP4 TELAH DITERMUKAN\n`
                    anu1 += `➻ *JUDUL* : ${anu.judul}\n`
                    anu1 += `➻ *SIZE* : ${anu.size}\n`                    
					anu2 = await getBuffer(anu.thumbnail)
					client.sendMessage(from, anu2, image, { quoted: mek, caption: anu1 })
					anu3 = await getBuffer(anu.url)
					client.sendMessage(from, anu3, video, { mimetype: 'video/mp4', quoted: freply })
					break                    
                    case 'stalktwit':                      	  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    if (args.length < 1) return reply('MASUKKAN USERNAME') 
					reply(reply(ind.wait())) 
                    anu = await fetchJson(`https://videfikri.com/api/stalktwit/?username=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile)
                    anu2 = `➻ *NAMA* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USER* : ${anu.result.username}\n`
                    anu2 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu2 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu2 += `➻ *TWEETS* : ${anu.result.tweets}\n`
                    anu2 += `➻ *PUBLIC* : ${anu.result.verified}\n`
                    anu2 += `➻ *LIST* : ${anu.result.listed_count}\n`
                    anu2 += `➻ *FAVOURIT* : ${anu.result.favourites}\n`
                    anu2 += `➻ *JOIN* : ${anu.result.joined_on}\n`
                    client.sendMessage(from, anu1, image,{caption: anu2, quoted: freply})
                    break
                    case 'stalkgithub':                      	  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    if (args.length < 1) return reply('MASUKKAN USERNAME') 
					reply(reply(ind.wait()))
                    anu = await fetchJson(`https://videfikri.com/api/github/?username=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile_pic)                           
                    anu2 = `➻ *NAMA* : ${anu.result.username}\n`
                    anu2 += `➻ *ID* : ${anu.result.id}\n`
                    anu2 += `➻ *USER* : ${anu.result.fullname}\n`
                    anu2 += `➻ *COMPANY* : ${anu.result.company}\n`
                    anu2 += `➻ *BLOG* : ${anu.result.blog}\n`
                    anu2 += `➻ *LOCATION* : ${anu.result.location}\n`
                    anu2 += `➻ *EMAIL* : ${anu.result.email}\n`
                    anu2 += `➻ *HIRABLE* : ${anu.result.hireable}\n`
                    anu2 += `➻ *BIOGRAFI* : ${anu.result.biografi}\n`
                    anu2 += `➻ *PUBLIC1* : ${anu.result.public_repository}\n`
                    anu2 += `➻ *PUBLIC2* : ${anu.result.public_gists}\n`
                    anu2 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu2 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu2 += `➻ *JOIN* : ${anu.result.joined_on}\n`
                    anu2 += `➻ *UPDATE* : ${anu.result.last_updated}\n`
                    anu2 += `➻ *URL* : ${anu.result.profile_url}\n`
                    client.sendMessage(from, anu1, image,{caption: anu2, quoted: freply})
                    break
                    case 'steam':                      	  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    if (args.length < 1) return reply('MASUKKAN JUDUL') 
					reply(reply(ind.wait()))
                    anu = await fetchJson(`https://videfikri.com/api/steam/?username=${args[0]}`, {method: 'get'})
                    anu1 = `➻ *NAMA* : ${anu.result.name}\n`
                    anu1 += `➻ *USER* : ${anu.result.username}\n`
                    anu1 += `➻ *COUNTRY* : ${anu.result.country}\n`
                    anu1 += `➻ *IMG* : ${anu.result.image}\n`
                    anu1 += `➻ *LEVEL* : ${anu.result.level}\n`
                    anu1 += `➻ *FACEIT* : ${anu.result.faceit}\n`
                    anu1 += `➻ *BADGES* : ${anu.result.badges}\n`
                    anu1 += `➻ *MENTS* : ${anu.result.achievements}\n`
                    anu1 += `➻ *ON* : ${anu.result.onkah}\n`
                    client.sendMessage(from, anu1, text,{quoted: freply})
                    break 
                    case 'fb':                      	  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply('MASUKKAN LINK/URL FB') 
					reply(reply(ind.wait()))
                    anu = await fetchJson(`https://videfikri.com/api/fbdl/?urlfb=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.url)
                    anu2 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    client.sendMessage(from, anu1, video, {caption: anu2, mimetype: 'video/mp4', quoted: freply})
                    break 
                    case 'igfoto':                      	  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply('MASUKKAN LINK/URL FB') 
					reply(reply(ind.wait()))
                    anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.thumb)                     
                    anu2 = `➻ *NAME* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USER* : ${anu.result.username}\n`
                    anu2 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu2 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu2 += `➻ *DURASI* : ${anu.result.duration}\n`
                    anu2 += `➻ *CAPTION* : ${anu.result.caption}\n` 
                    anu2 += `➻ *[❗] FOTO SEDANG DIKIRIM*\n`
                    client.sendMessage(from, anu2, text, {quoted: freply})
                    anu3 = await getBuffer(anu.result.image_text)
                    client.sendMessage(from, anu3, image, {quoted: freply})
                    break
                    case 'igvideo':                      	  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply('MASUKKAN LINK/URL FB') 
					reply(reply(ind.wait()))
                    anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.thumb)                     
                    anu2 = `➻ *NAME* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USER* : ${anu.result.username}\n`
                    anu2 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu2 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu2 += `➻ *DURASI* : ${anu.result.duration}\n`
                    anu2 += `➻ *CAPTION* : ${anu.result.caption}\n` 
                    anu2 += `➻ *[❗] VIDEO SEDANG DIKIRIM*\n`
                    client.sendMessage(from, anu2, text, {quoted: freply})
                    anu3 = await getBuffer(anu.result.video)
                    client.sendMessage(from, anu3, video, {mimetype: 'video/mp4', quoted: freply})
                    break                          
                    case 'ytsearch':                      	  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply('MASUKKAN LINK/URL FB') 
					reply(reply(ind.wait()))
                    anu = await fetchJson(`https://videfikri.com/api/ytsearch/?query=${args[0]}`, {method: 'get'})
                    anu1 = getBuffer(anu.result.data.thumbnail)
                    anu2 = `➻ *NAME* : ${anu.result.data.judul}\n`
                    anu2 += `➻ *ID* : ${anu.result.data.id}\n`                    
                    anu2 += `➻ *DURASI* : ${anu.result.data.duration}\n`
                    anu2 += `➻ *CHANEL* : ${anu.result.data.id}\n`
                    anu2 += `➻ *PUBLIC.AT* : ${anu.result.data.published_at}\n`
                    anu2 += `➻ *VIEWS* : ${anu.result.data.views}\n`
                    anu2 += `➻ *DESK* : ${anu.result.data.description}\n`  
                    client.sendMessage(from, anu1, image, {caption: anu2, quoted: freply})
                    break    
                         
/* =======================================================[ FUN-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                        
                    case 'hurufkebalik':                     	  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    if (args.length < 1) return reply('MASUKKAN TEXT') 
                    anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${body.slice(14)}`)
                    anu1 = `${anu.result.kata}`
                    client.sendMessage(from, anu1, text, {quoted: freply})
                    break    
                    case 'jumlah':                      	  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    if (args.length < 1) return reply('MASUKKAN TEXT') 
                    anu = await fetchJson(`https://videfikri.com/api/jumlahhuruf/?query=${body.slice(8)}`)
                    anu1 = `${anu.result.jumlah}`
                    client.sendMessage(from, anu1, text, {quoted: freply})
                    break       
                    case 'hilih':                      	  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    if (args.length < 1) return reply('MASUKKAN TEXT') 
                    anu = await fetchJson(`https://videfikri.com/api/hilih/?query=${body.slice(7)}`)
                    anu1 = `${anu.result.kata}`
                    client.sendMessage(from, anu1, text, {quoted: freply})
                    break 
 
/* ======================================================[ SPAM-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                                             
                    case 'spamemail':                      	  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply('MASUKKAN EMAIL&NOMER&PESAN') 
					costum('SUKSES', text, tescuk, cr)
                    subjek = args[0]
                    pesan = args[1]
                    email = args[2] 
                    anu = await fetchJson(`https://videfikri.com/api/spamemail?email=${email}&subjek${subjek}=&pesan=${pesan}`)          
                    break            
                    case 'spamcall':                      	  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply('MASUKKAN NOMER') 
					costum('SUKSES', text, tescuk, cr)
                    nomer = args[0]                    
                    anu = await fetchJson(`https://videfikri.com/api/call?nohp=${nomer}`)          
                    break        
                    case 'quotes':                      	  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    anu = await fetchJson(`https://videfikri.com/api/randomquotes/`)
                    anu1 = `➻ *AUTHOR* : ${anu.result.author}\n`
                    anu1 += `➻ *QUOTES* : ${anu.result.quotes}\n`
                    client.sendMessage(from, anu1, text, {quoted: freply})
                    break
                    case 'fakta':                      	  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka]) 
                    anu = await fetchJson(`https://videfikri.com/api/fakta/`)
                    anu1 = `➻ *FAKTA* : ${anu.result.fakta}\n`
                    client.sendMessage(from, anu1, text, {quoted: freply})
                    break                                                  
                    case 'gcard':                      	  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
		            if (!isPrem) return reply(nyz.prem1(command))
                    anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`)
                    anu1 = `➻ *NEGARA* : ${anu.result.card.network}\n`
                    anu1 += `➻ *NOMER* : ${anu.result.card.number}\n`   
                    anu1 += `➻ *CVV* : ${anu.result.card.cvv}\n`    
                    anu1 += `➻ *PIN* : ${anu.result.card.pin}\n`     
                    anu1 += `➻ *BALANCE* : ${anu.result.card.balance}\n`      
                    anu1 += `➻ *PERMINGGU* : ${anu.result.card.expiration_month}\n`
                    anu1 += `➻ *PERHARI* : ${anu.result.card.expiration_year}\n` 
                    anu1 += `➻ *NAMA* : ${anu.result.customer.name}\n`       
                    anu1 += `➻ *RESS* : ${anu.result.customer.address}\n`           
                    anu1 += `➻ *COUNTRY* : ${anu.result.customer.country}\n`
                    client.sendMessage(from, anu1, text, {quoted: freply})
                    break                                                                                                                                                                                                                                                                                        
                    case 'tebakgambar':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    anu = await fetchJson(`https://videfikri.com/api/tebakgambar/`)
                    anu1 = await getBuffer(anu.result.soal_gbr)
                    anu2 = `➻ *JAWABAN* : ${anu.result.jawaban}`
                    setTimeout( () => {
                    client.sendMessage(from, anu1, image,{caption: 'JAWAB BRO... WAKTU 60 DETIK', quoted: freply})
                    }, 1)
                    setTimeout( () => {
                    costum('50 DETIK LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 DETIK LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 DETIK LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 DETIK LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 DETIK LAGI', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    client.sendMessage(from, anu2, text,{quoted: freply})                   
                    }, 60000)                                                                          
                    break                                                                                                                                           

/* ======================================================[ ANIME-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                         
                    
                    case 'quotesnime':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    anu = await fetchJson(`https://videfikri.com/api/anime/randomquoteanime`)
                    anu1 = `➻ *ANIME* : ${anu.result.anime}\n`
                    anu1 += `➻ *KARAKTER* : ${anu.result.character}\n`
                    anu1 += `➻ *QUOTES* : ${anu.result.quotes}\n`
                    client.sendMessage(from, anu1, text, {quoted: freply})
                    break
                    
/* ======================================================[ ANJAY-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                         
                   case 'lazimedia':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply('MASUKKAN NAMA PRODUK')
                   anu = await fetchJson(`https://videfikri.com/api/lazymed/?query=${body.slice(11)}`)   
                   anu1 = `${anu.result.data}`
                   reply(anu1)
                   break
                   case 'covid':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   anu = await fetchJson(`https://videfikri.com/api/rsrujukan/`)
                   anu1 = 'COVID INDONESIA :\n'
                   for (var x of anu.result.data) {
                   anu1 = `➻ *RUMAH SAKIT* : ${x.rumah_sakit}\n`
                   anu1 += `➻ *KOTA* : ${x.region}\n`
                   anu1 += `➻ *PROVINSI* : ${x.provinsi}\n`
                   anu1 += `➻ *ALAMAT* : ${x.address}\n`
                   anu1 += `➻ *PHONE* : ${x.phone}\n`
                   }
                   reply(anu1)
                   break
                   case 'wikiid':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply('MASUKKAN QUERY') 
                   anu = await fetchJson(`https://videfikri.com/api/wiki/?query=${body.slice(8)}`)   
                   anu1 = 'WIKI SOAL ID :\n'
                   for (var x of anu.result) {
                   anu1 = `➻ *JUDUL* : ${x.judul}\n`
                   anu1 += `➻ *PAGEID* : ${x.pageid}\n`
                   anu1 += `➻ *ULASAN* : ${x.isi_konten}\n`
                   }
                   client.sendMessage(from, anu1, text,{quoted: freply})
                   break  
                   case 'wikien':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply('MASUKKAN QUERY') 
                   anu = await fetchJson(`https://videfikri.com/api/wikieng/?query=${body.slice(8)}`)   
                   anu1 = 'WIKI SOAL EN :\n'
                   for (var x of anu.result) {
                   anu1 = `➻ *JUDUL* : ${x.title}\n`
                   anu1 += `➻ *PAGEID* : ${x.pageid}\n`
                   anu1 += `➻ *ULASAN* : ${x.desc}\n`
                   }
                   client.sendMessage(from, anu1, text,{quoted: freply})
                   break   
                   case 'covidid':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   anu = await fetchJson(`https://videfikri.com/api/covidindo/`)
                   anu1 = `➻ *NEGARA* : ${anu.result.country}\n`
                   anu1 += `➻ *POSITIF* : ${anu.result.positif}\n`
                   anu1 += `➻ *SEMBUH* : ${anu.result.sembuh}\n`
                   anu1 += `➻ *MENINGGAL* : ${anu.result.meninggal}\n`
                   anu1 += `➻ *RAWAT* : ${anu.result.dalam_perawatan}\n`
                   reply(anu1)
                   break
                   case 'kbbi':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply('MASUKKAN QUERY')
                   anu2 = await fetchJson(`https://videfikri.com/api/kbbi/?query=${body.slice(6)}`)                      
                   anu1 = `➻ *HASIL* : ${anu2.result.hasil}\n`                   
                   reply(anu1)
                   break
                   case 'infogempa':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	                    
                   anu = await fetchJson(`https://videfikri.com/api/infogempa/`)
                   anu1 = `➻ *WILAYAH* : ${anu.result.wilayah}\n`
                   anu1 += `➻ *BUJUR* : ${anu.result.bujur}\n`
                   anu1 += `➻ *LINTANG* : ${anu.result.lintang}\n`
                   anu1 += `➻ *WAKTU* : ${anu.result.waktu}\n` 
                   anu1 += `➻ *MAGNITUDO* : ${anu.result.magnitudo}\n` 
                   anu1 += `➻ *KEDALAMAN* : ${anu.result.kedalaman}\n` 
                   anu1 += `➻ *MAP* : ${anu.result.map}\n`
                   client.sendMessage(from, anu1, text,{quoted: freply})
                   break
                   case 'randomquran':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   anu = await fetchJson(`https://videfikri.com/api/randquran/`)
                   anu1 = `➻ *NOMER* : ${anu.result.nomor}\n`
                   anu1 += `➻ *NAMA* : ${anu.result.nama}\n`
                   anu1 += `➻ *ASMA* : ${anu.result.asma}\n`
                   anu1 += `➻ *AYAT* : ${anu.result.ayat}\n`
                   anu1 += `➻ *NAME* : ${anu.result.name}\n`
                   anu1 += `➻ *TYPE* : ${anu.result.tipe}\n`
                   anu1 += `➻ *NO URUT* : ${anu.result.no_urut}\n`
                   anu1 += `➻ *RUKUK* : ${anu.result.rukuk}\n`
                   anu1 += `➻ *ARTI* : ${anu.result.arti}\n`
                   anu1 += `➻ *KETERANGAN* : ${anu.result.keterangan}\n`
                   client.sendMessage(from, anu1, text,{quoted: freply})
                   break                    
/* ====================================================[ MAKER-MENU ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                   case '8bit':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} kamu&aku*`)
                   reply(reply(ind.wait()))
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${F1}&text2=${F2}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply})
                   break
                   case 'google':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} kamu & aku & dia*`)
                   reply(reply(ind.wait()))
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]
                   var F3 = F.split("&")[2] 
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${F1}&text2=${F2}&text3=${F3}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply})
                   break 
                   case 'fire':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(reply(ind.wait()))
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/crossfirelogo/?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply})
                   break 
                   case 'burn':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(reply(ind.wait()))
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/burnpaper/?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply})
                   break 
                   case 'battle':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   reply(reply(ind.wait()))
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/bf4/?text1=${F1}&text2=${F2}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply})
                   break 
                   case 'mug':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(reply(ind.wait()))
                   F = body.slice(5)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply})
                   break 
                    case 'love':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(reply(ind.wait()))
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply}) 
                   break 
                   case 'mug1':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(reply(ind.wait()))
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/mugflower?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply}) 
                   break 
                   case 'naruto':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(reply(ind.wait()))
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply}) 
                   break 
                   case 'glass':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(reply(ind.wait()))
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply}) 
                   break 
                   case 'romance':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(reply(ind.wait()))
                   F = body.slice(9)				    
                   anu = await getBuffer(`hthttps://videfikri.com/api/textmaker/romancetext?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply}) 
                   break 
                   case 'shadow':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(reply(ind.wait()))
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply})
                   break 
                   case 'tiktok':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   reply(reply(ind.wait()))
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect?text1=${F1}&text2=${F2}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply})
                   break
                   case 'coffe':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(reply(ind.wait()))
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply})
                   break  
                   case 'coffe1':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(reply(ind.wait()))
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup2?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply})
                   break
                   case 'neon':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(reply(ind.wait()))
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply})
                   break  
                   case 'pubg':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   reply(reply(ind.wait()))
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/pubgmlogo?text1=${F1}&text2=${F2}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply})
                   break
                   case 'water':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(reply(ind.wait()))
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/underwater?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply})
                   break 
                   case 'silk':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   reply(reply(ind.wait()))
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/silk?text1=${F1}&text2=${F2}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply})
                   break
                   case 'potter':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(reply(ind.wait()))
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/hpotter?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply})
                   break
                   case 'candy':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(reply(ind.wait()))
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/sweetcandy?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply})
                   break                     
                   case 'block':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(reply(ind.wait()))
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/woodblock?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply})
                   break
                    
                   
  
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                    case 'artinama':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    if (args.length < 1) return reply('MASUKKAN NAMA')
                    F = body.slice(10)
                    anu = await fetchJson(`https://videfikri.com/api/primbon/artinama/?nama=${F}`)
                    anu1 = `➻ *ARTI* : ${anu.result.arti}\n`
                    anu1 += `➻ *ULASAN* : ${anu.result.desk}\n`
                    reply(anu1)
                    break
                    case 'artimimpi':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    if (args.length < 1) return reply('MASUKKAN MIMPI MU')
                    F = body.slice(11)
                    anu = await fetchJson(`https://videfikri.com/api/primbon/artimimpi/?mimpi=${F}`)
                    anu1 = `➻ *ARTI* : ${anu.result.artimimpi}\n`
                    reply(anu1)
                    break
                    case 'artijadian':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    if (args.length < 1) return reply('MASUKKAN tanggal&bulan&tahun')
                    var F = body.slice(12)
				    var F1 = F.split("&")[0];
				    var F2 = F.split("&")[1];
				    var F3 = F.split("&")[2]	
                    anu = await fetchJson(`https://videfikri.com/api/primbon/tgljadian/?tgl=${F1}&bln=${F2}&thn=${F3}`)
                    anu1 = `➻ *ARTI* : ${anu.result.hasil}\n`
                    reply(anu1)
                    break
                    case 'chord':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU')  
                    F = body.slice(7)
                    anu = await fetchJson(`https://videfikri.com/api/chord/?query=${F}`)
                    anu1 = `➻ *CHORD* : ${anu.result.chord}\n`
                    reply(anu1)
                    break
                    case 'lirik':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU')  
                    F = body.slice(7)
                    anu = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${F}`)
                    anu1 = `➻ *ARTIS* : ${anu.result.artist}\n`
                    anu1 += `➻ *LIRIK* : ${anu.result.lirik}\n` 
                    reply(anu1)
                    break
   
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*=====================================================[ API   ............... ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                
                                                                                                           
                   case 'stalkig':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} jokowi*`)
                   F = body.slice(9)
                   reply(reply(ind.wait()))
                   anu = await fetchJson(`https://api.zeks.xyz/api/igstalk?username=${F}&apikey=apivinz`)
                   anu1 = await getBuffer(anu.profile_pic)
                   anu2 = `➻ *NAMA* : ${anu.username}\n`
                   anu2 += `➻ *FULLNAME* : ${anu.fullname}\n`
                   anu2 += `➻ *FOLLOWERS* : ${anu.follower}\n`
                   anu2 += `➻ *FOLLOWING* : ${anu.following}\n`
                   anu2 += `➻ *VERIFY* : ${anu.is_verified}\n`
                   anu2 += `➻ *BISNIS* : ${anu.is_bussiness}\n`
                   anu2 += `➻ *PRIVATE* : ${anu.is_private}\n`
                   anu2 += `➻ *BIO* : ${anu.bio}\n`
                   anu2 += `➻ *SOURCE* : ${anu.source}\n`
                   client.sendMessage(from, anu1, image, {caption: anu2, quoted: freply})
                   break
                   case 'quran':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   anu = await fetchJson(`https://api.zeks.xyz/api/randomquran`)
                   anu1 = `➻ *ASMA* : ${anu.result.asma}\n`
                   anu1 += `➻ *ARTI* : ${anu.result.arti}\n`
                   anu1 += `➻ *AYAT* : ${anu.result.ayat}\n`
                   anu1 += `➻ *NOMOR* : ${anu.result.nomor}\n`
                   anu1 += `➻ *RUKUK* : ${anu.result.rukuk}\n`
                   anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                   anu1 += `➻ *URUT* : ${anu.result.urut}\n`                                                                            
                   anu1 += `➻ *KETERANGAN* : ${anu.result.keterangan}\n`
                   reply(anu1)
                   break
                   case 'estetikpic':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   reply(reply(ind.wait()))
                   anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result.result)
                   client.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: freply})
                   break
                   case 'memeindo':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   reply(reply(ind.wait()))
                   anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result)
                   client.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: freply})
                   break
                   case 'darkjokes':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   reply(reply(ind.wait()))
                   anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result)
                   client.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: freply})
                   break
                   case 'nickff':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
		           if (!isPrem) return reply(nyz.prem1(command))
                   anu = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`)
                   anu1 = `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   reply(anu1)
                   break
                   case 'tahta':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} client*`)
                   F = body.slice(7)
                   reply(reply(ind.wait()))
                   anu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${F}&apikey=apivinz`)
                   client.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: freply})
                   break
                   case 'neon2':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} client*`)
                   F = body.slice(7)
                   reply(reply(ind.wait()))
                   anu = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: freply})
                   break                    
                   case 'wall':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} client*`)
                   F = body.slice(6)
                   reply(reply(ind.wait()))
                   anu = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: freply})
                   break   
                   case 'wolf':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} client*`)
                   F = body.slice(6)
                   reply(reply(ind.wait()))
                   anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=rimurubotz&text2=${F}`)
                   client.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: freply})
                   break 
                   case 'tfire':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} client*`)
                   F = body.slice(7)
                   reply(reply(ind.wait()))
                   anu = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${F}&apikey=apivinz`)                   
                   client.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: freply})
                   break                
                   case 'ytgold':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
		           if (!isPrem) return reply(nyz.prem1(command))
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} client*`)
                   F = body.slice(8)
                   reply(reply(ind.wait()))
                   anu = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${F}&apikey=apivinz`)
                   client.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: freply})
                   break
                   case 'ytsilver':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
		           if (!isPrem) return reply(nyz.prem1(command))
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} client*`)
                   F = body.slice(10)
                   reply(reply(ind.wait()))
                   anu = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${F}&apikey=apivinz`)
                   client.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: freply})
                   break
                   case 't3d':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} client*`)
                   F = body.slice(5)
                   reply(reply(ind.wait()))
                   anu = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: freply})
                   break
                   case 'logoa':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} client&chan*`)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(reply(ind.wait()))
                   anu = await getBuffer(`https://api.zeks.xyz/api/logoaveng?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   client.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: freply})
                   break
                   case 'pornhub':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} client&chan*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(reply(ind.wait()))
                   anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   client.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: freply})
                   break
                   case 'marvel':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} client&chan*`)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(reply(ind.wait()))
                   anu = await getBuffer(`https://api.zeks.xyz/api/marvellogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   client.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: freply})
                   break
                   case 'leavest':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} client*`)
                   F = body.slice(9)
                   reply(reply(ind.wait()))
                   anu = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${F}&apikey=apivinz`)
                   client.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: freply})
                   break                    
                   case 'phcoment':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
		           if (!isPrem) return reply(nyz.prem1(command))
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} client&chan*`)
                   var F = body.slice(10)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(reply(ind.wait()))
                   anu = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                   client.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: freply})
                   break
                   case 'nulis':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} client*`)
                   F = body.slice(7)
                   reply(reply(ind.wait()))
                   anu = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${F}&apikey=apivinz`)
                   client.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: freply})
                   break
                   case 'shortener':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command}https://link*`)
                   F = body.slice(11)
                   reply(reply(ind.wait()))                   
                   anu = await fetchJson(`https://api.zeks.xyz/api/sid-shortener?apikey=apivinz&url=${F}`)
                   anu1 = `➻ *SHORT* : ${anu.short}\n`
                   anu1 += `➻ *LONG* : ${anu.long}\n`
                   anu1 += `➻ *DATE* : ${anu.created_at.date}\n`
                   anu1 += `➻ *TYPE* : ${anu.created_at.timezone_type}\n`
                   anu1 += `➻ *ZONA* : ${anu.created_at.timezone}\n`
                   reply(anu1)
                   break 
                   case 'urlshort':  
                   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await confirmLIMIT(sender, [angka])	
		           if (!isPrem) return reply(nyz.prem1(command))
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command}https://link*`)
                   F = body.slice(10)
                   reply(reply(ind.wait()))                                      
                   anu = await fetchJson(`https://api.zeks.xyz/api/urlshort-all?apikey=apivinz&url=${F}`)
                   anu1 = `➻ *SATU* : ${anu.result_1}\n`
                   anu1 += `➻ *DUA* : ${anu.result_2}\n`
                   anu1 += `➻ *TIGA* : ${anu.result_3}\n`
                   reply(anu1)
                   break

     	                                          
                              
                   
/* ==================================================[ TERRRRRR-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                  
                  
				   			  
                                                                                                                                                                                                                                                       
                          
                                        				                                                                                                                                                                              
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                    
                    
                    case 'toimg':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka]) 
					reply(reply(ind.wait()))
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media) 
					buffer = fs.readFileSync(ran)
			        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'nihh kack'})
				    fs.unlinkSync(ran)
					})					
			    	break 
                    case 'readmore':  
			    	case 'more':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!q.includes('|')) return  reply(`GUNAKAN | UNTUK PEMBATAS`)
                    const text1 = q.substring(0, q.indexOf('|') - 0)
                    const text2 = q.substring(q.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                    
                    
                   
                    case 'asupan':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
		            if (!isPrem) return reply(nyz.prem1(command))
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/lasegar?APIKEY=${apixteam}`)
                    anu1 = `➻ *NAMA* : ${anu.result.username}\n`                                                     
                    anu1 = `➻ *USERNAME* : ${anu.result.full_name}\n`
                    anu1 += `➻ *ID* : ${anu.result.profile_id}\n`
                    anu1 += `➻ *BIO* : ${anu.result.biography}\n`
                    anu1 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu1 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu1 += `➻ *URL* : ${anu.result.external_url}\n`
                    anu1 += `➻ *PRIVATE* : ${anu.result.is_private}\n`
                    anu1 += `➻ *VERIFY* : ${anu.result.is_verified}\n`
                    anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                    anu1 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu1 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu1 += `➻ *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `➻ *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    client.sendMessage(from, anu2, image, {caption: anu1, quoted: mek}).catch(e => {
	                reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
                    console.log(e)
	                })
                    break
                    case 'asupan1':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
		            if (!isPrem) return reply(nyz.prem1(command))
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/ptl?APIKEY=${apixteam}`)
                    anu1 = `➻ *NAMA* : ${anu.result.username}\n`                                                     
                    anu1 += `➻ *USERNAME* : ${anu.result.full_name}\n`
                    anu1 += `➻ *ID* : ${anu.result.profile_id}\n`
                    anu1 += `➻ *BIO* : ${anu.result.biography}\n`
                    anu1 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu1 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu1 += `➻ *URL* : ${anu.result.external_url}\n`
                    anu1 += `➻ *PRIVATE* : ${anu.result.is_private}\n`
                    anu1 += `➻ *VERIFY* : ${anu.result.is_verified}\n`
                    anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                    anu1 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu1 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu1 += `➻ *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `➻ *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    client.sendMessage(from, anu2, image, {caption: anu1, quoted: mek})
                    break
                    case 'asupan2':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
		            if (!isPrem) return reply(nyz.prem1(command))
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/wibu?APIKEY=${apixteam}`)
                    anu1 = `➻ *NAMA* : ${anu.result.username}\n`                                                     
                    anu1 += `➻ *USERNAME* : ${anu.result.full_name}\n`
                    anu1 += `➻ *ID* : ${anu.result.profile_id}\n`
                    anu1 += `➻ *BIO* : ${anu.result.biography}\n`
                    anu1 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu1 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu1 += `➻ *URL* : ${anu.result.external_url}\n`
                    anu1 += `➻ *PRIVATE* : ${anu.result.is_private}\n`
                    anu1 += `➻ *VERIFY* : ${anu.result.is_verified}\n`
                    anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                    anu1 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu1 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu1 += `➻ *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `➻ *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    client.sendMessage(from, anu2, image, {caption: anu1, quoted: mek})
                    break
                    case 'ngakak':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    anu = await getBuffer(`https://api.xteam.xyz/asupan/darkjoke?APIKEY=${apixteam}`)
                    client.sendMessage(from, anu, image, {quoted: mek})
                    break
                    case 'nulis1':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nama & kelas & nulis*`)
                    var F = body.slice(8)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
                    reply(reply(ind.wait()))
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?nama=${F1}&kelas=${F2}&text=${F3}&APIKEY=${apixteam}`)
                    client.sendMessage(from, anu, image, {caption: `nih kak`, quoted: mek})
                    break
                    case 'nulis2':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(reply(ind.wait())) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${F}&APIKEY=${apixteam}`)
                    client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply}) 
                    break 
                    case 'nulis3':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(reply(ind.wait())) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${F}&APIKEY=${apixteam}`)
                    client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply}) 
                    break 
                    case 'nulis4':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(reply(ind.wait())) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?text=${F}&APIKEY=${apixteam}`)
                    client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply}) 
                    break 
                    case 'nulis5':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(reply(ind.wait())) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis5?text=${F}&APIKEY=${apixteam}`)
                    client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply}) 
                    break 
                    case 'nulis6':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(reply(ind.wait())) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${F}&APIKEY=${apixteam}`)
                    client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply}) 
                    break                     
                    case 'video1':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(reply(ind.wait())) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/poly?text=${F}&APIKEY=${apixteam}`)
                    client.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: freply}) 
                    break
                    case 'video2':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(reply(ind.wait())) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/bold?text=${F}&APIKEY=${apixteam}`)
                    client.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: freply}) 
                    break
                    case 'video3':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(reply(ind.wait())) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/glowing?text=${F}&APIKEY=${apixteam}`)
                    client.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: freply}) 
                    break
                    case 'video4':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(reply(ind.wait())) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/colorful?text=${F}&APIKEY=${apixteam}`)
                    client.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: freply}) 
                    break
                    case 'video5':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(reply(ind.wait())) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/army?text=${F}&APIKEY=${apixteam}`)
                    client.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: freply}) 
                    break
                    case 'video6':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(reply(ind.wait())) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/retro?text=${F}&APIKEY=${apixteam}`)
                    client.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: freply}) 
                    break                     
                    
  /* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=======================================================[ API XTEAM ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    case 'ramalnomer':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 08123456789*`)
                    F = body.slice(12)
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/nomorhoki?no=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *RAMAL* : ${anu.result}`
                    reply(anu1)
                    break
                    case 'ramalcinta':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 			 	    
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalancinta?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
                    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`
                    anu1 += `➻ *TANGGAL2* : ${anu.result.positif}\n`
                    anu1 += `➻ *NEGATIF* : ${anu.result.negatif}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
                    anu2 = await getBuffer(anu.result.img)
                    client.sendMessage(from, anu2, image, {caption: anu1, quoted: mek})
                    break
                    case 'ramaljodoh':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalanjodoh?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`                     
                    anu1 += `➻ *KALKULASI* : ${anu.result.kalkulasi}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
			 	    case 'jodohbali':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
			 	    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(11)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalanjodohbali?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`                     
                    anu1 += `➻ *KALKULASI* : ${anu.result.kalkulasi}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
			 	    case 'ramalnikah':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
			 	    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
			 	    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalansuamiistri?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
			 	    anu1 += `➻ *SUAMI* : ${anu.result.suami}\n`
			 	    anu1 += `➻ *TANGGAL* : ${anu.result.tgl_suami}\n`
			 	    anu1 += `➻ *ISTRY* : ${anu.result.istri}\n`
			 	    anu1 += `➻ *TANGGAL* : ${anu.result.tgl_istri}\n`
			 	    anu1 += `➻ *TABEL* : ${anu.result.tabel}\n`
			 	    anu1 += `➻ *INFO* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
                    case 'taksirmimpi':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} di gigit ular`)
                    F = body.slice(9)
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/tafsirmimpi?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *HASIL* : ${anu.result}`
                    reply(anu1)
                    break
                    case 'suit':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    F = body.slice(6)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} batu`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/suit?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `➻ *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `➻ *HASIL* : ${anu.hasil}\n`
                    anu1 += `➻ *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break
                    case 'tebakangka':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    F = body.slice(12)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 9`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakangka?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `➻ *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `➻ *HASIL* : ${anu.hasil}\n`
                    anu1 += `➻ *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break
                    case 'tebakbendera':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakbendera?APIKEY=${apixteam}`)
                    anu1 = `➻ *SOAL* : INI BENDERA APA?? ${anu.bendera} TEBAK!! WAKTU 60 DETIK`
                    anu2 = `➻ *JAWABAN* : ${anu.jawaban} SELAMAT YG TELAH MENJAWAB BENAR`
                    setTimeout( () => {
                    client.sendMessage(from, anu1, text, {quoted: freply})
                    }, 1)
                    setTimeout( () => {
                    costum('50 DETIK LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 DETIK LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 DETIK LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 DETIK LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 DETIK LAGI', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    client.sendMessage(from, anu2, text,{quoted: freply})                   
                    }, 60000)                                                                          
                    break     
                    case 'kata':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} anjayy cok hayukkkk&by nama kamu`)
			 	    var F = body.slice(6)
			        var F1 = F.split("&")[0];
			        var F2 = F.split("&")[1];
                    anu = await getBuffer(`https://api.xteam.xyz/quotemaker?text=${F1}&wm=${F2}&APIKEY=${apixteam}`)
                    client.sendMessage(from, anu, image, {quoted: mek})
                    break
                                                                                  
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*====================================================[ API?? LINDOWAPI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                     
                      
                     case 'attp':  
                     if (!isRegistered) return reply( ind.noregis())
			         if (isLimit(sender)) return
			         await confirmLIMIT(sender, [angka])
                     if (args.length < 1) return reply('Kasih teks lah omm')
                     ini = body.slice(6)
                     atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ini)}`)
                     client.sendMessage(from, atetepe, sticker, {quoted: mek})
                     break                     
                    
                     
                     
                                                                                                                          
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 

                   	
					 
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ REST API FRE ]==============================================================*/                  	    
/*====================================================[ CASE LOLTEAM ]==============================================================*/                    	 
        					
					
                  
                    
                    case 'info1':
                    reply(nyz.info1())
                    break
                    case 'info2':
                    reply(nyz.info2())
                    break
                    case 'info3':
                    reply(nyz.info3())
                    break
                                      
                                        
                   

					
					case 'ingfo':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])              
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(7)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: `[ *INGFO TERBARU!!!* ]\nDARI : *${pushname}*\nINGFO : *${value}*`,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text, {quoted: freply})					 
					break
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
					
					case 'wanted':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])	 
	                var imgbb = require('imgbb-uploader')
                  	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                reply(reply(ind.wait())) 
	                owgi = await client.downloadAndSaveMediaMessage(ted)
	                tels = body.slice(7)
	                anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	                hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
	                client.sendMessage(from, hehe, image, {quoted:freply})
	               	} else {
	           	    reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
	              	}
	               	break
	               	
                	case 'gtav':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])	 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                reply(reply(ind.wait()))
                  	owgi = await client.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(7)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
	                client.sendMessage(from, hehe, image, {quoted:freply})
	                } else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
	                }
	                break
                 	case 'facebookpage':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])	 
	                var imgbb = require('imgbb-uploader')
                 	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                reply(reply(ind.wait()))
                  	owgi = await client.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	                client.sendMessage(from, hehe, image, {quoted:freply})
	                } else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                  	}
	                break
	                case 'costumwp':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])	 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                reply(reply(ind.wait()))
                  	owgi = await client.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	                client.sendMessage(from, hehe, image, {quoted:freply})
	                } else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
	                }
                	break
                	case 'pantaimalam':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])	 
                 	var imgbb = require('imgbb-uploader')
                	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                reply(reply(ind.wait()))
                  	owgi = await client.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
                    client.sendMessage(from, hehe, image, {quoted: freply})
                 	} else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                  	}
                	break
	                case 'pensil':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])	 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                reply(reply(ind.wait()))
                  	owgi = await client.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	                client.sendMessage(from, hehe, image, {quoted:freply})
                 	} else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                 	}
                 	break 
	                case 'bakar':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])	 
                 	var imgbb = require('imgbb-uploader')
                 	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
                 	 reply(reply(ind.wait()))
                  	owgi = await client.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(7)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
                    client.sendMessage(from, hehe, image, {quoted:freply})
                  	} else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                 	}
                	break
                	case 'crossgun':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])	 
                	var imgbb = require('imgbb-uploader')
	                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                reply(reply(ind.wait()))
                  	owgi = await client.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(7)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	                client.sendMessage(from, hehe, image, {quoted:freply})
                	} else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                  	}
                	break
	 

                   
                    
					
				   
				 
					
                   
			    	
			    	case 'brainly':
			    	if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])  
			    	anu = await fetchJson(`https://xteam.xyz/brainly?soal=${body.slice(9)}&APIKEY=${apixteam}`)
			    	anu1 = `➻ *JAWABAN* : ${anu.jawaban}`
			    	reply(anu1)
			    	break
			    	case 'newsdetik':
			    	if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])  
			    	anu = await fetchJson(`https://xteam.xyz/news/detik?APIKEY=${apixteam}`)
			    	anu1 = `➻ *JUDUL* : ${anu.judul}\n`
			    	anu1 += `➻ *TANGGAL* : ${anu.tanggal}\n`
			    	anu1 += `➻ *URL* : ${anu.url}\n`
			    	anu1 += `➻ *ARTIKEL* : ${anu.artikel}\n`
			    	anu2 = await getBuffer(anu.thumb)
			    	client.sendMessage(from, anu2, image, {caption: anu1, quoted:freply})
			    	break
			    	case 'newskompas':
			    	if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])  
			    	anu = await fetchJson(`https://xteam.xyz/news/kompas?APIKEY=${apixteam}`)
			    	anu1 = `➻ *JUDUL* : ${anu.judul}\n`
			    	anu1 += `➻ *TANGGAL* : ${anu.tanggal}\n`
			    	anu1 += `➻ *URL* : ${anu.url}\n`
			    	anu1 += `➻ *ARTIKEL* : ${anu.artikel}\n`
			    	anu2 = await getBuffer(anu.thumb)
			    	client.sendMessage(from, anu2, image, {caption: anu1, quoted:freply})
			    	break
			    	case 'newsliputan6':
			    	if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])  
			    	anu = await fetchJson(`https://xteam.xyz/news/liputan6?APIKEY=${apixteam}`)
			    	anu1 = `➻ *JUDUL* : ${anu.judul}\n`
			    	anu1 += `➻ *TANGGAL* : ${anu.tanggal}\n`
			    	anu1 += `➻ *URL* : ${anu.url}\n`
			    	anu1 += `➻ *ARTIKEL* : ${anu.artikel}\n`
			    	anu2 = await getBuffer(anu.thumb)
			    	client.sendMessage(from, anu2, image, {caption: anu1, quoted:freply})
			    	break
			    	case 'newstribun':
			    	if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])  
			    	anu = await fetchJson(`https://xteam.xyz/news/tribun?APIKEY=${apixteam}`)
			    	anu1 = `➻ *JUDUL* : ${anu.judul}\n`
			    	anu1 += `➻ *TANGGAL* : ${anu.tanggal}\n`
			    	anu1 += `➻ *URL* : ${anu.url}\n`
			    	anu1 += `➻ *ARTIKEL* : ${anu.artikel}\n`
			    	anu2 = await getBuffer(anu.thumb)
			    	client.sendMessage(from, anu2, image, {caption: anu1, quoted:freply})
			    	break
	                case 'jalantikus':
	                if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await confirmLIMIT(sender, [angka])  
			    	anu = await fetchJson(`https://xteam.xyz/news/jalantikus?APIKEY=${apixteam}`)
			    	anu1 = `➻ *JUDUL* : ${anu.judul}\n`
			    	anu1 += `➻ *TANGGAL* : ${anu.tanggal}\n`
			    	anu1 += `➻ *URL* : ${anu.url}\n`
			    	anu1 += `➻ *ARTIKEL* : ${anu.artikel}\n`
			    	anu2 = await getBuffer(anu.thumb)
			    	client.sendMessage(from, anu2, image, {caption: anu1, quoted:freply})
			    	break			    	
			    	
					
					 
                                                               
                                                                                                                                                                             
                    
                     
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ ANTI RANDOM ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    
                    
                    
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 				    

                     
                    if (body.startsWith(`${prefix}${command}`)) {                    
                    anu1 = `─────────────────\n`
                    anu1 += `MAAF *${pushname}* ${notc1} TAPI\n`
                    anu1 += `FITUR *${command}* TIDAK DAPAT\n`
                    anu1 += `KAMI TEMUKAN DI *${prefix}menu*\n`
                    anu1 += `─────────────────`
                    reply(anu1)
                    }                                       	
              }   
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		   reply('ERROR ATAU APIKEY UNVALID')
		}
	})
}
starts() 