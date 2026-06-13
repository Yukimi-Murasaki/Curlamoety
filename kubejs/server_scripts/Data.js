global.fadeCdMap = Utils.newMap()
global.stunCdMap = Utils.newMap()
global.genericCdMap = Utils.newMap()
global.genericSummonCdMap = Utils.newMap()
global.diceCdMap = Utils.newMap()
global.swordCookieMap = Utils.newMap()
global.fieryCdMap = Utils.newMap()
global.ignitiumCdMap = Utils.newMap()
PlayerEvents.loggedIn(event=>{
    let player = event.player;
    
    player.tell(Text.translate("curlamoety.lang.keys"))
    player.tell(Text.green(Text.translate("curlamoety.lang.quest")))
    player.tell(Text.yellow(Text.translate("curlamoety.lang.warn")))
    player.tell(Text.yellow(Text.translate("curlamoety.lang.warn")).append(Text.of(" ")))
    player.tell(Text.yellow(Text.translate("curlamoety.lang.warn")).append(Text.of("  ")))
    //褪色之诺cd
    player.persistentData.fade_cd = player.persistentData.fade_cd||-1 
    global.fadeCdMap.put(player,player.persistentData.fade_cd)
    //孤注一掷cd
    player.persistentData.dice_cd = player.persistentData.dice_cd||0 
    global.diceCdMap.put(player,player.persistentData.dice_cd)
    //最大强健等级
    player.persistentData.max_buff = player.persistentData.max_buff||0 
    //眩晕免疫cd
    player.persistentData.stun_cd = player.persistentData.stun_cd||0
    global.stunCdMap.put(player,player.persistentData.stun_cd)
    //剑术大师曲奇
    player.persistentData.sword_cookie = player.persistentData.sword_cookie||0
    global.swordCookieMap.put(player,player.persistentData.sword_cookie)
    //晋升披萨
    player.persistentData.ascension_pizza = player.persistentData.ascension_pizza||0
    //通用技能CD
    player.persistentData.generic_cd = player.persistentData.generic_cd||-1
    global.genericCdMap.put(player,player.persistentData.fade_cd)
    //通用召唤技能CD
    player.persistentData.generic_summon_cd = player.persistentData.generic_summon_cd||-1
    global.genericSummonCdMap.put(player,player.persistentData.generic_summon_cd )
    //炽铁CD
    player.persistentData.fiery_cd = player.persistentData.fiery_cd||0
    global.fieryCdMap.put(player,player.persistentData.fade_cd)
    //腾炎CD
    player.persistentData.ignitium_cd = player.persistentData.ignitium_cd||-1
    global.ignitiumCdMap.put(player,player.persistentData.fade_cd)
})
PlayerEvents.loggedOut(event=>{
    let player = event.player;
    player.persistentData.fade_cd = global.fadeCdMap.get(player)
    player.persistentData.dice_cd = global.diceCdMap.get(player)
    player.persistentData.stun_cd = global.stunCdMap.get(player)
    player.persistentData.generic_cd = global.genericCdMap.get(player)
    player.persistentData.generic_summon_cd = global.genericSummonCdMap.get(player)
    player.persistentData.fiery_cd = global.fieryCdMap.get(player)
    player.persistentData.ignitium_cd = global.ignitiumCdMap.get(player)
})
ServerEvents.loaded(event=>{
    const server = event.server;
    //server.persistentData.wildFire_counter = server.persistentData.wildFire_counter||0
    server.persistentData.EnderHero_counter = server.persistentData.EnderHero_counter||0
})