let $CuriosAPI = Java.loadClass('top.theillusivec4.curios.api.CuriosApi')
let $SuperpositionHandler = Java.loadClass("com.aizistral.enigmaticlegacy.handlers.SuperpositionHandler")
let $SuperAddonHandler = Java.loadClass("auviotre.enigmatic.addon.handlers.SuperAddonHandler")
StartupEvents.registry('item', event => {
    event.create('curlamoety:old_necklace')//老旧项链
    .rarity("common")
    .attachCuriosCapability(
        CuriosJSCapabilityBuilder.create()
            .curioTick((slotContext, stack) => { })
            .onEquip((slotContext, oldStack, newStack) => { })
            .onUnequip((slotContext, oldStack, newStack) => { })
            .canEquip((slotContext, stack) => {
                let entity = slotContext.entity()
                if(entity && (entity.isCuriosEquipped("curlamoety:old_necklace")||entity.isCuriosEquipped("curlamoety:soul_necklace")||entity.isCuriosEquipped("curlamoety:death_necklace")||entity.isCuriosEquipped("curlamoety:faith_necklace"))){
                    return false
                }else{
                    return true
                }
            })
            .canUnequip((slotContext, stack) => true)
            .modifySlotsTooltip((tooltips, stack) => tooltips)
            .addAttribute("goety_revelation:spell_power",'old_necklace_pw',2,'addition')
            .modifyAttribute(attributeModificationContext => {
                let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                attributeModificationContext.modify("goety_revelation:soul_decrease_reduction",'old_necklace_sdr',0.08,'addition')
                attributeModificationContext.modify("minecraft:generic.luck",'old_necklace_luck',6,'addition')
                attributeModificationContext.modify("goety_revelation:spell_duration",'old_necklace_sd',0.5,'addition')
                attributeModificationContext.modify("goeticlegacy:soul_regen",'old_necklace_sr',10,'addition')
            })
            .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
            .modifyAttributesTooltip((tooltips, stack) => tooltips)
            .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
            .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
            .makesPiglinsNeutral((slotContext, stack) => false)
            .canWalkOnPowderedSnow((slotContext, stack) => false)
            .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:necklace")

    event.create('curlamoety:soul_necklace')//蕴魂项链
    .rarity("uncommon")
    .attachCuriosCapability(
        CuriosJSCapabilityBuilder.create()
        .curioTick((slotContext, stack) => { })
        .onEquip((slotContext, oldStack, newStack) => { })
        .onUnequip((slotContext, oldStack, newStack) => { })
        .canEquip((slotContext, stack) => {
                let entity = slotContext.entity()
                if(entity && (entity.isCuriosEquipped("curlamoety:old_necklace")||entity.isCuriosEquipped("curlamoety:soul_necklace")||entity.isCuriosEquipped("curlamoety:death_necklace")||entity.isCuriosEquipped("curlamoety:faith_necklace"))){
                    return false
                }else{
                    return true
                }
            })
        .canUnequip((slotContext, stack) => true)
        .modifySlotsTooltip((tooltips, stack) => tooltips)
        .addAttribute("goety_revelation:spell_power",'soul_necklace_pw',4,'addition')
        .modifyAttribute(attributeModificationContext => {
            let { slotContext, UUID, stack, modifiers } = attributeModificationContext
            attributeModificationContext.modify("goety_revelation:soul_decrease_reduction",'soul_necklace_sdr',0.10,'addition')
            attributeModificationContext.modify("minecraft:generic.luck",'soul_necklace_luck',8,'addition')
            attributeModificationContext.modify("goety_revelation:spell_duration",'soul_necklace_sd',1,'addition')
            attributeModificationContext.modify("goeticlegacy:soul_regen_ratio",'soul_necklace_srr',0.15,'addition')
        })
        .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
        .modifyAttributesTooltip((tooltips, stack) => tooltips)
        .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
        .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
        .makesPiglinsNeutral((slotContext, stack) => false)
        .canWalkOnPowderedSnow((slotContext, stack) => false)
        .isEnderMask((slotContext, enderMan, stack) => false)
    )
    .maxStackSize(1)
    .tag("curios:necklace")

    event.create('curlamoety:death_necklace')//死神项链
    .rarity("uncommon")
    .attachCuriosCapability(
        CuriosJSCapabilityBuilder.create()
        .curioTick((slotContext, stack) => { })
        .onEquip((slotContext, oldStack, newStack) => { })
        .onUnequip((slotContext, oldStack, newStack) => { })
        .canEquip((slotContext, stack) => {
                let entity = slotContext.entity()
                if(entity && (entity.isCuriosEquipped("curlamoety:old_necklace")||entity.isCuriosEquipped("curlamoety:soul_necklace")||entity.isCuriosEquipped("curlamoety:death_necklace")||entity.isCuriosEquipped("curlamoety:faith_necklace"))){
                    return false
                }else{
                    return true
                }
            })
        .canUnequip((slotContext, stack) => true)
        .modifySlotsTooltip((tooltips, stack) => tooltips)
        .addAttribute(
            "goety_revelation:spell_power",
            'death_necklace_pw',
            5,
            'addition'
        )
        .modifyAttribute(attributeModificationContext => {
            let { slotContext, UUID, stack, modifiers } = attributeModificationContext
            attributeModificationContext.modify(
                "goety_revelation:spell_power_multiplier",
                'death_necklace_pw2',
                0.3,
                'addition'
            )
            attributeModificationContext.modify(
                "goety_revelation:soul_decrease_reduction",
                'death_necklace_sdr',
                0.12,
                'addition'
            )
            attributeModificationContext.modify(
                "minecraft:generic.luck",
                'death_necklace_luck',
                10,
                'addition'
            )
            attributeModificationContext.modify(
                "goety_revelation:spell_duration",
                'death_necklace_sd',
                1.5,
                'addition'
            )
            attributeModificationContext.modify(
                "goeticlegacy:soul_regen_ratio",
                'death_necklace_srr',
                0.25,
                'addition'
            )
        })
        .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
        .modifyAttributesTooltip((tooltips, stack) => tooltips)
        .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
        .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
        .makesPiglinsNeutral((slotContext, stack) => false)
        .canWalkOnPowderedSnow((slotContext, stack) => false)
        .isEnderMask((slotContext, enderMan, stack) => false)
    )
    .maxStackSize(1)
    .tag("curios:necklace")

    event.create('curlamoety:faith_necklace')//信仰项链
    .rarity("rare")
    .attachCuriosCapability(
        CuriosJSCapabilityBuilder.create()
        .curioTick((slotContext, stack) => { })
        .onEquip((slotContext, oldStack, newStack) => { })
        .onUnequip((slotContext, oldStack, newStack) => { })
        .canEquip((slotContext, stack) => {
                let entity = slotContext.entity()
                if(entity && (entity.isCuriosEquipped("curlamoety:old_necklace")||entity.isCuriosEquipped("curlamoety:soul_necklace")||entity.isCuriosEquipped("curlamoety:death_necklace")||entity.isCuriosEquipped("curlamoety:faith_necklace"))){
                    return false
                }else{
                    return true
                }
            })
        .canUnequip((slotContext, stack) => true)
        .modifySlotsTooltip((tooltips, stack) => tooltips)
        .addAttribute(
            "goety_revelation:spell_power",
            'faith_necklace_pw',
            6,
            'addition'
        )
        .modifyAttribute(attributeModificationContext => {
            let { slotContext, UUID, stack, modifiers } = attributeModificationContext
            attributeModificationContext.modify(
                "goety_revelation:spell_power_multiplier",
                'faith_necklace_pw2',
                0.5,
                'addition'
            )
            attributeModificationContext.modify(
                "goety_revelation:soul_decrease_reduction",
                'faith_necklace_sdr',
                0.16,
                'addition'
            )
            attributeModificationContext.modify(
                "minecraft:generic.luck",
                'faith_necklace_luck',
                15,
                'addition'
            )
            attributeModificationContext.modify(
                "goety_revelation:spell_duration",
                'faith_necklace_sd',
                2,
                'addition'
            )
            attributeModificationContext.modify(
                "goeticlegacy:soul_regen_ratio",
                'faith_necklace_srr',
                0.4,
                'addition'
            )
            
        })
        .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
        .modifyAttributesTooltip((tooltips, stack) => tooltips)
        .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
        .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
        .makesPiglinsNeutral((slotContext, stack) => false)
        .canWalkOnPowderedSnow((slotContext, stack) => false)
        .isEnderMask((slotContext, enderMan, stack) => false)
    )
    .maxStackSize(1)
    .tag("curios:necklace")

    event.create('curlamoety:explorer_gloves')//探险者手套
    .rarity("common")
    .attachCuriosCapability(
        CuriosJSCapabilityBuilder.create()
        .curioTick((slotContext, stack) => { })
        .onEquip((slotContext, oldStack, newStack) => { })
        .onUnequip((slotContext, oldStack, newStack) => { })
        .canEquip((slotContext, stack) => {
                let entity = slotContext.entity()
                if(entity && (entity.isCuriosEquipped("curlamoety:explorer_gloves")||entity.isCuriosEquipped("curlamoety:pioneer_gloves")||entity.isCuriosEquipped("curlamoety:conqueror_gloves")||entity.isCuriosEquipped("curlamoety:elemental_gloves"))){
                    return false
                }else{
                    return true
                }
            })
        .canUnequip((slotContext, stack) => true)
        .modifySlotsTooltip((tooltips, stack) => tooltips)
        .addAttribute("minecraft:generic.attack_damage",'explorer_gloves_atkdmg',0.15,'multiply_total')
        .addAttribute("minecraft:generic.attack_damage",'explorer_gloves_atkdmg2',1,'addition')
        .modifyAttribute(attributeModificationContext => {
            let { slotContext, UUID, stack, modifiers } = attributeModificationContext
            //attributeModificationContext.modify("goety:spell_velocity",'explorer_gloves_sv',0.5,'addition')
        })
        .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
        .modifyAttributesTooltip((tooltips, stack) => tooltips)
        .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
        .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 1)
        .makesPiglinsNeutral((slotContext, stack) => false)
        .canWalkOnPowderedSnow((slotContext, stack) => false)
        .isEnderMask((slotContext, enderMan, stack) => false)
    )
    .maxStackSize(1)
    .tag("curios:hands")

    event.create('curlamoety:pioneer_gloves')//开拓者手套
        .rarity("uncommon")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => {
                    let entity = slotContext.entity()
                    if(entity && (entity.isCuriosEquipped("curlamoety:explorer_gloves")||entity.isCuriosEquipped("curlamoety:pioneer_gloves")||entity.isCuriosEquipped("curlamoety:conqueror_gloves")||entity.isCuriosEquipped("curlamoety:elemental_gloves"))){
                        return false
                    }else{
                        return true
                    }
                })
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "minecraft:generic.attack_damage",
                        'pioneer_gloves_atkdmg',
                        0.2,
                        'multiply_total'
                )
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    attributeModificationContext.modify(
                        "minecraft:generic.attack_damage",
                        'pioneer_gloves_atkdmg2',
                        1,
                        'addition'
                    )
                    attributeModificationContext.modify(
                        "forge:block_reach",
                        'pioneer_gloves_br',
                        0.5,
                        'addition'
                    )
                    attributeModificationContext.modify(
                        "forge:entity_reach",
                        'pioneer_gloves_er',
                        0.5,
                        'addition'
                    )
                    attributeModificationContext.modify(
                        "minecraft:generic.armor",
                        'pioneer_gloves_def',
                        2,
                        'addition'
                    )
                })
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 2)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:hands")

    event.create('curlamoety:conqueror_gloves')//征服者手套
        .rarity("uncommon")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => {
                    let entity = slotContext.entity()
                    if(entity && (entity.isCuriosEquipped("curlamoety:explorer_gloves")||entity.isCuriosEquipped("curlamoety:pioneer_gloves")||entity.isCuriosEquipped("curlamoety:conqueror_gloves")||entity.isCuriosEquipped("curlamoety:elemental_gloves"))){
                        return false
                    }else{
                        return true
                    }
                })
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "minecraft:generic.attack_speed",
                    'conqueror_gloves_atkspd',
                    0.05,
                    'addition'
                )
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    attributeModificationContext.modify(
                        "minecraft:generic.attack_damage",
                        'conqueror_gloves_atkdmg',
                        0.2,
                        'multiply_total'
                    )
                    attributeModificationContext.modify(
                        "minecraft:generic.attack_damage",
                        'conqueror_gloves_atkdmg2',
                        2,
                        'addition'
                    )
                    attributeModificationContext.modify(
                        "forge:block_reach",
                        'conqueror_gloves_br',
                        0.75,
                        'addition'
                    )
                    attributeModificationContext.modify(
                        "forge:entity_reach",
                        'conqueror_gloves_er',
                        0.75,
                        'addition'
                    )
                    attributeModificationContext.modify(
                        "minecraft:generic.armor",
                        'conqueror_gloves_def',
                        2,
                        'addition'
                    )
                })
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 2 )
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:hands")
        
        event.create('curlamoety:elemental_gloves')//元素手套
        .rarity("rare")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => {
                    let entity = slotContext.entity()
                    if(entity && (entity.isCuriosEquipped("curlamoety:explorer_gloves")||entity.isCuriosEquipped("curlamoety:pioneer_gloves")||entity.isCuriosEquipped("curlamoety:conqueror_gloves")||entity.isCuriosEquipped("curlamoety:elemental_gloves"))){
                        return false
                    }else{
                        return true
                    }
                })
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "minecraft:generic.attack_speed",
                    'elemental_gloves_atkspd',
                    0.1,
                    'addition'
                )
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    attributeModificationContext.modify(
                        "minecraft:generic.attack_damage",
                        'elemental_gloves_atkdmg',
                        0.25,
                        'multiply_total'
                    )
                    attributeModificationContext.modify(
                        "minecraft:generic.attack_damage",
                        'elemental_gloves_atkdmg2',
                        2,
                        'addition'
                    )
                    attributeModificationContext.modify(
                        "forge:block_reach",
                        'elemental_gloves_br',
                        1,
                        'addition'
                    )
                    attributeModificationContext.modify(
                        "forge:entity_reach",
                        'elemental_gloves_er',
                        1,
                        'addition'
                    )
                    attributeModificationContext.modify(
                        "minecraft:generic.armor",
                        'elemental_gloves_def',
                        2,
                        'addition'
                    )
                })
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 2)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:hands")

    event.create('curlamoety:kitchen_gloves')//厨房手套
        .rarity("common")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => {
                    let entity = slotContext.entity()
                    if(entity && (entity.isCuriosEquipped("curlamoety:kitchen_gloves")||entity.isCuriosEquipped("curlamoety:pioneer_gloves")||entity.isCuriosEquipped("curlamoety:conqueror_gloves")||entity.isCuriosEquipped("curlamoety:elemental_gloves"))){
                        return false
                    }else{
                        return true
                    }
                })
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "minecraft:generic.armor",
                        'kitchen_gloves_def',
                        2,
                        'addition'
                )
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    attributeModificationContext.modify(
                        "forge:block_reach",
                        'kitchen_gloves_br',
                        0.5,
                        'addition'
                    )
                })
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 1)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:hands")

    event.create('curlamoety:evil_ring')//恶灵之戒
        .rarity("epic")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => {
                    let entity = slotContext.entity()
                    if(entity && $SuperAddonHandler.isOKOne(entity)){
                        if(entity.isCuriosEquipped("curlamoety:evil_ring")||entity.isCuriosEquipped("curlamoety:blood_ring")||entity.isCuriosEquipped("curlamoety:dominator_ring")||entity.isCuriosEquipped("curlamoety:stella_ring")){
                            return false
                        }else{
                            return true
                        }
                    }else{
                        return false
                    }
                })
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "goety_revelation:spell_power",
                    'evil_ring_pw',
                    5,
                    'addition'
                )
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    attributeModificationContext.modify(
                        "goety_revelation:spell_power_multiplier",
                        'evil_ring_pw2',
                        0.3,
                        'addition'
                    )
                    attributeModificationContext.modify(
                        "goety:spell_velocity",
                        'evil_ring_sv',
                        0.1,
                        'multiply_total'
                    )
                    attributeModificationContext.modify(
                        "goety_revelation:spell_cooldown",
                        'evil_ring_cd1',
                        0.1,
                        'multiply_base'
                    )
                    attributeModificationContext.modify(
                        "goety_revelation:cast_duration",
                        'evil_ring_cd2',
                        0.1,
                        'multiply_base'
                    )
                    attributeModificationContext.modify(
                        "goeticlegacy:magic_damage_multiplier",
                        'evil_ring_mdm',
                        0.05,
                        'addition'
                    )
                })
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:ring")


    event.create('curlamoety:blood_ring')//血海之戒
        .rarity("epic")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => {
                    let entity = slotContext.entity()
                    if(entity && $SuperAddonHandler.isOKOne(entity)){
                        if(entity.isCuriosEquipped("curlamoety:evil_ring")||entity.isCuriosEquipped("curlamoety:blood_ring")||entity.isCuriosEquipped("curlamoety:dominator_ring")||entity.isCuriosEquipped("curlamoety:stella_ring")){
                            return false
                        }else{
                            return true
                        }
                    }else{
                        return false
                    }
                })
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "goety_revelation:spell_power",
                    'blood_ring_pw',
                    9,
                    'addition'
                )
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    attributeModificationContext.modify(
                        "goety_revelation:spell_power_multiplier",
                        'blood_ring_pw2',
                        0.4,
                        'addition'
                    )
                    attributeModificationContext.modify(
                        "goety:spell_velocity",
                        'blood_ring_sv',
                        0.15,
                        'multiply_total'
                    )
                    attributeModificationContext.modify(
                        "goety_revelation:spell_cooldown",
                        'blood_ring_cd1',
                        0.2,
                        'multiply_base'
                    )
                    attributeModificationContext.modify(
                        "goety_revelation:cast_duration",
                        'blood_ring_cd2',
                        0.2,
                        'multiply_base'
                    )
                    attributeModificationContext.modify(
                        "goeticlegacy:magic_damage_multiplier",
                        'blood_ring_mdm',
                        0.07,
                        'addition'
                    )
                })
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:ring")
    
    event.create('curlamoety:dominator_ring')//主宰之戒
        .rarity("epic")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => {
                    let entity = slotContext.entity()
                    if(entity && $SuperAddonHandler.isOKOne(entity)){
                        if(entity.isCuriosEquipped("curlamoety:evil_ring")||entity.isCuriosEquipped("curlamoety:blood_ring")||entity.isCuriosEquipped("curlamoety:dominator_ring")||entity.isCuriosEquipped("curlamoety:stella_ring")){
                            return false
                        }else{
                            return true
                        }
                    }else{
                        return false
                    }
                })
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "goety_revelation:spell_power",
                    'dominator_ring_pw1',
                    12,
                    'addition'
                )
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    attributeModificationContext.modify(
                        "goety_revelation:spell_power_multiplier",
                        'dominator_ring_pw2',
                        0.5,
                        'addition'
                    )
                    attributeModificationContext.modify(
                        "goety:spell_velocity",
                        'dominator_ring_sv',
                        0.2,
                        'multiply_total'
                    )
                    attributeModificationContext.modify(
                        "goety_revelation:spell_cooldown",
                        'dominator_ring_cd1',
                        0.25,
                        'multiply_base'
                    )
                    attributeModificationContext.modify(
                        "goety_revelation:cast_duration",
                        'dominator_ring_cd2',
                        0.25,
                        'multiply_base'
                    )
                    attributeModificationContext.modify(
                        "goeticlegacy:magic_damage_multiplier",
                        'dominator_ring_mdm',
                        0.09,
                        'addition'
                    )
                    attributeModificationContext.modify(
                        "goeticlegacy:magic_invul_reduction",
                        'dominator_ring_mir',
                        5,
                        'addition'
                    )
                })
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:ring")

    event.create('curlamoety:stella_ring')//星光之戒
        .rarity("epic")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => {
                    let entity = slotContext.entity()
                    if(entity && $SuperAddonHandler.isOKOne(entity)){
                        if(entity.isCuriosEquipped("curlamoety:evil_ring")||entity.isCuriosEquipped("curlamoety:blood_ring")||entity.isCuriosEquipped("curlamoety:dominator_ring")||entity.isCuriosEquipped("curlamoety:stella_ring")){
                            return false
                        }else{
                            return true
                        }
                    }else{
                        return false
                    }
                })
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "goety_revelation:spell_power",
                    'stella_ring_pw1',
                    15,
                    'addition'
                )
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    attributeModificationContext.modify(
                        "goety_revelation:spell_power_multiplier",
                        'stella_ring_pw2',
                        0.6,
                        'addition'
                    )
                    attributeModificationContext.modify(
                        "goety:spell_velocity",
                        'stella_ring_sv',
                        0.25,
                        'multiply_total'
                    )
                    attributeModificationContext.modify(
                        "goety_revelation:spell_cooldown",
                        'stella_ring_cd1',
                        0.25,
                        'multiply_base'
                    )
                    attributeModificationContext.modify(
                        "goety_revelation:cast_duration",
                        'stella_ring_cd2',
                        0.25,
                        'multiply_base'
                    )
                    attributeModificationContext.modify(
                        "goeticlegacy:magic_damage_multiplier",
                        'stella_ring_mdm',
                        0.12,
                        'addition'
                    )
                    attributeModificationContext.modify(
                        "goeticlegacy:magic_invul_reduction",
                        'stella_ring_mir',
                        10,
                        'addition'
                    )
                })
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:ring")

    event.create('curlamoety:hiker_boots')//跋涉者之靴
        .rarity("common")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => {
                    let entity = slotContext.entity()
                    if(entity && (entity.isCuriosEquipped("curlamoety:hiker_boots")||entity.isCuriosEquipped("curlamoety:runner_boots"))){
                        return false
                    }else{
                        return true
                    }
                })
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "minecraft:generic.movement_speed",
                    'hiker_boots_spd',
                    0.1,
                    'multiply_total'
                )
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    attributeModificationContext.modify(
                        "goety:spell_velocity",
                        'hiker_boots_sv',
                        3,
                        'addition'
                    )
                    attributeModificationContext.modify(
                        "ending_library:multi_jump",
                        'hiker_boots_jump',
                        1,
                        'addition'
                    )
                    attributeModificationContext.modify(
                        "forge:step_height_addition",
                        'hiker_boots_step',
                        0.5,
                        'addition'
                    )
                })
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => true)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:feet")
        
    event.create('curlamoety:runner_boots')//疾驰之靴
        .rarity("uncommon")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => {
                    let entity = slotContext.entity()
                    if(entity && (entity.isCuriosEquipped("curlamoety:hiker_boots")||entity.isCuriosEquipped("curlamoety:runner_boots"))){
                        return false
                    }else{
                        return true
                    }
                })
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "minecraft:generic.movement_speed",
                    'runner_boots_spd',
                    0.15,
                    'multiply_total'
                )
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    attributeModificationContext.modify(
                        "goety:spell_velocity",
                        'runner_boots_sv',
                        5,
                        'addition'
                    )
                    attributeModificationContext.modify(
                        "minecraft:generic.flying_speed",
                        'runner_boots_fly',
                        0.15,
                        'multiply_total'
                    )
                    attributeModificationContext.modify(
                        "ending_library:multi_jump",
                        'runner_boots_jump',
                        1,
                        'addition'
                    )
                    attributeModificationContext.modify(
                        "forge:step_height_addition",
                        'runner_boots_step',
                        0.5,
                        'addition'
                    )
                })
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => true)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:feet")

    event.create('curlamoety:faded_promise')//褪色之诺
        .rarity("epic")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => {
                    let entity = slotContext.entity()
                    if(entity && $SuperAddonHandler.isOKOne(entity)){
                        if(entity.isCuriosEquipped("curlamoety:faded_promise")){
                            return false
                        }else{
                            return true
                        }
                    }else{
                        return false
                    }
                })
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "minecraft:generic.armor",
                    'faded_promise_def',
                    4,
                    'addition'
                )
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    attributeModificationContext.modify(
                        "minecraft:generic.armor_toughness",
                        'faded_promise_def2',
                        2,
                        'addition'
                    )
                })
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 1)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:ring")

    event.create('curlamoety:witch_amulet_tier1')//女巫护身符
        .rarity("rare")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => {
                    let entity = slotContext.entity()
                    if(entity && (entity.isCuriosEquipped("curlamoety:witch_amulet_tier1")||entity.isCuriosEquipped("curlamoety:witch_amulet_tier2")||entity.isCuriosEquipped("curlamoety:witch_amulet_tier3")||entity.isCuriosEquipped("curlamoety:witch_amulet_tier4")||entity.isCuriosEquipped("curlamoety:witch_amulet_tier5"))){
                        return false
                    }else{
                        return true
                    }
                })
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "minecraft:generic.luck",
                    'witch_amulet_luck',
                    1,
                    'addition'
                )
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:charm")

    event.create('curlamoety:witch_amulet_tier2')//女巫护身符
        .rarity("rare")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => {
                    let entity = slotContext.entity()
                    if(entity && (entity.isCuriosEquipped("curlamoety:witch_amulet_tier1")||entity.isCuriosEquipped("curlamoety:witch_amulet_tier2")||entity.isCuriosEquipped("curlamoety:witch_amulet_tier3")||entity.isCuriosEquipped("curlamoety:witch_amulet_tier4")||entity.isCuriosEquipped("curlamoety:witch_amulet_tier5"))){
                        return false
                    }else{
                        return true
                    }
                })
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "minecraft:generic.luck",
                    'witch_amulet_luck',
                    1,
                    'addition'
                )
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:charm")

    event.create('curlamoety:witch_amulet_tier3')//女巫护身符
        .rarity("rare")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => {
                    let entity = slotContext.entity()
                    if(entity && (entity.isCuriosEquipped("curlamoety:witch_amulet_tier1")||entity.isCuriosEquipped("curlamoety:witch_amulet_tier2")||entity.isCuriosEquipped("curlamoety:witch_amulet_tier3")||entity.isCuriosEquipped("curlamoety:witch_amulet_tier4")||entity.isCuriosEquipped("curlamoety:witch_amulet_tier5"))){
                        return false
                    }else{
                        return true
                    }
                })
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "minecraft:generic.luck",
                    'witch_amulet_luck',
                    1,
                    'addition'
                )
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:charm")

    event.create('curlamoety:witch_amulet_tier4')//女巫护身符
        .rarity("rare")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => {
                    let entity = slotContext.entity()
                    if(entity && (entity.isCuriosEquipped("curlamoety:witch_amulet_tier1")||entity.isCuriosEquipped("curlamoety:witch_amulet_tier2")||entity.isCuriosEquipped("curlamoety:witch_amulet_tier3")||entity.isCuriosEquipped("curlamoety:witch_amulet_tier4")||entity.isCuriosEquipped("curlamoety:witch_amulet_tier5"))){
                        return false
                    }else{
                        return true
                    }
                })
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "minecraft:generic.luck",
                    'witch_amulet_luck',
                    1,
                    'addition'
                )
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:charm")

    event.create('curlamoety:witch_amulet_tier5')//女巫护身符
        .rarity("epic")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => {
                    let entity = slotContext.entity()
                    if(entity && $SuperAddonHandler.isOKOne(entity)){
                        if(entity.isCuriosEquipped("curlamoety:witch_amulet_tier1")||entity.isCuriosEquipped("curlamoety:witch_amulet_tier2")||entity.isCuriosEquipped("curlamoety:witch_amulet_tier3")||entity.isCuriosEquipped("curlamoety:witch_amulet_tier4")||entity.isCuriosEquipped("curlamoety:witch_amulet_tier5")){
                            return false
                        }else{
                            return true
                        }
                    }else{
                        return false
                    }
                })
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "minecraft:generic.luck",
                    'witch_amulet_luck',
                    1,
                    'addition'
                )
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:charm")

    event.create('curlamoety:desperate_attempt')//孤注一掷
        .rarity("uncommon")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => {
                    let entity = slotContext.entity()
                    if(entity && entity.isCuriosEquipped('curlamoety:desperate_attempt')){
                        return false
                    }else{
                        return true
                    }
                })
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "minecraft:generic.luck",
                'desperate_attempt_luck',
                7,
                'addition'
            )
            .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
            .modifyAttributesTooltip((tooltips, stack) => tooltips)
            .modifyFortuneLevel((slotContext, lootContext, stack) => 2)
            .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 2)
            .makesPiglinsNeutral((slotContext, stack) => true)
            .canWalkOnPowderedSnow((slotContext, stack) => false)
            .isEnderMask((slotContext, enderMan, stack) => false)
    )
    .maxStackSize(1)
    .tag("curios:charm")

    event.create('curlamoety:belt_of_glorious')//荣耀腰带
    .rarity("uncommon")
    .attachCuriosCapability(
        CuriosJSCapabilityBuilder.create()
            .curioTick((slotContext, stack) => { })
            .onEquip((slotContext, oldStack, newStack) => {})
            .onUnequip((slotContext, oldStack, newStack) => { })
            .canEquip((slotContext, stack) => {
                    let entity = slotContext.entity()
                    if(entity && (entity.isCuriosEquipped("cataclysm:belt_of_beginner")||entity.isCuriosEquipped("curlamoety:belt_of_glorious"))){
                        return false
                    }else{
                        return true
                    }
                })
            .canUnequip((slotContext, stack) => true)
            .modifySlotsTooltip((tooltips, stack) => tooltips)
            .addAttribute(
                "minecraft:generic.max_health",
                'glorious_belt_health',
                10,
                'addition'
            )
            .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
            .modifyAttributesTooltip((tooltips, stack) => tooltips)
            .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
            .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
            .makesPiglinsNeutral((slotContext, stack) => false)
            .canWalkOnPowderedSnow((slotContext, stack) => false)
            .isEnderMask((slotContext, enderMan, stack) => false)
    )
    .maxStackSize(1)
    .tag("curios:waist")

    event.create('curlamoety:survivor_will')//求生者的意志
    .rarity("uncommon")
    .attachCuriosCapability(
        CuriosJSCapabilityBuilder.create()
        .curioTick((slotContext, stack) => { })
        .onEquip((slotContext, oldStack, newStack) => {})
        .onUnequip((slotContext, oldStack, newStack) => { })
        .canEquip((slotContext, stack) => {
            let entity = slotContext.entity()
            if(entity && entity.isCuriosEquipped("curlamoety:survivor_will")){
                return false
            }else{
                return true
            }
        })
        .canUnequip((slotContext, stack) => true)
        .modifySlotsTooltip((tooltips, stack) => tooltips)
        .addAttribute(
            "cataclysm:eat_speed",
            'survivor_eat',
            0.2,
            'multiply_total'
        )
        .modifyAttribute(attributeModificationContext => {
            let { slotContext, UUID, stack, modifiers } = attributeModificationContext
            attributeModificationContext.modify(
                "cataclysm:nature_heal",
                'survivor_heal',
                0.25,
                'multiply_total'
            )
            attributeModificationContext.modify(
                "minecraft:generic.armor",
                'survivor_armor',
                2,
                'addition'
            )
            attributeModificationContext.modify(
                "minecraft:generic.armor_toughness",
                'survivor_toughness',
                1,
                'addition'
            )
        })
        .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
        .modifyAttributesTooltip((tooltips, stack) => tooltips)
        .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
        .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
        .makesPiglinsNeutral((slotContext, stack) => false)
        .canWalkOnPowderedSnow((slotContext, stack) => false)
        .isEnderMask((slotContext, enderMan, stack) => false)
    )
    .maxStackSize(1)
    .tag("curios:talisman")

    event.create('curlamoety:gloomy_circlet')//晦色头环
    .rarity("uncommon")
    .attachCuriosCapability(
        CuriosJSCapabilityBuilder.create()
        .curioTick((slotContext, stack) => { })
        .canEquip((slotContext, stack) => {
            let entity = slotContext.entity()
            if(entity && (entity.isCuriosEquipped("curlamoety:gloomy_circlet")||entity.isCuriosEquipped("curlamoety:moon_circlet")||entity.isCuriosEquipped("curlamoety:twilight_crown"))){
                return false
            }else{
                return true
            }
        })
        .onUnequip((slotContext, oldStack, newStack) => {})
        .canEquip((slotContext, stack) => true)
        .canUnequip((slotContext, stack) => true)
        .modifySlotsTooltip((tooltips, stack) => tooltips)
        .addAttribute(
            "goety_revelation:spell_power",
            'gloomy_circlet_pw',
            2,
            'addition'
        )
        .modifyAttribute(attributeModificationContext => {
            let { slotContext, UUID, stack, modifiers } = attributeModificationContext
            attributeModificationContext.modify(
                "goety_revelation:soul_increase_efficiency",
                'gloomy_circlet_soul',
                0.5,
                'addition'
            )
            attributeModificationContext.modify(
                "goety_revelation:spell_range",
                'gloomy_circlet_range',
                2,
                'addition'
            )
            attributeModificationContext.modify(
                "goety_revelation:spell_radius",
                'gloomy_circlet_radius',
                2,
                'addition'
            )
            attributeModificationContext.modify(
                "minecraft:generic.armor",
                'gloomy_circlet_armor',
                2,
                'addition'
            )
            attributeModificationContext.modify(
                "goeticlegacy:servant_final_damage_multiplier",
                'gloomy_circlet_sfdm',
                0.2,
                'addition'
            )
            attributeModificationContext.modify(
                "goeticlegacy:servant_damage_reduction_ratio",
                'gloomy_circlet_sdrm',
               0.2,
                'addition'
            )
        })
        .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
        .modifyAttributesTooltip((tooltips, stack) => tooltips)
        .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
        .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
        .makesPiglinsNeutral((slotContext, stack) => false)
        .canWalkOnPowderedSnow((slotContext, stack) => false)
        .isEnderMask((slotContext, enderMan, stack) => true)
    )
    .maxStackSize(1)
    .tag("curios:head")

    event.create('curlamoety:moon_circlet')//皎月银环
    .rarity("rare")
    .attachCuriosCapability(
        CuriosJSCapabilityBuilder.create()
        .curioTick((slotContext, stack) => { })
        .onEquip((slotContext, oldStack, newStack) => {})
        .onUnequip((slotContext, oldStack, newStack) => {})
        .canEquip((slotContext, stack) => {
            let entity = slotContext.entity()
            if(entity && (entity.isCuriosEquipped("curlamoety:gloomy_circlet")||entity.isCuriosEquipped("curlamoety:moon_circlet")||entity.isCuriosEquipped("curlamoety:twilight_crown"))){
                return false
            }else{
                return true
            }
        })
        .canUnequip((slotContext, stack) => true)
        .modifySlotsTooltip((tooltips, stack) => tooltips)
        .addAttribute(
            "goety_revelation:spell_power",
            'moon_circlet_pw1',
            3,
            'addition'
        )
        .modifyAttribute(attributeModificationContext => {
            let { slotContext, UUID, stack, modifiers } = attributeModificationContext
            attributeModificationContext.modify(
                "goety_revelation:spell_power_multiplier",
                'moon_circlet_pw2',
                0.05,
                'addition'
            )
            attributeModificationContext.modify(
                "goety_revelation:soul_increase_efficiency",
                'moon_circlet_soul',
                0.8,
                'addition'
            )
            attributeModificationContext.modify(
                "goety_revelation:spell_range",
                'moon_circlet_range',
                4,
                'addition'
            )
            attributeModificationContext.modify(
                "goety_revelation:spell_radius",
                'moon_circlet_radius',
                4,
                'addition'
            )
            attributeModificationContext.modify(
                "minecraft:generic.armor",
                'moon_circlet_armor',
                3,
                'addition'
            )
            attributeModificationContext.modify(
                "goeticlegacy:servant_final_damage_multiplier",
                'moon_circlet_sfdm',
                0.3,
                'addition'
            )
            attributeModificationContext.modify(
                "goeticlegacy:servant_damage_reduction_ratio",
                'moon_circlet_sdrm',
                0.3,
                'addition'
            )
        })
        .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
        .modifyAttributesTooltip((tooltips, stack) => tooltips)
        .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
        .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
        .makesPiglinsNeutral((slotContext, stack) => false)
        .canWalkOnPowderedSnow((slotContext, stack) => false)
        .isEnderMask((slotContext, enderMan, stack) => true)
    )
    .maxStackSize(1)
    .tag("curios:head")

    event.create('curlamoety:twilight_crown')//暮光圣冠
    .rarity("epic")
    .attachCuriosCapability(
        CuriosJSCapabilityBuilder.create()
        .curioTick((slotContext, stack) => { })
        .onEquip((slotContext, oldStack, newStack) => {})
        .onUnequip((slotContext, oldStack, newStack) => {})
        .canEquip((slotContext, stack) => {
            let entity = slotContext.entity()
            if(entity && (entity.isCuriosEquipped("curlamoety:gloomy_circlet")||entity.isCuriosEquipped("curlamoety:moon_circlet")||entity.isCuriosEquipped("curlamoety:twilight_crown"))){
                return false
            }else{
                return true
            }
        })
        .canUnequip((slotContext, stack) => true)
        .modifySlotsTooltip((tooltips, stack) => tooltips)
        .addAttribute(
            "goety_revelation:spell_power",//
            'twilight_crown_pw1',
            4,
            'addition'
        )
        .modifyAttribute(attributeModificationContext => {
            let { slotContext, UUID, stack, modifiers } = attributeModificationContext
            attributeModificationContext.modify(
                "goety_revelation:spell_power_multiplier",
                'twilight_crown_pw2',
                0.1,
                'addition'
            )
            attributeModificationContext.modify(
                "goety_revelation:soul_increase_efficiency",
                'twilight_crown_soul',
                1,
                'addition'
            )
            attributeModificationContext.modify(
                "goety_revelation:spell_range",
                'twilight_crown_range',
                6,
                'addition'
            )
            attributeModificationContext.modify(
                "goety_revelation:spell_radius",
                'twilight_crown_radius',
                6,
                'addition'
            )
            attributeModificationContext.modify(
                "minecraft:generic.armor",
                'twilight_crown_armor',
                4,
                'addition'
            )
            attributeModificationContext.modify(
                "goeticlegacy:servant_final_damage_multiplier",
                'twilight_crown_sfdm',
                0.4,
                'addition'
            )
            attributeModificationContext.modify(
                "goeticlegacy:servant_damage_reduction_ratio",
                'twilight_crown_sdrm',
                0.4,
                'addition'
            )
            attributeModificationContext.modify(
                "goeticlegacy:servant_piercing_true_damage_ratio",
                'twilight_crown_sptdr',
                0.1,
                'addition'
            )
        })
        .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
        .modifyAttributesTooltip((tooltips, stack) => tooltips)
        .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
        .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
        .makesPiglinsNeutral((slotContext, stack) => false)
        .canWalkOnPowderedSnow((slotContext, stack) => false)
        .isEnderMask((slotContext, enderMan, stack) => true)
    )
    .maxStackSize(1)
    .tag("curios:head")

    event.create('curlamoety:fall_of_apocalypse')//天启之陨
    .rarity("epic")
    .attachCuriosCapability(
        CuriosJSCapabilityBuilder.create()
        .curioTick((slotContext, stack) => { })
        .onEquip((slotContext, oldStack, newStack) => {})
        .onUnequip((slotContext, oldStack, newStack) => {})
        .canEquip((slotContext, stack) => {
            let entity = slotContext.entity()
            if(entity && entity.isCuriosEquipped("curlamoety:fall_of_apocalypse")){
                return false
            }else{
                return true
            }
        })
        .canUnequip((slotContext, stack) => true)
        .modifySlotsTooltip((tooltips, stack) => tooltips)
        .addAttribute(
            "goety_revelation:spell_velocity",//
            'fall_of_apocalypse',
            0.13,
            'addition'
        )
        .modifyAttribute(attributeModificationContext => {
            let { slotContext, UUID, stack, modifiers } = attributeModificationContext
        })
        .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
        .modifyAttributesTooltip((tooltips, stack) => tooltips)
        .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
        .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
        .makesPiglinsNeutral((slotContext, stack) => false)
        .canWalkOnPowderedSnow((slotContext, stack) => false)
        .isEnderMask((slotContext, enderMan, stack) => false)
    )
    .maxStackSize(1)
    .tag("curios:curio")

})
