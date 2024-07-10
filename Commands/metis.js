const Discord = require("discord.js")

module.exports = {

    name: "metis",
    description: "Affiche l'url vers le site metis",
    permission: "Aucune",
    dm: true,
    category: "lien",

    async run(bot, message) {

        await message.reply(` Voici le lien vers le site Métis : \n https://metis.afpa.fr/login/index.php`)
    }
}