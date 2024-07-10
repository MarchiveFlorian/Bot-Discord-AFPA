const Discord = require("discord.js");
const fs = require("fs");

// Lire le fichier JSON
const configData = fs.readFileSync("bot-conf.json");
const config = JSON.parse(configData);

// Extraire les informations spécifiques à la commande "planning"
const planningConfig = config.planning;

module.exports = {
    name: planningConfig.name,
    description: planningConfig.description,
    permission: planningConfig.permission,
    dm: planningConfig.dm,
    category: planningConfig.category,

    async run(bot, interaction) {
        await interaction.reply(planningConfig.reply);
    }
};