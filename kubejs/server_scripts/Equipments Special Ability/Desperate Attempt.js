EntityEvents.hurt(event=>{
    let {entity,source} = event
    if(entity.isPlayer()){
        let {x,y,z} = entity
        if(entity.persistentData.dice_cd!=0)return;
        if(!entity.isCuriosEquipped('curlamoety:desperate_attempt'))return;
        let healthRate = entity.health/entity.maxHealth
        let luck = entity.getAttribute('minecraft:generic.luck').getValue()
        let chance1 = 0.27-0.2*healthRate+(20+luck)/(200+2*luck)
        if(Math.random(1)<chance1){
            entity.potionEffects.add('curlamoety:dying_fight',(10+10*healthRate+0.1*luck),0)
            event.level.playSound(null,x,y,z,'curlamoety:dice','players',1,1)
            entity.persistentData.dice_cd = 40
        }else{ entity.persistentData.dice_cd = 20 }
    }else{
        let actual = source.actual
        if(actual==null||!actual.isPlayer())return;
        if(actual.persistentData.dice_cd!=0)return;
        if(!actual.isLiving())return;
        if(!actual.isCuriosEquipped('curlamoety:desperate_attempt'))return;
        let luck = actual.getAttribute('minecraft:generic.luck').getValue()
        let healthRate = actual.health/actual.maxHealth
        let chance2 = 0.15-0.1*healthRate+(20+luck)/(400+4*luck)
        if(Math.random(1)<(chance2)){
            let {x,y,z} = actual
            event.level.playSound(null,x,y,z,'curlamoety:dice','players',0.5,1)
            actual.potionEffects.add('curlamoety:dying_fight',(5+0.1*luck),0)
            actual.persistentData.dice_cd = 15
        }
    }
})