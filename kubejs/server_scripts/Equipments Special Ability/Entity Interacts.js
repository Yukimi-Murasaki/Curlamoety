let $Summoned = Java.loadClass("com.Polarice3.Goety.common.entities.ally.Summoned");
ItemEvents.entityInteracted('curlamoety:shikishin_wand',event=>{//式神魔棒
    let {player,target} = event
    if(!target.isLiving())return;
    if(target instanceof $Summoned && target.getOwner() === player){//如果是仆从
        let {x,y,z} =target
        let max_buff = player.persistentData.max_buff//获取最大强健等级记录
        let buff = target.getEffect('goety:buff')//获取仆从强健
        if(!buff){//无强健
            event.level.playSound(null,x,y,z,'minecraft:block.enchantment_table.use','players',1,1)
            player.setStatusMessage(Text.yellow(Text.translatable("curlamoety.lang.max_buff_now")).append(Text.green(max_buff+1)))
        }else{//有强健
            let buff_level = buff.amplifier//读取等级
            if(buff_level <= max_buff){//等级不高于记录
                event.level.playSound(null,x,y,z,'minecraft:block.enchantment_table.use','players',1,1)
                player.setStatusMessage(Text.yellow(Text.translatable("curlamoety.lang.max_buff_now")).append(Text.green(max_buff+1)))
            }else if(buff_level > max_buff){//等级高于记录，刷新记录
                event.level.playSound(null,x,y,z,'minecraft:entity.player.levelup','players',1,1)
                max_buff = buff_level
                player.setStatusMessage(Text.yellow(Text.translatable("curlamoety.lang.max_buff")).append(Text.green(max_buff+1)))
                player.persistentData.max_buff = max_buff//上传记录
            }
        }
        let iron_hide = target.getEffect('goety:iron_hide')
        if(!iron_hide){
            event.level.playSound(null,x,y,z,'goety:soul_armor','players',0.5,1)
            event.level.playSound(null,x,y,z,'goety:soul_heal','players',0.5,1)
        }
        target.potionEffects.add('goety:buff',-1,max_buff)
        target.potionEffects.add('goetyawaken:enchantment_sharpness',-1,max_buff)
        target.potionEffects.add('minecraft:health_boost',-1,4)
        target.potionEffects.add('minecraft:resistance',-1,1)
        target.potionEffects.add('goety:iron_hide',-1,7)
        target.potionEffects.add('minecraft:regeneration',-1,3)
        target.potionEffects.add('cataclysm:monstrous',-1,2)
        target.potionEffects.add('goety:radiance',-1,1)
        target.potionEffects.add('minecraft:speed',-1,1)
        target.removeEffect('minecraft:weakness')
        target.removeEffect('goety:sapped')
    }
})
ItemEvents.entityInteracted('curlamoety:inspiration_wand',event=>{//鼓舞魔棒
    let {player,target} = event
    if(!target.isLiving())return;
    if(player.mainHandItem.id =='curlamoety:shikishin_wand' || player.offHandItem.id =='curlamoety:shikishin_wand')return;
    if(target instanceof $Summoned && target.getOwner() === player){
        let {x,y,z} =target
        let buff = target.getEffect('goety:buff')
        let max_buff = player.persistentData.max_buff
        if(!buff){
            event.level.playSound(null,x,y,z,'minecraft:block.enchantment_table.use','players',1,1)
            player.setStatusMessage(Text.yellow(Text.translatable("curlamoety.lang.max_buff_now")).append(Text.green(max_buff+1)))
        }else{
            let buff_level = buff.amplifier
            if(buff_level <= max_buff){
                player.setStatusMessage(Text.yellow(Text.translatable("curlamoety.lang.max_buff_now")).append(Text.green(max_buff+1)))
                event.level.playSound(null,x,y,z,'minecraft:block.enchantment_table.use','players',1,1)
            }else if(buff_level > max_buff){
                event.level.playSound(null,x,y,z,'minecraft:entity.player.levelup','players',1,1)
                max_buff = buff_level
                player.persistentData.max_buff = max_buff
                player.setStatusMessage(Text.yellow(Text.translatable("curlamoety.lang.max_buff_update")).append(Text.green(max_buff+1)))
            }
        }
        let iron_hide = target.getEffect('goety:iron_hide')
        if(!iron_hide){
            event.level.playSound(null,x,y,z,'goety:soul_armor','players',0.5,1)
            event.level.playSound(null,x,y,z,'goety:soul_heal','players',0.5,1)
        }
        target.potionEffects.add('goety:buff',-1,max_buff)
        target.potionEffects.add('minecraft:health_boost',-1,2)
        target.potionEffects.add('minecraft:resistance',-1,1)
        target.potionEffects.add('goety:iron_hide',-1,4)
        target.potionEffects.add('minecraft:regeneration',-1,2)
        target.potionEffects.add('minecraft:speed',-1,0)
        target.removeEffect('minecraft:weakness')
        target.removeEffect('goety:sapped')
    }
})
ItemEvents.entityInteracted('curlamoety:papers_t3',event =>{//笔记交易
    let {target,player,item} = event;
    let {x,y,z} = target;
    if(!target.isLiving())return;
    if(target.type == 'goety:warlock'||target.type == 'goety:warlock_servant'){
        item.count --
        event.level.playSound(null,x,y,z,'goety:warlock_celebrate','players',1,1)
        player.give('goety:warlock_sash')
    }else if(target.type == 'minecraft:witch'||target.type == 'goety:witch_servant'){
        item.count --
        event.level.playSound(null,x,y,z,'minecraft:entity.witch.celebrate','players',1,1)
        player.give('goety:witch_hat')
    }
})
ItemEvents.entityInteracted('curlamoety:prisoner_pickaxe',event=>{//囚犯镐
    let {item,player,target} = event
    if(target.type == 'goety:prisoner'){
        if(target instanceof $Summoned && target.getOwner() === player){
            let enchantLevel = item.getEnchantmentLevel('efficiency')
            target.removeEffect('minecraft:haste')
            target.potionEffects.add('minecraft:haste',-1,enchantLevel)
        }
    }
})

//ItemEvents.entityInteracted("stick",event=>{
//    let target = event.target
//    let name = target.customName.getString()
//    let checkName = Text.translate("curlamoety.lang.enderhero_servant").getString()
//    if(!name)return;
//    event.player.tell(name)
//    event.player.tell(checkName)
//    if(name == checkName){
//        event.player.tell(1)
//    }
//})
