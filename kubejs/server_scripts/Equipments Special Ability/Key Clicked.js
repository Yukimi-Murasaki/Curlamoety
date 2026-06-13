NetworkEvents.dataReceived("global.armorSetKey.consumeClick",(event)=>{
    let { player , level } = event
    let { x , y , z} = player
    let mainHandItem = player.mainHandItem
    let offHandItem = player.offHandItem
    if(global.armorSetMap.get(player) == "apocalyptium"){
        //神金
        if(global.genericSummonCdMap.get(player) == 0||global.genericSummonCdMap.get(player) == -1){
            level.playSound(null,x,y,z,"goetyawaken:pure_light_2","players",1,1)
            level.playSound(null,x,y,z,"goetyawaken:harp_crossbow_shoot_4","players",1,1)
            player.potionEffects.add("curlamoety:cursed_power",1200,9)
            let summon = level.createEntity("goety:inferno")
            summon.setOwnerId(player.getUuid())
            summon.setPosition(x,y,z)
            summon.setItemSlot("mainhand",Item.of("goety_revelation:valettein").enchant('goety_revelation:reality_piercer', 5).enchant('minecraft:sharpness', 5))
            summon.setItemSlot("offhand","minecraft:totem_of_undying")
            summon.setItemSlot("head",Item.of("goety_revelation:apocalyptium_helmet").enchant('minecraft:protection', 5))
            summon.setItemSlot("chest",Item.of("goety_revelation:apocalyptium_chestplate").enchant('minecraft:protection', 5))
            summon.setItemSlot("legs",Item.of("goety_revelation:apocalyptium_leggings").enchant('minecraft:protection', 5))
            summon.setItemSlot("feet",Item.of("goety_revelation:apocalyptium_boots").enchant('minecraft:protection', 5))
            summon.setCustomName(Text.translate("curlamoety.lang.apocalyptium_summon"))
            summon.spawn()
            global.genericSummonCdMap.put(player,3600)
        }else{
            player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.armorset_cooling")))
        }
    }else if(global.armorSetMap.get(player) == "diamond"){
        //钻石
        if(player.potionEffects.isActive("goety:fortunate")){
            let amplifier = player.getEffect("goety:fortunate").getAmplifier()
            if(amplifier>=2){
                player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.already_effect")))
            }else{
                if(mainHandItem.id == "minecraft:diamond"||mainHandItem.id == "minecraft:amethyst_shard"||mainHandItem.id == "minecraft:emerald"){
                    offHandItem.count --
                    player.potionEffects.add("goety:fortunate",6000,2)
                    level.playSound(null,x,y,z,'minecraft:block.amethyst_block.break','players',1,1)
                }else if(offHandItem.id == "minecraft:diamond"||offHandItem.id == "minecraft:amethyst_shard"||offHandItem.id == "minecraft:emerald"){
                    offHandItem.count --
                    player.potionEffects.add("goety:fortunate",6000,2)
                    level.playSound(null,x,y,z,'minecraft:block.amethyst_block.break','players',1,1)
                }else{
                    player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.no_gem")))
                }
            }
        }else{
            if(mainHandItem.id == "minecraft:diamond"||mainHandItem.id == "minecraft:amethyst_shard"||mainHandItem.id == "minecraft:emerald"){
                offHandItem.count --
                player.potionEffects.add("goety:fortunate",6000,2)
                level.playSound(null,x,y,z,'minecraft:block.amethyst_block.break','players',1,1)
            }else if(offHandItem.id == "minecraft:diamond"||offHandItem.id == "minecraft:amethyst_shard"||offHandItem.id == "minecraft:emerald"){
                offHandItem.count --
                player.potionEffects.add("goety:fortunate",6000,2)
                level.playSound(null,x,y,z,'minecraft:block.amethyst_block.break','players',1,1)
            }else{
                player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.no_gem")))
            }
        }
    }else if(global.armorSetMap.get(player) == "leather"){
        //皮革
        if(global.genericSummonCdMap.get(player) == 0||global.genericSummonCdMap.get(player) == -1){
            let summon = level.createEntity("trials:wind_charge")
            summon.setPosition(x,y,z)
            summon.setMotion(0,-1,0)
            summon.setOwner(player)
            summon.spawn()
            global.genericSummonCdMap.put(player,3600)
        }
    }else if(global.armorSetMap.get(player) == "ignitium"){
        //腾炎
        if(global.ignitiumCdMap.get(player) == 0||global.ignitiumCdMap.get(player) == -1){
            let nether_power = player.getAttribute("goety_revelation:nether_power").getValue()
            let spell_power = player.getAttribute("goety_revelation:spell_power").getValue()
            let spell_power_multiplier = player.getAttribute("goety_revelation:spell_power_multiplier").getValue()
            let summon = level.createEntity("cataclysm:flame_strike")
            summon.setOwner(player)
            summon.setPosition(x,y,z)
            summon.setRadius(17)
            summon.setDamage(5+(nether_power+spell_power)*spell_power_multiplier*0.7)
            summon.setHpDamage(1)
            summon.waitTime = 60
            summon.setDuration(260)
            summon.spawn()
            level.playSound(null,x,y,z,'minecraft:entity.blaze.shoot','players',1,1)
            global.ignitiumCdMap.put(player,1200)
        }else{
            player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.armorset_cooling")))
        }
    }else if(global.armorSetMap.get(player) == "arctic"){
        //极地
        if(global.genericSummonCdMap.get(player) == 0||global.genericSummonCdMap.get(player) == -1){
            let summon = level.createEntity("goety:polar_bear_servant")
            summon.setPosition(x,y,z)
            summon.setItemSlot("head",Item.of("minecraft:leather_helmet").enchant('minecraft:protection', 2))
            summon.setItemSlot("chest",Item.of("minecraft:leather_chestplate").enchant('minecraft:protection', 2))
            summon.setItemSlot("legs",Item.of("minecraft:leather_leggings").enchant('minecraft:protection', 2))
            summon.setItemSlot("feet",Item.of("minecraft:leather_boots").enchant('minecraft:protection', 2))
            summon.setOwnerId(player.getUuid())
            summon.setCustomName(Text.translate("curlamoety.lang.arctic_summon"))
            summon.spawn()
            global.genericSummonCdMap.put(player,3600)
        }else{
            player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.armorset_cooling")))
        }
    }else if(global.armorSetMap.get(player) == "fiery"){
        //炽铁
        if(player.potionEffects.isActive("goety:flame_hands")){
            let amplifier = player.getEffect("goety:flame_hands").getAmplifier()
            if(amplifier >=4 ){
                player.removeEffect("goety:flame_hands")
                player.potionEffects.add("goetyawaken:enchantment_sharpness",300,2)
                level.playSound(null,x,y,z,"block.anvil.use",'players',0.5,1.5)
                level.playSound(null,x,y,z,"cataclysm:ignis_poke",'players',1,1.5)
                global.fieryCdMap.put(player,20)
            }else{
                player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.insufficient_effect")))
            }
        }else{
            player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.insufficient_effect")))
        }
    }else if(global.armorSetMap.get(player) == "yeti"){
        //雪怪
        if(global.genericSummonCdMap.get(player) == 0||global.genericSummonCdMap.get(player) == -1){
            let summon = level.createEntity("goety:ice_golem")
            summon.setPosition(x,y,z)
            summon.setItemSlot("mainhand",Item.of("goety:frozen_blade").enchant('goety_revelation:reality_piercer', 5).enchant('minecraft:sharpness', 5))
            summon.setItemSlot("head",Item.of("twilightforest:yeti_helmet").enchant('minecraft:protection', 3))
            summon.setItemSlot("chest",Item.of("twilightforest:yeti_chestplate").enchant('minecraft:protection', 4))
            summon.setItemSlot("legs",Item.of("twilightforest:yeti_leggings").enchant('minecraft:protection', 4))
            summon.setItemSlot("feet",Item.of("twilightforest:yeti_boots").enchant('minecraft:protection', 4))
            summon.setOwnerId(player.getUuid())
            summon.setCustomName(Text.translate("curlamoety.lang.yeti_summon"))
            summon.spawn()
            global.genericSummonCdMap.put(player,3600)
        }else{
            player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.armorset_cooling")))
        }
    }else if(global.armorSetMap.get(player) == "cursium"){
        //咒魂
        if(global.genericSummonCdMap.get(player) == 0||global.genericSummonCdMap.get(player) == -1){
            let summon = level.createEntity("goety:blackguard_servant")
            summon.setPosition(x,y,z)
            summon.setItemSlot("mainhand",Item.of("cataclysm:soul_render").enchant('goety_revelation:reality_piercer', 5).enchant('minecraft:sharpness', 5))
            summon.setItemSlot("offhand","minecraft:totem_of_undying")
            summon.setItemSlot("head",Item.of("cataclysm:cursium_helmet").enchant('minecraft:protection', 4))
            summon.setItemSlot("chest",Item.of("cataclysm:cursium_chestplate").enchant('minecraft:protection', 5))
            summon.setItemSlot("legs",Item.of("cataclysm:cursium_leggings").enchant('minecraft:protection', 5))
            summon.setItemSlot("feet",Item.of("cataclysm:cursium_boots").enchant('minecraft:protection', 4))
            summon.setOwnerId(player.getUuid())
            summon.setCustomName(Text.translate("curlamoety.lang.cursium_summon"))
            summon.spawn()
            global.genericSummonCdMap.put(player,3600)
        }else{
            player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.armorset_cooling")))
        }
    }else if(global.armorSetMap.get(player) == "champion"){
        //冠军
        if(global.genericSummonCdMap.get(player) == 0||global.genericSummonCdMap.get(player) == -1){
            let summon = level.createEntity("goetyawaken:vanguard_champion")
            summon.setPosition(x,y,z)
            summon.setItemSlot("mainhand",Item.of("goetyawaken:moonlight_cut").enchant('goety_revelation:reality_piercer', 5).enchant('minecraft:sharpness', 5))
            summon.setItemSlot("offhand","minecraft:totem_of_undying")
            summon.setItemSlot("head",Item.of("goetyawaken:champion_helmet").enchant('minecraft:protection', 5))
            summon.setItemSlot("chest",Item.of("goetyawaken:champion_chestplate").enchant('minecraft:protection', 5))
            summon.setItemSlot("legs",Item.of("goetyawaken:champion_leggings").enchant('minecraft:protection', 5))
            summon.setItemSlot("feet",Item.of("goetyawaken:champion_boots").enchant('minecraft:protection', 5))
            summon.setOwnerId(player.getUuid())
            summon.setCustomName(Text.translate("curlamoety.lang.champion_summon"))
            summon.spawn()
            global.genericSummonCdMap.put(player,3600)
        }else{
            player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.armorset_cooling")))
        }
    }else if(global.armorSetMap.get(player) == "spider"){
        //蜘蛛
        if(global.genericSummonCdMap.get(player) == 0||global.genericSummonCdMap.get(player) == -1){
            let summon = level.createEntity("goety:bone_spider_servant")
            summon.setPosition(x,y,z)
            summon.setItemSlot("mainhand",Item.of("goetyawaken:glaive").enchant('goety_revelation:reality_piercer', 5).enchant('minecraft:sharpness', 5))
            summon.setItemSlot("head",Item.of("goety_revelation:spider_helmet").enchant('minecraft:protection', 3))
            summon.setItemSlot("chest",Item.of("goety_revelation:spider_chestplate").enchant('minecraft:protection', 3))
            summon.setItemSlot("legs",Item.of("goety_revelation:spider_leggings").enchant('minecraft:protection', 3))
            summon.setItemSlot("feet",Item.of("goety_revelation:spider_boots").enchant('minecraft:protection', 3))
            summon.setOwnerId(player.getUuid())
            summon.setCustomName(Text.translate("curlamoety.lang.spider_summon"))
            summon.spawn()
            global.genericSummonCdMap.put(player,3600)
        }else{
            player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.armorset_cooling")))
        }
    }else if(global.armorSetMap.get(player) == "spider_darkmage"){
        //神经
        if(global.genericSummonCdMap.get(player) == 0||global.genericSummonCdMap.get(player) == -1){
            let summon = level.createEntity("goety:bone_spider_servant")
            summon.setPosition(x,y,z)
            summon.setItemSlot("mainhand",Item.of("goetyawaken:frost_scythe").enchant('goety_revelation:reality_piercer', 5).enchant('minecraft:sharpness', 5))
            summon.setItemSlot("head",Item.of("goety_revelation:spider_darkmage_helmet").enchant('minecraft:protection', 3))
            summon.setItemSlot("chest",Item.of("goety_revelation:spider_darkmage_chestplate").enchant('minecraft:protection', 4))
            summon.setItemSlot("legs",Item.of("goety_revelation:spider_darkmage_leggings").enchant('minecraft:protection', 4))
            summon.setItemSlot("feet",Item.of("goety_revelation:spider_darkmage_boots").enchant('minecraft:protection', 4))
            summon.setOwnerId(player.getUuid())
            summon.setCustomName(Text.translate("curlamoety.lang.spider_darkmage_summon"))
            summon.spawn()
            global.genericSummonCdMap.put(player,3600)
        }else{
            player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.armorset_cooling")))
        }
    }else if(global.armorSetMap.get(player) == "cursed_knight"){
        //诅咒骑士
        if(global.genericSummonCdMap.get(player) == 0||global.genericSummonCdMap.get(player) == -1){
            let summon = level.createEntity("goety:haunted_armor_servant")
            summon.setPosition(x,y,z)
            summon.setItemSlot("mainhand",Item.of('minecraft:iron_sword').enchant('minecraft:sharpness', 10).enchant('goety_revelation:reality_piercer', 5).enchant('minecraft:vanishing_curse', 1))
            summon.setItemSlot("offhand",Item.of('minecraft:shield').enchant('minecraft:vanishing_curse', 1))
            summon.setItemSlot("head",Item.of('minecraft:iron_helmet').enchant('minecraft:protection', 2).enchant('minecraft:vanishing_curse', 1))
            summon.setItemSlot("chest",Item.of('minecraft:iron_chestplate').enchant('minecraft:protection', 2).enchant('minecraft:vanishing_curse', 1))
            summon.setItemSlot("legs",Item.of('minecraft:iron_leggings').enchant('minecraft:protection', 2).enchant('minecraft:vanishing_curse', 1))
            summon.setItemSlot("feet",Item.of('minecraft:iron_boots').enchant('minecraft:protection', 2).enchant('minecraft:vanishing_curse', 1))
            summon.setOwnerId(player.getUuid())
            summon.setCustomName(Text.translate("curlamoety.lang.cursed_knight_summon"))
            summon.spawn()
            global.genericSummonCdMap.put(player,3600)
        }else{
            player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.armorset_cooling")))
        }
    }else if(global.armorSetMap.get(player) == "cursed_paladin"){
        //诅咒圣骑士
        if(global.genericSummonCdMap.get(player) == 0||global.genericSummonCdMap.get(player) == -1){
            let summon = level.createEntity("goetyawaken:bone_lord_servant")
            summon.setPosition(x,y,z)
            summon.setItemSlot("mainhand",Item.of('goetyawaken:frost_scythe').enchant('minecraft:sharpness', 3).enchant('goety_revelation:reality_piercer', 5))
            summon.setItemSlot("offhand","minecraft:shield")
            summon.setItemSlot("head",Item.of('goety:cursed_paladin_helmet').enchant('minecraft:protection', 2))
            summon.setItemSlot("chest",Item.of('goety:cursed_paladin_chestplate').enchant('minecraft:protection', 3))
            summon.setItemSlot("legs",Item.of('goety:cursed_paladin_leggings').enchant('minecraft:protection', 3))
            summon.setItemSlot("feet",Item.of('goety:cursed_paladin_boots').enchant('minecraft:protection', 2))
            summon.setOwnerId(player.getUuid())
            summon.setCustomName(Text.translate("curlamoety.lang.cursed_paladin_summon"))
            summon.spawn()
            global.genericSummonCdMap.put(player,3600)
        }else{
            player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.armorset_cooling")))
        }
    }else if(global.armorSetMap.get(player) == "black_iron"){
        //黑铁
        player.potionEffects.add("curlamoety:cursed_power",300,3)
        player.potionEffects.add("goety:sapped",300,2)
        player.potionEffects.add("minecraft:strength",300,2)
        level.playSound(null,x,y,z,"goety:weaken_curse","players",1,1)
    }else if(global.armorSetMap.get(player) == "dark"){
        //黑暗
        player.potionEffects.add("curlamoety:cursed_power",300,5)
        player.potionEffects.add("goety:sapped",300,4)
        player.potionEffects.add("minecraft:strength",300,3)
        level.playSound(null,x,y,z,"goety:weaken_curse","players",1,1)
    }else{
        player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.no_armorset")))
    }
})