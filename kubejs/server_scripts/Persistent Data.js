PlayerEvents.loggedIn(event=>{
    const player = event.player;
    player.tell(Text.translate("curlamoety.lang.keys"))
    player.tell(Text.green(Text.translate("curlamoety.lang.quest0").append(Text.of(" N ").bold()).append(Text.translate("curlamoety.lang.quest1"))))
    player.tell(Text.yellow(Text.translate("curlamoety.lang.warn")))
    player.tell(Text.yellow(Text.translate("curlamoety.lang.warn")))
    player.tell(Text.yellow(Text.translate("curlamoety.lang.warn")))
    player.tell(Text.red(Text.translate("curlamoety.lang.chest_warn")))
    player.persistentData.fade_cd = player.persistentData.fade_cd||0 //褪色之诺cd
    player.persistentData.fade_cast = player.persistentData.fade_cast||0 //褪色之诺播报
    player.persistentData.dice_cd = player.persistentData.dice_cd||0 //孤注一掷cd
    player.persistentData.max_buff = player.persistentData.max_buff||0 //最大强健等级
    player.persistentData.stun_cd = player.persistentData.stun_cd||0//眩晕免疫cd
    player.persistentData.sword_cookie = player.persistentData.sword_cookie||0//剑术大师曲奇
    player.persistentData.champion = player.persistentData.champion||0//冠军套
    player.persistentData.ascension_pizza = player.persistentData.ascension_pizza||0//晋升披萨
    //player.persistentData.apocalyptium = player.persistentData.apocalyptium||0//神灵金套装


    player.persistentData.murasaki = player.persistentData.murasaki||0//紫
})
ServerEvents.loaded(event=>{
    const server = event.server;
    //server.persistentData.wildFire_counter = server.persistentData.wildFire_counter||0
    server.persistentData.EnderHero_counter = server.persistentData.EnderHero_counter||0
})
