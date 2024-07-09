const Discord = require("discord.js")

module.exports = {

    name: "taiga",
    description: "Affiche le lien taiga de notre kanban",
    permission: "Aucune",
    dm: true,
    category: "lien",

    async run(bot, message) {

        await message.reply(`Voici le lien vers Taiga: \n https://tree.taiga.io/project/ludovic-esperce-cda-begles/kanban`)
    }
}