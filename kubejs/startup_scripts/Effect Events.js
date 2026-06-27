let EventResult = Java.loadClass('net.minecraftforge.eventbus.api.Event$Result')
ForgeEvents.onEvent('net.minecraftforge.event.entity.living.MobEffectEvent$Applicable',event=>{
    let entity = event.entity
    let level = entity.level
    let type = entity.getType()
    let {x,y,z} = entity
    let effectInstance = event.getEffectInstance()
    let effect = effectInstance.getEffect()
    let effectID = effectInstance.getDescriptionId()
    if(entity.isPlayer()){
        if(global.armorSetMap.get(entity) == "murasaki"){//紫套装免疫与允许
            if(effect.getCategory() === "HARMFUL"){
                event.setResult(EventResult.DENY);
            }else{
                event.setResult(EventResult.ALLOW);
            } 
        }else if(global.armorSetMap.get(entity) == "champion"){
            if(effect.getCategory() !== "HARMFUL"){
                event.setResult(EventResult.ALLOW);
            }
        }
        if(effectID =='effect.cataclysm.stun'){
            if(entity.isCuriosEquipped('curlamoety:survivor_will')){//
                if(global.stunCdMap.get(entity) == 0){
                    event.setResult(EventResult.DENY)
                    global.stunCdMap.put(entity,300)
                }
            }//else if(entity.isCuriosEquipped('cataclysm:unbreakable_skull')){
                //if(entity.persistentData.stun_cd==0){
                //    event.setResult(EventResult.DENY)
                //    entity.persistentData.stun_cd==400
                //}
            //}
        }else if(effectID == 'effect.enigmaticaddons.pure_resistance'){
            let lv = effectInstance.getAmplifier()
            let time = effectInstance.getDuration()
            if(lv==4){
                event.setResult(EventResult.DENY)
                entity.addEffect(new MobEffectInstance(
                    'enigmaticaddons:pure_resistance',time,3
                ))
                level.playSound(null,x,y,z,'minecraft:block.beacon.deactivate','players',0.3,1)
                entity.setStatusMessage(Text.darkRed(Text.translate('curlamoety.lang.resistance_baned')))
            }
        }else if(effectID == 'minecraft:darkness'||effectID == 'minecraft:blindness'){
            let headItem = entity.getItemBySlot("head")
            if(headItem.id == "cataclysm:ignitium_helmet"||headItem.id == "cataclysm:cursium_helmet"||headItem.id =="twilightforest:fiery_helmet"||headItem.id == "twilightforest:yeti_helmet"){
                event.setResult(EventResult.DENY)
            }
        }
    }
})

//ForgeEvents.onEvent('net.minecraftforge.event.entity.living.MobEffectEvent$Remove')
