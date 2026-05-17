ServerEvents.recipes(event => {
    // event.recipes.goety.cursed_infuser_recipes(result, ingredient)
    // - result: 产物物品（OutputItem）
    // - ingredient: 材料物品（InputItem）
    
    //event.recipes.goety.cursed_infuser_recipes('minecraft:emerald', 'minecraft:iron_sword')
    //    .cookingTime(100);  // 5秒（100 tick）

    // 带 NBT 的输出
    //event.recipes.goety.cursed_infuser_recipes(
    //    Item.of('minecraft:potion', '{Potion:"minecraft:healing"}'),
    //    'minecraft:glass_bottle'
    //);
    event.recipes.goety.cursed_infuser_recipes('curlamoety:blackmage_souls_statue_1','curlamoety:blackmage_souls_statue_2')
    .cookingTime(100);

    event.recipes.goety.cursed_infuser_recipes('curlamoety:blackmage_souls_statue_2','curlamoety:blackmage_souls_statue_1')
    .cookingTime(100);

    event.recipes.goety.cursed_infuser_recipes('curlamoety:calamitas_plushie','curlamoety:calamitas_plushie_maid')
    .cookingTime(100);

    event.recipes.goety.cursed_infuser_recipes('curlamoety:calamitas_plushie_maid','curlamoety:calamitas_plushie')
    .cookingTime(100);

    event.remove('goety:dark/dark_ingot_2')
    event.recipes.goety.brazier('4x goety:dark_ingot', [
        'minecraft:sculk',
        'goety:shadow_essence',
        'goety:cursed_ingot',
        'goety:cursed_ingot'
    ])
    .soulCost(2000);

    event.recipes.goety.brazier('3x goety:dark_ingot', [
        'minecraft:sculk',
        'enigmaticlegacy:evil_essence',
        'goety:cursed_ingot',
        'goety:cursed_ingot'
    ])
    .soulCost(1000);

    event.recipes.goety.brazier('enigmaticlegacy:evil_ingot', [
        'enigmaticlegacy:evil_essence',
        'enigmaticlegacy:evil_essence',
        'enigmaticlegacy:evil_essence',
        'minecraft:netherite_ingot'
    ])
    .soulCost(1000);

});