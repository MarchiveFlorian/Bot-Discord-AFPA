const Discord = require("discord.js");
const fs = require("fs");

// Lire le fichier JSON
const configData = fs.readFileSync("bot-conf.json");
const config = JSON.parse(configData);

// Extraire les informations spécifiques à la commande "taiga"
const taigaConfig = config.taiga;

module.exports = {
    name: taigaConfig.name,
    description: taigaConfig.description,
    permission: taigaConfig.permission,
    dm: taigaConfig.dm,
    category: taigaConfig.category,

    async run(bot, message) {
        await message.reply(taigaConfig.reply);
    }
};