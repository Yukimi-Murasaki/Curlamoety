ClientEvents.tick((event)=>{
    const armorSetKey = global.armorSetKey
    const player = event.player
    if(armorSetKey.consumeClick()){
        player.sendData("global.armorSetKey.consumeClick")
    }
})