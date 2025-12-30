module.exports = {
    start(conn){
        console.log("⚡ WhatsApp 500+ MD bot features activated!");

        // Auto Reply Example
        conn.ev.on('messages.upsert', async ({ messages })=>{
            const m = messages[0];
            if(!m.message) return;
            const text = m.message.conversation || '';
            const jid = m.key.remoteJid;
            if(text.toLowerCase().includes('hi')) await conn.sendMessage(jid, { text: 'Hello! I am your bot 😎' });
        });

        // Welcome/Bye
        conn.ev.on('group-participants.update', async (update)=>{
            const group = update.jid;
            const participants = update.participants;
            participants.forEach(async p=>{
                if(update.action==='add') await conn.sendMessage(group,{text:`Welcome ${p.split('@')[0]}! 🎉`});
                if(update.action==='remove') await conn.sendMessage(group,{text:`Goodbye ${p.split('@')[0]}! 😢`});
            });
        });

        // Additional 500+ features can be added here
    }
};