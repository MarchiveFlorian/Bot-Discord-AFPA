const fs = require("fs")


module.exports = async bot => {

    fs.readdirSync("./Events").filter(ƒ => ƒ.endsWith(".js")).forEach(async ƒile => {

        let command = require(`../Events/${ƒile}`)
        
    })
}