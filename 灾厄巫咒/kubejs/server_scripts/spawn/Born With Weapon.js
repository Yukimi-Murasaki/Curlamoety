EntityEvents.spawned(event=>{
    let entity=event.entity
    if(entity.type == 'minecraft:zombie'||entity.type == 'minecraft:husk'||entity.type == 'goetyawaken:frozen_zombie'||entity.type == 'goetyawaken:jungle_zombie'||entity.type == 'goety:frayed' ){
        if(Math.random(1)<0.2){
            entity.setItemSlot("mainhand","curlamoety:zombie_arm")
        }
    }
    if(entity.type == 'minecraft:skeleton'||entity.type == 'minecraft:stray'||entity.type == 'trials:bogged'||entity.type == 'goety:parched'){
        if(Math.random(1)<0.2){
            entity.setItemSlot("mainhand","curlamoety:skeleton_leg")
        }
    }
    if(entity.type == 'minecraft:wither_skeleton'){
        if(Math.random(1)<0.2){
            entity.setItemSlot("mainhand","curlamoety:wither_flamberge")
        }
    }
})