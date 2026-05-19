EntityEvents.hurt("cataclysm:scylla",event=>{
    let entity = event.entity;
    if(entity.persistentData.angry == 1){
        entity.potionEffects.add("minecraft:strength",-1,4)
        entity.potionEffects.add("minecraft:resistance",-1,1)
        entity.potionEffects.add("minecraft:speed",-1,1)
        entity.removeEffect("minecraft:weakness")
    }
})