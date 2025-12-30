module.exports = {
    showAll(conn){
        const msgs = conn.chats.array.filter(c=>c.jid.includes('@g.us') || c.jid.includes('@s.whatsapp.net'));
        msgs.forEach(m=>{
            console.log(`[MSG] ${m.name || m.jid}`);
        });
        console.log("✔ All messages logged");
    }
};