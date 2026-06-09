ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent',event=>{
    let { entity , source , amount } = event
    let {x,y,z} = entity
    let max_health = entity.getMaxHealth()
    let health = entity.getHealth()
    let type =source.getType()
    let actual = source.actual
    if( entity == null )return;
    if(!entity.isLiving())return;
    //受击逻辑
    
    //属性抗性
    if(type == 'inFire'||type == 'onFire')
    {
        if(entity.persistentData.armorset == "netherite"||entity.persistentData.armorset == "knightmetal"||entity.persistentData.armorset == "yeti"||entity.persistentData.armorset == "fiery"||entity.persistentData.armorset == "ignitium"||entity.persistentData.armorset == "cursium"){
            event.cancel()
        }
        if(entity.persistentData.gloves == 1 || entity.persistentData.gloves >= 3)
        {
            event.setAmount( amount*0.5 )
        }
    }else if(type == 'explosion.player')
    {
        if(entity.persistentData.armorset == "netherite"){
            event.setAmount( amount*0.3 )
        }else if(entity.persistentData.armorset == "cursed_paladin"||entity.persistentData.armorset == "knightmetal"||entity.persistentData.armorset == "fiery"||entity.persistentData.armorset == "yeti"||entity.persistentData.armorset == "ignitium"||entity.persistentData.armorset == "cursium"){
            event.cancel()
        }
    }else if(type == 'indirectMagic'||type == 'sonic_boom')
    {
        if(entity.persistentData.armorset == "netherite"){
            event.setAmount( amount*0.4 )
        }else if(entity.persistentData.armorset == 'yeti'||entity.persistentData.armorset == "cursed_paladin"||entity.persistentData.armorset == "knightmetal"){
            event.setAmount( amount*0.28 )
        }else if(entity.persistentData.armorset == 'fiery'){
            event.setAmount( amount*0.2 )
        }else if(entity.persistentData.armorset == "ignitium"||entity.persistentData.armorset == "cursium"){
            event.setAmount( amount*0.1 )
        }
    }
    
    if(entity.isPlayer()){
        //殊死一搏触发
        if(entity.isCuriosEquipped('curlamoety:desperate_attempt') && entity.persistentData.dice_cd == 0){
            let healthRate = health/max_health
            let luck = entity.getAttribute('minecraft:generic.luck').getValue()
            let chance1 = 0.27-0.2*healthRate+(20+luck)/(200+2*luck)
            if(Math.random(1)<chance1){
                entity.addEffect(new MobEffectInstance(
                    'curlamoety:dying_fight',(10+10*healthRate+0.1*luck),0
                ))
                entity.level.playSound(null,x,y,z,'curlamoety:dice','players',1,1)
                entity.persistentData.dice_cd = 40
            }else{ entity.persistentData.dice_cd = 20 }
        }
        //殊死一搏减伤
        if(entity.potionEffects.isActive('curlamoety:dying_fight')){
            let luck = entity.getAttribute('minecraft:generic.luck').getValue()
            let decrease = (0.4-0.005*luck)
            if(decrease<0.2){decrease = 0.2}
            event.setAmount(amount*decrease)
        }
        //褪色免伤
        if(entity.isCuriosEquipped('curlamoety:faded_promise')){
            if(entity.persistentData.fade_cd == 0||entity.persistentData.fade_cd == -1){
                if(amount > health * 0.5){
                    entity.persistentData.fade_cd = 1200
                    entity.level.playSound(null,x,y,z,'minecraft:entity.experience_orb.pickup','players',0.5,1)
                    entity.setStatusMessage(Text.gold(Text.translate("curlamoety.lang.faded_promise_trigger")))
                    event.cancel()

                    if(entity.isCuriosEquipped('curlamoety:desperate_attempt')){
                        entity.level.playSound(null,x,y,z,'curlamoety:dice','players',1,1)
                        entity.addEffect(new MobEffectInstance(
                            'curlamoety:dying_fight',20,0
                        ))
                        entity.persistentData.dice_cd = 20
                    }
                }
            }
        }
        if(entity.persistentData.armorset == "murasaki"){
            event.setAmount(0)
            let maxHealth = entity.getMaxHealth()
            entity.setHealth(maxHealth)
        }
    }

    //特殊生物减伤
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
    //击中逻辑
    if(!actual)return;
    if(!actual.isLiving())return;
    let x1 = actual.x
    let y1 = actual.y
    let z1 = actual.z

    
    //仆从末影勇者：2倍伤害
    if(actual.type == 'goetyawaken:ender_keeper_servant'){
        if(!actual.persistentData.enderHero)return;
        event.setAmount(amount*2)
    }
    //炽铁暴击
    if(actual.persistentData.armorset == "fiery"){
        if(actual.potionEffects.isActive("goety:flame_hands")){
            let amplifier = actual.getEffect("goety:flame_hands").getAmplifier()
            actual.removeEffect("goety:flame_hands")
            if(amplifier!=0){
                actual.addEffect(new MobEffectInstance(
                    "goety:flame_hands",200,amplifier-1,false,false
                ))
            }
            if(entity.isOnFire()){
                event.setAmount(amount*1.5)
                entity.level.playSound(null,x,y,z,'minecraft:entity.player.attack.crit','players',0.5,1)
            }
        }
    }
    //骑士对甲增伤
    if(actual.persistentData.armorset == "knightmetal"){
        let armor = entity.getAttribute("minecraft:generic.armor").getValue()
        let toughness = entity.getAttribute("minecraft:generic.armor_toughness").getValue()
        event.setAmount(amount*(1+0.01*armor+0.02*toughness))
    }
    //冠军胧切增伤
    if(actual.getMainHandItem().id == "goetyawaken:moonlight_cut"){
        if(actual.persistentData.champion == 1){
            event.setAmount(amount*1.5)
        }
    }
    
    
    if(actual.isPlayer()){
        //殊死一搏触发
        if(actual.isCuriosEquipped('curlamoety:desperate_attempt') && actual.persistentData.dice_cd==0){
            let luck = actual.getAttribute('minecraft:generic.luck').getValue()
            let healthRate = actual.health/actual.maxHealth
            let chance2 = 0.15-0.1*healthRate+(20+luck)/(400+4*luck)
            if(Math.random(1)<(chance2)){
                entity.level.playSound(null,x1,y1,z1,'curlamoety:dice','players',1,1)
                actual.potionEffects.add('curlamoety:dying_fight',(5+0.1*luck),0)
                actual.persistentData.dice_cd = 15
            }
        }
        //殊死一搏增伤
        if(actual.potionEffects.isActive('curlamoety:dying_fight')){
            let luck = actual.getAttribute('minecraft:generic.luck').getValue()
            let increase = (1.5+0.01*luck)
            event.setAmount(amount*increase)
        }
        
        if(actual.persistentData.armorset == "apocalyptium"){
            //神金斩杀
            if(max_health>=10000){
                if(health/max_health <= 0.1){
                    entity.setHealth(0)
                }
            }else{
                if(health/max_health <= 0.25){
                    entity.setHealth(0)
                }
            }
        }else if(actual.persistentData.armorset == "spectre_darkmage"){
            //渊魄斩杀
            if(max_health>=2000){
                if(health/max_health <= 0.1){
                    entity.setHealth(0)
                }
            }else{
                if(health/max_health <= 0.25){
                    entity.setHealth(0)
                }
            }
        }else if(actual.persistentData.armorset == "spectre"){
            //幽魂斩杀
            if(max_health <=2000){
                if(health/max_health <= 0.2){
                    entity.setHealth(0)
                }
            }
        }
    }

    
})