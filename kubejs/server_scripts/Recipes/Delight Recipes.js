
ServerEvents.recipes(event => {
//砧板
    event.recipes.farmersdelight.cutting(//虚妄箴言可以切天体果
        'enigmaticlegacy:astral_fruit',
        'goetydelight:false_proverbs', // 工具
        [ // 输出
            '2x enigmaticdelicacy:astral_fruit_slice',
            //Item.of('minecraft:diamond')
            //    .withChance(0.1)
        ],
        // '' // 声音
    ).id("curlamoety:cutting/astral_fruit_slice_1")
    event.recipes.farmersdelight.cutting(//虚妄箴言可以切天体果
        'enigmaticlegacy:astral_fruit',
        'goety:philosophers_mace',
        [
            '2x enigmaticdelicacy:astral_fruit_slice',
        ],
    ).id("curlamoety:cutting/astral_fruit_slice_2")
    event.recipes.farmersdelight.cutting(//贤者锤砸碎晋升环
        'goety_revelation:ascension_halo',
        'goety:philosophers_mace',
        [
            'goety_revelation:broken_halo'
        ],
        'minecraft:block.beacon.deactivate'
    ).id("curlamoety:cutting/broken_halo")
    event.recipes.farmersdelight.cutting(//砰砰疣
        'goety:snap_warts',
        '#farmersdelight:tools/knives',
        [
            'minecraft:crimson_fungus',
            'minecraft:warped_fungus'
        ],
    ).id("curlamoety:cutting/snap_warts")
    
    event.recipes.farmersdelight.cutting(//水洗石英花
        'enigmaticaddons:artificial_flower',
        'minecraft:water_bucket',
        [
            'enigmaticaddons:artificial_flower',
        ],
        'minecraft:item.bucket.empty'
    ).id("curlamoety:cutting/artificial_flower")

    event.recipes.farmersdelight.cutting(//忘却冰晶
        'enigmaticaddons:forgotten_ice',
        '#forge:tools/pickaxes',
        [
            '3x minecraft:blue_ice',
            'minecraft:diamond',
            Item.of('minecraft:diamond').withChance(0.5)
        ],
        'minecraft:block.glass.break'
    ).id("curlamoety:cutting/forgotten_ice")

    event.recipes.farmersdelight.cutting(//复苏之叶
        'enigmaticaddons:revival_leaf',
        '#forge:tools/axes',
        [
            '2x minecraft:emerald_block',
            '3x goety:magic_emerald',
            Item.of('minecraft:diamond').withChance(0.5)
        ],
        'minecraft:block.grass.break'
    ).id("curlamoety:cutting/revival_leaf")

    event.recipes.farmersdelight.cutting(//失落引擎
        'enigmaticaddons:lost_engine',
        '#forge:tools/pickaxes',
        [
            '2x minecraft:copper_block',
            '4x minecraft:redstone',
            Item.of('minecraft:diamond').withChance(0.5)
        ],
        'minecraft:block.copper.break'
    ).id("curlamoety:cutting/lost_engine")

    event.recipes.farmersdelight.cutting(//虚幻冥灯
        'enigmaticaddons:illusion_lantern',
        '#forge:tools/pickaxes',
        [
            'minecraft:copper_block',
            'minecraft:soul_lantern',
            Item.of('minecraft:diamond').withChance(0.5)
        ],
        'minecraft:block.lantern.break'
    ).id("curlamoety:cutting/illusion_lantern")

    event.recipes.farmersdelight.cutting(//魔像之心
        'enigmaticlegacy:golem_heart',
        '#forge:tools/pickaxes',
        [
            'minecraft:iron_block',
            '3x minecraft:obsidian',
            Item.of('minecraft:diamond').withChance(0.5)
        ],
        'minecraft:entity.iron_golem.hurt'
    ).id("curlamoety:cutting/golem_heart")

    event.recipes.farmersdelight.cutting(//烈焰之核
        'enigmaticlegacy:blazing_core',
        '#forge:tools/pickaxes',
        [
            '2x minecraft:diamond',
            'minecraft:netherite_scrap',
            Item.of('minecraft:netherite_scrap').withChance(0.5)
        ],
        'minecraft:block.stone.break'
    ).id("curlamoety:cutting/blazing_core")

    event.recipes.farmersdelight.cutting(//海洋意志
        'enigmaticlegacy:ocean_stone',
        '#forge:tools/pickaxes',
        [
            'minecraft:diamond',
            '3x minecraft:lapis_block',
            Item.of('minecraft:heart_of_the_sea').withChance(0.5)
        ],
        'minecraft:block.stone.break'
    ).id("curlamoety:cutting/ocean_stone")

    event.recipes.farmersdelight.cutting(//虚空珍珠
        'enigmaticlegacy:void_pearl',
        '#forge:tools/pickaxes',
        [
            '4x minecraft:diamond',
            '3x minecraft:gold_block',
            'minecraft:netherite_ingot'
        ],
        'minecraft:block.lantern.break'
    ).id("curlamoety:cutting/void_pearl")

    event.recipes.farmersdelight.cutting(//天使之祝
        'enigmaticlegacy:angel_blessing',
        '#forge:tools/pickaxes',
        [
            '4x minecraft:gold_ingot',
            'goety:wind_core',
            'minecraft:iron_block',
            Item.of('minecraft:diamond').withChance(0.5)
        ],
        'minecraft:block.lantern.break'
    ).id("curlamoety:cutting/angel_blessing")

    event.recipes.farmersdelight.cutting(//星云之眼
        'enigmaticlegacy:eye_of_nebula',
        '#forge:tools/pickaxes',
        [
            'minecraft:netherite_ingot',
            '2x enigmaticlegacy:etherium_ingot',
            '3x minecraft:diamond',
            Item.of('minecraft:nether_star').withChance(0.2)
        ],
        'minecraft:block.lantern.break'
    ).id("curlamoety:cutting/eye_of_nebula")

    event.recipes.farmersdelight.cutting(//娜迦护甲
        'twilightforest:naga_chestplate',
        '#forge:tools/pickaxes',
        [
            '2x twilightforest:naga_scale',
            Item.of('twilightforest:naga_scale').withChance(0.5)
        ],
        'minecraft:block.deepslate.break',
    ).id("curlamoety:cutting/naga_chestplate")

    event.recipes.farmersdelight.cutting(//娜迦护甲
        'twilightforest:naga_leggings',
        '#forge:tools/pickaxes',
        [
            '2x twilightforest:naga_scale',
            Item.of('twilightforest:naga_scale').withChance(0.5)
        ],
        'minecraft:block.deepslate.break',
    ).id("curlamoety:cutting/naga_leggings")

    event.recipes.farmersdelight.cutting(//骑士护甲
        'twilightforest:knightmetal_chestplate',
        '#forge:tools/pickaxes',
        [
            'twilightforest:armor_shard_cluster',
            '3x twilightforest:armor_shard',
            Item.of('2x twilightforest:armor_shard').withChance(0.5)
        ],
        'minecraft:block.chain.break',
    ).id("curlamoety:cutting/knightmetal_chestplate")

    event.recipes.farmersdelight.cutting(//骑士护甲
        'twilightforest:phantom_helmet',
        '#forge:tools/pickaxes',
        [
            'twilightforest:armor_shard_cluster',
            '3x twilightforest:armor_shard',
            Item.of('2x twilightforest:armor_shard').withChance(0.5)
        ],
        'minecraft:block.chain.break',
    ).id("curlamoety:cutting/phantom_helmet")
    event.recipes.farmersdelight.cutting(//骑士护甲
        'twilightforest:phantom_chestplate',
        '#forge:tools/pickaxes',
        [
            'twilightforest:armor_shard_cluster',
            '3x twilightforest:armor_shard',
            Item.of('2x twilightforest:armor_shard').withChance(0.5)
        ],
        'minecraft:block.chain.break',
    ).id("curlamoety:cutting/phantom_chestplate")
    event.recipes.farmersdelight.cutting(//晋升披萨
        "curlamoety:ascension_pizza",
        "#farmersdelight:tools/knives",
        [
            "8x curlamoety:ascension_pizza_slice"
        ]
    ).id("curlamoety:cutting/ascension_pizza_slice")

    event.recipes.farmersdelight.cutting(//洗杯子
        "curlamoety:stocking_cup",
        'minecraft:water_bucket',
        [
            "goeticlegacy:holy_leggings",
            'minecraft:glass_bottle',
        ],
        'minecraft:item.bucket.empty'
    ).id("curlamoety:cutting/stocking_cup")

    event.recipes.farmersdelight.cutting(//幽匿之心
        "goeticlegacy:sculk_heart",
        "#forge:tools/swords",
        [
            "2x minecraft:echo_shard",
            "minecraft:diamond",
            "2x goety:ectoplasm",
            "goetydelight:gathering_soul_embryos"
        ],
        "minecraft:entity.warden.death"
    ).id("curlamoety:cutting/sculk_heart")

    event.recipes.farmersdelight.cutting(//海晶砂砾
        "minecraft:sand",
        'minecraft:water_bucket',
        [
            Item.of("minecraft:prismarine_crystals").withChance(0.2),
            Item.of("minecraft:gold_nugget").withChance(0.01)
        ],
        'minecraft:item.bucket.empty'
    ).id("curlamoety:cutting/sand")

//厨锅
    event.recipes.farmersdelight.cooking(
    ['#farmersdelight:feasts','#farmersdelight:meals','#farmersdelight:meals','goety:ectoplasm','minecraft:golden_carrot','minecraft:golden_apple'],
    'tarotcards:temperance', // 输出
    30, // 经验
    10, // 烹饪时间
    'goety:magic_fabric', // 容器
    ).id("curlamoety:cooking/temperance")

    event.recipes.farmersdelight.cooking(
    ['goeticlegacy:holy_leggings',"#forge:milk","#forge:milk",'enigmaticdelicacy:astral_leaf','minecraft:sugar','goety:mystic_core'],
    "curlamoety:stocking_tea", // 输出
    100, // 经验
    30, // 烹饪时间
    'minecraft:glass_bottle', // 容器
    ).id("curlamoety:cooking/stocking_tea")

})