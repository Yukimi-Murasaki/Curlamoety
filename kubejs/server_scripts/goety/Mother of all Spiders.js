EntityEvents.death("minecraft:warden",event=>{
    let source = event.source
    if(source == null)return;
    let actual = source.actual
    if(actual!=null&&actual.type == "goety:brood_mother_servant"){
        if(actual instanceof $Summoned){
            if(actual.persistentData.moas==1)return;
            let owner = actual.getOwner()
            let name = Text.translate("entity.goety.brood_mother_servant")
            if(actual.customName!=null){
                let name = actual.customName.getString()
            }
            if(owner.isPlayer()){
                owner.tell(Text.of(name).append(Text.translate("curlamoety.lang.has_finished")).append(Text.darkPurple("[")).append(Text.darkPurple(Text.translate("goetydelight.advancement.get_parasitized_warden.title"))).append(Text.darkPurple("]")))
            }
            let {x,y,z} = actual
            event.level.playSound(null,x,y,z,"minecraft:ui.toast.challenge_complete","players",1,1)
            actual.persistentData.moas = 1
            actual.setCustomName(Text.green(Text.translate("curlamoety.lang.mother_of_all_spider")).bold())
            actual.modifyAttribute("minecraft:generic.max_health","moas_modify",1,"multiply_total")
            actual.setHealth(actual.getMaxHealth())
            actual.potionEffects.add("goety:rallying",-1,4)
            actual.potionEffects.add("goety:leeching",-1,0)
            actual.potionEffects.add("goetydelight:warden",-1,0)
        }
    }
})

EntityEvents.hurt(event=>{
    let {entity,source} = event
    if(entity == null || !entity.isLiving())return
    if(source == null)return;
    let actual = source.actual
    if(actual != null && actual.type == "goety:brood_mother_servant"){
        if(actual.persistentData.moas == 1){
            actual.potionEffects.add("goety:rallying",-1,4)
            actual.potionEffects.add("goety:leeching",-1,0)
            actual.potionEffects.add("goetydelight:warden",-1,0)
            if(!actual.potionEffects.isActive("curlamoety:generic_cooldown")){
                actual.potionEffects.add("curlamoety:generic_cooldown",1200,0)
                actual.potionEffects.add("minecraft:invisibility",200,0)
                actual.potionEffects.add("enigmaticdelicacy:fading",200,0)
                let x = actual.getX()
                let y = actual.getY()
                let z = actual.getZ()
                let summon = event.level.createEntity("goety:spider_servant")
                summon.setPosition(x,y,z)
                summon.spawn()
                summon.setOwnerId(actual.getOwnerId())
                summon.setCustomName(Text.translate("curlamoety.lang.mother_guard"))
                summon.potionEffects.add("minecraft:resistance",1200,3)
                summon.potionEffects.add("minecraft:strength",1200,9)
                summon.potionEffects.add("minecraft:health_boost",1200,9)
                summon.setHealth(summon.getMaxHealth())
            }
        }
    }
})

//重召
EntityEvents.spawned("goety:brood_mother_servant",event=>{
    let entity = event.entity;
    if(entity.customName.getString() == Text.translate("curlamoety.lang.mother_of_all_spider").getString()){
        entity.persistentData.moas = 1
    }
    if(entity.persistentData.moas == 1){
        entity.modifyAttribute("minecraft:generic.max_health","moas_modify",1,"multiply_total")
        entity.potionEffects.add("goety:rallying",-1,4)
        entity.potionEffects.add("goety:leeching",-1,0)
        entity.potionEffects.add("goetydelight:warden",-1,0)
    }
})

//命名牌
ItemEvents.entityInteracted('minecraft:name_tag',event=>{
    let{target,player,item} = event;
    let nametag = item.getDisplayName().getString()
    if(target.type == 'goety:brood_mother_servant'){
        if(target.persistentData.moas == 1){
            player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.moas_deny")))
            event.cancel()
        }else{
            let checkName = "[" +Text.translate("curlamoety.lang.mother_of_all_spider").getString() + "]"
            if(nametag == checkName){
                player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.moas_fake")))
                event.cancel()
            }
        }
    }
})