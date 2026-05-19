// priority: 0

// Visit the wiki for more info - https://curlamoety.com/

console.info('Hello, World! (Loaded client scripts)')
ItemEvents.tooltip(event=>{

    let player = Client.player

    event.addAdvanced("curlamoety:silver_rapier",(item,advanced,text)=>{//白银西洋剑
        text.add(1,Text.of(Text.translate("curlamoety.lang.silver_rapier")))
    })

    event.addAdvanced("curlamoety:zombie_arm",(item,advanced,text)=>{//僵尸臂
        text.add(1,Text.darkGreen(Text.translate("curlamoety.lang.zombie_arm")))
    })

    event.addAdvanced("curlamoety:platinum_punch",(item,advanced,text)=>{//白金之拳
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.platinum_punch")))
    })

    event.addAdvanced("curlamoety:nuke_hammer",(item,advanced,text)=>{//核子挖掘锤
        text.add(1,Text.red(Text.translate("curlamoety.lang.nuke_hammer")))
    })
    
    event.addAdvanced("curlamoety:cursed_fragment",(item,advanced,text)=>{//诅咒残片
        text.add(1,Text.darkGray(Text.translate("curlamoety.lang.cursed_fragment_1")))
        text.add(2,Text.darkGray(Text.translate("curlamoety.lang.cursed_fragment_2")))
    })

    event.addAdvanced("curlamoety:old_necklace",(item,advanced,text)=>{//老旧项链
        text.add(1,Text.blue(Text.translate("curlamoety.lang.old_necklace")))
    })
    event.addAdvanced("curlamoety:soul_necklace",(item,advanced,text)=>{//蕴魂项链
        text.add(1,Text.blue(Text.translate("curlamoety.lang.soul_necklace")))
    })
    event.addAdvanced("curlamoety:death_necklace",(item,advanced,text)=>{//死神项链
        text.add(1,Text.darkRed(Text.translate("curlamoety.lang.death_necklace")))
    })
    event.addAdvanced("curlamoety:faith_necklace",(item,advanced,text)=>{//信仰项链
        text.add(1,Text.gold(Text.translate("curlamoety.lang.faith_necklace")))
    })

    event.addAdvanced("curlamoety:explorer_gloves",(item,advanced,text)=>{//探险家手套
        text.add(1,Text.blue(Text.translate("curlamoety.lang.explorer_gloves")))
        text.add(2,Text.of(""))
        if(event.shift){
            text.add(3,Text.blue(Text.translate("curlamoety.lang.haste1")))
        }else{
            text.add(3,Text.blue(Text.translate("curlamoety.lang.hold")).append(Text.aqua(" Shift ")).append(Text.blue(Text.translate("curlamoety.lang.information"))))
        }
        
    })
    event.addAdvanced("curlamoety:pioneer_gloves",(item,advanced,text)=>{//开拓者手套
        text.add(1,Text.blue(Text.translate("curlamoety.lang.pioneer_gloves")))
        text.add(2,Text.blue(Text.translate("curlamoety.lang.looting1")))
        text.add(3,Text.of(""))
        if(event.shift){
            text.add(4,Text.blue(Text.translate("curlamoety.lang.haste2")))
        }else{
            text.add(4,Text.blue(Text.translate("curlamoety.lang.hold")).append(Text.aqua(" Shift ")).append(Text.blue(Text.translate("curlamoety.lang.information"))))
        }
    })
    event.addAdvanced("curlamoety:conqueror_gloves",(item,advanced,text)=>{//征服者手套
        text.add(1,Text.blue(Text.translate("curlamoety.lang.conqueror_gloves")))
        text.add(2,Text.blue(Text.translate("curlamoety.lang.looting1")))
        text.add(3,Text.of(""))
        if(event.shift){
            text.add(4,Text.blue(Text.translate("curlamoety.lang.haste2+")))
        }else{
            text.add(4,Text.blue(Text.translate("curlamoety.lang.hold")).append(Text.aqua(" Shift ")).append(Text.blue(Text.translate("curlamoety.lang.information"))))
        }
        
    })
    event.addAdvanced("curlamoety:elemental_gloves",(item,advanced,text)=>{//元素手套
        text.add(1,Text.gold(Text.translate("curlamoety.lang.elemental_gloves_1")))
        text.add(2,Text.gold(Text.translate("curlamoety.lang.looting1")))
        text.add(3,Text.of(""))
        if(event.shift){
            text.add(4,Text.darkPurple(Text.translate("curlamoety.lang.haste2+")))
            text.add(5,Text.darkPurple(Text.translate("curlamoety.lang.elemental_gloves_2")))
        }else{
            text.add(4,Text.darkPurple(Text.translate("curlamoety.lang.hold")).append(Text.gold(" Shift ")).append(Text.darkPurple(Text.translate("curlamoety.lang.information"))))
        }
    })
    event.addAdvanced("curlamoety:kitchen_gloves",(item,advanced,text)=>{//厨房手套
        text.add(1,Text.blue(Text.translate("curlamoety.lang.kitchen_gloves_1")))
        text.add(2,Text.blue(Text.translate("curlamoety.lang.looting1")))
        text.add(3,Text.of(""))
        if(event.shift){
            text.add(4,Text.blue(Text.translate("curlamoety.lang.kitchen_gloves_2")))
            text.add(5,Text.blue(Text.translate("curlamoety.lang.kitchen_gloves_3")))
        }else{
            text.add(4,Text.blue(Text.translate("curlamoety.lang.hold")).append(Text.aqua(" Shift ")).append(Text.blue(Text.translate("curlamoety.lang.information"))))
        }
    })

    event.addAdvanced("curlamoety:evil_ring",(item,advanced,text)=>{//恶灵之戒
        text.add(1,Text.lightPurple(Text.translate("curlamoety.lang.evil_ring")))
        text.add(2,Text.of(""))
        if(player.isCuriosEquipped("enigmaticlegacy:cursed_ring")){
            text.add(3,Text.gold(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly1")))
            text.add(4,Text.gold(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly2")))
        }else if(player.isCuriosEquipped("enigmaticaddons:bless_ring")){
            text.add(3,Text.gold(Text.translate("tooltip.enigmaticaddons.blessTrueUse1")))
            text.add(4,Text.gold(Text.translate("tooltip.enigmaticaddons.blessTrueUse2")))
        }else{
            text.add(3,Text.darkRed(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly1")))
            text.add(4,Text.darkRed(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly2")))
        }
    })
    event.addAdvanced("curlamoety:blood_ring",(item,advanced,text)=>{//血海之戒
        text.add(1,Text.lightPurple(Text.translate("curlamoety.lang.blood_ring")))
        text.add(2,Text.of(""))
        if(player.isCuriosEquipped("enigmaticlegacy:cursed_ring")){
            text.add(3,Text.gold(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly1")))
            text.add(4,Text.gold(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly2")))
        }else if(player.isCuriosEquipped("enigmaticaddons:bless_ring")){
            text.add(3,Text.gold(Text.translate("tooltip.enigmaticaddons.blessTrueUse1")))
            text.add(4,Text.gold(Text.translate("tooltip.enigmaticaddons.blessTrueUse2")))
        }else{
            text.add(3,Text.darkRed(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly1")))
            text.add(4,Text.darkRed(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly2")))
        }
    })
    event.addAdvanced("curlamoety:dominator_ring",(item,advanced,text)=>{//主宰之戒
        text.add(1,Text.lightPurple(Text.translate("curlamoety.lang.dominator_ring")))
        text.add(2,Text.of(""))
        if(player.isCuriosEquipped("enigmaticlegacy:cursed_ring")){
            text.add(3,Text.gold(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly1")))
            text.add(4,Text.gold(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly2")))
        }else if(player.isCuriosEquipped("enigmaticaddons:bless_ring")){
            text.add(3,Text.gold(Text.translate("tooltip.enigmaticaddons.blessTrueUse1")))
            text.add(4,Text.gold(Text.translate("tooltip.enigmaticaddons.blessTrueUse2")))
        }else{
            text.add(3,Text.darkRed(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly1")))
            text.add(4,Text.darkRed(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly2")))
        }
    })
    event.addAdvanced("curlamoety:stella_ring",(item,advanced,text)=>{//星光之戒
        text.add(1,Text.lightPurple(Text.translate("curlamoety.lang.stella_ring")))
        text.add(2,Text.of(""))
        if(player.isCuriosEquipped("enigmaticlegacy:cursed_ring")){
            text.add(3,Text.gold(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly1")))
            text.add(4,Text.gold(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly2")))
        }else if(player.isCuriosEquipped("enigmaticaddons:bless_ring")){
            text.add(3,Text.gold(Text.translate("tooltip.enigmaticaddons.blessTrueUse1")))
            text.add(4,Text.gold(Text.translate("tooltip.enigmaticaddons.blessTrueUse2")))
        }else{
            text.add(3,Text.darkRed(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly1")))
            text.add(4,Text.darkRed(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly2")))
        }
    })

    event.addAdvanced("curlamoety:hiker_boots",(item,advanced,text)=>{//跋涉之靴
        text.add(1,Text.blue(Text.translate("curlamoety.lang.hiker_boots")))
        text.add(2,Text.darkGreen(Text.translate("item.cataclysm.sturdy_boots.desc")))
    })
    event.addAdvanced("curlamoety:runner_boots",(item,advanced,text)=>{//疾驰之靴
        text.add(1,Text.blue(Text.translate("curlamoety.lang.runner_boots")))
        text.add(2,Text.darkGreen(Text.translate("item.cataclysm.sturdy_boots.desc")))
    })

    event.addAdvanced("curlamoety:faded_promise",(item,advanced,text)=>{//褪色之诺
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.faded_promise_normal")))
        text.add(2,Text.gold(Text.translate("curlamoety.lang.fortune1")))
        text.add(3,Text.of(" "))
        text.add(4,Text.of(" "))
        if(player.isCuriosEquipped("enigmaticlegacy:cursed_ring")){
            text.add(5,Text.gold(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly1")))
            text.add(6,Text.gold(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly2")))
        }else if(player.isCuriosEquipped("enigmaticaddons:bless_ring")){
            text.add(5,Text.gold(Text.translate("tooltip.enigmaticaddons.blessTrueUse1")))
            text.add(6,Text.gold(Text.translate("tooltip.enigmaticaddons.blessTrueUse2")))
        }else{
            text.add(5,Text.darkRed(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly1")))
            text.add(6,Text.darkRed(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly2")))
        }
        
        if(event.shift){
            text.add(4,Text.darkPurple(Text.translate("curlamoety.lang.faded_promise_1_1")).append(Text.gold(" 60 ")).append(Text.darkPurple(Text.translate("curlamoety.lang.faded_promise_1_2"))))
            text.add(5,Text.of(""))
            text.add(6,Text.lightPurple(Text.translate("curlamoety.lang.third_curse_1_1")).append(Text.gold(Text.translate("curlamoety.lang.third_curse"))).append(Text.lightPurple(Text.translate("curlamoety.lang.third_curse_1_2"))))
            text.add(7,Text.darkPurple(Text.translate("curlamoety.lang.third_curse_2_1")).append(Text.gold(Text.translate("curlamoety.lang.third_curse"))).append(Text.darkPurple(Text.translate("curlamoety.lang.third_curse_2_2"))))
        }else{
            text.add(4,Text.darkPurple(Text.translate("curlamoety.lang.hold")).append(Text.gold(" Shift ")).append(Text.darkPurple(Text.translate("curlamoety.lang.information"))))
        }
    })
    event.addAdvanced("enigmaticaddons:earth_promise",(item,advanced,text)=>{
        if(event.shift){
            text.add(7,Text.of(""))
            text.add(8,Text.lightPurple(Text.translate("curlamoety.lang.third_curse_1_1")).append(Text.gold(Text.translate("curlamoety.lang.third_curse"))).append(Text.lightPurple(Text.translate("curlamoety.lang.third_curse_1_2"))))
            text.add(9,Text.darkPurple(Text.translate("curlamoety.lang.third_curse_2_1")).append(Text.gold(Text.translate("curlamoety.lang.third_curse"))).append(Text.darkPurple(Text.translate("curlamoety.lang.third_curse_2_2"))))
        }
    })

    event.addAdvanced("curlamoety:evil_spirit",(item,advanced,text)=>{//复仇邪魂
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.evil_spirit")))
    })

        //text.remove(0)
        //text.add(0,Text.gold("天基聚晶"))
        //if(event.shift){
        //    text.remove(4)
        //    text.add(4,Text.gray("从天而降拥有神之力量的箭雨，洞穿敢于直面神明伟力的一切生灵"))
        //}

    event.addAdvanced("goety:crypt_stone",(item,addAdvanced,text)=>{//墓穴石
        text.add(1,Text.yellow(Text.translate("curlamoety.lang.crypt_stone")))
    })

    event.addAdvanced('goety_revelation:valettein',(item,addAdvanced,text)=>{//断曜流光
        text.add(1,Text.of(""))
        if(event.shift){
            text.add(2,Text.darkPurple(Text.translate("curlamoety.lang.valettein_1")))
            text.add(3,Text.darkPurple(Text.translate("curlamoety.lang.valettein_2")))
            text.add(4,Text.darkPurple(Text.translate("curlamoety.lang.valettein_3")))
        }else{
            text.add(2,Text.darkPurple(Text.translate("curlamoety.lang.hold")).append(Text.gold(" Shift ")).append(Text.darkPurple(Text.translate("curlamoety.lang.information"))))
        }
    })

    event.addAdvanced('campfire',(item,addAdvanced,text)=>{//营火
        text.add(1,Text.lightPurple(Text.translate("curlamoety.lang.campfire")))
    })

    event.addAdvanced('soul_campfire',(item,addAdvanced,text)=>{
        text.add(1,Text.lightPurple(Text.translate("curlamoety.lang.campfire")))
    })

    event.addAdvanced('goety_revelation:apocalyptium_helmet',(item,addAdvanced,text)=>{//套装效果
        if(event.shift){
            text.add(10,Text.darkPurple(Text.translate("curlamoety.lang.apocalyptium_amorset_1")).append(Text.lightPurple(Text.translate("curlamoety.lang.total_amorset_1"))))
        }
    })
    event.addAdvanced('goety_revelation:apocalyptium_chestplate',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(11,Text.darkPurple(Text.translate("curlamoety.lang.apocalyptium_amorset_1")).append(Text.lightPurple(Text.translate("curlamoety.lang.total_amorset_1"))))
        }
    })
    event.addAdvanced('goety_revelation:apocalyptium_leggings',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(11,Text.darkPurple(Text.translate("curlamoety.lang.apocalyptium_amorset_1")).append(Text.lightPurple(Text.translate("curlamoety.lang.total_amorset_1"))))
        }
    })
    event.addAdvanced('goety_revelation:apocalyptium_boots',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(11,Text.darkPurple(Text.translate("curlamoety.lang.apocalyptium_amorset_1")).append(Text.lightPurple(Text.translate("curlamoety.lang.total_amorset_1"))))
        }
    })
    event.addAdvanced('goety_revelation:spectre_darkmage_helmet',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(8,Text.darkPurple("  - ").append(Text.gold("+8 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.amor"))))
            text.add(11,Text.darkPurple("  - ").append(Text.gold("+6.6 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.spell_power"))))
        }
    })
    event.addAdvanced('goety_revelation:spectre_darkmage_chestplate',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(8,Text.darkPurple("  - ").append(Text.gold("+8 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.amor"))))
            text.add(11,Text.darkPurple("  - ").append(Text.gold("+6.6 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.spell_power"))))
        }
    })
    event.addAdvanced('goety_revelation:spectre_darkmage_leggings',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(7,Text.darkPurple("  - ").append(Text.gold("+8 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.amor"))))
            text.add(10,Text.darkPurple("  - ").append(Text.gold("+6.6 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.spell_power"))))
        }
    })
    event.addAdvanced('goety_revelation:spectre_darkmage_boots',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(8,Text.darkPurple("  - ").append(Text.gold("+8 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.amor"))))
            text.add(11,Text.darkPurple("  - ").append(Text.gold("+6.6 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.spell_power"))))
        }
    })
    event.addAdvanced('goety_revelation:spider_darkmage_helmet',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(13,Text.darkPurple("  - ").append(Text.gold("+8 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.amor"))))
            text.add(16,Text.darkPurple("  - ").append(Text.gold("+6.6 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.spell_power"))))
        }
    })
    event.addAdvanced('goety_revelation:spider_darkmage_chestplate',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(11,Text.darkPurple("  - ").append(Text.gold("+8 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.amor"))))
            text.add(14,Text.darkPurple("  - ").append(Text.gold("+6.6 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.spell_power"))))
        }
    })
    event.addAdvanced('goety_revelation:spider_darkmage_leggings',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(11,Text.darkPurple("  - ").append(Text.gold("+8 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.amor"))))
            text.add(14,Text.darkPurple("  - ").append(Text.gold("+6.6 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.spell_power"))))
        }
    })
    event.addAdvanced('goety_revelation:spider_darkmage_boots',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(12,Text.darkPurple("  - ").append(Text.gold("+8 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.amor"))))
            text.add(16,Text.darkPurple("  - ").append(Text.gold("+6.6 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.spell_power"))))
        }
    })
    event.addAdvanced('goety_revelation:spectre_helmet',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(8,Text.darkPurple(Text.translate("curlamoety.lang.middle_armorset")).append(Text.lightPurple(Text.translate("curlamoety.lang.total_amorset_1"))))
            text.add(9,Text.darkPurple("  - ").append(Text.gold("+4 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.amor"))))
        }
    })
    event.addAdvanced('goety_revelation:spectre_chestplate',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(8,Text.darkPurple(Text.translate("curlamoety.lang.middle_armorset")).append(Text.lightPurple(Text.translate("curlamoety.lang.total_amorset_1"))))
            text.add(9,Text.darkPurple("  - ").append(Text.gold("+4 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.amor"))))
        }
    })
    event.addAdvanced('goety_revelation:spectre_leggings',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(7,Text.darkPurple(Text.translate("curlamoety.lang.middle_armorset")).append(Text.lightPurple(Text.translate("curlamoety.lang.total_amorset_1"))))
            text.add(8,Text.darkPurple("  - ").append(Text.gold("+4 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.amor"))))
        }
    })
    event.addAdvanced('goety_revelation:spectre_boots',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(8,Text.darkPurple(Text.translate("curlamoety.lang.middle_armorset")).append(Text.lightPurple(Text.translate("curlamoety.lang.total_amorset_1"))))
            text.add(9,Text.darkPurple("  - ").append(Text.gold("+4 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.amor"))))
        }
    })
    event.addAdvanced('goety_revelation:spider_helmet',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(11,Text.darkPurple(Text.translate("curlamoety.lang.middle_armorset")).append(Text.lightPurple(Text.translate("curlamoety.lang.total_amorset_1"))))
            text.add(12,Text.darkPurple("  - ").append(Text.gold("+4 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.amor"))))
        }
    })
    event.addAdvanced('goety_revelation:spider_chestplate',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(9,Text.darkPurple(Text.translate("curlamoety.lang.middle_armorset")).append(Text.lightPurple(Text.translate("curlamoety.lang.total_amorset_1"))))
            text.add(10,Text.darkPurple("  - ").append(Text.gold("+4 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.amor"))))
        }
    })
    event.addAdvanced('goety_revelation:spider_leggings',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(9,Text.darkPurple(Text.translate("curlamoety.lang.middle_armorset")).append(Text.lightPurple(Text.translate("curlamoety.lang.total_amorset_1"))))
            text.add(10,Text.darkPurple("  - ").append(Text.gold("+4 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.amor"))))
        }
    })
    event.addAdvanced('goety_revelation:spider_boots',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(10,Text.darkPurple(Text.translate("curlamoety.lang.middle_armorset")).append(Text.lightPurple(Text.translate("curlamoety.lang.total_amorset_1"))))
            text.add(11,Text.darkPurple("  - ").append(Text.gold("+4 ")).append(Text.lightPurple(Text.translate("curlamoety.lang.amor"))))
        }
    })

    event.addAdvanced('minecraft:ghast_tear',(item,addAdvanced,text)=>{//恶魂之泪
        text.add(1,Text.blue(Text.translate("curlamoety.lang.copy")))
    })

    event.addAdvanced('goety:void_echo',(item,addAdvanced,text)=>{//虚空回响
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.void_echo")))
    })

    event.addAdvanced('goety:snap_warts',(item,addAdvanced,text)=>{//砰砰疣
        text.add(1,Text.blue(Text.translate("curlamoety.lang.snap_warts_1")))
        text.add(2,Text.blue(Text.translate("curlamoety.lang.snap_warts_2")))
    })

    event.addAdvanced('#forge:glass',(item,addAdvanced,text)=>{//玻璃
        text.add(1,Text.blue(Text.translate("curlamoety.lang.glass")))
    })

    event.addAdvanced('goety:amethyst_necklace',(item,addAdvanced,text)=>{//紫水晶项链
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.amethyst_necklace")))
    })

    event.addAdvanced('goetydelight:metamorphic_scent_grass_seeds',(item,addAdvanced,text)=>{//幻味草
        text.add(1,Text.blue(Text.translate("curlamoety.lang.metamorphic_scent_grass_seeds_1")))
        text.add(2,Text.yellow(Text.translate("curlamoety.lang.metamorphic_scent_grass_seeds_2")))
    })

    event.addAdvanced('goetydelight:metamorphic_scent_grass',(item,addAdvanced,text)=>{//幻味草
        text.add(1,Text.yellow(Text.translate("curlamoety.lang.metamorphic_scent_grass_seeds_2")))
    })

    event.addAdvanced('goetydelight:metamorphic_scent_fruit',(item,addAdvanced,text)=>{//幻味草
        text.add(1,Text.yellow(Text.translate("curlamoety.lang.metamorphic_scent_grass_seeds_2")))
    })

    event.addAdvanced('goety:osseous_focus',(item,addAdvanced,text)=>{//仆从变种
        if(event.shift){
            text.add(5,Text.gray(Text.translate("curlamoety.lang.variants")))
        }
    })
    event.addAdvanced('goety:rotting_focus',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(5,Text.gray(Text.translate("curlamoety.lang.variants")))
        }
    })
    event.addAdvanced('goety:hunting_focus',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(5,Text.gray(Text.translate("curlamoety.lang.variants")))
        }
    })
    event.addAdvanced('goety:slimy_focus',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(5,Text.gray(Text.translate("curlamoety.lang.variants")))
        }
    })
    event.addAdvanced('goety:mauling_focus',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(5,Text.gray(Text.translate("curlamoety.lang.variants")))
        }
    })

    event.addAdvanced('curlamoety:mary_sue_staff',(item,addAdvanced,text)=>{//玛丽苏
        text.add(1,Text.of(" "))
        text.add(2,Text.of(" "))
        text.add(3,Text.green(Text.translate("curlamoety.lang.mary_sue_staff_1")))
        text.add(4,Text.blue(Text.translate("curlamoety.lang.upgradable")))
        if(event.shift){
            text.add(2,Text.gold(Text.translate("curlamoety.lang.mary_sue_staff_2")))
            text.add(3,Text.gold(Text.translate("curlamoety.lang.mary_sue_staff_3")))
            text.add(4,Text.gold(Text.translate("curlamoety.lang.mary_sue_staff_4")))

        }else{
            text.add(2,Text.gold(Text.translate("curlamoety.lang.shift")))
        }
    })
    event.addAdvanced('curlamoety:mary_sue_staff_plus',(item,addAdvanced,text)=>{
        text.add(1,Text.of(" "))
        text.add(2,Text.of(" "))
        text.add(3,Text.green(Text.translate("curlamoety.lang.mary_sue_staff_1")))
        if(event.shift){
            text.add(2,Text.gold(Text.translate("curlamoety.lang.mary_sue_staff_2")))
            text.add(3,Text.gold(Text.translate("curlamoety.lang.mary_sue_staff_3")))
            text.add(4,Text.gold(Text.translate("curlamoety.lang.mary_sue_staff_4")))

        }else{
            text.add(2,Text.gold(Text.translate("curlamoety.lang.shift")))
        }
    })

    event.addAdvanced('goety:void_bottle',(item,addAdvanced,text)=>{//虚空瓶
        text.add(1,Text.of(Text.translate("curlamoety.lang.void_bottle")))
    })

    event.addAdvanced('goety:philosophers_stone',(item,addAdvanced,text)=>{//贤者之石
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.philosophers_stone_1")))
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.philosophers_stone_2")))
    })
    event.addAdvanced('goety:philosophers_mace',(item,addAdvanced,text)=>{//贤者之杖
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.philosophers_mace_1_1")).append(Text.gold(Text.translate("curlamoety.lang.philosophers_mace_1_2"))).append(Text.darkPurple(Text.translate("curlamoety.lang.philosophers_mace_1_3"))))
        text.add(2,Text.darkPurple(Text.translate("curlamoety.lang.philosophers_mace_2")))
        text.add(3,Text.darkPurple(Text.translate("curlamoety.lang.philosophers_mace_3")))
        text.add(4,Text.darkPurple(Text.translate("curlamoety.lang.philosophers_mace_4")))
        text.add(5,Text.yellow(Text.translate("curlamoety.lang.philosophers_mace_5")))
    })

    event.addAdvanced('curlamoety:blackmage_souls_statue_1',(item,addAdvanced,text)=>{//黑魂雕像
        text.add(1,Text.blue(Text.translate("curlamoety.lang.blackmage_souls_statue_1")))
        text.add(2,Text.darkPurple(Text.translate("curlamoety.lang.blackmage_souls_statue")))
    })
    event.addAdvanced('curlamoety:blackmage_souls_statue_2',(item,addAdvanced,text)=>{
        text.add(1,Text.blue(Text.translate("curlamoety.lang.blackmage_souls_statue_2")))
        text.add(2,Text.darkPurple(Text.translate("curlamoety.lang.blackmage_souls_statue")))
    })

    event.addAdvanced('curlamoety:witch_amulet_tier1_inactive',(item,addAdvanced,text)=>{//女巫护身符
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_amulet_inactive_1")).append(Text.gold(Text.translate("curlamoety.lang.bottling1"))).append(Text.darkPurple(Text.translate("curlamoety.lang.witch_amulet_inactive_2"))))
    })
    event.addAdvanced('curlamoety:witch_amulet_tier2_inactive',(item,addAdvanced,text)=>{
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_amulet_inactive_1")).append(Text.gold(Text.translate("curlamoety.lang.bottling2"))).append(Text.darkPurple(Text.translate("curlamoety.lang.witch_amulet_inactive_2"))))
    })
    event.addAdvanced('curlamoety:witch_amulet_tier3_inactive',(item,addAdvanced,text)=>{
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_amulet_inactive_1")).append(Text.gold(Text.translate("curlamoety.lang.bottling3"))).append(Text.darkPurple(Text.translate("curlamoety.lang.witch_amulet_inactive_2"))))
    })
    event.addAdvanced('curlamoety:witch_amulet_tier4_inactive',(item,addAdvanced,text)=>{
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_amulet_inactive_1")).append(Text.gold(Text.translate("curlamoety.lang.bottling4"))).append(Text.darkPurple(Text.translate("curlamoety.lang.witch_amulet_inactive_2"))))
    })
    event.addAdvanced('curlamoety:witch_amulet_tier5_inactive',(item,addAdvanced,text)=>{
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_amulet_inactive_1")).append(Text.gold(Text.translate("curlamoety.lang.bottling5"))).append(Text.darkPurple(Text.translate("curlamoety.lang.witch_amulet_inactive_2"))))
    })
    event.addAdvanced('curlamoety:witch_amulet_tier1',(item,addAdvanced,text)=>{
        text.add(1,Text.of(""))
        text.add(2,Text.of(""))
        text.add(3,Text.darkPurple(Text.translate("curlamoety.lang.upgradable")))
        if(event.shift){
            text.add(2,Text.darkPurple(Text.translate("curlamoety.lang.witch_amulet_1")).append(Text.gold(Text.translate("curlamoety.lang.bottling1"))).append(Text.darkPurple(Text.translate("curlamoety.lang.witch_amulet_2"))))
            text.add(3,Text.darkPurple(Text.translate("curlamoety.lang.witch_note_1")).append(Text.gold(Text.translate("curlamoety.lang.witch_note_t1"))).append(Text.darkPurple(Text.translate("curlamoety.lang.witch_note_2"))))
            text.add(4,Text.darkPurple(Text.translate("curlamoety.lang.witch_note")))
        }else{
            text.add(2,Text.darkPurple(Text.translate("curlamoety.lang.hold")).append(Text.gold(" Shift ")).append(Text.darkPurple(Text.translate("curlamoety.lang.information"))))
        }
    })
    event.addAdvanced('curlamoety:witch_amulet_tier2',(item,addAdvanced,text)=>{
        text.add(1,Text.of(""))
        text.add(2,Text.of(""))
        text.add(3,Text.darkPurple(Text.translate("curlamoety.lang.upgradable")))
        if(event.shift){
            text.add(2,Text.darkPurple(Text.translate("curlamoety.lang.witch_amulet_1")).append(Text.gold(Text.translate("curlamoety.lang.bottling2"))).append(Text.darkPurple(Text.translate("curlamoety.lang.witch_amulet_2"))))
            text.add(3,Text.darkPurple(Text.translate("curlamoety.lang.witch_note_1")).append(Text.gold(Text.translate("curlamoety.lang.witch_note_t2"))).append(Text.darkPurple(Text.translate("curlamoety.lang.witch_note_2"))))
            text.add(4,Text.darkPurple(Text.translate("curlamoety.lang.witch_note")))
        }else{
            text.add(2,Text.darkPurple(Text.translate("curlamoety.lang.hold")).append(Text.gold(" Shift ")).append(Text.darkPurple(Text.translate("curlamoety.lang.information"))))
        }
        
    })
    event.addAdvanced('curlamoety:witch_amulet_tier3',(item,addAdvanced,text)=>{
        text.add(1,Text.of(""))
        text.add(2,Text.of(""))
        text.add(3,Text.darkPurple(Text.translate("curlamoety.lang.upgradable")))
        if(event.shift){
            text.add(2,Text.darkPurple(Text.translate("curlamoety.lang.witch_amulet_1")).append(Text.gold(Text.translate("curlamoety.lang.bottling3"))).append(Text.darkPurple(Text.translate("curlamoety.lang.witch_amulet_2"))))
            text.add(3,Text.darkPurple(Text.translate("curlamoety.lang.witch_note_1")).append(Text.gold(Text.translate("curlamoety.lang.witch_note_t3"))).append(Text.darkPurple(Text.translate("curlamoety.lang.witch_note_2"))))
            text.add(4,Text.darkPurple(Text.translate("curlamoety.lang.witch_note")))
        }else{
            text.add(2,Text.darkPurple(Text.translate("curlamoety.lang.hold")).append(Text.gold(" Shift ")).append(Text.darkPurple(Text.translate("curlamoety.lang.information"))))
        }
    })
    event.addAdvanced('curlamoety:witch_amulet_tier4',(item,addAdvanced,text)=>{
        text.add(1,Text.of(""))
        text.add(2,Text.of(""))
        text.add(3,Text.darkPurple(Text.translate("curlamoety.lang.upgradable")))
        if(event.shift){
            text.add(2,Text.darkPurple(Text.translate("curlamoety.lang.witch_amulet_1")).append(Text.gold(Text.translate("curlamoety.lang.bottling4"))).append(Text.darkPurple(Text.translate("curlamoety.lang.witch_amulet_2"))))
            text.add(3,Text.darkPurple(Text.translate("curlamoety.lang.witch_note_1")).append(Text.gold(Text.translate("curlamoety.lang.witch_note_t4"))).append(Text.darkPurple(Text.translate("curlamoety.lang.witch_note_2"))))
            text.add(4,Text.darkPurple(Text.translate("curlamoety.lang.witch_note")))
        }else{
            text.add(2,Text.darkPurple(Text.translate("curlamoety.lang.hold")).append(Text.gold(" Shift ")).append(Text.darkPurple(Text.translate("curlamoety.lang.information"))))
        }
    })
    event.addAdvanced('curlamoety:witch_amulet_tier5',(item,addAdvanced,text)=>{
        text.add(1,Text.of(""))
        text.add(2,Text.of(""))
        if(player.isCuriosEquipped("enigmaticlegacy:cursed_ring")){
            text.add(3,Text.gold(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly1")))
            text.add(4,Text.gold(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly2")))
        }else if(player.isCuriosEquipped("enigmaticaddons:bless_ring")){
            text.add(3,Text.gold(Text.translate("tooltip.enigmaticaddons.blessTrueUse1")))
            text.add(4,Text.gold(Text.translate("tooltip.enigmaticaddons.blessTrueUse2")))
        }else{
            text.add(3,Text.darkRed(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly1")))
            text.add(4,Text.darkRed(Text.translate("tooltip.enigmaticlegacy.cursedOnesOnly2")))
        }
        if(event.shift){
            text.add(2,Text.darkPurple(Text.translate("curlamoety.lang.witch_amulet_1")).append(Text.gold(Text.translate("curlamoety.lang.bottling5"))).append(Text.darkPurple(Text.translate("curlamoety.lang.witch_amulet_2"))))
            text.add(3,Text.darkRed(Text.translate("curlamoety.lang.witch_note_1")).append(Text.gold(Text.translate("curlamoety.lang.witch_note_t5"))).append(Text.darkRed(Text.translate("curlamoety.lang.witch_note_3"))))
            text.add(4,Text.darkPurple(Text.translate("curlamoety.lang.witch_note")))
        }else{
            text.add(2,Text.darkPurple(Text.translate("curlamoety.lang.hold")).append(Text.gold(" Shift ")).append(Text.darkPurple(Text.translate("curlamoety.lang.information"))))
        }
        
    })

    //event.addAdvanced('goetyawaken:nameless_platinum',(item,addAdvanced,text)=>{//终刻白金 
        //text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.nameless_platinum")))
    //})

    event.addAdvanced('curlamoety:witch_desk',(item,addAdvanced,text)=>{//女巫桌
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_desk_1")))
        text.add(2,Text.darkPurple(Text.translate("curlamoety.lang.witch_desk_2")))
    })
    event.addAdvanced('curlamoety:papers_t1',(item,addAdvanced,text)=>{
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.papers_t1")))
        text.add(2,Text.darkPurple(Text.translate("curlamoety.lang.witch_note")))
    })
    event.addAdvanced('curlamoety:papers_t2',(item,addAdvanced,text)=>{
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.papers_t2")))
        text.add(2,Text.darkPurple(Text.translate("curlamoety.lang.witch_note")))
    })
    event.addAdvanced('curlamoety:papers_t3',(item,addAdvanced,text)=>{
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.papers_t3")))
        text.add(2,Text.darkPurple(Text.translate("curlamoety.lang.papers_t3_trade")))
        text.add(3,Text.darkPurple(Text.translate("curlamoety.lang.witch_note")))
    })
    event.addAdvanced('curlamoety:papers_t4',(item,addAdvanced,text)=>{
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.papers_t4_1")))
        text.add(2,Text.darkPurple(Text.translate("curlamoety.lang.papers_t4_2")))
        text.add(3,Text.darkPurple(Text.translate("curlamoety.lang.witch_note")))
    })
    event.addAdvanced('curlamoety:annihilation_ashes',(item,addAdvanced,text)=>{
        text.add(1,Text.darkRed(Text.translate("curlamoety.lang.annihilation_ashes_1")))
        text.add(2,Text.darkRed(Text.translate("curlamoety.lang.annihilation_ashes_2")))
        text.add(3,Text.darkPurple(Text.translate("curlamoety.lang.witch_note")))
        text.add(4,Text.darkRed(Text.translate("curlamoety.lang.can_be_used")).append(Text.gold(Text.translate("curlamoety.lang.fifth"))).append(Text.darkRed(Text.translate("curlamoety.lang.duration"))))
    })
    event.addAdvanced('curlamoety:brimstone_orb',(item,addAdvanced,text)=>{
        text.add(1,Text.darkRed(Text.translate("curlamoety.lang.brimstone_orb_1")))
        text.add(2,Text.darkRed(Text.translate("curlamoety.lang.can_be_used")).append(Text.gold(" Lv.7 ")).append(Text.darkRed(Text.translate("curlamoety.lang.capacity"))))
    })

    event.addAdvanced('curlamoety:perfect_matter',(item,addAdvanced,text)=>{//完美物质
        text.add(1,Text.green(Text.translate("curlamoety.lang.perfect")))
        text.add(2,Text.green(Text.translate("curlamoety.lang.can_be_used")).append(Text.gold(Text.translate("curlamoety.lang.forth"))).append(Text.green(Text.translate("curlamoety.lang.amplifier"))))
    })

    event.addAdvanced('#goety:rotten_wood_blocks',(item,addAdvanced,text)=>{//朽木提示
        text.add(1,Text.yellow(Text.translate("curlamoety.lang.rotten_wood")))
    })

    event.addAdvanced('#forge:mushrooms',(item,addAdvanced,text)=>{//蘑菇提示
        text.add(1,Text.yellow(Text.translate("curlamoety.lang.mushrooms")))
    })

    event.addAdvanced("enigmaticdelicacy:enigamtic_seed",(item,addAdvanced,text)=>{//神秘种子
        text.add(1,Text.blue(Text.translate("curlamoety.lang.can_be_used")).append(Text.gold(Text.translate("curlamoety.lang.forth"))).append(Text.blue(Text.translate("curlamoety.lang.duration"))))
    })

    event.addAdvanced('cataclysm:monstrous_horn',(item,addAdvanced,text)=>{//药酿追加
        text.add(1,Text.blue(Text.translate("curlamoety.lang.can_brew")))
    })
    event.addAdvanced('enigmaticdelicacy:sticky_pie_slice',(item,addAdvanced,text)=>{
        text.add(2,Text.blue(Text.translate("curlamoety.lang.can_brew")))
    })
    event.addAdvanced('enigmaticaddons:ichor_droplet',(item,addAdvanced,text)=>{
        text.add(1,Text.blue(Text.translate("curlamoety.lang.can_brew")))
    })

    event.addAdvanced('curlamoety:knowledge_toast',(item,addAdvanced,text)=>{//知识面包
        text.add(1,Text.blue(Text.translate("curlamoety.lang.knowledge_toast")))
        text.add(2,Text.blue(Text.translate("curlamoety.lang.knowledge_toast_2")))
    })
    event.addAdvanced('curlamoety:inspiration_wand',(item,addAdvanced,text)=>{//鼓舞魔棒
        text.add(1,Text.blue(Text.translate("curlamoety.lang.inspiration_wand_1")))
        text.add(2,Text.blue(Text.translate("curlamoety.lang.inspiration_wand_2")))
        text.add(3,Text.blue(Text.translate("curlamoety.lang.upgradable")))
    })
    event.addAdvanced('curlamoety:shikishin_wand',(item,addAdvanced,text)=>{//式神魔棒
        text.add(1,Text.blue(Text.translate("curlamoety.lang.shikishin_wand")))
    })

    event.addAdvanced('#necro:night_catalyst',(item,addAdvanced,text)=>{//暗夜催化剂
        text.add(1,Text.darkGreen(Text.translate("curlamoety.lang.night_catalyst")))
    })
    
    event.addAdvanced('curlamoety:evernight_veil',(item,addAdvanced,text)=>{//永夜帷幕
        text.add(1,Text.darkGreen(Text.translate("curlamoety.lang.evernight_veil")))
    })

    event.addAdvanced('curlamoety:hostile_pea',(item,addAdvanced,text)=>{//巫妖之心
        text.add(1,Text.darkGreen(Text.translate("curlamoety.lang.hostile_pea")))
    })

    event.addAdvanced('curlamoety:friendly_pea',(item,addAdvanced,text)=>{//敬赏之心
        text.add(1,Text.darkGreen(Text.translate("curlamoety.lang.friendly_pea")))
    })

    event.addAdvanced('goetyawaken:vanguard_champion_spawn_egg',(item,addAdvanced,text)=>{//刷怪蛋
        text.add(1,Text.red(Text.translatable("curlamoety.lang.no_egg_spawner")))
    })

    event.addAdvanced('goetyawaken:gilded_ingot',(item,addAdvanced,text)=>{//余烬合金锭
        text.add(2,Text.gold(Text.translatable("curlamoety.lang.goetyawaken:gilded_ingot")))
    })

    event.addAdvanced('curlamoety:calamitas_plushie',(item,addAdvanced,text)=>{//终灾玩偶
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.calamitas_plushie")))
    })
    event.addAdvanced('curlamoety:calamitas_plushie_maid',(item,addAdvanced,text)=>{
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.calamitas_plushie")))
    })
    event.addAdvanced('curlamoety:daochan_plushie',(item,addAdvanced,text)=>{//岛猪玩偶
        text.add(1,Text.yellow(Text.translate("curlamoety.lang.dao")))
    })

    event.addAdvanced('curlamoety:blueprint_blackhouse',(item,addAdvanced,text)=>{//黑暗之家
        text.add(1,Text.red(Text.translate("curlamoety.lang.blackhouse1")))
        text.add(2,Text.blue(Text.translate("curlamoety.lang.blackhouse2")))
        text.add(3,Text.blue(Text.translate("curlamoety.lang.blackhouse3")))
    })

    event.addAdvanced("curlamoety:blueprint_autochopping",(item,addAdvanced,text)=>{//自动切菜机
        text.add(1,Text.red(Text.translate("curlamoety.lang.blackhouse1")))
        text.add(2,Text.blue(Text.translate("curlamoety.lang.autochopping2")))
        text.add(3,Text.blue(Text.translate("curlamoety.lang.autochopping3")))
    })

    event.addAdvanced("curlamoety:blueprint_autobrazier",(item,addAdvanced,text)=>{//自动火炉
        text.add(1,Text.red(Text.translate("curlamoety.lang.blackhouse1")))
        text.add(2,Text.blue(Text.translate("curlamoety.lang.autobrazier2")))
        text.add(3,Text.blue(Text.translate("curlamoety.lang.autobrazier3")))
    })

    event.addAdvanced("curlamoety:blueprint_powerstation",(item,addAdvanced,text)=>{//发电站
        text.add(1,Text.red(Text.translate("curlamoety.lang.blackhouse1")))
        text.add(2,Text.blue(Text.translate("curlamoety.lang.powerstation2")))
        text.add(3,Text.blue(Text.translate("curlamoety.lang.powerstation3")))
    })

    event.addAdvanced('enigmaticdelicacy:abyss_stew',(item,addAdvanced,text)=>{//深渊乱炖
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.abyss_stew")))
    })

    event.addAdvanced('curlamoety:desperate_attempt',(item,addAdvanced,text)=>{//孤注一掷
        text.add(1,Text.yellow(Text.translate("curlamoety.lang.desperate_attempt_1")))
        text.add(2,Text.of(""))
        text.add(3,Text.of(""))
        text.add(4,Text.gold(Text.translate("curlamoety.lang.fortune2")))
        text.add(5,Text.gold(Text.translate("curlamoety.lang.looting2")))
        if(event.shift){
            text.add(3,Text.darkPurple(Text.translate("curlamoety.lang.desperate_attempt_2_1")).append(Text.yellow(Text.translate("effect.curlamoety.dying_fight"))).append(Text.darkPurple(Text.translate("curlamoety.lang.desperate_attempt_2_2"))))
            text.add(4,Text.darkPurple(Text.translate("effect.curlamoety.dying_fight.description")))
            text.add(5,Text.yellow(Text.translate("curlamoety.lang.desperate_attempt_3")))
            text.add(6,Text.of(""))
            text.add(7,Text.darkPurple(Text.translate("curlamoety.lang.desperate_attempt_4")).append(Text.gold(" + 30% ")).append(Text.lightPurple(Text.translate("curlamoety.lang.luck"))))
        }else{
            text.add(3,Text.darkPurple(Text.translate("curlamoety.lang.shift")))
        }
    })

    event.addAdvanced('curlamoety:monstrosity_caller',(item,addAdvanced,text)=>{//巨兽呼叫机
        text.add(1,Text.blue(Text.translate("curlamoety.lang.monstrosity_caller_1")))
        text.add(2,Text.red(Text.translate("curlamoety.lang.monstrosity_caller_2")))
        text.add(2,Text.red(Text.translate("curlamoety.lang.monstrosity_caller_3")))
    })

    event.addAdvanced('curlamoety:prisoner_pickaxe',(item,addAdvanced,text)=>{//囚犯镐
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.prisoner_pickaxe_1")))
        text.add(2,Text.gold(Text.translate("curlamoety.lang.prisoner_pickaxe_2")))
    })

    event.addAdvanced('cataclysm:belt_of_beginner',(item,addAdvanced,text)=>{//初学者腰带
        text.add(1,Text.blue(Text.translate("curlamoety.lang.belt_of_beginner_1")))
        text.add(2,Text.yellow(Text.translate("curlamoety.lang.upgradable")))
    })

    event.addAdvanced('curlamoety:belt_of_glorious',(item,addAdvanced,text)=>{//荣耀腰带
        text.add(1,Text.blue(Text.translate("curlamoety.lang.belt_of_glorious_1")))
        text.add(2,Text.blue(Text.translate("curlamoety.lang.belt_of_glorious_2")))
    })

    event.addAdvanced('curlamoety:survivor_will',(item,addAdvanced,text)=>{//求生者的意志
        text.add(1,Text.darkGreen(Text.translate("item.cataclysm.unbreakable_skull.desc")))
    })

    event.addAdvanced("curlamoety:sword_cookie",(item,addAdvanced,text)=>{//剑术大师曲奇
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.curlamoety.sword_cookie_1")))
        text.add(2,Text.darkPurple(Text.translate("curlamoety.lang.curlamoety.sword_cookie_2")))
    })

    event.addAdvanced('curlamoety:gloomy_circlet' ,(item,addAdvanced,text)=>{//晦色头环
        text.add(1,Text.blue(Text.translate("curlamoety.lang.gloomy_circlet")))
        text.add(2,Text.blue(Text.translate("curlamoety.lang.gloomy_circlet0")))
        text.add(3,Text.blue(Text.translate("curlamoety.lang.ender_mask")))
    })

    event.addAdvanced('curlamoety:moon_circlet' ,(item,addAdvanced,text)=>{//皎月银环
        text.add(1,Text.yellow(Text.translate("curlamoety.lang.moon_circlet")))
        text.add(2,Text.yellow(Text.translate("curlamoety.lang.moon_circlet0")))
        text.add(3,Text.yellow(Text.translate("curlamoety.lang.ender_mask")))
    })

    event.addAdvanced('curlamoety:twilight_crown' ,(item,addAdvanced,text)=>{//暮光圣冠
        text.add(1,Text.gold(Text.translate("curlamoety.lang.twilight_crown")))
        text.add(2,Text.gold(Text.translate("curlamoety.lang.twilight_crown0")))
        text.add(3,Text.gold(Text.translate("curlamoety.lang.ender_mask")))
    })

    event.addAdvanced('curlamoety:chlorophium_ingot' ,(item,addAdvanced,text)=>{//叶绿
        text.add(1,Text.darkGreen(Text.translate("curlamoety.lang.chlorophium_ingot_0")))
        text.add(2,Text.darkGreen(Text.translate("curlamoety.lang.chlorophium_ingot_1")))
    })

    event.addAdvanced('curlamoety:biogenesium_ingot' ,(item,addAdvanced,text)=>{//生源chaos_cube
        text.add(1,Text.darkRed(Text.translate("curlamoety.lang.biogenesium_ingot")))
    })

    event.addAdvanced('curlamoety:chlorophium_breaker' ,(item,addAdvanced,text)=>{//叶绿破坏者
        text.add(1,Text.darkGreen(Text.translate("curlamoety.lang.chlorophium_breaker_0")))
        text.add(2,Text.darkGreen(Text.translate("curlamoety.lang.chlorophium_breaker_1")))
    })

    event.addAdvanced('twilightforest:hollow_oak_sapling' ,(item,addAdvanced,text)=>{//高大暮色橡树树苗
        text.add(1,Text.blue(Text.translate("curlamoety.lang.hollow_oak_sapling")))
    })

    event.addAdvanced('twilightforest:naga_scale' ,(item,addAdvanced,text)=>{//暮色BOSS召唤物
        text.add(1,Text.yellow(Text.translate("curlamoety.lang.naga_respawn")))
    })
    event.addAdvanced('#goetytwilight:lich_scepter' ,(item,addAdvanced,text)=>{//暮色BOSS召唤物
        text.add(1,Text.yellow(Text.translate("curlamoety.lang.lich_respawn")))
    })
    event.addAdvanced('twilightforest:alpha_yeti_fur' ,(item,addAdvanced,text)=>{//暮色BOSS召唤物
        text.add(1,Text.yellow(Text.translate("curlamoety.lang.yeti_respawn")))
    })
    event.addAdvanced('twilightforest:meef_stroganoff' ,(item,addAdvanced,text)=>{//暮色BOSS召唤物
        text.add(1,Text.yellow(Text.translate("curlamoety.lang.minoshroom_respawn")))
    })
    event.addAdvanced('curlamoety:phantom_slag' ,(item,addAdvanced,text)=>{//暮色BOSS召唤物
        text.add(1,Text.yellow(Text.translate("curlamoety.lang.knight_respawn")))
    })
    event.addAdvanced('twilightforest:triple_bow' ,(item,addAdvanced,text)=>{//暮色BOSS召唤物
        text.add(1,Text.yellow(Text.translate("curlamoety.lang.snow_respawn")))
    })
    event.addAdvanced('twilightforest:seeker_bow' ,(item,addAdvanced,text)=>{//暮色BOSS召唤物
        text.add(1,Text.yellow(Text.translate("curlamoety.lang.snow_respawn")))
    })
    event.addAdvanced('twilightforest:fiery_blood' ,(item,addAdvanced,text)=>{//暮色BOSS召唤物
        text.add(1,Text.yellow(Text.translate("curlamoety.lang.hydra_respawn")))
    })
    event.addAdvanced('twilightforest:fiery_tears' ,(item,addAdvanced,text)=>{//暮色BOSS召唤物
        text.add(1,Text.yellow(Text.translate("curlamoety.lang.ghast_respawn")))
    })

    event.addAdvanced('goetyawaken:champion_helmet',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(14,Text.gray(Text.translate("curlamoety.lang.champion_armorset_0_0")).append(Text.gold(Text.translate("item.goetyawaken.moonlight_cut"))).append(Text.gray(Text.translate("curlamoety.lang.champion_armorset_0_1"))))
            text.add(15,Text.gray(Text.translate("curlamoety.lang.champion_armorset_1_0")).append(Text.gold("0.5%")).append(Text.gray(Text.translate("curlamoety.lang.champion_armorset_1_1"))).append(Text.gold(Text.translate("curlamoety.lang.champion_armorset_1_2"))).append(Text.gray(Text.translate("curlamoety.lang.champion_armorset_1_3"))))
            text.add(16,Text.gray(Text.translate("curlamoety.lang.champion_armorset_2_0")).append(Text.yellow(Text.translate("curlamoety.lang.champion_armorset_2_1"))).append(Text.gray(Text.translate("curlamoety.lang.champion_armorset_2_2"))).append(Text.gold(Text.translate("curlamoety.lang.champion_armorset_2_3"))))
        }
    })
    event.addAdvanced('goetyawaken:champion_chestplate',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(14,Text.gray(Text.translate("curlamoety.lang.champion_armorset_0_0")).append(Text.gold(Text.translate("item.goetyawaken.moonlight_cut"))).append(Text.gray(Text.translate("curlamoety.lang.champion_armorset_0_1"))))
            text.add(15,Text.gray(Text.translate("curlamoety.lang.champion_armorset_1_0")).append(Text.gold("0.5%")).append(Text.gray(Text.translate("curlamoety.lang.champion_armorset_1_1"))).append(Text.gold(Text.translate("curlamoety.lang.champion_armorset_1_2"))).append(Text.gray(Text.translate("curlamoety.lang.champion_armorset_1_3"))))
            text.add(16,Text.gray(Text.translate("curlamoety.lang.champion_armorset_2_0")).append(Text.yellow(Text.translate("curlamoety.lang.champion_armorset_2_1"))).append(Text.gray(Text.translate("curlamoety.lang.champion_armorset_2_2"))).append(Text.gold(Text.translate("curlamoety.lang.champion_armorset_2_3"))))
        }
    })
    event.addAdvanced('goetyawaken:champion_leggings',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(14,Text.gray(Text.translate("curlamoety.lang.champion_armorset_0_0")).append(Text.gold(Text.translate("item.goetyawaken.moonlight_cut"))).append(Text.gray(Text.translate("curlamoety.lang.champion_armorset_0_1"))))
            text.add(15,Text.gray(Text.translate("curlamoety.lang.champion_armorset_1_0")).append(Text.gold("0.5%")).append(Text.gray(Text.translate("curlamoety.lang.champion_armorset_1_1"))).append(Text.gold(Text.translate("curlamoety.lang.champion_armorset_1_2"))).append(Text.gray(Text.translate("curlamoety.lang.champion_armorset_1_3"))))
            text.add(16,Text.gray(Text.translate("curlamoety.lang.champion_armorset_2_0")).append(Text.yellow(Text.translate("curlamoety.lang.champion_armorset_2_1"))).append(Text.gray(Text.translate("curlamoety.lang.champion_armorset_2_2"))).append(Text.gold(Text.translate("curlamoety.lang.champion_armorset_2_3"))))
        }
    })
    event.addAdvanced('goetyawaken:champion_boots',(item,addAdvanced,text)=>{
        if(event.shift){
            text.add(15,Text.gray(Text.translate("curlamoety.lang.champion_armorset_0_0")).append(Text.gold(Text.translate("item.goetyawaken.moonlight_cut"))).append(Text.gray(Text.translate("curlamoety.lang.champion_armorset_0_1"))))
            text.add(16,Text.gray(Text.translate("curlamoety.lang.champion_armorset_1_0")).append(Text.gold("0.5%")).append(Text.gray(Text.translate("curlamoety.lang.champion_armorset_1_1"))).append(Text.gold(Text.translate("curlamoety.lang.champion_armorset_1_2"))).append(Text.gray(Text.translate("curlamoety.lang.champion_armorset_1_3"))))
            text.add(17,Text.gray(Text.translate("curlamoety.lang.champion_armorset_2_0")).append(Text.yellow(Text.translate("curlamoety.lang.champion_armorset_2_1"))).append(Text.gray(Text.translate("curlamoety.lang.champion_armorset_2_2"))).append(Text.gold(Text.translate("curlamoety.lang.champion_armorset_2_3"))))
        }
    })

    event.addAdvanced('curlamoety:chaos_cube' ,(item,addAdvanced,text)=>{//混沌立方
        text.add(1,Text.lightPurple(Text.translate("curlamoety.lang.chaos_cube")))
    })

    event.addAdvanced('curlamoety:goal_ty' ,(item,addAdvanced,text)=>{//巫法极点
        text.add(1,Text.lightPurple(Text.translate("curlamoety.lang.goal_ty")))
    })

    event.addAdvanced('curlamoety:twilight_sparkle' ,(item,addAdvanced,text)=>{//创生之暮
        text.add(1,Text.lightPurple(Text.translate("curlamoety.lang.twilight_sparkle")))
    })

    event.addAdvanced('curlamoety:calamity_source' ,(item,addAdvanced,text)=>{//厄难本源
        text.add(1,Text.lightPurple(Text.translate("curlamoety.lang.calamity_source")))
    })

    event.addAdvanced('curlamoety:fall_of_apocalypse' ,(item,addAdvanced,text)=>{//天启之陨
        text.add(1,Text.gold(Text.translate("curlamoety.lang.fall_of_apocalypse")))
        text.add(2,Text.red(Text.translate("curlamoety.lang.fall_of_apocalypse0")))
    })

    event.addAdvanced('minecraft:nether_star' ,(item,addAdvanced,text)=>{//下界之星
        text.add(1,Text.yellow(Text.translate("curlamoety.lang.wither_spawn")))
    })

    event.addAdvanced('goetyawaken:nether_reactor_core' ,(item,addAdvanced,text)=>{//下界反应堆
        text.add(1,Text.yellow(Text.translate("curlamoety.lang.wither_spawn")))
        text.add(2,Text.yellow(Text.translate("curlamoety.lang.wither_immune")))
    })

    event.addAdvanced("curlamoety:magician_hand" ,(item,addAdvanced,text)=>{//魔术师之手
        text.add(1,Text.yellow(Text.translate("curlamoety.lang.magician_hand0")))
        text.add(2,Text.yellow(Text.translate("curlamoety.lang.magician_hand1")))
    })

    event.addAdvanced("curlamoety:mini_pants" ,(item,addAdvanced,text)=>{//小小的神秘
        text.add(1,Text.blue("BAKA!").bold())
        text.add(2,Text.yellow(Text.translate("curlamoety.lang.mini_pants")))
    })
    event.addAdvanced("curlamoety:unholy_pants" ,(item,addAdvanced,text)=>{//不洁的神秘
        text.add(1,Text.darkRed(Text.translate("curlamoety.lang.steal_apostle").bold()))
        text.add(2,Text.yellow(Text.translate("curlamoety.lang.unholy_pants")))
    })
    event.addAdvanced("curlamoety:storm_pants" ,(item,addAdvanced,text)=>{//风暴的神秘
        text.add(1,Text.blue(Text.translate("curlamoety.lang.steal_scylla")).bold())
        text.add(2,Text.yellow(Text.translate("curlamoety.lang.storm_pants")))
    })
    event.addAdvanced("curlamoety:snow_pants" ,(item,addAdvanced,text)=>{//霜雪的神秘
        text.add(1,Text.darkBlue(Text.translate("curlamoety.lang.steal_snow")).bold())
        text.add(2,Text.yellow(Text.translate("curlamoety.lang.snow_pants")))
    })

    event.addAdvanced( "#goety:crowns",(item,addAdvanced,text)=>{//魔法套额外加成
        text.add(1,Text.blue(Text.translate("curlamoety.lang.magic_suit")))
    })
    event.addAdvanced( "#goety:capes",(item,addAdvanced,text)=>{//魔法套额外加成
        text.add(1,Text.blue(Text.translate("curlamoety.lang.magic_suit")))
    })
    event.addAdvanced( "#goety:robes",(item,addAdvanced,text)=>{//魔法套额外加成
        text.add(1,Text.blue(Text.translate("curlamoety.lang.magic_suit")))
    })
    event.addAdvanced( "goety:amethyst_necklace",(item,addAdvanced,text)=>{//魔法套额外加成
        text.add(1,Text.blue(Text.translate("curlamoety.lang.magic_suit")))
    })

    event.addAdvanced( "goetyawaken:eye_of_overwatch",(item,addAdvanced,text)=>{//守望之眼
        text.add(1,Text.gold(Text.translate("curlamoety.lang.ender_hero_drop")))
        text.add(2,Text.of(""))
        text.add(3,Text.of(""))
        if(event.shift){
            text.add(3,Text.darkPurple(Text.translate("curlamoety.lang.ender_hero_item_0_0")).append(Text.gold(Text.translate("item.goety.blade_of_ender"))).append(Text.darkPurple(Text.translate("curlamoety.lang.ender_hero_item_0_1"))))
            text.add(4,Text.darkPurple(Text.translate("curlamoety.lang.ender_hero_item_1_0")).append(Text.gold(Text.translate("entity.goety.ender_keeper"))).append(Text.darkPurple(Text.translate("curlamoety.lang.ender_hero_item_1_1"))).append(Text.gold(Text.translate("curlamoety.lang.enderhero")).bold()))
        }else{
            text.add(3,Text.darkPurple(Text.translate("curlamoety.lang.hold")).append(Text.gold(" Shift ")).append(Text.darkPurple(Text.translate("curlamoety.lang.information"))))
        }
    })

    event.addAdvanced( "goety_revelation:broken_ender_keeper",(item,addAdvanced,text)=>{//破损末守
        text.add(1,Text.gold(Text.translate("curlamoety.lang.ender_hero_drop")))
        text.add(2,Text.of(""))
        text.add(3,Text.of(""))
        if(event.shift){
            text.add(3,Text.darkPurple(Text.translate("curlamoety.lang.ender_hero_item_0_0")).append(Text.gold(Text.translate("item.goety.blade_of_ender"))).append(Text.darkPurple(Text.translate("curlamoety.lang.ender_hero_item_0_1"))))
            text.add(4,Text.darkPurple(Text.translate("curlamoety.lang.ender_hero_item_1_0")).append(Text.gold(Text.translate("entity.goety.ender_keeper"))).append(Text.darkPurple(Text.translate("curlamoety.lang.ender_hero_item_1_1"))).append(Text.gold(Text.translate("curlamoety.lang.enderhero")).bold()))
        }else{
            text.add(3,Text.darkPurple(Text.translate("curlamoety.lang.hold")).append(Text.gold(" Shift ")).append(Text.darkPurple(Text.translate("curlamoety.lang.information"))))
        }
    })

    event.addAdvanced( "goety:blade_of_ender",(item,addAdvanced,text)=>{//末影之刃
        text.add(5,Text.of(""))
        if(event.shift){
            text.add(5,Text.darkPurple(Text.translate("curlamoety.lang.ender_hero_item_0_0")).append(Text.gold(Text.translate("item.goety.blade_of_ender"))).append(Text.darkPurple(Text.translate("curlamoety.lang.ender_hero_item_0_1"))))
            text.add(6,Text.darkPurple(Text.translate("curlamoety.lang.ender_hero_item_1_0")).append(Text.gold(Text.translate("entity.goety.ender_keeper"))).append(Text.darkPurple(Text.translate("curlamoety.lang.ender_hero_item_1_1"))).append(Text.gold(Text.translate("curlamoety.lang.enderhero")).bold()))
        }else{
            text.add(5,Text.darkPurple(Text.translate("curlamoety.lang.hold")).append(Text.gold(" Shift ")).append(Text.darkPurple(Text.translate("curlamoety.lang.information"))))
        }
    })

    event.addAdvanced("curlamoety:ascension_pizza",(item,addAdvanced,text)=>{//晋升披萨
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.ascension_pizza")))
    })

    event.addAdvanced("curlamoety:ascension_pizza_slice",(item,addAdvanced,text)=>{//晋升披萨
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.ascension_pizza")))
    })

    event.addAdvanced("minecraft:glowstone_dust",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("minecraft:glowstone",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("minecraft:redstone",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("minecraft:redstone_block",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("minecraft:honey_bottle",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("minecraft:honeycomb",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("twilightforest:liveroot",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("twilightforest:liveroot_block",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("twilightforest:raw_ironwood",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("twilightforest:ironwood_ingot",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("twilightforest:ironwood_block",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("twilightforest:steeleaf_ingot",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("twilightforest:steeleaf_block",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("minecraft:blaze_rod",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("minecraft:blaze_powder",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("minecraft:prismarine",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("minecraft:prismarine_shard",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("minecraft:scute",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("goety:mystic_core",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("minecraft:chorus_flower",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("minecraft:dragon_breath",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("enigmaticdelicacy:enigmatic_fruit",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("enigmaticdelicacy:enigmatic_seed",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("minecraft:enchanted_golden_apple",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(1,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })
    event.addAdvanced("curlamoety:perfect_matter",(item,addAdvanced,text)=>{//女巫见闻录提示
        text.add(3,Text.darkPurple(Text.translate("curlamoety.lang.witch_sketch_guide")))
    })

})