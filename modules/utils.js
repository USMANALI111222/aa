const fs = require('fs');
const chalk = require('chalk');

module.exports = {
    async autoInfo(conn){
        const me = conn.user.jid;
        console.log(chalk.blue("📌 AUTO INFO"));
        console.log("• Your Number:", me.split("@")[0]);
        const groups = conn.chats.array.filter(c => c.jid.includes('@g.us'));
        groups.forEach((g,i)=>console.log(`${i+1}) ${g.name}`));
        fs.writeFileSync("auto_info.json", JSON.stringify({number: me.split("@")[0], groups: groups.map(g=>g.name)}, null, 2));
        console.log(chalk.green("✅ Info saved to auto_info.json"));
    }
};