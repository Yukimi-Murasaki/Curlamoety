ItemEvents.rightClicked('curlamoety:chlorophium_ingot',event=>{
    let {item,hand,player,level} = event
    let {x,y,z} = player
    if(hand != "OFF_HAND")return;
    let mainHandItem = player.mainHandItem
    if(mainHandItem.hasTag('forge:tools')||mainHandItem.hasTag('forge:armors')){
        if(!mainHandItem.hasEnchantment('minecraft:mending',1)){
            level.runCommandSilent(`/enchant @s minecraft:mending`)
            level.playSound(null,x,y,z,'minecraft:block.anvil.use','players',1,1)
            item.count --
        }
    }
})