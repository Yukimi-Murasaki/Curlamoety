EntityEvents.spawned(event=>{
    //初步穿甲调整
    let entity = event.entity
    if(entity.isPlayer())return;
    if(entity == null || !entity.isLiving())return;
    if(entity.type == "minecraft:item")return;
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("goety_revelation:armor_penetration","dimension_modify",0.25,"addition")
        entity.modifyAttribute("goety_revelation:enchantment_piercing","dimension_modify",0.1,"addition")
    }else if(dimension == "twilightforest:twilight_forest"){
        entity.modifyAttribute("goety_revelation:armor_penetration","dimension_modify",0.25,"addition")
        entity.modifyAttribute("goety_revelation:enchantment_piercing","dimension_modify",0.1,"addition")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("goety_revelation:armor_penetration","dimension_modify",0.25,"addition")
        entity.modifyAttribute("goety_revelation:enchantment_piercing","dimension_modify",0.15,"addition")
    }
    //仆从套装效果
    if(entity.type == "goety:prisoner") return;
    if(entity instanceof $Summoned){
        let playerSummoned = 0
        let owner = null
        if(entity.getOwner()){
            if(entity.getOwner().isPlayer()){
                playerSummoned = 1
                owner = entity.getOwner()
            }else if(entity.getOwner().getOwner()){
                if(entity.getOwner().getOwner().isPlayer()){
                    playerSummoned = 1
                    owner = entity.getOwner().getOwner()
                }
            }
            
        }
        if(playerSummoned == 1){
            if(global.armorSwitchMap.get(owner) == 1){
                if(global.armorSetMap.get(owner) == "spider"){
                    //蜘蛛
                    let mainHandItem = entity.getItemBySlot("mainhand")
                    if(mainHandItem.hasTag("forge:tools/bows")){
                        entity.setItemSlot("mainhand",Item.of("minecraft:bow", '{Damage:0,Enchantments:[{id:"minecraft:power",lvl:3s}]}'))
                    }else if(mainHandItem.id == "minecraft:crossbow"){
                        entity.setItemSlot("mainhand",Item.of("minecraft:crossbow", '{Damage:0,Enchantments:[{id:"minecraft:quick_charge",lvl:2s},{id:"enigmaticlegacy:sharpshooter",lvl:3s}]}'))
                    }else{
                        entity.setItemSlot("mainhand",Item.of("goety_revelation:spectre_whip", '{Damage:0,Enchantments:[{id:"minecraft:looting",lvl:3s},{id:"minecraft:sharpness",lvl:3s},{id:"goety_revelation:reality_piercer",lvl:3s}]}'))
                    }
                    if(entity.type == "goetyawaken:apostle_servant"){
                        entity.setItemSlot("mainhand",Item.of("minecraft:bow", '{Damage:0,Enchantments:[{id:"minecraft:power",lvl:5s}]}'))
                    }
                    if(entity.getItemBySlot("head").id != "goety_revelation:spider_helmet"){
                        entity.setItemSlot("head",Item.of("goety_revelation:spider_helmet").enchant('minecraft:protection', 1))
                    }
                    if(entity.getItemBySlot("head").id != "goety_revelation:spider_chestplate"){
                        entity.setItemSlot("chest",Item.of("goety_revelation:spider_chestplate").enchant('minecraft:protection', 2))
                    }
                    if(entity.getItemBySlot("head").id != "goety_revelation:spider_leggings"){
                        entity.setItemSlot("legs",Item.of("goety_revelation:spider_leggings").enchant('minecraft:protection', 2))
                    }
                    if(entity.getItemBySlot("head").id != "goety_revelation:spider_boots"){
                        entity.setItemSlot("feet",Item.of("goety_revelation:spider_boots").enchant('minecraft:protection', 1))
                    }
                }else if(global.armorSetMap.get(owner) == "spider_darkmage"){
                    //神经
                    let mainHandItem = entity.getItemBySlot("mainhand")
                    if(mainHandItem.hasTag("forge:tools/bows")){
                        entity.setItemSlot("mainhand",Item.of("minecraft:bow", '{Damage:0,Enchantments:[{id:"minecraft:power",lvl:4s}]}'))
                    }else if(mainHandItem.id == "minecraft:crossbow"){
                        entity.setItemSlot("mainhand",Item.of("minecraft:crossbow", '{Damage:0,Enchantments:[{id:"minecraft:quick_charge",lvl:2s},{id:"enigmaticlegacy:sharpshooter",lvl:4s}]}'))
                    }else{
                        entity.setItemSlot("mainhand",Item.of("goety_revelation:spectre_whip", '{Damage:0,Enchantments:[{id:"minecraft:looting",lvl:3s},{id:"minecraft:sharpness",lvl:4s},{id:"goety_revelation:reality_piercer",lvl:4s}]}'))
                    }
                    if(entity.type == "goetyawaken:apostle_servant"){
                        entity.setItemSlot("mainhand",Item.of("minecraft:bow", '{Damage:0,Enchantments:[{id:"minecraft:power",lvl:8s}]}'))
                    }
                    if(entity.getItemBySlot("head").id != "goety_revelation:spider_darkmage_helmet"){
                        entity.setItemSlot("head",Item.of("goety_revelation:spider_darkmage_helmet").enchant('minecraft:protection', 2))
                    }
                    if(entity.getItemBySlot("head").id != "goety_revelation:spider_darkmage_chestplate"){
                        entity.setItemSlot("chest",Item.of("goety_revelation:spider_darkmage_chestplate").enchant('minecraft:protection', 2))
                    }
                    if(entity.getItemBySlot("head").id != "goety_revelation:spider_darkmage_leggings"){
                        entity.setItemSlot("legs",Item.of("goety_revelation:spider_darkmage_leggings").enchant('minecraft:protection', 2))
                    }
                    if(entity.getItemBySlot("head").id != "goety_revelation:spider_darkmage_boots"){
                        entity.setItemSlot("feet",Item.of("goety_revelation:spider_darkmage_boots").enchant('minecraft:protection', 2))
                    }
                }else if(global.armorSetMap.get(owner) == "yeti"){
                    //雪怪
                    let mainHandItem = entity.getItemBySlot("mainhand")
                    if(mainHandItem.hasTag("forge:tools/bows")){
                        entity.setItemSlot("mainhand",Item.of("twilightforest:ice_bow", '{Damage:0,Enchantments:[{id:"minecraft:power",lvl:5s}]}'))
                    }else if(mainHandItem.id == "minecraft:crossbow"){
                        entity.setItemSlot("mainhand",Item.of("minecraft:crossbow", '{Damage:0,Enchantments:[{id:"minecraft:quick_charge",lvl:2s},{id:"enigmaticlegacy:sharpshooter",lvl:5s}]}'))
                    }else{
                        entity.setItemSlot("mainhand",Item.of("twilightforest:ice_sword", '{Damage:0,Enchantments:[{id:"minecraft:looting",lvl:3s},{id:"minecraft:sharpness",lvl:5s},{id:"goety_revelation:reality_piercer",lvl:5s}]}'))
                    }
                    if(entity.type == "goetyawaken:apostle_servant"){
                        entity.setItemSlot("mainhand",Item.of("goetyawaken:dark_netherite_bow", '{Damage:0,Enchantments:[{id:"minecraft:power",lvl:10s}]}'))
                    }
                    if(entity.getItemBySlot("head").id != "twilightforest:yeti_helmet"){
                        entity.setItemSlot("head",Item.of("twilightforest:yeti_helmet").enchant('minecraft:protection', 2))
                    }
                    if(entity.getItemBySlot("head").id != "twilightforest:yeti_chestplate"){
                        entity.setItemSlot("chest",Item.of("twilightforest:yeti_chestplate").enchant('minecraft:protection', 3))
                    }
                    if(entity.getItemBySlot("head").id != "twilightforest:yeti_leggings"){
                        entity.setItemSlot("legs",Item.of("twilightforest:yeti_leggings").enchant('minecraft:protection', 3))
                    }
                    if(entity.getItemBySlot("head").id != "twilightforest:yeti_boots"){
                        entity.setItemSlot("feet",Item.of("twilightforest:yeti_boots").enchant('minecraft:protection', 2))
                    }
                }else if(global.armorSetMap.get(owner) == "cursium"){
                    //咒魂
                    let mainHandItem = entity.getItemBySlot("mainhand")
                    if(mainHandItem.hasTag("forge:tools/bows")){
                        entity.setItemSlot("mainhand",Item.of("twilightforest:ice_bow", '{Damage:0,Enchantments:[{id:"minecraft:power",lvl:8s}]}'))
                    }else if(mainHandItem.id == "minecraft:crossbow"){
                        entity.setItemSlot("mainhand",Item.of("minecraft:crossbow", '{Damage:0,Enchantments:[{id:"minecraft:quick_charge",lvl:3s},{id:"enigmaticlegacy:sharpshooter",lvl:7s}]}'))
                    }else{
                        entity.setItemSlot("mainhand",Item.of("cataclysm:soul_render", '{Enchantments:[{id:"minecraft:looting",lvl:3s},{id:"minecraft:sharpness",lvl:5s},{id:"goety_revelation:reality_piercer",lvl:8s},{id:"minecraft:smite",lvl:5s}]}'))
                    }
                    if(entity.type == "goetyawaken:apostle_servant"){
                        entity.setItemSlot("mainhand",Item.of("goetyawaken:dark_netherite_bow", '{Damage:0,Enchantments:[{id:"minecraft:power",lvl:12s}]}'))
                    }
                    if(entity.getItemBySlot("head").id != "cataclysm:cursium_helmet"){
                        entity.setItemSlot("head",Item.of("cataclysm:cursium_helmet").enchant('minecraft:protection', 3))
                    }
                    if(entity.getItemBySlot("head").id != "cataclysm:cursium_chestplate"){
                        entity.setItemSlot("chest",Item.of("cataclysm:cursium_chestplate").enchant('minecraft:protection', 3))
                    }
                    if(entity.getItemBySlot("head").id != "cataclysm:cursium_leggings"){
                        entity.setItemSlot("legs",Item.of("cataclysm:cursium_leggings").enchant('minecraft:protection', 3))
                    }
                    if(entity.getItemBySlot("head").id != "cataclysm:cursium_boots"){
                        entity.setItemSlot("feet",Item.of("cataclysm:cursium_boots").enchant('minecraft:protection', 3))
                    }
                }else if(global.armorSetMap.get(owner) == "champion"){
                    //冠军
                    let mainHandItem = entity.getItemBySlot("mainhand")
                    if(mainHandItem.hasTag("forge:tools/bows")){
                        entity.setItemSlot("mainhand",Item.of("twilightforest:seeker_bow", '{Damage:0,Enchantments:[{id:"minecraft:power",lvl:12s}]}'))
                    }else if(mainHandItem.id == "minecraft:crossbow"){
                        entity.setItemSlot("mainhand",Item.of("minecraft:crossbow", '{Damage:0,Enchantments:[{id:"minecraft:quick_charge",lvl:3s},{id:"enigmaticlegacy:sharpshooter",lvl:10s}]}'))
                    }else{
                        entity.setItemSlot("mainhand",Item.of("goetyawaken:moonlight_cut", '{Damage:0,Enchantments:[{id:"minecraft:looting",lvl:3s},{id:"minecraft:sharpness",lvl:10s},{id:"goety_revelation:reality_piercer",lvl:10s},{id:"minecraft:smite",lvl:5s}]}'))
                    }
                    if(entity.type == "goetyawaken:apostle_servant"){
                        entity.setItemSlot("mainhand",Item.of("goety_revelation:bow_of_revelation", '{Damage:0,Enchantments:[{id:"minecraft:power",lvl:15s}],Unbreakable:1b}'))
                    }
                    if(entity.getItemBySlot("head").id != "goetyawaken:champion_helmet"){
                        entity.setItemSlot("head",Item.of("goetyawaken:champion_helmet").enchant('minecraft:protection', 3))
                    }
                    if(entity.getItemBySlot("head").id != "goetyawaken:champion_chestplate"){
                        entity.setItemSlot("chest",Item.of("goetyawaken:champion_chestplate").enchant('minecraft:protection', 4))
                    }
                    if(entity.getItemBySlot("head").id != "goetyawaken:champion_leggings"){
                        entity.setItemSlot("legs",Item.of("goetyawaken:champion_leggings").enchant('minecraft:protection', 4))
                    }
                    if(entity.getItemBySlot("head").id != "goetyawaken:champion_boots"){
                        entity.setItemSlot("feet",Item.of("goetyawaken:champion_boots").enchant('minecraft:protection', 4))
                    }
                }
            }
        }
    }
})
//每个生物调整

//骷髅系
EntityEvents.spawned("minecraft:skeleton",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",3,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",9,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
    let math = Math.random(1)
    if(math<0.05){
        entity.setItemSlot("mainhand",Item.of("curlamoety:skeleton_leg", '{Damage:0,Enchantments:[{id:"minecraft:knockback",lvl:2s},{id:"minecraft:sharpness",lvl:5s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"goety_revelation:reality_piercer",lvl:5s}]}'))
        entity.setItemSlot("offhand",Item.of("minecraft:bow", '{Damage:0,Enchantments:[{id:"minecraft:flame",lvl:1s},{id:"minecraft:punch",lvl:1s},{id:"minecraft:power",lvl:5s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("head",Item.of("minecraft:leather_helmet", '{Damage:0,Enchantments:[{id:"minecraft:protection",lvl:2s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("chest",Item.of("minecraft:leather_chestplate", '{Damage:0,Trim:{material:"minecraft:iron",pattern:"minecraft:eye"}}'))
        entity.setItemSlot("legs","leather_leggings")
        entity.setItemSlot("feet","leather_boots")
        entity.modifyAttribute("minecraft:generic.max_health","elite",1,"multiply_total")
        entity.potionEffects.add("minecraft:glowing",-1,0)
        entity.potionEffects.add("goety:necrosis",-1,0)
        entity.persistentData.elite = 1
    }else if(math<0.25){
        if(!entity.persistentData.elite||entity.persistentData.elite != 1){
            entity.setItemSlot("mainhand","curlamoety:skeleton_leg")
            entity.setItemSlot("head","goety:haunted_glass_mob_tinted")
            entity.setItemSlot("chest",Item.of("goety:cursed_knight_chestplate", '{Damage:0}'))
            entity.potionEffects.add("goety:necrosis",-1,0)
            entity.persistentData.elite = 2
        }
    }
})
EntityEvents.drops("minecraft:skeleton",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_end"){
        if(entity.persistentData.elite == 1){
            event.addDrop("2x goety:ectoplasm")
            event.addDrop("2x enigmaticlegacy:astral_dust")
            event.addDrop("enigmaticlegacy:etherium_ore")
        }else if(entity.persistentData.elite == 2){
            let math = Math.random(1)
            if(math<0.2){
                event.addDrop("enigmaticlegacy:etherium_ore")
            }else if(math<0.4){
                event.addDrop("2x enigmaticlegacy:astral_dust")
            }else if(math<0.7){
                event.addDrop("minecraft:netherite_scrap")
            }else{
                event.addDrop("3x enigmaticaddons:earth_heart_fragment")
            }
        }
    }else{
        if(entity.persistentData.elite == 1){
            event.addDrop("2x goety:ectoplasm")
            event.addDrop("minecraft:diamond")
            event.addDrop("minecraft:netherite_scrap")
        }else if(entity.persistentData.elite == 2){
            let math = Math.random(1)
            if(math<0.2){
                event.addDrop("minecraft:diamond")
            }else if(math<0.4){
                event.addDrop("3x enigmaticaddons:earth_heart_fragment")
            }else if(math<0.7){
                event.addDrop("2x goety:ectoplasm")
            }else{
                event.addDrop("2x minecraft:iron_ingot")
            }
        }
    }
    
})
EntityEvents.spawned("minecraft:stray",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",3,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",9,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
    let math = Math.random(1)
    if(math<0.05){
        entity.setItemSlot("mainhand",Item.of("twilightforest:ice_sword", '{Damage:0,Enchantments:[{id:"minecraft:knockback",lvl:2s},{id:"minecraft:sharpness",lvl:5s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"goety_revelation:reality_piercer",lvl:5s}]}'))
        entity.setItemSlot("offhand",Item.of("twilightforest:ice_bow", '{Damage:0,Enchantments:[{id:"minecraft:punch",lvl:2s},{id:"minecraft:power",lvl:5s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("head",Item.of("minecraft:leather_helmet", '{Damage:0,Enchantments:[{id:"minecraft:protection",lvl:2s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("chest",Item.of("minecraft:leather_chestplate", '{Damage:0,Trim:{material:"minecraft:diamond",pattern:"minecraft:eye"}}'))
        entity.setItemSlot("legs","leather_leggings")
        entity.setItemSlot("feet","leather_boots")
        entity.modifyAttribute("minecraft:generic.max_health","elite",1,"multiply_total")
        entity.potionEffects.add("minecraft:glowing",-1,0)
        entity.potionEffects.add("goety:necrosis",-1,0)
        entity.persistentData.elite = 1
    }else if(math<0.25){
        if(!entity.persistentData.elite||entity.persistentData.elite != 1){
            entity.setItemSlot("mainhand","curlamoety:skeleton_leg")
            entity.setItemSlot("head","goety:haunted_glass_mob_tinted")
            entity.setItemSlot("chest",Item.of("goety:cursed_knight_chestplate", '{Damage:0}'))
            entity.potionEffects.add("goety:necrosis",-1,0)
            entity.persistentData.elite = 2
        }
    }
})
EntityEvents.drops("minecraft:stray",event=>{
    let entity = event.entity
    if(entity.persistentData.elite == 1){
        event.addDrop("goety:ectoplasm")
        event.addDrop("goety:chill_fabric")
        event.addDrop("minecraft:diamond")
        event.addDrop("minecraft:netherite_scrap")
    }else if(entity.persistentData.elite == 2){
        let math = Math.random(1)
        if(math<0.2){
            event.addDrop("minecraft:diamond")
        }else if(math<0.4){
            event.addDrop("3x enigmaticaddons:earth_heart_fragment")
        }else if(math<0.7){
            event.addDrop("2x goety:ectoplasm")
        }else{
            event.addDrop("2x minecraft:iron_ingot")
        }
    }
})
EntityEvents.spawned("trials:bogged",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",3,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",9,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
    let math = Math.random(1)
    if(math<0.05){
        entity.setItemSlot("mainhand",Item.of("twilightforest:ironwood_sword", '{Damage:0,Enchantments:[{id:"minecraft:knockback",lvl:2s},{id:"minecraft:sharpness",lvl:5s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"goety_revelation:reality_piercer",lvl:5s}]}'))
        entity.setItemSlot("offhand",Item.of("twilightforest:seeker_bow", '{Damage:0,Enchantments:[{id:"minecraft:flame",lvl:1s},{id:"minecraft:punch",lvl:2s},{id:"minecraft:power",lvl:5s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("head",Item.of("minecraft:leather_helmet", '{Damage:0,Enchantments:[{id:"minecraft:protection",lvl:2s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("chest",Item.of("minecraft:leather_chestplate", '{Damage:0,Trim:{material:"minecraft:emerald",pattern:"minecraft:eye"}}'))
        entity.setItemSlot("legs","leather_leggings")
        entity.setItemSlot("feet","leather_boots")
        entity.modifyAttribute("minecraft:generic.max_health","elite",1,"multiply_total")
        entity.potionEffects.add("minecraft:glowing",-1,0)
        entity.potionEffects.add("goety:necrosis",-1,0)
        entity.persistentData.elite = 1
    }else if(math<0.25){
        if(!entity.persistentData.elite||entity.persistentData.elite != 1){
            entity.setItemSlot("mainhand","curlamoety:skeleton_leg")
            entity.setItemSlot("head","goety:haunted_glass_mob_tinted")
            entity.setItemSlot("chest",Item.of("goety:cursed_knight_chestplate", '{Damage:0}'))
            entity.potionEffects.add("goety:necrosis",-1,0)
            entity.persistentData.elite = 2
        }
    }
})
EntityEvents.drops("trials:bogged",event=>{
    let entity = event.entity
    if(entity.persistentData.elite == 1){
        event.addDrop("2x goety:ectoplasm")
        event.addDrop("twilightforest:liveroot")
        event.addDrop("minecraft:diamond")
        event.addDrop("minecraft:netherite_scrap")
    }else if(entity.persistentData.elite == 2){
        let math = Math.random(1)
        if(math<0.2){
            event.addDrop("minecraft:diamond")
        }else if(math<0.4){
            event.addDrop("3x enigmaticaddons:earth_heart_fragment")
        }else if(math<0.7){
            event.addDrop("2x goety:ectoplasm")
        }else{
            event.addDrop("2x minecraft:iron_ingot")
        }
    }
})
EntityEvents.spawned("goetyawaken:parched",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",3,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",9,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
    let math = Math.random(1)
    if(math<0.05){
        entity.setItemSlot("mainhand",Item.of("goety:stormlander", '{Damage:0,Enchantments:[{id:"minecraft:knockback",lvl:2s},{id:"minecraft:sharpness",lvl:5s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"goety_revelation:reality_piercer",lvl:5s}]}'))
        entity.setItemSlot("offhand",Item.of("minecraft:bow", '{Damage:0,Enchantments:[{id:"minecraft:flame",lvl:1s},{id:"minecraft:punch",lvl:1s},{id:"minecraft:power",lvl:5s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("head",Item.of("minecraft:leather_helmet", '{Damage:0,Enchantments:[{id:"minecraft:protection",lvl:2s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("chest",Item.of("minecraft:leather_chestplate", '{Damage:0,Trim:{material:"minecraft:gold",pattern:"minecraft:eye"}}'))
        entity.setItemSlot("legs","leather_leggings")
        entity.setItemSlot("feet","leather_boots")
        entity.modifyAttribute("minecraft:generic.max_health","elite",1,"multiply_total")
        entity.potionEffects.add("minecraft:glowing",-1,0)
        entity.potionEffects.add("goety:necrosis",-1,0)
        entity.persistentData.elite = 1
    }else if(math<0.25){
        if(!entity.persistentData.elite||entity.persistentData.elite != 1){
            entity.setItemSlot("mainhand","curlamoety:skeleton_leg")
            entity.setItemSlot("head","goety:haunted_glass_mob_tinted")
            entity.setItemSlot("chest",Item.of("goety:cursed_knight_chestplate", '{Damage:0}'))
            entity.potionEffects.add("goety:necrosis",-1,0)
            entity.persistentData.elite = 2
        }
    }
})
EntityEvents.drops("goetyawaken:parched",event=>{
    let entity = event.entity
    if(entity.persistentData.elite == 1){
        event.addDrop("2x goety:ectoplasm")
        event.addDrop("goety:stormlander")
        event.addDrop("minecraft:diamond")
        event.addDrop("minecraft:netherite_scrap")
    }else if(entity.persistentData.elite == 2){
        let math = Math.random(1)
        if(math<0.2){
            event.addDrop("minecraft:diamond")
        }else if(math<0.4){
            event.addDrop("3x enigmaticaddons:earth_heart_fragment")
        }else if(math<0.7){
            event.addDrop("2x goety:ectoplasm")
        }else{
            event.addDrop("2x minecraft:iron_ingot")
        }
    }
})
EntityEvents.spawned("goetyawaken:sunken_skeleton",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",3,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",9,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
    let math = Math.random(1)
    if(math<0.05){
        entity.setItemSlot("mainhand",Item.of("minecraft:trident", '{Damage:0,Enchantments:[{id:"minecraft:channeling",lvl:1s},{id:"enigmaticlegacy:wrath",lvl:5s},{id:"minecraft:loyalty",lvl:3s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("offhand",Item.of("minecraft:crossbow", '{Damage:0,Enchantments:[{id:"enigmaticlegacy:sharpshooter",lvl:5s},{id:"minecraft:quick_charge",lvl:3s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("head",Item.of("minecraft:leather_helmet", '{Damage:0,Enchantments:[{id:"minecraft:protection",lvl:2s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("chest",Item.of("minecraft:leather_chestplate", '{Damage:0,Trim:{material:"minecraft:amethyst",pattern:"minecraft:eye"}}'))
        entity.setItemSlot("legs","leather_leggings")
        entity.setItemSlot("feet","leather_boots")
        entity.modifyAttribute("minecraft:generic.max_health","elite",1,"multiply_total")
        entity.potionEffects.add("minecraft:glowing",-1,0)
        entity.potionEffects.add("goety:necrosis",-1,0)
        entity.persistentData.elite = 1
    }else if(math<0.25){
        if(!entity.persistentData.elite||entity.persistentData.elite != 1){
            entity.setItemSlot("mainhand","curlamoety:skeleton_leg")
            entity.setItemSlot("head","goety:haunted_glass_mob_tinted")
            entity.setItemSlot("chest",Item.of("goety:cursed_knight_chestplate", '{Damage:0}'))
            entity.potionEffects.add("goety:necrosis",-1,0)
            entity.persistentData.elite = 2
        }
    }
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.5,"multiply_total")
})
EntityEvents.drops("goetyawaken:sunken_skeleton",event=>{
    let entity = event.entity
    if(entity.persistentData.elite == 1){
        event.addDrop("2x goety:ectoplasm")
        event.addDrop("minecraft:nautilus_shell")
        event.addDrop("minecraft:diamond")
        event.addDrop("minecraft:netherite_scrap")
    }else if(entity.persistentData.elite == 2){
        let math = Math.random(1)
        if(math<0.2){
            event.addDrop("minecraft:diamond")
        }else if(math<0.4){
            event.addDrop("3x enigmaticaddons:earth_heart_fragment")
        }else if(math<0.7){
            event.addDrop("2x goety:ectoplasm")
        }else{
            event.addDrop("2x minecraft:iron_ingot")
        }
    }
})
//僵尸系
EntityEvents.spawned("minecraft:zombie",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",3,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",9,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
    let math = Math.random(1)
    if(math<0.05){
        entity.setItemSlot("mainhand",Item.of("curlamoety:zombie_arm", '{Damage:0,Enchantments:[{id:"minecraft:sharpness",lvl:5s},{id:"minecraft:fire_aspect",lvl:2s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("offhand",Item.of("minecraft:shield", '{Damage:0,Enchantments:[{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("head",Item.of("cataclysm:monstrous_helm", '{Damage:0,Enchantments:[{id:"minecraft:protection",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("chest",Item.of("minecraft:iron_chestplate", '{Damage:0,Trim:{material:"minecraft:netherite",pattern:"minecraft:silence"}}'))
        entity.modifyAttribute("minecraft:generic.max_health","elite",1,"multiply_total")
        entity.potionEffects.add("minecraft:glowing",-1,0)
        entity.potionEffects.add("goety:necrosis",-1,0)
        entity.persistentData.elite = 1
    }else if(math<0.25){
        if(!entity.persistentData.elite||entity.persistentData.elite != 1){
            entity.setItemSlot("mainhand","curlamoety:zombie_arm")
            entity.setItemSlot("head","goety:haunted_glass_mob_tinted")
            entity.setItemSlot("chest",Item.of("goety:cursed_knight_chestplate", '{Damage:0}'))
            entity.potionEffects.add("goety:necrosis",-1,0)
            entity.persistentData.elite = 2
        }
    }
})
EntityEvents.drops("minecraft:zombie",event=>{
    let entity = event.entity
    if(entity.persistentData.elite == 1){
        event.addDrop("goety:spirit_fabric")
        event.addDrop("minecraft:iron_ingot")
        event.addDrop("minecraft:diamond")
        event.addDrop("minecraft:netherite_scrap")
    }else if(entity.persistentData.elite == 2){
        let math = Math.random(1)
        if(math<0.2){
            event.addDrop("minecraft:diamond")
        }else if(math<0.4){
            event.addDrop("3x enigmaticaddons:earth_heart_fragment")
        }else if(math<0.7){
            event.addDrop("2x goety:ectoplasm")
        }else{
            event.addDrop("2x minecraft:iron_ingot")
        }
    }
})
EntityEvents.spawned("minecraft:drowned",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",3,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",9,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
    let math = Math.random(1)
    if(math<0.05){
        entity.setItemSlot("mainhand",Item.of("minecraft:trident", '{Damage:0,Enchantments:[{id:"minecraft:channeling",lvl:1s},{id:"enigmaticlegacy:wrath",lvl:5s},{id:"minecraft:loyalty",lvl:3s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("offhand","minecraft:nautilus_shell")
        entity.setItemSlot("head",Item.of("minecraft:turtle_helmet", '{Damage:0,Trim:{material:"minecraft:diamond",pattern:"trials:flow"}}'))
        entity.setItemSlot("chest",Item.of("minecraft:netherite_chestplate", '{Damage:0,Enchantments:[{id:"minecraft:protection",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}],Trim:{material:"minecraft:diamond",pattern:"trials:flow"}}'))
        entity.modifyAttribute("minecraft:generic.max_health","elite",1,"multiply_total")
        entity.potionEffects.add("minecraft:glowing",-1,0)
        entity.potionEffects.add("goety:necrosis",-1,0)
        entity.persistentData.elite = 1
    }else if(math<0.25){
        if(!entity.persistentData.elite||entity.persistentData.elite != 1){
            entity.setItemSlot("mainhand","curlamoety:zombie_arm")
            entity.setItemSlot("head","goety:haunted_glass_mob_tinted")
            entity.setItemSlot("chest",Item.of("goety:cursed_knight_chestplate", '{Damage:0}'))
            entity.potionEffects.add("goety:necrosis",-1,0)
            entity.persistentData.elite = 2
        }
    }
})
EntityEvents.drops("minecraft:drowned",event=>{
    let entity = event.entity
    if(entity.persistentData.elite == 1){
        event.addDrop("goety:spirit_fabric")
        event.addDrop("minecraft:scute")
        event.addDrop("minecraft:diamond")
        event.addDrop("minecraft:netherite_scrap")
    }else if(entity.persistentData.elite == 2){
        let math = Math.random(1)
        if(math<0.2){
            event.addDrop("minecraft:diamond")
        }else if(math<0.4){
            event.addDrop("3x enigmaticaddons:earth_heart_fragment")
        }else if(math<0.7){
            event.addDrop("2x goety:ectoplasm")
        }else{
            event.addDrop("2x minecraft:iron_ingot")
        }
    }
})
EntityEvents.spawned("minecraft:husk",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",3,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",9,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
    let math = Math.random(1)
    if(math<0.05){
        entity.setItemSlot("mainhand",Item.of("cataclysm:khopesh", '{Damage:0}'))
        entity.setItemSlot("offhand",Item.of("cataclysm:khopesh", '{Damage:0}'))
        entity.setItemSlot("head",Item.of("cataclysm:bone_reptile_helmet", '{Damage:0}'))
        entity.setItemSlot("chest",Item.of("cataclysm:bone_reptile_chestplate", '{Damage:0}'))
        entity.modifyAttribute("minecraft:generic.max_health","elite",1,"multiply_total")
        entity.potionEffects.add("minecraft:glowing",-1,0)
        entity.potionEffects.add("goety:necrosis",-1,0)
        entity.persistentData.elite = 1
    }else if(math<0.25){
        if(!entity.persistentData.elite||entity.persistentData.elite != 1){
            entity.setItemSlot("mainhand","curlamoety:zombie_arm")
            entity.setItemSlot("head","goety:haunted_glass_mob_tinted")
            entity.setItemSlot("chest",Item.of("goety:cursed_knight_chestplate", '{Damage:0}'))
            entity.potionEffects.add("goety:necrosis",-1,0)
            entity.persistentData.elite = 2
        }
    }
})
EntityEvents.drops("minecraft:husk",event=>{
    let entity = event.entity
    if(entity.persistentData.elite == 1){
        event.addDrop("2x cataclysm:ancient_metal_ingot")
        event.addDrop("2x cataclysm:koboleton_bone")
        event.addDrop("minecraft:diamond")
        event.addDrop("minecraft:netherite_scrap")
    }else if(entity.persistentData.elite == 2){
        let math = Math.random(1)
        if(math<0.2){
            event.addDrop("minecraft:diamond")
        }else if(math<0.4){
            event.addDrop("3x enigmaticaddons:earth_heart_fragment")
        }else if(math<0.7){
            event.addDrop("2x goety:ectoplasm")
        }else{
            event.addDrop("2x minecraft:iron_ingot")
        }
    }
})
EntityEvents.spawned("goetyawaken:frozen_zombie",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",3,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",9,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
    let math = Math.random(1)
    if(math<0.05){
        entity.setItemSlot("mainhand",Item.of("twilightforest:ice_sword", '{Damage:0,Enchantments:[{id:"minecraft:sharpness",lvl:5s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("offhand",Item.of("minecraft:shield", '{Damage:0,Enchantments:[{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("head",Item.of("minecraft:diamond_helmet", '{Damage:0,Trim:{material:"goety:ecto",pattern:"minecraft:host"}}'))
        entity.setItemSlot("chest",Item.of("minecraft:diamond_chestplate", '{Damage:0,Trim:{material:"goety:ecto",pattern:"minecraft:wayfinder"}}'))
        entity.modifyAttribute("minecraft:generic.max_health","elite",1,"multiply_total")
        entity.potionEffects.add("minecraft:glowing",-1,0)
        entity.potionEffects.add("goety:necrosis",-1,0)
        entity.persistentData.elite = 1
    }else if(math<0.25){
        if(!entity.persistentData.elite||entity.persistentData.elite != 1){
            entity.setItemSlot("mainhand","curlamoety:zombie_arm")
            entity.setItemSlot("head","goety:haunted_glass_mob_tinted")
            entity.setItemSlot("chest",Item.of("goety:cursed_knight_chestplate", '{Damage:0}'))
            entity.potionEffects.add("goety:necrosis",-1,0)
            entity.persistentData.elite = 2
        }
    }
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.5,"multiply_total")
})
EntityEvents.drops("goetyawaken:frozen_zombie",event=>{
    let entity = event.entity
    if(entity.persistentData.elite == 1){
        event.addDrop("goety:chill_fabric")
        event.addDrop("minecraft:diamond")
        event.addDrop("minecraft:netherite_scrap")
    }else if(entity.persistentData.elite == 2){
        let math = Math.random(1)
        if(math<0.2){
            event.addDrop("minecraft:diamond")
        }else if(math<0.4){
            event.addDrop("3x enigmaticaddons:earth_heart_fragment")
        }else if(math<0.7){
            event.addDrop("2x goety:ectoplasm")
        }else{
            event.addDrop("2x minecraft:iron_ingot")
        }
    }
})
EntityEvents.spawned("goetyawaken:bouldering_zombie",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",3,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",9,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
    let math = Math.random(1)
    if(math<0.05){
        entity.setItemSlot("mainhand",Item.of("goety:diamond_ice_axe", '{Damage:0}'))
        entity.setItemSlot("offhand",Item.of("minecraft:potion", '{Potion:"minecraft:long_swiftness"}'))
        entity.setItemSlot("head",Item.of("minecraft:leather_helmet", '{Damage:0,Trim:{material:"minecraft:gold",pattern:"minecraft:vex"}}'))
        entity.setItemSlot("chest",Item.of("minecraft:leather_chestplate", '{Damage:0,Trim:{material:"minecraft:gold",pattern:"minecraft:ward"}}'))
        entity.setItemSlot("legs",Item.of("minecraft:leather_leggings", '{Damage:0,Trim:{material:"minecraft:gold",pattern:"minecraft:snout"}}'))
        entity.setItemSlot("feet",Item.of("minecraft:leather_boots", '{Damage:0,Trim:{material:"minecraft:gold",pattern:"minecraft:snout"}}'))
        entity.modifyAttribute("minecraft:generic.max_health","elite",1,"multiply_total")
        entity.potionEffects.add("minecraft:glowing",-1,0)
        entity.potionEffects.add("goety:necrosis",-1,0)
        entity.persistentData.elite = 1
    }else if(math<0.25){
        if(!entity.persistentData.elite||entity.persistentData.elite != 1){
            entity.setItemSlot("mainhand","curlamoety:zombie_arm")
            entity.setItemSlot("head","goety:haunted_glass_mob_tinted")
            entity.setItemSlot("chest",Item.of("goety:cursed_knight_chestplate", '{Damage:0}'))
            entity.potionEffects.add("goety:necrosis",-1,0)
            entity.persistentData.elite = 2
        }
    }
})
EntityEvents.drops("goetyawaken:bouldering_zombie",event=>{
    let entity = event.entity
    if(entity.persistentData.elite == 1){
        event.addDrop("4x minecraft:leather")
        event.addDrop("minecraft:diamond")
        event.addDrop("minecraft:netherite_scrap")
    }else if(entity.persistentData.elite == 2){
        let math = Math.random(1)
        if(math<0.2){
            event.addDrop("minecraft:diamond")
        }else if(math<0.4){
            event.addDrop("3x enigmaticaddons:earth_heart_fragment")
        }else if(math<0.7){
            event.addDrop("2x goety:ectoplasm")
        }else{
            event.addDrop("2x minecraft:iron_ingot")
        }
    }
})
EntityEvents.spawned("goety:frayed",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",3,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",9,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
    let math = Math.random(1)
    if(math<0.05){
        entity.setItemSlot("mainhand",Item.of("goety:stormlander", '{Damage:0,Enchantments:[{id:"goety:radius",lvl:2s},{id:"minecraft:sharpness",lvl:5s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("head","minecraft:lightning_rod")
        entity.setItemSlot("chest",Item.of("minecraft:chainmail_chestplate", '{Damage:0,Trim:{material:"minecraft:gold",pattern:"trials:flow"}}'))
        entity.setItemSlot("feet",Item.of("minecraft:netherite_boots", '{Damage:0,Trim:{material:"minecraft:gold",pattern:"trials:flow"}}'))
        entity.modifyAttribute("minecraft:generic.max_health","elite",1,"multiply_total")
        entity.potionEffects.add("minecraft:glowing",-1,0)
        entity.potionEffects.add("goety:necrosis",-1,0)
        entity.persistentData.elite = 1
    }else if(math<0.25){
        if(!entity.persistentData.elite||entity.persistentData.elite != 1){
            entity.setItemSlot("mainhand","curlamoety:zombie_arm")
            entity.setItemSlot("head","goety:haunted_glass_mob_tinted")
            entity.setItemSlot("chest",Item.of("goety:cursed_knight_chestplate", '{Damage:0}'))
            entity.potionEffects.add("goety:necrosis",-1,0)
            entity.persistentData.elite = 2
        }
    }
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.5,"multiply_total")
})
EntityEvents.drops("goety:frayed",event=>{
    let entity = event.entity
    if(entity.persistentData.elite == 1){
        event.addDrop("goety:stormlander")
        event.addDrop("minecraft:copper_block")
        event.addDrop("minecraft:diamond")
        event.addDrop("minecraft:netherite_scrap")
    }else if(entity.persistentData.elite == 2){
        let math = Math.random(1)
        if(math<0.2){
            event.addDrop("minecraft:diamond")
        }else if(math<0.4){
            event.addDrop("3x enigmaticaddons:earth_heart_fragment")
        }else if(math<0.7){
            event.addDrop("2x goety:ectoplasm")
        }else{
            event.addDrop("2x minecraft:iron_ingot")
        }
    }
})
EntityEvents.spawned("goetyawaken:jungle_zombie",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",3,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",9,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
    let math = Math.random(1)
    if(math<0.05){
        entity.setItemSlot("mainhand",Item.of("twilightforest:steeleaf_sword", '{Damage:0,Enchantments:[{id:"minecraft:sharpness",lvl:5s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("offhand",Item.of("minecraft:suspicious_stew", '{Effects:[{EffectDuration:240,EffectId:19,"forge:effect_id":"minecraft:poison"}]}'))
        entity.setItemSlot("head",Item.of("twilightforest:steeleaf_helmet", '{Damage:0,Enchantments:[{id:"minecraft:protection",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}],Trim:{material:"minecraft:emerald",pattern:"minecraft:silence"}}'))
        entity.setItemSlot("chest",Item.of("twilightforest:steeleaf_chestplate", '{Damage:0,Enchantments:[{id:"minecraft:protection",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}],Trim:{material:"minecraft:emerald",pattern:"trials:flow"}}'))
        entity.modifyAttribute("minecraft:generic.max_health","elite",1,"multiply_total")
        entity.potionEffects.add("minecraft:glowing",-1,0)
        entity.potionEffects.add("goety:necrosis",-1,0)
        entity.persistentData.elite = 1
    }else if(math<0.25){
        if(!entity.persistentData.elite||entity.persistentData.elite != 1){
            entity.setItemSlot("mainhand","curlamoety:zombie_arm")
            entity.setItemSlot("head","goety:haunted_glass_mob_tinted")
            entity.setItemSlot("chest",Item.of("goety:cursed_knight_chestplate", '{Damage:0}'))
            entity.potionEffects.add("goety:necrosis",-1,0)
            entity.persistentData.elite = 2
        }
    }
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.5,"multiply_total")
})
EntityEvents.drops("goetyawaken:jungle_zombie",event=>{
    let entity = event.entity
    if(entity.persistentData.elite == 1){
        event.addDrop("3x twilightforest:steeleaf_ingot")
        event.addDrop("2x minecraft:emerald")
        event.addDrop("minecraft:diamond")
        event.addDrop("minecraft:netherite_scrap")
    }else if(entity.persistentData.elite == 2){
        let math = Math.random(1)
        if(math<0.2){
            event.addDrop("minecraft:diamond")
        }else if(math<0.4){
            event.addDrop("3x enigmaticaddons:earth_heart_fragment")
        }else if(math<0.7){
            event.addDrop("2x goety:ectoplasm")
        }else{
            event.addDrop("2x minecraft:iron_ingot")
        }
    }
})
//下界类
EntityEvents.spawned("minecraft:zombified_piglin",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",1,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",4,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
    let math = Math.random(1)
    if(math<0.05){
        entity.setItemSlot("mainhand",Item.of("minecraft:golden_sword", '{Damage:0,Enchantments:[{id:"minecraft:sharpness",lvl:5s},{id:"enigmaticaddons:frost_aspect",lvl:2s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("offhand","minecraft:golden_apple")
        entity.setItemSlot("head",Item.of("minecraft:golden_helmet", '{Damage:0,Enchantments:[{id:"minecraft:protection",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}],Trim:{material:"minecraft:redstone",pattern:"minecraft:snout"}}'))
        entity.setItemSlot("chest",Item.of("minecraft:golden_chestplate", '{Damage:0,Enchantments:[{id:"minecraft:protection",lvl:2s},{id:"minecraft:vanishing_curse",lvl:1s}],Trim:{material:"minecraft:redstone",pattern:"minecraft:snout"}}'))
        entity.setItemSlot("legs",Item.of("minecraft:golden_leggings", '{Damage:0,Enchantments:[{id:"minecraft:protection",lvl:2s},{id:"minecraft:vanishing_curse",lvl:1s}],Trim:{material:"minecraft:redstone",pattern:"minecraft:snout"}}'))
        entity.setItemSlot('feet',Item.of("minecraft:golden_boots", '{Damage:0,Enchantments:[{id:"minecraft:protection",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"minecraft:soul_speed",lvl:3s}],Trim:{material:"minecraft:redstone",pattern:"minecraft:snout"}}'))
        entity.modifyAttribute("minecraft:generic.max_health","elite",0.6,"multiply_total")
        entity.potionEffects.add("minecraft:glowing",-1,0)
        entity.potionEffects.add("goety:necrosis",-1,0)
        entity.persistentData.elite = 1
    }else if(math<0.25){
        if(!entity.persistentData.elite||entity.persistentData.elite != 1){
            entity.setItemSlot("mainhand","netherite_sword")
            entity.setItemSlot("head","goety:gold_candelabra")
            entity.setItemSlot("chest",Item.of("goety:black_iron_chestplate", '{Damage:0}'))
            entity.potionEffects.add("goety:necrosis",-1,0)
            entity.persistentData.elite = 2
        }
    }
})
EntityEvents.drops("minecraft:zombified_piglin",event=>{
    let entity = event.entity
    if(entity.persistentData.elite == 1){
        event.addDrop("minecraft:emerald")
        event.addDrop("minecraft:golden_apple")
        event.addDrop("enigmaticaddons:ichor_droplet")
        event.addDrop("minecraft:netherite_scrap")
    }else if(entity.persistentData.elite == 2){
        let math = Math.random(1)
        if(math<0.2){
            event.addDrop("minecraft:netherite_scrap")
        }else if(math<0.4){
            event.addDrop("enigmaticaddons:ichor_droplet")
        }else if(math<0.7){
            event.addDrop("3x enigmaticaddons:earth_heart_fragment")
        }else{
            event.addDrop("minecraft:diamond")
        }
    }
})
EntityEvents.spawned("wither_skeleton",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",1,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",4,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
    let math = Math.random(1)
    if(math<0.05){
        entity.setItemSlot("mainhand",Item.of("curlamoety:wither_flamberge", '{Damage:0,Enchantments:[{id:"minecraft:sharpness",lvl:5s},{id:"goety_revelation:reality_piercer",lvl:5s},{id:"minecraft:fire_aspect",lvl:2s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("offhand",Item.of("goety:hunters_bow", '{Damage:0,Enchantments:[{id:"minecraft:flame",lvl:1s},{id:"minecraft:power",lvl:5s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("head",Item.of("minecraft:netherite_helmet", '{Damage:0,Enchantments:[{id:"minecraft:vanishing_curse",lvl:1s},{id:"enigmaticaddons:redemption_curse",lvl:1s}],Trim:{material:"minecraft:iron",pattern:"minecraft:rib"},kt_picked_up:1b}'))
        entity.setItemSlot("chest",Item.of("minecraft:iron_chestplate", '{Damage:0,Enchantments:[{id:"minecraft:vanishing_curse",lvl:1s},{id:"enigmaticaddons:redemption_curse",lvl:1s}],Trim:{material:"minecraft:netherite",pattern:"minecraft:silence"}}'))
        entity.setItemSlot("legs",Item.of("minecraft:netherite_leggings", '{Damage:0,Enchantments:[{id:"minecraft:vanishing_curse",lvl:1s},{id:"enigmaticaddons:redemption_curse",lvl:1s}],Trim:{material:"minecraft:iron",pattern:"minecraft:rib"},kt_picked_up:1b}'))
        entity.setItemSlot('feet',Item.of("minecraft:netherite_boots", '{Damage:0,Enchantments:[{id:"minecraft:vanishing_curse",lvl:1s},{id:"enigmaticaddons:redemption_curse",lvl:1s}],Trim:{material:"minecraft:iron",pattern:"minecraft:silence"},kt_picked_up:1b}'))
        entity.modifyAttribute("minecraft:generic.max_health","elite",0.6,"multiply_total")
        entity.potionEffects.add("minecraft:glowing",-1,0)
        entity.potionEffects.add("goety:necrosis",-1,0)
        entity.persistentData.elite = 1
    }else if(math<0.25){
        if(!entity.persistentData.elite||entity.persistentData.elite != 1){
            entity.setItemSlot("mainhand","curlamoety:wither_flamberge")
            entity.setItemSlot("head","goety:haunted_glass_mob_tinted")
            entity.setItemSlot("chest",Item.of("goety:black_iron_chestplate", '{Damage:0}'))
            entity.potionEffects.add("goety:necrosis",-1,0)
            entity.persistentData.elite = 2
        }
    }
})
EntityEvents.drops("wither_skeleton",event=>{
    let entity = event.entity
    if(entity.persistentData.elite == 1){
        event.addDrop("minecraft:wither_skeleton_skull")
        event.addDrop("enigmaticaddons:ichor_droplet")
        event.addDrop("minecraft:enchanted_golden_apple")
        event.addDrop("minecraft:netherite_ingot")
    }else if(entity.persistentData.elite == 2){
        let math = Math.random(1)
        if(math<0.2){
            event.addDrop("minecraft:netherite_scrap")
        }else if(math<0.4){
            event.addDrop("enigmaticaddons:ichor_droplet")
        }else if(math<0.7){
            event.addDrop("3x enigmaticaddons:earth_heart_fragment")
        }else{
            event.addDrop("minecraft:diamond")
        }
    }
})
EntityEvents.spawned("minecraft:hoglin",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",1,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",4,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
})
EntityEvents.spawned("minecraft:zoglin",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",1,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",4,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
})
EntityEvents.spawned("minecraft:blaze",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",1,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",4,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
})
EntityEvents.spawned("minecraft:piglin_brute",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",1,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",4,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
    let math = Math.random(1)
    if(math<0.05){
        entity.setItemSlot("mainhand",Item.of("minecraft:netherite_axe", '{Damage:0,Enchantments:[{id:"minecraft:sharpness",lvl:5s},{id:"minecraft:fire_aspect",lvl:2s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("offhand",Item.of("minecraft:netherite_axe", '{Damage:0,Enchantments:[{id:"minecraft:sharpness",lvl:5s},{id:"minecraft:fire_aspect",lvl:2s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("head",Item.of("minecraft:netherite_helmet", '{Damage:0,Enchantments:[{id:"minecraft:vanishing_curse",lvl:1s}],Trim:{material:"minecraft:gold",pattern:"minecraft:snout"}}'))
        entity.setItemSlot("chest",Item.of("minecraft:netherite_chestplate", '{Damage:0,Enchantments:[{id:"minecraft:protection",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}],Trim:{material:"minecraft:gold",pattern:"minecraft:snout"}}'))
        entity.setItemSlot("legs",Item.of("minecraft:netherite_leggings", '{Damage:0,Enchantments:[{id:"minecraft:protection",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}],Trim:{material:"minecraft:gold",pattern:"minecraft:snout"}}'))
        entity.setItemSlot('feet',Item.of("minecraft:netherite_boots", '{Damage:0,Enchantments:[{id:"minecraft:vanishing_curse",lvl:1s}],Trim:{material:"minecraft:gold",pattern:"minecraft:snout"}}'))
        entity.modifyAttribute("minecraft:generic.max_health","elite",0.6,"multiply_total")
        entity.potionEffects.add("minecraft:glowing",-1,0)
        entity.potionEffects.add("minecraft:regeneration",-1,0)
        entity.persistentData.elite = 1
    }else if(math<0.25){
        if(!entity.persistentData.elite||entity.persistentData.elite != 1){
            entity.setItemSlot("mainhand",Item.of("minecraft:netherite_axe", '{Damage:0}'))
            entity.setItemSlot("head","goety:gold_candelabra")
            entity.setItemSlot("chest",Item.of("goety:black_iron_chestplate", '{Damage:0}'))
            entity.potionEffects.add("minecraft:regeneration",-1,0)
            entity.persistentData.elite = 2
        }
    }
})
EntityEvents.drops("minecraft:piglin_brute",event=>{
    let entity = event.entity
    if(entity.persistentData.elite == 1){
        event.addDrop("minecraft:gold_block")
        event.addDrop("enigmaticaddons:ichor_droplet")
        event.addDrop(Item.of("minecraft:enchanted_golden_apple", '{CustomPotionEffects:[{Ambient:0b,Amplifier:3b,CurativeItems:[{Count:1b,id:"minecraft:milk_bucket"}],Duration:7200,Id:5,"PLF:Amplifier":3,ShowIcon:1b,ShowParticles:1b,"forge:id":"minecraft:strength"},{Ambient:0b,Amplifier:3b,CurativeItems:[{Count:1b,id:"minecraft:milk_bucket"}],Duration:3600,Id:11,"PLF:Amplifier":3,ShowIcon:1b,ShowParticles:1b,"forge:id":"minecraft:resistance"},{Ambient:0b,Amplifier:3b,CurativeItems:[{Count:1b,id:"minecraft:milk_bucket"}],Duration:18000,Id:119,"PLF:Amplifier":3,ShowIcon:1b,ShowParticles:1b,"forge:id":"goetydelight:spell_mastery"}],RepairCost:0,display:{Name:\'{"text":"Good Apple"}\'}}'))
        event.addDrop("minecraft:netherite_ingot")
    }else if(entity.persistentData.elite == 2){
        let math = Math.random(1)
        if(math<0.2){
            event.addDrop("minecraft:netherite_scrap")
        }else if(math<0.4){
            event.addDrop("enigmaticaddons:ichor_droplet")
        }else if(math<0.7){
            event.addDrop("3x enigmaticaddons:earth_heart_fragment")
        }else{
            event.addDrop("minecraft:diamond")
        }
    }
})
EntityEvents.spawned("minecraft:piglin",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",1,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",4,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
    let math = Math.random(1)
    if(math<0.05){
        entity.setItemSlot("mainhand",Item.of("minecraft:golden_sword", '{Damage:0,Enchantments:[{id:"minecraft:sharpness",lvl:5s},{id:"goety_revelation:reality_piercer",lvl:5s},{id:"enigmaticaddons:frost_aspect",lvl:2s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("head",Item.of("minecraft:golden_helmet", '{Damage:0,Enchantments:[{id:"minecraft:protection",lvl:2s},{id:"minecraft:vanishing_curse",lvl:1s}],Trim:{material:"minecraft:netherite",pattern:"minecraft:snout"}}'))
        entity.setItemSlot("chest",Item.of("minecraft:golden_chestplate", '{Damage:0,Enchantments:[{id:"minecraft:protection",lvl:2s},{id:"minecraft:vanishing_curse",lvl:1s}],Trim:{material:"minecraft:netherite",pattern:"minecraft:snout"}}'))
        entity.setItemSlot("legs",Item.of("minecraft:golden_leggings", '{Damage:0,Enchantments:[{id:"minecraft:protection",lvl:2s},{id:"minecraft:vanishing_curse",lvl:1s}],Trim:{material:"minecraft:netherite",pattern:"minecraft:snout"}}'))
        entity.setItemSlot('feet',Item.of("minecraft:golden_boots", '{Damage:0,Enchantments:[{id:"minecraft:protection",lvl:2s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"minecraft:soul_speed",lvl:3s}],Trim:{material:"minecraft:netherite",pattern:"minecraft:snout"}}'))
        entity.modifyAttribute("minecraft:generic.max_health","elite",0.6,"multiply_total")
        entity.potionEffects.add("minecraft:glowing",-1,0)
        entity.potionEffects.add("minecraft:regeneration",-1,0)
        entity.persistentData.elite = 1
    }else if(math<0.25){
        if(!entity.persistentData.elite||entity.persistentData.elite != 1){
            entity.setItemSlot("mainhand",Item.of("minecraft:crossbow", '{Damage:0,Enchantments:[{id:"minecraft:quick_charge",lvl:3s}]}'))
            entity.setItemSlot("head","goety:gold_candelabra")
            entity.setItemSlot("chest",Item.of("goety:black_iron_chestplate", '{Damage:0}'))
            entity.potionEffects.add("minecraft:regeneration",-1,0)
            entity.persistentData.elite = 2
        }
    }
})
EntityEvents.drops("minecraft:piglin",event=>{
    let entity = event.entity
    if(entity.persistentData.elite == 1){
        event.addDrop("3x minecraft:gold_ingot")
        event.addDrop("enigmaticaddons:ichor_droplet")
        event.addDrop("minecraft:enchanted_golden_apple")
        event.addDrop("2x minecraft:netherite_scrap")
    }else if(entity.persistentData.elite == 2){
        let math = Math.random(1)
        if(math<0.2){
            event.addDrop("minecraft:netherite_scrap")
        }else if(math<0.4){
            event.addDrop("enigmaticaddons:ichor_droplet")
        }else if(math<0.7){
            event.addDrop("3x enigmaticaddons:earth_heart_fragment")
        }else{
            event.addDrop("minecraft:diamond")
        }
    }
})
EntityEvents.spawned("minecraft:magma_cube",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",1,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",4,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
    let size = entity.getNbt().getInt("Size")
    if(size >= 3){
        let math = Math.random(1)
        if(math<0.2){
            entity.modifyAttribute("minecraft:generic.max_health","elite",1,"multiply_total")
            entity.potionEffects.add("minecraft:glowing",-1,0)
            entity.potionEffects.add("minecraft:regeneration",-1,0)
            entity.persistentData.elite = 1
        }
    }
})
EntityEvents.hurt("minecraft:magma_cube",event=>{
    let {entity,source,level} = event
    let actual = source.actual
    if(!actual)return;
    if(!actual.isLiving())return;
    if(entity.persistentData.elite == 1){
        if(!entity.potionEffects.isActive("curlamoety:generic_cooldown")){
            let {x,y,z} = actual
            let summon = level.createEntity("cataclysm:flame_strike")
            summon.setOwner(entity)
            summon.setPosition(x,y,z)
            summon.setRadius(2)
            summon.setDamage(10)
            summon.setHpDamage(5)
            summon.setDuration(100)
            summon.spawn()
            entity.potionEffects.add("curlamoety:generic_cooldown",200,0)
        }
    }
})
EntityEvents.drops("minecraft:magma_cube",event=>{
    let entity = event.entity
    if(entity.persistentData.elite == 1){
        event.addDrop("minecraft:blaze_rod")
        event.addDrop("enigmaticaddons:ichor_droplet")
        event.addDrop("cataclysm:dying_ember")
        event.addDrop("minecraft:netherite_scrap")
    }
})
EntityEvents.spawned("minecraft:ghast",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",1,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",4,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
})
EntityEvents.spawned("goetyawaken:hostile_wildfire",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.5,"multiply_total")
})
//遣使
EntityEvents.spawned("goety:endersent",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension != "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",-0.96667,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",-0.8,"multiply_total")
    }
})
EntityEvents.spawned("goetyawaken:endersent_servant",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(entity instanceof $Summoned){
        if(entity.getOwner() && entity.getOwner().isPlayer()){
            return;
        }
    }
    if(dimension != "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",-0.96667,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",-0.8,"multiply_total")
    }
    
})
EntityEvents.spawned("goety:watchling",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension != "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",-0.8,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",-0.5,"multiply_total")
    }
})
EntityEvents.spawned("goety:blastling",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension != "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",-0.8,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",-0.5,"multiply_total")
    }
})
EntityEvents.spawned("goety:snareling",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension != "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",-0.8,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",-0.5,"multiply_total")
    }
})
EntityEvents.spawned("goety:watchling_servant",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(entity instanceof $Summoned){
        if(entity.getOwner()){
            if(entity.getOwner().isPlayer()){
                return;
            }else if(entity.getOwner().getOwner()){
                if(entity.getOwner().getOwner().isPlayer()){
                    return;
                }
            }
            
        }
    }
    if(dimension != "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",-0.8,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",-0.5,"multiply_total")
    }
})
EntityEvents.spawned("goety:blastling_servant",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(entity instanceof $Summoned){
        if(entity.getOwner()){
            if(entity.getOwner().isPlayer()){
                return;
            }else if(entity.getOwner().getOwner()){
                if(entity.getOwner().getOwner().isPlayer()){
                    return;
                }
            }
            
        }
    }
    if(dimension != "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",-0.8,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",-0.5,"multiply_total")
    }
})
EntityEvents.spawned("goety:snareling_servant",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(entity instanceof $Summoned){
        if(entity.getOwner()){
            if(entity.getOwner().isPlayer()){
                return;
            }else if(entity.getOwner().getOwner()){
                if(entity.getOwner().getOwner().isPlayer()){
                    return;
                }
            }
            
        }
    }
    if(dimension != "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",-0.8,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",-0.5,"multiply_total")
    }
})
//死法
EntityEvents.spawned("goety:necromancer",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.4,"multiply_total")
})
EntityEvents.spawned("goety:cairn_necromancer",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.4,"multiply_total")
})
EntityEvents.spawned("goety:mossy_necromancer",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.4,"multiply_total")
})
EntityEvents.spawned("goety_cataclysm:draugr_necromancer",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.4,"multiply_total")
})
EntityEvents.spawned("goetyawaken:hostile_drowned_necromancer",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.6,"multiply_total")
})
EntityEvents.spawned("goety:wither_necromancer",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.6,"multiply_total")
})
EntityEvents.spawned("goetyawaken:wraith_necromancer",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.6,"multiply_total")
})

//冥教
EntityEvents.spawned("goety:maverick",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.5,"multiply_total")
})
EntityEvents.spawned("goety:reprobate",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.5,"multiply_total")
})
EntityEvents.spawned("goety:heretic",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.75,"multiply_total")
})
EntityEvents.spawned("goety:warlock",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.75,"multiply_total")
})
//刌民
EntityEvents.spawned("minecraft:vindicator",event=>{
    let entity = event.entity
    let math = Math.random(1)
    if(math<0.05){
        entity.setItemSlot("mainhand",Item.of("goety:rampaging_axe", '{Damage:0,Enchantments:[{id:"minecraft:sharpness",lvl:5s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("offhand","minecraft:totem_of_undying")
        entity.setItemSlot("head","goety:tall_skull")
        entity.setItemSlot("chest","minecraft:netherite_chestplate")
        entity.setItemSlot("legs","minecraft:iron_leggings")
        entity.setItemSlot("feet","minecraft:iron_boots")
        entity.modifyAttribute("minecraft:generic.max_health","elite",1,"multiply_total")
        entity.potionEffects.add("minecraft:glowing",-1,0)
        entity.potionEffects.add("minecraft:regeneration",-1,0)
        entity.persistentData.elite = 1
    }else if(math<0.25){
        if(!entity.persistentData.elite||entity.persistentData.elite != 1){
            entity.setItemSlot("mainhand","minecraft:netherite_axe")
            entity.setItemSlot("head","goety:tall_skull")
            entity.potionEffects.add("minecraft:regeneration",-1,0)
            entity.persistentData.elite = 2
        }
    }
})
EntityEvents.drops("minecraft:vindicator",event=>{
    let entity = event.entity
    if(entity.persistentData.elite == 1){
        event.addDrop("2x goety:magic_emerald")
        event.addDrop("goety:pale_steel_ingot")
        event.addDrop("minecraft:diamond")
        event.addDrop("minecraft:netherite_scrap")
        event.addWeightedLoot([2],[
            Item.of("2x minecraft:iron_ingot").withChance(4),
            Item.of("minecraft:redstone_block").withChance(3),
            Item.of("minecraft:diamond").withChance(2),
            Item.of("3x enigmaticaddons:earth_heart_fragment").withChance(2),
            Item.of("2x goety:ectoplasm").withChance(3),
            Item.of("4x minecraft:emerald").withChance(3)
        ])
    }else if(entity.persistentData.elite == 2){
        event.addWeightedLoot([2,3],[
            Item.of("2x minecraft:iron_ingot").withChance(4),
            Item.of("minecraft:redstone_block").withChance(3),
            Item.of("minecraft:diamond").withChance(2),
            Item.of("3x enigmaticaddons:earth_heart_fragment").withChance(2),
            Item.of("2x goety:ectoplasm").withChance(3),
            Item.of("4x minecraft:emerald").withChance(3)
        ])
    }
})
EntityEvents.spawned("minecraft:pillager",event=>{
    let entity = event.entity
    let math = Math.random(1)
    if(math<0.05){
        //entity.setItemSlot("mainhand",)
        entity.setItemSlot("offhand",Item.of("minecraft:crossbow", '{Damage:0,Enchantments:[{id:"enigmaticlegacy:sharpshooter",lvl:5s},{id:"minecraft:quick_charge",lvl:3s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
        entity.setItemSlot("head","goety:tall_skull")
        entity.setItemSlot("chest","minecraft:diamond_chestplate")
        entity.setItemSlot("legs","minecraft:iron_leggings")
        entity.setItemSlot("feet","minecraft:iron_boots")
        entity.modifyAttribute("minecraft:generic.max_health","elite",1,"multiply_total")
        entity.potionEffects.add("minecraft:glowing",-1,0)
        entity.potionEffects.add("minecraft:regeneration",-1,0)
        entity.persistentData.elite = 1
    }else if(math<0.25){
        if(!entity.persistentData.elite||entity.persistentData.elite != 1){
            entity.setItemSlot("mainhand",Item.of("minecraft:crossbow", '{Damage:0,Enchantments:[{id:"minecraft:quick_charge",lvl:3s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
            entity.setItemSlot("head","goety:tall_skull")
            entity.potionEffects.add("minecraft:regeneration",-1,0)
            entity.persistentData.elite = 2
        }
    }
})
EntityEvents.drops("minecraft:pillager",event=>{
    let entity = event.entity
    if(entity.persistentData.elite == 1){
        event.addDrop("2x goety:magic_emerald")
        event.addDrop("goety:pale_steel_ingot")
        event.addDrop("minecraft:diamond")
        event.addDrop("minecraft:netherite_scrap")
        event.addWeightedLoot([2],[
            Item.of("2x minecraft:iron_ingot").withChance(4),
            Item.of("minecraft:redstone_block").withChance(3),
            Item.of("minecraft:diamond").withChance(2),
            Item.of("3x enigmaticaddons:earth_heart_fragment").withChance(2),
            Item.of("2x goety:ectoplasm").withChance(3),
            Item.of("4x minecraft:emerald").withChance(3)
        ])
    }else if(entity.persistentData.elite == 2){
        event.addWeightedLoot([2,3],[
            Item.of("2x minecraft:iron_ingot").withChance(4),
            Item.of("minecraft:redstone_block").withChance(3),
            Item.of("minecraft:diamond").withChance(2),
            Item.of("3x enigmaticaddons:earth_heart_fragment").withChance(2),
            Item.of("2x goety:ectoplasm").withChance(3),
            Item.of("4x minecraft:emerald").withChance(3)
        ])
    }
})
EntityEvents.spawned("goety:trampler",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.6,"multiply_total")
})
EntityEvents.spawned("goety:preacher",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.6,"multiply_total")
})
EntityEvents.spawned("goety:piker",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.6,"multiply_total")
})
EntityEvents.spawned("goety:crusher",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.6,"multiply_total")
})
EntityEvents.spawned("goety:cryologer",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.6,"multiply_total")
})
EntityEvents.spawned("goetyawaken:arch_illusioner",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.6,"multiply_total")
})
EntityEvents.spawned("goety:sorcerer",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.8,"multiply_total")
})
EntityEvents.spawned("goetyawaken:hostile_royalguard",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.8,"multiply_total")
})
EntityEvents.spawned("goety:envioker",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.6,"multiply_total")
})
EntityEvents.spawned("goety:tormentor",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.6,"multiply_total")
})
//其他敌对仆从
EntityEvents.spawned("goetyawaken:hostile_twilight_goat",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.5,"multiply_total")
})
EntityEvents.spawned("goetyawaken:hostile_gnasher",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.5,"multiply_total")
})
EntityEvents.spawned("goety:blackguard_servant",event=>{
    let entity = event.entity
    if(entity instanceof $Summoned){
        if(entity.getOwner()){
            if(entity.getOwner().isPlayer()){
                return;
            }else if(entity.getOwner().getOwner()){
                if(entity.getOwner().getOwner().isPlayer()){
                    return;
                }
            }
            
        }
    }
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.6,"multiply_total")
})
EntityEvents.spawned("goety:vanguard_servant",event=>{
    let entity = event.entity
    if(entity instanceof $Summoned){
        if(entity.getOwner()){
            if(entity.getOwner().isPlayer()){
                return;
            }else if(entity.getOwner().getOwner()){
                if(entity.getOwner().getOwner().isPlayer()){
                    return;
                }
            }
            
        }
    }
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.5,"multiply_total")
})
//杂项
EntityEvents.spawned("minecraft:creeper" ,event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",3,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",9,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
})
EntityEvents.spawned("minecraft:enderman",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",3,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",9,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
    let math = Math.random(1)
    if(math<0.05){
        entity.modifyAttribute("minecraft:generic.max_health","elite",0.5,"multiply_total")
        entity.setItemSlot("mainhand",Item.of("goety_revelation:spectre_whip", '{Damage:0,Enchantments:[{id:"goety_revelation:reality_piercer",lvl:5s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"minecraft:sharpness",lvl:5s}]}'))
        entity.setItemSlot("chest",Item.of("sophisticatedbackpacks:backpack", '{borderColor:8991416,clothColor:1908001}'))
        entity.setItemSlot("legs",Item.of("cataclysm:cursium_leggings", '{Enchantments:[{id:"minecraft:vanishing_curse",lvl:1s},{id:"minecraft:protection",lvl:4s}]}'))
        entity.potionEffects.add("minecraft:glowing",-1,0)
        entity.potionEffects.add("minecraft:regeneration",-1,0)
        entity.potionEffects.add("goetydelight:void_affix",-1,0)
        entity.persistentData.elite = 1
        let summon = entity.level.createEntity("minecraft:dragon_fireball")
        let {x,y,z} = entity
        summon.setPosition(x,y,z)
        summon.spawn()
        summon.startRiding(entity)
    }else if(math<0.25){
        if(!entity.persistentData.elite||entity.persistentData.elite != 1){
            entity.setItemSlot("mainhand",Item.of("goety_revelation:venomous_spider_whip", '{Damage:0}'))
            entity.setItemSlot("chest",Item.of("goety:cursed_knight_chestplate", '{Damage:0}'))
            entity.potionEffects.add("minecraft:regeneration",-1,0)
            entity.persistentData.elite = 2
        }
    }
    
})
EntityEvents.death("minecraft:enderman",event=>{
    let entity = event.entity
    let passengers = entity.getPassengers()
    if(passengers){
        passengers.forEach(entity=>{
            entity.stopRiding()
            entity.setMotion(0,-1,0)
        })
    }
})
EntityEvents.drops("minecraft:enderman",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_end"){
        if(entity.persistentData.elite == 1){
            event.addDrop("2x minecraft:ender_eye")
            event.addDrop("2x enigmaticlegacy:astral_dust")
            event.addDrop("2x minecraft:netherite_scrap")
            event.addDrop("enigmaticlegacy:etherium_ore")
        }else if(entity.persistentData.elite == 2){
            let math = Math.random(1)
            if(math<0.2){
                event.addDrop("enigmaticlegacy:etherium_ore")
            }else if(math<0.4){
                event.addDrop("2x enigmaticlegacy:astral_dust")
            }else if(math<0.7){
                event.addDrop("minecraft:netherite_scrap")
            }else{
                event.addDrop("3x enigmaticaddons:earth_heart_fragment")
            }
        }
        
    }else{
        if(entity.persistentData.elite == 1){
            event.addDrop("2x minecraft:ender_eye")
            event.addDrop("2x minecraft:diamond")
            event.addDrop("2x minecraft:netherite_scrap")
        }else if(entity.persistentData.elite == 2){
            let math = Math.random(1)
            if(math<0.2){
                event.addDrop("minecraft:diamond")
            }else if(math<0.4){
                event.addDrop("3x enigmaticaddons:earth_heart_fragment")
            }else if(math<0.7){
                event.addDrop("2x goety:ectoplasm")
            }else{
                event.addDrop("2x minecraft:iron_ingot")
            }
        }
    }
    
})
EntityEvents.spawned("minecraft:slime",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",3,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",9,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
    let size = entity.getNbt().getInt("Size")
    if(size >= 3){
        let math = Math.random(1)
        if(math<0.2){
            entity.modifyAttribute("minecraft:generic.max_health","elite",1,"multiply_total")
            entity.potionEffects.add("minecraft:glowing",-1,0)
            entity.potionEffects.add("minecraft:regeneration",-1,2)
            entity.potionEffects.add("trials:infested",1200,1)
            entity.potionEffects.add("trials:winded",-1,1)
            entity.potionEffects.add("minecraft:poison",-1,1)
            entity.persistentData.elite = 1
        }
    }
    
})
EntityEvents.drops("minecraft:slime",event=>{
    let entity = event.entity
    if(entity.persistentData.elite == 1){
        event.addDrop("minecraft:slime_block")
        event.addDrop("minecraft:diamond")
        event.addDrop("minecraft:netherite_scrap")
    }
})
EntityEvents.spawned("goety:wraith",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",3,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",9,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
})
EntityEvents.spawned("goety:reaper",event=>{
    let entity = event.entity
    let dimension = entity.level.getDimension()
    if(dimension == "minecraft:the_nether"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",3,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
    }else if(dimension == "minecraft:the_end"){
        entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",9,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
    }
})
//巫妖仆从
EntityEvents.spawned("goetytwilight:lich_servant",event=>{
    let entity = event.entity
    entity.modifyAttribute("minecraft:generic.max_health","normal_modify",14,"multiply_total")
})
//BOSS
EntityEvents.spawned("goety:apostle",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    if(entity.nbt.get("isApollyon") == true){
        let dimension = entity.level.getDimension()
        if(dimension == "minecraft:the_nether"){
            entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.3,"addition")
            entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.1,"addition")
        }else{
            entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.6,"addition")
            entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.25,"addition")
        }
    }else{
        entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.5,"addition")
        entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.2,"addition")
    }
    entity.modifyAttribute("minecraft:generic.knockback_resistance","boss_mocify",0.23,"addition")
    entity.setItemSlot("head",Item.of("enigmaticlegacy:etherium_helmet", '{Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}',))
    entity.setItemSlot("chest",Item.of("enigmaticlegacy:etherium_chestplate", '{Damage:0,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"minecraft:protection",lvl:12s}],RepairCost:0,Unbreakable:1b}'))
    entity.setItemSlot("legs",Item.of("enigmaticlegacy:etherium_leggings", '{Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
    entity.setItemSlot("feet",Item.of("enigmaticlegacy:etherium_boots", '{Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
})
EntityEvents.spawned("goety:ender_keeper",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.5,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.2,"addition")
    entity.setItemSlot("head",Item.of("enigmaticlegacy:etherium_helmet", '{Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
    entity.setItemSlot("chest",Item.of("enigmaticlegacy:etherium_chestplate", '{Damage:0,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"minecraft:protection",lvl:12s}],RepairCost:0,Unbreakable:1b}'))
    entity.setItemSlot("legs",Item.of("enigmaticlegacy:etherium_leggings", '{Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
    entity.setItemSlot("feet",Item.of("enigmaticlegacy:etherium_boots", '{Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
})
EntityEvents.spawned("goetyawaken:nameless_one",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.5,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.2,"addition")
    entity.setItemSlot("head",Item.of("minecraft:air"))
    entity.setItemSlot("chest",Item.of("minecraft:air"))
    entity.setItemSlot("legs",Item.of("minecraft:air"))
    entity.setItemSlot("feet",Item.of("minecraft:air"))
})
EntityEvents.spawned("goetyawaken:hostile_mushroom_monstrosity",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.5,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.2,"addition")
    entity.setItemSlot("head",Item.of("enigmaticlegacy:etherium_helmet", '{Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
    entity.setItemSlot("chest",Item.of("enigmaticlegacy:etherium_chestplate", '{Damage:0,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"minecraft:protection",lvl:10s}],RepairCost:0,Unbreakable:1b}'))
    entity.setItemSlot("legs",Item.of("enigmaticlegacy:etherium_leggings", '{Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
    entity.setItemSlot("feet",Item.of("enigmaticlegacy:etherium_boots", '{Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
})
EntityEvents.spawned("cataclysm:ignis",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.5,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.2,"addition")
    entity.setItemSlot("head",Item.of("cataclysm:ignitium_helmet", '{Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
    entity.setItemSlot("chest",Item.of("cataclysm:ignitium_chestplate", '{Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"minecraft:protection",lvl:10s},{id:"goetydelight:soul_healing",lvl:1s}]}'))
})
EntityEvents.spawned("cataclysm:scylla",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.4,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
    entity.setItemSlot("chest",Item.of("minecraft:netherite_chestplate", '{Damage:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"minecraft:protection",lvl:10s},{id:"goetydelight:soul_healing",lvl:1s}]}'))
    entity.setItemSlot("legs",Item.of("minecraft:netherite_leggings", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
    entity.setItemSlot("feet",Item.of("minecraft:netherite_boots", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
}) 
EntityEvents.spawned("cataclysm:maledictus",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.4,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
    entity.setItemSlot("head",Item.of("cataclysm:cursium_helmet",'{Unbreakable:1b}'))
    entity.setItemSlot("chest",Item.of("cataclysm:cursium_chestplate", '{Unbreakable:1b,Enchantments:[{id:"minecraft:vanishing_curse",lvl:1s},{id:"minecraft:protection",lvl:10s},{id:"goetydelight:soul_healing",lvl:1s}]}'))
})
EntityEvents.spawned("cataclysm:the_leviathan",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.4,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
    entity.setItemSlot("chest",Item.of("minecraft:netherite_chestplate", '{Damage:0,Unbreakable:1b,Enchantments:[{id:""enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:protection",lvl:10s},{id:"goetydelight:soul_healing",lvl:1s}]}'))
    entity.setItemSlot("legs",Item.of("minecraft:netherite_leggings", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
    entity.setItemSlot("feet",Item.of("minecraft:netherite_boots", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
})
EntityEvents.spawned("cataclysm:netherite_monstrosity",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.3,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
    entity.setItemSlot("head",Item.of("cataclysm:monstrous_helm", '{Damage:0,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}],RepairCost:0,Unbreakable:1b}'))
    entity.setItemSlot("chest",Item.of("minecraft:netherite_chestplate", '{Damage:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"minecraft:protection",lvl:5s},{id:"goetydelight:soul_healing",lvl:1s}]}'))
    entity.setItemSlot("feet",Item.of("minecraft:netherite_boots", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
    
})
EntityEvents.spawned("goety:hostile_redstone_monstrosity",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.3,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
    entity.setItemSlot("head",Item.of("cataclysm:monstrous_helm", '{Damage:0,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}],RepairCost:0,Unbreakable:1b}'))
    entity.setItemSlot("chest",Item.of("minecraft:iron_chestplate", '{Damage:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"minecraft:protection",lvl:5s},{id:"goetydelight:soul_healing",lvl:1s}]}'))
    entity.setItemSlot("legs",Item.of("minecraft:diamond_leggings", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
    entity.setItemSlot("feet",Item.of("minecraft:diamond_leggings", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
})
EntityEvents.spawned("cataclysm:ancient_remnant",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.3,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
    entity.setItemSlot("head",Item.of("cataclysm:bone_reptile_helmet", '{Damage:0,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}],RepairCost:0,Unbreakable:1b}'))
    entity.setItemSlot("chest",Item.of("cataclysm:bone_reptile_chestplate", '{Damage:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"minecraft:protection",lvl:5s},{id:"goetydelight:soul_healing",lvl:1s}]}'))
    entity.setItemSlot("legs",Item.of("iron_leggings", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
    entity.setItemSlot("feet",Item.of("minecraft:netherite_boots", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
})
EntityEvents.spawned("cataclysm:the_harbinger",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.3,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
    entity.setItemSlot("head",Item.of("minecraft:netherite_helmet", '{Damage:0,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}],RepairCost:0,Unbreakable:1b}'))
    entity.setItemSlot("chest",Item.of("minecraft:netherite_chestplate", '{Damage:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"minecraft:protection",lvl:8s},{id:"goetydelight:soul_healing",lvl:1s}]}'))
    entity.setItemSlot("legs",Item.of("minecraft:netherite_leggings", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
})
EntityEvents.spawned("cataclysm:ender_guardian",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.3,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
    entity.setItemSlot("chest",Item.of("enigmaticlegacy:etherium_chestplate", '{Damage:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"minecraft:protection",lvl:8s},{id:"goetydelight:soul_healing",lvl:1s}]}'))
    entity.setItemSlot("legs",Item.of("enigmaticlegacy:etherium_leggings", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
    entity.setItemSlot("feet",Item.of("enigmaticlegacy:etherium_boots", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
})
EntityEvents.spawned("goety:vizier",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.3,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
    entity.setItemSlot("head",Item.of("goety:cursed_knight_helmet", '{Damage:0,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}],RepairCost:0,Unbreakable:1b}'))
    entity.setItemSlot("chest",Item.of("goety:black_iron_chestplate", '{Damage:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"minecraft:protection",lvl:8s},{id:"goetydelight:soul_healing",lvl:1s}]}'))
    entity.setItemSlot("legs",Item.of("goety:cursed_knight_leggings", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
    entity.setItemSlot("feet",Item.of("goety:cursed_knight_boots", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
})
EntityEvents.spawned("twilightforest:hydra",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.3,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
    entity.setItemSlot('mainhand',Item.of("twilightforest:fiery_sword", '{Damage:0,Enchantments:[{id:"minecraft:sharpness",lvl:10s}]}'))
    entity.setItemSlot("head",Item.of("cataclysm:monstrous_helm", '{Damage:0,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}],RepairCost:0,Unbreakable:1b}'))
    entity.setItemSlot("chest",Item.of("twilightforest:fiery_chestplate", '{Damage:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"minecraft:protection",lvl:8s},{id:"goetydelight:soul_healing",lvl:1s}]}'))
    entity.setItemSlot("legs",Item.of("twilightforest:fiery_leggings", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
    entity.setItemSlot("feet",Item.of("twilightforest:fiery_boots", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
})
EntityEvents.spawned("twilightforest:ur_ghast",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.3,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
    entity.setItemSlot('mainhand',Item.of("twilightforest:fiery_sword", '{Damage:0,Enchantments:[{id:"minecraft:sharpness",lvl:10s}]}'))
    entity.setItemSlot("head",Item.of("twilightforest:fiery_helmet", '{Damage:0,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}],RepairCost:0,Unbreakable:1b}'))
    entity.setItemSlot("chest",Item.of("twilightforest:fiery_chestplate", '{Damage:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"minecraft:protection",lvl:5s},{id:"goetydelight:soul_healing",lvl:1s}]}'))
    entity.setItemSlot("legs",Item.of("twilightforest:fiery_leggings", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
    entity.setItemSlot("feet",Item.of("minecraft:netherite_boots", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
})
EntityEvents.spawned("twilightforest:snow_queen",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.3,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
    entity.setItemSlot('mainhand',Item.of("twilightforest:ice_sword", '{Damage:0,Enchantments:[{id:"minecraft:sharpness",lvl:10s}]}'))
    entity.setItemSlot("head",Item.of("twilightforest:yeti_helmet", '{Damage:0,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}],RepairCost:0,Unbreakable:1b}'))
    entity.setItemSlot("chest",Item.of("twilightforest:yeti_chestplate", '{Damage:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"minecraft:protection",lvl:8s},{id:"goetydelight:soul_healing",lvl:1s}]}'))
    entity.setItemSlot("legs",Item.of("goeticlegacy:holy_leggings", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
    entity.setItemSlot("feet",Item.of("twilightforest:yeti_boots", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
})
EntityEvents.spawned("twilightforest:minoshroom",event=>{
    let entity = event.entity
    entity.setItemSlot('mainhand',Item.of("twilightforest:diamond_minotaur_axe", '{Damage:0,Enchantments:[{id:"minecraft:sharpness",lvl:5s}]}'))
    entity.setItemSlot("head",Item.of("cataclysm:monstrous_helm", '{Damage:0,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}],RepairCost:0,Unbreakable:1b}'))
    entity.setItemSlot("chest",Item.of("twilightforest:fiery_chestplate", '{Damage:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"minecraft:protection",lvl:5s},{id:"goetydelight:soul_healing",lvl:1s}]}'))
    entity.setItemSlot("legs",Item.of("twilightforest:fiery_leggings", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
    entity.setItemSlot("feet",Item.of("twilightforest:fiery_boots", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
})
EntityEvents.spawned("twilightforest:yeti",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.3,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
    entity.setItemSlot('mainhand',Item.of("twilightforest:ice_sword", '{Damage:0,Enchantments:[{id:"minecraft:sharpness",lvl:10s}]}'))
    entity.setItemSlot("head",Item.of("twilightforest:yeti_helmet", '{Damage:0,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}],RepairCost:0,Unbreakable:1b}'))
    entity.setItemSlot("chest",Item.of("twilightforest:yeti_chestplate", '{Damage:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s},{id:"minecraft:protection",lvl:5s},{id:"goetydelight:soul_healing",lvl:1s}]}'))
    entity.setItemSlot("legs",Item.of("twilightforest:arctic_leggings", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
    entity.setItemSlot("feet",Item.of("twilightforest:yeti_boots", '{Damage:0,RepairCost:0,Unbreakable:1b,Enchantments:[{id:"enigmaticlegacy:eternal_binding",lvl:1s},{id:"minecraft:vanishing_curse",lvl:1s}]}'))
})
EntityEvents.spawned("warden",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.25,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
})

//满血
global.FisrtSpawnMap = Utils.newMap()
EntityEvents.spawned(event=>{
    let entity = event.entity
    if(entity.isPlayer())return;
    if(entity.type == "goety:apostle")return
    if(entity == null || !entity.isLiving())return;
    if(entity.type == "minecraft:item")return;
    if(entity.isPlayer())return;
    entity.setHealth(entity.getMaxHealth())
})

EntityEvents.spawned("minecraft:player", event=>{
    let player = event.entity
    if(player.persistentData.ascension_pizza == 1){
        player.modifyAttribute("goety_revelation:spell_power","ascension_pizza_modify",3,"addition")
        player.modifyAttribute("goety_revelation:spell_power_multiplier","ascension_pizza_modify",0.03,"addition")
        player.modifyAttribute("goety_revelation:soul_decrease_reduction","ascension_pizza_modify",0.1,"addition")
        player.modifyAttribute("goety_revelation:resistance","ascension_pizza_modify",0.08,"addition")
        player.modifyAttribute("goeticlegacy:soul_regen_ratio","ascension_pizza_modify",0.1,"addition")
        player.modifyAttribute("goeticlegacy:magic_invul_reduction","ascension_pizza_modify",1,"addition")
        player.modifyAttribute("goeticlegacy:true_damage_ratio","ascension_pizza_modify",0.03,"addition")
    }
})