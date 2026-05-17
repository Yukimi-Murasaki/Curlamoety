
ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent',event =>{
    let entity = event.getEntity()
    let head = entity.headArmorItem;
    let chestplate = entity.chestArmorItem;
    let leggings = entity.legsArmorItem;
    let boots = entity.feetArmorItem;
    
    if((head.id == 'goety_revelation:apocalyptium_helmet')&&(chestplate.id =='goety_revelation:apocalyptium_chestplate')&&(leggings.id == 'goety_revelation:apocalyptium_leggings')&&(boots.id == 'goety_revelation:apocalyptium_boots'))
    {//神灵金套装：增加巫法和攻击加成
        //if(entity.isPlayer()){
        //    entity.persistentData.apocalyptium = 1
        //}
        entity.modifyAttribute('goety_revelation:spell_power','apocalyptium_pw',9,'addition');
        entity.modifyAttribute('goety_revelation:spell_power','apocalyptium_pw2',0.1,'multiply_total');
        entity.modifyAttribute('goety_revelation:spell_power_multiplier','apocalyptium_pw3',0.6,'addition');
        entity.modifyAttribute('goety_revelation:spell_cooldown','apocalyptium_cd',0.48,'multiply_total');
        entity.modifyAttribute('goety_revelation:cast_duration','apocalyptium_cd2',0.48,'multiply_total');
        entity.modifyAttribute('minecraft:generic.attack_damage','apocalyptium_dmg',2,'addition');
        entity.modifyAttribute('minecraft:generic.attack_damage','apocalyptium_dmg2',0.1,'multiply_total');
    }
    else
    {
        //if(entity.isPlayer()){
        //    entity.persistentData.apocalyptium = 0
        //}
        entity.removeAttribute('goety_revelation:spell_power','apocalyptium_pw');
        entity.removeAttribute('goety_revelation:spell_power','apocalyptium_pw2');
        entity.removeAttribute('goety_revelation:spell_power_multiplier','apocalyptium_pw3');
        entity.removeAttribute('goety_revelation:spell_cooldown','apocalyptium_cd');
        entity.removeAttribute('goety_revelation:cast_duration','apocalyptium_cd2');
        entity.removeAttribute('minecraft:generic.attack_damage','apocalyptium_dmg');
        entity.removeAttribute('minecraft:generic.attack_damage','apocalyptium_dmg2');
    }
    if((head.id == 'goetyawaken:champion_helmet')&&(chestplate.id =='goetyawaken:champion_chestplate')&&(leggings.id == 'goetyawaken:champion_leggings')&&(boots.id == 'goetyawaken:champion_boots'))
    {//冠军套装
        entity.persistentData.champion = 1
    }
    else
    {
        entity.persistentData.champion = 0
    }
    if((head.id == 'goety_revelation:spectre_darkmage_helmet')&&(chestplate.id == 'goety_revelation:spectre_darkmage_chestplate')&&(leggings.id == 'goety_revelation:spectre_darkmage_leggings')&&(boots.id == 'goety_revelation:spectre_darkmage_boots'))
    {//渊魄黑魔法师套装
        entity.modifyAttribute('goety_revelation:spell_power','spectre_darkmage_pw',6.6,'addition');//套装整体法强增加
        entity.modifyAttribute('minecraft:generic.armor','spectre_darkmage_def',8,'addition');//护甲增加
    }
    else
    {
        entity.removeAttribute('goety_revelation:spell_power','spectre_darkmage_pw')
        entity.removeAttribute('minecraft:generic.armor','spectre_darkmage_def')
    }
    if((head.id == 'goety_revelation:spider_darkmage_helmet')&&(chestplate.id == 'goety_revelation:spider_darkmage_chestplate')&&(leggings.id == 'goety_revelation:spider_darkmage_leggings')&&(boots.id == 'goety_revelation:spider_darkmage_boots'))
    {//神经蚀刻者黑魔法师套装
        entity.modifyAttribute('goety_revelation:spell_power','spider_darkmage_pw',6.6,'addition');//套装整体法强增加
        entity.modifyAttribute('minecraft:generic.armor','spider_darkmage_def',8,'addition');//护甲增加
    }
    else
    {
        entity.removeAttribute('goety_revelation:spell_power','spider_darkmage_pw')
        entity.removeAttribute('minecraft:generic.armor','spider_darkmage_def')
    }
    if((head.id == 'goety_revelation:spectre_helmet')&&(chestplate.id =='goety_revelation:spectre_chestplate')&&(leggings.id == 'goety_revelation:spectre_leggings')&&(boots.id == 'goety_revelation:spectre_boots'))
    {//幽魂套：接近黑暗套的加成
        entity.modifyAttribute('goety_revelation:spell_power','spectre_pw',6,'addition');
        entity.modifyAttribute('goety_revelation:spell_power_multiplier','spectre_pw2',0.5,'addition');
        entity.modifyAttribute('goety_revelation:spell_cooldown','spectre_cd',0.36,'multiply_total');
        entity.modifyAttribute('goety_revelation:cast_duration','spectre_cd2',0.36,'multiply_total');
        entity.modifyAttribute('minecraft:generic.attack_damage','spectre_dmg',0.07,'multiply_total');
        entity.modifyAttribute('minecraft:generic.armor','spectre_def',4,'addition');
    }
    else
    {
        entity.removeAttribute('goety_revelation:spell_power','spectre_pw');
        entity.removeAttribute('goety_revelation:spell_power_multiplier','spectre_pw2');
        entity.removeAttribute('goety_revelation:spell_cooldown','spectre_cd');
        entity.removeAttribute('goety_revelation:cast_duration','spectre_cd2');
        entity.removeAttribute('minecraft:generic.attack_damage','spectre_dmg');
        entity.removeAttribute('minecraft:generic.armor','spectre_def');
    }
    if((head.id == 'goety_revelation:spider_helmet')&&(chestplate.id =='goety_revelation:spider_chestplate')&&(leggings.id == 'goety_revelation:spider_leggings')&&(boots.id == 'goety_revelation:spider_boots'))
    {//蜘蛛套：接近黑暗套的加成
        entity.modifyAttribute('goety_revelation:spell_power','spider_pw',6,'addition');
        entity.modifyAttribute('goety_revelation:spell_power_multiplier','spider_pw2',0.5,'addition');
        entity.modifyAttribute('goety_revelation:spell_cooldown','spider_cd',0.36,'multiply_total');
        entity.modifyAttribute('goety_revelation:cast_duration','spider_cd2',0.36,'multiply_total');
        entity.modifyAttribute('minecraft:generic.attack_damage','spider_dmg',0.07,'multiply_total');
        entity.modifyAttribute('minecraft:generic.armor','spider_def',4,'addition');
    }
    else
    {
        entity.removeAttribute('goety_revelation:spell_power','spider_pw');
        entity.removeAttribute('goety_revelation:spell_power_multiplier','spider_pw2');
        entity.removeAttribute('goety_revelation:spell_cooldown','spider_cd');
        entity.removeAttribute('goety_revelation:cast_duration','spider_cd2');
        entity.removeAttribute('minecraft:generic.attack_damage','spider_dmg');
        entity.removeAttribute('minecraft:generic.armor','spider_def');
    }
    
    if((head.id == 'curlamoety:the_hair')&&(chestplate.id == 'curlamoety:the_kimono')&&(leggings.id=='curlamoety:the_bottom')&&(boots.id=='curlamoety:the_clogs'))
    {//紫套装
        entity.persistentData.murasaki = 1
    }else{
        entity.persistentData.murasaki = 0
    }
})







