const fs = require("fs")


module.exports = async bot => {

    fs.readdirSync("./Events").filter(ƒ => ƒ.endsWith(".js")).forEach(async ƒile => {

        let event = require(`../Events/${ƒile}`)
        bot.on(ƒile.split(".js").join(""), event.bind(null, bot))
        console.log(`Evènement ${ƒile} chargé avec succès !`)
    })
}