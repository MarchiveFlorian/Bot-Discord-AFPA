const Discord = require("discord.js")

module.exports = {

    name: "agenda",
    description: "Affiche le google agenda de la classe'",
    permission: "Aucune",
    dm: true,
    category: "lien",

    async run(bot, message) {

        await message.reply(` Voici le lien vers le Google agenda : \n https://calendar.google.com/calendar/u/0/r?cid=c023aefdff5a41d40bb2fc0843227fcb7b98747443492e7ebadb9133a221818c@group.calendar.google.com&pli=1`)
    }
}