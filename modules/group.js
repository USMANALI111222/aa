module.exports = {
    async groupStats(conn){
        const groups = conn.chats.array.filter(c => c.jid.includes('@g.us'));
        console.log('📌 Your Groups Stats:');
        groups.forEach((g,i)=>{
            console.log(`${i+1}) ${g.name} | Members: ${g.participants?.length || 'unknown'}`);
        });
    },
    async poll(conn, groupJid, question, options){
        console.log('📌 Poll triggered:', question, options);
        await conn.sendMessage(groupJid, { text: `Poll: ${question}\nOptions: ${options.join(', ')}` });
    }
};