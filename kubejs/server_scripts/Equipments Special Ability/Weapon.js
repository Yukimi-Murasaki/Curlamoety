//let $DamageType = Java.loadClass('net.minecraft.world.damagesource.DamageTypes');
EntityEvents.hurt(event =>{
    const source = event.source;
    const entity = event.entity;
    const actual = source.actual;
    if (actual == null||!actual.isPlayer())return;
    const itemId = actual.mainHandItem.id;

    if (actual.persistentData.champion == 1){
        let damage = event.getDamage()
        let health = actual.getHealth()
        actual.setHealth(health + damage*0.005)
    }

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
})
