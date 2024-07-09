const Discord = require("discord.js")

module.exports = async bot => {

    let commands = [];

    bot.commands.forEach(command => {

        let slashcommand = new Discord.SlashCommandBuilder()
        .setName(command.name)
        .setDescription(command.description)
        .setDMPermission(command.dm)
        .setDefaultMemberPermissions(command.permission === "Aucune" ? null : command.permission)

        if(command.options?.length >= 1) {
            for(let i = 0; i < command.options.length; i++) {
                slashcommand[`add${command.options[i].type.slice(0,1).toLowerCase() + command.options[i].type.slice(1, command.options[i].type.length)}Option`](option => option.setName(command.options[i].name).set)
            }
        }
    })
}