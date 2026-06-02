PlayerEvents.loggedIn(event=>{
    const player = event.player;
    player.tell(Text.translate("curlamoety.lang.keys"))
    player.tell(Text.green(Text.translate("curlamoety.lang.quest")))
    player.tell(Text.yellow(Text.translate("curlamoety.lang.warn")))
    player.tell(Text.yellow(Text.translate("curlamoety.lang.warn")).append(Text.of(" ")))
    player.tell(Text.yellow(Text.translate("curlamoety.lang.warn")).append(Text.of("  ")))
    player.persistentData.fade_cd = player.persistentData.fade_cd||-1 //褪色之诺cd
    player.persistentData.dice_cd = player.persistentData.dice_cd||0 //孤注一掷cd
    player.persistentData.max_buff = player.persistentData.max_buff||0 //最大强健等级
    player.persistentData.stun_cd = player.persistentData.stun_cd||0//眩晕免疫cd
    player.persistentData.sword_cookie = player.persistentData.sword_cookie||0//剑术大师曲奇
    player.persistentData.gloves = player.persistentData.gloves||0//手套
    player.persistentData.witch_amulet = player.persistentData.witch_amulet||0//女巫护身符
    player.persistentData.armorset = player.persistentData.armorset||"none" //套装
    player.persistentData.ascension_pizza = player.persistentData.ascension_pizza||0//晋升披萨
    player.persistentData.generic_cd = player.persistentData.generic_cd||-1//通用技能CD
    player.persistentData.generic_summon_cd = player.persistentData.generic_summon_cd||-1//通用召唤技能CD
    player.persistentData.fiery_cd = player.persistentData.fiery_cd||0//炽铁CD
    player.persistentData.ignitium_cd = player.persistentData.ignitium_cd||0//腾炎CD
})
ServerEvents.loaded(event=>{
    const server = event.server;
    //server.persistentData.wildFire_counter = server.persistentData.wildFire_counter||0
    server.persistentData.EnderHero_counter = server.persistentData.EnderHero_counter||0
})
