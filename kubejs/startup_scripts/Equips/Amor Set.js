
ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent',event =>{
    let entity = event.getEntity()
    let head = entity.headArmorItem;
    let chestplate = entity.chestArmorItem;
    let leggings = entity.legsArmorItem;
    let boots = entity.feetArmorItem;
    
    entity.persistentData.armorset = "none"

    //神灵金套装：增加巫法和攻击加成
    if((head.id == 'goety_revelation:apocalyptium_helmet')&&(chestplate.id =='goety_revelation:apocalyptium_chestplate')&&(leggings.id == 'goety_revelation:apocalyptium_leggings')&&(boots.id == 'goety_revelation:apocalyptium_boots'))
    {
        //if(entity.isPlayer()){
        //    entity.persistentData.apocalyptium = 1
        //}
        entity.persistentData.armorset = "apocalyptium"
        entity.modifyAttribute('goety_revelation:spell_power','apocalyptium_pw',6,'addition');
        entity.modifyAttribute('goety_revelation:spell_power','apocalyptium_pw2',0.15,'multiply_total');
        entity.modifyAttribute('goety_revelation:spell_power_multiplier','apocalyptium_pw3',0.6,'addition');
        entity.modifyAttribute('goety_revelation:spell_cooldown','apocalyptium_cd',0.48,'multiply_total');
        entity.modifyAttribute('goety_revelation:cast_duration','apocalyptium_cd2',0.48,'multiply_total');
        entity.modifyAttribute('minecraft:generic.attack_damage','apocalyptium_dmg',5,'addition');
        entity.modifyAttribute('minecraft:generic.attack_damage','apocalyptium_dmg2',0.15,'multiply_total');
        entity.modifyAttribute("goeticlegacy:magic_damage_multiplier",'apocalyptium_mdm',0.5,'addition')
        entity.modifyAttribute('goeticlegacy:servant_final_damage_multiplier','apocalyptium_sfdm',0.2,'addition')
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
        entity.removeAttribute("goeticlegacy:magic_damage_multiplier",'apocalyptium_mdm')
        entity.removeAttribute('goeticlegacy:servant_final_damage_multiplier','apocalyptium_sfdm')
    }

    //冠军套装
    if((head.id == 'goetyawaken:champion_helmet')&&(chestplate.id =='goetyawaken:champion_chestplate')&&(leggings.id == 'goetyawaken:champion_leggings')&&(boots.id == 'goetyawaken:champion_boots'))
    {
        entity.persistentData.armorset = "champion"
    }

    //无瑕套装
    if((head.id == 'goeticlegacy:holy_helmet')&&(chestplate.id =='goeticlegacy:holy_chestplate')&&(leggings.id == 'goeticlegacy:holy_leggings')&&(boots.id == 'goeticlegacy:holy_boots'))
    {
        entity.persistentData.armorset = "holy"
        entity.modifyAttribute('goety_revelation:spell_power','holy_pw',0.1,'multiply_total');
        entity.modifyAttribute('goety_revelation:resistance','holy_resis',0.1,'addition')
    }
    else
    {
        entity.removeAttribute('goety_revelation:spell_power','holy_pw')
        entity.removeAttribute('goety_revelation:resistance','holy_resis')
    }

    //渊魄黑魔法师套装
    if((head.id == 'goety_revelation:spectre_darkmage_helmet')&&(chestplate.id == 'goety_revelation:spectre_darkmage_chestplate')&&(leggings.id == 'goety_revelation:spectre_darkmage_leggings')&&(boots.id == 'goety_revelation:spectre_darkmage_boots'))
    {
        entity.persistentData.armorset = "spectre_darkmage"
        entity.modifyAttribute('goety_revelation:spell_power','spectre_darkmage_pw',3.6,'addition');//套装整体法强增加
        entity.modifyAttribute('minecraft:generic.attack_damage','spectre_darkmage_dmg',2,'addition');//攻击伤害增加
        entity.modifyAttribute('minecraft:generic.armor','spectre_darkmage_def',4,'addition');//护甲增加
        entity.modifyAttribute("goeticlegacy:magic_damage_multiplier",'spectre_darkmage_mdm',0.25,'addition')
    }
    else
    {
        entity.removeAttribute('goety_revelation:spell_power','spectre_darkmage_pw')
        entity.removeAttribute('minecraft:generic.attack_damage','spectre_darkmage_dmg')
        entity.removeAttribute('minecraft:generic.armor','spectre_darkmage_def')
        entity.removeAttribute("goeticlegacy:magic_damage_multiplier",'spectre_darkmage_mdm')
    }

    //神经蚀刻者黑魔法师套装
    if((head.id == 'goety_revelation:spider_darkmage_helmet')&&(chestplate.id == 'goety_revelation:spider_darkmage_chestplate')&&(leggings.id == 'goety_revelation:spider_darkmage_leggings')&&(boots.id == 'goety_revelation:spider_darkmage_boots'))
    {
        entity.persistentData.armorset = "spider_darkmage"
        entity.modifyAttribute('goety_revelation:spell_power','spider_darkmage_pw',1.6,'addition');//套装整体法强增加
        entity.modifyAttribute('minecraft:generic.attack_damage','spider_darkmage_pw',2,'addition');//攻击伤害法强增加
        entity.modifyAttribute('minecraft:generic.armor','spider_darkmage_def',4,'addition');//护甲增加
        entity.modifyAttribute("goeticlegacy:servant_final_damage_multiplier",'spider_darkmage_sfdm',0.25,'addition')
    }
    else
    {
        entity.removeAttribute('goety_revelation:spell_power','spider_darkmage_pw')
        entity.removeAttribute('minecraft:generic.attack_damage','spider_darkmage_pw')
        entity.removeAttribute('minecraft:generic.armor','spider_darkmage_def')
        entity.removeAttribute("goeticlegacy:servant_final_damage_multiplier",'spider_darkmage_sfdm')
    }

    //幽魂套：接近黑暗套的加成
    if((head.id == 'goety_revelation:spectre_helmet')&&(chestplate.id =='goety_revelation:spectre_chestplate')&&(leggings.id == 'goety_revelation:spectre_leggings')&&(boots.id == 'goety_revelation:spectre_boots'))
    {
        entity.persistentData.armorset = "spectre"
        entity.modifyAttribute('goety_revelation:spell_power','spectre_pw',4,'addition');
        entity.modifyAttribute('goety_revelation:spell_power_multiplier','spectre_pw2',0.5,'addition');
        entity.modifyAttribute('goety_revelation:spell_cooldown','spectre_cd',0.36,'multiply_total');
        entity.modifyAttribute('goety_revelation:cast_duration','spectre_cd2',0.36,'multiply_total');
        entity.modifyAttribute('minecraft:generic.attack_damage','spectre_dmg1',3,'addition');
        entity.modifyAttribute('minecraft:generic.attack_damage','spectre_dmg2',0.07,'multiply_total');
        entity.modifyAttribute('minecraft:generic.armor','spectre_def',2,'addition');
        entity.modifyAttribute("goeticlegacy:magic_damage_multiplier",'spectre_mdm',0.2,'addition')
        
    }
    else
    {
        entity.removeAttribute('goety_revelation:spell_power','spectre_pw');
        entity.removeAttribute('goety_revelation:spell_power_multiplier','spectre_pw2');
        entity.removeAttribute('goety_revelation:spell_cooldown','spectre_cd');
        entity.removeAttribute('goety_revelation:cast_duration','spectre_cd2');
        entity.removeAttribute('minecraft:generic.attack_damage','spectre_dmg1');
        entity.removeAttribute('minecraft:generic.attack_damage','spectre_dmg2');
        entity.removeAttribute('minecraft:generic.armor','spectre_def');
        entity.removeAttribute("goeticlegacy:magic_damage_multiplier",'spectre_mdm')
    }
    //蜘蛛套：接近黑暗套的加成
    if((head.id == 'goety_revelation:spider_helmet')&&(chestplate.id =='goety_revelation:spider_chestplate')&&(leggings.id == 'goety_revelation:spider_leggings')&&(boots.id == 'goety_revelation:spider_boots'))
    {
        entity.persistentData.armorset = "spider"
        entity.modifyAttribute('goety_revelation:spell_power','spider_pw',4,'addition');
        entity.modifyAttribute('goety_revelation:spell_power_multiplier','spider_pw2',0.5,'addition');
        entity.modifyAttribute('goety_revelation:spell_cooldown','spider_cd',0.36,'multiply_total');
        entity.modifyAttribute('goety_revelation:cast_duration','spider_cd2',0.36,'multiply_total');
        entity.modifyAttribute('minecraft:generic.attack_damage','spider_dmg1',3,'addition');
        entity.modifyAttribute('minecraft:generic.attack_damage','spider_dmg2',0.07,'multiply_total');
        entity.modifyAttribute('minecraft:generic.armor','spider_def',2,'addition');
        entity.modifyAttribute("goeticlegacy:servant_final_damage_multiplier",'spider_sfdm',0.2,'addition')
    }
    else
    {
        entity.removeAttribute('goety_revelation:spell_power','spider_pw');
        entity.removeAttribute('goety_revelation:spell_power_multiplier','spider_pw2');
        entity.removeAttribute('goety_revelation:spell_cooldown','spider_cd');
        entity.removeAttribute('goety_revelation:cast_duration','spider_cd2');
        entity.removeAttribute('minecraft:generic.attack_damage','spider_dmg1');
        entity.removeAttribute('minecraft:generic.attack_damage','spider_dmg2');
        entity.removeAttribute('minecraft:generic.armor','spider_def');
        entity.removeAttribute("goeticlegacy:servant_final_damage_multiplier",'spider_sfdm')
    }
    //诅咒骑士
    if((head.id == "goety:cursed_knight_helmet" )&&(chestplate.id == 'goety:cursed_knight_chestplate')&&(leggings.id=='goety:cursed_knight_leggings')&&(boots.id=='goety:cursed_knight_boots'))
    {
        entity.persistentData.armorset = "cursed_knight"
        entity.modifyAttribute('goeticlegacy:servant_damage_reduction_ratio','cursed_knightset1',0.08,'addition')
        entity.modifyAttribute('goety_revelation:necromancy_power','cursed_knightset2',1,'addition')
    }else{
        entity.removeAttribute('goeticlegacy:servant_damage_reduction_ratio','cursed_knightset1')
        entity.removeAttribute('goety_revelation:necromancy_power','cursed_knightset2')
    }
    //诅咒圣骑士
    if((head.id == "goety:cursed_paladin_helmet")&&(chestplate.id == 'goety:cursed_paladin_chestplate')&&(leggings.id=='goety:cursed_paladin_leggings')&&(boots.id=='goety:cursed_paladin_boots'))
    {
        entity.persistentData.armorset = "cursed_paladin"
        entity.modifyAttribute('goeticlegacy:servant_damage_reduction_ratio','cursed_paladinset1',0.12,'addition')
        entity.modifyAttribute('goety_revelation:necromancy_power','cursed_paladinset2',2,'addition')
    }else{
        entity.removeAttribute('goeticlegacy:servant_damage_reduction_ratio','cursed_paladinset1')
        entity.removeAttribute('goety_revelation:necromancy_power','cursed_paladinset2')
    }
    //黑铁
    if((head.id == "goety:black_iron_helmet")&&(chestplate.id == 'goety:black_iron_chestplate')&&(leggings.id=='goety:black_iron_leggings')&&(boots.id=='goety:black_iron_boots'))
    {
        entity.persistentData.armorset = "black_iron"
        entity.modifyAttribute('goeticlegacy:magic_invul_reduction','black_ironset',2,'addition')
    }else{
        entity.removeAttribute('goeticlegacy:magic_invul_reduction','black_ironset')
    }
    //黑暗
    if((head.id == "goety:dark_helmet")&&(chestplate.id == 'goety:dark_chestplate')&&(leggings.id=='goety:dark_leggings')&&(boots.id=='goety:dark_boots'))
    {
        entity.persistentData.armorset = "dark"
        entity.modifyAttribute('goeticlegacy:magic_invul_reduction','darkset',4,'addition')
    }else{
        entity.removeAttribute('goeticlegacy:magic_invul_reduction','darkset')
    }
    //铁套
    if((head.id == "minecraft:iron_helmet")&&(chestplate.id == 'minecraft:iron_chestplate')&&(leggings.id=='minecraft:iron_leggings')&&(boots.id=='minecraft:iron_boots'))
    {
        entity.persistentData.armorset = "iron"
        entity.modifyAttribute('minecraft:generic.knockback_resistance','ironset1',5,'addition')
        entity.modifyAttribute('minecraft:generic.armor_toughness','ironset2',3,'addition')
        entity.modifyAttribute('minecraft:generic.movement_speed','ironset3',-0.25,'multiply_total')
        entity.modifyAttribute('goety_revelation:resistance','ironset4',0.1,'addition')
    }else{
        entity.removeAttribute('minecraft:generic.knockback_resistance','ironset1')
        entity.removeAttribute('minecraft:generic.armor_toughness','ironset2')
        entity.removeAttribute('minecraft:generic.movement_speed','ironset3')
        entity.removeAttribute('goety_revelation:resistance','ironset4')
    }
    //皮革套
    if((head.id == "minecraft:leather_helmet")&&(chestplate.id == 'minecraft:leather_chestplate')&&(leggings.id=='minecraft:leather_leggings')&&(boots.id=='minecraft:leather_boots'))
    {
        entity.persistentData.armorset = "leather"
        entity.modifyAttribute('minecraft:generic.movement_speed','leatherset1',0.2,'multiply_total')
        entity.modifyAttribute('forge:entity_gravity','leatherset2',-0.15,'multiply_total')
        entity.modifyAttribute('minecraft:generic.attack_speed','leatherset3',0.1,'multiply_total')
        entity.modifyAttribute('forge:step_height_addition','leatherset4',0.5,'addition')
    }else{
        entity.removeAttribute('minecraft:generic.movement_speed','leatherset1')
        entity.removeAttribute('forge:entity_gravity','leatherset2')
        entity.removeAttribute('minecraft:generic.attack_speed','leatherset3')
        entity.removeAttribute('forge:step_height_addition','leatherset4')
    }
    //金套
    if((head.id == "minecraft:golden_helmet")&&(chestplate.id == 'minecraft:golden_chestplate')&&(leggings.id=='minecraft:golden_leggings')&&(boots.id=='minecraft:golden_boots'))
    {
        entity.persistentData.armorset = "golden"
        entity.modifyAttribute('minecraft:generic.luck','goldenset1',3,'addition')
    }else{
        entity.removeAttribute('minecraft:generic.luck','goldenset1')
    }
    //钻石套
    if((head.id == "minecraft:diamond_helmet")&&(chestplate.id == 'minecraft:diamond_chestplate')&&(leggings.id=='minecraft:diamond_leggings')&&(boots.id=='minecraft:diamond_boots'))
    {
        entity.persistentData.armorset = "diamond"
        entity.modifyAttribute('minecraft:generic.max_health','diamondset1',10,'addition')
        entity.modifyAttribute('minecraft:generic.armor','diamondset2',0.1,'multiply_total')
        entity.modifyAttribute('minecraft:generic.armor_toughness','diamondset3',4,'addition')
        entity.modifyAttribute('minecraft:generic.attack_damage','diamondset4',2,'addition')
    }else{
        entity.removeAttribute('minecraft:generic.max_health','diamondset1')
        entity.removeAttribute('minecraft:generic.armor','diamondset2')
        entity.removeAttribute('minecraft:generic.armor_toughness','diamondset3')
        entity.removeAttribute('minecraft:generic.attack_damage','diamondset4')
    }
    //锁链
    if((head.id == "minecraft:chainmail_helmet")&&(chestplate.id == 'minecraft:chainmail_chestplate')&&(leggings.id=='minecraft:chainmail_leggings')&&(boots.id=='minecraft:chainmail_boots'))
    {
        entity.persistentData.armorset = "chainmail"
        entity.modifyAttribute('forge:entity_reach','chainmailset1',1,'addition')
        entity.modifyAttribute('forge:block_reach','chainmailset2',1,'addition')
        entity.modifyAttribute('forge:step_height_addition','chainmailset3',1.5,'addition')
    }else{
        entity.removeAttribute('forge:entity_reach','chainmailset1')
        entity.removeAttribute('forge:block_reach','chainmailset2')
        entity.removeAttribute('forge:step_height_addition','chainmailset3')
    }
    //下界合金
    if((head.id == "minecraft:netherite_helmet")&&(chestplate.id == 'minecraft:netherite_chestplate')&&(leggings.id=='minecraft:netherite_leggings')&&(boots.id=='minecraft:netherite_boots'))
    {
        entity.persistentData.armorset = "netherite"
        entity.modifyAttribute('minecraft:generic.attack_damage','netheriteset1',3,'addition')
    }else{
        entity.removeAttribute('minecraft:generic.attack_damage','netheriteset1')
    }
    //铁木
    if((head.id == "twilightforest:ironwood_helmet")&&(chestplate.id == 'twilightforest:ironwood_chestplate')&&(leggings.id=='twilightforest:ironwood_leggings')&&(boots.id=='twilightforest:ironwood_boots'))
    {
        entity.persistentData.armorset = "ironwood"
        entity.modifyAttribute('minecraft:generic.max_health','ironwoodset1',12,'addition')
        entity.modifyAttribute("minecraft:generic.armor","ironwoodset2",4,"addition")
    }else{
        entity.removeAttribute('minecraft:generic.max_health','ironwoodset1')
        entity.removeAttribute("minecraft:generic.armor","ironwoodset2")
    }
    //钢叶
    if((head.id == "twilightforest:steeleaf_helmet")&&(chestplate.id == 'twilightforest:steeleaf_chestplate')&&(leggings.id=='twilightforest:steeleaf_leggings')&&(boots.id=='twilightforest:steeleaf_boots'))
    {
        entity.persistentData.armorset = "steeleaf"
        entity.modifyAttribute('minecraft:generic.attack_damage','steeleafset1',3,'addition')
        entity.modifyAttribute('goety_revelation:wild_power','steeleafset2',2,'addition')
    }else{
        entity.removeAttribute('minecraft:generic.attack_damage','steeleafset1')
        entity.removeAttribute('goety_revelation:wild_power','steeleafset2')
    }
    //极地 
    if((head.id == "twilightforest:arctic_helmet")&&(chestplate.id == 'twilightforest:arctic_chestplate')&&(leggings.id=='twilightforest:arctic_leggings')&&(boots.id=='twilightforest:arctic_boots'))
    {
        entity.persistentData.armorset = "arctic"
        entity.modifyAttribute('goety_revelation:frost_power','arcitcset1',2,'addition')
        entity.modifyAttribute("minecraft:generic.armor","arcitcset2",4,"addition")
        entity.modifyAttribute("goeticlegacy:servant_final_damage_multiplier",'arcitcset3',0.15,'addition')
    }else{
        entity.removeAttribute('minecraft:generic.max_health','ironwoodset1')
        entity.removeAttribute("minecraft:generic.armor","ironwoodset2")
        entity.removeAttribute("goeticlegacy:servant_final_damage_multiplier",'arcitcset3')
    }
    //骑士金属
    if((head.id == "twilightforest:knightmetal_helmet")&&(chestplate.id == 'twilightforest:knightmetal_chestplate')&&(leggings.id=='twilightforest:knightmetal_leggings')&&(boots.id=='twilightforest:knightmetal_boots'))
    {
        entity.persistentData.armorset = "knightmetal"
        entity.modifyAttribute('goety_revelation:resistance','knightmetalset',0.1,'addition')
    }else{
        entity.removeAttribute('goety_revelation:resistance','knightmetalset')
    }
    //炽铁
    if((head.id == "twilightforest:fiery_helmet")&&(chestplate.id == 'twilightforest:fiery_chestplate')&&(leggings.id=='twilightforest:fiery_leggings')&&(boots.id=='twilightforest:fiery_boots'))
    {
        entity.persistentData.armorset = "fiery"
        entity.modifyAttribute('goety_revelation:resistance','fieryset1',0.08,'addition')
        entity.modifyAttribute('goety_revelation:nether_power','fieryset2',3,'addition')
        entity.modifyAttribute('goety_revelation:spell_power','fieryset3',0.1,'multiply_total')
    }else{
        entity.removeAttribute('goety_revelation:resistance','fieryset1')
        entity.removeAttribute('goety_revelation:nether_power','fieryset2')
        entity.removeAttribute('goety_revelation:spell_power','fieryset3')
    }
    //雪怪
    if((head.id == "twilightforest:yeti_helmet")&&(chestplate.id == 'twilightforest:yeti_chestplate')&&(leggings.id=='twilightforest:yeti_leggings')&&(boots.id=='twilightforest:yeti_boots'))
    {
        entity.persistentData.armorset = "yeti"
        entity.modifyAttribute('goeticlegacy:servant_damage_reduction_ratio','yetiset1',0.15,'addition')
        entity.modifyAttribute('goety_revelation:frost_power','yetiset2',3,'addition')
        entity.modifyAttribute("goety_revelation:spell_duration",'yetiset3',1,'addition')
    }else{
        entity.removeAttribute('goety_revelation:resistance','yetiset1')
        entity.removeAttribute('goety_revelation:frost_power','yetiset2')
        entity.removeAttribute("goety_revelation:spell_duration",'yetiset3')
    }
    //腾炎
    if((head.id == "cataclysm:ignitium_helmet")&&(chestplate.id == 'cataclysm:ignitium_chestplate'||chestplate.id == 'cataclysm:ignitium_elytra_chestplate')&&(leggings.id=='cataclysm:ignitium_leggings')&&(boots.id=='cataclysm:ignitium_boots'))
    {
        entity.persistentData.armorset = "ignitium"
        entity.modifyAttribute('goety_revelation:resistance','ignitiumset1',0.1,'addition')
        entity.modifyAttribute('goety_revelation:nether_power','ignitiumset2',3,'addition')
        entity.modifyAttribute('goety_revelation:spell_power','ignitiumset3',0.12,'multiply_total')
    }else{
        entity.removeAttribute('goety_revelation:resistance','ignitiumset1')
        entity.removeAttribute('goety_revelation:nether_power','ignitiumset2')
        entity.removeAttribute('goety_revelation:spell_power','ignitiumset3')
    }
    //咒魂
    if((head.id == "cataclysm:cursium_helmet")&&(chestplate.id == 'cataclysm:cursium_chestplate')&&(leggings.id=='cataclysm:cursium_leggings')&&(boots.id=='cataclysm:cursium_boots'))
    {
        entity.persistentData.armorset = "cursium"
        entity.modifyAttribute('goeticlegacy:servant_damage_reduction_ratio','cursiumset1',0.15,'addition')
        entity.modifyAttribute('goety_revelation:frost_power','cursiumset2',3,'addition')
        entity.modifyAttribute('goety_revelation:necromancy_power','cursiumset3',3,'addition')
        entity.modifyAttribute('goety_revelation:spell_power','cursiumset4',0.12,'multiply_total')
    }else{
        entity.removeAttribute('goety_revelation:resistance','cursiumset1')
        entity.removeAttribute('goety_revelation:frost_power','cursiumset2')
        entity.removeAttribute('goety_revelation:necromancy_power','cursiumset3')
        entity.removeAttribute('goety_revelation:spell_power','cursiumset4')
    }
    
    if((head.id == 'curlamoety:the_hair')&&(chestplate.id == 'curlamoety:the_kimono')&&(leggings.id=='curlamoety:the_bottom')&&(boots.id=='curlamoety:the_clogs'))
    {//紫套装
        entity.persistentData.armorset = "murasaki"
    }
})







