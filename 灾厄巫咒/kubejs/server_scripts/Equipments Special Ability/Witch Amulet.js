PlayerEvents.tick(event =>{
    if(serverTick != 20)return;
    let player = event.player
    if(player.isCuriosEquipped('curlamoety:witch_amulet_tier5'))
    {
        player.potionEffects.add('goety:bottling',200,4,false,false)
    }else if(player.isCuriosEquipped('curlamoety:witch_amulet_tier4'))
    {
        player.potionEffects.add('goety:bottling',200,3,false,false)
    }else if(player.isCuriosEquipped('curlamoety:witch_amulet_tier3'))
    {
        player.potionEffects.add('goety:bottling',200,2,false,false)
    }else if(player.isCuriosEquipped('curlamoety:witch_amulet_tier2'))
    {
        player.potionEffects.add('goety:bottling',200,1,false,false)
    }else if(player.isCuriosEquipped('curlamoety:witch_amulet_tier1'))
    {
        player.potionEffects.add('goety:bottling',200,0,false,false)
    }
})
ItemEvents.rightClicked(event =>{
    let player =event.player
    let item = event.item
    if(item.id === 'curlamoety:witch_amulet_tier1_inactive')
    {
        let effect = player.getEffect('goety:bottling')//获取效果
        if(!effect)return;//确保效果存在
        item.count --
        player.removeEffect('goety:bottling')
        player.give('curlamoety:witch_amulet_tier1')
        player.setStatusMessage(Text.blue(Text.translatable('curlamoety.lang.witch_amulet_active')))
        let {x,y,z} = player
        event.level.playSound(null,x,y,z,'minecraft:block.brewing_stand.brew','players',1,1)
    }else if(item.id === 'curlamoety:witch_amulet_tier2_inactive')
    {
        let effect = player.getEffect('goety:bottling')//获取效果
        if(!effect)return;//确保效果存在
        let level = effect.amplifier//然后才可以获取等级
        if(level == 0)return;
        item.count --
        player.removeEffect('goety:bottling')
        player.give('curlamoety:witch_amulet_tier2')
        player.setStatusMessage(Text.blue(Text.translatable('curlamoety.lang.witch_amulet_active')))
        let {x,y,z} = player
        event.level.playSound(null,x,y,z,'minecraft:entity.experience_orb.pickup','players',0.5,1)
    }else if(item.id === 'curlamoety:witch_amulet_tier3_inactive')
    {
        let effect = player.getEffect('goety:bottling')//获取效果
        if(!effect)return;//确保效果存在
        let level = effect.amplifier//然后才可以获取等级
        if(level < 2)return;
        item.count --
        player.removeEffect('goety:bottling')
        player.give('curlamoety:witch_amulet_tier3')
        player.setStatusMessage(Text.blue(Text.translatable('curlamoety.lang.witch_amulet_active')))
        let {x,y,z} = player
        event.level.playSound(null,x,y,z,'minecraft:entity.player.levelup','players',0.5,1)
    }else if(item.id === 'curlamoety:witch_amulet_tier4_inactive')
    {
        let effect = player.getEffect('goety:bottling')//获取效果
        if(!effect)return;//确保效果存在
        let level = effect.amplifier//然后才可以获取等级
        if(level < 3)return;
        item.count --
        player.removeEffect('goety:bottling')
        player.give('curlamoety:witch_amulet_tier4')
        player.setStatusMessage(Text.blue(Text.translatable('curlamoety.lang.witch_amulet_active')))
        let {x,y,z} = player
        event.level.playSound(null,x,y,z,'minecraft:block.beacon.activate','players',1,1)
    }
    else if(item.id === 'curlamoety:witch_amulet_tier5_inactive')
    {
        let effect = player.getEffect('goety:bottling')//获取效果
        if(!effect)return;//确保效果存在
        let level = effect.amplifier//然后才可以获取等级
        if(level < 4)return;
        item.count --
        player.removeEffect('goety:bottling')
        player.give('curlamoety:witch_amulet_tier5')
        player.setStatusMessage(Text.darkRed(Text.translatable('curlamoety.lang.the_end_has_come')))
        let {x,y,z} = player
        event.level.playSound(null,x,y,z,'curlamoety:calamitas_laugh','players',1,1)
    }
    
})