const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

module.exports = {
    async downloadMedia(conn, message){
        try{
            const stream = await conn.downloadMediaMessage(message);
            const fileName = `media_${Date.now()}.jpg`; 
            fs.writeFileSync(path.join(__dirname, '..', fileName), stream);
            console.log(chalk.green('✅ Media saved as', fileName));
        }catch(e){console.log(chalk.red('❌ Media download failed:', e.message));}
    },
    async uploadMedia(conn, jid, filePath){
        try{
            const data = fs.readFileSync(filePath);
            await conn.sendMessage(jid, { image: data, caption: 'Uploaded via bot' });
            console.log(chalk.green('✅ Media uploaded:', filePath));
        }catch(e){console.log(chalk.red('❌ Media upload failed:', e.message));}
    }
};