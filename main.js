const Discord = require('discord.js')
const client = new Discord.Client()
const ms = require("ms");
const timestamp = require("console-timestamp");
let prefix = "sb."

// made by Tweek with ♥ (https://github.com/SeenKid/) | Credit me if any modifications are done or if you share this file.

/* 
Actually need to add things and update this repo
Bot got updated since time of this.
You can still use this base !
*/ 
client.login("")

client.on("ready", async () => {
    setInterval(changing_status, 15000);
    var s = client.guilds.size
            function changing_status() {
              let status = ["on " + s + " servers", "Prefix : sb.", "Made by TweekLG 💝"]
              let random = status[Math.floor(Math.random() * status.length)]
              client.user.setActivity(random)
        }
})

client.on('message', message => {
	if (message.content === prefix + "help") {
		message.reply("Besoin d'aide ? D'accord !!\nMon préfix : **sb.**\nMes commandes : \n\n1. **sb.ping**\n2. **sb.support**\n3. **sb.serverinfo**\n4. **sb.kick @user** (EN COURS)")
	}
})

client.on('message', message => {
if (message.content === prefix + "serverinfo") {
	message.reply(`\n------------------------------------\n***Server name:*** ${message.guild.name}\n***Total members:*** ${message.guild.memberCount}\n***Region:*** ${message.guild.region}\n***Owner:*** ${message.guild.owner}\n***Create date :*** ${message.guild.createdAt}\n------------------------------------`);
}
})

client.on('message', message => {
	if (message.content === prefix + "support") {
		message.reply("Voici le serveur de support du bot : https://discord.gg/xFJgprtu9z :D")
		}
	})


client.on('message', message => {
if (message.content === prefix + "rs") {

	let tweek = message.author.id == '692521133345472595';

if (!tweek)
        return;
    else 
    	
message.channel.send('Restarting... :white_check_mark:').then(m => {
        client.destroy().then(() => {
          client.login('');
        });
      });	
    }
})


client.on('message', message => {
if (message.content === prefix + "sd") {

	let tweek = message.author.id == '692521133345472595';

if (!tweek)
        return;
    else 

message.channel.send('Bot shutting down... Goodbye ! :zzz: :white_check_mark:').then(m => {
        client.destroy()
      });	
}
})

client.on('message', message => {
if (message.content === prefix + "ping") {
        message.channel.send("Pinging... :globe_with_meridians:").then(m =>{
            var ping = m.createdTimestamp - message.createdTimestamp;
            var botPing = Math.round(client.pi);

            m.edit(`Pong ! Mon ping est : \n-***${ping}ms*** :globe_with_meridians:`);
        });
    }
})


client.on('message', message => {
			if (message.content === "toz") {
                message.reply("Mec gentil 😀 réservé, parfois un peu chiant mais c'est amusant 😁 Reste toi même bg");
            }
			if (message.content === "gus") {
                message.reply("super sympa, gentille ! :medal:  meilleur ficus de l'année 2021 :medal:");
            }
            if (message.content === "cudder") {
                message.reply("Super gentil. Anti-flemme humain ! https://discord.gg/TVv7z4jNcX");
            }
            if (message.content === "bonne nuit") {
                message.reply("Lorsqu'une chose s'éloigne de nous, nous en réalisons la valeur. La nuit nous aide à réaliser la valeur de la lumière. Chaque aube vient avec une nouvelle opportunité pour nous. Dormez-vous et commencez votre journée avec un esprit frais. Bonne nuit, fais de beaux rêves. :hearts: :crescent_moon: ");
            }
            if (message.content === "bn") {
                message.reply("Lorsque vous fermez les yeux ce soir, essayez de visualiser ce que vous voulez que votre avenir soit. Pensez à tous les détails possibles pour que vous puissiez faire de vos rêves une réalité. Bonne nuit. :hearts: :crescent_moon: ");
            }
            if (message.content === "bonjour") {
                message.reply("Bonjour ! :white_sun_small_cloud: Un nouveau jour est arrivé, tout comme un nouvel espoir. Que la journée soit remplie de bonheur. Bonjour à toi ! :hearts:");
            }
            if (message.content === "BONJOUR") {
                message.reply("Bonjour ! :white_sun_small_cloud: Un nouveau jour est arrivé, tout comme un nouvel espoir. Que la journée soit remplie de bonheur. Bonjour à toi ! :hearts:");
            }
            if (message.content === "bjr") {
                message.reply("Bonjour ! :white_sun_small_cloud: Avec l'aube du jour, l'obscurité s'est estompée. Puisse la journée vous apporter un optimisme renouvelé et la détermination d'atteindre de nouveaux sommets. :hearts:");
            }
            if (message.content === "Bjr") {
                message.reply("Bonjour ! :white_sun_small_cloud: Avec l'aube du jour, l'obscurité s'est estompée. Puisse la journée vous apporter un optimisme renouvelé et la détermination d'atteindre de nouveaux sommets. :hearts:");
            }
            if (message.content === "BJR") {
                message.reply("Bonjour ! :white_sun_small_cloud: Avec l'aube du jour, l'obscurité s'est estompée. Puisse la journée vous apporter un optimisme renouvelé et la détermination d'atteindre de nouveaux sommets. :hearts:");
            }
            if (message.content === "Bonjour") {
                message.reply("Bonjour ! :white_sun_small_cloud: Un nouveau jour est arrivé, tout comme un nouvel espoir. Que la journée soit remplie de bonheur. Bonjour à toi ! :hearts:");
            }
            if (message.content === "Bn") {
                message.reply("Lorsque vous fermez les yeux ce soir, essayez de visualiser ce que vous voulez que votre avenir soit. Pensez à tous les détails possibles pour que vous puissiez faire de vos rêves une réalité. Bonne nuit. :hearts: :crescent_moon: ");
            }
            if (message.content === "BN") {
                message.reply("Lorsque vous fermez les yeux ce soir, essayez de visualiser ce que vous voulez que votre avenir soit. Pensez à tous les détails possibles pour que vous puissiez faire de vos rêves une réalité. Bonne nuit. :hearts: :crescent_moon: ");
            }
            if (message.content === "Bonne nuit") {
                message.reply("Lorsqu'une chose s'éloigne de nous, nous en réalisons la valeur. La nuit nous aide à réaliser la valeur de la lumière. Chaque aube vient avec une nouvelle opportunité pour nous. Endormez-vous et commencez votre journée avec un esprit frais. Bonne nuit, fais de beaux rêves. :hearts: :crescent_moon: ");
            }
            if (message.content === "BONNE NUIT") {
                message.reply("Lorsqu'une chose s'éloigne de nous, nous en réalisons la valeur. La nuit nous aide à réaliser la valeur de la lumière. Chaque aube vient avec une nouvelle opportunité pour nous. Endormez-vous et commencez votre journée avec un esprit frais. Bonne nuit, fais de beaux rêves. :hearts: :crescent_moon: ");
            }
})
