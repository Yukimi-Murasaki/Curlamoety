// priority: 0

// Visit the wiki for more info - https://curlamoety.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(Event=>{//常规配方走这里

    //黑暗金属砧
    Event.remove({output:'goety:dark_anvil'})
    Event.shaped('goety:dark_anvil',[
        'IBI',
        ' W ',
        'III'
    ],{
        I:'goety:dark_ingot',
        B:'goety:dark_metal_block',
        W:'cataclysm:ancient_metal_block'
    }).id("curlamoety:dark_anvil")
    

    //哭泣黑曜石
    Event.shaped('8x minecraft:crying_obsidian',[
        'NNN',
        'NON',
        'NNN'
    ],{
        N:'minecraft:obsidian',
        O:'farmersdelight:onion_crate'
    }).id("curlamoety:crying_obsidian")

    //恶魂之泪复制
    Event.shaped('2x minecraft:ghast_tear',[
        'OTO',
        'OSO',
        'OOO'
    ],{
        T:'minecraft:ghast_tear',
        O:'farmersdelight:onion',
        S:'minecraft:soul_sand'
    }).id("curlamoety:ghast_tear")

    //沃土
    Event.shaped('4x farmersdelight:rich_soil',[
        'TTT',
        'BWB',
        'OOO'
    ],{
        T:'minecraft:torch',
        W:'minecraft:water_bucket',
        B:'minecraft:bone_meal',
        O:'farmersdelight:organic_compost'
    }).id("curlamoety:rich_soil")

    //无限距离增幅卡
    Event.remove({output:'rsinfinitybooster:infinity_card'})
    Event.shaped('rsinfinitybooster:infinity_card',[
        'WNW',
        'ESE',
        'WNW'
    ],{
        W:'cataclysm:witherite_ingot',
        N:'minecraft:netherite_ingot',
        E:'minecraft:ender_eye',
        S:'minecraft:nether_star'
    }).id("curlamoety:infinity_card")

    //维度卡
    Event.remove({output:'rsinfinitybooster:dimension_card'})
    Event.shaped('rsinfinitybooster:dimension_card',[
        'SES',
        'DID',
        'SHS'
    ],{
        S:'minecraft:nether_star',
        E:'minecraft:ender_eye',
        D:'goety:dark_ingot',
        I:'rsinfinitybooster:infinity_card',
        H:'cataclysm:monstrous_horn'
    }).id("curlamoety:dimension_card")
    Event.remove({output:'enchantinginfuser:enchanting_infuser'})

    //高级附魔台
    Event.shaped('enchantinginfuser:enchanting_infuser',[
        'CBC',
        'MTM',
        'OOO'
    ],{
        C:'minecraft:amethyst_block',
        B:'minecraft:writable_book',
        M:'goety:cursed_metal_block',
        T:'minecraft:enchanting_table',
        O:'minecraft:crying_obsidian'
    }).id("curlamoety:enchanting_infuser")

    //进阶高级附魔台
    Event.remove({output:'enchantinginfuser:advanced_enchanting_infuser'})
    Event.shaped('enchantinginfuser:advanced_enchanting_infuser',[
        'NBN',
        'OPO',
        'DTD'
    ],{
        N:'minecraft:netherite_ingot',
        B:'enigmaticlegacy:enchantment_transposer',
        O:'minecraft:crying_obsidian',
        P:'enigmaticlegacy:enchanter_pearl',
        D:'goety:dark_metal_block',
        T:'enchantinginfuser:enchanting_infuser'
    }).id("curlamoety:advanced_enchanting_infuser")

    //地灵之诺
    Event.replaceInput({output:'enigmaticaddons:earth_promise'},'enigmaticlegacy:cosmic_heart','cataclysm:witherite_block')
    Event.replaceInput({output:'enigmaticaddons:earth_promise'},'enigmaticlegacy:mining_charm','cataclysm:ancient_metal_block')
    Event.replaceInput({output:'enigmaticaddons:earth_promise'},'minecraft:golden_apple','goety:soul_emerald')
    Event.replaceInput({output:'enigmaticaddons:earth_promise'},'enigmaticlegacy:golden_ring','curlamoety:faded_promise')

    //恩赐卷轴
    Event.remove({output:'goety_revelation:blessing_scroll'})
    Event.shaped('goety_revelation:blessing_scroll',[
        'NHF',
        'ISE',
        'DAD'
    ],{
        N:'minecraft:nautilus_shell',
        F:'minecraft:rabbit_foot',
        H:'enigmaticlegacy:earth_heart',
        I:'enigmaticaddons:ichor_droplet',
        S:'enigmaticlegacy:darkest_scroll',
        E:'minecraft:echo_shard',
        A:'cataclysm:ancient_metal_block',
        D:'goety:dark_ingot'
    }).id("curlamoety:blessing_scroll")

    //冒险家护符
    Event.replaceInput({output:'enigmaticaddons:adventure_charm'},'emerald','goety:soul_emerald')

    //千咒卷轴
    Event.remove({output:'enigmaticlegacy:cursed_scroll'})
    Event.shaped('enigmaticlegacy:cursed_scroll',[
        'ATA',
        'BSE',
        'RCI'
    ],{
        E:'enigmaticlegacy:evil_ingot',
        T:'enigmaticlegacy:twisted_heart',
        B:'enigmaticlegacy:ichor_bottle',
        S:'enigmaticlegacy:darkest_scroll',
        A:'goety:dark_ingot',
        R:'goety:soul_ruby',
        C:'enigmaticlegacy:curse_transposer',
        I:'curlamoety:biogenesium_ingot'
    }).id("curlamoety:cursed_scroll")

    //倒转之启
    Event.remove({output:'enigmaticlegacy:the_twist'})
    Event.shaped('enigmaticlegacy:the_twist',[
        'CRC',
        'NAN',
        'EIE',
    ],{
        C:'goety:mystic_core',
        R:'minecraft:redstone_block',
        N:'minecraft:netherite_ingot',
        A:'enigmaticlegacy:curse_transposer',
        E:'enigmaticlegacy:evil_essence',
        I:'enigmaticlegacy:evil_ingot'
    }).id("curlamoety:the_twist")

    //恩惠之典
    Event.remove({output:'enigmaticaddons:the_bless'})
    Event.shaped('enigmaticaddons:the_bless',[
        'GHG',
        'IAI',
        'ENE'
    ],{
        H:'goety:iron_hide_focus',
        G:'goety:indented_gold',
        I:'enigmaticaddons:ichor_droplet',
        A:'enigmaticaddons:bless_amplifier',
        E:'enigmaticlegacy:evil_essence',
        N:'minecraft:netherite_ingot'
    }).id("curlamoety:the_bless")

    //武器大师之证
    Event.replaceInput({output:'enigmaticdelicacy:weapon_charm'},'farmersdelight:iron_knife','farmersdelight:diamond_knife')
    Event.replaceInput({output:'enigmaticdelicacy:weapon_charm'},'minecraft:iron_sword','minecraft:diamond_sword')

    //大地之心
    Event.remove({output:'enigmaticlegacy:earth_heart'})
    Event.shaped('enigmaticlegacy:earth_heart',[
        'SSS',
        'STS',
        'SSS'
    ],{
        S:'enigmaticaddons:earth_heart_fragment',
        T:'goety:shade_stone'
    }).id("curlamoety:earth_heart")

    //战车
    Event.shaped('tarotcards:the_chariot',[
        ' A ',
        'PMP',
        ' C '
    ],{
        A:'goety:animation_core',
        P:'immersive_aircraft:sturdy_pipes',
        M:'goety:magic_fabric',
        C:'minecraft:minecart'
    }).id("curlamoety:the_chariot")

    //皇帝
    Event.shaped('tarotcards:the_emperor',[
        'BVB',
        'SMG',
        'BEB'
    ],{
        B:'minecraft:emerald_block',
        V:'easy_villagers:villager',
        S:'#minecraft:swords',
        G:'#forge:shields',
        M:'goety:magic_fabric',
        E:'#minecraft:beds'
    }).id("curlamoety:the_emperor")

    //女帝
    Event.shaped('tarotcards:the_empress',[
        'WWW',
        'AMC',
        'SSS'
    ],{
        W:'minecraft:wheat',
        A:'minecraft:golden_apple',
        M:'goety:magic_fabric',
        C:'minecraft:golden_carrot',
        S:'#forge:seeds'
    }).id("curlamoety:the_empress")

    //月亮
    Event.shaped('tarotcards:the_moon',[
        'CCC',
        'EME',
        'CCC'
    ],{
        C:'minecraft:golden_carrot',
        E:'goety:magic_emerald',
        M:'goety:magic_fabric'
    }).id("curlamoety:the_moon")

    //命运之轮
    Event.shaped('tarotcards:wheel_of_fortune',[
        'FEF',
        'HMH',
        'FEF'
    ],{
        F:'minecraft:rabbit_foot',
        E:'goety:magic_emerald',
        H:'enigmaticaddons:earth_heart_fragment',
        M:'goety:magic_fabric'
    }).id("curlamoety:wheel_of_fortune")

    //愚者
    Event.shaped('tarotcards:the_fool',[
        ' W ',
        'DMD',
        'FAF'
    ],{
        W:'goety:wind_core',
        D:'minecraft:diamond',
        M:'goety:magic_fabric',
        F:'minecraft:rabbit_foot',
        A:'goety:animation_core'
    }).id("curlamoety:the_fool")

    //恋人
    Event.shaped('tarotcards:the_lovers',[
        'WTW',
        'AMA',
        'WTW'
    ],{
        W:'minecraft:glistering_melon_slice',
        T:'minecraft:ghast_tear',
        A:'minecraft:golden_apple',
        M:'goety:magic_fabric'
    }).id("curlamoety:the_lovers")

    //魔术师
    Event.shaped('tarotcards:the_magician',[
        'WER',
        'GMG',
        'SGS'
    ],{
        W:'goety:dark_wand',
        E:'goety:soul_emerald',
        R:'enigmaticlegacy:golden_ring',
        G:'minecraft:gold_block',
        M:'goety:magic_fabric',
        S:'minecraft:gilded_blackstone'
    }).id("curlamoety:the_magician")

    //教皇
    Event.shaped('tarotcards:the_hierophant',[
        'BWT',
        'EME',
        'WWW'
    ],{
        B:'enigmaticlegacy:enchantment_transposer',
        W:'minecraft:white_wool',
        T:'minecraft:brewing_stand',
        E:'minecraft:experience_bottle',
        M:'goety:magic_fabric'
    }).id("curlamoety:the_hirophant")

    //太阳
    Event.shaped('tarotcards:the_sun',[
        'CLC',
        'LML',
        'CLC'
    ],{
        C:'minecraft:coal_block',
        L:'minecraft:lava_bucket',
        M:'goety:magic_fabric',
    }).id("curlamoety:the_sun")

    //星星
    Event.shaped('tarotcards:the_star',[
        'ISI',
        'IMI',
        'IHI'
    ],{
        I:'minecraft:iron_ingot',
        S:'minecraft:nether_star',
        M:'goety:magic_fabric',
        H:'cataclysm:monstrous_horn'
    }).id("curlamoety:the_star")

    //世界
    Event.shaped('tarotcards:the_world',[
        'NEN',
        'BMB',
        'IGI'
    ],{
        N:'minecraft:netherite_ingot',
        E:'goety_cataclysm:abyss_essence',
        B:'minecraft:dragon_breath',
        M:'goety:magic_fabric',
        I:'minecraft:iron_block',
        G:'minecraft:gold_block'
    }).id("curlamoety:the_world")

    //生灵颂辞
    Event.replaceInput({output:('enigmaticaddons:ode_to_living')},'minecraft:experience_bottle','goety:ectoplasm')
    Event.replaceInput({output:('enigmaticaddons:ode_to_living')},'enigmaticlegacy:earth_heart','goety:magic_emerald')

    //无尽沃土
    Event.shaped('enigmaticdelicacy:infinisoil',[
        'SES',
        'ABA',
        'SGS'
    ],{
        B:'minecraft:bone_block',
        S:'farmersdelight:rich_soil',
        A:'enigmaticaddons:ichor_droplet',
        G:'goety:quick_growing_seed',
        E:'enigmaticlegacy:infinimeal'
    }).id("curlamoety:infinisoil")

    //诅咒残片
    Event.smelting('curlamoety:cursed_fragment','goety:cursed_knight_helmet',2,100).id("curlamoety:cursed_fragment1")
    Event.smelting('curlamoety:cursed_fragment','goety:cursed_knight_chestplate',2,100).id("curlamoety:cursed_fragment2")
    Event.smelting('curlamoety:cursed_fragment','goety:cursed_knight_leggings',2,100).id("curlamoety:cursed_fragment3")
    Event.smelting('curlamoety:cursed_fragment','goety:cursed_knight_boots',2,100).id("curlamoety:cursed_fragment4")
    Event.smelting('curlamoety:cursed_fragment','goety:cursed_paladin_helmet',2,100).id("curlamoety:cursed_fragment5")
    Event.smelting('curlamoety:cursed_fragment','goety:cursed_paladin_chestplate',2,100).id("curlamoety:cursed_fragment6")
    Event.smelting('curlamoety:cursed_fragment','goety:cursed_paladin_leggings',2,100).id("curlamoety:cursed_fragment7")
    Event.smelting('curlamoety:cursed_fragment','goety:cursed_paladin_boots',2,100).id("curlamoety:cursed_fragment8")

    //邪魂戒指
    Event.shaped('curlamoety:evil_ring',[
        'CEC',
        'LRL',
        'CSC'
    ],{
        C:'goety:cursed_ingot',
        S:'curlamoety:evil_spirit',
        R:'enigmaticlegacy:iron_ring',
        L:'minecraft:lapis_lazuli',
        E:'goety:empty_focus'
    }).id("curlamoety:evil_ring")

    //血海之戒
    Event.shaped('curlamoety:blood_ring',[
        'FMF',
        'ARA',
        'ETE'
    ],{
        F:'minecraft:blaze_rod',
        M:'minecraft:rotten_flesh',
        A:'enigmaticaddons:ichor_droplet',
        R:'curlamoety:evil_ring',
        E:'enigmaticlegacy:evil_essence',
        T:'enigmaticlegacy:twisted_heart'
    }).id("curlamoety:blood_ring")

    //主宰之戒
    Event.shaped('curlamoety:dominator_ring',[
        'BYB',
        'FRF',
        'NPN'
    ],{
        F:'minecraft:feather',
        B:'curlamoety:biogenesium_ingot',
        N:'minecraft:netherite_ingot',
        R:'curlamoety:blood_ring',
        Y:'goeticlegacy:ruby_ring',
        P:'enigmaticaddons:pure_heart'
    }).id("curlamoety:dominator_ring")

    //星光指环
    Event.shaped('curlamoety:stella_ring',[
        'CSC',
        'ERE',
        'GHG'
    ],{
        C:'cataclysm:cursium_ingot',
        S:'enigmaticdelicacy:glistening_heart',
        E:'enigmaticlegacy:etherium_ingot',
        R:'curlamoety:dominator_ring',
        G:'minecraft:gold_ingot',
        H:'enigmaticlegacy:cosmic_heart'
    }).id("curlamoety:stella_ring")

    //开拓者手套
    Event.shaped('curlamoety:pioneer_gloves',[
        'GA ',
        'AED',
        'TKH'
    ],{
        G:'minecraft:gold_ingot',
        A:'cataclysm:ancient_metal_ingot',
        E:'curlamoety:explorer_gloves',
        K:'curlamoety:kitchen_gloves',
        D:'minecraft:diamond',
        T:'goety_revelation:spider_fang',
        H:'enigmaticlegacy:earth_heart'
    }).id("curlamoety:pioneer_gloves")

    //厨房手套
    Event.shaped('curlamoety:kitchen_gloves',[
        'WWW',
        'WBW',
        'ILS'
    ],{
        W:'pink_wool',
        B:'brick',
        I:'iron_ingot',
        L:'leather',
        S:'string'
    }).id("curlamoety:kitchen_gloves")

    //祛魔台
    Event.remove({output:('disenchanting:disenchanter')})
    Event.shaped('disenchanting:disenchanter',[
        'GBG',
        'DOD',
        'OPO'
    ],{
        G:'minecraft:gold_ingot',
        B:'enigmaticlegacy:enchantment_transposer',
        D:'minecraft:diamond',
        O:'minecraft:obsidian',
        P:'goety:pale_steel_block'
    }).id("curlamoety:disenchanter")

    //空魂符
    Event.shaped('touhou_little_maid:smart_slab_empty',[
        ' E ',
        'ELE',
        ' E '
    ],{
        E:'goety:ectoplasm',
        L:'minecraft:leather'
    }).id("curlamoety:smart_slab_empty")

    //寰宇之心
    Event.remove({output:('enigmaticlegacy:cosmic_heart')})
    Event.shaped('enigmaticlegacy:cosmic_heart',[
        'VEB',
        'TDJ',
        'LNS'
    ],{
        V:'goety:void_block',
        E:'enigmaticlegacy:etherium_ingot',
        B:'enigmaticlegacy:astral_block',
        T:'cataclysm:lacrima',
        D:'minecraft:diamond',
        J:'goety:jade',
        L:'minecraft:magma_cream',
        N:'minecraft:netherite_ingot',
        S:'minecraft:nether_star'
    }).id("curlamoety:cosmic_heart")

    //袋装星尘
    Event.remove({output:('enigmaticlegacy:astral_block')})
    Event.shaped('enigmaticlegacy:astral_block',[
        'DD ',
        'DD ',
        '   '
    ],{
        D:'enigmaticlegacy:astral_dust'
    }).id("curlamoety:astral_block")

    Event.remove('enigmaticlegacy:astral_block_uncrafting')
    Event.shapeless('4x enigmaticlegacy:astral_dust',['enigmaticlegacy:astral_block']).id("curlamoety:astral_block_uncrafting")

    //末影碎片
    Event.shapeless('4x goety:void_shard',['goety:void_echo']).id("curlamoety:void_echo_to_void_shard")

    //玻璃工具
    Event.shaped(Item.of('curlamoety:glass_pickaxe').enchant('minecraft:silk_touch', 1),[
        'GGG',
        'STS',
        ' T '
    ],{
        G:'#forge:glass',
        S:'minecraft:string',
        T:'minecraft:stick'
    }).id("curlamoety:glass_pickaxe")
    Event.shaped(Item.of('curlamoety:glass_hoe').enchant('minecraft:silk_touch', 1),[
        'GG ',
        'STS',
        ' T '
    ],{
        G:'#forge:glass',
        S:'minecraft:string',
        T:'minecraft:stick'
    }).id("curlamoety:glass_hoe")
    Event.shaped(Item.of('curlamoety:glass_shovel').enchant('minecraft:silk_touch', 1),[
        ' G ',
        'STS',
        ' T '
    ],{
        G:'#forge:glass',
        S:'minecraft:string',
        T:'minecraft:stick'
    }).id("curlamoety:glass_shovel")
    Event.shaped(Item.of('curlamoety:glass_axe').enchant('minecraft:silk_touch', 1),[
        'GGS',
        'GTS',
        ' T '
    ],{
        G:'#forge:glass',
        S:'minecraft:string',
        T:'minecraft:stick'
    }).id("curlamoety:glass_axe")

    //玛丽苏的枝杖
    Event.shaped((Item.of('curlamoety:mary_sue_staff', '{Unbreakable:1b}')),[
        'PDP',
        'WGW',
        'FGF'
    ],{
        F:'minecraft:feather',
        P:'touhou_little_maid:power_point',
        D:'minecraft:diamond',
        G:'minecraft:gold_ingot',
        W:'minecraft:red_wool'
    }).id("curlamoety:mary_sue_staff")

    //黑魂雕像
    Event.shaped(('curlamoety:blackmage_souls_statue_1'),[
        'WCW',
        'SKI',
        'TGT',
    ],{
        W:'#minecraft:wool',
        C:'goety:cursed_metal_block',
        S:'iron_sword',
        K:'armor_stand',
        I:'goety:dark_wand',
        T:'#goety:shade_stone',
        G:'minecraft:gold_ingot'
    }).id("curlamoety:black_souls_statue")

    //女巫护身符
    Event.shaped(('curlamoety:witch_amulet_tier1_inactive'),[
        'CPC',
        'PHP',
        'IFI'
    ],{
        C:'minecraft:chain',
        P:'goety:brew',
        F:'goety:empty_focus',
        H:'goety:witch_hat',
        I:'goety:cursed_ingot'
    }).id("curlamoety:witch_amulet_tier1_inactive")
    Event.shaped(('curlamoety:witch_amulet_tier2_inactive'),[
        'PGP',
        'GAG',
        'PEP'
    ],{
        P:'goety:brew',
        G:'minecraft:gold_ingot',
        E:'curlamoety:papers_t1',
        A:'curlamoety:witch_amulet_tier1'
    }).id("curlamoety:witch_amulet_tier2_inactive")

    //粘液球
    Event.shapeless(('minecraft:slime_ball'),['minecraft:lime_dye','farmersdelight:wheat_dough']).id("curlamoety:slime_ball")

    //命名牌
    Event.shaped(('minecraft:name_tag'),[
        ' N ',
        'P  ',
        '   '
    ],{
        N:'#forge:nuggets',
        P:'minecraft:paper'
    }).id("curlamoety:name_tag")

    //女巫撰写桌
    Event.shaped(('curlamoety:witch_desk'),[
        ['minecraft:book','enigmaticlegacy:thicc_scroll','minecraft:feather'],
        ['goety:occult_fabric','goety:rotten_slab','minecraft:ink_sac'],
        ['#forge:mushrooms','goety:rotten_log','minecraft:glass_bottle'],
    ]).id("curlamoety:witch_desk")

    //硫火宝珠
    Event.shaped(('curlamoety:brimstone_orb'),[
        ' R ',
        'SAS',
        'GGG'
    ],{
        A:"curlamoety:annihilation_ashes",
        R:'goety:soul_ruby',
        S:"minecraft:redstone",
        G:"minecraft:gold_ingot"
    }).id('curlamoety:brimstone_orb')

    //女巫见闻录·中文
    Event.shapeless((
        Item.of('minecraft:written_book', '{author:"布莱克·梅奇",pages:[\'{"text":"当我把那块用腐肉转化而来的朽木做成一张抄写台，并写下这些笔记，我意识到这件护身符比我想象中的强大，不仅仅是给予我巧手效果，它还会增加我和一些素材之间的亲和性，让我更容易获取某些材料（提示：这些特殊获取，都是与方块进行右键交互，不是合成，且需要物品放在主手）"}\',\'{"text":"目前已经掌握的情报：\\\\n\\\\n初级女巫护身符：\\\\n\\\\n对朽木以外的原木使用腐肉，可以把它变成朽木\\\\n\\\\n对朽木使用水瓶，会让它上面长出蘑菇"}\'],resolved:1b,title:"女巫见闻录：初步探寻"}')
    ),['4x curlamoety:papers_t1','minecraft:red_dye']).id("curlamoety:witch_sketch_primary_study_chinese")
    Event.shapeless((
        Item.of('minecraft:written_book', '{author:"布莱克·梅奇",pages:[\'{"text":"当我把那块用腐肉转化而来的朽木做成一张抄写台，并写下这些笔记，我意识到这件护身符比我想象中的强大，不仅仅是给予我巧手效果，它还会增加我和一些素材之间的亲和性，让我更容易获取某些材料（提示：这些特殊获取，都是与方块进行右键交互，不是合成，且需要物品放在主手）"}\',\'{"text":"目前已经掌握的情报：\\\\n\\\\n初级女巫护身符：\\\\n\\\\n对朽木以外的原木使用腐肉，可以把它变成朽木\\\\n\\\\n对朽木使用水瓶，会让它上面长出蘑菇"}\',\'{"text":"中级女巫护身符：\\\\n\\\\n用坩埚巨勺可以把聚晶创造的闪亮之光挖下来，它们会变成荧石粉\\\\n\\\\n把红色染料涂在石头上，护身符的力量便会诱导它的结构重组，变成红石块\\\\n\\\\n副手准备好空瓶，把4搓糖塞进蜂巢（蜂箱），便能酿造出蜂蜜，即使没有蜜蜂在里面工作"}\',\'{"text":"暮色森林树下的那些根，有些是死根，有些是活根，也许把水浇在那些死根上可以让它们复活\\\\n\\\\n我很好奇钢叶这种材料是如何产生的，也许把铁锭融入树叶中可以人造一些？"}\'],title:"女巫见闻录：实验与学习"}')
    ),['3x curlamoety:papers_t2','minecraft:red_dye']).id("curlamoety:witch_sketch_experiments_chinese")
    Event.shapeless((
        Item.of('minecraft:written_book', '{author:"布莱克·梅奇",pages:[\'{"text":"当我把那块用腐肉转化而来的朽木做成一张抄写台，并写下这些笔记，我意识到这件护身符比我想象中的强大，不仅仅是给予我巧手效果，它还会增加我和一些素材之间的亲和性，让我更容易获取某些材料（提示：这些特殊获取，都是与方块进行右键交互，不是合成，且需要物品放在主手）"}\',\'{"text":"目前已经掌握的情报：\\\\n\\\\n初级女巫护身符：\\\\n\\\\n对朽木以外的原木使用腐肉，可以把它变成朽木\\\\n\\\\n对朽木使用水瓶，会让它上面长出蘑菇"}\',\'{"text":"中级女巫护身符：\\\\n\\\\n用坩埚巨勺可以把聚晶创造的闪亮之光挖下来，它们会变成荧石粉\\\\n\\\\n把红色染料涂在石头上，护身符的力量便会诱导它的结构重组，变成红石块\\\\n\\\\n副手准备好空瓶，把4搓糖塞进蜂巢（蜂箱），便能酿造出蜂蜜，即使没有蜜蜂在里面工作"}\',\'{"text":"暮色森林树下的那些根，有些是死根，有些是活根，也许把水浇在那些死根上可以让它们复活\\\\n\\\\n我很好奇钢叶这种材料是如何产生的，也许把铁锭融入树叶中可以人造一些？"}\',\'{"text":"高级女巫护身符\\\\n\\\\n将木栅栏点燃，然后抓住它，它会变成烈焰棒\\\\n\\\\n把一瓶水倒在圆石上，被女巫项链祝福过的水会让圆石变成海晶石\\\\n\\\\n把一丛海草埋进沙子，它会变成坚硬的鳞甲"}\'],title:"女巫见闻录：深入研究"}')
    ),['2x curlamoety:papers_t3','minecraft:red_dye']).id("curlamoety:witch_sketch_furthur_research_chinese")
    Event.shapeless((
        Item.of('minecraft:written_book', '{author:"布莱克·梅奇",pages:[\'{"text":"当我把那块用腐肉转化而来的朽木做成一张抄写台，并写下这些笔记，我意识到这件护身符比我想象中的强大，不仅仅是给予我巧手效果，它还会增加我和一些素材之间的亲和性，让我更容易获取某些材料（提示：这些特殊获取，都是与方块进行右键交互，不是合成，且需要物品放在主手）"}\',\'{"text":"目前已经掌握的情报：\\\\n\\\\n初级女巫护身符：\\\\n\\\\n对朽木以外的原木使用腐肉，可以把它变成朽木\\\\n\\\\n对朽木使用水瓶，会让它上面长出蘑菇"}\',\'{"text":"中级女巫护身符：\\\\n\\\\n用坩埚巨勺可以把聚晶创造的闪亮之光挖下来，它们会变成荧石粉\\\\n\\\\n把红色染料涂在石头上，护身符的力量便会诱导它的结构重组，变成红石块\\\\n\\\\n副手准备好空瓶，把4搓糖塞进蜂巢（蜂箱），便能酿造出蜂蜜，即使没有蜜蜂在里面工作"}\',\'{"text":"暮色森林树下的那些根，有些是死根，有些是活根，也许把水浇在那些死根上可以让它们复活\\\\n\\\\n我很好奇钢叶这种材料是如何产生的，也许把铁锭融入树叶中可以人造一些？"}\',\'{"text":"高级女巫护身符\\\\n\\\\n将木栅栏点燃，然后抓住它，它会变成烈焰棒\\\\n\\\\n把一瓶水倒在圆石上，被女巫项链祝福过的水会让圆石变成海晶石\\\\n\\\\n把一丛海草埋进沙子，它会变成坚硬的鳞甲"}\',\'{"text":"特级女巫护身符：\\\\n\\\\n说实话戴上这个护身符让我有些恍惚，诡异的呓语时不时缠绕着我，明明诅咒让我无法入睡，我却体会到了梦游的感觉……\\\\n\\\\n这些笔记，上面有些内容令人毛骨悚然，简直是邪神的低语……我好不容易才从这里面提取出一些可以实践的内容"}\',\'{"text":"神秘核心，尽管并不昂贵，制作工艺仍略显繁琐和低效，于是一气之下我把一枚空聚晶直接砸在了水晶块上\\\\n\\\\n自从把石头染色成红石块以来，我一直尝试染各种东西，这次我把树苗染成了紫色\\\\n\\\\n据说龙首里仍然有着末影龙产生吐息的器官（！？袋息龙龙息袋？！），用瓶子装一点吧"}\'],title:"女巫见闻录：梦魇"}')
    ),['3x curlamoety:papers_t4','minecraft:red_dye']).id("curlamoety:witch_sketch_primary_nightmare_chinese")
    Event.shapeless((
        Item.of('minecraft:written_book', '{author:"布莱克·梅奇",pages:[\'{"text":"当我把那块用腐肉转化而来的朽木做成一张抄写台，并写下这些笔记，我意识到这件护身符比我想象中的强大，不仅仅是给予我巧手效果，它还会增加我和一些素材之间的亲和性，让我更容易获取某些材料（提示：这些特殊获取，都是与方块进行右键交互，不是合成，且需要物品放在主手）"}\',\'{"text":"目前已经掌握的情报：\\\\n\\\\n初级女巫护身符：\\\\n\\\\n对朽木以外的原木使用腐肉，可以把它变成朽木\\\\n\\\\n对朽木使用水瓶，会让它上面长出蘑菇"}\',\'{"text":"中级女巫护身符：\\\\n\\\\n用坩埚巨勺可以把聚晶创造的闪亮之光挖下来，它们会变成荧石粉\\\\n\\\\n把红色染料涂在石头上，护身符的力量便会诱导它的结构重组，变成红石块\\\\n\\\\n副手准备好空瓶，把4搓糖塞进蜂巢（蜂箱），便能酿造出蜂蜜，即使没有蜜蜂在里面工作"}\',\'{"text":"暮色森林树下的那些根，有些是死根，有些是活根，也许把水浇在那些死根上可以让它们复活\\\\n\\\\n我很好奇钢叶这种材料是如何产生的，也许把铁锭融入树叶中可以人造一些？"}\',\'{"text":"高级女巫护身符\\\\n\\\\n将木栅栏点燃，然后抓住它，它会变成烈焰棒\\\\n\\\\n把一瓶水倒在圆石上，被女巫项链祝福过的水会让圆石变成海晶石\\\\n\\\\n把一丛海草埋进沙子，它会变成坚硬的鳞甲"}\',\'{"text":"特级女巫护身符：\\\\n\\\\n说实话戴上这个护身符让我有些恍惚，诡异的呓语时不时缠绕着我，明明诅咒让我无法入睡，我却体会到了梦游的感觉……\\\\n\\\\n这些笔记，上面有些内容令人毛骨悚然，简直是邪神的低语……我好不容易才从这里面提取出一些可以实践的内容"}\',\'{"text":"神秘核心，尽管并不昂贵，制作工艺仍略显繁琐和低效，于是一气之下我把一枚空聚晶直接砸在了水晶块上\\\\n\\\\n自从把石头染色成红石块以来，我一直尝试染各种东西，这次我把树苗染成了紫色\\\\n\\\\n据说龙首里仍然有着末影龙产生吐息的器官（！？袋息龙龙息袋？！），用瓶子装一点吧"}\',\'{"text":"至尊女巫护身符:\\\\n\\\\n当这件护符的蓝图从那禁忌的研究中成型，我逐渐感受到“她”的存在\\\\n\\\\n一个流离失所，被毁灭的暴君利用，亲手将自己的故乡化作火海的，受诅咒的女巫\\\\n\\\\n这护符所使用的，不过是她力量的一些碎片罢了"}\',\'{"text":"完美物质的形态过于完美，它会影响周遭的物体，产生一种转变成同样完美的形态的倾向，借由贤者之锤我可以放大这种倾向，让完美物质成功地同化周围的方块\\\\n\\\\n神秘果的生长十分缓慢，并且它强大的抵抗力会拒绝外来的催生，但是现在不一样了，狂野生长精华将让它立刻结果"}\',\'{"text":"我曾经幻想过，为金苹果附魔不就是附魔金苹果吗，现在有一个幻想成真的机会摆在我面前了"}\'],title:"女巫见闻录：福音"}')
    ),['1x curlamoety:annihilation_ashes','minecraft:book','minecraft:red_dye']).id("curlamoety:witch_sketch_evangelion_chinese")

    //女巫见闻录·英文
    Event.shapeless((
        Item.of('minecraft:written_book', '{author:"Hell Morpheus",pages:[\'{"text":"When I craft a Witch Writing Desk, using the Rotten Log that transformed by a Rotten Flesh, and take down these notes, I realized that this amulet is far more powerful than I\\\'ve thought. It not only gives me Bottling effect, but increases my affinity to some materials, allows me "}\',\'{"text":"to obtain them much easier.(TIPS: These special accessibility is NOT crafting, but interacting with blocks by Right-Click. And the specified item need to be hold on Main Hand)"}\',\'{"text":"Rookie Witch Amulet:\\\\n\\\\nUse Rotten Flesh to a log except Rotten Log will change it into Rotten Log\\\\n\\\\nUse Water Bottle to a Rotten Log will grow a moshroom above it."}\'],resolved:1b,title:"Witch\'s Sketch: Primary Study"}')
    ),['4x curlamoety:papers_t1','minecraft:blue_dye']).id("curlamoety:witch_sketch_primary_study_english")
    Event.shapeless((
        Item.of('minecraft:written_book', '{author:"Hell Morpheus",pages:[\'{"text":"When I craft a Witch Writing Desk, using the Rotten Log that transformed by a Rotten Flesh, and take down these notes, I realized that this amulet is far more powerful than I\\\'ve thought. It not only gives me Bottling effect, but increases my affinity to some materials, allows me"}\',\'{"text":"to obtain them much easier.(TIPS: These special accessibility is NOT crafting, but interacting with blocks by Right-Click. And the specified item need to be hold on Main Hand)"}\',\'{"text":"Rookie Witch Amulet:\\\\n\\\\nUse Rotten Flesh to a log except Rotten Log will change it into Rotten Log\\\\n\\\\nUse Water Bottle to a Rotten Log will grow a moshroom above it"}\',\'{"text":"Skilled Witch Amulet:\\\\n\\\\nCaudren Ladle can ladle a Glowing Light, created by focuses, and turn it into glowstone dust.\\\\n\\\\nPaint Red Dye on a stone, the power of the amulet will introduce it to restructure into a Redstone Block."}\',\'{"text":"With a Glass Bottle in your offhand and stuff 4 Sugars into a Beehive you will get Honey Bottle, though no bee is working there."}\',\'{"text":"Those roots under the trees in Twilight Forest, some are dead but some are living root. Maybe pour a water bottle on a dead Root can bring it to live\\\\n\\\\nI am curious that how the Steel Leaf forms. Maybe infusing an Iron Ingot into leaves will create one"}\'],resolved:1b,title:"Witch\'s Sketch: Experiments"}')
    ),['3x curlamoety:papers_t2','minecraft:blue_dye']).id("curlamoety:witch_sketch_experiments_english")
    Event.shapeless((
        Item.of('minecraft:written_book', '{author:"Hell Morpheus",pages:[\'{"text":"When I craft a Witch Writing Desk, using the Rotten Log that transformed by a Rotten Flesh, and take down these notes, I realized that this amulet is far more powerful than I\\\'ve thought. It not only gives me Bottling effect, but increases my affinity to some materials, allows me"}\',\'{"text":"to obtain them much easier.(TIPS: These special accessibility is NOT crafting, but interacting with blocks by Right-Click. And the specified item need to be hold on Main Hand)"}\',\'{"text":"Rookie Witch Amulet:\\\\n\\\\nUse Rotten Flesh to a log except Rotten Log will change it into Rotten Log\\\\n\\\\nUse Water Bottle to a Rotten Log will grow a moshroom above it"}\',\'{"text":"Skilled Witch Amulet:\\\\n\\\\nCaudren Ladle can ladle a Glowing Light, created by focuses, and turn it into glowstone dust.\\\\n\\\\nPaint Red Dye on a stone, the power of the amulet will introduce it to restructure into a Redstone Block."}\',\'{"text":"With a Glass Bottle in your offhand and stuff 4 Sugars into a Beehive you will get Honey Bottle, though no bee is working there."}\',\'{"text":"Those roots under the trees in Twilight Forest, some are dead but some are living root. Maybe pour a water bottle on a dead Root can bring it to live\\\\n\\\\nI am curious that how the Steel Leaf forms. Maybe infusing an Iron Ingot into leaves will create one"}\',\'{"text":"Professional Witch Amulet:\\\\n\\\\nSet fire to a Wood Fence, and grab it, it will turn into a Blaze Rod.\\\\n\\\\nPour a Water Bottle on a cobblestone, the water blessed by the amulet will change the cobblestone into Prismarine"}\',\'{"text":"Bury a Seagrass into a Sand, it will turn into a solid Scute"}\'],resolved:1b,title:"Witch\s Sketch: Furthur Research"}')
    ),['2x curlamoety:papers_t3','minecraft:blue_dye']).id("curlamoety:witch_sketch_furthur_research_english")
    Event.shapeless((
        Item.of('minecraft:written_book', '{author:"Hell Morpheus",pages:[\'{"text":"When I craft a Witch Writing Desk, using the Rotten Log that transformed by a Rotten Flesh, and take down these notes, I realized that this amulet is far more powerful than I\\\'ve thought. It not only gives me Bottling effect, but increases my affinity to some materials, allows me"}\',\'{"text":"to obtain them much easier.(TIPS: These special accessibility is NOT crafting, but interacting with blocks by Right-Click. And the specified item need to be hold on Main Hand)"}\',\'{"text":"Rookie Witch Amulet:\\\\n\\\\nUse Rotten Flesh to a log except Rotten Log will change it into Rotten Log\\\\n\\\\nUse Water Bottle to a Rotten Log will grow a moshroom above it"}\',\'{"text":"Skilled Witch Amulet:\\\\n\\\\nCaudren Ladle can ladle a Glowing Light, created by focuses, and turn it into glowstone dust.\\\\n\\\\nPaint Red Dye on a stone, the power of the amulet will introduce it to restructure into a Redstone Block."}\',\'{"text":"With a Glass Bottle in your offhand and stuff 4 Sugars into a Beehive you will get Honey Bottle, though no bee is working there."}\',\'{"text":"Those roots under the trees in Twilight Forest, some are dead but some are living root. Maybe pour a water bottle on a dead Root can bring it to live\\\\n\\\\nI am curious that how the Steel Leaf forms. Maybe infusing an Iron Ingot into leaves will create one"}\',\'{"text":"Professional Witch Amulet:\\\\n\\\\nSet fire to a Wood Fence, and grab it, it will turn into a Blaze Rod.\\\\n\\\\nPour a Water Bottle on a cobblestone, the water blessed by the amulet will change the cobblestone into Prismarine"}\',\'{"text":"Bury a Seagrass into a Sand, it will turn into a solid Scute"}\',\'{"text":"Master Witch Amulet:\\\\n\\\\nTo be honest, wearing this amulet left me feeling a bit dazed. Somniloquence enwinds me from time to time. Even though the Curse kept me from falling asleep, I found myself experiencing what felt like sleepwalking... "}\',\'{"text":"Those notes are just like whisper of Evil Gods...With great difficulty I extracted some content that could be put into practice:\\\\n\\\\nMystic Core, though not expensive, the production process of which remains somewhat cumbersome and inefficient.So I"}\',\'{"text":"directly smash an Empty Focus on a amethyst block in my anger.\\\\n\\\\nSince I paint that Stone red, I\\\'ve been dyeing all kinds of things. This time pour Purple Dye on a sampling. "}\',\'{"text":"It is said that, there\\\'s still an organ that could produce Dragon Breathe in a Dragon Head, I\\\'ll try to bottle some."}\'],resolved:1b,title:"Witch\'s Sketch: Nightmare"}')
    ),['3x curlamoety:papers_t4','minecraft:blue_dye']).id("curlamoety:witch_sketch_primary_nightmare_english")
    Event.shapeless((
     Item.of('minecraft:written_book', '{author:"Hell Morpheus",pages:[\'{"text":"When I craft a Witch Writing Desk, using the Rotten Log that transformed by a Rotten Flesh, and take down these notes, I realized that this amulet is far more powerful than I\\\'ve thought. It not only gives me Bottling effect, but increases my affinity to some materials, allows me"}\',\'{"text":"to obtain them much easier.(TIPS: These special accessibility is NOT crafting, but interacting with blocks by Right-Click. And the specified item need to be hold on Main Hand)"}\',\'{"text":"Rookie Witch Amulet:\\\\n\\\\nUse Rotten Flesh to a log except Rotten Log will change it into Rotten Log\\\\n\\\\nUse Water Bottle to a Rotten Log will grow a moshroom above it"}\',\'{"text":"Skilled Witch Amulet:\\\\n\\\\nCaudren Ladle can ladle a Glowing Light, created by focuses, and turn it into glowstone dust.\\\\n\\\\nPaint Red Dye on a stone, the power of the amulet will introduce it to restructure into a Redstone Block."}\',\'{"text":"With a Glass Bottle in your offhand and stuff 4 Sugars into a Beehive you will get Honey Bottle, though no bee is working there."}\',\'{"text":"Those roots under the trees in Twilight Forest, some are dead but some are living root. Maybe pour a water bottle on a dead Root can bring it to live\\\\n\\\\nI am curious that how the Steel Leaf forms. Maybe infusing an Iron Ingot into leaves will create one"}\',\'{"text":"Professional Witch Amulet:\\\\n\\\\nSet fire to a Wood Fence, and grab it, it will turn into a Blaze Rod.\\\\n\\\\nPour a Water Bottle on a cobblestone, the water blessed by the amulet will change the cobblestone into Prismarine"}\',\'{"text":"Bury a Seagrass into a Sand, it will turn into a solid Scute"}\',\'{"text":"Master Witch Amulet:\\\\n\\\\nTo be honest, wearing this amulet left me feeling a bit dazed. Somniloquence enwinds me from time to time. Even though the Curse kept me from falling asleep, I found myself experiencing what felt like sleepwalking... "}\',\'{"text":"Those notes are just like whisper of Evil Gods...With great difficulty I extracted some content that could be put into practice:\\\\n\\\\nMystic Core, though not expensive, the production process of which remains somewhat cumbersome and inefficient.So I"}\',\'{"text":"directly smash an Empty Focus on a amethyst block in my anger.\\\\n\\\\nSince I paint that Stone red, I\\\'ve been dyeing all kinds of things. This time pour Purple Dye on a sampling. "}\',\'{"text":"It is said that, there\\\'s still an organ that could produce Dragon Breathe in a Dragon Head, I\\\'ll try to bottle some."}\',\'{"text":"Supreme Witch Amulet:\\\\n\\\\nWhen the blueprint formed from these forbidden researches, I gradually feel her existance:\\\\n\\\\nA homeless, cursed witch, who made use by a dustructive tyrant, and turned her homeland into a sea "}\',\'{"text":"of flame with her own hands.\\\\n\\\\nThese amulets are just insignificant pieces of her power"}\',\'{"text":"The form of Perfect Matter are too perfect that if affects surrounding objects, creating a tendency for them to transform into the same perfect form. With the Philosopher\\\'s Mace I can amplify this tendency, allowing Perfect Matter to assimilate the blocks successfully. "}\',\'{"text":"The Enigmatic Bush grows every slowly, and its strong resistance will refuse external hasten. But now the situation is different, the Infini-meal will let it fruit immediately."}\',\'{"text":"I use to imagine that, didn\\\'t I get an Enchanted Golden Apple if I enchant a Golden Apple? Now there\\\'s a chance for the dream to come true. "}\'],title:"Witch\'s Sketch: Evangelion"}')
    ),['1x curlamoety:annihilation_ashes','minecraft:book','minecraft:blue_dye']).id("curlamoety:witch_sketch_evangelion_english")

    //毒土豆
    Event.shaped(('4x minecraft:poisonous_potato'),[
        'PPP',
        'POP',
        'PPP'
    ],{
        P:'minecraft:potato',
        O:'minecraft:poisonous_potato'
    }).id("curlamoety:poisonous_potato")

    //知识面包
    Event.shapeless(('curlamoety:knowledge_toast'),['curlamoety:papers_t1','minecraft:bread']).id("curlamoety:knowledge_toast")

    //鼓舞魔棒
    Event.shaped((Item.of('curlamoety:inspiration_wand', '{Unbreakable:1b}')),[
        'NWN',
        'TSL',
        'ICF'
    ],{
        N:"minecraft:gold_nugget",
        W:"minecraft:red_wool",
        S:"minecraft:stick",
        I:"minecraft:gold_ingot",
        L:"minecraft:lapis_lazuli",
        T:"minecraft:leather",
        C:"goety:cursed_ingot",
        F:"goety:empty_focus"
    }).id('curlamoety:inspiration_wand')

    //暗夜催化剂
    Event.shaped('goety:rotting_focus',[
        'RIR',
        'RAR',
        'CNP'
    ],{
        R:'minecraft:rotten_flesh',
        I:'minecraft:iron_ingot',
        A:'goety:animation_core',
        C:'minecraft:carrot',
        P:'minecraft:potato',
        N:'#necro:night_catalyst'
    }).keepIngredient('#necro:night_catalyst')
    .id("curlamoety:rotting_focus")

    Event.shaped('goety:osseous_focus',[
        'RTR',
        'BAB',
        'BNB'
    ],{
        R:'minecraft:arrow',
        T:'minecraft:fletching_table',
        A:'goety:animation_core',
        B:'minecraft:bone',
        N:'#necro:night_catalyst'
    }).keepIngredient('#necro:night_catalyst')
    .id("curlamoety:osseus_focus")

    Event.shaped('goety:necro_crown',[
        'BEB',
        'OSO',
        'PNP'
    ],{
        B:'#forge:bones',
        E:'goety:soul_emerald',
        S:'goety:spirit_fabric',
        O:'goety:occult_fabric',
        P:'goety:ectoplasm',
        N:'#necro:night_catalyst'
    }).keepIngredient('#necro:night_catalyst')
    .id("curlamoety:necro_crown")

    Event.shaped('goety:necro_cape',[
        'ONO',
        'BMP',
        'SOS'
    ],{
        B:'#forge:bones',
        M:'goety:magic_fabric',
        S:'goety:spirit_fabric',
        O:'goety:occult_fabric',
        P:'goety:ectoplasm',
        N:'#necro:night_catalyst'
    }).keepIngredient('#necro:night_catalyst')
    .id("curlamoety:necro_cape")

    //巨兽之眼
    Event.remove('cataclysm:monstrous_eye')
    Event.shaped('cataclysm:monstrous_eye',[
        'NRN',
        'GEG',
        'BLB'
    ],{
        R:'minecraft:redstone_block',
        B:'minecraft:blackstone',
        G:'minecraft:gold_ingot',
        N:'minecraft:nether_bricks',
        E:'minecraft:ender_eye',
        L:'minecraft:lava_bucket'
    }).id("curlamoety:monstrous_eye")

    //后卫
    Event.shaped('goetyawaken:vanguard_champion_spawn_egg',[
        ['goety:pale_steel_ingot','goety:vanguard_focus','goety:forbidden_piece'],
        ['goety:wind_core','minecraft:iron_sword','minecraft:gold_ingot'],
        ['goety:iron_hide_focus','goetyawaken:champion_focus','']
    ]).keepIngredient('goety:vanguard_focus').keepIngredient('goetyawaken:champion_focus')
    .id("curlamoety:vanguard_champion_spawn_egg")

    //余烬合金
    Event.shapeless(('goetyawaken:gilded_ingot'),['enigmaticaddons:bless_amplifier','minecraft:gold_block','minecraft:netherite_scrap','goety:dark_ingot'])
    .id("curlamoety:gilded_ingot")

    //附魔之瓶
    Event.shapeless(('minecraft:experience_bottle'),['curlamoety:papers_t1','minecraft:glass_bottle'])
    .id('curlamoety:experience_bottle')

    //水晶球（意义不明
    Event.shaped('goety:crystal_ball',[
        'GGG',
        'GPG',
        'III'
    ],{
        G:'#forge:glass',
        P:'curlamoety:papers_t2',
        I:'minecraft:gold_ingot'
    }).id("curlamoety:crystal_ball")
    
    //传送石
    Event.replaceInput({output:('#waystones:waystones')},'waystones:warp_stone','waystones:warp_dust')

    //终灾玩偶
    Event.shaped('curlamoety:calamitas_plushie',[
        'SYS',
        'RTR',
        'GYG'
    ],{
        S:'minecraft:white_wool',
        Y:'minecraft:gray_wool',
        R:'minecraft:red_wool',
        T:'minecraft:redstone',
        G:'minecraft:gold_ingot',
    }).id('curlamoety:calamitas_plushie')

    //隐形物品展示框
    Event.shapeless((Item.of('minecraft:item_frame', "{EntityTag:{Invisible:1b},RepairCost:0,display:{Name:'{\"text\":\"隐形物品展示框\"}'}}")),['minecraft:glass_pane','minecraft:item_frame'])
    .id("curlamoety:invicible_item_frame")

    //蛛网
    Event.shaped('2x minecraft:cobweb',[
        'S S',
        ' W ',
        'S S',
    ],{
        S:'minecraft:string',
        W:'minecraft:cobweb'
    }).id("curlamoety:cobweb")

    //岛猪玩偶
    Event.shaped('curlamoety:daochan_plushie',[
        'YYS',
        'WY ',
        'PPY'
    ],{
        S:'minecraft:string',
        Y:'minecraft:yellow_wool',
        P:'minecraft:pink_wool',
        W:'minecraft:white_wool',
    }).id('curlamoety:daochan_plushie')

    //暴戾之咒
    Event.replaceInput({output:('enigmaticaddons:violence_scroll')},'enigmaticlegacy:cursed_scroll','enigmaticlegacy:darkest_scroll')

    //孤注一掷
    Event.shaped('curlamoety:desperate_attempt',[
        'DRE',
        'RGR',
        'ERD',
    ],{
        G:'minecraft:gold_block',
        D:'minecraft:diamond',
        E:'goety:magic_emerald',
        R:'minecraft:redstone'
    }).id('curlamoety:desperate_attempt')

    //不破之颅
    Event.shaped('cataclysm:unbreakable_skull',[
        'AE ',
        'ISA',
        ' AA',
    ],{
        A:'cataclysm:ancient_metal_ingot',
        S:'minecraft:skeleton_skull',
        I:'minecraft:iron_block',
        E:'goety:magic_emerald'
    }).id("curlamoety:unbreakable_skull")

    //活力安卡
    Event.shaped('cataclysm:vitality_ankh',[
        ' R ',
        'ITI',
        ' I '
    ],{
        R:'enigmaticlegacy:golden_ring',
        I:'cataclysm:ancient_metal_ingot',
        T:['minecraft:totem_of_undying','goety:totem_of_souls']
    }).id("curlamoety:vitality_ankh")

    //怨恨之戒
    Event.shaped('cataclysm:ring_of_grudged',[
        'ECG',
        'BRB',
        ' B '
    ],{
        C:'cataclysm:cursium_ingot',
        G:'minecraft:gold_ingot',
        E:'goety:soul_emerald',
        B:'cataclysm:black_steel_ingot',
        R:'enigmaticlegacy:iron_ring'
    }).id("curlamoety:ring_of_grudged")

    //战魂护符
    Event.shaped('cataclysm:berserker_soul_amulet',[
        'BNB',
        'B B',
        'ECG'
    ],{
        C:'cataclysm:cursium_ingot',
        G:'minecraft:gold_ingot',
        E:'goety:soul_emerald',
        B:'cataclysm:black_steel_ingot',
        N:'minecraft:chain'
    }).id("curlamoety:berserker_soul_amulet")

    //结实皮靴
    Event.shaped('cataclysm:sturdy_boots',[
        ' B ',
        'I I',
        '   '
    ],{
        B:'leather_boots',
        I:'iron_ingot'
    }).id("curlamoety:sturdy_boots")

    //星辰调味瓶
    Event.shapeless('enigmaticdelicacy:astral_cruet',
        ['enigmaticdelicacy:astral_fruit_slice','enigmaticaddons:astral_potion','goetydelight:metamorphic_scent_grass','farmersdelight:milk_bottle','farmersdelight:tomato_sauce'])
        .id("curlamoety:astral_cruet")

    //囚犯镐
    Event.shaped(Item.of('curlamoety:prisoner_pickaxe', '{Unbreakable:1}'),[
        'III',
        ' S ',
        ' SO'
    ],{
        S:'minecraft:stick',
        I:'goety:pale_steel_ingot',
        O:'goety:ominous_shackles'
    }).id("curlamoety:prisoner_pickaxe")

    //荣耀腰带
    Event.shaped('curlamoety:belt_of_glorious',[
        'GIG',
        'MBM',
        ' N '
    ],{
        G:'minecraft:glowstone_dust',
        I:'enigmaticaddons:ichor_droplet',
        M:'goety:magic_fabric',
        B:'cataclysm:belt_of_beginner',
        N:'minecraft:netherite_ingot'
    }).id("curlamoety:belt_of_glorious")

    //求生者的意志
    Event.shaped('curlamoety:survivor_will',[
        'RUR',
        'AGA',
        ' K '
    ],{
        U:'cataclysm:unbreakable_skull',
        A:'cataclysm:ancient_metal_ingot',
        K:'cataclysm:vitality_ankh',
        G:'minecraft:golden_apple',
        R:'minecraft:redstone'
    }).id('curlamoety:survivor_will')

    //拆解台
    Event.remove('twilightforest:uncrafting_table')
    Event.shaped('twilightforest:uncrafting_table',[
        'BFB',
        'PTP',
        'BCB',
    ],{
        B:'cataclysm:witherite_ingot',
        P:'minecraft:crafting_table',
        F:'twilightforest:maze_map_focus',
        C:'goety:dark_metal_block',
        T:'goety:philosophers_stone'
    }).id("curlamoety:uncrafting_table")

    //无线终端
    Event.shaped('refinedstorageaddons:creative_wireless_crafting_grid',[
        'IFI',
        'IGI',
        'ICI',
    ],{
        I:'refinedstorage:quartz_enriched_iron',
        F:'goetyawaken:access_focus',
        G:'#refinedstorage:grid',
        C:'refinedstorage:advanced_processor'
    }).id("curlamoety:creative_wireless_crafting_grid")

    //叶绿锭
    Event.smithing('curlamoety:chlorophium_ingot','twilightforest:steeleaf_ingot','twilightforest:ironwood_ingot','goety:magic_emerald')
    .id("curlamoety:chlorophium_ingot")
    
    Event.shapeless('enigmaticlegacy:mending_mixture',['curlamoety:chlorophium_ingot','minecraft:slime_ball','minecraft:amethyst_shard','minecraft:honey_bottle'])
    .id("curlamoety:mending_mixture")

    //皎月银环
    Event.shaped('curlamoety:moon_circlet',[
        'GMG',
        'ICI',
        'NTN'
    ],{
        G:'minecraft:gold_ingot',
        M:'goety:moon_banner_pattern',
        N:'twilightforest:naga_scale',
        C:'curlamoety:gloomy_circlet',
        I:'curlamoety:chlorophium_ingot',
        T:'twilightforest:lich_trophy'
    }).id('curlamoety:moon_circlet')

    //深渊祭品
    Event.shaped('cataclysm:abyssal_sacrifice',[
        ['','goety_cataclysm:abyss_essence',''],
        ['minecraft:diamond_block','cataclysm:abyss_eye','minecraft:emerald_block'],
        ['minecraft:iron_block','minecraft:amethyst_block','minecraft:gold_block']
    ]).id("curlamoety:abyssal_sacrifice")

    //高草
    Event.shaped('minecraft:tall_grass',[
        ' G ',
        ' G ',
        '   '
    ],{
        G:'minecraft:grass'
    }).id("curlamoety:tall_grass")

    //生源锭
    Event.shaped('curlamoety:biogenesium_ingot',[
        ' C ',
        'BIT',
        'ECE',
    ],{
        C:'twilightforest:carminite',
        I:'curlamoety:chlorophium_ingot',
        B:'twilightforest:fiery_blood',
        T:'twilightforest:fiery_tears',
        E:'twilightforest:experiment_115'
    }).id('curlamoety:biogenesium_ingot')

    //维度意志
    Event.remove('goety_revelation:dimensional_will')
    Event.shaped('goety_revelation:dimensional_will',[
        ['curlamoety:goal_ty','goety:undeath_potion','curlamoety:chaos_cube'],
        ['minecraft:dragon_egg','twilightforest:giant_obsidian','goety_revelation:revelation'],
        ['curlamoety:calamity_source','twilightforest:lamp_of_cinders','curlamoety:twilight_sparkle']
    ]).id("curlamoety:dimension_will")

    //蜜脾
    Event.shaped('2x minecraft:honeycomb',[
        ' B ',
        'SHS',
        ' S '
    ],{
        B:'minecraft:slime_ball',
        H:"minecraft:honey_bottle",
        S:"minecraft:stick"
    }).id("curlamoety:honeycomb")

    //符咒
    Event.remove('twilightforest:charm_of_life_2')
    Event.remove('twilightforest:charm_of_keeping_3')
    Event.remove('twilightforest:charm_of_keeping_2')
    Event.shapeless('twilightforest:charm_of_keeping_3',['2x twilightforest:charm_of_keeping_2']).id("curlamoety:charm_of_keeping_3")
    Event.shapeless('twilightforest:charm_of_keeping_2',['3x twilightforest:charm_of_keeping_1']).id("curlamoety:charm_of_keeping_2")
    Event.shapeless('twilightforest:charm_of_life_2',['3x twilightforest:charm_of_life_1']).id("curlamoety:charm_of_life_2")

    //辉光余烬
    Event.smelting('goetyawaken:glowing_ember','curlamoety:evernight_veil',2,100).id("curlamoety:glowing_ember")

    //全知之书
    Event.remove('enigmaticdelicacy:enchantment_duplicator')
    Event.shaped('enigmaticdelicacy:enchantment_duplicator',[
        'LGL',
        'GBG',
        'LEL'
    ],{
        L:"minecraft:lapis_lazuli",
        G:'enigmaticdelicacy:glistening_bark',
        B:'enigmaticlegacy:enchantment_transposer',
        E:'enigmaticaddons:earth_heart_fragment'
    }).id("curlamoety:enchantment_duplicator")

    //连接宝石
    Event.shaped('12x goety:soul_transfer',[
        'PPP',
        'RER',
        'SSS'
    ],{
        P:"minecraft:ender_pearl",
        E:"goety:awakened_emerald_block",
        R:"minecraft:redstone_block",
        S:"#minecraft:soul_fire_base_blocks"
    }).id("curlamoety:soul_transfer")

    //灵魂蜡烛
    Event.shaped('12x goety:soul_candlestick',[
        'CCC',
        'COC',
        ' B '
    ],{
        C:"#minecraft:candles",
        O:"goety:cursed_cage",
        B:"goety:cursed_metal_block",
    }).id("curlamoety:soul_candlestick")

    //幻影熔渣
    Event.smelting('curlamoety:phantom_slag','twilightforest:phantom_helmet',2,100).id("curlamoety:phantom_slag1")
    Event.smelting('curlamoety:phantom_slag','twilightforest:phantom_chestplate',2,100).id("curlamoety:phantom_slag2")
    
})  