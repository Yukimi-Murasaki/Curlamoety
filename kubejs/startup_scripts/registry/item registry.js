// priority: 0

// Visit the wiki for more info - https://curlamoety.com/

console.info('Hello, World! (Loaded startup scripts)')
StartupEvents.registry('item',Event=>{//物品注册
    Event.create("curlamoety:silver_rapier","sword")//白银西洋剑
    .fireResistant()
    Event.create("curlamoety:zombie_arm","sword")//僵尸臂
    Event.create("curlamoety:wither_flamberge","sword")//凋灵焰形剑
    Event.create("curlamoety:skeleton_leg","sword")//骷髅胫骨
    Event.create("curlamoety:nuke_hammer","pickaxe")//核子爆破锤
    .tier("diamond")
    .fireResistant()
    Event.create("curlamoety:platinum_punch","pickaxe")//白金之拳
    .tier("netherite")
    .fireResistant()
    Event.create("curlamoety:cursed_fragment")//诅咒残片
    Event.create("curlamoety:evil_spirit")//复仇邪魂
    .rarity("epic")
    .fireResistant()
    Event.create('curlamoety:glass_pickaxe','pickaxe')//玻璃工具
    .tier('stone')
    .maxDamage(39)
    Event.create('curlamoety:glass_axe','axe')
    .tier('stone')
    .maxDamage(39)
    Event.create('curlamoety:glass_hoe','hoe')
    .tier('stone')
    .maxDamage(39)
    Event.create('curlamoety:glass_shovel','shovel')
    .tier('stone')
    .maxDamage(39)
    Event.create('curlamoety:mary_sue_staff','anim_sword')//玛丽苏的枝杖
    .geoModel(geo=>{
        geo.setSimpleModel('curlamoety:geo/item/mary_sue_staff.geo.json')
        geo.setSimpleTexture('curlamoety:textures/item/3d/mary_sue_staff.png')
        geo.setSimpleAnimation('curlamoety:animations/item/mary_sue_staff.animation.json')
    })
    .addAnimation(state => state.setAndContinue(RawAnimation.begin().thenLoop("idle")))
    .tier('diamond')
    .rarity("epic")
    Event.create('curlamoety:mary_sue_staff_plus','anim_sword')//玛丽苏的枝杖+
    .geoModel(geo=>{
        geo.setSimpleModel('curlamoety:geo/item/mary_sue_staff_plus.geo.json')
        geo.setSimpleTexture('curlamoety:textures/item/3d/mary_sue_staff_plus.png')
        geo.setSimpleAnimation('curlamoety:animations/item/mary_sue_staff_plus.animation.json')
    })
    .addAnimation(state => state.setAndContinue(RawAnimation.begin().thenLoop("idle")))
    .tier('netherite')
    .rarity("epic")
    .fireResistant()
    Event.create("curlamoety:witch_amulet_tier1_inactive")//女巫系列
    .rarity("uncommon")
    .maxStackSize(1)
    Event.create("curlamoety:witch_amulet_tier2_inactive")
    .rarity("uncommon")
    .maxStackSize(1)
    Event.create("curlamoety:witch_amulet_tier3_inactive")
    .rarity("rare")
    .maxStackSize(1)
    Event.create("curlamoety:witch_amulet_tier4_inactive")
    .rarity("rare")
    .maxStackSize(1)
    .fireResistant()
    Event.create("curlamoety:witch_amulet_tier5_inactive")
    .rarity("epic")
    .maxStackSize(1)
    .fireResistant()
    Event.create("curlamoety:papers_t1")
    .rarity("uncommon")
    Event.create("curlamoety:papers_t2")
    .rarity("uncommon")
    Event.create("curlamoety:papers_t3")
    .rarity("rare")
    Event.create("curlamoety:papers_t4")
    .rarity("epic")
    Event.create("curlamoety:annihilation_ashes")
    .rarity("epic")
    .fireResistant()
    Event.create("curlamoety:brimstone_orb")
    .rarity("epic")
    .fireResistant()

    Event.create("curlamoety:knowledge_toast")//知识面包
    .food(foodBuilder=>{
        foodBuilder.hunger(5)
        foodBuilder.saturation(0.6)
        foodBuilder.alwaysEdible()
        foodBuilder.effect('enigmaticdelicacy:xp_boost',1200,0,0.5)
        foodBuilder.effect('goety:insight',1200,0,0.5)
        foodBuilder.eaten(event=>{
            let player = event.player
            let {x,y,z} = player
            player.level.playSound(null,x,y,z,'minecraft:entity.experience_orb.pickup','players',0.2,1)
            player.giveExperiencePoints(25)
            if(Math.random(1)<0.15){
                player.give('minecraft:experience_bottle')
            }
        })
    })

    Event.create("curlamoety:sword_cookie")//剑术大师曲奇
    .food(foodBuilder=>{
        foodBuilder.hunger(10)
        foodBuilder.saturation(0.8)
        foodBuilder.alwaysEdible()
        foodBuilder.eaten(event=>{
            let player = event.player
            player.persistentData.sword_cookie = 1
            global.swordCookieMap.put(player,1)
        })
    })
    .rarity('epic')

    Event.create("curlamoety:inspiration_wand","pickaxe")//鼓舞魔棒
    .rarity("rare")
    .tier("wood")
    .maxDamage(255)

    Event.create("curlamoety:shikishin_wand","pickaxe")//式神魔棒
    .rarity("epic")
    .tier("wood")
    .maxDamage(255)
    .fireResistant()

    Event.create("curlamoety:evernight_veil")//永夜帷幕
    .rarity("epic")
    .maxStackSize(1)
    .fireResistant()

    Event.create("curlamoety:hostile_pea")//豌豆
    .rarity("epic")
    .maxStackSize(1)
    .fireResistant()

    Event.create("curlamoety:friendly_pea")//豌豆
    .rarity("epic")
    .maxStackSize(1)
    .fireResistant()

    Event.create("curlamoety:blueprint_blackhouse")//黑暗之家
    .rarity("uncommon")
    .maxStackSize(1)

    Event.create("curlamoety:blueprint_autochopping")//自动切菜机
    .rarity("uncommon")
    .maxStackSize(1)

    Event.create("curlamoety:blueprint_autobrazier")//自动火炉
    .rarity("uncommon")
    .maxStackSize(1)

    Event.create("curlamoety:blueprint_powerstation")//发电机
    .rarity("uncommon")
    .maxStackSize(1)

    Event.create("curlamoety:monstrosity_caller")//巨兽寻呼机
    .rarity("uncommon")

    Event.create("curlamoety:insulator","anim_shield")//疏离
    .geoModel(geo=>{
        geo.setSimpleModel('curlamoety:geo/item/insulator.geo.json')
        geo.setSimpleTexture('curlamoety:textures/item/3d/insulator.png')
        geo.setSimpleAnimation('curlamoety:animations/item/insulator.animation.json')
        geo.autoGlowing = true
    })
    .addController(controller => controller            
        .name("insulator_controller")
        .triggerableAnim('using', RawAnimation.begin().thenPlay('use'))
        //.soundKeyframe(keyFrame => {
        //    if (Client.player) Client.player.playSound(keyFrame.keyframeData.sound)
        //})
    )
    .usingAnimation((self, serverLevel, serverPlayer, hand) => {
        self.triggerAnim(serverPlayer, GeoItem.getOrAssignId(serverPlayer.getItemInHand(hand), serverLevel), 'insulator_controller', 'using')
    })
    .rarity("epic")
    .fireResistant()

    Event.create("curlamoety:prisoner_pickaxe","pickaxe")//囚犯镐
    .tier("netherite")

    Event.create("curlamoety:the_hair",'anim_helmet')//紫之发
    .geoModel(geo=>{
        geo.setSimpleModel('curlamoety:geo/armor/the_hair.geo.json')
        geo.setSimpleTexture('curlamoety:textures/armor/the_hair.png')
        geo.setSimpleAnimation('curlamoety:animations/armor/the_hair.animation.json')
    })
    .boneVisibility((renderer, slot) => {
        if (slot == "head") {
            renderer.setBoneVisible(renderer.getHeadBone(), true);
        }
    })
    .addAnimation(state => {
        return state.setAndContinue(RawAnimation.begin().thenLoop("idle"));
    })
    .tier('leather')
    .rarity('epic')
    .fireResistant()

    Event.create("curlamoety:the_kimono",'anim_chestplate')//紫之服
    .geoModel(geo=>{
        geo.setSimpleModel('curlamoety:geo/armor/the_kimono.geo.json')
        geo.setSimpleTexture('curlamoety:textures/armor/the_kimono.png')
        geo.setSimpleAnimation('curlamoety:animations/armor/the_kimono.animation.json')
    })
    .boneVisibility((renderer, slot) => {
        if (slot == "chest") {
            renderer.setBoneVisible(renderer.getBodyBone(), true);
            renderer.setBoneVisible(renderer.getLeftArmBone(), true);
            renderer.setBoneVisible(renderer.getRightArmBone(), true);
        }
    })
    .addAnimation(state => {
        return state.setAndContinue(RawAnimation.begin().thenLoop("idle"));
    })
    .tier('leather')
    .rarity('epic')
    .fireResistant()

    Event.create("curlamoety:the_bottom",'anim_leggings')//紫之裙
    .geoModel(geo=>{
        geo.setSimpleModel('curlamoety:geo/armor/the_bottom.geo.json')
        geo.setSimpleTexture('curlamoety:textures/armor/the_bottom.png')
        geo.setSimpleAnimation('curlamoety:animations/armor/the_bottom.animation.json')
    })
    .boneVisibility((renderer, slot) => {
        if (slot == "leg") {
            renderer.setBoneVisible(renderer.getBodyBone(), true);
        }
    })
    .addAnimation(state => {
        return state.setAndContinue(RawAnimation.begin().thenLoop("idle"));
    })
    .tier('leather')
    .rarity('epic')
    .fireResistant()

    Event.create("curlamoety:the_clogs",'anim_boots')//紫之屐
    .geoModel(geo=>{
        geo.setSimpleModel('curlamoety:geo/armor/the_clogs.geo.json')
        geo.setSimpleTexture('curlamoety:textures/armor/the_clogs.png')
    })
    .boneVisibility((renderer, slot) => {
        if (slot == "foot") {
            renderer.setBoneVisible(renderer.getLeftBootBone(), true);
            renderer.setBoneVisible(renderer.getRightBootBone(), true);
        }
    })
    .tier('leather')
    .rarity('epic')
    .fireResistant()

    Event.create("curlamoety:chlorophium_ingot",'basic')//叶绿锭
    .rarity("uncommon")
    .fireResistant()

    Event.create("curlamoety:biogenesium_ingot",'basic')//生源锭
    .rarity("rare")
    .fireResistant()

    Event.create("curlamoety:chlorophium_breaker",'paxel')//叶绿破坏者
    .rarity("uncommon")
    .tier("netherite")
    .maxDamage(3200)
    .fireResistant()

    Event.create("curlamoety:magician_hand","shears")//魔术师之手
    .rarity("uncommon")
    .fireResistant()
    .maxDamage(128)

    Event.create("curlamoety:mini_pants","basic")//小小的神秘
    .rarity("uncommon")
    .food(foodBuilder=>{
        foodBuilder.hunger(4)
        foodBuilder.saturation(0.2)
        foodBuilder.alwaysEdible()
        foodBuilder.effect("minecraft:luck",12000,0,1)
    })

    //不洁的神秘
    Event.create("curlamoety:unholy_pants","anim_helmet")
    .geoModel(geo=>{
        geo.setSimpleModel('curlamoety:geo/armor/unholy_pants.geo.json')
        geo.setSimpleTexture('curlamoety:textures/armor/unholy_pants.png')
    })
    .boneVisibility((renderer, slot) => {
        if (slot == "head") {
            renderer.setBoneVisible(renderer.getHeadBone(), true);
        }
    })
    .food(foodBuilder=>{
        foodBuilder.hunger(4)
        foodBuilder.saturation(0.2)
        foodBuilder.alwaysEdible()
        foodBuilder.effect("minecraft:strength",200,4,1)
        foodBuilder.effect("minecraft:speed",200,4,1)
        foodBuilder.effect("minecraft:haste",200,4,1)
    })
    .tier("leather")
    .fireResistant()
    .maxDamage(666)
    .rarity("epic")

    //风暴的神秘
    Event.create("curlamoety:storm_pants","anim_helmet")
    .geoModel(geo=>{
        geo.setSimpleModel('curlamoety:geo/armor/storm_pants.geo.json')
        geo.setSimpleTexture('curlamoety:textures/armor/storm_pants.png')
    })
    .boneVisibility((renderer, slot) => {
        if (slot == "head") {
            renderer.setBoneVisible(renderer.getHeadBone(), true);
        }
    })
    .food(foodBuilder=>{
        foodBuilder.hunger(4)
        foodBuilder.saturation(0.2)
        foodBuilder.alwaysEdible()
        foodBuilder.effect("minecraft:strength",200,4,1)
        foodBuilder.effect("minecraft:speed",200,4,1)
        foodBuilder.effect("minecraft:haste",200,4,1)
    })
    .tier("leather")
    .maxDamage(360)
    .rarity("rare")

    //霜雪的神秘
    Event.create("curlamoety:snow_pants","anim_helmet")
    .geoModel(geo=>{
        geo.setSimpleModel('curlamoety:geo/armor/snow_pants.geo.json')
        geo.setSimpleTexture('curlamoety:textures/armor/snow_pants.png')
    })
    .boneVisibility((renderer, slot) => {
        if (slot == "head") {
            renderer.setBoneVisible(renderer.getHeadBone(), true);
        }
    })
    .food(foodBuilder=>{
        foodBuilder.hunger(4)
        foodBuilder.saturation(0.2)
        foodBuilder.alwaysEdible()
        foodBuilder.effect("minecraft:strength",200,4,1)
        foodBuilder.effect("minecraft:speed",200,4,1)
        foodBuilder.effect("minecraft:haste",200,4,1)
    })
    .tier("leather")
    .maxDamage(300)
    .rarity("rare")

    //晋升披萨
    Event.create("curlamoety:ascension_pizza","basic")
    .rarity("epic")
    .fireResistant()

    //晋升披萨片
    Event.create("curlamoety:ascension_pizza_slice","basic")
    .rarity("epic")
    .fireResistant()
    .food(foodBuilder=>{
        foodBuilder.hunger(66)
        foodBuilder.saturation(1)
        foodBuilder.alwaysEdible()
        foodBuilder.effect("minecraft:resistance",36000,3,1)
        foodBuilder.effect("farmersdelight:nourishment",36000,0,1)
        foodBuilder.effect("enigmaticaddons:pure_resistance",-1,1,1)
        foodBuilder.effect("minecraft:health_boost",-1,5,1)
        foodBuilder.effect("minecraft:strength",-1,5,1)
        foodBuilder.effect("minecraft:regeneration",-1,5,1)
        foodBuilder.effect("goetydelight:spell_mastery",-1,5,1)
        foodBuilder.effect("goety:rallying",-1,5,1)
        foodBuilder.effect("goety:shielding",-1,5,1)
        foodBuilder.effect("goety:radiance",-1,5,1)
        foodBuilder.eaten(event=>{
            let player = event.player
            let {x,y,z} = player
            player.level.playSound(null,x,y,z,'block.beacon.activate','players',1,1)
            player.persistentData.ascension_pizza = 1
            player.modifyAttribute("goety_revelation:spell_power","ascension_pizza_modify",3,"addition")
            player.modifyAttribute("goety_revelation:spell_power_multiplier","ascension_pizza_modify",0.03,"addition")
            player.modifyAttribute("goety_revelation:soul_decrease_reduction","ascension_pizza_modify",0.1,"addition")
            player.modifyAttribute("goety_revelation:resistance","ascension_pizza_modify",0.08,"addition")
            player.modifyAttribute("goeticlegacy:soul_regen_ratio","ascension_pizza_modify",0.1,"addition")
            player.modifyAttribute("goeticlegacy:magic_invul_reduction","ascension_pizza_modify",1,"addition")
            player.modifyAttribute("goeticlegacy:true_damage_ratio","ascension_pizza_modify",0.03,"addition")
        })
    })

    //幻影熔渣
    Event.create("curlamoety:phantom_slag","basic")
    .rarity("common")

    //红石元件
    Event.create("curlamoety:redstone_gear","basic")
    .rarity("common")

    //丝袜杯
    Event.create("curlamoety:stocking_cup","basic")
    .rarity("epic")
    .fireResistant()

    //丝袜奶茶
    Event.create("curlamoety:stocking_tea","basic")
    .rarity("epic")
    .useAnimation("drink")
    .fireResistant()
    .food(foodBuilder=>{
        foodBuilder.hunger(8)
        foodBuilder.saturation(2)
        foodBuilder.alwaysEdible()
        foodBuilder.effect("goetydelight:spell_mastery",36000,2,1)
        foodBuilder.effect("farmersdelight:nourishment",12000,0,1)
        foodBuilder.eaten(event =>{
            let player = event.getPlayer()
            if(player){
                player.give("curlamoety:stocking_cup")
            }
        })
    })

})

