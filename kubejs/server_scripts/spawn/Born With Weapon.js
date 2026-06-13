EntityEvents.spawned(event=>{
    let entity=event.entity
    
    
    if(entity.type == 'minecraft:wither_skeleton'){
        if(Math.random(1)<0.2){
            entity.setItemSlot("mainhand","curlamoety:wither_flamberge")
        }
    }
})