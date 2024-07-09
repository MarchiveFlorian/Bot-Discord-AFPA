const Discord = require("discord.js")

module.exports = {

    name: "stage",
    description: "Affiche les dates de stage",
    permission: "Aucune",
    dm: true,
    category: "lien",

    async run(bot, message) {

        await message.reply(`Les dates de stage sont les suivantes : \n 06 janvier 2025 -> 28 mars 2025`)
    }
}