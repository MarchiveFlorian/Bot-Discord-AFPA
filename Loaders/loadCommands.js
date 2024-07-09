const fs = require("fs")


module.exports = async bot => {

    fs.readdirSync("./Commandes").filter(ƒ => ƒ.endsWith(".js")).forEach(async ƒile => {

        let command = require(`../Commandes/${ƒile}`)
        if(!command.name || typeof command.name !== "string") throw new TypeError(`La commande ${ƒile.slice(0, ƒile.length - 3)} n'a pas de nom !`)
        bot.commands.set(command.name, command)
        console.log(`Commande ${ƒile} chargée avec succès !`)
    })
}