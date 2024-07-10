const Discord = require("discord.js");
const fs = require("fs");

// Lire le fichier JSON
const configData = fs.readFileSync("bot-conf.json");
const config = JSON.parse(configData);

// Extraire les informations spécifiques à la commande "stage"
const stageConfig = config.stage;

module.exports = {
    name: stageConfig.name,
    description: stageConfig.description,
    permission: stageConfig.permission,
    dm: stageConfig.dm,
    category: stageConfig.category,

    async run(bot, interaction) {
        await interaction.reply(stageConfig.reply);
    }
};