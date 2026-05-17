ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent',event=>{
    let { entity , source , amount } = event
    let level = entity.level
    let {x,y,z} = entity
    if(!entity.isLiving()||entity==null)return;
    if(entity.isPlayer()){
        if( entity.isCuriosEquipped('curlamoety:faded_promise') && entity.persistentData.fade_cd == 0)//褪色免伤
        {
            entity.persistentData.fade_cd = 1200
            entity.persistentData.fade_cast = 0
            level.playSound(null,x,y,z,'minecraft:entity.experience_orb.pickup','players',0.5,1)
            entity.setStatusMessage(Text.gold(Text.translate("curlamoety.lang.faded_promise_trigger")))
            event.setAmount(0);
            if(entity.isCuriosEquipped('curlamoety:desperate_attempt')){
                level.playSound(null,x,y,z,'curlamoety:dice','players',0.2,1)
                entity.addEffect(new MobEffectInstance(
                    'curlamoety:dying_fight',20,0
                ))
                entity.persistentData.dice_cd = 20
            }
        }else{
            if(source.getType() == 'inFire')//厨房手套火抗
            {
                if((entity.isCuriosEquipped('curlamoety:kitchen_gloves'))||(entity.isCuriosEquipped('curlamoety:pioneer_gloves'))||(entity.isCuriosEquipped('curlamoety:conqueror_gloves'))||(entity.isCuriosEquipped('curlamoety:elemental_gloves')))
                {
                    event.setAmount( amount*0.5 )
                }
            }
            if(entity.potionEffects.isActive('curlamoety:dying_fight')){//殊死一搏减伤
                //let effect = entity.getEffect('curlamoety:dying_fight')
                //let level = effect.getAmplifier()
                let luck = entity.getAttribute('minecraft:generic.luck').getValue()
                let decrease = (0.4-0.005*luck)
                if(decrease<0.2){decrease = 0.2}
                event.setAmount(amount*decrease)
            }
        }
        if(entity.persistentData.murasaki == 1){
            event.setAmount(0)
            let maxHealth = entity.getMaxHealth()
            entity.setHealth(maxHealth)
        }
    }else{
        let actual = source.actual
        if(entity.type == 'goety:ender_keeper'){//末影勇者：如果不是手持末影之刃的玩家和末影守卫者仆从则无效（断曜流光：亻尔女子）
            if(entity.persistentData.enderHero == 1){
                if(actual==null){
                    event.setAmount(0)
                    Utils.server.tell(Text.darkPurple(Text.translate("curlamoety.lang.enderhero_useless")))
                }else if(!actual.isPlayer()){
                    if(actual.type != 'goetyawaken:ender_keeper_servant'){
                        event.setAmount(0)
                        Utils.server.tell(Text.darkPurple(Text.translate("curlamoety.lang.enderhero_useless")))
                    }
                }else{
                    let mainHandItem = actual.getMainHandItem()
                    let offHandItem = actual.getOffHandItem()
                    if(mainHandItem.id == 'goety:blade_of_ender'&&offHandItem == null){}
                    else{
                        event.setAmount(0)
                        Utils.server.tell(Text.darkPurple(Text.translate("curlamoety.lang.enderhero_useless")))
                        actual.setStatusMessage(Text.red(Text.translate("curlamoety.lang.must_enderblade")))
                    }
                }
            }
        }else if(entity.type == 'goetyawaken:ender_keeper_servant'){//仆从末影勇者：30%减伤
            if(!entity.persistentData.enderHero)return;
            event.setAmount(amount*0.7)
        }else if(entity.type == "goety:apostle"){
            if(actual == null ||!actual.isPlayer())return;
            if(entity.getHealth() <= entity.getMaxHealth()*0.0714){
                event.setAmount(amount*5)
            }
        }
        if(actual==null)return;
        if(actual.type == 'goetyawaken:ender_keeper_servant'){//仆从末影勇者：2倍伤害
            if(!actual.persistentData.enderHero)return;
            event.setAmount(amount*2)
        }else if(!actual.isPlayer())return;
        if(actual.potionEffects.isActive('curlamoety:dying_fight')){//殊死一搏增伤
            //let effect = actual.getEffect('curlamoety:dying_fight')
            //let lv = effect.getAmplifier()
            let luck = actual.getAttribute('minecraft:generic.luck').getValue()
            let increase = (1.5+0.01*luck)
            event.setAmount(amount*increase)
        }
        if(actual.getMainHandItem().id == "goetyawaken:moonlight_cut"){
            if(actual.persistentData.champion == 1){
                event.setAmount(amount*1.25)
            }
        }
        
    }
})