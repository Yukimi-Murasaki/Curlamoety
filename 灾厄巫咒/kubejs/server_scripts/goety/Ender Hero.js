EntityEvents.spawned('goety:ender_keeper',event=>{
    let{entity,server}= event
    let{x,y,z} = entity
    if(server.persistentData.EnderHero_counter == 0){//上限1只
        let players = event.server.players
        let blade = false//玩家判断
        players.forEach(player =>{
            if(blade == true)return;//如果判断已经成功就不再判断
            let x1 = player.x
            let y1 = player.y
            let z1 = player.z
            if(x1>= x-16&&x1<=x+16&&z1>=z-16&&z1<=z+16&&y1>=y-4&&y1<=y+8){//仅判断近距离玩家
                let mainHandItem = player.mainHandItem
                let offHandItem = player.offHandItem
                if(mainHandItem.id == 'goety:blade_of_ender'&&offHandItem == null){//主手末影之刃副手空
                    blade = true
                }
            }
        })
        if(blade == true){
            entity.persistentData.enderHero = 1//标记为末影勇者
            entity.persistentData.summon = 1//召唤次数
            server.persistentData.EnderHero_counter ++//计数增加
            entity.setCustomName(Text.darkPurple(Text.translate("curlamoety.lang.enderhero")).bold())
            server.tell(Text.darkPurple(Text.translate("curlamoety.lang.enderhero_1")))//对话
            server.schedule(1500,event=>{
                server.tell(Text.darkPurple(Text.translate("curlamoety.lang.enderhero_2")))
            })
            server.schedule(3000,event=>{
                server.tell(Text.darkPurple(Text.translate("curlamoety.lang.enderhero_3")))
            })
            server.schedule(5000,event=>{
                server.tell(Text.red(Text.translate("curlamoety.lang.enderhero_4")))
            })
        }
    }
    if(entity.persistentData.enderHero == 1){
        entity.modifyAttribute("minecraft:generic.max_health","enderhero_modify",1,"multiply_total")
        entity.setHealth(actual.getMaxHealth())
    }
    
})

//重召
EntityEvents.spawned('goetyawaken:ender_keeper_servant',event=>{
    let entity = event.entity;
    if(entity.customName.getString() == Text.translate("curlamoety.lang.enderhero_servant").getString()){
        entity.persistentData.enderHero = 1
    }
    if(entity.persistentData.enderHero == 1){
        entity.modifyAttribute("minecraft:generic.max_health","enderhero_modify",1,"multiply_total")
        entity.setHealth(actual.getMaxHealth())
    }
})

//死亡减计数
EntityEvents.death('goety:ender_keeper',event=>{
    let{entity,server}= event
    if(entity.persistentData.enderHero == 1){
        server.tell(Text.darkPurple(Text.translate("curlamoety.lang.enderhero_5")))
        server.persistentData.EnderHero_counter --
    }
})

//掉落物
EntityEvents.drops('goety:ender_keeper',event=>{
    let entity = event.entity
    if(entity.persistentData.enderHero == 1){
        event.addDrop('goety_revelation:broken_ender_keeper')
        event.addDrop('curlamoety:sword_cookie')
        if(Math.random(1)<0.35){
            event.addDrop('goetyawaken:eye_of_overwatch')
        }
    }
})

EntityEvents.hurt('goety:ender_keeper',event=>{
    let entity = event.entity
    if(entity.persistentData.enderHero == 1){
        if(entity.health<4800){//半血召唤遣使
            if(entity.persistentData.summon == 1){
                entity.persistentData.summon --
                let x = entity.getX()
                let y = entity.getY()
                let z = entity.getZ()
                let summonEntity1 = event.level.createEntity('goety:endersent')
                summonEntity1.setPosition(x-4,y,z)
                summonEntity1.spawn()
                let summonEntity2 = event.level.createEntity('goety:endersent')
                summonEntity2.setPosition(x+4,y,z)
                summonEntity2.spawn()
            }
        }
    }
})

//吸血
EntityEvents.hurt(event=>{
    let{entity,source} = event
    if(entity==null||!entity.isLiving())return;
    let actual = source.actual
    if(actual==null)return;
    if(actual.type=='goety:ender_keeper'){
        if(actual.persistentData.enderHero==1){
            actual.heal(50)
        }
    }else if(actual.type == 'goetyawaken:ender_keeper_servant'){
        if(actual.persistentData.enderHero==1){
            let amount = event.getDamage()
            actual.heal(0.1*amount)
        }
    }
})

//剑术大师饼干
ItemEvents.entityInteracted('curlamoety:sword_cookie',event=>{
    let{player,target,item}=event;
    let {x,y,z} = target
    if(!target.isLiving())return;
    if(target.type=='goetyawaken:ender_keeper_servant'){
        if(target instanceof $Summoned && target.getOwner() === player){
            if(!target.persistentData.enderHero){
                target.persistentData.enderHero = 1
                target.setCustomName(Text.darkPurple(Text.translate("curlamoety.lang.enderhero_servant")).bold())
                item.count -- 
                event.level.playSound(null,x,y,z,'minecraft:entity.generic.eat','players',1,1)
                event.level.playSound(null,x,y,z,'minecraft:entity.player.burp','players',1,1)
                target.setMaxHealth(64000)
                target.setHealth(64000)
            }else{
                player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.eaten")))
            }
        }
    }
})

ItemEvents.entityInteracted('minecraft:name_tag',event=>{
    let{target,player,item} = event;
    let nametag = item.getDisplayName().getString()
    if(target.type == 'goetyawaken:ender_keeper_servant'){
        if(target.persistentData.enderHero == 1){
            player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.enderhero_deny")))
            event.cancel()
        }else{
            let checkName = "[" +Text.translate("curlamoety.lang.enderhero_servant").getString() + "]"
            if(nametag == checkName){
                player.setStatusMessage(Text.red(Text.translate("curlamoety.lang.enderhero_fake")))
                event.cancel()
            }
        }
    }
})