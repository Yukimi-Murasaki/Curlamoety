BlockEvents.rightClicked((event) => {
    const { block, player, hand, item, level, server} = event
    const { x, y, z } = block.pos
    const kuLevel = new Ku.Level(player.level);

    if (hand != 'MAIN_HAND') return// 判断是否为主手 不是主手就退出
    if (block.id == 'goetydelight:metamorphic_scent_grass') {//幻味草催生
        if(item.id == 'minecraft:bone_block'){
            let entity0 = block.createEntity("item")
            entity0.setPosition(x+0.5, y-0.2, z+0.5)
            entity0.item = Item.of('2x goetydelight:metamorphic_scent_grass')
            entity0.spawn()
            let entity1 = block.createEntity("item")
            entity1.setPosition(x+0.5, y-0.2, z+0.5)
            entity1.item = Item.of('1x goetydelight:metamorphic_scent_grass_seeds')
            entity1.spawn()
            if(Math.random(1)<0.05){
                let entity2 = block.createEntity("item")
                entity2.setPosition(x+0.5, y-0.2, z+0.5)
                entity2.item = Item.of('goetydelight:metamorphic_scent_fruit')
                entity2.spawn()
            }
            player.mainHandItem.count--
            level.playSound(null,x,y,z,'minecraft:item.bone_meal.use','players',1,1)
            event.cancel()
        }
        
    }else if (block.id == 'minecraft:raw_gold_block') {//贤者之杖复制粗金块
        if(item.id == 'goety:philosophers_mace'){
            let entity = block.createEntity("item")
            entity.setPosition(x+0.5, y+0.9, z+0.5)
            entity.item = Item.of('minecraft:raw_gold_block')
            entity.spawn()
            item.hurtAndBreak(9,player,living=>{})
            level.playSound(null,x,y,z,'minecraft:block.enchantment_table.use','players',1,1)
        } 
    }else if (block.hasTag('minecraft:logs')){//朽木
        if(block.id != 'goety:rotten_log'){
            if(item.id == 'minecraft:rotten_flesh'){
                if((player.isCuriosEquipped('curlamoety:witch_amulet_tier1'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier2'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier3'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier4'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier5')))
                {
                    block.set('goety:rotten_log')
                    item.count --
                    level.playSound(null,x,y,z,'minecraft:item.honeycomb.wax_on','players',1,1)
                }
            }
        }else if(item.id == 'minecraft:potion'){
            if((player.isCuriosEquipped('curlamoety:witch_amulet_tier1'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier2'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier3'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier4'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier5')))
            {
                let block2 = level.getBlock(x,y+1,z)
                if(block2.id == 'minecraft:air'){
                    if(Math.random(1)<0.5){
                        block2.set('minecraft:red_mushroom')
                    }else{
                        block2.set('minecraft:brown_mushroom')
                    }
                    player.mainHandItem.count--
                    player.give('minecraft:glass_bottle')
                    level.playSound(null,x,y,z,'minecraft:item.bottle.empty','players',1,1)
                }else{
                    player.setStatusMessage(Text.red(Text.translatable("curlamoety.lang.no_mushroom")))
                }
            }
        }
        
    }else if (block.id == 'goety:glow_light') {//萤石粉
        if(item.id == 'goety:cauldron_ladle') {
            if((player.isCuriosEquipped('curlamoety:witch_amulet_tier2'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier3'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier4'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier5')))
            {
                let entity = block.createEntity("item")
                entity.setPosition(x+0.5, y+0.5, z+0.5)
                level.destroyBlock(block.pos,false)
                entity.item = Item.of('minecraft:glowstone_dust')
                entity.spawn()
            }
        }
    }else if (block.hasTag('forge:stone')) {//红石
        if(item.id == 'minecraft:red_dye'){
            if((player.isCuriosEquipped('curlamoety:witch_amulet_tier2'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier3'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier4'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier5')))
            {
                block.set('minecraft:redstone_block')
                player.mainHandItem.count--
                level.playSound(null,x,y,z,'minecraft:item.honeycomb.wax_on','players',1,1)
            }
        }
    }else if (block.id == 'twilightforest:root'){//活根
        if(item.id == 'minecraft:potion'){
            if((player.isCuriosEquipped('curlamoety:witch_amulet_tier2'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier3'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier4'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier5')))
            {
                block.set('twilightforest:liveroot_block')
                player.mainHandItem.count--
                player.give('minecraft:glass_bottle')
                level.playSound(null,x,y,z,'minecraft:item.bottle.empty','players',1,1)
                level.playSound(null,x,y,z,'minecraft:item.bone_meal.use','players',1,1)
            }
        }
    }else if (block.hasTag('minecraft:leaves')){//钢叶
        if(item.id == 'minecraft:iron_ingot'){
            if((player.isCuriosEquipped('curlamoety:witch_amulet_tier2'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier3'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier4'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier5')))
            {
                let entity = block.createEntity("item")
                entity.setPosition(x+0.5, y+0.5, z+0.5)
                level.destroyBlock(block.pos,false)
                entity.item = Item.of('twilightforest:steeleaf_ingot')
                entity.spawn()
                item.count --
            }
        }
    }else if (block.hasTag('minecraft:beehives')){//蜂蜜
        if(item.id == 'minecraft:sugar' && player.offHandItem.id == 'minecraft:glass_bottle')
        {
            if((player.isCuriosEquipped('curlamoety:witch_amulet_tier2'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier3'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier4'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier5')))
            {
                item.count -= 4
                player.offHandItem.count --
                player.give('minecraft:honey_bottle')
                level.playSound(null,x,y,z,'minecraft:item.bottle.fill','players',1,1)
            }
        }
    }else if (block.hasTag('minecraft:wooden_fences')){//烈焰棒
        if((player.isCuriosEquipped('curlamoety:witch_amulet_tier3'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier4'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier5')))
        {
            let block_up =level.getBlock(x,y+1,z)
            let block_down =level.getBlock(x,y-1,z)
            let block_north =level.getBlock(x,y,z-1)
            let block_south =level.getBlock(x,y,z+1)
            let block_east =level.getBlock(x+1,y,z)
            let block_west =level.getBlock(x-1,y,z)
            if(block_up.id == "minecraft:fire"||block_down.id == "minecraft:fire"||block_north.id == "minecraft:fire"||block_south.id == "minecraft:fire"||block_east.id == "minecraft:fire"||block_west.id == "minecraft:fire"){
                let entity = block.createEntity("item")
                entity.setPosition(x+0.5, y+0.5, z+0.5)
                event.getLevel().destroyBlock(block.pos,false)
                entity.item = Item.of('minecraft:blaze_rod')
                entity.spawn()
            }
        }
    }else if (block.hasTag('forge:cobblestone')){//海晶石
        if(item.id == 'minecraft:potion')
        {
            if((player.isCuriosEquipped('curlamoety:witch_amulet_tier3'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier4'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier5')))
            {
                block.set('minecraft:prismarine')
                player.mainHandItem.count--
                player.give('minecraft:glass_bottle')
                level.playSound(null,x,y,z,'minecraft:item.bucket.empty','players',1,1)
            }
        }
        
    }else if (block.id =='minecraft:sand' ){//鳞甲
        if(item.id == 'minecraft:seagrass')
        {
            if((player.isCuriosEquipped('curlamoety:witch_amulet_tier3'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier4'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier5')))
            {
                let entity = block.createEntity("item")
                entity.setPosition(x+0.5, y+0.5, z+0.5)
                event.getLevel().destroyBlock(block.pos,false)
                entity.item = Item.of('minecraft:scute')
                entity.spawn()
                player.mainHandItem.count--
            }
        }
        
    }else if (block.id == 'minecraft:amethyst_block'){//神秘核心
        if(item.id == 'goety:empty_focus')
        {
            if((player.isCuriosEquipped('curlamoety:witch_amulet_tier4'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier5')))
            {
                let entity = block.createEntity("item")
                entity.setPosition(x+0.5, y+0.5, z+0.5)
                event.getLevel().destroyBlock(block.pos,false)
                entity.item = Item.of('4x goety:mystic_core')
                entity.spawn()
                player.mainHandItem.count--
            }
        } 
    }else if (block.hasTag('minecraft:saplings')){//紫颂花
        if(item.id == 'minecraft:purple_dye')
        {
            if((player.isCuriosEquipped('curlamoety:witch_amulet_tier4'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier5')))
            {
                block.set('minecraft:chorus_flower')
                player.mainHandItem.count--
                level.playSound(null,x,y,z,'minecraft:item.bone_meal.use','players',1,1)
            }
        }
    }else if (block.id == 'minecraft:dragon_head'){//龙息
        if(item.id == 'minecraft:glass_bottle')
        {
            if((player.isCuriosEquipped('curlamoety:witch_amulet_tier4'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier5')))
            {
                player.mainHandItem.count--
                player.give('minecraft:dragon_breath')
                level.playSound(null,x,y,z,'minecraft:item.bottle.fill_dragonbreath','players',1,1)
            }
        }
        
    }else if (block.id == 'enigmaticdelicacy:enigmatic_bush') {//神秘果
        if(item.id == 'enigmaticlegacy:infinimeal')
        {
            if(player.isCuriosEquipped('curlamoety:witch_amulet_tier5'))
            {
                let entity = block.createEntity("item")
                entity.setPosition(x+0.5, y-0.2, z+0.5)
                entity.item = Item.of('enigmaticdelicacy:enigmatic_fruit')
                entity.spawn()
                level.playSound(null,x,y,z,'minecraft:item.bone_meal.use','players',1,1)
            }
        }
    }else if (block.id == 'curlamoety:perfect_matter'){//完美物质
        if(item.id == 'goety:philosophers_mace'){
            if((player.isCuriosEquipped('curlamoety:witch_amulet_tier5')))
            {
                let block_up = level.getBlock(x,y+1,z)
                let block_down = level.getBlock(x,y-1,z)
                let block_north = level.getBlock(x,y,z-1)
                let block_south = level.getBlock(x,y,z+1)
                let block_east = level.getBlock(x+1,y,z)
                let block_west = level.getBlock(x-1,y,z)
                let transform = false
                if(block_up.id != "minecraft:air" && block_up.id != 'curlamoety:perfect_matter'){
                    block_up.set('curlamoety:perfect_matter')
                    player.mainHandItem.hurtAndBreak(5,player,living=>{})
                    transform = true
                }
                if(block_down.id != "minecraft:air" && block_down.id != 'curlamoety:perfect_matter'){
                    block_down.set('curlamoety:perfect_matter')
                    player.mainHandItem.hurtAndBreak(5,player,living=>{})
                    transform = true
                }
                if(block_north.id != "minecraft:air" && block_north.id != 'curlamoety:perfect_matter'){
                    block_north.set('curlamoety:perfect_matter')
                    player.mainHandItem.hurtAndBreak(5,player,living=>{})
                    transform = true
                }
                if(block_south.id != "minecraft:air" && block_south.id != 'curlamoety:perfect_matter'){
                    block_south.set('curlamoety:perfect_matter')
                    player.mainHandItem.hurtAndBreak(5,player,living=>{})
                    transform = true
                }
                if(block_east.id != "minecraft:air" && block_east != 'curlamoety:perfect_matter'){
                    block_east.set('curlamoety:perfect_matter')
                    player.mainHandItem.hurtAndBreak(5,player,living=>{})
                    transform = true
                }
                if(block_west.id != "minecraft:air" && block_west.id != 'curlamoety:perfect_matter'){
                    block_west.set('curlamoety:perfect_matter')
                    player.mainHandItem.hurtAndBreak(5,player,living=>{})
                    transform = true
                }
                if(transform){
                    level.playSound(null,x,y,z,'goety:redstone_monstrosity_awaken','players',0.5,2)
                }
            }
        }
        
    }else if ((block.id == 'minecraft:enchanting_table'||block.id =='enchantinginfuser:enchanting_infuser'||block.id == 'enchantinginfuser:advanced_enchanting_infuser')) {//附魔金苹果
        if(item.id == 'minecraft:golden_apple')
        {
            if(player.isCuriosEquipped('curlamoety:witch_amulet_tier5'))
            {
                if(player.experienceLevel >= 30){
                    let entity = block.createEntity("item")
                    entity.setPosition(x+0.5, y+0.7, z+0.5)
                    entity.item = Item.of('minecraft:enchanted_golden_apple')
                    entity.spawn()
                    player.mainHandItem.count--
                    player.giveExperiencePoints(-255)
                    level.playSound(null,x,y,z,'minecraft:block.enchantment_table.use','players',1,1)
                }else{
                    player.setStatusMessage(Text.red(Text.translatable('curlamoety.lang.need_level_30')))
                }
                
            }
        }
        
    }else if (block.id == 'curlamoety:witch_desk' ){//笔记
        if(item.id == 'minecraft:paper'){
            if((player.isCuriosEquipped('curlamoety:witch_amulet_tier1'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier2'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier3'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier4'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier5')))
            {
                
                player.mainHandItem.count--
                player.give('curlamoety:papers_t1')
                level.playSound(null,x,y,z,'enigmaticlegacy:misc.learn','players',1,1)
                level.playSound(null,x,y,z,'minecraft:item.spyglass.use','players',1,1)
            } 
        }else if(item.id == 'enigmaticlegacy:thicc_scroll'){
            if((player.isCuriosEquipped('curlamoety:witch_amulet_tier2'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier3'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier4'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier5')))
            {
                player.mainHandItem.count--
                player.give('curlamoety:papers_t2')
                level.playSound(null,x,y,z,'enigmaticlegacy:misc.learn','players',1,1)
                level.playSound(null,x,y,z,'minecraft:block.brewing_stand.brew','players',1,1)
            } 
        }else if(item.id == 'minecraft:book'){
            if((player.isCuriosEquipped('curlamoety:witch_amulet_tier3'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier4'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier5')))
            {
                player.mainHandItem.count--
                player.give('curlamoety:papers_t3')
                level.playSound(null,x,y,z,'enigmaticlegacy:misc.learn','players',1,1)
                level.playSound(null,x,y,z,'minecraft:block.enchantment_table.use','players',1,1)
            } 
        }else if(item.id == 'goety:forbidden_piece'){
            if((player.isCuriosEquipped('curlamoety:witch_amulet_tier4'))||(player.isCuriosEquipped('curlamoety:witch_amulet_tier5')))
            {
                player.mainHandItem.count--
                player.give('curlamoety:papers_t4')
                level.playSound(null,x,y,z,'enigmaticlegacy:misc.learn','players',1,1)
                level.playSound(null,x,y,z,'minecraft:block.sculk.charge','players',1,1)
                level.playSound(null,x,y,z,'minecraft:block.sculk.spread','players',1,1)
                level.playSound(null,x,y,z,'minecraft:block.sculk_catalyst.bloom','players',1,1)
                level.playSound(null,x,y,z,'minecraft:block.sculk_sensor.clicking','players',1,1)
                level.playSound(null,x,y,z,'minecraft:entity.warden.ambient','players',1,1)
                level.playSound(null,x,y,z,'minecraft:entity.warden.heartbeat','players',1,1)
            } 
        }else if(item.id == 'goety:unholy_fabric'){
            if(player.isCuriosEquipped('curlamoety:witch_amulet_tier5'))
            {
                player.mainHandItem.count--
                player.give('curlamoety:annihilation_ashes')
                level.playSound(null,x,y,z,'enigmaticlegacy:misc.learn','players',1,1)
                level.playSound(null , player.x , player.y , player.z,'curlamoety:calamitas_laugh','players',0.3,1)
            } 
        }
        
    }else if(block.id == 'curlamoety:calamitas_plushie'||block.id == 'curlamoety:calamitas_plushie_maid'){//终灾玩偶
        level.playSound(null,x,y,z,'curlamoety:calamitas_laugh','players',0.5,1.5)
    }else if(block.id == 'minecraft:stone_bricks'){//黑暗之家
        if(item.id == 'curlamoety:blueprint_blackhouse')
        {
            let block_north = level.getBlock(x,y,z-1)
            let block_south = level.getBlock(x,y,z+1)
            let block_east = level.getBlock(x+1,y,z)
            let block_west = level.getBlock(x-1,y,z)
            let oak_count = 0
            let direct = 0 
            if(block_west.id == 'minecraft:dark_oak_log'){
                direct = 0
                oak_count ++
            }
            if(block_north.id == 'minecraft:dark_oak_log'){
                direct = 1
                oak_count ++
            }
            if(block_east.id == 'minecraft:dark_oak_log'){
                direct = 2
                oak_count ++
            }
            if(block_south.id == 'minecraft:dark_oak_log'){
                direct = 3
                oak_count ++
            }
            if(oak_count ==0){
                player.setStatusMessage(Text.red(Text.translatable("curlamoety.lang.no_oak")))
            }else if(oak_count >= 2){
                player.setStatusMessage(Text.red(Text.translatable("curlamoety.lang.too_oak")))
            }else{
                level.playSound(null,x,y,z,'curlamoety:building','players',1,1)
                item.count --
                if(direct == 0){
                    server.runCommandSilent(`fill ${x-38} ${y-10} ${z-23} ${x} ${y+10} ${z+7} minecraft:air`);
                    server.runCommandSilent(`fill ${x-30} ${y-10} ${z+9} ${x-4} ${y+10} ${z+34} minecraft:air`);
                    server.runCommandSilent(`setblock ${x} ${y} ${z} minecraft:structure_block{posX:-38,posY:-10,posZ:-23,name:"curlamoety:blackhouse",mode:"LOAD"}`)
                    server.runCommandSilent(`setblock ${x-4} ${y} ${z+9} minecraft:structure_block{posX:-26,posY:-10,posZ:0,name:"curlamoety:blackritual",mode:"LOAD"}`)
                    server.runCommandSilent(`setblock ${x} ${y-1} ${z} minecraft:redstone_block`)
                    server.runCommandSilent(`setblock ${x-4} ${y-1} ${z+9} minecraft:redstone_block`)
                }else if(direct == 1){
                    server.runCommandSilent(`fill ${x+23} ${y-10} ${z-38} ${x-7} ${y+10} ${z} minecraft:air`);
                    server.runCommandSilent(`fill ${x-7} ${y-10} ${z-30} ${x-32} ${y+10} ${z-4} minecraft:air`);
                    server.runCommandSilent(`setblock ${x} ${y} ${z} minecraft:structure_block{posX:23,posY:-10,posZ:-38,name:"curlamoety:blackhouse",mode:"LOAD",rotation:"CLOCKWISE_90"}`)
                    server.runCommandSilent(`setblock ${x-9} ${y} ${z-4} minecraft:structure_block{posX:0,posY:-10,posZ:-26,name:"curlamoety:blackritual",mode:"LOAD",rotation:"CLOCKWISE_90"}`)
                    server.runCommandSilent(`setblock ${x} ${y-1} ${z} minecraft:redstone_block`)
                    server.runCommandSilent(`setblock ${x-9} ${y-1} ${z-4} minecraft:redstone_block`)
                }else if(direct == 2){
                    server.runCommandSilent(`fill ${x+38} ${y-10} ${z+23} ${x} ${y+10} ${z-7} minecraft:air`);
                    server.runCommandSilent(`fill ${x+30} ${y-10} ${z-9} ${x+4} ${y+10} ${z-34} minecraft:air`);
                    server.runCommandSilent(`setblock ${x} ${y} ${z} minecraft:structure_block{posX:38,posY:-10,posZ:23,name:"curlamoety:blackhouse",mode:"LOAD",rotation:"CLOCKWISE_180"}`)
                    server.runCommandSilent(`setblock ${x+4} ${y} ${z-9} minecraft:structure_block{posX:26,posY:-10,posZ:0,name:"curlamoety:blackritual",mode:"LOAD",rotation:"CLOCKWISE_180"}`)
                    server.runCommandSilent(`setblock ${x} ${y-1} ${z} minecraft:redstone_block`)
                    server.runCommandSilent(`setblock ${x+4} ${y-1} ${z-9} minecraft:redstone_block`)
                }else if(direct == 3){
                    server.runCommandSilent(`fill ${x-23} ${y-10} ${z} ${x+7} ${y+10} ${z+38} minecraft:air`);
                    server.runCommandSilent(`fill ${x+7} ${y-10} ${z+30} ${x+32} ${y+10} ${z+4} minecraft:air`);
                    server.runCommandSilent(`setblock ${x} ${y} ${z} minecraft:structure_block{posX:-23,posY:-10,posZ:0,name:"curlamoety:blackhouse_south",mode:"LOAD"}`)
                    server.runCommandSilent(`setblock ${x+9} ${y} ${z+4} minecraft:structure_block{posX:0,posY:-10,posZ:0,name:"curlamoety:blackritual_south",mode:"LOAD"}`)
                    server.runCommandSilent(`setblock ${x} ${y-1} ${z} minecraft:redstone_block`)
                    server.runCommandSilent(`setblock ${x+9} ${y-1} ${z+4} minecraft:redstone_block`)
                }
            }
        }    
    }else if(block.id == 'farmersdelight:cutting_board'){//自动砧板
        if(item.id == 'curlamoety:blueprint_autochopping'){
            if(player.isCrouching())
            {
                item.count --
                level.playSound(null,x,y,z,'curlamoety:building','players',1,1)
                level.playSound(null,x,y,z,'farmersdelight:block.cutting_board.knife','players',1,1)
                server.runCommandSilent(`fill ${x-2} ${y} ${z-6} ${x+3} ${y+3} ${z} minecraft:air`);
                server.runCommandSilent(`setblock ${x} ${y} ${z} minecraft:structure_block{posX:-2,posY:0,posZ:-6,name:"curlamoety:autochopping",mode:"LOAD"}`)
                server.runCommandSilent(`setblock ${x} ${y} ${z-1} minecraft:redstone_block`)
            }
        }  
    }else if(block.id == 'minecraft:sculk' ){//自动火炉
        if(item.id == 'curlamoety:blueprint_autobrazier'){
            if(player.isCrouching()){
                item.count --
                level.playSound(null,x,y,z,'minecraft:item.flintandsteel.use','players',1,1)
                level.playSound(null,x,y,z,'minecraft:block.fire.ambient','players',1,1)
                level.playSound(null,x,y,z,'curlamoety:building','players',1,1)
                server.runCommandSilent(`fill ${x-3} ${y} ${z-6} ${x+3} ${y+7} ${z} minecraft:air`);
                server.runCommandSilent(`setblock ${x} ${y} ${z} minecraft:structure_block{posX:-3,posY:0,posZ:-6,name:"curlamoety:autobrazier",mode:"LOAD"}`)
                server.runCommandSilent(`setblock ${x} ${y} ${z-1} minecraft:redstone_block`)
            }
        }
    }else if(block.id == 'minecraft:iron_block' ){//发电站
        if(item.id == 'curlamoety:blueprint_powerstation'){
            if(player.isCrouching())
                item.count --
                level.playSound(null,x,y,z,'goety:wraith_fire','players',1,1)
                level.playSound(null,x,y,z,'goety:shock_cast','players',1,1)
                level.playSound(null,x,y,z,'curlamoety:building','players',1,1)
                server.runCommandSilent(`fill ${x-8} ${y} ${z-8} ${x+8} ${y+9} ${z} minecraft:air`);
                server.runCommandSilent(`setblock ${x} ${y} ${z} minecraft:structure_block{posX:-8,posY:0,posZ:-8,name:"curlamoety:powerstation",mode:"LOAD"}`)
                server.runCommandSilent(`setblock ${x} ${y} ${z-1} minecraft:redstone_block`)
        }
    }else if(block.id == 'minecraft:redstone_block'){//巨兽呼叫机
        if(item.id == 'curlamoety:monstrosity_caller'){
            let entity = block.createEntity('goety:hostile_redstone_monstrosity')
            entity.setPosition(x+0.5, y, z+0.5)
            event.getLevel().destroyBlock(block.pos,false)
            entity.spawn()
            level.playSound(null,x,y,z,'goety:redstone_monstrosity_awaken','players',1,1)
            item.count--
        }
    }else if(block.id == 'goetyawaken:mushroom_coated_alloy_block'){//巨兽呼叫机
        if(item.id == 'curlamoety:monstrosity_caller'){
            let entity = block.createEntity('goetyawaken:hostile_mushroom_monstrosity')
            entity.setPosition(x+0.5, y, z+0.5)
            event.getLevel().destroyBlock(block.pos,false)
            entity.spawn()
            level.playSound(null,x,y,z,'goety:redstone_monstrosity_awaken','players',1,1)
            item.count--
        }
    }else if(block.id == 'twilightforest:twilight_oak_chest'||block.id == 'twilightforest:canopy_chest'){//暮色森林
        if(item.id == 'twilightforest:naga_scale'){//娜迦
            if(kuLevel.isStructureAtLocation(block.pos,'twilightforest:naga_courtyard')){
                item.count --
                let block1 = level.getBlock(x,y+1,z)
                level.destroyBlock(block.pos,false)
                block1.set('twilightforest:naga_boss_spawner')
            }else{
                player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.incorrect_structure")))
            }
        }else if(item.hasTag('goetytwilight:lich_scepter')){//巫妖
            if(kuLevel.isStructureAtLocation(block.pos,'twilightforest:lich_tower')){
                item.hurtAndBreak(5,player,living=>{})
                let block1 = level.getBlock(x,y+1,z)
                level.destroyBlock(block.pos,false)
                block1.set('twilightforest:lich_boss_spawner')
            }else{
                player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.incorrect_structure")))
            }
        }else if(item.id == 'twilightforest:triple_bow'||item.id =='twilightforest:seeker_bow'){//冰雪女王
            if(kuLevel.isStructureAtLocation(block.pos,'twilightforest:aurora_palace')){
                item.hurtAndBreak(20,player,living=>{})
                let block1 = level.getBlock(x,y+1,z)
                level.destroyBlock(block.pos,false)
                block1.set('twilightforest:snow_queen_boss_spawner')
            }else{
                player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.incorrect_structure")))
            }
        }else if(item.id == 'twilightforest:alpha_yeti_fur'){//雪怪首领
            if(kuLevel.isStructureAtLocation(block.pos,'twilightforest:yeti_cave')){
                item.count --
                let block1 = level.getBlock(x,y+1,z)
                level.destroyBlock(block.pos,false)
                block1.set('twilightforest:alpha_yeti_boss_spawner')
            }else{
                player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.incorrect_structure")))
            }
        }
    }else if(block.id == 'twilightforest:mangrove_chest'){//暮色森林
        if(item.id == 'twilightforest:meef_stroganoff'){
            if(kuLevel.isStructureAtLocation(block.pos,'twilightforest:labyrinth')){//米诺陶
                item.count --
                let block1 = level.getBlock(x,y+1,z)
                level.destroyBlock(block.pos,false)
                block1.set('twilightforest:minoshroom_boss_spawner')
            }else{
                player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.incorrect_structure")))
            }
        }else if(item.id == 'twilightforest:fiery_blood'){
            if(kuLevel.isStructureAtLocation(block.pos,'twilightforest:hydra_lair')){//九头蛇
                item.count --
                let block1 = level.getBlock(x,y+1,z)
                level.destroyBlock(block.pos,false)
                block1.set('twilightforest:hydra_boss_spawner')
            }else{
                player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.incorrect_structure")))
            }
        }
    }else if(block.id == 'twilightforest:underbrick'){//暮色森林
        if(item.id == 'twilightforest:phantom_helmet'||item.id == 'twilightforest:phantom_chestplate'){//幻影骑士
            if(kuLevel.isStructureAtLocation(block.pos,'twilightforest:knight_stronghold')){
                item.count --
                let block1 = level.getBlock(x,y+1,z)
                level.destroyBlock(block.pos,false)
                block1.set('twilightforest:knight_phantom_boss_spawner')
            }else{
                player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.incorrect_structure")))
            }
            event.cancel()
        }
    }else if(block.id == 'twilightforest:dark_chest'){//暮色森林
        if(item.id == 'twilightforest:fiery_tears'){//暮初恶魂
            if(kuLevel.isStructureAtLocation(block.pos,'twilightforest:dark_tower')){
                item.count --
                let block1 = level.getBlock(x,y+1,z)
                level.destroyBlock(block.pos,false)
                block1.set('twilightforest:ur_ghast_boss_spawner')
            }else{
                player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.incorrect_structure")))
            }
        }
    }else if(block.id == 'goetyawaken:nether_reactor_core'){//量产凋灵
        if(item.id == 'minecraft:nether_star'){
            let entity = block.createEntity('minecraft:wither')
            entity.setPosition(x+0.5,y+1,z+0.5)
            entity.spawn()
            level.playSound(null,x,y,z,'minecraft:entity.wither.ambient','players',1,1)
            item.count --
        }
    }





    //if(item.id== 'minecraft:stick'){
    //    if(block.id == 'minecraft:diamond_block'){
            //
    //    }
    //}


    if(item.id == 'curlamoety:blueprint_blackhouse'){//黑暗之家，非判断  
        if(block.id != 'minecraft:stone_bricks')
        {
            player.setStatusMessage(Text.red(Text.translatable("curlamoety.lang.no_stonebricks")))
        }
    }
})

//else if(block.id == 'twilightforest:violet_force_field'){//无名
//        if(item.id == 'curlamoety:hostile_pea'){
//            item.count -- 
//            server.runCommandSilent(`/summon goetyawaken:nameless_one ${x} ${y+1} ${z}`)
//            level.playSound(null,x,y,z,'goetyawaken:nameless_one_laugh_long_1','players',1,1)
//        }
//    }else if(block.id == 'goety:night_beacon'){//无名仆从
//        if(item.id == 'curlamoety:friendly_pea'){
//            let username = player.username
//            server.runCommandSilent(`/execute as ${username} at ${username} run goety summons summon_tamed goetyawaken:nameless_one_servant ${x} ${y+1} ${z}`)
//            level.playSound(null,x,y,z,'goetyawaken:nameless_one_laugh_long_1','players',1,1)
//        }
//    }
