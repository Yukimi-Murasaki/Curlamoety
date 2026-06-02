let serverTick = 1
ServerEvents.tick(event =>{
    if(serverTick==20){
        serverTick=1
    }else{
        serverTick++
    }
})

PlayerEvents.tick(event =>{
    let { player , level } = event
    let {x,y,z} = player;
    if(player.isCuriosEquipped('curlamoety:faded_promise')){//褪色cd
        if(player.persistentData.fade_cd != -1){
            player.persistentData.fade_cd --
            if(player.persistentData.fade_cd == 0){
                player.setStatusMessage(Text.gold(Text.translate("curlamoety.lang.faded_promise_ready")))
                level.playSound(null,x,y,z,'goety:shield_up','players',0.5,1)
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
        if(player.persistentData.gloves >= 5){
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
        if(player.persistentData.gloves == 1 || player.persistentData.gloves >= 3){
            player.modifyAttribute('minecraft:generic.attack_speed','extra_spd',0.5,'multiply_total')//厨房手套：锅攻速
        }else{
            player.removeAttribute('minecraft:generic.attack_speed','extra_spd')
        }
    }else{
        player.removeAttribute('minecraft:generic.attack_speed','extra_spd')
    }
    if(mainHandItem.hasTag('farmersdelight:tools/knives')){
        if(player.persistentData.gloves == 1 || player.persistentData.gloves >= 3)
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
    }

    //套装效果
    if(player.persistentData.armorset == "champion"){
        if(mainHandItem.id == 'goetyawaken:moonlight_cut'){//胧切
            player.modifyAttribute('minecraft:generic.attack_damage','moonlight_dmg0',20,'addition')
            player.modifyAttribute('minecraft:generic.attack_damage','moonlight_dmg1',0.5,'multiply_total')
            player.modifyAttribute('minecraft:generic.attack_speed','moonlight_spd',0.5,'addition')
        }else{
            player.removeAttribute('minecraft:generic.attack_damage','moonlight_dmg0')
            player.removeAttribute('minecraft:generic.attack_damage','moonlight_dmg1')
            player.removeAttribute('minecraft:generic.attack_speed','moonlight_spd')
        }
    }else{
        player.removeAttribute('minecraft:generic.attack_damage','moonlight_dmg0')
        player.removeAttribute('minecraft:generic.attack_damage','moonlight_dmg1')
        player.removeAttribute('minecraft:generic.attack_speed','moonlight_spd')
    } 
        
    if(player.persistentData.armorset == "iron"){
        if(player.isCrouching()){
            player.modifyAttribute('minecraft:generic.knockback_resistance','ironset5',20,'addition')
            player.modifyAttribute('minecraft:generic.movement_speed','ironset6',-1,'multiply_total')
            player.potionEffects.add('minecraft:slowness',30,3)
            player.potionEffects.add('minecraft:resistance',2,3)
            player.potionEffects.add('fire_resistance',2,0)
        }else{
            player.removeAttribute('minecraft:generic.knockback_resistance','ironset5')
            player.removeAttribute('minecraft:generic.movement_speed','ironset6')
        }
    }else{
        player.removeAttribute('minecraft:generic.knockback_resistance','ironset5')
        player.removeAttribute('minecraft:generic.movement_speed','ironset6')
    }
    
    if(player.persistentData.armorset == "chainmail"){
        let chain_count = 0
        if(mainHandItem.id == "minecraft:chain"){
            chain_count += mainHandItem.count
        }
        if(offHandItem.id == "minecraft:chain"){
            chain_count += offHandItem.count
        }
        player.modifyAttribute("forge:entity_reach","chains_modify1",0.5*chain_count,'addition')
        player.modifyAttribute("forge:block_reach","chains_modify2",0.5*chain_count,'addition')
    }else{
        player.removeAttribute("forge:entity_reach","chains_modify1")
        player.removeAttribute("forge:block_reach","chains_modify2")
    }

    //套装CD
    if(player.persistentData.generic_cd != -1){//通用
        player.persistentData.generic_cd --
        if(player.persistentData.generic_cd == 0){
            level.playSound(null,x,y,z,'entity.experience_orb.pickup','players',0.2,1)
        }
    }
    if(player.persistentData.generic_summon_cd != -1){//通用召唤
        player.persistentData.generic_summon_cd --
        if(player.persistentData.generic_summon_cd == 0){
            level.playSound(null,x,y,z,'minecraft:block.beacon.activate','players',1,2)
            player.setStatusMessage(Text.yellow(Text.translate("curlamoety.lang.summon_ready")))
        }
    }

    if(player.persistentData.ignitium_cd != -1){//腾炎
        player.persistentData.ignitium_cd --
        if(player.persistentData.ignitium_cd == 0){
            level.playSound(null,x,y,z,'goety:wall_disappear','players',1,2)
            player.setStatusMessage(Text.gold(Text.translate("curlamoety.lang.ignitium_ready")))
        }
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
    if(player.persistentData.gloves >= 4){
        player.potionEffects.add('minecraft:haste',200,1,false,false)
    }else if(player.persistentData.gloves >= 2){
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

    //套装效果
    if(player.persistentData.armorset == "leather"){//皮革
        player.potionEffects.add('goety:swirling',200,0,false,false)
    }else if(player.persistentData.armorset == "diamond"){//钻石
        player.potionEffects.add('resistance',200,0,false,false)
    }else if( player.persistentData.armorset == "chainmail"){//锁链
        player.potionEffects.add('goetyawaken:chains',200,0,false,false)
    }else if(player.persistentData.armorset == "netherite"){//合金
        player.potionEffects.add('enigmaticlegacy:molten_heart',200,0,false,false)
        player.potionEffects.add('resistance',200,0,false,false)
    }else if(player.persistentData.armorset == "ironwood"){//铁木
        player.potionEffects.add("regeneration",200,1,false,false)
        player.potionEffects.add("goety:photosynthesis",200,0,false,false)
        player.potionEffects.add("goetydelight:hydration",200,0,false,false)
    }else if(player.persistentData.armorset == "steeleaf"){//钢叶
        player.potionEffects.add("goetyawaken:enchantment_sharpness",200,0,false,false)
        player.potionEffects.add("goety:leeching",200,0,false,false)
    }else if(player.persistentData.armorset == "fiery"){//炽铁
        player.potionEffects.add("enigmaticaddons:pure_resistance",200,0,false,false)
        player.potionEffects.add("enigmaticlegacy:molten_heart",200,0,false,false)
        if(player.persistentData.fiery_cd == 0){
            if(player.potionEffects.isActive("goety:flame_hands")){
                let amplifier = player.getEffect("goety:flame_hands").getAmplifier()
                if(amplifier == 4){
                    player.potionEffects.add("goety:flame_hands",200,4,false,false)
                }else{
                    player.potionEffects.add("goety:flame_hands",200,amplifier+1,false,false)
                    level.playSound(null,x,y,z,"minecraft:entity.blaze.shoot","players",0.6+0.1*amplifier,1.1+0.1*amplifier)
                    if(amplifier == 3){
                        level.playSound(null,x,y,z,"goety:fire_breath_start","players",0.5,1)
                    }
                }
            }else{
                player.potionEffects.add("goety:flame_hands",200,0,false,false)
                level.playSound(null,x,y,z,"minecraft:entity.blaze.shoot","players",0.5,1)
            }
            player.persistentData.fiery_cd = 1
        }else{
            player.persistentData.fiery_cd --
        }
    }else if(player.persistentData.armorset == "yeti"){//雪怪
        player.potionEffects.add("goety:frosty_aura",200,2,false,false)
    }else if(player.persistentData.armorset == "cursium"){//咒魂
        player.potionEffects.add("minecraft:resistance",200,0,false,false)
    }else if(player.persistentData.armorset == "ignitium"){//腾炎
        player.potionEffects.add("enigmaticaddons:pure_resistance",200,0,false,false)
        player.potionEffects.add("enigmaticlegacy:molten_heart",200,0,false,false)
    }else if(player.persistentData.armorset == "cursed_knight"){//诅咒骑士
        player.potionEffects.add("goety:deflective",200,0,false,false)
    }else if(player.persistentData.armorset == "cursed_paladin"){//诅咒圣骑士
        player.potionEffects.add("goety:deflective",200,1,false,false)
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