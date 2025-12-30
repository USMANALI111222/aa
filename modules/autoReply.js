module.exports = {
    start(conn){
        conn.ev.on('messages.upsert', async ({ messages })=>{
            const m = messages[0];
            if(!m.message) return;
            const text = m.message.conversation || '';
            const jid = m.key.remoteJid;

            if(text.toLowerCase() === 'hi') await conn.sendMessage(jid, { text: 'Hello! 🤖' });
            if(text.toLowerCase() === 'bye') await conn.sendMessage(jid, { text: 'Goodbye! 👋' });
        });
    }
};