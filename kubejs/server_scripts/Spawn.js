//初步穿甲调整
EntityEvents.spawned(event=>{
    let entity = event.entity
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
    if(Math.random(1)<0.2){
        entity.setItemSlot("mainhand","curlamoety:skeleton_leg")
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
    if(Math.random(1)<0.2){
        entity.setItemSlot("mainhand","curlamoety:skeleton_leg")
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
    if(Math.random(1)<0.2){
        entity.setItemSlot("mainhand","curlamoety:skeleton_leg")
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
    if(Math.random(1)<0.2){
        entity.setItemSlot("mainhand","curlamoety:skeleton_leg")
    }
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.5,"multiply_total")
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
    if(Math.random(1)<0.2){
        entity.setItemSlot("mainhand","curlamoety:skeleton_leg")
    }
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.5,"multiply_total")
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
    if(Math.random(1)<0.2){
        entity.setItemSlot("mainhand","curlamoety:zombie_arm")
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
    if(Math.random(1)<0.2){
        entity.setItemSlot("mainhand","curlamoety:zombie_arm")
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
    if(Math.random(1)<0.2){
        entity.setItemSlot("mainhand","curlamoety:zombie_arm")
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
    if(Math.random(1)<0.2){
        entity.setItemSlot("mainhand","curlamoety:zombie_arm")
    }
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.5,"multiply_total")
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
    if(Math.random(1)<0.2){
        entity.setItemSlot("mainhand","curlamoety:zombie_arm")
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
    if(Math.random(1)<0.2){
        entity.setItemSlot("mainhand","curlamoety:zombie_arm")
    }
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.5,"multiply_total")
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
    if(Math.random(1)<0.2){
        entity.setItemSlot("mainhand","curlamoety:zombie_arm")
    }
    entity.modifyAttribute("minecraft:generic.max_health","hostile_modify",-0.5,"multiply_total")
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
    if(Math.random(1)<0.2){
        entity.setItemSlot("mainhand","curlamoety:wither_flamberge")
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
//杂项
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
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.5,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.2,"addition")
})
EntityEvents.spawned("goety:ender_keeper",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.5,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.2,"addition")
})
EntityEvents.spawned("goetyawaken:nameless_one",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.5,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.2,"addition")
})
EntityEvents.spawned("goetyawaken:hostile_mushroom_monstrosity",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.5,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.2,"addition")
})
EntityEvents.spawned("cataclysm:ignis",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.5,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.2,"addition")
})
EntityEvents.spawned("cataclysm:scylla",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.4,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
})
EntityEvents.spawned("cataclysm:maledictus",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.4,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
})
EntityEvents.spawned("cataclysm:the_leviathan",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.4,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
})
EntityEvents.spawned("cataclysm:netherite_monstrosity",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.3,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
})
EntityEvents.spawned("goety:hostile_redstone_monstrosity",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.3,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
})
EntityEvents.spawned("cataclysm:ancient_remnant",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.3,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
})
EntityEvents.spawned("cataclysm:the_harbinger",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.3,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
})
EntityEvents.spawned("cataclysm:ender_guardian",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.3,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
})
EntityEvents.spawned("goety:vizier",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.3,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
})
EntityEvents.spawned("twilightforest:hydra",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.3,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
})
EntityEvents.spawned("twilightforest:ur_ghast",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.3,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
})
EntityEvents.spawned("twilightforest:snow_queen",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.3,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
})
EntityEvents.spawned("warden",event=>{
    let entity = event.entity
    entity.removeAttribute("goety_revelation:armor_penetration","dimension_modify")
    entity.removeAttribute("goety_revelation:enchantment_piercing","dimension_modify")
    entity.modifyAttribute("goety_revelation:armor_penetration","boss_modify",0.25,"addition")
    entity.modifyAttribute("goety_revelation:enchantment_piercing","boss_modify",0.15,"addition")
})

//满血
EntityEvents.spawned(event=>{
    let entity = event.entity
    if(entity == null || !entity.isLiving())return;
    if(entity.type == "minecraft:item")return;
    if(entity.isPlayer())return;
    if(!entity.persistentData.firstSpawn||entity.persistentData.firstSpawn==0){
        entity.setHealth(entity.getMaxHealth())
        entity.persistentData.firstSpawn = 1
    }
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