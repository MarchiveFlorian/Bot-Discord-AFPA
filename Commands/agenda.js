const Discord = require("discord.js");
const fs = require("fs");

// Lire le fichier JSON
const configData = fs.readFileSync("bot-conf.json");
const config = JSON.parse(configData);

// Extraire les informations spécifiques à la commande "agenda"
const agendaConfig = config.agenda;

module.exports = {
    name: agendaConfig.name,
    description: agendaConfig.description,
    permission: agendaConfig.permission,
    dm: agendaConfig.dm,
    category: agendaConfig.category,

    async run(bot, interaction) {
        await interaction.reply(agendaConfig.reply);
    }
};