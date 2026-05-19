EntityEvents.hurt(event=>{
    let source = event.source;
    let entity = event.entity;
    let actual = source.actual;
    if((actual == null)||(!actual.isPlayer()))return;
    if(actual.isCuriosEquipped('curlamoety:elemental_gloves'))//元素手套元素力量
    {
        if(entity.potionEffects.isActive('cataclysm:blazing_brand'))//炽热烙印吸血
        {
            actual.heal(3)
        }
        if(Math.random(1)<0.35)
        {
            entity.potionEffects.add('cataclysm:blazing_brand',80,0)//概率附加炽热烙印
        }
        if(Math.random(1)<0.35)
        {
            entity.potionEffects.add('cataclysm:abyssal_curse',80,2)//概率附加深渊诅咒
        }
        if(Math.random(1)<0.35)
        {
            entity.potionEffects.add('goety:spasms',60,2)//概率附加痉挛
        }
        if(Math.random(1)<0.35)
        {
            entity.potionEffects.add('goety:cursed',200,0)//概率附加诅咒
        }
    }
})
//EntityEvents.hurt(event=>{
//    let source = event.source;
//    let entity = event.entity;
//    if(!entity.isPlayer())return;
//    console.info(event.getSource().getType())
//})