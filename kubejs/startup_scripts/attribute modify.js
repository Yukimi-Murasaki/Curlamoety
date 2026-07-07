ItemEvents.modification(Event=>{//数值调整

    //0主手
    let uuid_0_0 = '17403194-227c-4b58-a4b3-9aa26c00d472'
    let uuid_0_1 = '17846ae2-4fc6-4811-915d-4dd55ffc749b'
    let uuid_0_2 = '234413d6-aeba-4ce9-b746-4fad6f375f58'
    let uuid_0_3 = '35c9d1e6-f0ce-407f-8248-0e78c19a34ec'
    let uuid_0_4 = '38637941-bf75-49c6-a2f0-429331c76a91'
    let uuid_0_5 = '76bdff74-bcc6-4156-a62e-e2a32f1d28e1'
    let uuid_0_6 = 'b9b165eb-9233-4f55-8521-2ee11ac94dae'
    let uuid_0_7 = 'ba374d4f-bc72-45d2-ac48-2d26b261b0f4'
    let uuid_0_8 = 'e923d2ff-eb6a-4eca-8a92-a3aea53a2ac0'
    let uuid_0_9 = 'f408f448-b0ba-40dc-b26f-e0c34d60d3b4'
    //1头盔
    let uuid_1_0 = '43bdceab-293d-4970-a93c-45408e094156'
    let uuid_1_1 = '475c6916-0347-49fa-bd2d-01b879caccbb'
    let uuid_1_2 = '749420ea-7a10-4484-bdd7-f38c19d0cd78'
    let uuid_1_3 = '8dac312d-048b-4724-960a-fa1b7f5935bd'
    let uuid_1_4 = '9eb47165-ff51-4eb0-bac8-f408642dfbbf'
    let uuid_1_5 = 'ba4ea745-3e8f-4dd7-8e58-9eb359794412'
    let uuid_1_6 = 'da969a90-d36e-485d-b66c-ea64ac750a3c'
    let uuid_1_7 = 'e77238ae-c02f-4a1f-8539-f99e271309a8'
    let uuid_1_8 = 'f9f8612c-c0b9-4355-a62e-ab30f1114f1e'
    let uuid_1_9 = 'fb3f831c-e900-45b8-9cd7-1037c810eba1'
    //2胸甲
    let uuid_2_0 = '3d54f45d-84df-432d-ba7a-284fa80fc235'
    let uuid_2_1 = '45e65666-8690-449b-ac24-cba48976ad03'
    let uuid_2_2 = '47980a9a-f301-49cf-a359-339f0cbb43a6'
    let uuid_2_3 = '5de3a194-db73-413c-a5ce-a437ed8064dc'
    let uuid_2_4 = '796c19e7-e6b6-40f8-990f-33aff7167a85'
    let uuid_2_5 = 'a4e1b39b-6a0b-4a04-b608-c4af25c585b9'
    let uuid_2_6 = 'd38ad7fb-50a2-4ace-91ca-e20ef5b55aa6'
    let uuid_2_7 = 'e4b7e1c6-b487-426f-8288-2d52ab3a8170'
    let uuid_2_8 = 'ec674620-d738-4720-93e3-66fd0a75371a'
    let uuid_2_9 = 'f98ca122-f3e5-4aed-8e75-ea5c2a38b512'
    //3护腿
    let uuid_3_0 = '2364b7a1-a7f6-4474-8d2d-74c481b00244'
    let uuid_3_1 = '2db98087-1e68-4b48-97b2-426b54a064b2'
    let uuid_3_2 = '2f0992b6-c6e9-4347-a3fd-71191d561ba8'
    let uuid_3_3 = '2ff12060-8169-4ef2-9e72-e71139bbf10d'
    let uuid_3_4 = '57738426-e78f-4c22-bad7-200765296806'
    let uuid_3_5 = '5b1393d6-ab7b-45d7-8d00-7c0949772c98'
    let uuid_3_6 = '7e955ec1-b2c9-4342-b8e1-7f53cb2c2486'
    let uuid_3_7 = '9700daeb-4cd0-4911-bca6-895155072647'
    let uuid_3_8 = 'b25e3720-589e-4215-9585-135fb6ad78bc'
    let uuid_3_9 = 'f64d9425-f056-4672-96eb-153afe6a4b48'
    //4靴子
    let uuid_4_0 = '2179cc4e-20e1-4fd1-80d6-f3e24d943d5d'
    let uuid_4_1 = '28215f4c-970f-4cea-9ac6-521d99d19ae3'
    let uuid_4_2 = '5540bb80-5920-435c-bee0-36c25e0933cb'
    let uuid_4_3 = '5bac45b0-f54e-4024-85df-51130d7a0278'
    let uuid_4_4 = '816487aa-8c31-4b24-8eb2-315897178687'
    let uuid_4_5 = '980ac724-bd62-47dc-8414-c167597ccd48'
    let uuid_4_6 = 'c0133f6c-5925-4f1d-9326-be9555d02a0b'
    let uuid_4_7 = 'd0da0639-0168-4901-a07f-c0d7fd174bdc'
    let uuid_4_8 = 'ed9ed0bd-a1dc-406b-b9d9-e2be865a5407'
    let uuid_4_9 = 'efeffea9-d559-4177-b57f-7e3dcd22db51'

    Event.modify('curlamoety:skeleton_leg',item=>{
        item.addAttribute('minecraft:generic.attack_knockback',uuid_0_0,'skeleton_leg_knockback',1,"addition")
    })

    //黑铁套
    Event.modify('goety:black_iron_helmet',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_1_0,'black_iron_helmet_power',0.2,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_1_1,'black_iron_helmet_power2',0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage',uuid_1_2,'black_iron_helmet_atk',0.05,'multiply_total')
        item.addAttribute('goeticlegacy:magic_damage_multiplier',uuid_1_3,'black_iron_helmet_mdm',0.06,"addition")
    })
    Event.modify('goety:black_iron_chestplate',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_2_0,'black_iron_chestplate_power',0.2,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_2_1,'black_iron_chestplate_power2',0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage',uuid_2_2,'black_iron_chestplate_atk',2,'addition')
        item.addAttribute('goeticlegacy:magic_damage_multiplier',uuid_2_3,'black_iron_chestplate_mdm',0.06,"addition")
    })
    Event.modify('goety:black_iron_leggings',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_3_0,'black_iron_leggings_power',0.2,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_3_1,'black_iron_leggings_power2',0.1,'addition')
        item.addAttribute('goety_revelation:spell_cooldown',uuid_3_2,'black_iron_leggings_cd1',0.1,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration',uuid_3_3,'black_iron_leggings_cd2',0.1,'multiply_total')
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_3_4,'black_iron_leggings_sfdm',0.15,'addition')
    })
    Event.modify('goety:black_iron_boots',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_4_0,'black_iron_boots_power',0.2,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_4_1,'black_iron_boots_power2',0.1,'addition')
        item.addAttribute('goety_revelation:spell_cooldown',uuid_4_2,'black_iron_boots_cd1',0.1,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration',uuid_4_3,'black_iron_boots_cd2',0.1,'multiply_total')
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_4_4,'black_iron_boots_sfdm',0.15,'addition')
    })
    //诅咒骑士套
    Event.modify('goety:cursed_knight_helmet',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_1_0,'cursed_knight_helmet_power',0.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_1_1,'cursed_knight_helmet_power2',0.05,'addition')
        item.addAttribute('minecraft:generic.attack_damage',uuid_1_2,'cursed_knight_helmet_atk',0.05,'multiply_total')
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_1_3,'cursed_knight_helmet_sfdm',0.1,'addition')
    })
    Event.modify('goety:cursed_knight_chestplate',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_2_0,'cursed_knight_chestplate_power',0.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_2_1,'cursed_knight_chestplate_power2',0.05,'addition')
        item.addAttribute('minecraft:generic.attack_damage',uuid_2_2,'cursed_knight_chestplate_atk',1,'addition')
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_2_3,'cursed_knight_chestplate_sfdm',0.1,'addition')
    })
    Event.modify('goety:cursed_knight_leggings',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_3_0,'cursed_knight_leggings_power',0.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_3_1,'cursed_knight_leggings_power2',0.05,'addition')
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_3_4,'cursed_knight_leggings_sfdm',0.1,'addition')
    })
    Event.modify('goety:cursed_knight_boots',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_4_0,'cursed_knight_boots_power',0.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_4_1,'cursed_knight_boots_power2',0.05,'addition')
        item.addAttribute('goety_revelation:spell_cooldown',uuid_4_2,'cursed_knight_boots_cd1',0.1,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration',uuid_4_3,'cursed_knight_boots_cd2',0.1,'multiply_total')
    })
    //诅咒圣骑士套
    Event.modify('goety:cursed_paladin_helmet',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_1_0,'cursed_paladin_helmet_power',0.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_1_1,'cursed_paladin_helmet_power2',0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage',uuid_1_2,'cursed_paladin_helmet_dmg',1,'addition')
        item.addAttribute('goety_revelation:spell_cooldown',uuid_1_3,'cursed_paladin_helmet_cd1',0.07,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration',uuid_1_4,'cursed_paladin_helmet_cd2',0.07,'multiply_total')
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_1_5,'cursed_paladin_helmet_sfdm',0.05,'addition')
    })
    Event.modify('goety:cursed_paladin_chestplate',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_2_0,'cursed_paladin_chestplate_power',0.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_2_1,'cursed_paladin_chestplate_power2',0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage',uuid_2_2,'cursed_paladin_chestplate_dmg',1,'addition')
        item.addAttribute('goeticlegacy:magic_damage_multiplier',uuid_2_3,'cursed_paladin_chestplate_mdm',0.05,"addition")
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_2_4,'cursed_paladin_chestplate_sfdm',0.05,'addition')
    })
    Event.modify('goety:cursed_paladin_leggings',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_3_0,'cursed_paladin_leggings_power',0.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_3_1,'cursed_paladin_leggings_power2',0.1,'addition')
        item.addAttribute('goety_revelation:spell_cooldown',uuid_3_2,'cursed_paladin_leggings_cd1',0.07,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration',uuid_3_3,'cursed_paladin_leggings_cd2',0.07,'multiply_total')
        item.addAttribute('goeticlegacy:magic_damage_multiplier',uuid_3_4,'cursed_paladin_leggings_mdm',0.05,"addition")
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_3_5,'cursed_paladin_leggings_sfdm',0.05,'addition')
    })
    Event.modify('goety:cursed_paladin_boots',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_4_0,'cursed_paladin_boots_power',0.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_4_1,'cursed_paladin_boots_power2',0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage',uuid_4_2,'cursed_paladin_chestplate_dmg',0.07,'multiply_total')
        item.addAttribute('goety_revelation:spell_cooldown',uuid_4_3,'cursed_paladin_boots_cd1',0.07,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration',uuid_4_4,'cursed_paladin_boots_cd2',0.07,'multiply_total')
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_4_5,'cursed_paladin_boots_sfdm',0.05,'addition')
    })
    //黑暗金属套
    Event.modify('goety:dark_helmet',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_1_0,'dark_helmet_power',0.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_1_1,'dark_helmet_power2',0.15,'addition')
        item.addAttribute('minecraft:generic.attack_damage',uuid_1_2,'dark_helmet_dmg',1.5,'addition')
        item.addAttribute('goety_revelation:spell_cooldown',uuid_1_3,'dark_helmet_cd1',0.1,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration',uuid_1_4,'dark_helmet_cd2',0.1,'multiply_total')
        item.addAttribute('goeticlegacy:magic_damage_multiplier',uuid_1_5,'dark_helmet_mdm',0.06,"addition")
    })
    Event.modify('goety:dark_chestplate',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_2_0,'dark_chestplate_power',1,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_2_1,'dark_chestplate_power2',0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage',uuid_2_2,'dark_chestplate_dmg',1.5,'addition')
        item.addAttribute('goeticlegacy:magic_damage_multiplier',uuid_2_3,'dark_chestplate_mdm',0.06,"addition")
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_2_4,'dark_chestplate_sfdm',0.15,'addition')
    })
    Event.modify('goety:dark_leggings',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_3_0,'dark_leggings_power',1,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_3_1,'dark_leggings_power2',0.1,'addition')
        item.addAttribute('goety_revelation:spell_cooldown',uuid_3_2,'dark_leggings_cd1',0.1,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration',uuid_3_3,'dark_leggings_cd2',0.1,'multiply_total')
        item.addAttribute('goeticlegacy:magic_damage_multiplier',uuid_3_4,'dark_leggings_mdm',0.06,"addition")
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_3_5,'dark_leggings_sfdm',0.15,'addition')
    })
    Event.modify('goety:dark_boots',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_4_0,'dark_boots_power',0.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_4_1,'dark_boots_power2',0.15,'addition')
        item.addAttribute('minecraft:generic.attack_damage',uuid_4_2,'dark_chestplate_dmg',0.07,'multiply_total')
        item.addAttribute('goety_revelation:spell_cooldown',uuid_4_3,'dark_boots_cd1',0.1,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration',uuid_4_4,'dark_boots_cd2',0.1,'multiply_total')
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_4_5,'dark_iron_boots_sfdm',0.15,'addition')
    })

    //玛丽苏的枝杖
    Event.modify('curlamoety:mary_sue_staff',item=>{
        item.addAttribute('forge:entity_reach',uuid_0_0,'elf_reach',2,'addition')
        item.addAttribute('goety_revelation:armor_penetration',uuid_0_1,'elf_magic1',0.8,'addition')
        item.addAttribute('goety_revelation:enchantment_piercing',uuid_0_2,'elf_magic2',0.15,'addition')
    })
    Event.modify('curlamoety:mary_sue_staff_plus',item=>{
        item.addAttribute('forge:entity_reach',uuid_0_0,'elf_reach',3,'addition')
        item.addAttribute('goety_revelation:armor_penetration',uuid_0_1,'elf_magic1',1,'addition')
        item.addAttribute('goety_revelation:enchantment_piercing',uuid_0_2,'elf_magic2',0.3,'addition')
    })

    //疏离
    Event.modify('curlamoety:insulator',item=>{
        item.setMaxDamage(1450)
    })

    //囚犯镐
    Event.modify('curlamoety:prisoner_pickaxe',item=>{
        item.setDigSpeed(0)
    })

    //紫套装
    Event.modify('curlamoety:the_hair',item=>{
        item.setMaxDamage(1450)
        item.addAttribute('goety_revelation:spell_power',uuid_1_0,'murasaki_spell_power',50,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_1_1,'murasaki_spell_power_multiplier',5,'addition')
    })

    Event.modify('curlamoety:the_kimono',item=>{
        item.setMaxDamage(1450)
        item.addAttribute('goety_revelation:resistance',uuid_2_0,'murasaki_resistance',1,'addition')
    })

    Event.modify('curlamoety:the_bottom',item=>{
        item.setMaxDamage(1450)
        item.addAttribute('minecraft:generic.attack_damage',uuid_3_1,'murasaki_attack_damage',100,'addition')
    })

    Event.modify('curlamoety:the_clogs',item=>{
        item.setMaxDamage(1450)
        item.addAttribute('goety_revelation:spell_cooldown',uuid_4_0,'murasaki_cd1',0.5,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration',uuid_4_1,'murasaki_cd2',0.5,'multiply_total')
    })

    //叶绿破坏者
    Event.modify('curlamoety:chlorophium_breaker',item=>{
        item.setDigSpeed(12)
    })

    //冠军套
    Event.modify('goetyawaken:champion_helmet',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_1_0,'champion_helmet_power',1,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_1_1,'champion_helmet_power2',0.2,'addition')
        item.addAttribute('minecraft:generic.attack_damage',uuid_1_2,'champion_helmet_dmg',5,'addition')
        item.addAttribute('goety_revelation:spell_cooldown',uuid_1_3,'champion_helmet_cd1',0.1,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration',uuid_1_4,'champion_helmet_cd2',0.1,'multiply_total')
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_1_5,'champion_helmet_sfdm',0.3,'addition')
    })
    Event.modify('goetyawaken:champion_chestplate',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_2_0,'champion_chestplate_power',1,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_2_1,'champion_chestplate_power2',0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage',uuid_2_2,'champion_chestplate_dmg',5,'addition')
        item.addAttribute('goety_revelation:spell_cooldown',uuid_2_3,'champion_chestplate_cd1',0.1,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration',uuid_2_4,'champion_chestplate_cd2',0.1,'multiply_total')
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_2_5,'champion_chestplate_sfdm',0.3,'addition')
    })
    Event.modify('goetyawaken:champion_leggings',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_3_0,'champion_leggings_power',1,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_3_1,'champion_leggings_power2',0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage',uuid_3_2,'champion_leggings_dmg',0.1,'multiply_total')
        item.addAttribute('goety_revelation:spell_cooldown',uuid_3_3,'champion_leggings_cd1',0.1,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration',uuid_3_4,'champion_leggings_cd2',0.1,'multiply_total')
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_3_5,'champion_leggings_sfdm',0.3,'addition')
    })
    Event.modify('goetyawaken:champion_boots',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_4_0,'champion_boots_power',1,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_4_1,'champion_boots_power2',0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage',uuid_4_2,'champion_chestplate_dmg',0.1,'multiply_total')
        item.addAttribute('goety_revelation:spell_cooldown',uuid_4_3,'champion_boots_cd1',0.1,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration',uuid_4_4,'champion_boots_cd2',0.1,'multiply_total')
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_4_5,'champion_boots_sfdm',0.3,'addition')
    })

    //异骸骨盔
    Event.modify('goety:malefic_helm',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_1_0,'malefic_helmet_power',0.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_1_1,'malefic_helmet_power2',0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage',uuid_1_2,'malefic_helmet_atk',0.05,'multiply_total')
        item.addAttribute('goeticlegacy:magic_damage_multiplier',uuid_1_3,'malefic_helmet_mdm',0.08,"addition")
    })

    //炽铁套
    Event.modify('twilightforest:fiery_helmet',item=>{
        item.addAttribute("minecraft:generic.attack_damage",uuid_1_0,'fiery_helmet_dmg',2,"addition")
        item.addAttribute("goety_revelation:spell_power",uuid_1_1,'fiery_helmet_power',1,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_1_2,'fiery_helmet_power2',0.15,'addition')
        item.addAttribute("goety_revelation:spell_cooldown",uuid_1_3,'fiery_helmet_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_1_4,"fiery_helmet_cd2",0.1,"multiply_total")
        item.addAttribute('goeticlegacy:magic_damage_multiplier',uuid_1_5,'fiery_helmet_mdm',0.07,"addition")
        item.setMaxDamage(682)
    })
    Event.modify('twilightforest:fiery_chestplate',item=>{
        item.addAttribute("minecraft:generic.attack_damage",uuid_2_0,'fiery_chestplate_dmg',2,"addition")
        item.addAttribute("goety_revelation:spell_power",uuid_2_1,'fiery_chestplate_power',1,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_2_2,'fiery_chestplate_power2',0.15,'addition')
        item.addAttribute("goety_revelation:spell_cooldown",uuid_2_3,'fiery_chestplate_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_2_4,"fiery_chestplate_cd2",0.1,"multiply_total")
        item.addAttribute('goeticlegacy:magic_damage_multiplier',uuid_2_5,'fiery_chestplate_mdm',0.08,"addition")
        item.setMaxDamage(992)
    })
    Event.modify('twilightforest:fiery_leggings',item=>{
        item.addAttribute("minecraft:generic.attack_damage",uuid_3_0,'fiery_leggings_dmg',0.1,"multiply_total")
        item.addAttribute("goety_revelation:spell_power",uuid_3_1,'fiery_leggings_power',1,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_3_2,'fiery_leggings_power2',0.15,'addition')
        item.addAttribute("goety_revelation:spell_cooldown",uuid_3_3,'fiery_leggings_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_3_4,"fiery_leggings_cd2",0.1,"multiply_total")
        item.addAttribute('goeticlegacy:magic_damage_multiplier',uuid_3_5,'fiery_leggings_mdm',0.08,"addition")
        item.setMaxDamage(930)
    })
    Event.modify('twilightforest:fiery_boots',item=>{
        item.addAttribute("goety_revelation:spell_power",uuid_4_1,'fiery_boots_power',1,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_4_2,'fiery_boots_power2',0.15,'addition')
        item.addAttribute("goety_revelation:spell_cooldown",uuid_4_3,'fiery_boots_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_4_4,"fiery_boots_cd2",0.1,"multiply_total")
        item.addAttribute('goeticlegacy:magic_damage_multiplier',uuid_4_5,'fiery_boots_mdm',0.07,"addition")
        item.setMaxDamage(806)
    })
    //雪怪套
    Event.modify('twilightforest:yeti_helmet',item=>{
        item.addAttribute("minecraft:generic.attack_damage",uuid_1_0,'yeti_helmet_dmg',1,"addition")
        item.addAttribute("goety_revelation:spell_power",uuid_1_1,'yeti_helmet_power',0.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_1_2,'yeti_helmet_power2',0.15,'addition')
        item.addAttribute("goety_revelation:spell_cooldown",uuid_1_3,'yeti_helmet_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_1_4,"yeti_helmet_cd2",0.1,"multiply_total")
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_1_5,'yeti_helmet_sfdm',0.2,'addition')
        item.setMaxDamage(550)
    })
    Event.modify('twilightforest:yeti_chestplate',item=>{
        item.addAttribute("minecraft:generic.attack_damage",uuid_2_0,'yeti_chestplate_dmg',1,"addition")
        item.addAttribute("goety_revelation:spell_power",uuid_2_1,'yeti_chestplate_power',0.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_2_2,'yeti_chestplate_power2',0.15,'addition')
        item.addAttribute("goety_revelation:spell_cooldown",uuid_2_3,'yeti_chestplate_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_2_4,"yeti_chestplate_cd2",0.1,"multiply_total")
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_2_5,'yeti_chestplate_sfdm',0.2,'addition')
        item.setMaxDamage(800)
    })
    Event.modify('twilightforest:yeti_leggings',item=>{
        item.addAttribute("minecraft:generic.attack_damage",uuid_3_0,'yeti_leggings_dmg',0.1,"multiply_total")
        item.addAttribute("goety_revelation:spell_power",uuid_3_1,'yeti_leggings_power',1,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_3_2,'yeti_leggings_power2',0.15,'addition')
        item.addAttribute("goety_revelation:spell_cooldown",uuid_3_3,'yeti_boots_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_3_4,"yeti_boots_cd2",0.1,"multiply_total")
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_3_5,'yeti_leggings_sfdm',0.2,'addition')
        item.setMaxDamage(750)
    })
    Event.modify('twilightforest:yeti_boots',item=>{
        item.addAttribute("goety_revelation:spell_power",uuid_4_0,'yeti_boots_power',0.1,'multiply_total')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_4_1,'yeti_boots_power2',0.15,'addition')
        item.addAttribute("goety_revelation:spell_cooldown",uuid_4_2,'yeti_boots_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_4_3,"yeti_boots_cd2",0.1,"multiply_total")
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_4_4,'yeti_boots_sfdm',0.2,'addition')
        item.setMaxDamage(650)
    })
    //骑士
    Event.modify('twilightforest:knightmetal_helmet',item=>{
        item.addAttribute("minecraft:generic.attack_damage",uuid_1_0,'knightmetal_helmet_dmg',1.5,"addition")
        item.addAttribute("goety_revelation:spell_power",uuid_1_1,'knightmetal_helmet_power',0.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_1_2,'knight_helmet_power2',0.15,'addition')
        item.addAttribute("goety_revelation:spell_cooldown",uuid_1_3,'knight_helmet_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_1_4,"knight_helmet_cd2",0.1,"multiply_total")
        item.addAttribute('goeticlegacy:magic_damage_multiplier',uuid_1_5,'knight_helmet_mdm',0.05,"addition")
        item.setMaxDamage(682)
    })
    Event.modify('twilightforest:knightmetal_chestplate',item=>{
        item.addAttribute("minecraft:generic.attack_damage",uuid_2_0,'knightmetal_chestplate_dmg',1.5,"addition")
        item.addAttribute("goety_revelation:spell_power",uuid_2_1,'knightmetal_chestplate_power',1,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_2_2,'knightmetal_chestplate_power2',0.15,'addition')
        item.addAttribute("goety_revelation:spell_cooldown",uuid_2_3,'knightmetal_chestplate_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_2_4,"knightmetal_chestplate_cd2",0.1,"multiply_total")
        item.addAttribute('goeticlegacy:magic_damage_multiplier',uuid_2_5,'knightmetal_chestplate_mdm',0.06,"addition")
        item.setMaxDamage(992)
    })
    Event.modify('twilightforest:knightmetal_leggings',item=>{
        item.addAttribute("minecraft:generic.attack_damage",uuid_3_0,'knightmetal_leggings_dmg',0.1,"multiply_total")
        item.addAttribute("goety_revelation:spell_power",uuid_3_1,'knightmetal_leggings_power',0.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_3_2,'knightmetal_leggings_power2',0.15,'addition')
        item.addAttribute("goety_revelation:spell_cooldown",uuid_3_3,'knightmetal_leggings_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_3_4,"knightmetal_leggings_cd2",0.1,"multiply_total")
        item.addAttribute('goeticlegacy:magic_damage_multiplier',uuid_3_5,'knight_leggings_mdm',0.06,"addition")
        item.setMaxDamage(930)
    })
    Event.modify('twilightforest:knightmetal_boots',item=>{
        item.addAttribute("goety_revelation:spell_power",uuid_4_1,'knightmetal_boots_power',0.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_4_2,'knightmetal_boots_power2',0.15,'addition')
        item.addAttribute("goety_revelation:spell_cooldown",uuid_4_3,'knightmetal_boots_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_4_4,"knightmetal_boots_cd2",0.1,"multiply_total")
        item.addAttribute('goeticlegacy:magic_damage_multiplier',uuid_4_5,'knightmetal_boots_mdm',0.05,"addition")
        item.setMaxDamage(806)
    })
    //骸龙套
    Event.modify('cataclysm:bone_reptile_helmet',item=>{
        item.addAttribute("minecraft:generic.attack_damage",uuid_1_0,"bone_helmet_dmg1",2,'addition')
        item.addAttribute("minecraft:generic.attack_damage",uuid_1_1,"bone_helmet_dmg2",0.07,'multiply_total')
    })
    Event.modify('cataclysm:bone_reptile_chestplate',item=>{
        item.addAttribute('goety_revelation:spell_power',uuid_2_0,"bone_chestplate_pw1",1,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_2_1,"bone_chestplate_pw2",0.1,'multiply_total')
    })
    //腾炎套
    Event.modify('cataclysm:ignitium_helmet',item=>{
        item.addAttribute("minecraft:generic.attack_damage",uuid_1_0,'ignitium_helmet_dmg',0.75,"addition")
        item.addAttribute("goety_revelation:spell_power",uuid_1_1,'ignitium_helmet_power',1.25,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_1_2,'ignitium_helmet_power2',0.15,'addition')
        item.addAttribute("goety_revelation:spell_cooldown",uuid_1_3,'ignitium_helmet_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_1_4,"ignitium_helmet_cd2",0.1,"multiply_total")
        item.addAttribute('goeticlegacy:magic_damage_multiplier',uuid_1_5,'ignitium_helmet_mdm',0.1,"addition")
        item.setMaxDamage(770)
    })
    Event.modify('cataclysm:ignitium_chestplate',item=>{
        item.addAttribute("minecraft:generic.attack_damage",uuid_2_0,'ignitium_chestplate_dmg',2,"addition")
        item.addAttribute("goety_revelation:spell_power",uuid_2_1,'ignitium_chestplate_power',0.75,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_2_2,'ignitium_chestplate_power2',0.15,'addition')
        item.addAttribute("goety_revelation:spell_cooldown",uuid_2_3,'ignitium_chestplate_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_2_4,"ignitium_chestplate_cd2",0.1,"multiply_total")
        item.addAttribute('goeticlegacy:magic_damage_multiplier',uuid_2_5,'ignitium_chestplate_mdm',0.08,"addition")
        item.setMaxDamage(1120)
    })
    Event.modify('cataclysm:ignitium_elytra_chestplate',item=>{
        item.addAttribute("minecraft:generic.attack_damage",uuid_2_0,'ignitium_chestplate_dmg',2,"addition")
        item.addAttribute("goety_revelation:spell_power",uuid_2_1,'ignitium_chestplate_power',0.75,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_2_2,'ignitium_chestplate_power2',0.15,'addition')
        item.addAttribute("goety_revelation:spell_cooldown",uuid_2_3,'ignitium_chestplate_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_2_4,"ignitium_chestplate_cd2",0.1,"multiply_total")
        item.addAttribute('goeticlegacy:magic_damage_multiplier',uuid_2_5,'ignitium_chestplate_mdm',0.08,"addition")
        item.setMaxDamage(1120)
    })
    Event.modify('cataclysm:ignitium_leggings',item=>{
        item.addAttribute("minecraft:generic.attack_damage",uuid_3_0,'ignitium_leggings_dmg',0.12,"multiply_total")
        item.addAttribute("goety_revelation:spell_power",uuid_3_1,'ignitium_leggings_power',0.75,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_3_2,'ignitium_leggings_power2',0.15,'addition')
        item.addAttribute("goety_revelation:spell_cooldown",uuid_3_3,'ignitium_leggings_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_3_4,"ignitium_leggings_cd2",0.1,"multiply_total")
        item.addAttribute('goeticlegacy:magic_damage_multiplier',uuid_3_5,'ignitium_leggings_mdm',0.08,"addition")
        item.setMaxDamage(1050)
    })
    Event.modify('cataclysm:ignitium_boots',item=>{
        item.addAttribute("goety_revelation:spell_power",uuid_4_1,'ignitium_boots_power',0.75,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_4_2,'ignitium_boots_power2',0.15,'addition')
        item.addAttribute("goety_revelation:spell_cooldown",uuid_4_3,'ignitium_boots_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_4_4,"ignitium_boots_cd2",0.1,"multiply_total")
        item.addAttribute('goeticlegacy:magic_damage_multiplier',uuid_4_5,'ignitium_boots_mdm',0.08,"addition")
        item.setMaxDamage(910)
    })
    //咒魂套
    Event.modify('cataclysm:cursium_helmet',item=>{
        item.addAttribute("minecraft:generic.attack_damage",uuid_1_0,'cursium_helmet_dmg',2,"addition")
        item.addAttribute("goety_revelation:spell_power",uuid_1_1,'cursium_helmet_power',0.75,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_1_2,'cursium_helmet_power2',0.15,'addition')
        item.addAttribute("goety_revelation:spell_cooldown",uuid_1_3,'cursium_helmet_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_1_4,"cursium_helmet_cd2",0.1,"multiply_total")
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_1_5,'cursium_helmet_sfdm',0.25,'addition')
        item.setMaxDamage(770)
    })
    Event.modify('cataclysm:cursium_chestplate',item=>{
        item.addAttribute("minecraft:generic.attack_damage",uuid_2_0,'cursium_chestplate_dmg',2,"addition")
        item.addAttribute("goety_revelation:spell_power",uuid_2_1,'cursium_chestplate_power',0.75,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_2_2,'cursium_chestplate_power2',0.15,'addition')
        item.addAttribute("goety_revelation:spell_cooldown",uuid_2_3,'cursium_chestplate_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_2_4,"cursium_chestplate_cd2",0.1,"multiply_total")
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_2_5,'cursium_chestplate_sfdm',0.25,'addition')
        item.setMaxDamage(1120)
    })
    Event.modify('cataclysm:cursium_leggings',item=>{
        item.addAttribute("minecraft:generic.attack_damage",uuid_3_0,'cursium_leggings_dmg',0.15,"multiply_total")
        item.addAttribute("goety_revelation:spell_power",uuid_3_1,'cursium_leggings_power',0.75,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_3_2,'cursium_leggings_power2',0.15,'addition')
        item.addAttribute("goety_revelation:spell_cooldown",uuid_3_3,'cursium_chestplate_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_3_4,"cursium_chestplate_cd2",0.1,"multiply_total")
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_3_5,'cursium_leggings_sfdm',0.25,'addition')
        item.setMaxDamage(1050)
    })
    Event.modify('cataclysm:cursium_boots',item=>{
        item.addAttribute("goety_revelation:spell_power",uuid_4_0,'cursium_boots_power',0.75,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_4_1,'cursium_boots_power2',0.15,'addition')
        item.addAttribute("goety_revelation:spell_cooldown",uuid_4_2,'cursium_boots_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_4_3,"cursium_boots_cd2",0.1,"multiply_total")
        item.addAttribute('goeticlegacy:servant_final_damage_multiplier',uuid_4_4,'cursium_boots_sfdm',0.25,'addition')
        item.setMaxDamage(910)
    })
    
    //无瑕套
    Event.modify('goeticlegacy:holy_helmet',item=>{
        item.addAttribute("goety_revelation:spell_power",uuid_1_0,'holy_helmet_power',0.4,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_1_1,"holy_helmet_power2",0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage',uuid_1_2,"holy_helmet_atk",-0.15,'multiply_base')
        item.addAttribute("goeticlegacy:servant_final_damage_multiplier",uuid_1_3,"holy_helmet_sfdm",-0.15,"multiply_base")
        item.addAttribute("goety_revelation:spell_cooldown",uuid_1_4,'holy_helmet_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_1_5,"holy_helmet_cd2",0.1,"multiply_total")
    })
    Event.modify('goeticlegacy:holy_chestplate',item=>{
        item.addAttribute("goety_revelation:spell_power",uuid_2_0,'holy_chestplate_power',0.4,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_2_1,"holy_chestplate_power2",0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage',uuid_2_2,"holy_chestplate_atk",-0.15,'multiply_base')
        item.addAttribute("goeticlegacy:servant_final_damage_multiplier",uuid_2_3,"holy_chestplate_sfdm",-0.15,"multiply_base")
        item.addAttribute("goety_revelation:spell_cooldown",uuid_2_4,'holy_chestplate_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_2_5,"holy_chestplate_cd2",0.1,"multiply_total")
    })
    Event.modify('goeticlegacy:holy_leggings',item=>{
        item.addAttribute("goety_revelation:spell_power",uuid_3_0,'holy_leggings_power',0.4,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_3_1,"holy_leggings_power2",0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage',uuid_3_2,"holy_leggings_atk",-0.15,'multiply_base')
        item.addAttribute("goeticlegacy:servant_final_damage_multiplier",uuid_3_3,"holy_leggings_sfdm",-0.15,"multiply_base")
        item.addAttribute("goety_revelation:spell_cooldown",uuid_3_4,'holy_leggings_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_3_5,"holy_leggings_cd2",0.1,"multiply_total")
    })
    Event.modify('goeticlegacy:holy_boots',item=>{
        item.addAttribute("goety_revelation:spell_power",uuid_4_0,'holy_boots_power',0.4,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier',uuid_4_1,"holy_boots_power2",0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage',uuid_4_2,"holy_boots_atk",-0.15,'multiply_base')
        item.addAttribute("goeticlegacy:servant_final_damage_multiplier",uuid_4_3,"holy_boots_sfdm",-0.15,"multiply_base")
        item.addAttribute("goety_revelation:spell_cooldown",uuid_4_4,'holy_boots_cd1',0.1,'multiply_total')
        item.addAttribute("goety_revelation:cast_duration",uuid_4_5,"holy_boots_cd2",0.1,"multiply_total")
    })
})

BlockEvents.modification(event=>{
    event.modify('goetyawaken:nether_reactor_core',block=>{
        block.setExplosionResistance(3600000)
    })
})

ForgeEvents.onEvent('net.minecraftforge.event.ItemAttributeModifierEvent',event=>{
    let itemStack = event.getItemStack()
    let slot = event.getSlotType()
    let EquipmentSlot = Java.loadClass("net.minecraft.world.entity.EquipmentSlot")
    let AttribuetModifier = Java.loadClass("net.minecraft.world.entity.ai.attributes.AttributeModifier")
    if(itemStack.id == "goety:nameless_staff" &&(slot == EquipmentSlot.MAINHAND || slot == EquipmentSlot.OFFHAND)){
        event.addModifier(
            "goety_revelation:necromancy_power",
            new AttribuetModifier(
                UUID.fromString("0b0ea01d-bcbe-40a3-bb29-1250a7c0f3dd"),
                "tool_modifier",
                1.5,
                AttribuetModifier.Operation.ADDITION
            )
        ),
        event.addModifier(
            "goety_revelation:spell_power_multiplier",
            new AttribuetModifier(
                UUID.fromString("fdd038b6-bd4b-4ee7-9e30-75fc1f960605"),
                "tool_modifier",
                0.2,
                AttribuetModifier.Operation.MULTIPLY_BASE
            )
        ),
        event.addModifier(
            "goety_revelation:spell_cooldown",
            new AttribuetModifier(
                UUID.fromString("7ed6ae26-922f-4861-8cf8-bcb2aedf87b3"),
                "tool_modifier",
                0.25,
                AttribuetModifier.Operation.MULTIPLY_BASE
            )
        )
    }
    if(itemStack.id == "goety_ladder:voiderror_staff" &&(slot == EquipmentSlot.MAINHAND || slot == EquipmentSlot.OFFHAND)){
        event.addModifier(
            "goety_revelation:void_power",
            new AttribuetModifier(
                UUID.fromString("0b0ea01d-bcbe-40a3-bb29-1250a7c0f3dd"),
                "tool_modifier",
                1.5,
                AttribuetModifier.Operation.ADDITION
            )
        ),
        event.addModifier(
            "goety_revelation:spell_power_multiplier",
            new AttribuetModifier(
                UUID.fromString("fdd038b6-bd4b-4ee7-9e30-75fc1f960605"),
                "tool_modifier",
                0.2,
                AttribuetModifier.Operation.MULTIPLY_BASE
            )
        ),
        event.addModifier(
            "goety_revelation:spell_cooldown",
            new AttribuetModifier(
                UUID.fromString("7ed6ae26-922f-4861-8cf8-bcb2aedf87b3"),
                "tool_modifier",
                0.25,
                AttribuetModifier.Operation.MULTIPLY_BASE
            )
        )
    }
})
