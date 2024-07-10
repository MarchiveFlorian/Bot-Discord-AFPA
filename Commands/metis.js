const Discord = require("discord.js");
const fs = require("fs");

// Lire le fichier JSON
const configData = fs.readFileSync("bot-conf.json");
const config = JSON.parse(configData);

// Extraire les informations spécifiques à la commande "metis"
const metisConfig = config.metis;

module.exports = {
    name: metisConfig.name,
    description: metisConfig.description,
    permission: metisConfig.permission,
    dm: metisConfig.dm,
    category: metisConfig.category,

    async run(bot, message) {
        await message.reply(metisConfig.reply);
    }
};