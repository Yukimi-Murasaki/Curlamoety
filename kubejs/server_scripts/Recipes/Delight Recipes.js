
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
    )
    event.recipes.farmersdelight.cutting(//虚妄箴言可以切天体果
        'enigmaticlegacy:astral_fruit',
        'goety:philosophers_mace',
        [
            '2x enigmaticdelicacy:astral_fruit_slice',
        ],
    )
    event.recipes.farmersdelight.cutting(//贤者锤砸碎晋升环
        'goety_revelation:ascension_halo',
        'goety:philosophers_mace',
        [
            'goety_revelation:broken_halo'
        ],
        'minecraft:block.beacon.deactivate'
    )
    event.recipes.farmersdelight.cutting(//砰砰疣
        'goety:snap_warts',
        '#farmersdelight:tools/knives',
        [
            'minecraft:crimson_fungus',
            'minecraft:warped_fungus'
        ],
    )
    
    event.recipes.farmersdelight.cutting(//水洗石英花
        'enigmaticaddons:artificial_flower',
        'minecraft:water_bucket',
        [
            'enigmaticaddons:artificial_flower',
        ],
        'minecraft:item.bucket.empty'
    )

    event.recipes.farmersdelight.cutting(//忘却冰晶
        'enigmaticaddons:forgotten_ice',
        '#forge:tools/pickaxes',
        [
            '3x minecraft:blue_ice',
            'minecraft:diamond',
            Item.of('minecraft:diamond').withChance(0.5)
        ],
        'minecraft:block.glass.break'
    )

    event.recipes.farmersdelight.cutting(//复苏之叶
        'enigmaticaddons:revival_leaf',
        '#forge:tools/axes',
        [
            '2x minecraft:emerald_block',
            '3x goety:magic_emerald',
            Item.of('minecraft:diamond').withChance(0.5)
        ],
        'minecraft:block.grass.break'
    )

    event.recipes.farmersdelight.cutting(//失落引擎
        'enigmaticaddons:lost_engine',
        '#forge:tools/pickaxes',
        [
            '2x minecraft:copper_block',
            '4x minecraft:redstone',
            Item.of('minecraft:diamond').withChance(0.5)
        ],
        'minecraft:block.copper.break'
    )

    event.recipes.farmersdelight.cutting(//虚幻冥灯
        'enigmaticaddons:illusion_lantern',
        '#forge:tools/pickaxes',
        [
            'minecraft:copper_block',
            'minecraft:soul_lantern',
            Item.of('minecraft:diamond').withChance(0.5)
        ],
        'minecraft:block.lantern.break'
    )

    event.recipes.farmersdelight.cutting(//魔像之心
        'enigmaticlegacy:golem_heart',
        '#forge:tools/pickaxes',
        [
            'minecraft:iron_block',
            '3x minecraft:obsidian',
            Item.of('minecraft:diamond').withChance(0.5)
        ],
        'minecraft:entity.iron_golem.hurt'
    )

    event.recipes.farmersdelight.cutting(//烈焰之核
        'enigmaticlegacy:blazing_core',
        '#forge:tools/pickaxes',
        [
            '2x minecraft:diamond',
            'minecraft:netherite_scrap',
            Item.of('minecraft:netherite_scrap').withChance(0.5)
        ],
        'minecraft:block.stone.break'
    )

    event.recipes.farmersdelight.cutting(//海洋意志
        'enigmaticlegacy:ocean_stone',
        '#forge:tools/pickaxes',
        [
            'minecraft:diamond',
            '3x minecraft:lapis_block',
            Item.of('minecraft:heart_of_the_sea').withChance(0.5)
        ],
        'minecraft:block.stone.break'
    )

    event.recipes.farmersdelight.cutting(//虚空珍珠
        'enigmaticlegacy:void_pearl',
        '#forge:tools/pickaxes',
        [
            '4x minecraft:diamond',
            '3x minecraft:gold_block',
            'minecraft:netherite_ingot'
        ],
        'minecraft:block.lantern.break'
    )

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
    )

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
    )

    event.recipes.farmersdelight.cutting(//娜迦护甲
        'twilightforest:naga_chestplate',
        '#forge:tools/pickaxes',
        [
            '2x twilightforest:naga_scale',
            Item.of('twilightforest:naga_scale').withChance(0.5)
        ],
        'minecraft:block.deepslate.break',
    )

    event.recipes.farmersdelight.cutting(//娜迦护甲
        'twilightforest:naga_leggings',
        '#forge:tools/pickaxes',
        [
            '2x twilightforest:naga_scale',
            Item.of('twilightforest:naga_scale').withChance(0.5)
        ],
        'minecraft:block.deepslate.break',
    )

    event.recipes.farmersdelight.cutting(//骑士护甲
        'twilightforest:knightmetal_helmet',
        '#forge:tools/pickaxes',
        [
            'twilightforest:armor_shard_cluster',
            '3x twilightforest:armor_shard',
            Item.of('2x twilightforest:armor_shard').withChance(0.5)
        ],
        'minecraft:block.chain.break',
    )
    event.recipes.farmersdelight.cutting(//骑士护甲
        'twilightforest:knightmetal_chestplate',
        '#forge:tools/pickaxes',
        [
            'twilightforest:armor_shard_cluster',
            '3x twilightforest:armor_shard',
            Item.of('2x twilightforest:armor_shard').withChance(0.5)
        ],
        'minecraft:block.chain.break',
    )
    event.recipes.farmersdelight.cutting(//骑士护甲
        'twilightforest:knightmetal_leggings',
        '#forge:tools/pickaxes',
        [
            'twilightforest:armor_shard_cluster',
            '3x twilightforest:armor_shard',
            Item.of('2x twilightforest:armor_shard').withChance(0.5)
        ],
        'minecraft:block.chain.break',
    )
    event.recipes.farmersdelight.cutting(//骑士护甲
        'twilightforest:knightmetal_boots',
        '#forge:tools/pickaxes',
        [
            'twilightforest:armor_shard_cluster',
            '3x twilightforest:armor_shard',
            Item.of('2x twilightforest:armor_shard').withChance(0.5)
        ],
        'minecraft:block.chain.break',
    )
    event.recipes.farmersdelight.cutting(//骑士护甲
        'twilightforest:phantom_helmet',
        '#forge:tools/pickaxes',
        [
            'twilightforest:armor_shard_cluster',
            '3x twilightforest:armor_shard',
            Item.of('2x twilightforest:armor_shard').withChance(0.5)
        ],
        'minecraft:block.chain.break',
    )
    event.recipes.farmersdelight.cutting(//骑士护甲
        'twilightforest:phantom_chestplate',
        '#forge:tools/pickaxes',
        [
            'twilightforest:armor_shard_cluster',
            '3x twilightforest:armor_shard',
            Item.of('2x twilightforest:armor_shard').withChance(0.5)
        ],
        'minecraft:block.chain.break',
    )
    event.recipes.farmersdelight.cutting(//晋升披萨
        "curlamoety:ascension_pizza",
        "#farmersdelight:tools/knives",
        [
            "8x curlamoety:ascension_pizza_slice"
        ]
    )
//厨锅
    event.recipes.farmersdelight.cooking(
    ['#farmersdelight:feasts','#farmersdelight:meals','#farmersdelight:meals','goety:ectoplasm','minecraft:golden_carrot','minecraft:golden_apple'],
    'tarotcards:temperance', // 输出
    30, // 经验
    10, // 烹饪时间
    'goety:magic_fabric', // 容器
    )
})