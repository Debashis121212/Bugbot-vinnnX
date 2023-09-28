const fs = require('fs')
const chalk = require('chalk')

global.owner = ["6289630193133", "6281287093547"] // ganti nomor wa lu
global.bugrup = ["6289630193133"] // ganti nomor wa lu tapi 1 aja

global.ownerName = "VinnnX-OFC"
global.thumb = fs.readFileSync("./image/thumb.png")
global.ownerNumber = "6289630193133"
global.botName = "BOT VinnnX-OFC"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})