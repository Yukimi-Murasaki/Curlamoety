EntityEvents.hurt("cataclysm:scylla",event=>{
    let entity = event.entity;
    if(entity.persistentData.contains("angry")&&entity.persistentData.getInt("angry") == 1){
        entity.potionEffects.add("minecraft:strength",-1,4)
        entity.potionEffects.add("minecraft:resistance",-1,1)
        entity.potionEffects.add("minecraft:speed",-1,1)
        entity.removeEffect("minecraft:weakness")
    }
})

EntityEvents.hurt("minecraft:player",event=>{
    let {entity,source} = event
    if(!entity)return;
    let type = source.getType()
    if(type == 'inFire'||type == 'onFire'){
        if(global.armorSetMap.get(entity) == "netherite"||global.armorSetMap.get(entity) == "knightmetal"||global.armorSetMap.get(entity) == "yeti"||global.armorSetMap.get(entity) == "fiery"||global.armorSetMap.get(entity) == "ignitium"||global.armorSetMap.get(entity) == "cursium"){
            event.cancel()
        }
    }else if(type == 'explosion.player'){
        if(global.armorSetMap.get(entity) == "cursed_paladin"||global.armorSetMap.get(entity) == "knightmetal"||global.armorSetMap.get(entity) == "fiery"||global.armorSetMap.get(entity) == "yeti"||global.armorSetMap.get(entity) == "ignitium"||global.armorSetMap.get(entity) == "cursium"){
            event.cancel()
        }
    }
})