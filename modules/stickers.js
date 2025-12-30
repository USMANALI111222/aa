const fs = require('fs');
const chalk = require('chalk');

module.exports = {
    async textToSticker(conn, jid, text){
        console.log(chalk.yellow('📌 Creating sticker from text:', text));
        await conn.sendMessage(jid, { text: `Sticker: ${text}` }); 
    },
    async imageToSticker(conn, jid, imagePath){
        console.log(chalk.yellow('📌 Creating sticker from image:', imagePath));
        const img = fs.readFileSync(imagePath);
        await conn.sendMessage(jid, { image: img, caption: 'Sticker' });
    }
};