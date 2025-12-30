module.exports = {
    start(conn){
        conn.ev.on('group-participants.update', async (update)=>{
            const group = update.jid;
            const participants = update.participants;
            participants.forEach(async p=>{
                if(update.action==='add') await conn.sendMessage(group,{text:`Welcome ${p.split('@')[0]}! 🎉`});
                if(update.action==='remove') await conn.sendMessage(group,{text:`Goodbye ${p.split('@')[0]}! 😢`});
            });
        });
    }
};