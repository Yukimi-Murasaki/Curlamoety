GoetyEvents.registerRitual(event => {
    // event.create(ritualId, builder)
    // - ritualId: 仪式的唯一标识符（字符串）
    // - builder: 构建器函数，接收一个 ritual 对象
    
    event.create('witch', ritual => {
        ritual.blocks = [
            'goety:witch_cauldron',
            'goety:haunted_jug',
            'goety:witch_pole',
            'minecraft:cauldron',
            'minecraft:brewing_stand',
            'curlamoety:witch_desk'
        ];
        ritual.setJeiIcon('goety:witch_hat');
    });

    event.create('twilight',ritual =>{
        ritual.blocks = [
            '16x #twilightforest:twilight_oak_logs',
            '16x twilightforest:twilight_oak_leaves',
            '4x twilightforest:ironwood_block',
            '4x twilightforest:steeleaf_block'
        ];
        ritual.setDimension("twilightforest:twilight_forest");
        ritual.setJeiIcon('twilightforest:twilight_oak_sapling');
    })

    event.create("evernight",ritual=>{
        ritual.blocks = [
            'goety:night_beacon',
            '4x goety:dark_metal_block',
            '8x minecraft:sculk_catalyst',
            '16x goety:skull_pile',
            '64x minecraft:sculk'
        ];
        ritual.setBiome("twilightforest:final_plateau")
        ritual.setJeiIcon('goety:night_beacon')
    })

    event.create("chef",ritual=>{
        ritual.blocks = [
            'goetydelight:night_stove',
            'enigmaticdelicacy:etherium_stove',
            '2x goetydelight:cursed_ingot_pot',
            '2x farmersdelight:cutting_board',
            '64x minecraft:smoker',
            '16x minecraft:lava_cauldron'
        ];
        ritual.setJeiIcon('enigmaticdelicacy:divine_fruit_pie_block')
    })

})