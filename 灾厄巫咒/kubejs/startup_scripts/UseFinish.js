ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Finish",event=>{
    let item = event.getItem()
    let entity = event.getEntity()
    if(!entity.isPlayer())return;
    let {x,y,z} = entity
    if(item.id == 'curlamoety:knowledge_toast'){
        entity.level.playSound(null,x,y,z,'minecraft:entity.experience_orb.pickup','players',0.2,1)
        entity.giveExperiencePoints(25)
        if(Math.random(1)<0.15){
            entity.give('minecraft:experience_bottle')
        }
    }else if(item.id == 'curlamoety:sword_cookie'){
        entity.persistentData.sword_cookie = 1
    }else if(item.id == 'curlamoety:ascension_pizza_slice'){
        entity.level.playSound(null,x,y,z,'block.beacon.activate','players',1,1)
        entity.persistentData.ascension_pizza = 1
    }
})