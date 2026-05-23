LootJS.modifiers((event) => {//实体战利品
    event
    .addEntityLootModifier('minecraft:warden')//监守者
    .addLoot('2x minecraft:echo_shard');
    event
    .addEntityLootModifier('minecraft:wither')//凋灵
    .addLoot('minecraft:nether_star')
    .addLoot('3x minecraft:wither_rose')
    event
    .addEntityLootModifier('minecraft:husk')//尸壳
    .addWeightedLoot([
        Item.of('6x cataclysm:ancient_metal_nugget').withChance(1),
        Item.of('1x cataclysm:ancient_metal_ingot').withChance(1),
        Item.of('2x cataclysm:ancient_metal_ingot').withChance(1)
    ])
    event
    .addEntityLootModifier('cataclysm:koboleton')//骸龙
    .addWeightedLoot([
        Item.of('5x cataclysm:ancient_metal_nugget').withChance(1),
        Item.of('1x cataclysm:ancient_metal_ingot').withChance(1),
        Item.of('2x cataclysm:ancient_metal_ingot').withChance(1)
    ])
    event
    .addEntityLootModifier('cataclysm:kobolediator')//骸龙斗士
    .addWeightedLoot([
        Item.of('6x cataclysm:ancient_metal_nugget').withChance(1),
        Item.of('1x cataclysm:ancient_metal_ingot').withChance(1),
        Item.of('2x cataclysm:ancient_metal_ingot').withChance(1)
    ])
    event
    .addEntityLootModifier('cataclysm:wadjet')//瓦吉特
    .addWeightedLoot([
        Item.of('6x cataclysm:ancient_metal_nugget').withChance(1),
        Item.of('1x cataclysm:ancient_metal_ingot').withChance(1),
        Item.of('2x cataclysm:ancient_metal_ingot').withChance(1)
    ])
    event
    .addEntityLootModifier('goetyawaken:nameless_one')//无名者
    .addLoot("curlamoety:evernight_veil")
    .addWeightedLoot([
        Item.of('goety:nameless_cape').withChance(1),
        Item.of('goety:nameless_crown').withChance(1),
        Item.of('goety:nameless_staff').withChance(1),
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goety:necro_crown').withChance(1),
        Item.of('goety:necro_cape').withChance(1)
    ])
    event
    .addEntityLootModifier('goetyawaken:nameless_one_servant')//无名者
    .addLoot("curlamoety:evernight_veil")

    event
    .addEntityLootModifier('goety:minister')//灾厄教父
    .addLoot("curlamoety:monstrosity_caller")
    .addLoot("goety:ominous_shard")

    event
    .addEntityLootModifier('twilightforest:hydra')//九头蛇
    .addWeightedLoot((2),[
        Item.of('enigmaticlegacy:blazing_core').withChance(5),
        Item.of('enigmaticaddons:illusion_lantern').withChance(5),
        Item.of('goety:nether_robe').withChance(1),
        Item.of('goety:fireball_focus').withChance(3),
        Item.of('goetytwilight:blast_bomb_focus').withChance(3),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(3),
        Item.of('2x gold_ingot').withChance(20),
        Item.of('2x minecraft:netherite_scrap').withChance(8),
        Item.of('minecraft:gold_block').withChance(8),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
    ])

    event
    .addEntityLootModifier('twilightforest:alpha_yeti')//雪怪酋长
    .addWeightedLoot((2),[
        Item.of('goety:frost_robe').withChance(1),
        Item.of('goety:frost_staff').withChance(1),
        Item.of('goetytwilight:ice_crystal_focus').withChance(3),
        Item.of('goety:ice_spike_focus').withChance(3),
        Item.of('goetytwilight:frost_bomb_focus').withChance(3),
        Item.of('enigmaticaddons:forgotten_ice').withChance(8),
        Item.of('3x twilightforest:alpha_yeti_fur').withChance(4),
        Item.of('3x twilightforest:arctic_fur').withChance(4),
        Item.of('4x twilightforest:ice_bomb').withChance(6),
        Item.of('goetyawaken:bakasmusic_disc').withChance(2),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
    ])

    event
    .addEntityLootModifier('twilightforest:lich')//巫妖
    .addWeightedLoot((2),[
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goetytwilight:seal_focus').withChance(1),
        Item.of('goetytwilight:twilight_focus').withChance(3),
        Item.of('goety:rotting_focus').withChance(3),
        Item.of('goety:osseous_focus').withChance(3),
        Item.of('goety:illusion_focus').withChance(3),
        Item.of('goety:blink_focus').withChance(3),
        Item.of('goety:occult_fabric').withChance(6),
        Item.of('goety:animation_core').withChance(6),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
    ])

    event
    .addEntityLootModifier('twilightforest:snow_queen')//冰雪女王
    .addWeightedLoot([2],[
        Item.of('goety:frost_robe').withChance(1),
        Item.of('goety:frost_staff').withChance(1),
        Item.of('goetytwilight:ice_crystal_focus').withChance(3),
        Item.of('goety:ice_spike_focus').withChance(3),
        Item.of('goetytwilight:stable_ice_core_focus').withChance(3),
        Item.of('enigmaticaddons:forgotten_ice').withChance(8),
        Item.of('4x twilightforest:aurora_block').withChance(8),
        Item.of('4x twilightforest:ice_bomb').withChance(4),
        Item.of('goetyawaken:bakasmusic_disc').withChance(2),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
    ])
    .addWeightedLoot([1,2],[
        Item.of('twilightforest:seeker_bow').withChance(1),
        Item.of('twilightforest:triple_bow').withChance(1),
        Item.of('4x twilightforest:aurora_block').withChance(2)
    ])

    event
    .addEntityLootModifier('twilightforest:carminite_ghastguard')//砷铅铁
    .addLoot('2x twilightforest:experiment_115')

    event
    .addEntityLootModifier('twilightforest:carminite_ghastling')
    .addLoot('twilightforest:experiment_115')

    event
    .addEntityLootModifier('twilightforest:ur_ghast')
    .addWeightedLoot((2,3),[
        Item.of('enigmaticlegacy:blazing_core').withChance(5),
        Item.of('enigmaticaddons:illusion_lantern').withChance(5),
        Item.of('goety:nether_robe').withChance(1),
        Item.of('goetytwilight:arsenopyrite_focus').withChance(1),
        Item.of('goety:fireball_focus').withChance(3),
        Item.of('goetytwilight:sorrow_focus').withChance(3),
        Item.of('goetytwilight:carminite_golem_focus').withChance(3),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(3),
        Item.of('2x gold_ingot').withChance(20),
        Item.of('2x minecraft:netherite_scrap').withChance(8),
        Item.of('minecraft:gold_block').withChance(8),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
    ])
    .addLoot('3x twilightforest:experiment_115')

});       
LootJS.modifiers((event)=>{//宝箱战利品
    event
    .addLootTableModifier('minecraft:chests/woodland_mansion')//林地府邸
    .addLoot([
        LootEntry.of('enigmaticaddons:artificial_flower').when(c => c.randomChance(0.3))
    ])
    .addWeightedLoot([2,3],[
        Item.of('4x goety:magic_emerald').withChance(1),
        Item.of('goety:soul_emerald').withChance(1),
        Item.of('3x enigmaticaddons:earth_heart_fragment').withChance(1)
    ])
    event
    .addLootTableModifier('minecraft:chests/stronghold_library')//要塞图书馆
    .addLoot([
        LootEntry.of('enigmaticaddons:artificial_flower').when(c => c.randomChance(0.3))
    ])
    event
    .addLootTableModifier('minecraft:chests/desert_pyramid')//沙漠神殿
    .addWeightedLoot([1,2],[
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goety:rotting_focus').withChance(4),
        Item.of('goety:osseous_focus').withChance(3),
        Item.of('goety:occult_fabric').withChance(6),
        Item.of('goety:animation_core').withChance(6),
        Item.of('4x minecraft:sculk').withChance(16),
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(6)
    ])
    .addWeightedLoot([1,2],[
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(2)
    ])
    .addWeightedLoot([1,2],[
        Item.of('6x cataclysm:ancient_metal_nugget').withChance(1),
        Item.of('cataclysm:ancient_metal_ingot').withChance(1),
        Item.of('2x cataclysm:ancient_metal_ingot').withChance(1)
    ])
    .addLoot([
        LootEntry.of('goetyawaken:ancient_gong').when(c => c.randomChance(0.15))
    ])
     event
    .addLootTableModifier('minecraft:chests/jungle_pyramid')//丛林神殿
    .addWeightedLoot([2,3],[
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(4),
        Item.of('goety:entangling_focus').withChance(4),
        Item.of('goety:swarm_focus').withChance(4),
        Item.of('4x goety:quick_growing_seed').withChance(10),
        Item.of('8x goety:overgrown_roots').withChance(10),
        Item.of('2x goety:poison_quill_seed').withChance(10),
        Item.of('minecraft:diamond').withChance(10)
    ])
    event
    .addLootTableModifier('minecraft:chests/simple_dungeon')//地牢
    .addWeightedLoot([2],[
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goety:rotting_focus').withChance(4),
        Item.of('goety:osseous_focus').withChance(3),
        Item.of('2x goety:occult_fabric').withChance(4),
        Item.of('2x goety:ectoplasm').withChance(4),
        Item.of('goety:animation_core').withChance(4),
        Item.of('8x minecraft:sculk').withChance(12),
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(8)
    ])
    event
    .addLootTableModifier('minecraft:chests/shipwreck_supply')//沉船
    .addWeightedLoot([2],[
        Item.of('enigmaticlegacy:ocean_stone').withChance(9),
        Item.of('goety:abyss_crown').withChance(1),
        Item.of('goety:abyss_robe').withChance(1),
        Item.of('trident').withChance(4),
        Item.of('goety:tidal_focus').withChance(4),
        Item.of('goety:bouncy_bubble_focus').withChance(4),
        Item.of('goety:biomine_focus').withChance(4),
        Item.of('minecraft:pufferfish').withChance(8),
        Item.of('4x minecraft:prismarine').withChance(8),
        Item.of('5x minecraft:prismarine_shard').withChance(8)
    ])
    event
    .addLootTableModifier('minecraft:chests/shipwreck_treasure')//沉船
    .addWeightedLoot([2],[
        Item.of('enigmaticlegacy:ocean_stone').withChance(9),
        Item.of('goety:abyss_crown').withChance(1),
        Item.of('goety:abyss_robe').withChance(1),
        Item.of('trident').withChance(4),
        Item.of('goety:tidal_focus').withChance(4),
        Item.of('goety:bouncy_bubble_focus').withChance(4),
        Item.of('goety:biomine_focus').withChance(4),
        Item.of('minecraft:pufferfish').withChance(8),
        Item.of('4x minecraft:prismarine').withChance(8),
        Item.of('5x minecraft:prismarine_shard').withChance(8)
    ])
    event
    .addLootTableModifier('minecraft:chests/buried_treasure')//藏宝箱
    .addWeightedLoot([2,3],[
        Item.of('enigmaticlegacy:ocean_stone').withChance(9),
        Item.of('goety:abyss_crown').withChance(1),
        Item.of('goety:abyss_robe').withChance(1),
        Item.of('trident').withChance(4),
        Item.of('goety:tidal_focus').withChance(4),
        Item.of('goety:bouncy_bubble_focus').withChance(4),
        Item.of('goety:biomine_focus').withChance(4),
        Item.of('minecraft:pufferfish').withChance(8),
        Item.of('4x minecraft:prismarine').withChance(8),
        Item.of('5x minecraft:prismarine_shard').withChance(8)
    ])
    event
    .addLootTableModifier('minecraft:chests/nether_bridge')//下界要塞
    .addWeightedLoot([
        Item.of('enigmaticlegacy:blazing_core').withChance(8),
        Item.of('goety:nether_robe').withChance(1),
        Item.of('goety:fireball_focus').withChance(4),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(4),
        Item.of('minecraft:ancient_debris').withChance(4),
        Item.of('2x minecraft:netherite_scrap').withChance(8),
        Item.of('4x minecraft:nether_wart').withChance(8)
    ])
    .addWeightedLoot([
        Item.of('goety:blazing_horn').withChance(6),
        Item.of('goety:magma_bomb_focus').withChance(2),
        Item.of('goety:bombardment_focus').withChance(2),
        Item.of('2x minecraft:netherite_scrap').withChance(4),
        Item.of('4x minecraft:nether_wart').withChance(2)
    ])
    event
    .addLootTableModifier('minecraft:chests/bastion_bridge')//堡垒遗迹
    .addWeightedLoot([2],[
        Item.of('enigmaticaddons:illusion_lantern').withChance(10),
        Item.of('goety:nether_robe').withChance(1),
        Item.of('goety:fireball_focus').withChance(4),
        Item.of('goety:magma_bomb_focus').withChance(4),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(4),
        Item.of('goety:bombardment_focus').withChance(4),
        Item.of('minecraft:ancient_debris').withChance(4),
        Item.of('2x minecraft:netherite_scrap').withChance(8),
        Item.of('minecraft:gold_block').withChance(8)
    ])
    event
    .addLootTableModifier('minecraft:chests/bastion_hoglin_stable')//堡垒遗迹
    .addWeightedLoot([2],[
        Item.of('enigmaticaddons:illusion_lantern').withChance(10),
        Item.of('goety:nether_robe').withChance(1),
        Item.of('goety:fireball_focus').withChance(4),
        Item.of('goety:hogging_focus').withChance(4),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(4),
        Item.of('goety:bombardment_focus').withChance(4),
        Item.of('minecraft:ancient_debris').withChance(4),
        Item.of('2x minecraft:netherite_scrap').withChance(8),
        Item.of('minecraft:gold_block').withChance(8)
    ])
    event
    .addLootTableModifier('minecraft:chests/bastion_other')//堡垒遗迹
    .addWeightedLoot([2],[
        Item.of('enigmaticaddons:illusion_lantern').withChance(10),
        Item.of('goety:nether_robe').withChance(1),
        Item.of('goety:fireball_focus').withChance(4),
        Item.of('goety:magma_bomb_focus').withChance(4),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(4),
        Item.of('goety:bombardment_focus').withChance(4),
        Item.of('minecraft:ancient_debris').withChance(4),
        Item.of('2x minecraft:netherite_scrap').withChance(8),
        Item.of('minecraft:gold_block').withChance(8)
    ])
    event
    .addLootTableModifier('minecraft:chests/bastion_treasure')//堡垒遗迹
    .addWeightedLoot([2,3],[
        Item.of('enigmaticaddons:illusion_lantern').withChance(10),
        Item.of('goety:nether_robe').withChance(2),
        Item.of('goety:fireball_focus').withChance(4),
        Item.of('goety:magma_bomb_focus').withChance(4),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(4),
        Item.of('goety:bombardment_focus').withChance(4),
        Item.of('minecraft:ancient_debris').withChance(4),
        Item.of('2x minecraft:netherite_scrap').withChance(8),
        Item.of('minecraft:gold_block').withChance(8)
    ])
    event
    .addLootTableModifier('minecraft:chests/pillager_outpost')//掠夺者前哨站
    .addWeightedLoot([2,3],[
        Item.of('goetyawaken:ominous_eye').withChance(5),
        Item.of('trials:ominous_bottle').withChance(3),
        Item.of('2x goety:pale_steel_ingot').withChance(5),
        Item.of('2x experience_bottle').withChance(3),
        Item.of('2x ender_eye').withChance(3),
    ])
    .addWeightedLoot([1,2],[
        Item.of('4x goety:magic_emerald').withChance(1),
        Item.of('goety:soul_emerald').withChance(1),
        Item.of('3x enigmaticaddons:earth_heart_fragment').withChance(1)
    ])
    event
    .addLootTableModifier('minecraft:chests/end_city_treasure')//末地城
    .addWeightedLoot([1,2],[
        Item.of('goety:void_crown').withChance(1),
        Item.of('goety:void_robe').withChance(1),
        Item.of('goety:void_staff').withChance(1),
        Item.of('goety:blasting_focus').withChance(2),
        Item.of('goety:snaring_focus').withChance(2),
        Item.of('goety:watching_focus').withChance(2),
        Item.of('2x enigmaticlegacy:astral_dust').withChance(2),
        Item.of('enigmaticlegacy:etherium_ore').withChance(2)
    ])
    event
    .addLootTableModifier('minecraft:chests/ancient_city')//古城
    .addWeightedLoot([1,2],[
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goety:rotting_focus').withChance(4),
        Item.of('goety:osseous_focus').withChance(3),
        Item.of('goety:occult_fabric').withChance(6),
        Item.of('goety:animation_core').withChance(6),
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(6),
        Item.of('goetydelight:forbidden_soup_bun').withChance(6),
        Item.of('2x minecraft:echo_shard').withChance(12)
    ])
    .addWeightedLoot([1,2],[
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(2)
    ])
    event
    .addLootTableModifier('minecraft:chests/ancient_city_ice_box')//古城
    .addWeightedLoot([1,2],[
        Item.of('goety:frost_robe').withChance(1),
        Item.of('goety:frost_staff').withChance(1),
        Item.of('goety:frost_breath_focus').withChance(3),
        Item.of('goety:ice_spike_focus').withChance(3),
        Item.of('goety:iceology_focus').withChance(3),
        Item.of('enigmaticaddons:forgotten_ice').withChance(8),
        Item.of('2x minecraft:echo_shard').withChance(12),
        Item.of('goetyawaken:bakasmusic_disc').withChance(2),
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/aviary/aviary_barrels')//幻梦塔楼
    .addWeightedLoot([1,2],[
        Item.of('enigmaticlegacy:astral_dust').withChance(3),
        Item.of('2x enigmaticlegacy:astral_dust').withChance(3),
        Item.of('enigmaticlegacy:etherium_ore').withChance(3),
        Item.of('enigmaticdelicacy:etherium_ore').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/aviary/aviary_normal')
    .addWeightedLoot([1,2],[
        Item.of('enigmaticlegacy:astral_dust').withChance(1),
        Item.of('2x enigmaticlegacy:astral_dust').withChance(1),
        Item.of('3x enigmaticlegacy:astral_dust').withChance(1),
        Item.of('enigmaticlegacy:etherium_ore').withChance(1)
    ])
    .addWeightedLoot([0,1],[
        Item.of('goety:void_crown').withChance(1),
        Item.of('goety:void_robe').withChance(1),
        Item.of('goety:void_staff').withChance(1),
        Item.of('goety:blasting_focus').withChance(3),
        Item.of('goety:snaring_focus').withChance(3),
        Item.of('goety:watching_focus').withChance(3),
        Item.of('enigmaticlegacy:void_pearl').withChance(3),
        Item.of('enigmaticlegacy:eye_of_nebula').withChance(3)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/aviary/aviary_treasure')
    .addWeightedLoot([2,3],[
        Item.of('2x enigmaticlegacy:etherium_ore').withChance(1),
        Item.of('enigmaticdelicacy:etherium_ore').withChance(1),
        Item.of('enigmaticlegacy:void_pearl').withChance(1),
        Item.of('enigmaticlegacy:eye_of_nebula').withChance(1)
    ])
    .addWeightedLoot([1,2],[
        Item.of('goety:void_crown').withChance(1),
        Item.of('goety:void_robe').withChance(1),
        Item.of('goety:void_staff').withChance(1),
        Item.of('goety:blasting_focus').withChance(3),
        Item.of('goety:snaring_focus').withChance(3),
        Item.of('goety:watching_focus').withChance(3),
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/heavenly_challenger/heavenly_challenger_normal')//天际系列
    .addWeightedLoot([2],[
        Item.of('goety:wind_core').withChance(2),
        Item.of('2x goety:jade').withChance(2),
        Item.of('3x goety:jade').withChance(1),
        Item.of('goety:mistral_scroll').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/heavenly_challenger/heavenly_challenger_supply')
    .addWeightedLoot([2],[
        Item.of('goety:wind_core').withChance(5),
        Item.of('2x goety:jade').withChance(4),
        Item.of('3x goety:jade').withChance(3),
        Item.of('goety:mistral_scroll').withChance(1)
    ])
    .addWeightedLoot([1],[
        Item.of('goety:wind_robe').withChance(1),
        Item.of('goety:trembling_focus').withChance(3),
        Item.of('goety:razor_wind_focus').withChance(3),
        Item.of('goety:wind_blast_focus').withChance(3),
        Item.of('enigmaticlegacy:angel_blessing').withChance(10),
        Item.of('goety:wind_core').withChance(8),
        Item.of('2x goety:jade').withChance(12)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/heavenly_challenger/heavenly_challenger_theater')
    .addWeightedLoot([2],[
        Item.of('goety:wind_core').withChance(5),
        Item.of('2x goety:jade').withChance(4),
        Item.of('3x goety:jade').withChance(3),
        Item.of('goety:mistral_scroll').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/heavenly_challenger/heavenly_challenger_treasure')
    .addWeightedLoot([2],[
        Item.of('goety:wind_core').withChance(5),
        Item.of('2x goety:jade').withChance(4),
        Item.of('3x goety:jade').withChance(3),
        Item.of('goety:mistral_scroll').withChance(1)
    ])
    .addWeightedLoot([1,2],[
        Item.of('goety:wind_robe').withChance(1),
        Item.of('goety:trembling_focus').withChance(3),
        Item.of('goety:razor_wind_focus').withChance(3),
        Item.of('goety:wind_blast_focus').withChance(3),
        Item.of('enigmaticlegacy:angel_blessing').withChance(10),
        Item.of('goety:wind_core').withChance(8),
        Item.of('2x goety:jade').withChance(12)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/heavenly_conqueror/heavenly_conqueror_barrels')
    .addWeightedLoot([2],[
        Item.of('goety:wind_core').withChance(5),
        Item.of('2x goety:jade').withChance(4),
        Item.of('3x goety:jade').withChance(3),
        Item.of('goety:mistral_scroll').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/heavenly_conqueror/heavenly_conqueror_normal')
    .addWeightedLoot([2],[
        Item.of('goety:wind_core').withChance(5),
        Item.of('2x goety:jade').withChance(4),
        Item.of('3x goety:jade').withChance(3),
        Item.of('goety:mistral_scroll').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/heavenly_conqueror/heavenly_conqueror_treasure')
    .addWeightedLoot([2],[
        Item.of('goety:wind_core').withChance(5),
        Item.of('2x goety:jade').withChance(4),
        Item.of('3x goety:jade').withChance(3),
        Item.of('goety:mistral_scroll').withChance(1)
    ])
    .addWeightedLoot([1,2],[
        Item.of('goety:wind_robe').withChance(1),
        Item.of('goety:trembling_focus').withChance(3),
        Item.of('goety:razor_wind_focus').withChance(3),
        Item.of('goety:wind_blast_focus').withChance(3),
        Item.of('enigmaticlegacy:angel_blessing').withChance(10),
        Item.of('goety:wind_core').withChance(8),
        Item.of('2x goety:jade').withChance(12)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/heavenly_rider/heavenly_rider_barrels')
    .addWeightedLoot([2],[
        Item.of('goety:wind_core').withChance(5),
        Item.of('2x goety:jade').withChance(4),
        Item.of('3x goety:jade').withChance(3),
        Item.of('goety:mistral_scroll').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/heavenly_rider/heavenly_rider_normal')
    .addWeightedLoot([2],[
        Item.of('goety:wind_core').withChance(5),
        Item.of('2x goety:jade').withChance(4),
        Item.of('3x goety:jade').withChance(3),
        Item.of('goety:mistral_scroll').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/heavenly_rider/heavenly_rider_treasure')
    .addWeightedLoot([2],[
        Item.of('goety:wind_core').withChance(5),
        Item.of('2x goety:jade').withChance(4),
        Item.of('3x goety:jade').withChance(3),
        Item.of('goety:mistral_scroll').withChance(1)
    ])
    .addWeightedLoot([1,2],[
        Item.of('goety:wind_robe').withChance(1),
        Item.of('goety:trembling_focus').withChance(3),
        Item.of('goety:razor_wind_focus').withChance(3),
        Item.of('goety:wind_blast_focus').withChance(3),
        Item.of('enigmaticlegacy:angel_blessing').withChance(10),
        Item.of('goety:wind_core').withChance(8),
        Item.of('2x goety:jade').withChance(12)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/lighthouse/lighhouse_top')//灯塔
    .addLoot('goety:illuminate_focus')
    .addLoot('tarotcards:the_moon')
    event
    .addLootTableModifier('dungeons_arise:chests/bathhouse/bathhouse_barrels')//祸水澡堂
    .addWeightedLoot([3,5],[
        Item.of('3x goety:ectoplasm').withChance(4),
        Item.of('2x goety:grave_dust').withChance(4),
        Item.of('minecraft:ender_pearl').withChance(4),
        Item.of('minecraft:ender_eye').withChance(4),
        Item.of('tarotcards:temperance').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/bathhouse/bathhouse_normal')//祸水澡堂
    .addWeightedLoot([3,5],[
        Item.of('3x goety:ectoplasm').withChance(4),
        Item.of('2x goety:grave_dust').withChance(4),
        Item.of('minecraft:ender_pearl').withChance(4),
        Item.of('minecraft:ender_eye').withChance(4),
        Item.of('tarotcards:temperance').withChance(1)
    ])
    .addWeightedLoot([1,2],[
        Item.of('goety:cryptic_eye').withChance(1),
        Item.of('4x goety:crypt_stone').withChance(2),
        Item.of('minecraft:netherite_scrap').withChance(1),
        Item.of('2x minecraft:diamond').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/illager_corsair/illager_corsair_barrels')//灾厄海盗船
    .addWeightedLoot([2,3],[
        Item.of('2x minecraft:emerald').withChance(4),
        Item.of('5x minecraft:emerald').withChance(2),
        Item.of('2x goety:magic_emerald').withChance(2),
        Item.of('goety:tall_skull').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/illager_corsair/illager_corsair_supply')//灾厄海盗船
    .addWeightedLoot([3,4],[
        Item.of('2x minecraft:emerald').withChance(4),
        Item.of('5x minecraft:emerald').withChance(2),
        Item.of('2x goety:magic_emerald').withChance(2),
        Item.of('goety:tall_skull').withChance(1)
    ])
    .addWeightedLoot([1,2],[
        Item.of('goety:tall_skull').withChance(2),
        Item.of('easy_villagers:villager').withChance(1)
    ])
    .addWeightedLoot([
        Item.of('trident').withChance(2),
        Item.of('heart_of_the_sea').withChance(1),
        Item.of('3x copper_ingot').withChance(5)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/illager_corsair/illager_corsair_treasure')//灾厄海盗船
    .addWeightedLoot([3],[
        Item.of('2x minecraft:emerald').withChance(4),
        Item.of('5x minecraft:emerald').withChance(2),
        Item.of('2x goety:magic_emerald').withChance(2),
        Item.of('goety:tall_skull').withChance(1)
    ])
    .addWeightedLoot([1,2],[
        Item.of('enigmaticlegacy:ocean_stone').withChance(9),
        Item.of('goety:abyss_crown').withChance(1),
        Item.of('goety:abyss_robe').withChance(1),
        Item.of('trident').withChance(2),
        Item.of('goety:tidal_focus').withChance(3),
        Item.of('goety:bouncy_bubble_focus').withChance(3),
        Item.of('goety:biomine_focus').withChance(3),
        Item.of('minecraft:pufferfish').withChance(6),
        Item.of('4x minecraft:prismarine').withChance(6)
    ])
    .addWeightedLoot([
        Item.of('trident').withChance(2),
        Item.of('heart_of_the_sea').withChance(1),
        Item.of('3x copper_ingot').withChance(5)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/illager_galley/illager_galley_barrels')//灾厄帆桨船
    .addWeightedLoot([2,3],[
        Item.of('2x minecraft:emerald').withChance(4),
        Item.of('5x minecraft:emerald').withChance(2),
        Item.of('2x goety:magic_emerald').withChance(2),
        Item.of('goety:tall_skull').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/illager_galley/illager_galley_supply')//灾厄帆桨船
    .addWeightedLoot([3,4],[
        Item.of('2x minecraft:emerald').withChance(4),
        Item.of('5x minecraft:emerald').withChance(2),
        Item.of('2x goety:magic_emerald').withChance(2),
        Item.of('goety:tall_skull').withChance(1)
    ])
    .addWeightedLoot([1,2],[
        Item.of('goety:tall_skull').withChance(2),
        Item.of('easy_villagers:villager').withChance(1)
    ])
    .addWeightedLoot([
        Item.of('trident').withChance(2),
        Item.of('heart_of_the_sea').withChance(1),
        Item.of('3x copper_ingot').withChance(5)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/illager_galley/illager_galley_treasure')//灾厄帆桨船
    .addWeightedLoot([3],[
        Item.of('2x minecraft:emerald').withChance(4),
        Item.of('5x minecraft:emerald').withChance(2),
        Item.of('2x goety:magic_emerald').withChance(2),
        Item.of('goety:tall_skull').withChance(1)
    ])
    .addWeightedLoot([1,2],[
        Item.of('enigmaticlegacy:ocean_stone').withChance(9),
        Item.of('goety:abyss_crown').withChance(1),
        Item.of('goety:abyss_robe').withChance(1),
        Item.of('trident').withChance(2),
        Item.of('goety:tidal_focus').withChance(3),
        Item.of('goety:bouncy_bubble_focus').withChance(3),
        Item.of('goety:biomine_focus').withChance(3),
        Item.of('minecraft:pufferfish').withChance(6),
        Item.of('4x minecraft:prismarine').withChance(6)
    ])
    .addWeightedLoot([
        Item.of('trident').withChance(2),
        Item.of('heart_of_the_sea').withChance(1),
        Item.of('3x copper_ingot').withChance(5)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/undead_pirate_ship/undead_pirate_ship_barrels')//幽灵海盗船
    .addWeightedLoot([2,3],[
        Item.of('2x goety:ectoplasm').withChance(3),
        Item.of('3x minecraft:bone').withChance(2),
        Item.of('2x minecraft:rotten_flesh').withChance(2),
        Item.of('goety:hunger_core').withChance(1),
        Item.of('goety:animation_core').withChance(1),
        Item.of('4x minecraft:sculk').withChance(2)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/undead_pirate_ship/undead_pirate_ship_supply')//幽灵海盗船
    .addWeightedLoot([3,5],[
        Item.of('2x goety:ectoplasm').withChance(3),
        Item.of('3x minecraft:bone').withChance(2),
        Item.of('2x minecraft:rotten_flesh').withChance(2),
        Item.of('goety:hunger_core').withChance(1),
        Item.of('goety:animation_core').withChance(1),
        Item.of('4x minecraft:sculk').withChance(2)
    ])
    .addWeightedLoot([
        Item.of('trident').withChance(2),
        Item.of('heart_of_the_sea').withChance(1),
        Item.of('3x copper_ingot').withChance(5)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/undead_pirate_ship/undead_pirate_ship_enchants')//幽灵海盗船
    .addWeightedLoot([1,2],[
        Item.of('goety:hunger_core').withChance(1),
        Item.of('goety:animation_core').withChance(1),
        Item.of('4x minecraft:sculk').withChance(2)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/undead_pirate_ship/undead_pirate_ship_treasure')//幽灵海盗船
    .addWeightedLoot([3],[
        Item.of('2x goety:ectoplasm').withChance(3),
        Item.of('3x minecraft:bone').withChance(2),
        Item.of('2x minecraft:rotten_flesh').withChance(2),
        Item.of('goety:hunger_core').withChance(1),
        Item.of('goety:animation_core').withChance(1),
        Item.of('4x minecraft:sculk').withChance(2)
    ])
    .addWeightedLoot([3],[
        Item.of('enigmaticlegacy:ocean_stone').withChance(9),
        Item.of('goety:abyss_crown').withChance(1),
        Item.of('goety:abyss_robe').withChance(1),
        Item.of('trident').withChance(2),
        Item.of('goety:tidal_focus').withChance(3),
        Item.of('goety:bouncy_bubble_focus').withChance(3),
        Item.of('goety:biomine_focus').withChance(3),
        Item.of('minecraft:pufferfish').withChance(6),
        Item.of('4x minecraft:prismarine').withChance(6),
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goety:rotting_focus').withChance(4),
        Item.of('goety:osseous_focus').withChance(3),
        Item.of('2x goety:ectoplasm').withChance(6),
        Item.of('goety:occult_fabric').withChance(6),
        Item.of('goety:animation_core').withChance(6),
        Item.of('8x minecraft:sculk').withChance(16),
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(6)
        
    ])
    .addWeightedLoot([
        Item.of('trident').withChance(2),
        Item.of('heart_of_the_sea').withChance(1),
        Item.of('3x copper_ingot').withChance(5)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/typhon/typhon_treasure')//提丰遗骸
    .addWeightedLoot([1,2],[
        Item.of('enigmaticlegacy:ocean_stone').withChance(10),
        Item.of('goety:abyss_crown').withChance(1),
        Item.of('goety:abyss_robe').withChance(1),
        Item.of('trident').withChance(2),
        Item.of('goety:tidal_focus').withChance(3),
        Item.of('goety:bouncy_bubble_focus').withChance(3),
        Item.of('goety:biomine_focus').withChance(3)
    ])
    .addWeightedLoot([
        Item.of('trident').withChance(2),
        Item.of('heart_of_the_sea').withChance(1),
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/bandit_village/bandit_village_barrels')//疆盗村落
    .addWeightedLoot([
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(1)
    ])
    .addWeightedLoot([1,2],[
        Item.of('8x cataclysm:ancient_metal_nugget').withChance(1),
        Item.of('2x cataclysm:ancient_metal_ingot').withChance(1),
        Item.of('3x cataclysm:ancient_metal_ingot').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/bandit_village/bandit_village_normal')//疆盗村落
    .addWeightedLoot([
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(1)
    ])
    .addWeightedLoot([1,2],[
        Item.of('8x cataclysm:ancient_metal_nugget').withChance(1),
        Item.of('2x cataclysm:ancient_metal_ingot').withChance(1),
        Item.of('3x cataclysm:ancient_metal_ingot').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/bandit_village/bandit_village_supply')//疆盗村落
    .addWeightedLoot([
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(1)
    ])
    .addWeightedLoot([2],[
        Item.of('8x cataclysm:ancient_metal_nugget').withChance(1),
        Item.of('2x cataclysm:ancient_metal_ingot').withChance(1),
        Item.of('3x cataclysm:ancient_metal_ingot').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/bandit_village/bandit_village_treasure')//疆盗村落
    .addWeightedLoot([
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(2)
    ])
    .addWeightedLoot([2,3],[
        Item.of('8x cataclysm:ancient_metal_nugget').withChance(1),
        Item.of('2x cataclysm:ancient_metal_ingot').withChance(1),
        Item.of('3x cataclysm:ancient_metal_ingot').withChance(1)
    ])
    .addWeightedLoot([
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goety:rotting_focus').withChance(3),
        Item.of('goety:osseous_focus').withChance(3),
        Item.of('2x goety:occult_fabric').withChance(4),
        Item.of('2x goety:ectoplasm').withChance(4),
        Item.of('goety:animation_core').withChance(2),
        Item.of('8x minecraft:sculk').withChance(10),
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/bandit_towers/bandit_towers_barrels')//疆盗塔楼
    .addWeightedLoot([
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(1)
    ])
    .addWeightedLoot([
        Item.of('goety:amethyst_necklace').withChance(1),
        Item.of('goety:geo_staff').withChance(1),
        Item.of('goety:earth_punch_focus').withChance(3),
        Item.of('goety:barricade_focus').withChance(3),
        Item.of('goety:pulverize_focus').withChance(3),
        Item.of('4x minecraft:amethyst_block').withChance(8),
        Item.of('minecraft:iron_block').withChance(3)
    ])
    .addWeightedLoot([1,2],[
        Item.of('8x cataclysm:ancient_metal_nugget').withChance(1),
        Item.of('2x cataclysm:ancient_metal_ingot').withChance(1),
        Item.of('3x cataclysm:ancient_metal_ingot').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/bandit_towers/bandit_towers_gardens')//疆盗塔楼
    .addWeightedLoot([
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(1)
    ])
    .addWeightedLoot([
        Item.of('goety:amethyst_necklace').withChance(1),
        Item.of('goety:geo_staff').withChance(1),
        Item.of('goety:earth_punch_focus').withChance(3),
        Item.of('goety:barricade_focus').withChance(3),
        Item.of('goety:pulverize_focus').withChance(3),
        Item.of('4x minecraft:amethyst_block').withChance(8),
        Item.of('minecraft:iron_block').withChance(3)
    ])
    .addWeightedLoot([1,2],[
        Item.of('8x cataclysm:ancient_metal_nugget').withChance(1),
        Item.of('2x cataclysm:ancient_metal_ingot').withChance(1),
        Item.of('3x cataclysm:ancient_metal_ingot').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/bandit_towers/bandit_towers_normal')//疆盗塔楼
    .addWeightedLoot([
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(1)
    ])
    .addWeightedLoot([
        Item.of('goety:amethyst_necklace').withChance(1),
        Item.of('goety:geo_staff').withChance(1),
        Item.of('goety:earth_punch_focus').withChance(3),
        Item.of('goety:barricade_focus').withChance(3),
        Item.of('goety:pulverize_focus').withChance(3)
    ])
    .addWeightedLoot([1,2],[
        Item.of('8x cataclysm:ancient_metal_nugget').withChance(1),
        Item.of('2x cataclysm:ancient_metal_ingot').withChance(1),
        Item.of('3x cataclysm:ancient_metal_ingot').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/bandit_towers/bandit_towers_supply')//疆盗塔楼
    .addWeightedLoot([
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(21)
    ])
    .addWeightedLoot([
        Item.of('goety:amethyst_necklace').withChance(1),
        Item.of('goety:geo_staff').withChance(1),
        Item.of('goety:earth_punch_focus').withChance(3),
        Item.of('goety:barricade_focus').withChance(3),
        Item.of('goety:pulverize_focus').withChance(3),
        Item.of('4x minecraft:amethyst_block').withChance(8),
        Item.of('minecraft:iron_block').withChance(3)
    ])
    .addWeightedLoot([2],[
        Item.of('8x cataclysm:ancient_metal_nugget').withChance(1),
        Item.of('2x cataclysm:ancient_metal_ingot').withChance(1),
        Item.of('3x cataclysm:ancient_metal_ingot').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/bandit_towers/bandit_towers_rooms')//疆盗塔楼
    .addWeightedLoot([
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(1)
    ])
    .addWeightedLoot([
        Item.of('goety:amethyst_necklace').withChance(1),
        Item.of('goety:geo_staff').withChance(1),
        Item.of('goety:earth_punch_focus').withChance(3),
        Item.of('goety:barricade_focus').withChance(3),
        Item.of('goety:pulverize_focus').withChance(3),
        Item.of('4x minecraft:amethyst_block').withChance(8),
        Item.of('minecraft:iron_block').withChance(3)
    ])
    .addWeightedLoot([1,2],[
        Item.of('8x cataclysm:ancient_metal_nugget').withChance(1),
        Item.of('2x cataclysm:ancient_metal_ingot').withChance(1),
        Item.of('3x cataclysm:ancient_metal_ingot').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/bandit_towers/bandit_towers_treasure')//疆盗塔楼
    .addWeightedLoot([1,2],[
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(2)
    ])
    .addWeightedLoot([
        Item.of('goety:amethyst_necklace').withChance(1),
        Item.of('goety:geo_staff').withChance(1),
        Item.of('goety:earth_punch_focus').withChance(3),
        Item.of('goety:barricade_focus').withChance(3),
        Item.of('goety:pulverize_focus').withChance(3),
        Item.of('4x minecraft:amethyst_block').withChance(8),
        Item.of('minecraft:iron_block').withChance(3)
    ])
    .addWeightedLoot([1,2],[
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goety:rotting_focus').withChance(4),
        Item.of('goety:osseous_focus').withChance(3),
        Item.of('2x goety:ectoplasm').withChance(6),
        Item.of('goety:occult_fabric').withChance(6),
        Item.of('goety:animation_core').withChance(6),
        Item.of('8x minecraft:sculk').withChance(16),
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(6)
    ])
    .addWeightedLoot([2],[
        Item.of('8x cataclysm:ancient_metal_nugget').withChance(1),
        Item.of('2x cataclysm:ancient_metal_ingot').withChance(1),
        Item.of('3x cataclysm:ancient_metal_ingot').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/fishing_hut/fishing_hut_barrels')//渔屋
    .addWeightedLoot([1,2],[
        Item.of('enigmaticlegacy:ocean_stone').withChance(9),
        Item.of('goety:abyss_crown').withChance(1),
        Item.of('goety:abyss_robe').withChance(1),
        Item.of('trident').withChance(2),
        Item.of('goety:tidal_focus').withChance(3),
        Item.of('goety:bouncy_bubble_focus').withChance(3),
        Item.of('goety:biomine_focus').withChance(3),
        Item.of('minecraft:pufferfish').withChance(6),
        Item.of('4x minecraft:prismarine').withChance(6)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/illager_campsite/illager_campsite_map')//灾厄营地
    .addWeightedLoot([
        Item.of('goetyawaken:ominous_eye').withChance(1),
        Item.of('goetyawaken:prison_eye').withChance(1)
    ])
    .addWeightedLoot([1,2],[
        Item.of('4x goety:magic_emerald').withChance(1),
        Item.of('goety:soul_emerald').withChance(1),
        Item.of('3x enigmaticaddons:earth_heart_fragment').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/illager_campsite/illager_campsite_supply')//灾厄营地
    .addWeightedLoot([1,2],[
        Item.of('2x goety:pale_steel_ingot').withChance(5),
        Item.of('2x experience_bottle').withChance(3),
        Item.of('trials:ominous_bottle').withChance(3),
        Item.of('2x ender_eye').withChance(3),
        Item.of('goety:tall_skull').withChance(1),
    ])
    .addWeightedLoot([1,2],[
        Item.of('4x goety:magic_emerald').withChance(1),
        Item.of('goety:soul_emerald').withChance(1),
        Item.of('3x enigmaticaddons:earth_heart_fragment').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/illager_campsite/illager_campsite_tent')//灾厄营地
    .addWeightedLoot([2,3],[
        Item.of('2x goety:pale_steel_ingot').withChance(5),
        Item.of('goety:magic_emerald').withChance(5),
        Item.of('trials:ominous_bottle').withChance(3),
        Item.of('2x experience_bottle').withChance(3),
        Item.of('2x ender_eye').withChance(3),
        Item.of('easy_villagers:villager').withChance(3)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/illager_fort/illager_fort_barrels')//灾厄城堡
    .addWeightedLoot([2],[
        Item.of('2x goety:pale_steel_ingot').withChance(5),
        Item.of('trials:ominous_bottle').withChance(3),
        Item.of('2x experience_bottle').withChance(3),
        Item.of('2x ender_eye').withChance(3),
    ])
    .addWeightedLoot([1,2],[
        Item.of('4x goety:magic_emerald').withChance(1),
        Item.of('goety:soul_emerald').withChance(1),
        Item.of('3x enigmaticaddons:earth_heart_fragment').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/illager_fort/illager_fort_normal')//灾厄城堡
    .addWeightedLoot([2],[
        Item.of('2x goety:pale_steel_ingot').withChance(5),
        Item.of('trials:ominous_bottle').withChance(3),
        Item.of('2x experience_bottle').withChance(3),
        Item.of('2x ender_eye').withChance(3),
    ])
    .addWeightedLoot([1,2],[
        Item.of('4x goety:magic_emerald').withChance(1),
        Item.of('goety:soul_emerald').withChance(1),
        Item.of('3x enigmaticaddons:earth_heart_fragment').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/illager_fort/illager_fort_treasure')//灾厄城堡
    .addWeightedLoot([2,3],[
        Item.of('2x goety:pale_steel_ingot').withChance(5),
        Item.of('trials:ominous_bottle').withChance(3),
        Item.of('2x experience_bottle').withChance(3),
        Item.of('2x ender_eye').withChance(3),
        Item.of('easy_villagers:villager').withChance(3)
    ])
    .addWeightedLoot([2,3],[
        Item.of('4x goety:magic_emerald').withChance(1),
        Item.of('goety:soul_emerald').withChance(1),
        Item.of('3x enigmaticaddons:earth_heart_fragment').withChance(1)
    ])
    .addLoot([
        LootEntry.of('goetyawaken:royal_scroll').when(c => c.randomChance(0.2))
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/illager_windmill/illager_windmill_barrels')//灾厄风车
    .addWeightedLoot([2],[
        Item.of('goetyawaken:ominous_eye').withChance(5),
        Item.of('trials:ominous_bottle').withChance(3),
        Item.of('2x goety:pale_steel_ingot').withChance(5),
        Item.of('2x experience_bottle').withChance(3),
        Item.of('2x ender_eye').withChance(3),
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/illager_windmill/illager_windmill_treasure')//灾厄风车
    .addWeightedLoot([2,3],[
        Item.of('2x goety:pale_steel_ingot').withChance(5),
        Item.of('trials:ominous_bottle').withChance(3),
        Item.of('2x experience_bottle').withChance(3),
        Item.of('2x ender_eye').withChance(3),
        Item.of('easy_villagers:villager').withChance(3)
    ])
    .addWeightedLoot([2],[
        Item.of('4x goety:magic_emerald').withChance(1),
        Item.of('goety:soul_emerald').withChance(1),
        Item.of('3x enigmaticaddons:earth_heart_fragment').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/abandoned_temple/abandoned_temple_entrance')//废弃寺庙
    .addWeightedLoot([1,2],[
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/abandoned_temple/abandoned_temple_map')//废弃寺庙
    .addWeightedLoot([1,2],[
        Item.of('goetyawaken:ominous_eye').withChance(5),
        Item.of('2x experience_bottle').withChance(3),
        Item.of('2x ender_eye').withChance(3),
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/abandoned_temple/abandoned_temple_top')//废弃寺庙
    .addWeightedLoot([1,2],[
        Item.of('goetyawaken:ominous_eye').withChance(5),
        Item.of('2x experience_bottle').withChance(3),
        Item.of('2x ender_eye').withChance(3),
    ])
    .addWeightedLoot([2,3],[
        Item.of('goety:illusion_robe').withChance(1),
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goety:rotting_focus').withChance(4),
        Item.of('goety:osseous_focus').withChance(3),
        Item.of('2x goety:ectoplasm').withChance(6),
        Item.of('goety:occult_fabric').withChance(6),
        Item.of('goety:animation_core').withChance(6),
        Item.of('8x minecraft:sculk').withChance(16),
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(6)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/ceryneian_hind/ceryneian_hind_treasure')//刻律涅牝鹿
    .addWeightedLoot([2],[
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goety:rotting_focus').withChance(4),
        Item.of('goety:osseous_focus').withChance(3),
        Item.of('2x goety:ectoplasm').withChance(6),
        Item.of('goety:occult_fabric').withChance(6),
        Item.of('goety:animation_core').withChance(6),
        Item.of('8x minecraft:sculk').withChance(16),
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(6)
    ])
    .addWeightedLoot([1,2],[
        Item.of('goety:amethyst_necklace').withChance(1),
        Item.of('goety:geo_staff').withChance(1),
        Item.of('goety:earth_punch_focus').withChance(3),
        Item.of('goety:barricade_focus').withChance(3),
        Item.of('goety:pulverize_focus').withChance(3),
        Item.of('4x minecraft:amethyst_block').withChance(8),
        Item.of('minecraft:iron_block').withChance(3)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/infested_temple/infested_temple_room_bookshelf')//蚀败寺庙
    .addWeightedLoot([1,2],[
        Item.of('enigmaticaddons:artificial_flower').withChance(1),
        Item.of('enigmaticaddons:void_tome').withChance(1),
        Item.of('enigmaticaddons:antique_bag').withChance(1),
        Item.of('enigmaticlegacy:withered_tome').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/infested_temple/infested_temple_room_forge')//蚀败寺庙
    .addWeightedLoot([2],[
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(2)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/infested_temple/infested_temple_room_garden')//蚀败寺庙
    .addWeightedLoot([1,2],[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8)
    ])
    .addWeightedLoot([
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/infested_temple/infested_temple_room_normal')//蚀败寺庙
    .addWeightedLoot([1],[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8)
    ])
    .addWeightedLoot([
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8),
        Item.of('enigmaticaddons:revival_leaf').withChance(12)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/infested_temple/infested_temple_room_table')//蚀败寺庙
    .addWeightedLoot([1],[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('goety:floral_scroll').withChance(4),
        Item.of('4x goety:spider_egg').withChance(4)
    ])
    .addWeightedLoot([
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8),
        Item.of('enigmaticaddons:revival_leaf').withChance(12)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/infested_temple/infested_temple_room_supply')//蚀败寺庙
    .addWeightedLoot([1],[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('goety:floral_scroll').withChance(4),
        Item.of('4x goety:spider_egg').withChance(4)
    ])
    .addWeightedLoot([
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8),
        Item.of('enigmaticaddons:revival_leaf').withChance(12)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/infested_temple/infested_temple_top_treasure')//蚀败寺庙
    .addWeightedLoot([
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('goety:floral_scroll').withChance(4),
        Item.of('4x goety:spider_egg').withChance(4)
    ])
    .addWeightedLoot([1,2],[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8),
        Item.of('enigmaticaddons:revival_leaf').withChance(12)
    ])
    .addWeightedLoot([2],[
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goety:rotting_focus').withChance(4),
        Item.of('goety:osseous_focus').withChance(3),
        Item.of('2x goety:ectoplasm').withChance(6),
        Item.of('goety:occult_fabric').withChance(6),
        Item.of('goety:animation_core').withChance(6),
        Item.of('8x minecraft:sculk').withChance(16),
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(6)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/jungle_tree_house/jungle_tree_house_barrels')//丛林树屋
    .addWeightedLoot([1,2],[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/jungle_tree_house/jungle_tree_house_normal')//丛林树屋
    .addWeightedLoot([1,2],[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/jungle_tree_house/jungle_tree_house_treasure')//丛林树屋
    .addWeightedLoot([1],[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8)
    ])
    .addWeightedLoot([1,2],[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8),
        Item.of('enigmaticaddons:revival_leaf').withChance(12)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/keep_karya/keep_karya_garden_normal')//创世神殿
    .addWeightedLoot([2],[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/keep_karya/keep_karya_garden_treasure')//创世神殿
    .addWeightedLoot([1,2],[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8)
    ])
    .addWeightedLoot([1,2],[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8),
        Item.of('enigmaticaddons:revival_leaf').withChance(12)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/keep_karya/keep_karya_library_normal')//创世神殿
    .addWeightedLoot([
        Item.of('enigmaticaddons:artificial_flower').withChance(1),
        Item.of('enigmaticaddons:void_tome').withChance(1),
        Item.of('enigmaticaddons:antique_bag').withChance(1),
        Item.of('enigmaticlegacy:withered_tome').withChance(3),
    ])
    .addWeightedLoot([1,2],[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/keep_karya/keep_karya_library_treasure')//创世神殿
    .addWeightedLoot([
        Item.of('enigmaticaddons:artificial_flower').withChance(1),
        Item.of('enigmaticaddons:void_tome').withChance(1),
        Item.of('enigmaticaddons:antique_bag').withChance(1),
        Item.of('goetyawaken:royal_scroll').withChance(1),
        Item.of('enigmaticlegacy:withered_tome').withChance(2),
    ])
    .addWeightedLoot([2,3],[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/keep_karya/keep_karya_normal')//创世神殿
    .addWeightedLoot([2],[
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goety:rotting_focus').withChance(4),
        Item.of('goety:osseous_focus').withChance(3),
        Item.of('2x goety:ectoplasm').withChance(6),
        Item.of('goety:occult_fabric').withChance(6),
        Item.of('goety:animation_core').withChance(6),
        Item.of('8x minecraft:sculk').withChance(16),
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(6)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/keep_karya/keep_karya_treasure')//创世神殿
    .addWeightedLoot([2],[
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goety:rotting_focus').withChance(4),
        Item.of('goety:osseous_focus').withChance(3),
        Item.of('2x goety:ectoplasm').withChance(6),
        Item.of('goety:occult_fabric').withChance(6),
        Item.of('goety:animation_core').withChance(6),
        Item.of('8x minecraft:sculk').withChance(16),
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(6)
    ])
    .addWeightedLoot([1,2],[
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(2)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/foundry/foundry_chains')//铸造厂
    .addWeightedLoot([
        Item.of('goety:magic_emerald').withChance(3),
        Item.of('soul_lantern').withChance(2),
        Item.of('goety:spent_totem').withChance(1),
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/foundry/foundry_lava_pit')//铸造厂
    .addWeightedLoot([1,2],[
        Item.of('enigmaticlegacy:blazing_core').withChance(5),
        Item.of('enigmaticaddons:illusion_lantern').withChance(5),
        Item.of('goety:nether_robe').withChance(1),
        Item.of('2x gold_ingot').withChance(20),
        Item.of('goety:fireball_focus').withChance(4),
        Item.of('goety:magma_bomb_focus').withChance(4),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(4),
        Item.of('goety:bombardment_focus').withChance(4),
        Item.of('minecraft:ancient_debris').withChance(4),
        Item.of('2x minecraft:netherite_scrap').withChance(8),
        Item.of('minecraft:gold_block').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/foundry/foundry_normal')//铸造厂
    .addWeightedLoot([1,2],[
        Item.of('enigmaticlegacy:blazing_core').withChance(5),
        Item.of('enigmaticaddons:illusion_lantern').withChance(5),
        Item.of('goety:nether_robe').withChance(1),
        Item.of('2x gold_ingot').withChance(20),
        Item.of('goety:fireball_focus').withChance(4),
        Item.of('goety:magma_bomb_focus').withChance(4),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(4),
        Item.of('goety:bombardment_focus').withChance(4),
        Item.of('minecraft:ancient_debris').withChance(4),
        Item.of('2x minecraft:netherite_scrap').withChance(8),
        Item.of('minecraft:gold_block').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/foundry/foundry_passage_exterior')//铸造厂
    .addWeightedLoot([1,2],[
        Item.of('enigmaticlegacy:blazing_core').withChance(5),
        Item.of('enigmaticaddons:illusion_lantern').withChance(5),
        Item.of('goety:nether_robe').withChance(1),
        Item.of('2x gold_ingot').withChance(20),
        Item.of('goety:fireball_focus').withChance(4),
        Item.of('goety:magma_bomb_focus').withChance(4),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(4),
        Item.of('goety:bombardment_focus').withChance(4),
        Item.of('minecraft:ancient_debris').withChance(4),
        Item.of('2x minecraft:netherite_scrap').withChance(8),
        Item.of('minecraft:gold_block').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/foundry/foundry_passage_normal')//铸造厂
    .addWeightedLoot([1,2],[
        Item.of('enigmaticlegacy:blazing_core').withChance(5),
        Item.of('enigmaticaddons:illusion_lantern').withChance(5),
        Item.of('goety:nether_robe').withChance(1),
        Item.of('2x gold_ingot').withChance(20),
        Item.of('goety:fireball_focus').withChance(4),
        Item.of('goety:magma_bomb_focus').withChance(4),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(4),
        Item.of('goety:bombardment_focus').withChance(4),
        Item.of('minecraft:ancient_debris').withChance(4),
        Item.of('2x minecraft:netherite_scrap').withChance(8),
        Item.of('minecraft:gold_block').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/foundry/foundry_treasure')//铸造厂
    .addWeightedLoot([1,2],[
        Item.of('enigmaticlegacy:blazing_core').withChance(5),
        Item.of('enigmaticaddons:illusion_lantern').withChance(5),
        Item.of('goety:nether_robe').withChance(1),
        Item.of('2x gold_ingot').withChance(20),
        Item.of('goety:fireball_focus').withChance(4),
        Item.of('goety:magma_bomb_focus').withChance(4),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(4),
        Item.of('goety:bombardment_focus').withChance(4),
        Item.of('minecraft:ancient_debris').withChance(4),
        Item.of('2x minecraft:netherite_scrap').withChance(8),
        Item.of('minecraft:gold_block').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/mechanical_nest/mechanical_nest_equipment')//机械迷城
    .addWeightedLoot([2,3],[
        Item.of('2x goety:empty_focus').withChance(1),
        Item.of('2x goety:cursed_ingot').withChance(1),
        Item.of('2x goety:dark_fabric').withChance(1),
        Item.of('2x goety:magic_fabric').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/mechanical_nest/mechanical_nest_normal')//机械迷城
    .addWeightedLoot([1,2],[
        Item.of('goety:storm_robe').withChance(1),
        Item.of('goety:charge_focus').withChance(3),
        Item.of('goety:discharge_focus').withChance(3),
        Item.of('goety:bolting_focus').withChance(3),
        Item.of('enigmaticaddons:lost_engine').withChance(10),
        Item.of('lightning_rod').withChance(8),
        Item.of('copper_block').withChance(8),
        Item.of('minecraft:diamond').withChance(6)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/mechanical_nest/mechanical_nest_supply')//机械迷城
    .addWeightedLoot([1,2],[
        Item.of('goety:storm_robe').withChance(1),
        Item.of('goety:charge_focus').withChance(3),
        Item.of('goety:discharge_focus').withChance(3),
        Item.of('goety:bolting_focus').withChance(3),
        Item.of('enigmaticaddons:lost_engine').withChance(12),
        Item.of('lightning_rod').withChance(8),
        Item.of('copper_block').withChance(8),
        Item.of('minecraft:diamond').withChance(6)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/mechanical_nest/mechanical_nest_treasure')//机械迷城
    .addWeightedLoot([1,2],[
        Item.of('goety:storm_robe').withChance(1),
        Item.of('goety:charge_focus').withChance(3),
        Item.of('goety:discharge_focus').withChance(3),
        Item.of('goety:bolting_focus').withChance(3),
        Item.of('enigmaticaddons:lost_engine').withChance(12),
        Item.of('lightning_rod').withChance(8),
        Item.of('copper_block').withChance(8),
        Item.of('minecraft:diamond').withChance(6)
    ])
    .addWeightedLoot([
        Item.of('goety:warred_scroll').withChance(1),
        Item.of('goety:redstone_golem_spawn_egg').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/mining_system/mining_system_barrels')//矿井系统
    .addWeightedLoot([2],[
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(1)
    ])
    .addWeightedLoot([
        Item.of('goety:amethyst_necklace').withChance(1),
        Item.of('goety:geo_staff').withChance(1),
        Item.of('goety:earth_punch_focus').withChance(3),
        Item.of('goety:barricade_focus').withChance(3),
        Item.of('goety:pulverize_focus').withChance(3),
        Item.of('4x minecraft:amethyst_block').withChance(8),
        Item.of('minecraft:iron_block').withChance(3)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/mining_system/mining_system_treasure')//矿井系统
    .addWeightedLoot([2,3],[
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(2)
    ])
    .addWeightedLoot([
        Item.of('goety:amethyst_necklace').withChance(1),
        Item.of('goety:geo_staff').withChance(1),
        Item.of('goety:earth_punch_focus').withChance(3),
        Item.of('goety:barricade_focus').withChance(3),
        Item.of('goety:pulverize_focus').withChance(3),
        Item.of('4x minecraft:amethyst_block').withChance(8),
        Item.of('minecraft:iron_block').withChance(3)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/monastery/monastery_barrels')//修道院
    .addWeightedLoot([2],[
        Item.of('goety:wind_core').withChance(5),
        Item.of('2x goety:jade').withChance(4),
        Item.of('3x goety:jade').withChance(3),
        Item.of('goety:mistral_scroll').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/monastery/monastery_bridgs')//修道院
    .addWeightedLoot([
        Item.of('goety:wind_core').withChance(5),
        Item.of('2x goety:jade').withChance(4),
        Item.of('3x goety:jade').withChance(3),
        Item.of('goety:mistral_scroll').withChance(1)
    ])
    .addWeightedLoot([
        Item.of('goety:wind_crown').withChance(1),
        Item.of('goety:trembling_focus').withChance(2),
        Item.of('goety:razor_wind_focus').withChance(2),
        Item.of('goety:wind_blast_focus').withChance(2),
        Item.of('enigmaticlegacy:angel_blessing').withChance(10),
        Item.of('goety:jade').withChance(15)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/monastery/monastery_map')//修道院
    .addWeightedLoot([2],[
        Item.of('goety:wind_core').withChance(5),
        Item.of('2x goety:jade').withChance(4),
        Item.of('3x goety:jade').withChance(3),
        Item.of('goety:mistral_scroll').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/mushroom_house/mushroom_house_barrels')//蘑菇小屋
    .addWeightedLoot([2],[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/mushroom_house/mushroom_house_normal')//蘑菇小屋
    .addWeightedLoot([2],[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/mushroom_house/mushroom_house_treasure')//蘑菇小屋
    .addWeightedLoot([2,3],[
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8),
        Item.of('goety:floral_scroll').withChance(8),
        Item.of('enigmaticaddons:revival_leaf').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/mushroom_mine/mushroom_mine_barrels')//蘑菇矿井
    .addWeightedLoot([1,2],[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8)
    ])
    .addWeightedLoot([
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/mushroom_mine/mushroom_mine_ores')//蘑菇矿井
    .addWeightedLoot([
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(1)
    ])
    .addWeightedLoot([
        Item.of('goety:amethyst_necklace').withChance(1),
        Item.of('goety:geo_staff').withChance(1),
        Item.of('goety:earth_punch_focus').withChance(3),
        Item.of('goety:barricade_focus').withChance(3),
        Item.of('goety:pulverize_focus').withChance(3),
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/mushroom_mine/mushroom_mine_tools')//蘑菇矿井
    .addWeightedLoot([2,3],[
        Item.of('2x goety:empty_focus').withChance(1),
        Item.of('2x goety:cursed_ingot').withChance(1),
        Item.of('2x goety:dark_fabric').withChance(1),
        Item.of('2x goety:magic_fabric').withChance(1)
    ])
    .addWeightedLoot([
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/mushroom_mine/mushroom_mine_treasure')//蘑菇矿井
    .addWeightedLoot([1,2],[
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(4),
        Item.of('8x goety:overgrown_roots').withChance(4),
        Item.of('2x goety:poison_quill_seed').withChance(4),
    ])
    .addWeightedLoot([
        Item.of('goety:amethyst_necklace').withChance(1),
        Item.of('goety:geo_staff').withChance(1),
        Item.of('goety:earth_punch_focus').withChance(3),
        Item.of('goety:barricade_focus').withChance(3),
        Item.of('goety:pulverize_focus').withChance(3),
        Item.of('4x minecraft:amethyst_block').withChance(8),
        Item.of('minecraft:iron_block').withChance(3)
    ])
    .addWeightedLoot([
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/mushroom_village/mushroom_village_barrels')//蘑菇村庄
    .addWeightedLoot([
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(1)
    ])
    .addWeightedLoot([
        Item.of('goety:amethyst_necklace').withChance(1),
        Item.of('goety:geo_staff').withChance(1),
        Item.of('goety:earth_punch_focus').withChance(3),
        Item.of('goety:barricade_focus').withChance(3),
        Item.of('goety:pulverize_focus').withChance(3),
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/mushroom_village/mushroom_village_treasure')//蘑菇村庄
    .addWeightedLoot([
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(1)
    ])
    .addWeightedLoot([
        Item.of('goety:amethyst_necklace').withChance(1),
        Item.of('goety:geo_staff').withChance(1),
        Item.of('goety:earth_punch_focus').withChance(3),
        Item.of('goety:barricade_focus').withChance(3),
        Item.of('goety:pulverize_focus').withChance(3),
        Item.of('4x minecraft:amethyst_block').withChance(8),
        Item.of('minecraft:iron_block').withChance(3)
    ])
    .addWeightedLoot([
        Item.of('goety:fireball_focus').withChance(3),
        Item.of('goety:ghastly_focus').withChance(3),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(3),
        Item.of('goety:bombardment_focus').withChance(3),
        Item.of('netherite_scrap').withChance(5),
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/plague_asylum/plague_asylum_barrels')//瘟疫避难所
    .addWeightedLoot([1,2],[
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goety:rotting_focus').withChance(3),
        Item.of('goety:osseous_focus').withChance(3),
        Item.of('2x goety:occult_fabric').withChance(4),
        Item.of('2x goety:ectoplasm').withChance(4),
        Item.of('goety:animation_core').withChance(2),
        Item.of('8x minecraft:sculk').withChance(10),
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/plague_asylum/plague_asylum_cells')//瘟疫避难所
    .addWeightedLoot([2,3],[
        Item.of('skeleton_skull').withChance(1),
        Item.of('zombie_head').withChance(1),
        Item.of('goety:tall_skull').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/plague_asylum/plague_asylum_normal')//瘟疫避难所
    .addWeightedLoot([1,2],[
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goety:rotting_focus').withChance(4),
        Item.of('goety:osseous_focus').withChance(3),
        Item.of('2x goety:ectoplasm').withChance(6),
        Item.of('goety:occult_fabric').withChance(6),
        Item.of('goety:animation_core').withChance(6),
        Item.of('8x minecraft:sculk').withChance(16),
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(6)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/plague_asylum/plague_asylum_potions')//瘟疫避难所
    .addWeightedLoot([1,2],[
        Item.of('goety:slimy_focus').withChance(3),
        Item.of('goety:osseous_focus').withChance(3),
        Item.of('goety:occult_fabric').withChance(4),
        Item.of('goety:animation_core').withChance(4),
        Item.of('4x minecraft:sculk').withChance(12),
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/plague_asylum/plague_asylum_storage')//瘟疫避难所
    .addWeightedLoot([1,2],[
        Item.of('2x wither_rose').withChance(1),
        Item.of('goety:rotting_focus').withChance(3),
        Item.of('goety:skull_focus').withChance(3),
        Item.of('goety:occult_fabric').withChance(4),
        Item.of('goety:animation_core').withChance(4),
        Item.of('4x minecraft:sculk').withChance(12),
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/plague_asylum/plague_asylum_treasure')//瘟疫避难所
    .addWeightedLoot([1,2],[
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goety:rotting_focus').withChance(4),
        Item.of('goety:osseous_focus').withChance(3),
        Item.of('2x goety:ectoplasm').withChance(6),
        Item.of('goety:occult_fabric').withChance(6),
        Item.of('goety:animation_core').withChance(6),
        Item.of('8x minecraft:sculk').withChance(16),
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(6)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/scorched_mines/scorched_mines_barrels')//焦黑矿井
    .addWeightedLoot([
        Item.of('goety:fireball_focus').withChance(3),
        Item.of('goety:ghastly_focus').withChance(3),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(3),
        Item.of('goety:bombardment_focus').withChance(3),
        Item.of('diamond').withChance(4)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/scorched_mines/scorched_mines_housing')//焦黑矿井
    .addWeightedLoot([
        Item.of('goety:fireball_focus').withChance(3),
        Item.of('goety:ghastly_focus').withChance(3),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(3),
        Item.of('goety:bombardment_focus').withChance(3),
        Item.of('netherite_scrap').withChance(4)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/scorched_mines/scorched_mines_hub')//焦黑矿井
    .addWeightedLoot([
        Item.of('goety:fireball_focus').withChance(3),
        Item.of('goety:ghastly_focus').withChance(3),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(3),
        Item.of('goety:bombardment_focus').withChance(3),
        Item.of('2x gold_ingot').withChance(4)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/scorched_mines/scorched_mines_normal')//焦黑矿井
    .addWeightedLoot([
        Item.of('goety:fireball_focus').withChance(3),
        Item.of('goety:ghastly_focus').withChance(3),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(3),
        Item.of('goety:bombardment_focus').withChance(3),
        Item.of('goety:nether_robe').withChance(1),
        Item.of('2x minecraft:netherite_scrap').withChance(8),
        Item.of('minecraft:gold_block').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/scorched_mines/scorched_mines_treasure')//焦黑矿井
    .addWeightedLoot([1,2],[
        Item.of('enigmaticlegacy:blazing_core').withChance(5),
        Item.of('enigmaticaddons:illusion_lantern').withChance(5),
        Item.of('goety:nether_robe').withChance(1),
        Item.of('goety:fireball_focus').withChance(3),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(3),
        Item.of('2x minecraft:netherite_scrap').withChance(8),
        Item.of('minecraft:gold_block').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/shiraz_palace/shiraz_palace_elite')//繁花之宫
    .addWeightedLoot([2],[
        Item.of('goety:nether_crown').withChance(1),
        Item.of('goety:nether_robe').withChance(1),
        Item.of('goety:nether_staff').withChance(1),
        Item.of('goety:necro_cape').withChance(1),
        Item.of('goety:necro_crown').withChance(1),
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goety:forbidden_piece').withChance(1)
    ])
    .removeLoot('diamond_sword')
    .removeLoot('diamond_helmet')
    .removeLoot('diamond_chestplate')
    .removeLoot('diamond_leggings')
    .removeLoot('diamond_boots')
    .removeLoot('blaze_powder')
    .removeLoot('ender_pearl')
    .removeLoot('crossbow')
    .removeLoot('bow')
    .removeLoot('rose_bush')
    .removeLoot('blue_orchid')
    .removeLoot('cobweb')
    event
    .addLootTableModifier('dungeons_arise:chests/shiraz_palace/shiraz_palace_gardens')//繁花之宫
    .addWeightedLoot([2],[
        Item.of('goety:wild_crown').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('2x goety:poison_quill_seed').withChance(4),
        Item.of('goety:floral_scroll').withChance(8),
        Item.of('enigmaticaddons:revival_leaf').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/shiraz_palace/shiraz_palace_library')//繁花之宫
    .addWeightedLoot([1],[
        Item.of('enigmaticaddons:artificial_flower').withChance(1),
        Item.of('enigmaticaddons:void_tome').withChance(1),
        Item.of('enigmaticaddons:antique_bag').withChance(1),
        Item.of('enigmaticlegacy:withered_tome').withChance(1)
    ])
    .addWeightedLoot([1,2],[
        Item.of('goety:frost_robe').withChance(1),
        Item.of('goety:frost_crown').withChance(1),
        Item.of('goety:frost_staff').withChance(1),
        Item.of('goety:frost_breath_focus').withChance(4),
        Item.of('goety:ice_spike_focus').withChance(4),
        Item.of('goety:iceology_focus').withChance(3),
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(8),
        Item.of('enigmaticaddons:forgotten_ice').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/shiraz_palace/shiraz_palace_normal')//繁花之宫
    .addWeightedLoot([2],[
        Item.of('goety:amethyst_necklace').withChance(1),
        Item.of('goety:geo_robe').withChance(1),
        Item.of('goety:geo_staff').withChance(1),
        Item.of('goety:earth_punch_focus').withChance(3),
        Item.of('goety:barricade_focus').withChance(3),
        Item.of('goety:pulverize_focus').withChance(3),
        Item.of('4x minecraft:amethyst_block').withChance(10),
        Item.of('minecraft:iron_block').withChance(5),
        Item.of('enigmaticlegacy:golem_heart').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/shiraz_palace/shiraz_palace_rooms')//繁花之宫
    .addWeightedLoot([2],[
        Item.of('goety:wind_robe').withChance(1),
        Item.of('goety:wind_crown').withChance(1),
        Item.of('goety:wind_staff').withChance(1),
        Item.of('goety:trembling_focus').withChance(3),
        Item.of('goety:razor_wind_focus').withChance(3),
        Item.of('goety:wind_blast_focus').withChance(3),
        Item.of('goety:mistral_scroll').withChance(5),
        Item.of('enigmaticlegacy:angel_blessing').withChance(10),
        Item.of('goety:wind_core').withChance(8),
        Item.of('2x goety:jade').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/shiraz_palace/shiraz_palace_supply')//繁花之宫
    .addWeightedLoot([2],[
        Item.of('enigmaticlegacy:ocean_stone').withChance(9),
        Item.of('goety:abyss_crown').withChance(1),
        Item.of('goety:abyss_robe').withChance(1),
        Item.of('trident').withChance(2),
        Item.of('goety:tidal_focus').withChance(3),
        Item.of('goety:bouncy_bubble_focus').withChance(3),
        Item.of('goety:biomine_focus').withChance(3),
        Item.of('minecraft:pufferfish').withChance(6),
        Item.of('4x minecraft:prismarine').withChance(6)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/shiraz_palace/shiraz_palace_towers')//繁花之宫
    .addWeightedLoot([2],[
        Item.of('goety:storm_staff').withChance(1),
        Item.of('goety:storm_robe').withChance(1),
        Item.of('goety:storm_crown').withChance(1),
        Item.of('goety:charge_focus').withChance(3),
        Item.of('goety:discharge_focus').withChance(3),
        Item.of('goety:bolting_focus').withChance(3),
        Item.of('enigmaticaddons:lost_engine').withChance(12),
        Item.of('lightning_rod').withChance(8),
        Item.of('copper_block').withChance(8),
        Item.of('minecraft:diamond').withChance(6)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/shiraz_palace/shiraz_palace_treasure')//繁花之宫
    .addWeightedLoot([2],[
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goety:rotting_focus').withChance(3),
        Item.of('goety:osseous_focus').withChance(3),
        Item.of('2x goety:occult_fabric').withChance(4),
        Item.of('2x goety:ectoplasm').withChance(4),
        Item.of('goety:animation_core').withChance(2),
        Item.of('8x minecraft:sculk').withChance(10),
        Item.of('2x goety:forbidden_piece').withChance(4)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/thornborn_towers/thornborn_towers_barrels')//荆棘城堡
    .addWeightedLoot([1,2],[
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/thornborn_towers/thornborn_towers_rooms')//荆棘城堡
    .addWeightedLoot([1,2],[
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/thornborn_towers/thornborn_towers_top_rooms')//荆棘城堡
    .addWeightedLoot([2],[
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/thornborn_towers/thornborn_towers_top_treasure')//荆棘城堡
    .addWeightedLoot([2],[
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8)
    ])
    .addWeightedLoot([
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goety:overgrowth_focus').withChance(3),
        Item.of('goety:entangling_focus').withChance(3),
        Item.of('goety:swarm_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8),
        Item.of('enigmaticaddons:revival_leaf').withChance(12)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/small_blimp/small_blimp_coal_storage')//小汽艇
    .addWeightedLoot([2],[
        Item.of('goety:cursed_infuser').withChance(1),
        Item.of('2x goety:empty_focus').withChance(2),
        Item.of('2x goety:cursed_ingot').withChance(2),
        Item.of('2x goety:dark_fabric').withChance(2),
        Item.of('2x goety:magic_fabric').withChance(2)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/small_blimp/small_blimp_redstone_chamber')//小汽艇
    .addWeightedLoot([2],[
        Item.of('2x goety:redstone_cube_spawn_egg').withChance(3),
        Item.of('goety:animation_core').withChance(3),
        Item.of('2x sticky_piston').withChance(3),
        Item.of('enigmaticlegacy:golem_heart').withChance(1)
    ])
    event
    .addLootTableModifier('dungeons_arise:chests/small_blimp/small_blimp_treasure')//小汽艇
    .addWeightedLoot([1,2],[
        Item.of('goety:storm_robe').withChance(1),
        Item.of('goety:charge_focus').withChance(3),
        Item.of('goety:discharge_focus').withChance(3),
        Item.of('goety:bolting_focus').withChance(3),
        Item.of('enigmaticaddons:lost_engine').withChance(10),
        Item.of('lightning_rod').withChance(8),
        Item.of('copper_block').withChance(8),
        Item.of('minecraft:diamond').withChance(6)
    ])
    event
    .addLootTableModifier('cataclysm:chests/acropolis_treasure')//卫城
    .addWeightedLoot([1,2],[
        Item.of('enigmaticlegacy:ocean_stone').withChance(9),
        Item.of('goety:abyss_crown').withChance(1),
        Item.of('goety:abyss_robe').withChance(1),
        Item.of('trident').withChance(2),
        Item.of('goety:tidal_focus').withChance(3),
        Item.of('goety:bouncy_bubble_focus').withChance(3),
        Item.of('goety:biomine_focus').withChance(3),
        Item.of('minecraft:pufferfish').withChance(6),
        Item.of('4x minecraft:prismarine').withChance(6)
    ])
    .addWeightedLoot([
        Item.of('nautilus_shell').withChance(2),
        Item.of('trident').withChance(2),
        Item.of('heart_of_the_sea').withChance(1)
    ])
    event
    .addLootTableModifier('cataclysm:chests/frosted_prison_treasure')//苦寒监牢
    .addWeightedLoot([2],[
        Item.of('goety:frost_robe').withChance(1),
        Item.of('goety:frost_crown').withChance(1),
        Item.of('goety:frost_staff').withChance(1),
        Item.of('goety:frost_breath_focus').withChance(3),
        Item.of('goety:ice_spike_focus').withChance(3),
        Item.of('goety:iceology_focus').withChance(3),
        Item.of('enigmaticaddons:forgotten_ice').withChance(8)
    ])

    event
    .addLootTableModifier('twilightforest:chests/hedge_maze')//树篱迷宫
    .addWeightedLoot((1,2),[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goetytwilight:mosquito_swarm_focus').withChance(3),
        Item.of('goetytwilight:nature_bolt_focus').withChance(3),
        Item.of('goetytwilight:slime_bomb_focus').withChance(3),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8),
        Item.of('enigmaticaddons:revival_leaf').withChance(12)
    ])
    .addWeightedLoot([
        Item.of('3x twilightforest:steeleaf_ingot').withChance(4),
        Item.of('2x twilightforest:liveroot').withChance(2),
        Item.of('twilightforest:liveroot_block').withChance(1)
    ])

    event
    .addLootTableModifier('twilightforest:chests/graveyard')//墓地
    .addWeightedLoot([1,2],[
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goety:rotting_focus').withChance(3),
        Item.of('goety:osseous_focus').withChance(3),
        Item.of('2x goety:occult_fabric').withChance(6),
        Item.of('2x goety:ectoplasm').withChance(6),
        Item.of('8x minecraft:sculk').withChance(10),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4),
    ])
    .addWeightedLoot((1,2),[
        Item.of('3x twilightforest:steeleaf_ingot').withChance(4),
        Item.of('2x twilightforest:liveroot').withChance(2),
        Item.of('twilightforest:liveroot_block').withChance(1)
    ])
    .removeLoot('twilightforest:uncrafting_table')

    event
    .addLootTableModifier('twilightforest:chests/basement')//德鲁伊小屋地下室
    .addWeightedLoot((2,3),[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goetytwilight:skeleton_druid_focus').withChance(2),
        Item.of('goetytwilight:mosquito_swarm_focus').withChance(3),
        Item.of('goetytwilight:nature_bolt_focus').withChance(4),
        Item.of('goetytwilight:slime_bomb_focus').withChance(4),
        Item.of('4x goety:quick_growing_seed').withChance(6),
        Item.of('8x goety:overgrown_roots').withChance(6),
        Item.of('2x goety:poison_quill_seed').withChance(6),
        Item.of('enigmaticaddons:revival_leaf').withChance(6),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
    ])
    .addWeightedLoot((1,2),[
        Item.of('3x twilightforest:steeleaf_ingot').withChance(4),
        Item.of('2x twilightforest:liveroot').withChance(2),
        Item.of('twilightforest:liveroot_block').withChance(1)
    ])

    event
    .addLootTableModifier('twilightforest:chests/hill_1')//空心矿山
    .addWeightedLoot([
        Item.of('goety:amethyst_necklace').withChance(1),
        Item.of('goety:geo_staff').withChance(1),
        Item.of('goetytwilight:kobold_focus').withChance(4),
        Item.of('goety:barricade_focus').withChance(4),
        Item.of('goety:pulverize_focus').withChance(4),
        Item.of('4x minecraft:amethyst_block').withChance(8),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
    ])
    .addWeightedLoot([
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(2)
    ])
    .addWeightedLoot((1,2),[
        Item.of('3x twilightforest:steeleaf_ingot').withChance(4),
        Item.of('2x twilightforest:liveroot').withChance(2),
        Item.of('twilightforest:liveroot_block').withChance(1)
    ])

    event
    .addLootTableModifier('twilightforest:chests/hill_2')//空心矿山
    .addWeightedLoot([
        Item.of('goety:amethyst_necklace').withChance(1),
        Item.of('goety:geo_staff').withChance(1),
        Item.of('goetytwilight:kobold_focus').withChance(4),
        Item.of('goety:barricade_focus').withChance(4),
        Item.of('goety:pulverize_focus').withChance(4),
        Item.of('4x minecraft:amethyst_block').withChance(8),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4),
    ])
    .addWeightedLoot([
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(2)
    ])
    .addWeightedLoot((1,2),[
        Item.of('3x twilightforest:steeleaf_ingot').withChance(4),
        Item.of('2x twilightforest:liveroot').withChance(2),
        Item.of('twilightforest:liveroot_block').withChance(1)
    ])
    .removeLoot('twilightforest:uncrafting_table')

    event
    .addLootTableModifier('twilightforest:chests/hill_3')//空心矿山
    .addWeightedLoot([
        Item.of('goety:amethyst_necklace').withChance(1),
        Item.of('goety:geo_staff').withChance(1),
        Item.of('goetytwilight:kobold_focus').withChance(4),
        Item.of('goety:barricade_focus').withChance(4),
        Item.of('goety:pulverize_focus').withChance(4),
        Item.of('4x minecraft:amethyst_block').withChance(8),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4),
    ])
    .addWeightedLoot([
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(2)
    ])
    .addWeightedLoot((1,2),[
        Item.of('3x twilightforest:steeleaf_ingot').withChance(4),
        Item.of('2x twilightforest:liveroot').withChance(2),
        Item.of('twilightforest:liveroot_block').withChance(1)
    ])

    event
    .addLootTableModifier('twilightforest:chests/tree_cache')//树洞
    .addWeightedLoot((1),[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goetytwilight:mosquito_swarm_focus').withChance(3),
        Item.of('goetytwilight:nature_bolt_focus').withChance(4),
        Item.of('goetytwilight:slime_bomb_focus').withChance(4),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8),
        Item.of('enigmaticaddons:revival_leaf').withChance(12),
        Item.of('twilightforest:charm_of_keeping_1').withChance(6),
        Item.of('twilightforest:charm_of_life_1').withChance(6)
    ])
    .addWeightedLoot((2)[
        Item.of('3x twilightforest:steeleaf_ingot').withChance(4),
        Item.of('2x twilightforest:liveroot').withChance(2),
        Item.of('twilightforest:liveroot_block').withChance(1)
    ])
    .addLoot('twilightforest:hollow_oak_sapling')

    event
    .addLootTableModifier('twilightforest:chests/foundation_basement')//地基遗迹地下室
    .addWeightedLoot([2],[
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goetytwilight:paper_knife_focus').withChance(3),
        Item.of('goetytwilight:tome_focus').withChance(3),
        Item.of('2x goety:occult_fabric').withChance(4),
        Item.of('2x goety:ectoplasm').withChance(6),
        Item.of('8x minecraft:sculk').withChance(10),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
    ])
    .addWeightedLoot([1,2],[
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(2)
    ])

    event
    .addLootTableModifier('twilightforest:chests/tower_library')//巫妖高塔
    .addWeightedLoot([
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goetytwilight:paper_knife_focus').withChance(3),
        Item.of('goetytwilight:tome_focus').withChance(3),
        Item.of('2x goety:ectoplasm').withChance(4),
        Item.of('goety:animation_core').withChance(4),
        Item.of('8x minecraft:sculk').withChance(10),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
    ])
    .addWeightedLoot([1,2],[
        Item.of('enigmaticaddons:artificial_flower').withChance(1),
        Item.of('enigmaticaddons:void_tome').withChance(1),
        Item.of('enigmaticaddons:antique_bag').withChance(1),
        Item.of('enigmaticlegacy:withered_tome').withChance(1)
    ])

    event
    .addLootTableModifier('twilightforest:chests/tower_room')//巫妖高塔
    .addWeightedLoot([1,2],[
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goetytwilight:paper_knife_focus').withChance(3),
        Item.of('goetytwilight:tome_focus').withChance(3),
        Item.of('2x goety:ectoplasm').withChance(4),
        Item.of('goety:animation_core').withChance(4),
        Item.of('8x minecraft:sculk').withChance(10),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
    ])

    event
    .addLootTableModifier('twilightforest:chests/labyrinth_room')//牛头人迷宫
    .addWeightedLoot((2),[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goetytwilight:minotaur_focus').withChance(2),
        Item.of('goetytwilight:mosquito_swarm_focus').withChance(3),
        Item.of('goetytwilight:slime_bomb_focus').withChance(4),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8),
        Item.of('enigmaticaddons:revival_leaf').withChance(8),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
    ])
    .addWeightedLoot((1,2),[
        Item.of('3x twilightforest:steeleaf_ingot').withChance(4),
        Item.of('2x twilightforest:liveroot').withChance(2),
        Item.of('twilightforest:liveroot_block').withChance(1)
    ])

    event
    .addLootTableModifier('twilightforest:chests/labyrinth_vault')//牛头人迷宫
    .addWeightedLoot((2),[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goetytwilight:minotaur_focus').withChance(2),
        Item.of('goetytwilight:mosquito_swarm_focus').withChance(3),
        Item.of('goetytwilight:slime_bomb_focus').withChance(4),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8),
        Item.of('enigmaticaddons:revival_leaf').withChance(8),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
    ])
    .addWeightedLoot((1,2),[
        Item.of('3x twilightforest:steeleaf_ingot').withChance(4),
        Item.of('2x twilightforest:liveroot').withChance(2),
        Item.of('twilightforest:liveroot_block').withChance(1)
    ])

    event
    .addLootTableModifier('twilightforest:chests/labyrinth_vault_jackpot')//牛头人迷宫
    .addWeightedLoot((2),[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goetytwilight:minotaur_focus').withChance(2),
        Item.of('goetytwilight:mosquito_swarm_focus').withChance(3),
        Item.of('goetytwilight:slime_bomb_focus').withChance(4),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8),
        Item.of('enigmaticaddons:revival_leaf').withChance(8),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
    ])
    .addWeightedLoot((1,2),[
        Item.of('3x twilightforest:steeleaf_ingot').withChance(4),
        Item.of('2x twilightforest:liveroot').withChance(2),
        Item.of('twilightforest:liveroot_block').withChance(1)
    ])

    event
    .addLootTableModifier('twilightforest:chests/labyrinth_dead_end')//牛头人迷宫
    .addWeightedLoot((2),[
        Item.of('goety:wild_staff').withChance(1),
        Item.of('goety:wild_robe').withChance(1),
        Item.of('goetytwilight:minotaur_focus').withChance(2),
        Item.of('goetytwilight:mosquito_swarm_focus').withChance(3),
        Item.of('goetytwilight:slime_bomb_focus').withChance(4),
        Item.of('4x goety:quick_growing_seed').withChance(8),
        Item.of('8x goety:overgrown_roots').withChance(8),
        Item.of('2x goety:poison_quill_seed').withChance(8),
        Item.of('enigmaticaddons:revival_leaf').withChance(8),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
    ])
    .addWeightedLoot((1,2),[
        Item.of('3x twilightforest:steeleaf_ingot').withChance(4),
        Item.of('2x twilightforest:liveroot').withChance(2),
        Item.of('twilightforest:liveroot_block').withChance(1)
    ])

    event
    .addLootTableModifier('twilightforest:chests/darktower_cache')//砷铅铁高塔
    .addWeightedLoot((1,2),[
        Item.of('enigmaticlegacy:blazing_core').withChance(5),
        Item.of('enigmaticaddons:illusion_lantern').withChance(5),
        Item.of('goety:nether_robe').withChance(1),
        Item.of('goety:fireball_focus').withChance(3),
        Item.of('goetytwilight:carminite_golem_focus').withChance(3),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(3),
        Item.of('2x gold_ingot').withChance(20),
        Item.of('2x minecraft:netherite_scrap').withChance(8),
        Item.of('minecraft:gold_block').withChance(8),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
    ])
    .addWeightedLoot([
        Item.of('3x twilightforest:steeleaf_ingot').withChance(4),
        Item.of('2x twilightforest:liveroot').withChance(2),
        Item.of('twilightforest:liveroot_block').withChance(1)
    ])

    event
    .addLootTableModifier('twilightforest:chests/darktower_key')//砷铅铁高塔
    .addWeightedLoot((1,2),[
        Item.of('enigmaticlegacy:blazing_core').withChance(5),
        Item.of('enigmaticaddons:illusion_lantern').withChance(5),
        Item.of('goety:nether_robe').withChance(1),
        Item.of('goety:fireball_focus').withChance(3),
        Item.of('goetytwilight:carminite_golem_focus').withChance(3),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(3),
        Item.of('2x gold_ingot').withChance(20),
        Item.of('2x minecraft:netherite_scrap').withChance(8),
        Item.of('minecraft:gold_block').withChance(8),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
        
    ])
    .addWeightedLoot([
        Item.of('3x twilightforest:steeleaf_ingot').withChance(4),
        Item.of('2x twilightforest:liveroot').withChance(2),
        Item.of('twilightforest:liveroot_block').withChance(1)
    ])

    event
    .addLootTableModifier('twilightforest:chests/darktower_boss')//砷铅铁高塔
    .addWeightedLoot((2,3),[
        Item.of('enigmaticlegacy:blazing_core').withChance(5),
        Item.of('enigmaticaddons:illusion_lantern').withChance(5),
        Item.of('goety:nether_robe').withChance(1),
        Item.of('goetytwilight:arsenopyrite_focus').withChance(1),
        Item.of('goety:fireball_focus').withChance(3),
        Item.of('goetytwilight:sorrow_focus').withChance(3),
        Item.of('goetytwilight:carminite_golem_focus').withChance(3),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(3),
        Item.of('2x gold_ingot').withChance(20),
        Item.of('2x minecraft:netherite_scrap').withChance(8),
        Item.of('minecraft:gold_block').withChance(8),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
    ])
    .addLoot('3x twilightforest:experiment_115')

    event
    .addLootTableModifier('twilightforest:chests/stronghold_room')//骑士要塞
    .addWeightedLoot((1,2),[
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goetytwilight:knight_order_focus').withChance(1),
        Item.of('goetytwilight:destruction_focus').withChance(2),
        Item.of('goetytwilight:goblin_focus').withChance(4),
        Item.of('goetytwilight:alpha_wolf_focus').withChance(4),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
    ])

    event
    .addLootTableModifier('twilightforest:chests/stronghold_cache')//骑士要塞
    .addWeightedLoot((1,2),[
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goetytwilight:knight_order_focus').withChance(1),
        Item.of('goetytwilight:destruction_focus').withChance(2),
        Item.of('goetytwilight:goblin_focus').withChance(4),
        Item.of('goetytwilight:alpha_wolf_focus').withChance(4),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
    ])

    event
    .addLootTableModifier('twilightforest:chests/stronghold_boss')//骑士要塞
    .addWeightedLoot((2,3),[
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goetytwilight:knight_order_focus').withChance(2),
        Item.of('goetytwilight:destruction_focus').withChance(3),
        Item.of('goetytwilight:goblin_focus').withChance(4),
        Item.of('goetytwilight:phantom_axe_focus').withChance(3),
        Item.of('5x twilightforest:armor_shard').withChance(8),
        Item.of('twilightforest:armor_shard_cluster').withChance(6),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
    ])

    event
    .addLootTableModifier('twilightforest:chests/aurora_room')//极光宫殿
    .addWeightedLoot([1,2],[
        Item.of('goety:frost_robe').withChance(1),
        Item.of('goety:frost_staff').withChance(1),
        Item.of('goetytwilight:ice_crystal_focus').withChance(3),
        Item.of('goety:ice_spike_focus').withChance(3),
        Item.of('goetytwilight:stable_ice_core_focus').withChance(3),
        Item.of('enigmaticaddons:forgotten_ice').withChance(8),
        Item.of('4x twilightforest:aurora_block').withChance(8),
        Item.of('4x twilightforest:ice_bomb').withChance(4),
        Item.of('goetyawaken:bakasmusic_disc').withChance(2),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
    ])

    event
    .addLootTableModifier('twilightforest:chests/aurora_cache')//极光宫殿
    .addWeightedLoot([1,2],[
        Item.of('goety:frost_robe').withChance(1),
        Item.of('goety:frost_staff').withChance(1),
        Item.of('goetytwilight:ice_crystal_focus').withChance(3),
        Item.of('goety:ice_spike_focus').withChance(3),
        Item.of('goetytwilight:stable_ice_core_focus').withChance(3),
        Item.of('enigmaticaddons:forgotten_ice').withChance(8),
        Item.of('4x twilightforest:aurora_block').withChance(8),
        Item.of('4x twilightforest:ice_bomb').withChance(4),
        Item.of('goetyawaken:bakasmusic_disc').withChance(2),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4)
    ])

    event
    .addLootTableModifier('twilightforest:chests/troll_garden')//巨魔洞窟
    .addWeightedLoot([
        Item.of('goety:amethyst_necklace').withChance(1),
        Item.of('goety:geo_staff').withChance(1),
        Item.of('goetytwilight:kobold_focus').withChance(4),
        Item.of('goety:barricade_focus').withChance(4),
        Item.of('goety:pulverize_focus').withChance(4),
        Item.of('4x minecraft:amethyst_block').withChance(8),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4),
    ])
    .addWeightedLoot([
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(2)
    ])
    .addWeightedLoot((1,2),[
        Item.of('3x twilightforest:steeleaf_ingot').withChance(4),
        Item.of('2x twilightforest:liveroot').withChance(2),
        Item.of('twilightforest:liveroot_block').withChance(1)
    ])

    event
    .addLootTableModifier('twilightforest:chests/troll_vault')//巨魔洞窟
    .addWeightedLoot([
        Item.of('goety:amethyst_necklace').withChance(1),
        Item.of('goety:geo_staff').withChance(1),
        Item.of('goetytwilight:kobold_focus').withChance(4),
        Item.of('goety:barricade_focus').withChance(4),
        Item.of('goety:pulverize_focus').withChance(4),
        Item.of('4x minecraft:amethyst_block').withChance(8),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4),
    ])
    .addWeightedLoot([
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(2)
    ])
    .addWeightedLoot((1,2),[
        Item.of('3x twilightforest:steeleaf_ingot').withChance(4),
        Item.of('2x twilightforest:liveroot').withChance(2),
        Item.of('twilightforest:liveroot_block').withChance(1)
    ])

    event
    .addLootTableModifier('twilightforest:chests/troll_vault_with_lamp')//巨魔洞窟
    .addWeightedLoot([
        Item.of('goety:amethyst_necklace').withChance(1),
        Item.of('goety:geo_staff').withChance(1),
        Item.of('goetytwilight:kobold_focus').withChance(4),
        Item.of('goety:barricade_focus').withChance(4),
        Item.of('goety:pulverize_focus').withChance(4),
        Item.of('4x minecraft:amethyst_block').withChance(8),
        Item.of('twilightforest:charm_of_keeping_1').withChance(4),
        Item.of('twilightforest:charm_of_life_1').withChance(4),
    ])
    .addWeightedLoot([
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(3),
        Item.of('4x enigmaticaddons:earth_heart_fragment').withChance(2),
        Item.of('enigmaticlegacy:earth_heart').withChance(1),
        Item.of('enigmaticlegacy:golem_heart').withChance(2)
    ])
    .addWeightedLoot((1,2),[
        Item.of('3x twilightforest:steeleaf_ingot').withChance(4),
        Item.of('2x twilightforest:liveroot').withChance(2),
        Item.of('twilightforest:liveroot_block').withChance(1)
    ])

    event
    .addLootTableModifier('goety:chests/assembly_treasure')//黑暗集会
    .addWeightedLoot([2],[
        Item.of('enigmaticlegacy:blazing_core').withChance(8),
        Item.of('goety:infernal_tome').withChance(2),
        Item.of('goety:fireball_focus').withChance(4),
        Item.of('goety_cataclysm:ashen_breath_focus').withChance(4),
        Item.of("2x minecraft:netherite_scrap").withChance(4),
        Item.of('2x blaze_rod').withChance(8),
        Item.of("3x minecraft:magma_cream").withChance(8),
        Item.of('4x minecraft:nether_wart').withChance(8)
    ])

    event
    .addLootTableModifier('goety:chests/blacksmith_loot')//不祥铁匠铺
    .addWeightedLoot([1,2],[
        Item.of('goety:storm_robe').withChance(1),
        Item.of('goety:charge_focus').withChance(3),
        Item.of('goety:discharge_focus').withChance(3),
        Item.of('goety:bolting_focus').withChance(3),
        Item.of('enigmaticaddons:lost_engine').withChance(10),
        Item.of('lightning_rod').withChance(8),
        Item.of('copper_block').withChance(8),
        Item.of('minecraft:diamond').withChance(6),
        Item.of('goety:great_hammer').withChance(4)
    ])

    event
    .addLootTableModifier('goety:chests/blacksmith_treasure')//不祥铁匠铺
    .addWeightedLoot([1,2],[
        Item.of('goety:storm_robe').withChance(1),
        Item.of('goety:charge_focus').withChance(3),
        Item.of('goety:discharge_focus').withChance(3),
        Item.of('goety:bolting_focus').withChance(3),
        Item.of('enigmaticaddons:lost_engine').withChance(10),
        Item.of('lightning_rod').withChance(8),
        Item.of('copper_block').withChance(8),
        Item.of('minecraft:diamond').withChance(6),
        Item.of("goety:stormlander").withChance(4)
    ])

    event
    .addLootTableModifier('goety:chests/graveyard_loot')//墓地
    .addWeightedLoot([1,2],[
        Item.of('goety:rotting_focus').withChance(1),
        Item.of('goety:osseous_focus').withChance(1),
        Item.of('2x goety:occult_fabric').withChance(4),
        Item.of('2x goety:ectoplasm').withChance(4),
        Item.of('goety:animation_core').withChance(4),
        Item.of('8x minecraft:sculk').withChance(12),
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(8)
    ])

    event
    .addLootTableModifier('goety:chests/graveyard_treasure')//墓地
    .addWeightedLoot([2],[
        Item.of('goety:rotting_focus').withChance(2),
        Item.of('goety:osseous_focus').withChance(2),
        Item.of('2x goety:occult_fabric').withChance(4),
        Item.of('2x goety:ectoplasm').withChance(4),
        Item.of('goety:animation_core').withChance(4),
        Item.of('8x minecraft:sculk').withChance(12),
        Item.of('2x enigmaticaddons:earth_heart_fragment').withChance(8)
    ])

    event
    .addLootTableModifier('goety:chests/crypt_book')//墓穴
    .addWeightedLoot([1,2],[
        Item.of('enigmaticaddons:artificial_flower').withChance(1),
        Item.of('enigmaticaddons:void_tome').withChance(1),
        Item.of('enigmaticaddons:antique_bag').withChance(1),
        Item.of('enigmaticlegacy:withered_tome').withChance(1)
    ])

    event
    .addLootTableModifier('goety:chests/crypt_loot')//墓穴
    .addWeightedLoot([1,2],[
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goety:rotting_focus').withChance(4),
        Item.of('goety:osseous_focus').withChance(3),
        Item.of('2x goety:occult_fabric').withChance(4),
        Item.of('2x goety:ectoplasm').withChance(4),
        Item.of('goety:animation_core').withChance(4),
        Item.of('8x minecraft:sculk').withChance(12),
        Item.of("goety:fell_blade").withChance(8)
    ])

    event
    .addLootTableModifier('goety:chests/crypt_tomb')//墓穴
    .addWeightedLoot([2],[
        Item.of("enigmaticaddons:illusion_lantern").withChance(8),
        Item.of('goety:necro_staff').withChance(1),
        Item.of('goety:rotting_focus').withChance(4),
        Item.of('goety:osseous_focus').withChance(3),
        Item.of('2x goety:occult_fabric').withChance(4),
        Item.of('2x goety:ectoplasm').withChance(4),
        Item.of('goety:animation_core').withChance(4),
        Item.of('8x minecraft:sculk').withChance(12),
        Item.of("goety:fell_blade").withChance(8)
    ])

    event
    .addLootTableModifier('goety:chests/shack_attic')//朽坏木屋
    .addWeightedLoot([1,2],[
        Item.of("goety:witch_hat").withChance(3),
        Item.of("goety:witch_robe").withChance(1),
        Item.of("2x minecraft:scute").withChance(4),
        Item.of("5x minecraft:nether_wart").withChance(8),
        Item.of("3x minecraft:fermented_spider_eye").withChance(6),
        Item.of("2x goety:occult_fabric").withChance(6)
    ])

    event
    .addLootTableModifier('goety:chests/shack_basement')//朽坏木屋
    .addWeightedLoot([2,3],[
        Item.of("goety:witch_hat").withChance(5),
        Item.of("goety:witch_robe").withChance(2),
        Item.of("2x minecraft:scute").withChance(4),
        Item.of("5x minecraft:nether_wart").withChance(8),
        Item.of("3x minecraft:fermented_spider_eye").withChance(6),
        Item.of("2x goety:occult_fabric").withChance(6)
    ])

    event
    .addLootTableModifier('goety:chests/shack_book')//朽坏木屋
    .addWeightedLoot([1,2],[
        Item.of("goety:witch_hat").withChance(3),
        Item.of("goety:witch_robe").withChance(1),
        Item.of("2x minecraft:scute").withChance(4),
        Item.of("5x minecraft:nether_wart").withChance(8),
        Item.of("3x minecraft:fermented_spider_eye").withChance(6),
        Item.of("2x goety:occult_fabric").withChance(6)
    ])

    event
    .addLootTableModifier('goety:chests/shack_treasure')//朽坏木屋
    .addWeightedLoot([2,3],[
        Item.of("goety:witch_hat").withChance(5),
        Item.of("goety:witch_robe").withChance(2),
        Item.of("2x minecraft:scute").withChance(4),
        Item.of("5x minecraft:nether_wart").withChance(8),
        Item.of("3x minecraft:fermented_spider_eye").withChance(6),
        Item.of("2x goety:occult_fabric").withChance(6)
    ])

    event
    .addLootTableModifier('goety:chests/shrine_loot')//烈风神殿
    .addWeightedLoot([1],[
        Item.of('goety:wind_core').withChance(5),
        Item.of('2x goety:jade').withChance(4),
        Item.of('3x goety:jade').withChance(3),
    ])
    .addWeightedLoot([1],[
        Item.of('goety:wind_robe').withChance(1),
        Item.of('goety:trembling_focus').withChance(3),
        Item.of('goety:razor_wind_focus').withChance(3),
        Item.of('goety:wind_blast_focus').withChance(3),
        Item.of('enigmaticlegacy:angel_blessing').withChance(10),
        Item.of('goety:wind_core').withChance(8),
        Item.of('2x goety:jade').withChance(12)
    ])

    event
    .addLootTableModifier('goety:chests/shrine_treasures')//烈风神殿
    .addWeightedLoot([1,2],[
        Item.of('goety:wind_core').withChance(2),
        Item.of('2x goety:jade').withChance(2),
        Item.of('3x goety:jade').withChance(1),
        Item.of('goety:mistral_scroll').withChance(1)
    ])
    .addWeightedLoot([2],[
        Item.of('goety:wind_robe').withChance(1),
        Item.of('goety:trembling_focus').withChance(3),
        Item.of('goety:razor_wind_focus').withChance(3),
        Item.of('goety:wind_blast_focus').withChance(3),
        Item.of('enigmaticlegacy:angel_blessing').withChance(10),
        Item.of('goety:wind_core').withChance(8),
        Item.of('2x goety:jade').withChance(12)
    ])

    event
    .addLootTableModifier('goety:chests/dark_manor_apothecary')//黑暗庄园
    .addWeightedLoot([1,2],[
        Item.of('goetyawaken:ominous_eye').withChance(5),
        Item.of('trials:ominous_bottle').withChance(3),
        Item.of('2x goety:pale_steel_ingot').withChance(5),
        Item.of('2x experience_bottle').withChance(3),
        Item.of('2x ender_eye').withChance(3),
    ])
    .addWeightedLoot([1],[
        Item.of('4x goety:magic_emerald').withChance(1),
        Item.of('goety:soul_emerald').withChance(1),
        Item.of('3x enigmaticaddons:earth_heart_fragment').withChance(1)
    ])
    
    event
    .addLootTableModifier('goety:chests/dark_manor_attic')//黑暗庄园
    .addWeightedLoot([1,2],[
        Item.of('goetyawaken:ominous_eye').withChance(5),
        Item.of('trials:ominous_bottle').withChance(3),
        Item.of('2x goety:pale_steel_ingot').withChance(5),
        Item.of('2x experience_bottle').withChance(3),
        Item.of('2x ender_eye').withChance(3),
    ])
    .addWeightedLoot([1],[
        Item.of('4x goety:magic_emerald').withChance(1),
        Item.of('goety:soul_emerald').withChance(1),
        Item.of('3x enigmaticaddons:earth_heart_fragment').withChance(1)
    ])

    event
    .addLootTableModifier('goety:chests/dark_manor_cluster')//黑暗庄园
    .addWeightedLoot([1,2],[
        Item.of('goetyawaken:ominous_eye').withChance(5),
        Item.of('trials:ominous_bottle').withChance(3),
        Item.of('2x goety:pale_steel_ingot').withChance(5),
        Item.of('2x experience_bottle').withChance(3),
        Item.of('2x ender_eye').withChance(3),
    ])
    .addWeightedLoot([1],[
        Item.of('4x goety:magic_emerald').withChance(1),
        Item.of('goety:soul_emerald').withChance(1),
        Item.of('3x enigmaticaddons:earth_heart_fragment').withChance(1)
    ])

    event
    .addLootTableModifier('goety:chests/dark_manor_loom')//黑暗庄园
    .addWeightedLoot([1,2],[
        Item.of('goetyawaken:ominous_eye').withChance(5),
        Item.of('trials:ominous_bottle').withChance(3),
        Item.of('2x goety:pale_steel_ingot').withChance(5),
        Item.of('2x experience_bottle').withChance(3),
        Item.of('2x ender_eye').withChance(3),
    ])
    .addWeightedLoot([1],[
        Item.of('4x goety:magic_emerald').withChance(1),
        Item.of('goety:soul_emerald').withChance(1),
        Item.of('3x enigmaticaddons:earth_heart_fragment').withChance(1)
    ])

    event
    .addLootTableModifier('goety:chests/dark_manor_treasure')//黑暗庄园
    .addWeightedLoot([2,3],[
        Item.of('goetyawaken:ominous_eye').withChance(5),
        Item.of('trials:ominous_bottle').withChance(3),
        Item.of('2x goety:pale_steel_ingot').withChance(5),
        Item.of('2x experience_bottle').withChance(3),
        Item.of('2x ender_eye').withChance(3),
    ])
    .addWeightedLoot([1,2],[
        Item.of('4x goety:magic_emerald').withChance(1),
        Item.of('goety:soul_emerald').withChance(1),
        Item.of('3x enigmaticaddons:earth_heart_fragment').withChance(1)
    ])

    event
    .addBlockLootModifier('ruined_monastery_alchemy')//废弃修道院
    .addWeightedLoot([
        Item.of('enigmaticlegacy:blazing_core').withChance(4),
        Item.of('goety:infernal_tome').withChance(3),
        Item.of('goety:witch_hat').withChance(3),
        Item.of('goety:fire_blast_focus').withChance(4),
        Item.of('goety:hogging_focus').withChance(4),
        Item.of("2x minecraft:netherite_scrap").withChance(4),
        Item.of('2x blaze_rod').withChance(8),
        Item.of("3x minecraft:magma_cream").withChance(8),
        Item.of('4x minecraft:nether_wart').withChance(8)
    ])

    event
    .addBlockLootModifier('ruined_monastery_cluster')//废弃修道院
    .addWeightedLoot([
        Item.of('enigmaticlegacy:blazing_core').withChance(4),
        Item.of('goety:infernal_tome').withChance(3),
        Item.of('goety:witch_hat').withChance(3),
        Item.of('goety:fire_blast_focus').withChance(4),
        Item.of('goety:hogging_focus').withChance(4),
        Item.of("2x minecraft:netherite_scrap").withChance(4),
        Item.of('2x blaze_rod').withChance(8),
        Item.of("3x minecraft:magma_cream").withChance(8),
        Item.of('4x minecraft:nether_wart').withChance(8)
    ])

    event
    .addBlockLootModifier('ruined_monastery_crypt')//废弃修道院
    .addWeightedLoot([
        Item.of('enigmaticlegacy:blazing_core').withChance(4),
        Item.of('goety:infernal_tome').withChance(3),
        Item.of('goety:witch_hat').withChance(3),
        Item.of('goety:fire_blast_focus').withChance(4),
        Item.of('goety:hogging_focus').withChance(4),
        Item.of("2x minecraft:netherite_scrap").withChance(4),
        Item.of('2x blaze_rod').withChance(8),
        Item.of("3x minecraft:magma_cream").withChance(8),
        Item.of('4x minecraft:nether_wart').withChance(8)
    ])

    event
    .addBlockLootModifier('ruined_monastery_loot')//废弃修道院
    .addWeightedLoot([1,2],[
        Item.of('enigmaticlegacy:blazing_core').withChance(4),
        Item.of('goety:infernal_tome').withChance(3),
        Item.of('goety:witch_hat').withChance(3),
        Item.of('goety:fire_blast_focus').withChance(4),
        Item.of('goety:hogging_focus').withChance(4),
        Item.of("2x minecraft:netherite_scrap").withChance(4),
        Item.of('2x blaze_rod').withChance(8),
        Item.of("3x minecraft:magma_cream").withChance(8),
        Item.of('4x minecraft:nether_wart').withChance(8)
    ])

})