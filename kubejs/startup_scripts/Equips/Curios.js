ForgeEvents.onEvent('top.theillusivec4.curios.api.event.CurioChangeEvent',event=>{
    let entity = event.getEntity()
    if(entity.isPlayer()){
        //七咒相关
        if(entity.isCuriosEquipped('enigmaticlegacy:cursed_ring'))
        {
            //修正第三诅咒
            if((entity.isCuriosEquipped('curlamoety:faded_promise'))||(entity.isCuriosEquipped('enigmaticaddons:earth_promise')))
            {
                entity.modifyAttribute('minecraft:generic.armor','compensation_armor',0.143,'multiply_total')
                entity.modifyAttribute('minecraft:generic.armor_toughness','compensation_toughness',0.143,'multiply_total')
            }
            else{
                entity.removeAttribute('minecraft:generic.armor','compensation_armor')
                entity.removeAttribute('minecraft:generic.armor_toughness','compensation_toughness')
            }
        }else{
            entity.removeAttribute('minecraft:generic.armor','compensation_armor')
            entity.removeAttribute('minecraft:generic.armor_toughness','compensation_toughness')
            
        }
    }
    if(entity.isCuriosEquipped('curlamoety:desperate_attempt')&&entity.isCuriosEquipped('goety_revelation:blessing_scroll')){//幸运连携
        entity.modifyAttribute('minecraft:generic.luck','combo_luck',0.3,'multiply_total')
    }else{
        entity.removeAttribute('minecraft:generic.luck','combo_luck')
    }

    //法帽
    
    let crown = 0 ;
    let robe = 0 ;
    if(entity.isCuriosEquipped('goety:dark_hat'))//普通
    {
        entity.modifyAttribute('goety_revelation:spell_power','crown_spell_power',2,'addition')
        crown += 1
    }else{
        entity.removeAttribute('goety_revelation:spell_power','crown_spell_power')
    }

    if(entity.isCuriosEquipped('goety:grand_turban'))//灾厄
    {
        entity.modifyAttribute('goety_revelation:ill_power','crown_ill_power',2,'addition')
        crown += 1
    }else{
        entity.removeAttribute('goety_revelation:ill_power','crown_ill_power')
    }

    if(entity.isCuriosEquipped('goety:frost_crown'))//冰霜
    {
        entity.modifyAttribute('goety_revelation:frost_power','crown_frost_power',2,'addition')
        crown += 1
    }else{
        entity.removeAttribute('goety_revelation:frost_power','crown_frost_power')
    }

    if(entity.isCuriosEquipped('goety:storm_crown'))//风暴&烈风
    {
        entity.modifyAttribute('goety_revelation:storm_power','crown_storm_power',2,'addition')
        entity.modifyAttribute('goety_revelation:wind_power','crown_wind_power',2,'addition')
        crown += 1
    }else if(entity.isCuriosEquipped('goety:wind_crown')){
        entity.modifyAttribute('goety_revelation:wind_power','crown_wind_power',2,'addition')
        entity.removeAttribute('goety_revelation:storm_power','crown_storm_power')
        crown += 1
    }else{
        entity.removeAttribute('goety_revelation:storm_power','crown_storm_power')
        entity.removeAttribute('goety_revelation:wind_power','crown_wind_power')
    }

    if(entity.isCuriosEquipped('goety:wild_crown'))//荒野
    {
        entity.modifyAttribute('goety_revelation:wild_power','crown_wild_power',2,'addition')
        crown += 1
    }else{
        entity.removeAttribute('goety_revelation:wild_power','crown_wild_power')
    }

    if(entity.isCuriosEquipped('goety:abyss_crown'))//深渊
    {
        entity.modifyAttribute('goety_revelation:abyss_power','crown_abyss_power',2,'addition')
        crown += 1
    }else{
        entity.removeAttribute('goety_revelation:abyss_power','crown_abyss_power')
    }

    if(entity.isCuriosEquipped('goety:void_crown'))//虚空
    {
        entity.modifyAttribute('goety_revelation:void_power','crown_void_power',2,'addition')
        crown += 1
    }else{
        entity.removeAttribute('goety_revelation:void_power','crown_void_power')
    }

    if(entity.isCuriosEquipped('goety:amethyst_necklace'))//占卜
    {
        entity.modifyAttribute('goety_revelation:geomancy_power','crown_geomancy_power',2,'addition')
        crown += 1
    }else{
        entity.removeAttribute('goety_revelation:geomancy_power','crown_geomancy_power')
    }

    if(entity.isCuriosEquipped('goety:nameless_crown'))//死灵
    {
        entity.modifyAttribute('goety_revelation:necromancy_power','crown_necromancy_power',3,'addition')
        crown += 1
    }else if(entity.isCuriosEquipped('goety:necro_crown')){
        entity.modifyAttribute('goety_revelation:necromancy_power','crown_necromancy_power',2,'addition')
        crown += 1
    }else{
        entity.removeAttribute('goety_revelation:necromancy_power','crown_necromancy_power')
    }

    if((entity.isCuriosEquipped('goety:unholy_hat'))||(entity.isCuriosEquipped('goety:unholy_hat_halo')))//下界
    {
        entity.modifyAttribute('goety_revelation:nether_power','crown_nether_power',3,'addition')
        crown += 1
    }else if(entity.isCuriosEquipped('goety:nether_crown')){
        entity.modifyAttribute('goety_revelation:nether_power','crown_nether_power',2,'addition')
        crown += 1
    }else{
        entity.removeAttribute('goety_revelation:nether_power','crown_nether_power')
    }

    if((entity.isCuriosEquipped('goety:witch_hat'))||(entity.isCuriosEquipped('goety:witch_hat_hedge'))||(entity.isCuriosEquipped('goety:crone_hat')))//女巫
    {
        entity.modifyAttribute('goety_revelation:spell_power','crown_spell_power2',2,'addition')
        crown += 1
    }else{
        entity.removeAttribute('goety_revelation:spell_power','crown_spell_power2')
    }

    //法袍
    if((entity.isCuriosEquipped('goety:dark_robe'))||(entity.isCuriosEquipped('goety:dark_robe_fancy')))//普通
    {
        entity.modifyAttribute('goety_revelation:spell_power','robe_spell_power',2,'addition')
        robe += 1
    }else{
        entity.removeAttribute('goety_revelation:spell_power','robe_spell_power')
    }

    if(entity.isCuriosEquipped('goety:grand_robe'))//灾厄
    {
        entity.modifyAttribute('goety_revelation:ill_power','robe_ill_power',2,'addition')
        robe += 1
    }else{
        entity.removeAttribute('goety_revelation:ill_power','robe_ill_power')
    }

    if((entity.isCuriosEquipped('goety:frost_robe'))||(entity.isCuriosEquipped('goety:frost_robe_cryo')))//冰霜
    {
        entity.modifyAttribute('goety_revelation:frost_power','robe_frost_power',2,'addition')
        robe += 1
    }else{
        entity.removeAttribute('goety_revelation:frost_power','robe_frost_power')
    }

    if(entity.isCuriosEquipped('goety:storm_robe'))//风暴&烈风
    {
        entity.modifyAttribute('goety_revelation:storm_power','robe_storm_power',2,'addition')
        entity.modifyAttribute('goety_revelation:wind_power','robe_wind_power',2,'addition')
        robe += 1
    }else if(entity.isCuriosEquipped('goety:wind_robe')){
        entity.modifyAttribute('goety_revelation:wind_power','robe_wind_power',2,'addition')
        entity.removeAttribute('goety_revelation:storm_power','robe_storm_power')
        robe += 1
    }else{
        entity.removeAttribute('goety_revelation:storm_power','robe_storm_power')
        entity.removeAttribute('goety_revelation:wind_power','robe_wind_power')
    }

    if(entity.isCuriosEquipped('goety:wild_robe'))//荒野
    {
        entity.modifyAttribute('goety_revelation:wild_power','robe_wild_power',2,'addition')
        robe += 1
    }else{
        entity.removeAttribute('goety_revelation:wild_power','robe_wild_power')
    }

    if(entity.isCuriosEquipped('goety:abyss_robe'))//深渊
    {
        entity.modifyAttribute('goety_revelation:abyss_power','robe_abyss_power',2,'addition')
        robe += 1
    }else{
        entity.removeAttribute('goety_revelation:abyss_power','robe_abyss_power')
    }

    if(entity.isCuriosEquipped('goety:void_robe'))//虚空
    {
        entity.modifyAttribute('goety_revelation:void_power','robe_void_power',2,'addition')
        robe += 1
    }else{
        entity.removeAttribute('goety_revelation:void_power','robe_void_power')
    }

    if(entity.isCuriosEquipped('goety:geo_robe'))//占卜
    {
        entity.modifyAttribute('goety_revelation:geomancy_power','robe_geomancy_power',2,'addition')
        robe += 1
    }else{
        entity.removeAttribute('goety_revelation:geomancy_power','robe_geomancy_power')
    }

    if(entity.isCuriosEquipped('goety:nameless_cape'))//死灵
    {
        entity.modifyAttribute('goety_revelation:necromancy_power','robe_necromancy_power',3,'addition')
        robe += 1
    }else if(entity.isCuriosEquipped('goety:necro_cape')){
        entity.modifyAttribute('goety_revelation:necromancy_power','robe_necromancy_power',2,'addition')
        robe += 1
    }else{
        entity.removeAttribute('goety_revelation:necromancy_power','robe_necromancy_power')
    }

    if((entity.isCuriosEquipped('goety:unholy_robe'))||(entity.isCuriosEquipped('goety_revelation:apollyon_robe')))//下界
    {
        entity.modifyAttribute('goety_revelation:nether_power','robe_nether_power',3,'addition')
        robe += 1
    }else if((entity.isCuriosEquipped('goety:nether_robe'))||(entity.isCuriosEquipped('goety:nether_robe_warped'))){
        entity.modifyAttribute('goety_revelation:nether_power','robe_nether_power',2,'addition')
        robe += 1
    }else{
        entity.removeAttribute('goety_revelation:nether_power','robe_nether_power')
    }

    if((entity.isCuriosEquipped('goety:witch_robe'))||(entity.isCuriosEquipped('goety:witch_robe_hedge')))//女巫
    {
        entity.modifyAttribute('goety_revelation:spell_power','robe_spell_power2',2,'addition')
        robe += 1
    }else{
        entity.removeAttribute('goety_revelation:spell_power','robe_spell_power2')
    }

    if((entity.isCuriosEquipped('goety:warlock_robe'))||(entity.isCuriosEquipped('goety:warlock_robe_dark')))//术士
    {
        entity.modifyAttribute('goety_revelation:nether_power','robe_nether_power2',2,'addition')
        robe += 1
    }else{
        entity.removeAttribute('goety_revelation:nether_power','robe_nether_power2')
    }

    if((entity.isCuriosEquipped('goety:illusion_robe'))||(entity.isCuriosEquipped('goety:illusion_robe_mirror')))//女巫
    {
        entity.modifyAttribute('goety_revelation:necromancy_power','robe_necromancy_power2',2,'addition')
        robe += 1
    }else{
        entity.removeAttribute('goety_revelation:necromancy_power','robe_necromancy_power2')
    }
 
    let suits =  crown + robe 
    let armor = 0
    if(suits <= 4){
        armor = 2*suits
    }else{
        armor = suits + 4
    }
    entity.modifyAttribute('minecraft:generic.armor','extra_armor',armor,"addition")
    let sets = 0
    let toughness = 0
    if(robe > crown){
        sets = crown
    }else{
        sets = robe
    }
    if(sets <= 2)
    {
        toughness = 2*sets
    }else{
        toughness = sets + 2
    }
    entity.modifyAttribute('minecraft:generic.armor_toughness','extra_toughness',toughness,'addition')

    if(entity.isCuriosEquipped('cataclysm:belt_of_beginner')){
        entity.modifyAttribute('minecraft:generic.max_health','beginner_belt_health',5,'addition')
    }else{
        entity.removeAttribute('minecraft:generic.max_health','beginner_belt_health')
    }
    if(entity.isCuriosEquipped('curlamoety:belt_of_glorious')){
        entity.addCuriosSlotModifier('talisman','16798b22-c4a3-4ed3-9b11-7142c4bcce5a','glorious_belt_slots',3,'addition')
        entity.addCuriosSlotModifier('rings','16798b22-c4a3-4ed3-9b11-7142c4bcce5b','glorious_belt_slots',1,'addition')
    }else{
        entity["removeCuriosSlotModifier(java.lang.String,java.util.UUID)"]('talisman','16798b22-c4a3-4ed3-9b11-7142c4bcce5a')
        entity["removeCuriosSlotModifier(java.lang.String,java.util.UUID)"]('rings','16798b22-c4a3-4ed3-9b11-7142c4bcce5b')
    }

})