//let $DamageType = Java.loadClass('net.minecraft.world.damagesource.DamageTypes');
EntityEvents.hurt(event =>{
    const {source , entity , level } = event
    const {x,y,z} = entity
    const actual = source.actual;
    if( actual == null)return;
    const itemId = actual.mainHandItem.id;

    switch(itemId){
        case 'curlamoety:zombie_arm':
            if(entity.isLiving()){
                entity.potionEffects.add('minecraft:poison',200,0);
            }
        break;

        case 'curlamoety:nuke_hammer':
            if(entity.isLiving()){
                entity.level.createExplosion(actual.x,actual.y,actual.z)
                .strength(6)
                .causesFire(true)
                .explosionMode('tnt')
                .exploder(null)
                .explode()
            }
        break;

        case 'curlamoety:wither_flamberge':
            if(entity.isLiving()){
                entity.potionEffects.add('wither',200,1)
            }
        break;

        
        case 'curlamoety:mary_sue_staff':
            if(entity.isLiving()){
                let effects = entity.getActiveEffects()
                effects.forEach(effectInstance =>{
                    if(effectInstance.getEffect().isBeneficial())
                    {
                        entity.removeEffect(effectInstance.getEffect())
                    }
                })
            }
        
        case 'curlamoety:mary_sue_staff_plus':
            if(entity.isLiving()){
                let effects = entity.getActiveEffects()
                effects.forEach(effectInstance =>{
                    if(effectInstance.getEffect().isBeneficial())
                    {
                        entity.removeEffect(effectInstance.getEffect())
                    }
                })
            }
    }

    if (global.armorSetMap.get(actual) == "champion"){
        let damage = event.getDamage()
        let health = actual.getHealth()
        actual.setHealth(health + damage*0.005)
    }else if(global.armorSetMap.get(actual) == "golden"){
        entity.potionEffects.add("goety:gold_touched",100,1)
    }else if(global.armorSetMap.get(actual) == "arctic"){
        entity.potionEffects.add("goety:freezing",120,0)
    }

    if (!actual.isPlayer())return;
    
    
    if(global.armorSetMap.get(actual) == "ignitium"){//腾炎暴击
            if(source.getType()== "cataclysm.flame_strike")return;
            if(source.getType()== "explosion.player")return;
            if(source.getType()== "onFire")return;
            if(entity.potionEffects.isActive("cataclysm:blazing_brand")){
                if(global.genericCdMap.get(actual) == 0||global.genericCdMap.get(actual) == -1){
                    let nether_power = actual.getAttribute("goety_revelation:nether_power").getValue()
                    let spell_power = actual.getAttribute("goety_revelation:spell_power").getValue()
                    let spell_power_multiplier = actual.getAttribute("goety_revelation:spell_power_multiplier").getValue()
                    let summon = level.createEntity("cataclysm:flame_strike")
                    summon.setOwner(actual)
                    summon.setPosition(x,y,z)
                    summon.setRadius(3)
                    summon.setDamage(3+(nether_power+spell_power)*spell_power_multiplier*0.35)
                    summon.setHpDamage(1)
                    summon.setDuration(140)
                    summon.spawn()
                    global.genericCdMap.put(actual,100)
                }
            }
        }

})
