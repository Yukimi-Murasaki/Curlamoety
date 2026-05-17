let serverTick = 1
ServerEvents.tick(event =>{
    if(serverTick==20){
        serverTick=1
    }else{
        serverTick++
    }
})

PlayerEvents.tick(event =>{
    let player = event.player;
    let {x,y,z} = player;
    if(player.isCuriosEquipped('curlamoety:faded_promise')){//褪色cd
        if(player.persistentData.fade_cd != 0){
            player.persistentData.fade_cd --
        }else{
            if(player.persistentData.fade_cast == 0){
                player.setStatusMessage(Text.gold(Text.translate("curlamoety.lang.faded_promise_ready")))
                player.level.playSound(null,x,y,z,'goety:shield_up','players',0.5,1)
                player.persistentData.fade_cast = 1
            }
        }
    }

    if(player.isCuriosEquipped('curlamoety:desperate_attempt')){//孤注一掷cd
        if(player.persistentData.dice_cd != 0){
            player.persistentData.dice_cd --
        }
    }

    if(player.isCuriosEquipped('curlamoety:survivor_will')){//眩晕免疫cd
        if(player.persistentData.stun_cd != 0){
            player.persistentData.stun_cd --
        }
    }

    let mainHandItem = player.mainHandItem;//手持事件
    let offHandItem = player.offHandItem;
    if((mainHandItem.hasTag('forge:tools/scythes'))||(mainHandItem.hasTag('forge:tools/hammers'))||(mainHandItem.hasTag('gloves:claymore')))
    {
        player.removeAttribute('minecraft:generic.attack_damage','extra_dmg')
        player.removeAttribute('minecraft:generic.attack_damage','extra_dmg2')
        if((player.isCuriosEquipped('curlamoety:conqueror_gloves'))||(player.isCuriosEquipped('curlamoety:elemental_gloves')))
        {
            player.modifyAttribute('minecraft:generic.attack_speed','extra_spd',0.5,'multiply_total')//重武器手套攻速
        }else{
            player.removeAttribute('minecraft:generic.attack_speed','extra_spd')
        }
        if(player.persistentData.sword_cookie == 1 && mainHandItem.hasTag('curlamoety:eksword')){//剑术大师
            player.modifyAttribute('minecraft:generic.attack_damage','ek_damage',10,'addition')
        }else{
            player.removeAttribute('minecraft:generic.attack_damage','ek_damage')
        }
    }else if(mainHandItem.hasTag('gloves:pan'))
    {
        player.removeAttribute('minecraft:generic.attack_damage','extra_dmg')
        player.removeAttribute('minecraft:generic.attack_damage','extra_dmg2')
        if((player.isCuriosEquipped('curlamoety:kitchen_gloves'))||(player.isCuriosEquipped('curlamoety:pioneer_gloves'))||(player.isCuriosEquipped('curlamoety:conqueror_gloves'))||(player.isCuriosEquipped('curlamoety:elemental_gloves')))
        {
            player.modifyAttribute('minecraft:generic.attack_speed','extra_spd',0.5,'multiply_total')//厨房手套：锅攻速
        }else{
            player.removeAttribute('minecraft:generic.attack_speed','extra_spd')
        }
    }else if(mainHandItem.hasTag('farmersdelight:tools/knives'))
    {
        player.removeAttribute('minecraft:generic.attack_speed','extra_spd')
        if((player.isCuriosEquipped('curlamoety:kitchen_gloves'))||(player.isCuriosEquipped('curlamoety:pioneer_gloves'))||(player.isCuriosEquipped('curlamoety:conqueror_gloves'))||(player.isCuriosEquipped('curlamoety:elemental_gloves')))
        {
            player.modifyAttribute('minecraft:generic.attack_damage','extra_dmg',3,'addition')//厨房手套：刀伤害
            player.modifyAttribute('minecraft:generic.attack_damage','extra_dmg2',0.20,'multiply_total')
        }else{
            player.removeAttribute('minecraft:generic.attack_damage','extra_dmg')
            player.removeAttribute('minecraft:generic.attack_damage','extra_dmg2')
        }
    }else{
        player.removeAttribute('minecraft:generic.attack_damage','extra_dmg')
        player.removeAttribute('minecraft:generic.attack_damage','extra_dmg2')
        player.removeAttribute('minecraft:generic.attack_speed','extra_spd')
    }
    if(mainHandItem.id == 'goetyawaken:moonlight_cut'&&player.persistentData.champion == 1){//胧切
        player.modifyAttribute('minecraft:generic.attack_damage','moonlight_dmg0',20,'addition')
        player.modifyAttribute('minecraft:generic.attack_damage','moonlight_dmg1',0.5,'multiply_total')
        player.modifyAttribute('minecraft:generic.attack_speed','moonlight_spd',0.5,'addition')
    }else{
        player.removeAttribute('minecraft:generic.attack_damage','moonlight_dmg0')
        player.removeAttribute('minecraft:generic.attack_damage','moonlight_dmg1')
        player.removeAttribute('minecraft:generic.attack_speed','moonlight_spd')
    }
    //if(player.potionEffects.isActive('enigmaticaddons:pure_resistance')){
    //    let effect = player.getEffect('enigmaticaddons:pure_resistance')
    //    let level = effect.amplifier
    //    let time = effect.duration
    //    if(level>=4){
    //        player.removeEffect('enigmaticaddons:pure_resistance')
    //        player.potionEffects.add('enigmaticaddons:pure_resistance',time,3)
    //        player.setStatusMessage(Text.darkRed(Text.translate('curlamoety.lang.resistance_baned')))
    //        event.level.playSound(null,x,y,z,'minecraft:block.beacon.deactivate','players',1,1)
    //    }
    //}


    //每秒事件
    if(serverTick != 20)return;

    //叶绿破坏者：每秒回复5耐久
    if(mainHandItem.id == 'curlamoety:chlorophium_breaker'){
        let damage = mainHandItem.getDamageValue()
        mainHandItem.setDamageValue(damage-5)
    }
    if(offHandItem.id == 'curlamoety:chlorophium_breaker'){
        let damage = offHandItem.getDamageValue()
        offHandItem.setDamageValue(damage-5)
    }

    //玛丽苏枝杖
    if(mainHandItem.id === 'curlamoety:mary_sue_staff_plus'||offHandItem.id === 'curlamoety:mary_sue_staff_plus')
    {
        player.potionEffects.add('curlamoety:acceleration_dance',1200,6)
    }else if(mainHandItem.id === 'curlamoety:mary_sue_staff'||offHandItem.id === 'curlamoety:mary_sue_staff')
    {
        player.potionEffects.add('curlamoety:acceleration_dance',1200,4)
    }

    
    //手套系列急迫
    if((player.isCuriosEquipped('curlamoety:pioneer_gloves'))||(player.isCuriosEquipped('curlamoety:conqueror_gloves'))||(player.isCuriosEquipped('curlamoety:elemental_gloves')))
    {
        player.potionEffects.add('minecraft:haste',200,1,false,false)
    }else if(player.isCuriosEquipped('curlamoety:explorer_gloves'))
    {
        player.potionEffects.add('minecraft:haste',200,0,false,false)
    }

    //头环系列
    if(player.isCuriosEquipped('curlamoety:twilight_crown')){
        player.potionEffects.add('goetydelight:servant_reinforcement',200,0,false,false)
        player.potionEffects.add('goety:shielding',200,2,false,false)
        player.potionEffects.add('goety:rallying',200,1,false,false)
    }else if(player.isCuriosEquipped('curlamoety:moon_circlet')){
        player.potionEffects.add('goety:shielding',200,1,false,false)
        player.potionEffects.add('goety:rallying',200,1,false,false)
    }else if(player.isCuriosEquipped('curlamoety:gloomy_circlet')){
        player.potionEffects.add('goety:shielding',200,1,false,false)
        player.potionEffects.add('goety:rallying',200,0,false,false)
    }

    if(player.persistentData.ascension_pizza == 1){
        player.modifyAttribute("goety_revelation:spell_power","ascension_pizza_modify",3,"addition")
        player.modifyAttribute("goety_revelation:spell_power_multiplier","ascension_pizza_modify",0.03,"addition")
        player.modifyAttribute("goety_revelation:soul_decrease_reduction","ascension_pizza_modify",0.1,"addition")
        player.modifyAttribute("goety_revelation:resistance","ascension_pizza_modify",0.08,"addition")
        player.modifyAttribute("goeticlegacy:soul_regen_ratio","ascension_pizza_modify",0.1,"addition")
        player.modifyAttribute("goeticlegacy:magic_invul_reduction","ascension_pizza_modify",1,"addition")
        player.modifyAttribute("goeticlegacy:true_damage_ratio","ascension_pizza_modify",0.03,"addition")
    }

    //let head = player.headArmorItem;//穿戴装备效果
    let chestplate = player.chestArmorItem;
    //let leggings = player.legsArmorItem;
    //let boots = player.feetArmorItem;
    if(chestplate.id == 'goety_revelation:apocalyptium_chestplate'){
        player.potionEffects.add('minecraft:speed',200,1,false,false)
        player.potionEffects.add('minecraft:resistance',200,1,false,false)
    }
})