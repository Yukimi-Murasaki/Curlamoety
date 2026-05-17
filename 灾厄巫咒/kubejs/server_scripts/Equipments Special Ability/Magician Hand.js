ItemEvents.entityInteracted('curlamoety:magician_hand',event=>{//魔术师之手
    let{player,target}=event
    if(!target.isLiving())return;
    let{x,y,z} = player
    let x1 = target.x
    let y1 = target.y
    let z1 = target.z
    let stealing = 0
    let type = target.type
    let item = null
    let chance = Math.random()
    //战利品表
    if(type == "minecraft:zombie"||type == "minecraft:husk"||type == "goety:frayed" ||type == "goetyawaken:jungle_zombie"||type == "goetyawaken:frozen_zombie"||type == "goetyawaken:bouldering_zombie"){//僵尸类
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.03){
                item = Item.of("curlamoety:zombie_arm")
                stealing = 3
            }else if(chance<0.33){
                item = Item.of("2x minecraft:rotten_flesh")
                stealing = 3
            }else if(chance<0.43){
                item = target.getItemBySlot("mainhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("mainhand","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.53){
                item = target.getItemBySlot("offhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("offhand","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.63){
                item = target.getItemBySlot("head")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("head","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.73){
                item = target.getItemBySlot("chest")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("chest","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.83){
                item = target.getItemBySlot("legs")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("legs","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.93){
                item = target.getItemBySlot("feet")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("feet","minecraft:air")
                    stealing = 3
                }
            }
        }else{
            stealing = 1
        }
    }else if(type == "minecraft:drowned"){//溺尸
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.03){
                item = Item.of("minecraft:trident")
                stealing = 3
            }else if(chance<0.33){
                item = Item.of("2x minecraft:rotten_flesh")
                stealing = 3
            }else if(chance<0.43){
                item = target.getItemBySlot("mainhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("mainhand","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.53){
                item = target.getItemBySlot("offhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("offhand","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.63){
                item = target.getItemBySlot("head")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("head","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.73){
                item = target.getItemBySlot("chest")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("chest","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.83){
                item = target.getItemBySlot("legs")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("legs","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.93){
                item = target.getItemBySlot("feet")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("feet","minecraft:air")
                    stealing = 3
                }
            }
        }else{
            stealing = 1
        }
    }else if(type == "minecraft:skeleton"||type == "minecraft:stray"||type == "goety:rattled" ||type == "goetyawaken:parched"||type == "goetyawaken:sunken_skeleton"||type == "twilightforest:skeleton_druid"||type == "trials:bogged"){//骷髅类
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.03){
                item = Item.of("curlamoety:skeleton_leg")
                stealing = 3
            }else if(chance<0.33){
                item = Item.of("2x minecraft:bones")
                stealing = 3
            }else if(chance<0.43){
                item = target.getItemBySlot("mainhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("mainhand","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.53){
                item = target.getItemBySlot("offhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("offhand","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.63){
                item = target.getItemBySlot("head")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("head","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.73){
                item = target.getItemBySlot("chest")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("chest","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.83){
                item = target.getItemBySlot("legs")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("legs","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.93){
                item = target.getItemBySlot("feet")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("feet","minecraft:air")
                    stealing = 3
                }
            }
        }else{
            stealing = 1
        }
    }else if(type == "minecraft:wither_skeleton"){//凋灵骷髅
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.03){
                item = Item.of("curlamoety:wither_flamberge")
                stealing = 3
            }else if(chance<0.33){
                item = Item.of("2x minecraft:bones")
                stealing = 3
            }else if(chance<0.43){
                item = target.getItemBySlot("mainhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("mainhand","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.53){
                item = target.getItemBySlot("offhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("offhand","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.63){
                item = target.getItemBySlot("head")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("head","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.73){
                item = target.getItemBySlot("chest")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("chest","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.83){
                item = target.getItemBySlot("legs")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("legs","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.93){
                item = target.getItemBySlot("feet")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("feet","minecraft:air")
                    stealing = 3
                }
            }
        }else{
            stealing = 1
        }
    }else if(type == "minecraft:zombified_piglin"||type == "minecraft:piglin"||type == "minecraft:piglin_brute"){//猪灵类
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.33){
                item = Item.of("minecraft:gold_ingot")
                stealing = 3
            }else if(chance<0.43){
                item = target.getItemBySlot("mainhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("mainhand","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.53){
                item = target.getItemBySlot("offhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("offhand","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.63){
                item = target.getItemBySlot("head")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("head","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.73){
                item = target.getItemBySlot("chest")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("chest","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.83){
                item = target.getItemBySlot("legs")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("legs","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.93){
                item = target.getItemBySlot("feet")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("feet","minecraft:air")
                    stealing = 3
                }
            }
        }else{
            stealing = 1
        }
    }else if(type == "minecraft:pillager"||type == "minecraft:vindictor"||type == "goety:inquillager"||type == "goety:conquillager"||type == "minecraft:vindictor"){//一般灾厄村民（有手持）
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.3){
                item = Item.of("2x minecraft:emerald")
                stealing = 3
            }else if(chance<0.4){
                item = target.getItemBySlot("mainhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("mainhand","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.5){
                item = target.getItemBySlot("offhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("offhand","minecraft:air")
                    stealing = 3
                }
            }
        }else{
            stealing = 1
        }
    }else if(type == "goety:piker" ){//长矛兵
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.2){
                item = Item.of("2x minecraft:emerald")
                stealing = 3
            }else if(chance<0.4){
                item = Item.of("minecraft:iron_ingot")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "goety:crusher" ){//粉碎者
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.03){
                item = Item.of('goety:stormlander')
                stealing = 3
            }else if(chance<0.1){
                item = Item.of('goety:great_hammer')
                stealing = 3
            }else if(chance<0.3){
                item = Item.of("2x minecraft:emerald")
                stealing = 3
            }else if(chance<0.5){
                item = Item.of("2x minecraft:iron_ingot")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "minecraft:invoker"||type == "goety:storm_caster" ||type == "goety:cryologer" ||type == "goety:envioker" ||type == "goety:sorcerer" ){//法师类
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.05){
                item = Item.of("minecraft:totem_of_undying")
                stealing = 3
            }else if(chance<0.35){
                item = Item.of("2x goety:magic_emerald")
                stealing = 3
            }else if(chance<0.45){
                item = target.getItemBySlot("mainhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("mainhand","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.55){
                item = target.getItemBySlot("offhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("offhand","minecraft:air")
                    stealing = 3
                }
            }
        }else{
            stealing = 1
        }
    }else if(type == "minecraft:witch"||type == "goety:maverick"||type == "goety:reprobate"){//女巫类
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.05){
                item = Item.of("goety:witch_hat")
                stealing = 3
            }else if(chance<0.35){
                item = Item.of("2x minecraft:nether_wart")
                stealing = 3
            }else if(chance<0.5){
                item = Item.of("minecraft:fermented_spider_eye")
                stealing = 3
            }else if(chance<0.7){
                item = Item.of("2x minecraft:sugar")
                stealing = 3
            }else if(chance<0.75){
                item = Item.of("minecraft:golden_apple")
                stealing = 3
            }else if(chance<0.85){
                item = target.getItemBySlot("mainhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("mainhand","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.95){
                item = target.getItemBySlot("offhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("offhand","minecraft:air")
                    stealing = 3
                }
            }
        }else{
            stealing = 1
        }
    }else if(type == "goety:warlock"){//术士
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.02){
                item = Item.of("goety:warlock_robe")
                stealing = 3
            }else if(chance<0.05){
                item = Item.of("goety:warlock_sash")
                stealing = 3
            }else if(chance<0.35){
                item = Item.of("2x minecraft:nether_wart")
                stealing = 3
            }else if(chance<0.55){
                item = Item.of("goety:snap_warts")
                stealing = 3
            }else if(chance<0.75){
                item = Item.of("2x goety:wartful_egg")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "goety:heretic"){//异教徒
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.05){
                item = Item.of("goety:infernal_tome")
                stealing = 3
            }else if(chance<0.35){
                item = Item.of("minecraft:book")
                stealing = 3
            }else if(chance<0.55){
                item = Item.of("2x minecraft:redstone")
                stealing = 3
            }else if(chance<0.75){
                item = Item.of("2x minecraft:gunpowder")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "minecraft:creeper"||type == "goetyawaken:ice_creeper" ){//苦力怕类
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.3){
                item = Item.of("2x minecraft:gunpowder")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "minecraft:spider" ||type == "minecraft:cave_spider"|| type == "goety:web_spider" || type == "goety:bone_spider"|| type == "goety:ice_spider"|| type == "twilightforest:hedge_spider" || type == "twilightforest:king_spider"){//蜘蛛类
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.12){
                item = Item.of("spider_eye")
                stealing = 3
            }else if(chance<0.3){
                item = Item.of("minecraft:cobweb")
                stealing = 3
            }else if(chance<0.6){
                item = Item.of("2x minecraft:string")
                stealing = 3
            }else if(chance<0.7){
                item = Item.of("goety:venomous_fang")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "goetyawaken:hostile_spider_creeder"){//苦力蛛
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.12){
                item = Item.of("spider_eye")
            }else if(chance<0.3){
                item = Item.of("minecraft:cobweb")
            }else if(chance<0.6){
                item = Item.of("2x minecraft:string")
            }else if(chance<0.7){
                item = Item.of("goety:venomous_fang")
            }else{
                item = Item.of('2x minecraft:gunpowder')
            }
        }else{
            stealing = 1
        }
    }else if(type == "goety:wraith"||type == "goety:border_wraith" ||type == "goety:muck_wraith" ||type == "goety:reaper" ){//幽灵类
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.25){
                item = Item.of("goety:ectoplasm")
                stealing = 3
            }else if(chance<0.5){
                item = Item.of("2x goety:grave_dust")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "minecraft:enderman"||type == "goety:watchling"||type == "goety:blastling" ||type == "goety:snareling"){//末影类
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.1){
                item = Item.of("minecraft:ender_eye")
                stealing = 3
            }else if(chance<0.25){
                item = Item.of("minecraft:ender_pearl")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "goety:haunted_armor" ||type == "goety:bone_lord" ||type =="twilightforest:snow_guardian" ){//甲胄类
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.1){
                item = target.getItemBySlot("mainhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("mainhand","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.2){
                item = target.getItemBySlot("offhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("offhand","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.3){
                item = target.getItemBySlot("head")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("head","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.4){
                item = target.getItemBySlot("chest")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("chest","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.5){
                item = target.getItemBySlot("legs")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("legs","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.6){
                item = target.getItemBySlot("feet")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("feet","minecraft:air")
                    stealing = 3
                }
            }
        }else{
            stealing = 1
        }
    }else if(type == "goety:necromancer" ||type == "goety:cairn_necromancer" ||type == "goety:mossy_necromancer" ||type == "goetyawaken:hostile_drowned_necromancer"||type == "goetyawaken:parched_necromancer"||type == "goetyawaken:wraith_necromancer"){//死法类
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.01){
                item = Item.of("goety:necro_staff")
            }else if(chance<0.02){
                item = Item.of("goety:necro_crown")
            }else if(chance<0.03){
                item = Item.of("goety:necro_cape")
            }else if(chance<0.1){
                item = Item.of("goety:forbidden_fragment")
            }else if(chance<0.25){
                item = Item.of("3x goety:forbidden_piece")
            }else if(chance<0.5){
                item = Item.of("2x goety:forbidden_piece")
            }else{
                item = Item.of("2x goety:ectoplasm")
            }
        }else{
            stealing = 1
        }
    }else if(type == "goety:wither_necromancer"){//凋灵死法
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.01){
                item = Item.of("goety:nether_staff")
            }else if(chance<0.02){
                item = Item.of("goety:nether_crown")
            }else if(chance<0.03){
                item = Item.of("goety:nether_robe")
            }else if(chance<0.1){
                item = Item.of("minecraft:ancient_debris")
            }else if(chance<0.25){
                item = Item.of("minecraft:netherite_scrap")
            }else if(chance<0.5){
                item = Item.of("2x minecraft:blaze_rod")
            }else{
                item = Item.of("2x goety:ectoplasm")
            }
        }else{
            stealing = 1
        }
    }else if(type == "goety:crone"){//巫婆
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.01){
                item = Item.of("goety:crone_hat")
            }else if(chance<0.2){
                item = Item.of("goety:witch_hat")
            }else if(chance<0.3){
                item = Item.of("goety:witch_cauldron")
            }else if(chance<0.4){
                item = Item.of("goety:cauldron_ladle")
            }else if(chance<0.6){
                item = Item.of("4x minecraft:nether_wart")
            }else if(chance<0.8){
                item = Item.of("2x minecraft:book")
            }else{
                item = Item.of("minecraft:brewing_stand")
            }
        }else{
            stealing = 1
        }
    }else if(type == "goety:minister" ){//教父
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.01){
                item = Item.of("goety:ominous_staff")
            }else if(chance<0.1){
                item = Item.of("goety:ominous_orb")
            }else if(chance<0.3){
                item = Item.of("goety:ominous_shard")
            }else if(chance<0.5){
                item = Item.of("4x goety:magic_emerald")
            }else if(chance<0.7){
                item = Item.of("2x goety:pale_steel_ingot")
            }else{
                item = Item.of("2x goety:magic_emerald")
            }
        }else{
            stealing = 1
        }
    }else if(type == "goety:skull_lord" ){//骷髅领主
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.1){
                item = Item.of("minecraft:skeleton_skull")
            }else if(chance<0.3){
                item = Item.of("goety:forbidden_fragment")
            }else if(chance<0.6){
                item = Item.of("3x goety:forbidden_piece")
            }else{
                item = Item.of("2x goety:forbidden_piece")
            }
        }else{
            stealing = 1
        }
    }else if(type == "goety:redstone_golem"){//红石傀儡
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.1){
                item = Item.of("3x minecraft:diamond")
            }else if(chance<0.25){
                item = Item.of("2x minecraft:diamond")
            }else if(chance<0.6){
                item = Item.of("minecraft:redstone_block")
            }else{
                item = Item.of("5x minecraft:stone")
            }
        }else{
            stealing = 1
        }
    }else if(type == "goety:hostile_redstone_monstrosity"){//红石巨兽
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.1){
                item = Item.of("7x minecraft:diamond")
            }else if(chance<0.25){
                item = Item.of("5x minecraft:diamond")
            }else if(chance<0.6){
                item = Item.of("3x minecraft:redstone_block")
            }else{
                item = Item.of("20x minecraft:stone")
            }
        }else{
            stealing = 1
        }
    }else if(type == "goety:wight"){//孤魂尸鬼
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.2){
                item = Item.of("2x minecraft:ender_pearl")
            }else if(chance<0.6){
                item = Item.of("goety:shadow_essence")
            }else{
                item = Item.of("3x goety:ectoplasm")
            }
        }else{
            stealing = 1
        }
    }else if(type == "goety:brood_mother"){//育母蜘蛛
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.3){
                item = Item.of("2x goety_revelation:spider_fang")
            }else if(chance<0.3){
                item = Item.of("2x minecraft:cobweb")
            }else{
                item = Item.of("3x goety:venomous_fang")
            }
        }else{
            stealing = 1
        }
    }else if(type == "goety:endersent"){//末影遣使
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.1){
                item = Item.of("goety:void_shard")
            }else if(chance<0.5){
                item = Item.of("minecraft:ender_eye")
            }else{
                item = Item.of("3x minecraft:ender_pearl")
            }
        }else{
            stealing = 1
        }
    }else if(type == "goety:apostle"){//使徒
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.01){
                item = Item.of("goety_revelation:broken_halo")
            }else if(chance<0.02){
                item = Item.of("goety:unholy_hat")
            }else if(chance<0.03){
                item = Item.of("goety:unholy_robe")
            }else if(chance<0.04){
                item = target.getItemBySlot("mainhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("mainhand","minecraft:air")
                }else{
                    stealing = 2
                }
            }else if(chance<0.5){
                item = Item.of("minecraft:ancient_debris")
            }else{
                item = Item.of("curlamoety:unholy_pants")
                stealing = 4
            }
        }else{
            stealing = 1
        }
    }else if(type == "goety:vizier"){//宰相
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.01){
                item = Item.of("goety:ominous_staff")
            }else if(chance<0.02){
                item = Item.of("goety:grand_turban")
            }else if(chance<0.03){
                item = Item.of("goety:grand_robe")
            }else if(chance<0.1){
                item = Item.of("goetyawaken:royal_scroll")
            }else if(chance<0.3){
                item = Item.of("goety:soul_ruby")
            }else if(chance<0.6){
                item = Item.of("minecraft:totem_of_undying")
            }else{
                item = Item.of("goety:awakened_emerald_block")
            }
        }else{
            stealing = 1
        }
    }else if(type == "goety:ender_keeper"){//EK
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.01){
                item = Item.of("goety:blade_of_ender")
            }else if(chance<0.02){
                item = Item.of("goety_revelation:broken_ender_keeper")
            }else if(chance<0.03){
                item = Item.of("goetyawaken:eye_of_overwatch")
            }else if(chance<0.25){
                item = Item.of("goety:void_echo")
            }else if(chance<0.6){
                item = Item.of("goety:void_shard")
            }else if(chance<0.8){
                item = Item.of("enigmaticlegacy:void_pearl")
            }else{
                item = Item.of("enigmaticlegacy:eye_of_nebula")
            }
        }else{
            stealing = 1
        }
    }else if(type == "goetyawaken:vindicator_chef"){//卫道士厨师
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.01){
                item = Item.of("minecraft:golden_apple")
            }else if(chance<0.03){
                item = Item.of("minecraft:cake")
            }else if(chance<0.2){
                item = Item.of("minecraft:emerald")
            }else if(chance<0.3){
                item = Item.of("minecraft:cooked_beef")
            }else if(chance<0.4){
                item = Item.of("minecraft:cooked_porkchop")
            }else if(chance<0.5){
                item = Item.of("minecraft:honey_bottle")
            }else if(chance<0.6){
                item = Item.of("minecraft:cooked_salmon")
            }else if(chance<0.7){
                item = Item.of("minecraft:baked_potato")
            }else if(chance<0.8){
                item = Item.of("minecraft:cooked_mutton")
            }else if(chance<0.9){
                item = Item.of("minecraft:cooked_cod")
            }else{
                item = target.getItemBySlot("mainhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("mainhand","minecraft:air")
                }
            }
        }else{
            stealing = 1
        }
    }else if(type == "goetyawaken:royal_guard"){//皇家守卫
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.03){
                item = Item.of("goetyawaken:mace")
                stealing = 3
            }else if(chance<0.13){
                item = Item.of("minecraft:shield")
                stealing = 3
            }else if(chance<0.43){
                item = Item.of("3x minecraft:emerald")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "goetyawaken:zombie_darkguard"){//僵尸暗卫
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.01){
                item = Item.of("goety:black_iron_helmet")
                stealing = 3
            }else if(chance<0.02){
                item = Item.of("goety:black_iron_chestplate")
                stealing = 3
            }else if(chance<0.03){
                item = Item.of("goety:black_iron_boots")
                stealing = 3
            }else if(chance<0.06){
                item = Item.of("goetyawaken:mace")
                stealing = 3
            }else if(chance<0.16){
                item = Item.of("minecraft:shield")
                stealing = 3
            }else if(chance<0.46){
                item = Item.of("3x minecraft:rotten_flesh")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "goetyawaken:skeleton_vanguard"){//骷髅先锋
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.03){
                item = Item.of("goetyawaken:glaive")
                stealing = 3
            }else if(chance<0.13){
                item = Item.of("minecraft:shield")
                stealing = 3
            }else if(chance<0.43){
                item = Item.of("3x minecraft:bone")
                stealing = 3
            }else if(chance<0.53){
                item = Item.of("minecraft:iron_helmet")
                stealing = 3
            }else if(chance<0.63){
                item = Item.of("minecraft:iron_chestplate")
                stealing = 3
            }else if(chance<0.73){
                item = Item.of("minecraft:iron_boots")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "goetyawaken:hostile_vanguard_champion"){//羸弱后卫
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.005){
                item = Item.of("goetyawaken:champion_helmet")
                stealing = 3
            }else if(chance<0.01){
                item = Item.of("goetyawaken:champion_chestplate")
                stealing = 3
            }else if(chance<0.015){
                item = Item.of("goetyawaken:champion_leggings")
                stealing = 3
            }else if(chance<0.02){
                item = Item.of("goetyawaken:champion_boots")
                stealing = 3
            }else if(chance<0.05){
                item = Item.of("goetyawaken:moonlight_cut")
                stealing = 3
            }else if(chance<0.15){
                item = Item.of("minecraft:shield")
                stealing = 3
            }else if(chance<0.45){
                item = Item.of("3x minecraft:bone")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "minecraft:blaze"|| type == "goetyawaken:hostile_wildfire"){//烈焰人类
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.1){
                item = Item.of("minecraft:blaze_rod")
                stealing = 3
            }else if(chance<0.25){
                item = Item.of("minecraft:blaze_powder")
                stealing = 3
            }else if(chance<0.5){
                item = Item.of("2x minecraft:fire_charge")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "goetyawaken:arch_illusioner"){//高阶幻术师
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.2){
                item = Item.of("goetyawaken:delusive_fragment")
                stealing = 3
            }else if(chance<0.6){
                item = Item.of("4x goety:magic_emerald")
                stealing = 3
            }else {
                item = Item.of("6x minecraft:emerald")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "goetyawaken:nameless_one"){//无名
        if(!target.persistentData.stolen == 1){
            stealing = 6
            if(chance<0.01){
                item = Item.of("goetyawaken:nameless_platinum")
            }else if(chance<0.11){
                item = Item.of("goety:nameless_staff")
            }else if(chance<0.21){
                item = Item.of("goety:nameless_crown")
            }else if(chance<0.31){
                item = Item.of("goety:nameless_cape")
            }else if(chance<0.5){
                item = Item.of("goety:heart_of_the_night")
            }else if(chance<0.7){
                item = Item.of("minecraft:skeleton_skull")
            }else{
                item = Item.of("3x minecraft:bone")
            }
        }else{
            stealing = 7
        }
    }else if(type == "goetyawaken:hostile_mushroom_monstrosity"){//哞菇巨兽
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.01){
                item = Item.of("goetyawaken:mooshroom_monstrosity_head")
            }else if(chance<0.1){
                item = Item.of('2x goetyawaken:superaggregated_mycelial_circuit')
            }else if(chance<0.25){
                item = Item.of('goetyawaken:superaggregated_mycelial_circuit')
            }else if(chance<0.4){
                item = Item.of("4x goetyawaken:mushroom_coated_alloy_block")
            }else if(chance<0.6){
                item = Item.of("2x goetyawaken:mushroom_coated_alloy_block")
            }else if(chance<0.8){
                item = Item.of('goetyawaken:death_cap_mushroom')
            }else{
                item = Item.of('goetyawaken:mushroom_hat')
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:ignited_berserker" || type == "cataclysm:ignited_revenant"){//燃魂类
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.3){
                item = Item.of("cataclysm:dying_ember")
            }else if(chance<0.5){
                item = Item.of("2x minecraft:blaze_rod")
            }else{
                item = Item.of("3x minecraft:blaze_powder")
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:deepling" ||type == "cataclysm:deepling_angler" ||type == "cataclysm:deepling_priest"||type == "cataclysm:deepling_warlock"||type == "cataclysm:deepling_brute"){//渊灵类
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.01){
                item = Item.of("minecraft:nautilus_shell")
                stealing = 3
            }else if(chance<0.31){
                item = Item.of("minecraft:ink_sac")
                stealing = 3
            }else if(chance<0.5){
                item = target.getItemBySlot("mainhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("mainhand","minecraft:air")
                    stealing = 3
                }
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:draugr" ||type == "cataclysm:royal_draugr" ||type == "cataclysm:elite_draugr"){//魂尸类
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.15){
                item = Item.of("2x cataclysm:black_steel_ingot")
            }else if(chance<0.4){
                item = Item.of("cataclysm:black_steel_ingot")
            }else if(chance<0.65){
                item = Item.of("2x minecraft:rotten_flesh")
            }else if(chance<0.9){
                item = Item.of("2x minecraft:bone")
            }else{
                item = target.getItemBySlot("mainhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("mainhand","minecraft:air")
                }
            }
        }else{
            stealing = 1
        }
    }else if(type == "goety_cataclysm:draugr_necromancer"){//魂尸死灵法师
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.01){
                item = Item.of("goety:necro_staff")
            }else if(chance<0.02){
                item = Item.of("goety:necro_cape")
            }else if(chance<0.03){
                item = Item.of("goety:necro_crown")
            }else if(chance<0.23){
                item = Item.of("2x cataclysm:black_steel_ingot")
            }else if(chance<0.5){
                item = Item.of("cataclysm:black_steel_ingot")
            }else if(chance<0.75){
                item = Item.of("2x minecraft:rotten_flesh")
            }else{
                item = Item.of("2x minecraft:bone")
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:aptrgangr"){//冥行武弁
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.05){
                item = Item.of("cataclysm:aptrgangr_head")
            }else if(chance<0.25){
                item = Item.of("2x cataclysm:black_steel_ingot")
            }else if(chance<0.5){
                item = Item.of("cataclysm:black_steel_ingot")
            }else if(chance<0.75){
                item = Item.of("2x minecraft:rotten_flesh")
            }else{
                item = Item.of("2x minecraft:bone")
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:cindaria"){//水母
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.05){
                item = Item.of("minecraft:end_rod")
                stealing = 5
            }else if(chance<0.25){
                item = Item.of("minecraft:honey_bottle")
                stealing = 5
            }else if(chance<0.6){
                item = Item.of("cataclysm:lacrima")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:hippocamtus"){//海马
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.1){
                item = Item.of("minecraft:trident")
                stealing = 3
            }else if(chance<0.2){
                item = Item.of("cataclysm:azure_sea_shield")
                stealing = 3
            }else if(chance<0.5){
                item = Item.of("cataclysm:black_steel_ingot")
                stealing = 3
            }else if(chance<0.85){
                item = Item.of("cataclysm:lacrima")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:clawdian"){//龙虾
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.05){
                item = Item.of("cataclysm:chitin_claw")
            }else if(chance<0.15){
                item = Item.of("goety:great_hammer")
            }else{
                item = Item.of("2x cataclysm:lacrima")
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:the_watcher" ){//观测者
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.05){
                item = Item.of("cataclysm:mech_eye")
                stealing = 3
            }else if(chance<0.3){
                item = Item.of("minecraft:iron_ingot")
                stealing = 3
            }else if(chance<0.7){
                item = Item.of("2x minecraft:redstone")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:the_prawler" ){//徘徊者
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.05){
                item = Item.of("cataclysm:meat_shredder")
                stealing = 3
            }else if(chance<0.3){
                item = Item.of("minecraft:iron_ingot")
                stealing = 3
            }else if(chance<0.7){
                item = Item.of("2x minecraft:redstone")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:amethyst_crab"){//紫水晶巨蟹
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.01){
                item = Item.of("minecraft:amethyst_cluster")
            }else if(chance<0.15){
                item = Item.of("minecraft:amethyst_block")
            }else if(chance<0.35){
                item = Item.of("2x minecraft:amethyst_shard")
            }else if(chance<0.6){
                item = Item.of("cataclysm:amethyst_crab_meat")
            }else{
                item = Item.of("cataclysm:amethyst_crab_shell")
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:ender_golem"){//末影傀儡
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.01){
                item = Item.of("goety_cataclysm:ender_golem_skull")
            }else if(chance<0.1){
                item = Item.of("cataclysm:void_core")
            }else if(chance<0.3){
                item = Item.of("goety:void_block")
            }else if(chance<0.6){
                item = Item.of("4x cataclysm:void_stone")
            }else{
                item = Item.of("6x cataclysm:obsidian_bricks")
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:koboleton" ){//骸龙
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.2){
                item = Item.of("cataclysm:ancient_metal_ingot")
            }else if(chance<0.5){
                item = Item.of("2x cataclysm:koboleton_bone")
            }else if(chance<0.55){
                item = Item.of("cataclysm:vitality_ankh")
            }else if(chance<0.6){
                item = Item.of("cataclysm:unbreakable_skull")
            }else if(chance<0.75){
                item = target.getItemBySlot("mainhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("mainhand","minecraft:air")
                }
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:kobolediator" ){//骸龙斗士
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.15){
                item = Item.of('cataclysm:kobolediator_skull')
            }else if(chance<0.35){
                item = Item.of("2x cataclysm:ancient_metal_ingot")
            }else if(chance<0.6){
                item = Item.of("cataclysm:ancient_metal_ingot")
            }else if(chance<0.7){
                item = Item.of("cataclysm:vitality_ankh")
            }else if(chance<0.8){
                item = Item.of("cataclysm:unbreakable_skull")
            }else{
                item = Item.of("2x cataclysm:koboleton_bone")
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:wadjet" ){//瓦吉特
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.15){
                item = Item.of("cataclysm:ancient_spear")
            }else if(chance<0.35){
                item = Item.of("2x cataclysm:ancient_metal_ingot")
            }else if(chance<0.6){
                item = Item.of("cataclysm:ancient_metal_ingot")
            }else if(chance<0.7){
                item = Item.of("cataclysm:vitality_ankh")
            }else if(chance<0.8){
                item = Item.of("cataclysm:unbreakable_skull")
            }else{
                item = Item.of("2x cataclysm:koboleton_bone")
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:netherite_monstrosity"){//下巨
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.01){
                item = Item.of("goety_cataclysm:netherite_monstrosity_head")
            }else if(chance<0.2){
                item = Item.of("minecraft:netherite_ingot")
            }else if(chance<0.5){
                item = Item.of("ancient_debris")
            }else if(chance<0.8){
                item = Item.of("goety_cataclysm:netherite_plating")
            }else{
                item = Item.of("cataclysm:monstrous_eye")
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:ancient_remnant"){//遗魂
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.05){
                item = Item.of("cataclysm:remnant_skull")
            }else if(chance<0.2){
                item = Item.of("cataclysm:sandstorm_in_a_bottle")
            }else if(chance<0.3){
                item = Item.of("cataclysm:ancient_metal_block")
            }else if(chance<0.4){
                item = Item.of("cataclysm:vitality_ankh")
            }else if(chance<0.5){
                item = Item.of("cataclysm:unbreakable_skull")
            }else{
                item = Item.of("2x goety_cataclysm:ancient_plating")
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:the_harbinger"){//牢先
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.1){
                item = Item.of("minecraft:nether_star")
            }else if(chance<0.2){
                item = Item.of("cataclysm:wither_assault_shoulder_weapon")
            }else if(chance<0.4){
                item = Item.of("cataclysm:laser_gatling")
            }else if(chance<0.7){
                item = Item.of("3x cataclysm:witherite_ingot")
            }else{
                item = Item.of("2x cataclysm:witherite_ingot")
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:ender_guardian"){//末守
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.1){
                item = Item.of("cataclysm:gauntlet_of_guard")
            }else if(chance<0.3){
                item = Item.of("cataclysm:void_core")
            }else if(chance<0.5){
                item = Item.of("shulker_shell")
            }else if(chance<0.75){
                item = Item.of("4x end_stone_bricks")
            }else{
                item = Item.of("4x purpur_block")
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:leviathan"){//利维坦
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.05){
                item = Item.of("cataclysm:abyssal_egg")
            }else if(chance<0.2){
                item = Item.of("goety_cataclysm:abyss_essence")
            }else if(chance<0.5){
                item = Item.of("cataclysm:abyssal_sacrifice")
            }else if(chance<0.6){
                item = Item.of("cataclysm:tidal_claws")
            }else{
                item = Item.of("4x minecraft:crying_obsidian")
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:maledictus"){//灵骸
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.1){
                item = Item.of("cataclysm:cursium_helmet")
            }else if(chance<0.2){
                item = Item.of("cataclysm:cursium_chestplate")
            }else if(chance<0.3){
                item = Item.of("cataclysm:cursium_leggings")
            }else if(chance<0.4){
                item = Item.of("cataclysm:cursium_boots")
            }else if(chance<0.5){
                item = Item.of("cataclysm:soul_render")
            }else if(chance<0.6){
                item = Item.of("cataclysm:cursed_bow")
            }else if(chance<0.7){
                item = Item.of("cataclysm:the_annihilator")
            }else if(chance<0.8){
                item = Item.of("cataclysm:berserker_soul_amulet")
            }else if(chance<0.9){
                item = Item.of("cataclysm:ring_of_grudged")
            }else{
                item = Item.of("cataclysm:cursium_ingot")
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:ignis"){//焰魔
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.15){
                item = Item.of("cataclysm:the_incinerator")
            }else if(chance<0.3){
                item = Item.of("cataclysm:bulwark_of_the_flame")
            }else if(chance<0.4){
                item = Item.of("cataclysm:blazing_grips")
            }else if(chance<0.6){
                item = Item.of("enigmaticlegacy:blazing_core")
            }else if(chance<0.7){
                item = Item.of("cataclysm:ignitium_helmet")
            }else if(chance<0.8){
                item = Item.of("cataclysm:ignitium_chestplate")
            }else if(chance<0.9){
                item = Item.of("cataclysm:ignitium_leggings")
            }else{
                item = Item.of("cataclysm:ignitium_boots")
            }
        }else{
            stealing = 1
        }
    }else if(type == "cataclysm:scylla"){//斯库拉
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.1){
                item = Item.of("cataclysm:astrape")
            }else if(chance<0.2){
                item = Item.of("cataclysm:ceraunus")
            }else if(chance<0.3){
                item = Item.of("cataclysm:essence_of_the_storm")
            }else if(chance<0.5){
                item = Item.of("2x cataclysm:lacrima")
            }else{
                item = Item.of("curlamoety:storm_pants") //占位符：风暴的神秘
                stealing = 8
            }
        }else{
            stealing = 1
        }
    }else if(type == "touhou_little_maid:fairy"){//女仆妖精
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.25){
                if(JSON.stringify(target.customName) == JSON.stringify(Text.of("rick"))){
                    item = Item.of("leather_boots")
                    stealing = 10
                }else{
                    item = Item.of("curlamoety:mini_pants")
                    stealing = 9
                }
            }else if(chance<0.35){
                item = Item.of("minecraft:apple")
                stealing = 3
            }else if(chance<0.65){
                item = Item.of("touhou_little_maid:power_point")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "minecraft:guardian"){//守卫者
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.01){
                item = Item.of("minecraft:nautilus_shell")
                stealing = 3
            }else if(chance<0.06){
                item = Item.of("minecraft:trident")
                stealing = 3
            }else if(chance<0.26){
                item = Item.of("2x prismarine_shard")
                stealing = 3
            }else if(chance<0.46){
                item = Item.of("prismarine_crystals")
                stealing = 3
            }else if(chance<0.06){
                item = Item.of("minecraft:trident")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "minecraft:elder_guardian" ){//远古守卫者
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.05){
                item = Item.of("minecraft:heart_of_the_sea")
            }else if(chance<0.15){
                item = Item.of("minecraft:nautilus_shell")
            }else if(chance<0.35){
                item = Item.of("minecraft:trident")
            }else if(chance<0.5){
                item = Item.of("tide_armor_trim_smithing_template")
            }else{
                item = Item.of("minecraft:wet_sponge")
            }
        }else{
            stealing = 1
        }
    }else if(type == "minecraft:ender_dragon"){//末影龙
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.05){
                item = Item.of("minecraft:dragon_egg")
            }else if(chance<0.15){
                item = Item.of("minecraft:dragon_head")
            }else if(chance<0.5){
                item = Item.of("minecraft:end_crystal")
            }else{
                item = Item.of("minecraft:dragon_breath")
            }
        }else{
            stealing = 1
        }
    }else if(type == "minecraft:wither"){//凋灵
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.05){
                item = Item.of("minecraft:nether_star")
            }else if(chance<0.25){
                item = Item.of("minecraft:wither_skeleton_skull")
            }else if(chance<0.55){
                item = Item.of("2x minecraft:wither_rose")
            }else{
                item = Item.of("minecraft:wither_rose")
            }
        }else{
            stealing = 1
        }
    }else if(type == "minecraft:warden"){//监守者
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.01){
                item = Item.of("goety:sonic_boom_focus")
            }else if(chance<0.05){
                item = Item.of("goetydelight:soul_convergence_room")
            }else if(chance<0.15){
                item = Item.of("goetydelight:gathering_soul_embryos")
            }else if(chance<0.3){
                item = Item.of("minecraft:sculk_catalyst")
            }else if(chance<0.6){
                item = Item.of("minecraft:echo_shard")
            }else{
                item = Item.of("sculk_sensor")
            }
        }else{
            stealing = 1
        }
    }else if(type == "twilightforest:naga"){//娜迦
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.01){
                item = Item.of("twilightforest:naga_trophy")
            }else if(chance<0.11){
                item = Item.of('twilightforest:naga_chestplate').enchant('minecraft:fire_protection', 3)
            }else if(chance<0.21){
                item = Item.of('twilightforest:naga_leggings').enchant('minecraft:protection', 3)
            }else if(chance<0.4){
                item = Item.of("minecraft:scute")
            }else if(chance<0.7){
                item = Item.of("2x twilightforest:naga_scale")
            }else{
                item = Item.of("twilightforest:naga_scale")
            }
        }else{
            stealing = 1
        }
    }else if(type == "twilightforest:lich"){//巫妖
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.01){
                item = Item.of("twilightforest:lich_trophy")
            }else if(chance<0.1){
                item = Item.of("twilightforest:zombie_scepter")
            }else if(chance<0.19){
                item = Item.of("twilightforest:twilight_scepter")
            }else if(chance<0.28){
                item = Item.of("twilightforest:lifedrain_scepter")
            }else if(chance<0.37){
                item = Item.of("twilightforest:fortification_scepter")
            }else if(chance<0.46){
                item = Item.of("minecraft:golden_sword")
            }else if(chance<0.55){
                item = Item.of("minecraft:golden_helmet")
            }else if(chance<0.64){
                item = Item.of("minecraft:golden_chestplate")
            }else if(chance<0.73){
                item = Item.of("minecraft:golden_leggings")
            }else if(chance<0.82){
                item = Item.of("minecraft:golden_boots")
            }else if(chance<0.91){
                item = Item.of("2x minecraft:ender_pearl")
            }else{
                item = Item.of("3x minecraft:bone")
            }
        }else{
            stealing = 1
        }
    }else if(type == "twilightforest:alpha_yeti"){//雪怪首领
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.01){
                item = Item.of("twilightforest:alpha_yeti_trophy")
            }else if(chance<0.2){
                item = Item.of("2x twilightforest:alpha_yeti_fur")
            }else if(chance<0.45){
                item = Item.of("twilightforest:alpha_yeti_fur")
            }else if(chance<0.7){
                item = Item.of('twilightforest:yeti_helmet').enchant('minecraft:protection', 2)
            }else if(chance<0.8){
                item = Item.of('twilightforest:yeti_chestplate').enchant('minecraft:protection', 2)
            }else if(chance<0.9){
                item = Item.of('twilightforest:yeti_leggings').enchant('minecraft:protection', 2)
            }else{
                item = Item.of('twilightforest:yeti_boots').enchant('minecraft:protection', 2).enchant('minecraft:feather_falling', 4)
            }
        }else{
            stealing = 1
        }
    }else if(type == "twilightforest:yeti" ||type == "twilightforest:winter_wolf" ){//雪怪、冰狼
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.25){
                item = Item.of("twilightforest:arctic_fur")
                stealing = 3
            }else if(chance<0.33){
                item = Item.of("twilightforest:arctic_helmet")
                stealing = 3
            }else if(chance<0.41){
                item = Item.of("twilightforest:arctic_chestplate")
                stealing = 3
            }else if(chance<0.49){
                item = Item.of("twilightforest:arctic_leggings")
                stealing = 3
            }else if(chance<0.57){
                item = Item.of("twilightforest:arctic_boots")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "twilightforest:snow_queen"){//冰雪女王
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.01){
                item = Item.of("twilightforest:snow_queen_trophy")
            }else if(chance<0.16){
                item = Item.of("twilightforest:triple_bow")
            }else if(chance<0.31){
                item = Item.of("twilightforest:seeker_bow")
            }else if(chance<0.5){
                item = Item.of("5x minecraft:ice")
            }else{
                item = Item.of("curlamoety:snow_pants")
                stealing = 11
            }
        }else{
            stealing = 1
        }
    }else if(type == "twilightforest:minoshroom"){//米诺菇
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.01){
                item = Item.of("twilightforest:minoshroom_trophy")
            }else if(chance<0.16){
                item = target.getItemBySlot("mainhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("mainhand","minecraft:air")
                }else{
                    stealing = 2
                }
            }else if(chance<0.28){
                item = Item.of("twilightforest:meef_stroganoff")
            }else if(chance<0.5){
                item = Item.of("3x twilightforest:raw_meef")
            }else{
                item = Item.of("2x twilightforest:raw_meef")
            }
        }else{
            stealing = 1
        }
    }else if(type == "twilightforest:minotaur"){//米诺陶
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.15){
                item = target.getItemBySlot("mainhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("mainhand","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.16){
                item = Item.of("twilightforest:maze_map_focus")
            }else if(chance<0.3){
                item = Item.of("2x twilightforest:raw_meef")
                stealing = 3
            }else if(chance<0.5){
                item = Item.of("twilightforest:raw_meef")
                stealing = 3
            }
        }else{
            stealing = 1
        }
    }else if(type == "twilightforest:knight_phantom"){//幻影骑士
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.15){
                item = target.getItemBySlot("mainhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("mainhand","minecraft:air")
                }else{
                    stealing = 2
                }
            }else if(chance<0.3){
                item = target.getItemBySlot("head")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("head","minecraft:air")
                }else{
                    stealing = 2
                }
            }else if(chance<0.45){
                item = target.getItemBySlot("chest")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("chest","minecraft:air")
                }else{
                    stealing = 2
                }
            }else if(chance<0.6){
                item = Item.of("2x twilightforest:knightmetal_ingot")
            }else if(chance<0.8){
                item = Item.of("twilightforest:armor_shard_cluster")
            }else{
                item = Item.of("4x twilightforest:armor_shard")
            }
        }else{
            stealing = 1
        }
    }else if(type == "twilightforest:hydra"){//九头蛇
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.01){
                item = Item.of("twilightforest:hydra_trophy")
            }else if(chance<0.2){
                item = Item.of("2x twilightforest:fiery_blood")
            }else if(chance<0.45){
                item = Item.of("twilightforest:fiery_blood")
            }else if(chance<0.7){
                item = Item.of("3x twilightforest:hydra_chop")
            }else{
                item = Item.of("2x twilightforest:hydra_chop")
            }
        }else{
            stealing = 1
        }
    }else if(type == "twilightforest:ur_ghast"){//暮初恶魂
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.01){
                item = Item.of("twilightforest:ur_ghast_trophy")
            }else if(chance<0.2){
                item = Item.of("2x twilightforest:fiery_tears")
            }else if(chance<0.45){
                item = Item.of("twilightforest:fiery_tears")
            }else if(chance<0.7){
                item = Item.of("2x twilightforest:carminite")
            }else{
                item = Item.of("2x twilightforest:experiment_115")
            }
        }else{
            stealing = 1
        }
    }else if(type == "minecraft:iron_golem"||type == "twilightforest:carminite_golem"){//铁傀儡
        if(!target.persistentData.stolen == 1){
            stealing = 3
            item = Item.of("minecraft:iron_ingot")
        }else{
            stealing = 1
        }
    }else if(type == "twilightforest:giant_miner"||type == "twilightforest:armored_giant"){//巨人
        if(!target.persistentData.stolen == 1){
            stealing = 2
            if(chance<0.2){
                item = Item.of("twilightforest:giant_log")
                stealing = 3
            }else if(chance<0.4){
                item = Item.of("twilightforest:giant_cobblestone")
                stealing = 3
            }else if(chance<0.5){
                item = target.getItemBySlot("mainhand")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("mainhand","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.6){
                item = target.getItemBySlot("head")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("head","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.7){
                item = target.getItemBySlot("chest")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("chest","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.8){
                item = target.getItemBySlot("legs")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("legs","minecraft:air")
                    stealing = 3
                }
            }else if(chance<0.9){
                item = target.getItemBySlot("feet")
                if(item != null&&item.id != "minecraft:air"){
                    target.setItemSlot("feet","minecraft:air")
                    stealing = 3
                }
            }
        }else{
            stealing = 1
        }
    }else if(type == "goety:heresiarch"){//异教首领
        if(!target.persistentData.stolen == 1){
            stealing = 3
            if(chance<0.1){
                item = Item.of("goety:malefic_helm")
            }else if(chance<0.25){
                item = Item.of("goety:infernal_tome")
            }else if(chance<0.35){
                item = Item.of("goety:hogging_focus")
            }else if(chance<0.45){
                item = Item.of("goety:fire_blast_focus")
            }else if(chance<0.6){
                item = Item.of("2x minecraft:magma_cream")
            }else if(chance<0.8){
                item = Item.of("2x minecraft:golden_carrot")
            }else{
                item = Item.of("3x minecraft:book")
            }
        }else{
            stealing = 1
        }
    }
        
    //结算阶段
    if(stealing == 3){//成功
        event.level.playSound(null,x,y,z,'entity.player.levelup','players',0.5,1)
        player.give(item)
        player.setStatusMessage(Text.green(Text.translate("curlamoety.lang.steal_success")).append(Text.of(item.displayName)))
        target.persistentData.stolen = 1
    }else if(stealing == 2){//失败
        event.level.playSound(null,x,y,z,'item.shield.block','players',0.3,1)
        player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.steal_failure")))
        target.persistentData.stolen = 1
    }else if(stealing == 1){//偷过了
        event.level.playSound(null,x,y,z,'minecraft:block.wool.break','players',1,1)
        player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.stolen")))
    }else if(stealing == 0){//不可偷
        event.level.playSound(null,x,y,z,'minecraft:block.wool.break','players',1,1)
        player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.unstealable")))
    }else if(stealing == 4){//使徒
        event.level.playSound(null,x,y,z,'ui.toast.challenge_complete','players',1,1)
        player.give(item)
        player.setStatusMessage(Text.darkRed(Text.translate("curlamoety.lang.steal_apostle").bold()))
        target.persistentData.stolen = 1
    }else if(stealing == 5){//水母
        event.level.playSound(null,x1,y1,z1,"minecraft:item.honey_bottle.drink",'players',1,1)
        player.give(item)
        player.setStatusMessage(Text.lightPurple(Text.of(";(/>//</);").bold().append(Text.translate("curlamoety.lang.steal_cindaria"))))
        target.persistentData.stolen = 1
    }else if(stealing == 6){//无名
        event.level.playSound(null,x1,y1,z1,"goetyawaken:nameless_one_hurt_2",'players',1,1)
        player.give(item)
        let chance2 = Math.random()
        if(chance2<0.25){
            player.setStatusMessage(Text.green(Text.translate("curlamoety.lang.steal_nameless_0")))
        }else if(chance2<0.5){
            player.setStatusMessage(Text.green(Text.translate("curlamoety.lang.steal_nameless_1")))
        }else if(chance2<0.75){
            player.setStatusMessage(Text.green(Text.translate("curlamoety.lang.steal_nameless_2")))
        }else{
            player.setStatusMessage(Text.green(Text.translate("curlamoety.lang.steal_nameless_3")))
        }
        target.persistentData.stolen = 1
    }else if(stealing == 7){//无名偷过了
        event.level.playSound(null,x1,y1,z1,"goetyawaken:nameless_one_laugh_short_1",'players',1,1)
        let chance2 = Math.random()
        if(chance2<0.25){
            player.setStatusMessage(Text.green(Text.translate("curlamoety.lang.stolen_nameless_0")))
        }else if(chance2<0.5){
            player.setStatusMessage(Text.green(Text.translate("curlamoety.lang.stolen_nameless_1")))
        }else if(chance2<0.75){
            player.setStatusMessage(Text.green(Text.translate("curlamoety.lang.stolen_nameless_2")))
        }else{
            player.setStatusMessage(Text.green(Text.translate("curlamoety.lang.stolen_nameless_3")))
        }
    }else if(stealing == 8){//斯库拉
        event.level.playSound(null,x,y,z,'ui.toast.challenge_complete','players',1,1)
        player.give(item)
        player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.steal_scylla")).bold())
        target.potionEffects.add("minecraft:strength",-1,4)
        target.potionEffects.add("minecraft:resistance",-1,1)
        target.potionEffects.add("minecraft:speed",-1,1)
        target.persistentData.stolen = 1
        target.persistentData.angry = 1
        let spawnEntity = event.level.createEntity("minecraft:lightning_bolt")
        spawnEntity.setPosition(x,y,z)
        spawnEntity.spawn()
    }else if(stealing == 9){//女仆妖精
        event.level.playSound(null,x,y,z,'ui.toast.challenge_complete','players',1,1)
        player.give(item)
        player.setStatusMessage(Text.blue("BAKA!").bold())
        target.persistentData.stolen = 1
    }else if(stealing == 10){//Rick
        event.level.playSound(null,x,y,z,'ui.toast.challenge_complete','players',1,1)
        player.give(item)
        player.setStatusMessage(Text.yellow(Text.translate("curlamoety.lang.lied")).bold())
        target.persistentData.stolen = 1
    }else if(stealing == 11){//冰雪女王
        event.level.playSound(null,x,y,z,'ui.toast.challenge_complete','players',1,1)
        player.give(item)
        player.setStatusMessage(Text.darkBlue(Text.translate("curlamoety.lang.steal_snow")).bold())
        target.persistentData.stolen = 1
    }
})