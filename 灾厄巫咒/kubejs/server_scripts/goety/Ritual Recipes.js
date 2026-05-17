ServerEvents.recipes(event => {
    // event.recipes.goety.ritual(result, ritualType, ingredients)
    // - result: 产物物品（OutputItem）
    // - ritualType: 仪式类型ID，根据功能选择：
    //   - 'goety:craft' - 制作物品（最常用）
    //   - 'goety:enchant' - 附魔
    //   - 'goety:summon' - 召唤生物
    //   - 'goety:summon_tamed' - 召唤驯服生物
    //   - 'goety:convert' - 转换实体
    //   - 'goety:teleport' - 传送
    // - ingredients: 材料数组（InputItem[]）
    
    // 制作物品的仪式
    //event.recipes.goety.ritual('minecraft:emerald', 'goety:craft', [
    //    'minecraft:gold_ingot',
    //    'minecraft:gold_ingot',
    //    'minecraft:diamond'
    //])
    //    .activationItem('minecraft:ender_pearl')
    //    .craftType('forge')  // 锻造仪式
    //    .soulCost(5)
    //    .duration(20);
    //
    // 召唤生物的仪式
    //event.recipes.goety.ritual('goety:jei_dummy/none', 'goety:summon', [
    //    'minecraft:rotten_flesh',
    //    'minecraft:bone'
    //])
    //    .activationItem('minecraft:ender_pearl')
    //    .craftType('necroturgy')
    //    .soulCost(10)
    //    .entityToSummon('minecraft:zombie')
    //    .summonLife(6000);
    //event.recipes.goety.ritual('minecraft:emerald', 'goety:craft', [
    //    'minecraft:gold_ingot',
    //    'minecraft:gold_ingot',
    //    'minecraft:diamond'
    //])
    //    .activationItem('minecraft:ender_pearl')
    //    .craftType('forge')  // 锻造仪式
    //    .soulCost(5)
    //    .duration(20);
    /**
    * @param {string} craftType 仪式配方类型
    * @param {number} soulCost 每秒的灵魂消耗
    * @param {number} duration 持续时间/s
    * @param {Array} ingredients 材料
    * @param {string} input 输入物品
    * @param {string} result 输出物品
    */
    function ritualRecipe(craftType, soulCost, duration, ingredients, input, result) {
        const ingredientObjects = ingredients.map(item => ({ "item": item }))
        let recipe = {
            "type": "goety:ritual",
            "ritual_type": "goety:craft",
            "craftType": craftType,
            "soulCost": soulCost,
            "duration": duration,
            "ingredients": ingredientObjects,
            "activation_item": {
                "item": input
            },
            "result": {
                "item": result
            }
        }
        event.custom(recipe)
        
    //物品制作仪式

    }
})

ServerEvents.recipes(event=>{//kjs goety方法 
    //复苏之叶
    event.recipes.goety.ritual('enigmaticaddons:revival_leaf', 'goety:craft', [
        'minecraft:diamond',
        'minecraft:emerald_block',
        'minecraft:diamond',
        'minecraft:emerald_block',
        'minecraft:bone_block',
        '#minecraft:saplings',
        'minecraft:bone_block',
        '#minecraft:saplings',
        'minecraft:bone_block',
        '#minecraft:saplings',
        'minecraft:bone_block',
        '#minecraft:saplings'
    ])
    .activationItem('goety:soul_emerald')
    .craftType('overgrown')  
    .soulCost(10)
    .duration(20)
    .id("curlamoety:revival_leaf")

    //失落引擎
    event.recipes.goety.ritual('enigmaticaddons:lost_engine', 'goety:craft', [
        'minecraft:diamond',
        'minecraft:gold_ingot',
        'minecraft:gold_block',
        'minecraft:gold_ingot',
        'minecraft:copper_block',
        'minecraft:lightning_rod',
        'minecraft:copper_block',
        'minecraft:lightning_rod',
        'minecraft:copper_block',
        'minecraft:lightning_rod',
        'minecraft:copper_block',
        'minecraft:lightning_rod'
    ])
    .activationItem('minecraft:redstone_block')
    .craftType('storm')  
    .soulCost(10)
    .duration(20)
    .id("curlamoety:lost_engine")

    //魔像之心
    event.recipes.goety.ritual('enigmaticlegacy:golem_heart', 'goety:craft', [
        'minecraft:redstone',
        'minecraft:redstone',
        'minecraft:redstone',
        'minecraft:redstone',
        'minecraft:obsidian',
        'minecraft:iron_block',
        'minecraft:obsidian',
        'minecraft:iron_block',
        'minecraft:obsidian',
        'minecraft:iron_block',
        'minecraft:obsidian',
        'minecraft:iron_block'
    ])
    .activationItem('minecraft:diamond')
    .craftType('geoturgy')  
    .soulCost(10)
    .duration(20)
    .id("curlamoety:golem_heart")

    //海洋意志
    event.recipes.goety.ritual('enigmaticlegacy:ocean_stone', 'goety:craft', [
        'minecraft:diamond',
        'minecraft:lapis_block',
        'minecraft:diamond',
        'minecraft:lapis_block',
        'minecraft:prismarine',
        'minecraft:lapis_block',
        'minecraft:prismarine',
        'minecraft:lapis_block',
        'minecraft:prismarine',
        'minecraft:lapis_block',
        'minecraft:prismarine',
        'minecraft:lapis_block'
    ])
    .activationItem('minecraft:heart_of_the_sea')
    .craftType('deep')  
    .soulCost(10)
    .duration(20)
    .id("curlamoety:ocean_stone")

    //天使之祝
    event.recipes.goety.ritual('enigmaticlegacy:angel_blessing', 'goety:craft', [
        'goety:wind_core',
        'minecraft:diamond',
        'goety:wind_core',
        'minecraft:diamond',
        'minecraft:lapis_block',
        'minecraft:iron_block',
        'minecraft:lapis_block',
        'minecraft:iron_block',
        'minecraft:lapis_block',
        'minecraft:iron_block',
        'minecraft:lapis_block',
        'minecraft:iron_block'
    ])
    .activationItem('minecraft:gold_block')
    .craftType('sky')  
    .soulCost(10)
    .duration(20)
    .id("curlamoety:angel_blessing")

    //忘却冰晶
    event.recipes.goety.ritual('enigmaticaddons:forgotten_ice', 'goety:craft', [
        'minecraft:iron_block',
        'minecraft:iron_block',
        'minecraft:diamond',
        'minecraft:iron_block',
        'minecraft:blue_ice',
        'minecraft:diamond',
        'minecraft:blue_ice',
        'minecraft:lapis_block',
        'minecraft:blue_ice',
        'minecraft:lapis_block',
        'minecraft:blue_ice',
        'minecraft:diamond'
    ])
    .activationItem('goety:ice_storm_focus')
    .craftType('frost')  
    .soulCost(10)
    .duration(20)
    .id("curlamoety:forgotten_ice")

    //虚幻冥灯
    event.recipes.goety.ritual('enigmaticaddons:illusion_lantern', 'goety:craft', [
        'minecraft:copper_block',
        'goety:haunted_glass_tinted',
        'minecraft:diamond',
        'goety:haunted_glass_tinted',
        'goety:cursed_metal_block',
        'goety:haunted_glass_tinted',
        'minecraft:copper_block',
        'goety:haunted_glass_tinted',
        'goety:cursed_metal_block',
        'goety:haunted_glass_tinted',
        'minecraft:copper_block',
        'goety:haunted_glass_tinted',
    ])
    .activationItem('minecraft:soul_lantern')
    .craftType('adept_nether')  
    .soulCost(10)
    .duration(20)
    .id("curlamoety:illusion_lantern")

    //烈焰之核
    event.recipes.goety.ritual('enigmaticlegacy:blazing_core', 'goety:craft', [
        'minecraft:redstone',
        'minecraft:redstone',
        'minecraft:redstone',
        'minecraft:redstone',
        'minecraft:obsidian',
        'minecraft:iron_block',
        'minecraft:obsidian',
        'minecraft:iron_block',
        'minecraft:obsidian',
        'minecraft:iron_block',
        'minecraft:obsidian',
        'minecraft:iron_block'
    ])
    .activationItem('minecraft:lava_bucket')
    .craftType('expert_nether')  
    .soulCost(10)
    .duration(20)
    .id("curlamoety:blazing_core")
    
    //虚空珍珠
    event.recipes.goety.ritual('enigmaticlegacy:void_pearl', 'goety:craft', [
        'goety:void_block',
        'minecraft:gold_block',
        'goety:void_block',
        'minecraft:gold_block',
        'goety:void_block',
        'minecraft:gold_block',
        'minecraft:gold_block',
        'minecraft:netherite_ingot',
        'goety:void_block',
        'minecraft:netherite_ingot',
        'minecraft:gold_block',
        'minecraft:gold_block',
    ])
    .activationItem('minecraft:diamond_block')
    .craftType('end')  
    .soulCost(10)
    .duration(20)
    .id("curlamoety:void_pearl")

    //星云之眼
    event.recipes.goety.ritual('enigmaticlegacy:eye_of_nebula', 'goety:craft', [
        'minecraft:diamond_block',
        'minecraft:netherite_ingot',
        'minecraft:ender_eye',
        'minecraft:netherite_ingot',
        'enigmaticlegacy:ender_rod',
        'enigmaticlegacy:etherium_ingot',
        'enigmaticlegacy:etherium_ingot',
        'enigmaticlegacy:ender_rod',
        'enigmaticlegacy:ender_rod',
        'enigmaticlegacy:ender_rod',
        'enigmaticlegacy:etherium_ingot',
        'enigmaticlegacy:etherium_ingot',
    ])
    .activationItem('minecraft:nether_star')
    .craftType('end')  
    .soulCost(10)
    .duration(20)
    .id("curlamoety:eye_of_nebula")

    //古旧书袋
    event.recipes.goety.ritual('enigmaticaddons:antique_bag', 'goety:craft', [
        'goety:occult_fabric',
        'goety:spirit_fabric',
        'goety:occult_fabric',
        'goety:spirit_fabric',
        'minecraft:diamond',
        'goety:occult_fabric',
        'goety:spirit_fabric',
        'goety:cursed_ingot',
        'minecraft:lapis_block',
        'minecraft:quartz_block',
    ])
    .activationItem('minecraft:diamond')
    .craftType('magic')  
    .soulCost(3)
    .duration(10)
    .id("curlamoety:antique_bag")

    //虚无之书
    event.recipes.goety.ritual('enigmaticaddons:void_tome', 'goety:craft', [
        'minecraft:book',
        'enigmaticlegacy:thicc_scroll',
        'minecraft:black_dye',
        'enigmaticlegacy:thicc_scroll',
        'minecraft:nether_star',
        'minecraft:wither_rose',
        'minecraft:netherite_ingot',
    ])
    .activationItem('enigmaticlegacy:darkest_scroll')
    .craftType('magic')  
    .soulCost(5)
    .duration(10)
    .id("curlamoety:void_tome")
    
    //地狱刃片护符
    event.recipes.goety.ritual('enigmaticaddons:hell_blade_charm', 'goety:craft', [
        'minecraft:diamond',
        'minecraft:netherite_ingot',
        'minecraft:diamond',
        'minecraft:netherite_ingot',
        'minecraft:nether_bricks',
        'minecraft:redstone_block',
        'minecraft:nether_bricks',
        'minecraft:redstone_block',
        'minecraft:nether_bricks',
        'minecraft:redstone_block',
        'minecraft:nether_bricks',
        'minecraft:redstone_block',
    ])
    .activationItem('goety:soul_ruby')
    .craftType('expert_nether')  
    .soulCost(10)
    .duration(20)
    .id("curlamoety:hell_blade_charm")

    //高塔
    event.recipes.goety.ritual('tarotcards:the_tower', 'goety:craft', [
        'minecraft:bricks',
        'minecraft:bricks',
        'minecraft:bricks',
        'minecraft:bricks',
        'goety:wind_robe',
    ])
    .activationItem('goety:magic_fabric')
    .craftType('sky')  
    .soulCost(2)
    .duration(10)
    .id("curlamoety:the_tower")

    //正义
    event.recipes.goety.ritual('tarotcards:justice', 'goety:craft', [
        'cataclysm:witherite_ingot',
        'cataclysm:witherite_ingot',
        'cataclysm:witherite_ingot',
        'cataclysm:witherite_ingot',
        'minecraft:tnt',
        'goety:spiteful_belt',
        'minecraft:tnt'
    ])
    .activationItem('goety:magic_fabric')
    .craftType('forge')  
    .soulCost(2)
    .duration(10)
    .id("curlamoety:justice")

    //力量
    event.recipes.goety.ritual('tarotcards:strength', 'goety:craft', [
        'enigmaticaddons:pure_heart',
        'cataclysm:ignitium_ingot',
        'enigmaticlegacy:twisted_heart',
        'cataclysm:ignitium_ingot',
        'minecraft:blaze_rod',
        'minecraft:blaze_rod',
        'minecraft:blaze_rod',
        'minecraft:blaze_rod',
    ])
    .activationItem('goety:magic_fabric')
    .craftType('expert_nether')  
    .soulCost(3)
    .duration(10)
    .id("curlamoety:strength")

    //堕落之刃
    event.recipes.goety.ritual('goety:fell_blade', 'goety:craft', [
        'curlamoety:cursed_fragment',
        'curlamoety:cursed_fragment',
        'curlamoety:cursed_fragment',
        'goety:cursed_ingot',
        'goety:cursed_ingot',
        'minecraft:iron_ingot',
        'minecraft:leather',
    ])
    .activationItem('minecraft:iron_sword')
    .craftType('forge')  
    .soulCost(2)
    .duration(10)
    .id("curlamoety:fell_blade")

    //蕴魂项链
    event.recipes.goety.ritual('curlamoety:soul_necklace', 'goety:craft', [
        'goety:cursed_ingot',
        'goety:cursed_ingot',
        'goety:cursed_ingot',
        'goety:empty_focus',
        'goety:ectoplasm',
        'goety:ectoplasm',
        'goety:magic_emerald',
    ])
    .activationItem('curlamoety:old_necklace')
    .craftType('forge')  
    .soulCost(2)
    .duration(10)
    .id("curlamoety:soul_necklace")

    //死神项链
    event.recipes.goety.ritual('curlamoety:death_necklace', 'goety:craft', [
        'goety:dark_ingot',
        'goety:dark_ingot',
        'goety:dark_ingot',
        'minecraft:wither_skeleton_skull',
        'minecraft:netherite_ingot',
        'minecraft:netherite_ingot',
        'minecraft:nether_star',
        'curlamoety:cursed_fragment',
    ])
    .activationItem('curlamoety:soul_necklace')
    .craftType('expert_nether')  
    .soulCost(5)
    .duration(20)
    .id('curlamoety:death_necklace')

    //信仰项链
    event.recipes.goety.ritual('curlamoety:faith_necklace', 'goety:craft', [
        'goety:unholy_fabric',
        'goety:unholy_hat',
        'goety:soul_ruby',
        'minecraft:enchanted_golden_apple',
        'goety:forbidden_piece',
        'goety:forbidden_piece',
        'goety:ectoplasm',
        'goety:ectoplasm',
        'goety:mystic_core',
    ])
    .activationItem('curlamoety:death_necklace')
    .craftType('expert_nether')  
    .soulCost(10)
    .duration(20)
    .id('curlamoety:faith_necklace')
    
    //征服者手套
    event.recipes.goety.ritual('curlamoety:conqueror_gloves', 'goety:craft', [
        'cataclysm:witherite_ingot',
        'cataclysm:witherite_ingot',
        'goety_cataclysm:mechanized_iron_block',
        'cataclysm:mech_eye',
        'cataclysm:chitin_claw',
        'goety:thrash_glove',
        'goety:grave_glove',
        'goetyawaken:dauntless_gloves'
    ])
    .activationItem('curlamoety:pioneer_gloves')
    .craftType('forge')  
    .soulCost(5)
    .duration(20)
    .id('curlamoety:conqueror_gloves')

    //元素手套
    event.recipes.goety.ritual('curlamoety:elemental_gloves', 'goety:craft', [
        'cataclysm:blazing_grips',
        'cataclysm:cursium_ingot',
        'goety_cataclysm:abyss_essence',
        'cataclysm:essence_of_the_storm',
        'enigmaticlegacy:etherium_ingot',
        'enigmaticlegacy:etherium_ingot'
    ])
    .activationItem('curlamoety:conqueror_gloves')
    .craftType('forge')  
    .soulCost(10)
    .duration(20)
    .id('curlamoety:elemental_gloves')

    //跋涉之靴
    event.recipes.goety.ritual('curlamoety:hiker_boots', 'goety:craft', [
        'goety:wind_core',
        'minecraft:rabbit_foot',
        'minecraft:dirt',
        'minecraft:feather',
        'minecraft:string',
        'minecraft:leather',
    ])
    .activationItem('cataclysm:sturdy_boots')
    .craftType('sky')  
    .soulCost(2)
    .duration(10)
    .id('curlamoety:hiker_boots')

    //疾驰之靴
    event.recipes.goety.ritual('curlamoety:runner_boots', 'goety:craft', [
        'goety:gale_fabric',
        'cataclysm:witherite_ingot',
        'goety:gale_fabric',
        'goety:gale_fabric',
        'goety:launch_focus',
        'enigmaticaddons:earth_heart_fragment',
    ])
    .activationItem('curlamoety:hiker_boots')
    .craftType('geoturgy')  
    .soulCost(5)
    .duration(10)
    .id('curlamoety:runner_boots')

    //陶瓷坛
    event.recipes.goety.ritual('goety:pithos', 'goety:craft', [
        'goety:crypt_bricks',
        'goety:crypt_bricks',
        'goety:crypt_bricks',
        'goety:crypt_bricks',
        'curlamoety:cursed_fragment',
        'curlamoety:cursed_fragment',
        'goety:soul_emerald',
        'goety:forbidden_fragment',
    ])
    .activationItem('minecraft:decorated_pot')
    .craftType('necroturgy')  
    .soulCost(5)
    .duration(10)
    .research("haunting")
    .id("curlamoety:pithos")

    //钻石登山镐
    event.recipes.goety.ritual('goety:diamond_ice_axe', 'goety:craft', [
        'minecraft:diamond',
        'minecraft:diamond',
    ])
    .activationItem('goety:iron_ice_axe')
    .craftType('forge')  
    .soulCost(1)
    .duration(5)
    .id("curlamoety:diamond_ice_axe")

    //黑暗登山镐
    event.recipes.goety.ritual('goetyawaken:dark_ice_axe', 'goety:craft', [
        'goety:dark_ingot',
        'goety:dark_ingot',
    ])
    .activationItem('goety:iron_ice_axe')
    .craftType('forge')  
    .soulCost(2)
    .duration(5)
    .id("curlamoety:iron_to_dark_ice_axe")

    event.recipes.goety.ritual('goetyawaken:dark_ice_axe', 'goety:craft', [
        'goety:dark_ingot',
        'goety:dark_ingot',
    ])
    .activationItem('goety:diamond_ice_axe')
    .craftType('forge')  
    .soulCost(1)
    .duration(5)
    .id("curlamoety:diamond_to_dark_ice_axe")

    //皇室卷轴
    event.recipes.goety.ritual('goetyawaken:royal_scroll', 'goety:craft', [
        'goety:magic_fabric',
        'goety:magic_fabric',
        'goety:magic_fabric',
        'goety:magic_fabric',
        'goetyawaken:taboo_fragment',
        'goety:savage_tooth',
        'goety:soul_ruby',
        'goety:forbidden_fragment',
        'enigmaticaddons:ichor_droplet'
    ])
    .activationItem('minecraft:mojang_banner_pattern')
    .craftType('magic')  
    .soulCost(10)
    .duration(30)
    .id("curlamoety:royal_scroll")

    //琪露诺的完美数学教室
    event.recipes.goety.ritual('goetyawaken:bakasmusic_disc', 'goety:craft', [
        'minecraft:blue_ice',
        'minecraft:blue_ice',
        'minecraft:blue_ice', 
        'minecraft:blue_ice',
        'minecraft:blue_ice',
        'minecraft:blue_ice',
        'minecraft:blue_ice',
        'minecraft:blue_ice',
        'minecraft:blue_ice',
        'goety:feet_of_frog',
        'touhou_little_maid:power_point',
        'touhou_little_maid:computer',
    ])
    .activationItem('minecraft:disc_fragment_5')
    .craftType('geoturgy')  
    .soulCost(10)
    .duration(20)
    .id("curlamoety:bakasmusic_disc")

    //叶绿多功能
    event.recipes.goety.ritual('curlamoety:chlorophium_breaker', 'goety:craft', [
        'minecraft:iron_pickaxe',
        'minecraft:iron_axe',
        'minecraft:iron_shovel',
        'minecraft:iron_hoe',
        'curlamoety:chlorophium_ingot',
        'curlamoety:chlorophium_ingot',
        'curlamoety:chlorophium_ingot',
        'curlamoety:chlorophium_ingot'
    ])
    .activationItem('minecraft:netherite_ingot')
    .craftType('forge')  
    .soulCost(3)
    .duration(10)
    .id('curlamoety:chlorophium_breaker')

    //暮光圣冠
    event.recipes.goety.ritual('curlamoety:twilight_crown', 'goety:craft', [
        'twilightforest:ur_ghast_trophy',
        'twilightforest:hydra_trophy',
        'goety:heart_of_the_night',
        'twilightforest:snow_queen_trophy',
        'goety:occult_fabric',
        'goety:occult_fabric',
        'twilightforest:knight_phantom_trophy',
        'twilightforest:alpha_yeti_trophy',
        'twilightforest:minoshroom_trophy',
        'curlamoety:biogenesium_ingot',
        'curlamoety:biogenesium_ingot',
        'curlamoety:biogenesium_ingot',
    ])
    .activationItem('curlamoety:moon_circlet')
    .craftType('twilight')  
    .soulCost(10)
    .duration(10)
    .id('curlamoety:twilight_crown')

    //龙蛋
    event.recipes.goety.ritual('minecraft:dragon_egg', 'goety:craft', [
        'minecraft:end_crystal',
        'minecraft:end_crystal',
        'minecraft:end_crystal',
        'minecraft:end_crystal',
        'minecraft:totem_of_undying',
        'minecraft:enchanted_golden_apple',
        'curlamoety:biogenesium_ingot',
        'minecraft:shulker_shell',
        'goety:biomine_focus',
        'minecraft:dragon_breath'
    ])
    .activationItem('cataclysm:abyssal_egg')
    .craftType('end')  
    .soulCost(1000)
    .duration(20)
    .id("curlamoety:dragon_egg")

    //创心
    event.recipes.goety.ritual('enigmaticlegacy:enigmatic_item','goety:craft',[
        'curlamoety:chaos_cube',
        'curlamoety:goal_ty',
        'curlamoety:calamity_source',
        'curlamoety:twilight_sparkle',
        'goety_revelation:ascension_halo',
        'goetyawaken:superaggregated_mycelial_circuit',
        'cataclysm:abyssal_egg',
        'curlamoety:brimstone_orb',
        'goetyawaken:nameless_platinum',
        'twilightforest:cube_of_annihilation',
        'goety_revelation:apocalyptium_ingot',
        'goety_revelation:revelation'
    ])
    .activationItem('enigmaticlegacy:cosmic_heart')
    .craftType('end')
    .soulCost(1000)
    .duration(60)
    .id("curlamoety:enigmatic_item")

    //锻造戒指
    event.remove({output:('goety:ring_of_the_forge')})
    event.recipes.goety.ritual('goety:ring_of_the_forge', 'goety:craft', [
        'leather',
        'anvil',
        'goety:ectoplasm',
        'sculk',
        'goety:soul_emerald',
        'enigmaticaddons:earth_heart_fragment',
        'chain',
        'goety:cursed_metal_block'
    ])
    .activationItem('enigmaticlegacy:golden_ring')
    .craftType('geoturgy')  
    .soulCost(1)
    .duration(10)
    .id('curlamoety:ring_of_the_forge')

    //女巫护身符t3
    event.recipes.goety.ritual('curlamoety:witch_amulet_tier3_inactive', 'goety:craft', [
        'minecraft:diamond',
        'goety:occult_fabric',
        'minecraft:diamond',
        'goety:occult_fabric',
        'curlamoety:papers_t2',
        'curlamoety:papers_t2',
        'goety:brew',
        'goety:brew',
        'goety:brew',
        'goety:brew',
        'goety:brew',
        'goety:brew'
    ])
    .activationItem('curlamoety:witch_amulet_tier2')
    .craftType('witch')  
    .soulCost(2)
    .duration(10)
    .id('curlamoety:witch_amulet_tier3_inactive')

    //女巫护身符t4
    event.recipes.goety.ritual('curlamoety:witch_amulet_tier4_inactive', 'goety:craft', [
        'minecraft:netherite_ingot',
        'goety:mystic_core',
        'minecraft:nether_star',
        'goety:mystic_core',
        'curlamoety:papers_t3',
        'curlamoety:papers_t3',
        'curlamoety:papers_t3',
        'curlamoety:papers_t3',
        'goety:brew',
        'goety:brew',
        'goety:brew',
        'goety:brew'
    ])
    .activationItem('curlamoety:witch_amulet_tier3')
    .craftType('witch')  
    .soulCost(2)
    .duration(20)
    .id('curlamoety:witch_amulet_tier4_inactive')

    //终灾护身符
    event.recipes.goety.ritual('curlamoety:witch_amulet_tier5_inactive', 'goety:craft', [
        'enigmaticlegacy:twisted_heart',
        'minecraft:skeleton_skull',
        'goety:soul_ruby',
        'minecraft:wither_skeleton_skull',
        'minecraft:wither_rose',
        'minecraft:rose_bush',
        'minecraft:blaze_rod',
        'goety:meteor_shower_focus',
        'cataclysm:ancient_metal_block',
        'curlamoety:papers_t4',
        'curlamoety:biogenesium_ingot',
        'curlamoety:papers_t4'
    ])
    .activationItem('curlamoety:witch_amulet_tier4')
    .craftType('witch')  
    .soulCost(3)
    .duration(20)
    .id('curlamoety:witch_amulet_tier5_inactive')

    //深邃回响碎片
    event.remove({output:('goetyawaken:profound_echoing_shard')})
    event.recipes.goety.ritual('goetyawaken:profound_echoing_shard','goety:craft',[
        'goety:hunger_core',
        'goety:sonic_boom_focus',
        'goety:raging_matter',
        'minecraft:sculk_vein',
        'minecraft:sculk_vein',
        'goetydelight:gathering_soul_embryos',
    ])
    .activationItem('minecraft:echo_shard')
    .craftType('magic')
    .soulCost(100)
    .duration(15)
    .id("curlamoety:profound_echoing_shard")

    //女巫长袍改为女巫仪式
    event.remove({output:('goety:witch_robe')})
    event.recipes.goety.ritual('goety:witch_robe', 'goety:craft', [
        'goety:occult_fabric',
        'goety:occult_fabric',
        'goety:occult_fabric',
        'goety:occult_fabric',
        'goety:soul_emerald',
        '#forge:slimeballs',
        'goety:mystic_core',
        'minecraft:stick',
    ])
    .activationItem('minecraft:brewing_stand')
    .craftType('witch')  
    .soulCost(1)
    .duration(10)
    .id("curlamoety:witch_robe")

    //无名
    event.recipes.goety.ritual('goety:jei_dummy/none', 'goety:convert', [
        'goety:nameless_crown',
        'goety:nameless_staff',
        'goety:nameless_cape',
        'twilightforest:lich_trophy',
        'goety:forbidden_scroll',
        'goety:arca',
        'goety:undeath_potion',
        'twilightforest:lamp_of_cinders',
        'goety:shadow_essence',
        'goety:rotting_focus',
        'goety:osseous_focus',
        'goety:soul_bolt_focus'
    ])
    .activationItem('goetyawaken:glowing_ember')
    .craftType('evernight')
    .research('forbidden')
    .soulCost(444)
    .duration(44)
    .entityToConvertDisplayName("骷髅")
    .entityToConvertTag('goety:skeletons')
    .entityToConvertInto('goetyawaken:nameless_one')
    .id("curlamoety:convert_nameless_one")

    //无名·简化
    event.recipes.goety.ritual('goety:jei_dummy/none', 'goety:convert', [
        'minecraft:skeleton_skull',
        'goety:rotting_focus',
        'goety:osseous_focus',
        'goety:soul_bolt_focus'
    ])
    .activationItem("curlamoety:evernight_veil")
    .craftType('evernight')
    .research('forbidden')
    .soulCost(444)
    .duration(44)
    .entityToConvertDisplayName("minecraft.entity.skeleton.name")
    .entityToConvertTag('goety:skeletons')
    .entityToConvertInto('goetyawaken:nameless_one')
    .id("curlamoety:convert_nameless_one_simplified")

    //无名·仆从
    event.recipes.goety.ritual('goety:jei_dummy/none', 'goety:convert_tamed', [
        'goety:nameless_crown',
        'goety:nameless_staff',
        'goety:nameless_cape',
        'twilightforest:lich_trophy',
        'goety:undeath_potion',
        'goety:flame_capture',
        'goetyawaken:nameless_platinum',
        'goetyawaken:nameless_platinum',
        'goety:vanguard_focus',
        'goety:blackguard_focus',
        'goety:soul_bolt_focus',
        'goety:illusion_focus',
    ])
    .activationItem("curlamoety:evernight_veil")
    .craftType('evernight')
    .research('forbidden')
    .soulCost(444)
    .duration(44)
    .entityToConvertDisplayName(Text.translate("minecraft.entity.skeleton.name"))
    .entityToConvertTag('goety:skeletons')
    .entityToConvertInto('goetyawaken:nameless_one_servant')
    .id("curlamoety:convert_nameless_one_servant")

    event.recipes.goety.ritual('2x curlamoety:perfect_matter','goety:craft',[//完美物质
        '#perfect:fire_small',
        '#perfect:ice_small',
        '#perfect:poison_small',
        'goety:shocking_focus',
        'curlamoety:papers_t4'
    ])
    .activationItem('minecraft:grass_block')
    .craftType('witch')
    .soulCost(42)
    .duration(14)
    .id("curlamoety:perfect_matter1")

    event.recipes.goety.ritual('9x curlamoety:perfect_matter','goety:craft',[
        '#perfect:fire_big',
        '#perfect:ice_big',
        '#perfect:poison_big',
        'goety:thunderbolt_focus',
        'curlamoety:papers_t4',
        'curlamoety:papers_t4',
        'curlamoety:papers_t4',
        'curlamoety:papers_t4'
    ])
    .activationItem('minecraft:grass_block')
    .craftType('witch')
    .soulCost(42)
    .duration(28)
    .id("curlamoety:perfect_matter2")

    event.recipes.goety.ritual('enigmaticlegacy:the_cube','goety:craft',[//非欧
        'enigmaticlegacy:golem_heart',
        'enigmaticlegacy:angel_blessing',
        'enigmaticlegacy:ocean_stone',
        'enigmaticlegacy:blazing_core',
        'enigmaticlegacy:eye_of_nebula',
        'enigmaticlegacy:void_pearl',
        'cataclysm:ignitium_block',
        'goety:dark_metal_block',
        'minecraft:netherite_block',
        'goetyawaken:soul_ruby_block',
        'minecraft:diamond_block',
        'enigmaticlegacy:etherium_block'
    ])
    .activationItem('curlamoety:perfect_matter')
    .craftType('master_forge')
    .soulCost(1000)
    .duration(20)
    .id("curlamoety:the_cube")

    event.recipes.goety.ritual('goety:undeath_potion','goety:craft',[//万灵药
        'goety:unholy_blood',
        'easy_villagers:villager',
        'minecraft:totem_of_undying',
        'minecraft:echo_shard', 
        'minecraft:enchanted_golden_apple',
        'curlamoety:papers_t1',
        'curlamoety:papers_t2',
        'curlamoety:papers_t3',
        'curlamoety:papers_t4'
    ])
    .activationItem('minecraft:glass_bottle')
    .craftType('necroturgy')
    .research('forbidden')
    .soulCost(1000)
    .duration(60)
    .id("curlamoety:undeath_potion")

    //event.recipes.goety.ritual('goety:jei_dummy/none','goety:summon',[])

    //冠军聚晶
    event.remove({output:('goetyawaken:champion_focus')})
    event.recipes.goety.ritual('goetyawaken:champion_focus','goety:craft',[
        'goety:indented_gold',
        'enigmaticlegacy:infernal_shield',
        'goetyawaken:soul_sapphire_block',
        'goetyawaken:moonlight_cut',
        'goetyawaken:nameless_platinum',
        'enigmaticaddons:forger_gem',
        'curlamoety:runner_boots',
        'goety:bulwark_focus',
        'goetyawaken:nameless_platinum',
        'goetyawaken:mucilage',
        'enigmaticaddons:etherium_core',
        'goety:heart_of_the_night',
    ])
    .activationItem('goety:vanguard_focus')
    .craftType('necroturgy')
    .research('forbidden')
    .soulCost(100)
    .duration(30)
    .id("curlamoety:champion_focus")

    event.recipes.goety.ritual('goetyawaken:obsidian_tear','goety:craft',[//黑曜石之泪
        'minecraft:netherite_ingot',
        'goety:unholy_blood',
        'goetyawaken:nether_reactor_core',
        'minecraft:ghast_tear',
        'goety:unholy_hat',
        'goety:unholy_robe',  
    ])
    .activationItem('goety:refuse_bottle')
    .craftType('sabbath')
    .research('royal')
    .soulCost(200)
    .duration(30)
    .id("curlamoety:obsidian_tear")

    event.recipes.goety.ritual('goety:spider_mother_den','goety:craft',[//蜘蛛之母巢穴
        'goety_revelation:spider_fang',
        'goety_revelation:spider_fang',
        'goety:mystic_core',
        'goety:animation_core',
        'goety:spider_egg',
        'goety:spider_egg',
        'minecraft:golden_apple',
        '#forge:raw_meat'
    ])
    .activationItem('goety:spider_nest')
    .craftType('overgrown')
    .soulCost(2)
    .duration(10)
    .id("curlamoety:spider_mother_den")

    //贤者之石
    event.remove({output:('goety:philosophers_stone')})
    event.recipes.goety.ritual('goety:philosophers_stone','goety:craft',[
        'minecraft:crying_obsidian',
        'minecraft:crying_obsidian',
        'curlamoety:perfect_matter',
        'minecraft:crying_obsidian',
        'minecraft:crying_obsidian',
        'minecraft:dragon_breath',
        'enigmaticlegacy:astral_dust',
        'enigmaticlegacy:extradimensional_eye'
    ])
    .activationItem('goety:empty_focus')
    .craftType('witch')
    .soulCost(5)
    .duration(30)
    .id("curlamoety:philosophers_stone")

    event.recipes.goety.ritual('2x enigmaticdelicacy:abyssal_stew','goety:craft',[//复制炖菜
        'cataclysm:abyssal_egg',
        'cataclysm:void_eye',
        'minecraft:suspicious_stew',
        'enigmaticlegacy:twisted_heart',
        'minecraft:enchanted_golden_apple',
        'enigmaticdelicacy:enchantment_duplicator',
        'curlamoety:biogenesium_ingot',
        'goety:biomine_focus',
        'goetydelight:metamorphic_scent_fruit',
        'goetydelight:metamorphic_scent_fruit',
        'goetydelight:metamorphic_scent_grass',
        'goetydelight:metamorphic_scent_grass'
    ])
    .activationItem('enigmaticdelicacy:abyssal_stew')
    .craftType('culinary')
    .soulCost(1000)
    .duration(5)
    .id("curlamoety:copy_abyssal_stew")

    //event.recipes.goety.ritual('goety_revelation:quietus_star','goety:craft',[
    //    'minecraft:nether_star',
    //    'minecraft:nether_star',
    //    'minecraft:nether_star',
    //    'minecraft:nether_star',
    //    'enigmaticlegacy:evil_essence',
    //    'enigmaticlegacy:evil_essence',
    //    'enigmaticlegacy:evil_essence',
    //    'enigmaticlegacy:evil_essence',
    //    'minecraft:netherite_ingot',
    //    'goety:dark_ingot',
    //    'goety:shadow_essence',
    //    'goety:shadow_essence'
    //])
    //.activationItem('goety:soul_ruby')
    //.craftType('expert_nether')
    //.soulCost(100)
    //.duration(10)
    //.entityToSacrificeTag('wither')
    //.entityToSacrificeDisplayName("凋灵")

    //回响碎片修改
    event.remove({output:('minecraft:echo_shard')})
    event.recipes.goety.ritual('16x minecraft:echo_shard','goety:craft',[
        'minecraft:amethyst_block',
        'minecraft:amethyst_block',
        'minecraft:amethyst_block',
        'minecraft:amethyst_block',
        'minecraft:sculk_catalyst',
        'minecraft:sculk_shrieker',
        'minecraft:sculk_sensor',
        'enigmaticaddons:earth_heart_fragment',
        'minecraft:sculk_vein',
        'minecraft:sculk_vein',
        'minecraft:sculk',
        'minecraft:sculk'
    ])
    .activationItem('goetydelight:gathering_soul_embryos')
    .craftType('geoturgy')
    .soulCost(10)
    .duration(10)
    .id("curlamoety:echo_shard")

    //血战沙场之证
    event.remove({output:'enigmaticlegacy:berserk_charm'})
    event.recipes.goety.ritual('enigmaticlegacy:berserk_charm','goety:craft',[
        'goety:soul_ruby',
        'minecraft:blaze_rod',
        'enigmaticlegacy:twisted_heart',
        'minecraft:netherite_sword',
        'enigmaticlegacy:evil_essence',
        'minecraft:nether_bricks',
        'enigmaticaddons:ichor_droplet',
        'minecraft:nether_bricks',
        'enigmaticlegacy:evil_essence',
        'minecraft:nether_bricks',
        'enigmaticaddons:ichor_droplet',
        'minecraft:nether_bricks',
    ])
    .activationItem('enigmaticdelicacy:weapon_charm')
    .craftType('expert_nether')
    .soulCost(10)
    .duration(20)
    .id("curlamoety:berserker_charm")

    //无止暴食之证
    event.remove({output:'enigmaticdelicacy:gluttony_charm'})
    event.recipes.goety.ritual('enigmaticdelicacy:gluttony_charm','goety:craft',[
        'goety:soul_ruby',
        'farmersdelight:netherite_knife',
        'enigmaticlegacy:twisted_heart',
        'goetydelight:dark_knife',
        'enigmaticlegacy:evil_essence',
        'minecraft:nether_bricks',
        'enigmaticaddons:ichor_droplet',
        'minecraft:nether_bricks',
        'enigmaticlegacy:evil_essence',
        'minecraft:nether_bricks',
        'enigmaticaddons:ichor_droplet',
        'minecraft:nether_bricks',
    ])
    .activationItem('enigmaticdelicacy:hungry_charm')
    .craftType('expert_nether')
    .soulCost(10)
    .duration(20)
    .id("curlamoety:gluttony_charm")

    //无止之言
    event.remove({output:('enigmaticlegacy:the_infinitum')})
    event.recipes.goety.ritual('enigmaticlegacy:the_infinitum','goety:craft',[
        'enigmaticlegacy:enchanter_pearl',
        'enigmaticlegacy:evil_ingot',
        'enigmaticlegacy:the_twist',
        'enigmaticlegacy:evil_ingot',
        'enigmaticlegacy:cosmic_heart',
        'cataclysm:cursium_ingot',
        'enigmaticaddons:bless_amplifier',
        'enigmaticlegacy:enchantment_transposer',
        'enigmaticlegacy:cosmic_heart',
        'enigmaticdelicacy:enchantment_duplicator',
        'enigmaticlegacy:curse_transposer',
        'cataclysm:cursium_ingot',
    ])
    .activationItem('enigmaticlegacy:abyssal_heart')
    .craftType('magic')
    .soulCost(100)
    .duration(30)
    .id("curlamoety:the_infinitium")

    //饕餮之锅
    event.remove({output:('enigmaticlegacy:eldritch_pan')})
    event.recipes.goety.ritual('enigmaticlegacy:eldritch_pan','goety:craft',[
        'enigmaticlegacy:void_stone',
        'enigmaticlegacy:evil_ingot',
        'enigmaticlegacy:ender_rod',
        'enigmaticlegacy:evil_ingot',
        'goety:dark_ingot',
        'goetydelight:cursed_ingot_pot',
        'goety:pendant_of_hunger',
        'goety_cataclysm:abyss_essence',
        'goety:dark_ingot',
        'enigmaticlegacy:evil_essence',
        'farmersdelight:skillet',
        'goety:cursed_metal_block',
    ])
    .activationItem('enigmaticlegacy:abyssal_heart')
    .craftType('forge')
    .soulCost(100)
    .duration(30)
    .id("curlamoety:eldritch_pan")

    //暗夜炉灶
    event.remove({output:('goetydelight:night_stove')})
    event.recipes.goety.ritual('goetydelight:night_stove','goety:craft',[
        'minecraft:sculk_shrieker',
        'goety:heart_of_the_night',
        'goety:pithos',
        'goety:night_beacon',
        'goetydelight:shade_stove',
        'goety:dark_metal_block',
    ])
    .activationItem('enigmaticdelicacy:etherium_stove')
    .craftType('forge')
    .soulCost(100)
    .duration(10)
    .id("curlamoety:night_stove")

    //死亡射线聚晶
    event.recipes.goety.ritual('goetyawaken:death_ray_focus','goety:craft',[
        'goety:sonic_boom_focus',
        'goety:magic_bolt_focus',
        'goety_cataclysm:death_laser_focus',
        'goety:thunderbolt_focus',
        'goety:ectoplasm',
        'goety:unholy_blood',
        'goety:ectoplasm',
        'minecraft:wither_rose',
        'goety:shadow_essence',
    ])
    .activationItem('goety:heart_of_the_night')
    .craftType('necroturgy')
    .soulCost(44)
    .duration(30)
    .research('forbidden')
    .id("curlamoety:death_ray_focus")

    event.remove({output:('goety:blade_of_ender')})//末影之刃
    event.recipes.goety.ritual('goety:blade_of_ender','goety:craft',[
        'goety:void_echo',
        'goety:void_echo',
        'enigmaticlegacy:ender_rod',
        'goety:dark_ingot',
        'goety:soul_emerald',
        'minecraft:dragon_breath',
        'goety:razor_wind_focus',
        'enigmaticlegacy:etherium_ingot',
        'enigmaticlegacy:astral_dust'
    ])
    .activationItem('enigmaticlegacy:ender_slayer')
    .craftType('end')
    .soulCost(10)
    .duration(30)
    .id("curlamoety:blade_of_ender")

    //无星之夜
    event.remove({output:('goetyawaken:starless_night')})
    event.recipes.goety.ritual(Item.of('goetyawaken:starless_night','{Unbreakable:1b}'),'goety:craft',[
        'goety:blade_of_ender',
        'goetyawaken:eye_of_overwatch',
        'goetyawaken:soul_sapphire',
        'goety:dark_metal_block',
        'minecraft:netherite_block',
        'goety:void_staff',
        'cataclysm:void_core',
        'goety:night_beacon',
        'enigmaticdelicacy:etherium_machete',
        'goety:end_walk_focus',
        'enigmaticlegacy:evil_ingot',
        'goety:void_barrel'
    ])
    .activationItem('goetyawaken:obsidian_claymore')
    .craftType("forge")
    .soulCost(500)
    .duration(20)
    .research("forbidden")
    .id("curlamoety:starless_night")

    //贤者之锤
    event.recipes.goety.ritual(Item.of('goety:philosophers_mace','{Unbreakable:1b}'),'goety:craft',[
        'goety:dark_shovel',
        'goety:dark_pickaxe',
        'goety:graverobber_shovel',
        'goety:eerie_pickaxe',
        'minecraft:netherite_ingot',
        'minecraft:netherite_ingot',
        'goety:haunted_log',
        'goety:cursed_metal_block'
    ])
    .activationItem('goety:philosophers_mace')
    .craftType("expert_nether")
    .soulCost(5)
    .duration(30)
    .id("curlamoety:philosophers_mace")

    //玛丽苏的枝杖
    event.recipes.goety.ritual(Item.of('curlamoety:mary_sue_staff_plus','{Unbreakable:1b}'),'goety:craft',[
        'goety:soul_ruby',
        'netherite_ingot',
        'blaze_rod',
        'goety:wind_core',
        'goety:soul_emerald',
        'writable_book',
        'iron_helmet',
        'goety:razor_wind_focus',
        'leather_helmet',
        'torch',
        'enigmaticlegacy:evil_essence',
    ])
    .activationItem('curlamoety:mary_sue_staff')
    .craftType("forge")
    .soulCost(2)
    .duration(15)
    .id('curlamoety:mary_sue_staff_plus1')

    event.recipes.goety.ritual(Item.of('curlamoety:mary_sue_staff_plus','{Unbreakable:1b}'),'goety:craft',[
        'goety:soul_ruby',
        'netherite_ingot',
        'blaze_rod',
        'goety:wind_core',
        'goety:soul_emerald',
        'writable_book',
        'iron_helmet',
        'goety:razor_wind_focus',
        'leather_helmet',
        'torch',
        'enigmaticlegacy:etherium_ingot'
    ])
    .activationItem('curlamoety:mary_sue_staff')
    .craftType("forge")
    .soulCost(2)
    .duration(15)
    .id('curlamoety:mary_sue_staff_plus2')

    event.recipes.goety.ritual(Item.of('curlamoety:shikishin_wand','{Unbreakable:1b}'),'goety:craft',[
        '#goetyawaken:gohei',
        'goety:spirit_fabric',
        'goety:dark_ingot',
        'minecraft:nether_star',
        'cataclysm:monstrous_horn',
        'cataclysm:lava_power_cell',
        'goety:magic_emerald',
        'goety:mystic_core',
        'minecraft:enchanting_table',
        'minecraft:jack_o_lantern',
        'goety:soul_heal_focus',
        'minecraft:quartz'
    ])
    .activationItem('curlamoety:inspiration_wand')
    .craftType("forge")
    .soulCost(2)
    .duration(15)
    .id('curlamoety:shikishin_wand')

    //挖矿树苗
    event.recipes.goety.ritual('twilightforest:mining_sapling','goety:craft',[
        'twilightforest:ore_magnet',
        'minecraft:sticky_piston',
        'goety:sensing_focus',
        'minecraft:piston',
        'goety:ominous_shackles',
        'goety:tunnel_focus',
        'refinedstorage:importer',
        'refinedstorage:exporter',
        '#forge:ores/diamond',
        '#forge:ores/iron',
        '#forge:ores/gold',
        '#forge:ores/redstone'
    ])
    .activationItem('twilightforest:hollow_oak_sapling')
    .craftType('twilight')
    .soulCost(5)
    .duration(10)
    .id("curlamoety:mining_sapling")

    //彩虹树苗
    event.recipes.goety.ritual('twilightforest:rainbow_oak_sapling', 'goety:craft', [
        'minecraft:red_dye',
        'minecraft:orange_dye',
        'minecraft:yellow_dye',
        'minecraft:green_dye',
        'minecraft:cyan_dye',
        'minecraft:blue_dye',
        'minecraft:purple_dye',
        'goety:ectoplasm'
    ])
    .activationItem('twilightforest:hollow_oak_sapling')
    .craftType('twilight')  
    .soulCost(1)
    .duration(10)
    .id("curlamoety:rainbow_oak_sapling")

    //分类树苗
    event.recipes.goety.ritual('twilightforest:sorting_sapling', 'goety:craft', [
        'minecraft:carved_pumpkin',
        'goety:animation_core',
        'minecraft:copper_block',
        'refinedstorage:advanced_processor',
        'refinedstorage:construction_core',
        'refinedstorage:destruction_core',
        'sophisticatedbackpacks:filter_upgrade',
        'sophisticatedbackpacks:pickup_upgrade',
        'minecraft:chest',
        'minecraft:hopper'
    ])
    .activationItem('twilightforest:hollow_oak_sapling')
    .craftType('twilight')  
    .soulCost(3)
    .duration(10)
    .id("curlamoety:sorting_sapling")

    //变化树苗
    event.recipes.goety.ritual('twilightforest:transformation_sapling', 'goety:craft', [
        'goety:mystic_core',
        'goety:magic_fabric',
        'goety:mystic_core',
        'goety:magic_fabric'
    ])
    .activationItem('twilightforest:hollow_oak_sapling')
    .craftType('twilight')  
    .soulCost(1)
    .duration(10)
    .id("curlamoety:transformation_sapling")

    //时光树苗
    event.recipes.goety.ritual('twilightforest:time_sapling', 'goety:craft', [
        'minecraft:clock',
        'minecraft:clock',
        'minecraft:clock',
        'minecraft:clock',
        'goety:mystic_core',
        'goety:mystic_core',
        'tarotcards:the_moon',
        'tarotcards:the_sun',
        'enigmaticaddons:revival_leaf',
        'enigmaticlegacy:infinimeal',
        'farmersdelight:rich_soil',
        'twilightforest:uberous_soil'
    ])
    .activationItem('twilightforest:hollow_oak_sapling')
    .craftType('twilight')  
    .soulCost(100)
    .duration(10)
    .id("curlamoety:time_sapling")

    //孔雀羽扇
    event.recipes.goety.ritual('twilightforest:peacock_feather_fan', 'goety:craft', [
        'minecraft:feather',
        'minecraft:feather',
        'minecraft:phantom_membrane',
        'minecraft:phantom_membrane',
        'trials:wind_charge',
        'goety:wind_core',
    ])
    .activationItem('goety:gale_fabric')
    .craftType('sky')  
    .soulCost(2)
    .duration(10)
    .id("curlamoety:peacock_feather_fan")

    //寒冰弓
    event.recipes.goety.ritual('twilightforest:ice_bow','goety:craft',[
        'twilightforest:ice_bomb',
        'goety:chill_fabric',
        'twilightforest:aurora_block',
        'goety:ice_spike_focus',
        'goety:cursed_ingot',
        'minecraft:diamond',
        'twilightforest:twilight_oak_log',
        'twilightforest:snow_queen_trophy'
    ])
    .activationItem('minecraft:bow')
    .craftType('forge')
    .soulCost(3)
    .duration(15)
    .id("curlamoety:ice_bow")

    //末影弓
    event.recipes.goety.ritual('twilightforest:ender_bow','goety:craft',[
        'minecraft:ender_pearl',
        'goety:occult_fabric',
        'minecraft:ender_eye',
        'goety:blink_focus',
        'goety:cursed_ingot',
        'minecraft:diamond',
        'twilightforest:twilight_oak_log',
        'twilightforest:snow_queen_trophy'
    ])
    .activationItem('minecraft:bow')
    .craftType('forge')
    .soulCost(3)
    .duration(15)
    .id("curlamoety:ender_bow")

    //迷宫破坏者
    event.recipes.goety.ritual(Item.of('twilightforest:mazebreaker_pickaxe', '{Damage:0}').enchant('minecraft:efficiency', 4).enchant('minecraft:unbreaking', 3).enchant('minecraft:fortune', 2),'goety:craft',[
        'twilightforest:knightmetal_ingot',
        'twilightforest:knightmetal_ingot',
        'twilightforest:twilight_oak_log',
        'twilightforest:knightmetal_ingot',
        'curlamoety:chlorophium_ingot',
        'curlamoety:chlorophium_ingot',
        'goety:cursed_ingot',
        'goety:magic_emerald'
    ])
    .activationItem('minecraft:diamond_pickaxe')
    .craftType('forge')
    .soulCost(3)
    .duration(10)
    .id("curlamoety:mazebreaker_pickaxe")

    //混沌立方
    event.recipes.goety.ritual('2x curlamoety:chaos_cube', 'goety:craft', [
        'enigmaticlegacy:golem_heart',
        'enigmaticlegacy:ocean_stone',
        'enigmaticlegacy:angel_blessing',
        'enigmaticlegacy:blazing_core',
        'enigmaticlegacy:eye_of_nebula',
        'enigmaticlegacy:void_pearl',
        'enigmaticaddons:forgotten_ice',
        'enigmaticaddons:revival_leaf',
        'enigmaticaddons:lost_engine',
        'enigmaticaddons:illusion_lantern',
        'enigmaticaddons:etherium_core',
        'enigmaticlegacy:mending_mixture'
    ])
    .activationItem('enigmaticlegacy:astral_block')
    .craftType('master_forge')  
    .soulCost(1000)
    .duration(20)
    .id("curlamoety:chaos_cube")

    //巫法极点
    event.recipes.goety.ritual('2x curlamoety:goal_ty', 'goety:craft', [
        'goety_revelation:broken_halo',
        'goetyawaken:gilded_ingot',
        'goetyawaken:nether_reactor_core',
        'goetydelight:metamorphic_scent_fruit',
        'goety:shrouded_blueprint',
        'goety:night_beacon',
        'goety:ominous_orb',
        'goetydelight:ancient_enchanted_golden_apple',
        'goety:spent_totem',
        'goety:heart_of_the_night',
        'goety:arca',
        'goetyawaken:eye_of_overwatch'
    ])
    .activationItem('goety:philosophers_stone')
    .craftType('magic')  
    .soulCost(1000)
    .duration(20)
    .id("curlamoety:goal_ty")

    //厄难本源
    event.recipes.goety.ritual('2x curlamoety:calamity_source', 'goety:craft', [
        'cataclysm:ignitium_ingot',
        'cataclysm:essence_of_the_storm',
        'cataclysm:cursium_ingot',
        'cataclysm:witherite_block',
        'goety_cataclysm:abyss_essence',
        'cataclysm:sandstorm_in_a_bottle',
        'cataclysm:monstrous_horn',
        'cataclysm:gauntlet_of_guard',
        'cataclysm:blessed_amethyst_crab_meat',
        'minecraft:blackstone',
        'cataclysm:void_stone',
        'minecraft:grass_block'
    ])
    .activationItem('cataclysm:burning_ashes')
    .craftType('expert_nether')  
    .soulCost(1000)
    .duration(20)
    .id("curlamoety:calamity_source")

    //创生之暮
    event.recipes.goety.ritual('2x curlamoety:twilight_sparkle', 'goety:craft', [
        'twilightforest:thorn_rose',
        'curlamoety:chlorophium_ingot',
        'twilightforest:knightmetal_block',
        'curlamoety:biogenesium_ingot',
        'twilightforest:naga_trophy',
        'twilightforest:lich_trophy',
        'twilightforest:alpha_yeti_trophy',
        'twilightforest:minoshroom_trophy',
        'twilightforest:knight_phantom_trophy',
        'twilightforest:snow_queen_trophy',
        'twilightforest:hydra_trophy',
        'twilightforest:ur_ghast_trophy'
    ])
    .activationItem('curlamoety:evernight_veil')
    .craftType('twilight')  
    .soulCost(1000)
    .duration(20)
    .id("curlamoety:twilight_sparkle")

    //天启之陨
    event.recipes.goety.ritual('curlamoety:fall_of_apocalypse', 'goety:craft', [
        'minecraft:arrow',
        'minecraft:bow',
        'goety:animation_core',
        'goety:wind_core',
    ])
    .activationItem('goety_revelation:apocalyptium_ingot')
    .craftType('master_forge')  
    .soulCost(100)
    .duration(10)
    .id('curlamoety:fall_of_apocalypse')

    //魔术师之手
    event.recipes.goety.ritual('curlamoety:magician_hand', 'goety:craft', [
        'minecraft:diamond',
        'minecraft:ender_pearl',
        'minecraft:leather',
        'minecraft:phantom_membrane',
        'minecraft:ender_pearl',
        'goety:ectoplasm'
    ])
    .activationItem('goety:spirit_fabric')
    .craftType('magic')  
    .soulCost(1)
    .duration(10)
    .id('curlamoety:magician_hand')

    //妖精聚晶
    event.remove({output:('goetyawaken:fairy_focus')})
    event.recipes.goety.ritual('goetyawaken:fairy_focus','goety:craft',[
        '#goetyawaken:gohei',
        'touhou_little_maid:power_point',
        'goety:occult_fabric',
        '#touhou_little_maid:maid_tamed_item',
        'goety:magic_fabric',
        'touhou_little_maid:power_point',
        'goety:occult_fabric',
        '#touhou_little_maid:maid_tamed_item',
        'goety:magic_fabric',
    ])
    .activationItem('goety:animation_core')
    .craftType('magic')
    .soulCost(5)
    .duration(10)
    .id("curlamoety:fairy_focus")
    
    event.recipes.goety.ritual('goetyawaken:fairy_focus','goety:craft',[
        'touhou_little_maid:power_point',
        '#touhou_little_maid:maid_tamed_item',
        'touhou_little_maid:power_point',
        '#touhou_little_maid:maid_tamed_item',
        '#goetyawaken:gohei',
    ])
    .activationItem("curlamoety:mini_pants")
    .craftType('magic')
    .soulCost(5)
    .duration(10)
    .id("curlamoety:fairy_focus_pants")

    //女巫仆从
    event.remove("goety:convert_villager_to_witch")
    event.recipes.goety.ritual('goety:jei_dummy/none','goety:convert_tamed',[
        'goety:soul_emerald'
    ])
    .activationItem('goety:mystic_core')
    .craftType('witch')
    .entityToConvertTag('goety:villagers')
    .entityToConvertDisplayName('村民')
    .entityToConvertInto('goety:witch_servant')
    .soulCost(1)
    .duration(10)
    .id("curlamoety:witch_servant")

    //堕落者仆从
    event.remove("goety:convert_trader_to_reprobate")
    event.recipes.goety.ritual('goety:jei_dummy/none','goety:convert_tamed',[
        'goety:magic_emerald'
    ])
    .activationItem('goety:mystic_core')
    .craftType('witch')
    .entityToConvertTag('goety:wandering_traders')
    .entityToConvertDisplayName('流浪商人')
    .entityToConvertInto('goety:reprobate_servant')
    .soulCost(1)
    .duration(10)
    .id("curlamoety:reprobate_servant")

    //独行者仆从
    event.recipes.goety.ritual('goety:jei_dummy/none','goety:convert_tamed',[
        'goety:soul_emerald'
    ])
    .activationItem('goety:mystic_core')
    .craftType('witch')
    .entityToConvertTag('goety:wandering_traders')
    .entityToConvertDisplayName('流浪商人')
    .entityToConvertInto('goety:maverick_servant')
    .soulCost(1)
    .duration(10)
    .id("curlamoety:marverick_servant")

    //异教徒仆从
    event.recipes.goety.ritual('goety:jei_dummy/none','goety:convert_tamed',[
        'minecraft:blaze_rod',
        'minecraft:book'
    ])
    .activationItem('goety:mystic_core')
    .craftType('witch')
    .entityToConvertTag('goety:villagers')
    .entityToConvertDisplayName('村民')
    .entityToConvertInto('goety:heretic_servant')
    .soulCost(1)
    .duration(10)
    .id("curlamoety:heretic_servant")

    //巫婆仆从
    event.remove("goetyawaken:crone_servant")
    event.recipes.goety.ritual('goety:jei_dummy/none','goety:convert_tamed',[
        'goety:brew',
        'goety:splash_brew',
        'goety:lingering_brew',
        'goety:gas_brew',
        'goety:brew_bag',
        'goety:cauldron_ladle',
        'goety:witch_pole'
    ])
    .activationItem('goety:crone_hat')
    .craftType('witch')
    .entityToConvertTag('goetyawaken:witch')
    .entityToConvertDisplayName('女巫')
    .entityToConvertInto('goetyawaken:crone_servant')
    .soulCost(5)
    .duration(10)
    .id("curlamoety:crone_servant")

    //不洁卷轴
    event.remove({output:('goeticlegacy:unholy_scroll')})
    event.recipes.goety.ritual('goeticlegacy:unholy_scroll','goety:craft',[
        "goety:unholy_fabric",
        "enigmaticlegacy:lore_inscriber",
        "goety:unholy_fabric",
        "goety:dark_ingot",
        "goety:void_echo",
        "goety:void_echo",
        "goety:focus_pack",
        "ender_chest",
        "enigmaticaddons:ichor_droplet",
        "enigmaticaddons:ichor_droplet",
        "minecraft:echo_shard",
        "minecraft:nautilus_shell",
    ])
    .activationItem("enigmaticlegacy:darkest_scroll")
    .craftType("expert_nether")
    .soulCost(66)
    .duration(30)
    .research("bygone")
    .id("curlamoety:unholy_scroll")

    //暗夜立方
    event.remove({output:('goeticlegacy:night_cube')})
    event.recipes.goety.ritual('goeticlegacy:night_cube','goety:craft',[
        "goety:soul_emerald",
        "goety:forbidden_fragment",
        "curlamoety:perfect_matter",
        "goety:forbidden_fragment",
        "#curios:spellstone",
        "goety:haunted_glass",
        'minecraft:chiseled_bookshelf',
        "goety:haunted_glass",
        "enigmaticlegacy:thicc_scroll",
        "goety:haunted_glass",
        "goety:cursed_cage",
        "goety:haunted_glass",
    ])
    .activationItem("goety:heart_of_the_night")
    .craftType("necroturgy")
    .soulCost(44)
    .duration(44)
    .research("fobidden")
    .id("curlamoety:night_cube")

    //晋升披萨
    event.recipes.goety.ritual('curlamoety:ascension_pizza','goety:craft',[
        "minecraft:milk_bucket",
        "minecraft:milk_bucket",
        "#forge:dough",
        "#forge:dough",
        "farmersdelight:tomato_sauce",
        "farmersdelight:tomato_sauce",
        "enigmaticdelicacy:astral_fruit_slice",
        "farmersdelight:bacon",
        "minecraft:nether_star",
        "goetydelight:metamorphic_scent_fruit",
        "enigmaticlegacy:ichor_bottle",
        "enigmaticdelicacy:enigmatic_cream"
    ])
    .activationItem("goety_revelation:ascension_halo")
    .craftType("chef")
    .soulCost(666)
    .duration(30)
    .research("god_forging")
    .entityToSacrificeTag("goetydelight:cow")
    .entityToSacrificeDisplayName("牛")
    .id("curlamoety:ascension_pizza")

})
ServerEvents.recipes(event=>{//无封装方法
    //event.custom({
    //    "type": "goety:ritual",
    //    "ritual_type": "goety:craft",
    //    "activation_item": {
    //        "item": "goety:heart_of_the_night"
    //    },
    //    "craftType": "necroturgy",
    //    "soulCost": 44,
    //    "duration": 44,
    //    "research":"forbidden",
    //    "ingredients": [
    //        {
    //            "item": "goety:soul_emerald"
    //        },
    //        {
    //            "item": "goety:forbidden_fragment"
    //        },
    //        {
    //            "item": "curlamoety:perfect_matter"
    //        },
    //        {
    //            "item": "goety:forbidden_fragment"
    //        },
    //        {
    //            "tag": 'curios:spellstone'
    //        },
    //        {
    //            "item": "goety:haunted_glass"
    //        },
    //        {
    //            "item": "patchouli:guide_book",
    //            "nbt": '{"patchouli:book":"goety:black_book"}'
    //        },
    //        {
    //            "item": "goety:haunted_glass"
    //        },
    //        {
    //            "item": "enigmaticlegacy:thicc_scroll"
    //        },
    //        {
    //            "item": "goety:haunted_glass"
    //        },
    //        {
    //            "item": "goety:cursed_cage"
    //        },
    //        {
    //            "item": "goety:haunted_glass"
    //        }
    //    ],
    //    "result": {
    //        "item": "goeticlegacy:night_cube",
    //    }
    //})
    //.id("curlamoety:night_cube2")
})
    
        

    

    

    

