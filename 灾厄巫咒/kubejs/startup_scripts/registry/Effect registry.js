StartupEvents.registry('mob_effect',event=>{

    //神速之舞
    event.create('curlamoety:acceleration_dance')
    .color(Color.GREEN)
    .beneficial()
    .modifyAttribute('minecraft:generic.movement_speed','fairy_speed',0.05,'multiply_total')
    .modifyAttribute('forge:entity_gravity','fairy_gravity',-0.05,'multiply_total')
    .modifyAttribute('ending_library:multi_jump','fairy_jump',0.3,'addition')
    .modifyAttribute('minecraft:generic.flying_speed','fairy_wings',0.05,'multiply_total')
    .modifyAttribute('minecraft:generic.attack_speed','fairy_hands',0.03,'multiply_total')
    
    //殊死一搏
    event.create('curlamoety:dying_fight')
    .color(Color.YELLOW)
    .beneficial()
    .modifyAttribute('minecraft:generic.movement_speed','dying_speed',0.2,'multiply_total')

    //通用冷却
    event.create('curlamoety:generic_cooldown')
    .color(Color.AQUA)

})