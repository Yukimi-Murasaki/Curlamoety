EntityEvents.spawned(event=>{
    let entity = event.entity
    if(entity == null || !entity.isLiving())return;
    if(entity.type == "minecraft:item")return;
    if(entity.isPlayer())return;
    let dimension = entity.level.getDimension()
    let max_health = entity.getMaxHealth()
    //血攻调整
    if(entity.type == "minecraft:enderman"||entity.type == "minecraft:skeleton"||entity.type == "goety:wraith"||entity.type == "goety:reaper"){
        if(dimension == "minecraft:the_nether"){
            entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",3,"multiply_total")
            entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
            entity.setHealth(max_health)
        }else if(dimension == "minecraft:the_end"){
            entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",9,"multiply_total")
            entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
            entity.setHealth(max_health)
        }
    }else if(entity.type == "minecraft:piglin"||entity.type == "minecraft:wither_skeleton"||entity.type == "minecraft:zombified_piglin"||entity.type == "minecraft:hoglin"||entity.type == "minecraft:zoglin"||entity.type == "minecraft:blaze"||entity.type == "minecraft:piglin_brute"||entity.type == "minecraft:magma_cube"||entity.type == "minecraft:ghast"||entity.type == "cataclysm.ignited_berserker"||entity.type == "cataclysm.ignited_renmant"){
        if(dimension == "minecraft:the_nether"){
            entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",1,"multiply_total")
            entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",1,"multiply_total")
            entity.setHealth(max_health)
        }else if(dimension == "minecraft:the_end"){
            entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",4,"multiply_total")
            entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",3,"multiply_total")
            entity.setHealth(max_health)
        }
    }else if(entity.type == "goety:endersant"){
        if(dimension == "minecraft:the_end"){
            entity.modifyAttribute("minecraft:generic.max_health","dimension_modify",29,"multiply_total")
            entity.modifyAttribute("minecraft:generic.attack_damage","dimension_modify",4,"multiply_total")
            entity.setHealth(max_health)
        }
    }else if(entity.type == "goety:cairn_necromancer"||entity.type == "goety:mossy_necromancer"||entity.type == "goety:necromancer"||entity.type == "goety_cataclysm:draugr_necromancer"){
        entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.4,"multiply_total")
        entity.setHealth(max_health)
    }else if(entity.type == "goetyawaken:hostile_twilight_goat"||entity.type == "goetyawaken:hostile_gnasher"||entity.type == "goetyawaken:frozen_zombie"||entity.type == "goetyawaken:jungle_zombie"||entity.type == "goetyawaken:sunken_skeleton"||entity.type == "goetyawaken:hostile_wildfire"||entity.type == "goety:maverick"||entity.type == "goety:reprobate"){
        entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.5,"multiply_total")
        entity.setHealth(max_health)
    }else if(entity.type == "goetyawaken:hostile_drowned_necromancer"||entity.type == "goety:wither_necromancer"||entity.type == "goety:trampler"||entity.type == "goety:preacher"||entity.type == "goety:piker"||entity.type == "goety:crusher"||entity.type == "goety:cryologer"||entity.type == "goetyawaken:arch_illusioner"||entity.type == "goetyawaken:wraith_necromancer"){
        entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.6,"multiply_total")
        entity.setHealth(max_health)
    }else if(entity.type == "goety:warlock"||entity.type == "goety:heretic"){
        entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.75,"multiply_total")
        entity.setHealth(max_health)
    }else if(entity.type == "goety:sorcerer"||entity.type == "goetyawaken:hostile_royalguard"){
        entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.8,"multiply_total")
        entity.setHealth(max_health)
    }else if(entity.type == "goety:envioker"||entity.type == "goety:tormentor"){
        entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.92,"multiply_total")
        entity.modifyAttribute("minecraft:generic.attack_damage","hostile_modify",-0.5,"multiply_total")
        entity.setHealth(max_health)
    }
    //穿甲调整
    if(entity.type == "goety:apostle"||entity.type == "goety:ender_keeper"||entity.type == "goetyawaken:nameless_one"||entity.type == "goetyawaken:mushroom_monstrosity"||entity.type == "cataclysm:ignis"){
        entity.modifyAttribute("goety_revelation:armor_penetration","dimension_modify",0.5,"addition")
        entity.modifyAttribute("goety_revelation:enchantment_piercing","dimension_modify",0.2,"addition")
    }else if(entity.type == "cataclysm:scylla"||entity.type =="cataclysm:maledictus"||entity.type == "leviathan"){
        entity.modifyAttribute("goety_revelation:armor_penetration","dimension_modify",0.4,"addition")
        entity.modifyAttribute("goety_revelation:enchantment_piercing","dimension_modify",0.15,"addition")
    }else if(entity.type == "cataclysm:netherite_monstrosity"||entity.type == "goety:hostile_redstone_monstrosity"||entity.type == "cataclysm:ancient_renmant"||entity.type == "cataclysm:the_harbinger"||entity.type == "cataclysm:ender_guardian"){
        entity.modifyAttribute("goety_revelation:armor_penetration","dimension_modify",0.3,"addition")
        entity.modifyAttribute("goety_revelation:enchantment_piercing","dimension_modify",0.15,"addition")
    }else{
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
    }
    //其他
    if(entity.type == "goetytwilight:lich_servant"){
        entity.modifyAttribute("minecraft:generic.max_health","normal_modify",14,"multiply_total")
        entity.setHealth(max_health)
    }
})