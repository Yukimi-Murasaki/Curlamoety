ItemEvents.modification(Event=>{//数值调整
    Event.modify('goety:black_iron_helmet',item=>{//黑铁套
        item.addAttribute('goety_revelation:spell_power','234413d6-aeba-4ce9-b746-4fad6f375f58','black_iron_helmet_power',1,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier','b9b165eb-9233-4f55-8521-2ee11ac94dae','black_iron_helmet_power2',0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage','ba374d4f-bc72-45d2-ac48-2d26b261b0f4','black_iron_helmet_atk',0.05,'multiply_total')
    })
    Event.modify('goety:black_iron_chestplate',item=>{
        item.addAttribute('goety_revelation:spell_power','e77238ae-c02f-4a1f-8539-f99e271309a8','black_iron_chestplate_power',1,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier','fb3f831c-e900-45b8-9cd7-1037c810eba1','black_iron_chestplate_power2',0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage','f9f8612c-c0b9-4355-a62e-ab30f1114f1e','black_iron_chestplate_atk',1,'addition')
    })
    Event.modify('goety:black_iron_leggings',item=>{
        item.addAttribute('goety_revelation:spell_power','9eb47165-ff51-4eb0-bac8-f408642dfbbf','black_iron_leggings_power',1,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier','da969a90-d36e-485d-b66c-ea64ac750a3c','black_iron_leggings_power2',0.1,'addition')
        item.addAttribute('goety_revelation:spell_cooldown','8dac312d-048b-4724-960a-fa1b7f5935bd','black_iron_leggings_cd1',0.1,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration','ba4ea745-3e8f-4dd7-8e58-9eb359794412','black_iron_leggings_cd2',0.1,'multiply_total')
    })
    Event.modify('goety:black_iron_boots',item=>{
        item.addAttribute('goety_revelation:spell_power','43bdceab-293d-4970-a93c-45408e094156','black_iron_boots_power',1,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier','749420ea-7a10-4484-bdd7-f38c19d0cd78','black_iron_boots_power2',0.1,'addition')
        item.addAttribute('goety_revelation:spell_cooldown','475c6916-0347-49fa-bd2d-01b879caccbb','black_iron_boots_cd1',0.1,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration','3d54f45d-84df-432d-ba7a-284fa80fc235','black_iron_boots_cd2',0.1,'multiply_total')
    })
    Event.modify('goety:dark_helmet',item=>{//黑暗金属套
        item.addAttribute('goety_revelation:spell_power','a4e1b39b-6a0b-4a04-b608-c4af25c585b9','dark_helmet_power',1.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier','e4b7e1c6-b487-426f-8288-2d52ab3a8170','dark_helmet_power2',0.2,'addition')
        item.addAttribute('minecraft:generic.attack_damage','f98ca122-f3e5-4aed-8e75-ea5c2a38b512','dark_helmet_dmg',1,'addition')
        item.addAttribute('goety_revelation:spell_cooldown','d38ad7fb-50a2-4ace-91ca-e20ef5b55aa6','dark_helmet_cd1',0.1,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration','47980a9a-f301-49cf-a359-339f0cbb43a6','dark_helmet_cd2',0.1,'multiply_total')
    })
    Event.modify('goety:dark_chestplate',item=>{
        item.addAttribute('goety_revelation:spell_power','ec674620-d738-4720-93e3-66fd0a75371a','dark_chestplate_power',1.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier','5de3a194-db73-413c-a5ce-a437ed8064dc','dark_chestplate_power2',0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage','796c19e7-e6b6-40f8-990f-33aff7167a85','dark_chestplate_dmg',1,'addition')
    })
    Event.modify('goety:dark_leggings',item=>{
        item.addAttribute('goety_revelation:spell_power','45e65666-8690-449b-ac24-cba48976ad03','dark_leggings_power',1.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier','57738426-e78f-4c22-bad7-200765296806','dark_leggings_power2',0.1,'addition')
        item.addAttribute('goety_revelation:spell_cooldown','b25e3720-589e-4215-9585-135fb6ad78bc','dark_leggings_cd1',0.1,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration','2364b7a1-a7f6-4474-8d2d-74c481b00244','dark_leggings_cd2',0.1,'multiply_total')
    })
    Event.modify('goety:dark_boots',item=>{
        item.addAttribute('goety_revelation:spell_power','2f0992b6-c6e9-4347-a3fd-71191d561ba8','dark_boots_power',1.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier','9700daeb-4cd0-4911-bca6-895155072647','dark_boots_power2',0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage','5b1393d6-ab7b-45d7-8d00-7c0949772c98','dark_chestplate_dmg',0.07,'multiply_total')
        item.addAttribute('goety_revelation:spell_cooldown','f64d9425-f056-4672-96eb-153afe6a4b48','dark_boots_cd1',0.1,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration','7e955ec1-b2c9-4342-b8e1-7f53cb2c2486','dark_boots_cd2',0.1,'multiply_total')
    })
    Event.modify('curlamoety:mary_sue_staff',item=>{//玛丽苏的枝杖
        item.addAttribute('forge:entity_reach','35c9d1e6-f0ce-407f-8248-0e78c19a34ec','elf_reach',2,'addition')
        item.addAttribute('goety_revelation:armor_penetration','17846ae2-4fc6-4811-915d-4dd55ffc749b','elf_magic1',1,'addition')
        item.addAttribute('goety_revelation:enchantment_piercing','e923d2ff-eb6a-4eca-8a92-a3aea53a2ac0','elf_magic2',1,'addition')
    })
    Event.modify('curlamoety:mary_sue_staff_plus',item=>{
        item.addAttribute('forge:entity_reach','38637941-bf75-49c6-a2f0-429331c76a91','elf_reach',3,'addition')
        item.addAttribute('goety_revelation:armor_penetration','76bdff74-bcc6-4156-a62e-e2a32f1d28e1','elf_magic1',1,'addition')
        item.addAttribute('goety_revelation:enchantment_piercing','f408f448-b0ba-40dc-b26f-e0c34d60d3b4','elf_magic2',1,'addition')
    })

    Event.modify('curlamoety:insulator',item=>{//疏离
        item.setMaxDamage(1450)
    })

    Event.modify('curlamoety:prisoner_pickaxe',item=>{//囚犯镐
        item.setDigSpeed(0)
    })
    
    Event.modify('curlamoety:the_hair',item=>{//紫套装
        item.setMaxDamage(1450)
        item.addAttribute('goety_revelation:spell_power','2db98087-1e68-4b48-97b2-426b54a064b2','murasaki_spell_power',50,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier','2ff12060-8169-4ef2-9e72-e71139bbf10d','murasaki_spell_power_multiplier',5,'addition')
    })

    Event.modify('curlamoety:the_kimono',item=>{
        item.setMaxDamage(1450)
        item.addAttribute('goety_revelation:resistance','ed9ed0bd-a1dc-406b-b9d9-e2be865a5407','murasaki_resistance',1,'addition')
    })

    Event.modify('curlamoety:the_bottom',item=>{
        item.setMaxDamage(1450)
        item.addAttribute('minecraft:generic.attack_damage','980ac724-bd62-47dc-8414-c167597ccd48','murasaki_attack_damage',100,'addition')
    })

    Event.modify('curlamoety:the_clogs',item=>{
        item.setMaxDamage(1450)
        item.addAttribute('goety_revelation:spell_cooldown','c0133f6c-5925-4f1d-9326-be9555d02a0b','murasaki_cd1',0.5,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration','2179cc4e-20e1-4fd1-80d6-f3e24d943d5d','murasaki_cd2',0.5,'multiply_total')
    })

    Event.modify('curlamoety:chlorophium_breaker',item=>{//叶绿破坏者
        item.setDigSpeed(12)
    })

    Event.modify('goetyawaken:champion_helmet',item=>{//冠军套
        item.addAttribute('goety_revelation:spell_power','5bac45b0-f54e-4024-85df-51130d7a0278','champion_helmet_power',1.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier','d0da0639-0168-4901-a07f-c0d7fd174bdc','champion_helmet_power2',0.2,'addition')
        item.addAttribute('minecraft:generic.attack_damage','efeffea9-d559-4177-b57f-7e3dcd22db51','champion_helmet_dmg',5,'addition')
        item.addAttribute('goety_revelation:spell_cooldown','816487aa-8c31-4b24-8eb2-315897178687','champion_helmet_cd1',0.1,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration','28215f4c-970f-4cea-9ac6-521d99d19ae3','champion_helmet_cd2',0.1,'multiply_total')
    })
    Event.modify('goetyawaken:champion_chestplate',item=>{
        item.addAttribute('goety_revelation:spell_power','5540bb80-5920-435c-bee0-36c25e0933cb','champion_chestplate_power',1.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier','1e89d5a9-56ee-4727-b46b-92d9c65b6ea2','champion_chestplate_power2',0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage','50b39bbd-6af5-4f80-bc91-78015cbcdc3b','champion_chestplate_dmg',5,'addition')
        item.addAttribute('goety_revelation:spell_cooldown','36446e43-be66-43a2-8ce9-05b73f74c055','champion_chestplate_cd1',0.1,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration','86a0f294-efd8-4aef-9b25-dc04e425136a','champion_chestplate_cd2',0.1,'multiply_total')
    })
    Event.modify('goetyawaken:champion_leggings',item=>{
        item.addAttribute('goety_revelation:spell_power','879cae5a-48c7-443f-8612-83235c2270cd','champion_leggings_power',1.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier','73c053ac-c9bd-49d4-938b-e805310e930b','champion_leggings_power2',0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage','6e5e7919-bfe2-47f2-9ead-05bd0c13424c','champion_leggings_dmg',0.1,'multiply_total')
        item.addAttribute('goety_revelation:spell_cooldown','1d0324da-c145-4d5f-9366-47154ab450ad','champion_leggings_cd1',0.1,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration','6a310336-06ea-4bdb-b8d9-ebb0f416a22d','champion_leggings_cd2',0.1,'multiply_total')
    })
    Event.modify('goetyawaken:champion_boots',item=>{
        item.addAttribute('goety_revelation:spell_power','88bc47b0-81f8-40e7-bd7a-b2f216a4ab88','champion_boots_power',1.5,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier','3168713f-03fc-4ca0-90eb-dcc80a5c8cdf','champion_boots_power2',0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage','e4f7601e-7238-40d9-9a7d-d2bc17c6e632','champion_chestplate_dmg',0.1,'multiply_total')
        item.addAttribute('goety_revelation:spell_cooldown','6b11293e-ad45-4a50-ae1e-8d4e560182b2','champion_boots_cd1',0.1,'multiply_total')
        item.addAttribute('goety_revelation:cast_duration','c866bba3-0cfe-493d-aa8b-0737bddb2273','champion_boots_cd2',0.1,'multiply_total')
    })
    Event.modify('goety:malefic_helm',item=>{
        item.addAttribute('goety_revelation:spell_power','6c06755d-cc14-4a32-bf58-f705b4bf0363','malefic_helm_power',3,'addition')
        item.addAttribute('goety_revelation:spell_power_multiplier','706d15af-b5d8-4da4-83cb-927ad5a6a1c7','malefic_helm_power2',0.1,'addition')
        item.addAttribute('minecraft:generic.attack_damage','4be14e73-7509-4270-b362-0bdaa3208a4f','malefic_helm_atk',0.05,'multiply_total')
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
})
