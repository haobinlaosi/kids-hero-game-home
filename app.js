// ============ 游戏数据定义 ============

const CHARACTERS = {
  leidi: { name: '乐迪', desc: '超级飞侠', img: 'icons/leidi.png' },
  diga: { name: '迪迦', desc: '奥特曼', img: 'icons/dijia.png' }
};

const TASKS = [
  { id: 'brush', name: '刷牙', icon: '🪥', points: 5 },
  { id: 'tidy', name: '收拾玩具', icon: '🧸', points: 5 },
  { id: 'eat', name: '自己吃饭', icon: '🍚', points: 10 },
  { id: 'veggie', name: '吃青菜', icon: '🥦', points: 5 },
  { id: 'chore', name: '帮忙做家务', icon: '🧹', points: 15 },
  { id: 'early_sleep', name: '早睡', icon: '🌙', points: 10 },
  { id: 'early_rise', name: '早起', icon: '🌅', points: 10 },
  { id: 'study', name: '看书学习', icon: '📖', points: 10 },
  { id: 'english', name: '学英语', icon: '🔤', points: 5 },
  { id: 'exercise', name: '运动锻炼', icon: '⚽', points: 10 },
  { id: 'obey', name: '听话', icon: '👍', points: 5 },
  { id: 'hit', name: '打人', icon: '🚫', points: -5 }
];

const SHOP_ITEMS = {
  furniture: {
    label: '家具', icon: '🛋️', zone: 'floor',
    items: [
      { id: 'f_sofa', name: '小沙发', icon: '🛋️', price: 20, pos: { left:'3%', bottom:'32%', size:'34px' } },
      { id: 'f_table', name: '小桌子', icon: '🪑', price: 15, pos: { left:'25%', bottom:'28%', size:'28px' } },
      { id: 'f_bed', name: '小床', icon: '🛏️', price: 25, pos: { right:'3%', bottom:'35%', size:'34px' } },
      { id: 'f_shelf', name: '书架', icon: '📚', price: 20, pos: { right:'5%', bottom:'65%', size:'28px' } },
      { id: 'f_tv', name: '电视', icon: '📺', price: 30, pos: { left:'42%', bottom:'68%', size:'30px' } },
      { id: 'f_lamp', name: '台灯', icon: '💡', price: 15, pos: { left:'2%', bottom:'58%', size:'24px' } },
      { id: 'f_bath', name: '浴缸', icon: '🛁', price: 30, pos: { right:'25%', bottom:'5%', size:'30px' } },
      { id: 'f_piano', name: '钢琴', icon: '🎹', price: 35, pos: { left:'12%', bottom:'5%', size:'32px' } },
      { id: 'f_computer', name: '电脑', icon: '💻', price: 25, pos: { right:'18%', bottom:'55%', size:'26px' } },
      { id: 'f_fridge', name: '冰箱', icon: '🧊', price: 20, pos: { right:'2%', bottom:'55%', size:'28px' } }
    ]
  },
  wallDecor: {
    label: '墙饰', icon: '🖼️', zone: 'wall',
    items: [
      { id: 'w_paint', name: '挂画', icon: '🖼️', price: 10, pos: { left:'5%', top:'12%', size:'28px' } },
      { id: 'w_clock', name: '时钟', icon: '🕐', price: 15, pos: { left:'22%', top:'8%', size:'24px' } },
      { id: 'w_photo', name: '照片墙', icon: '📷', price: 15, pos: { right:'22%', top:'10%', size:'24px' } },
      { id: 'w_cert', name: '奖状', icon: '📜', price: 20, pos: { left:'38%', top:'5%', size:'24px' } },
      { id: 'w_mirror', name: '镜子', icon: '🪞', price: 15, pos: { right:'5%', top:'12%', size:'26px' } },
      { id: 'w_flag', name: '小旗帜', icon: '🚩', price: 10, pos: { left:'5%', top:'55%', size:'22px' } },
      { id: 'w_map', name: '世界地图', icon: '🗺️', price: 20, pos: { right:'5%', top:'50%', size:'26px' } },
      { id: 'w_note', name: '音符墙', icon: '🎵', price: 15, pos: { left:'22%', top:'50%', size:'22px' } },
      { id: 'w_heart', name: '爱心墙', icon: '❤️', price: 10, pos: { right:'22%', top:'48%', size:'24px' } },
      { id: 'w_star', name: '星星灯', icon: '🌟', price: 20, pos: { left:'55%', top:'5%', size:'24px' } }
    ]
  },
  floor: {
    label: '地板墙纸', icon: '🎨', zone: 'bg',
    items: [
      { id: 'fl_star', name: '星空', icon: '⭐', price: 35, wallBg: '#1a1a3e', floorBg: '#0c0c2e' },
      { id: 'fl_rainbow', name: '彩虹', icon: '🌈', price: 40, wallBg: '#ffe0ec', floorBg: '#ffd0d0' },
      { id: 'fl_grass', name: '草地', icon: '🌿', price: 30, wallBg: '#c8e6c9', floorBg: '#4CAF50' },
      { id: 'fl_ocean', name: '海洋', icon: '🌊', price: 40, wallBg: '#b3e5fc', floorBg: '#0288d1' },
      { id: 'fl_cloud', name: '云朵天空', icon: '☁️', price: 35, wallBg: '#e3f2fd', floorBg: '#bbdefb' },
      { id: 'fl_sunset', name: '晚霞', icon: '🌅', price: 40, wallBg: '#ff8a65', floorBg: '#d84315' },
      { id: 'fl_candy', name: '糖果屋', icon: '🍬', price: 35, wallBg: '#f8bbd0', floorBg: '#f48fb1' },
      { id: 'fl_space', name: '太空', icon: '🪐', price: 50, wallBg: '#1a0033', floorBg: '#0d001a' }
    ]
  },
  special: {
    label: '特殊装饰', icon: '✨', zone: 'special',
    items: [
      { id: 's_tree', name: '圣诞树', icon: '🎄', price: 50, pos: { right:'3%', bottom:'8%', size:'36px' } },
      { id: 's_balloon', name: '气球', icon: '🎈', price: 40, pos: { left:'8%', top:'5%', size:'30px' } },
      { id: 's_lights', name: '彩灯', icon: '🎆', price: 45, pos: { left:'50%', top:'2%', size:'28px' } },
      { id: 's_fountain', name: '喷泉', icon: '⛲', price: 60, pos: { left:'42%', bottom:'3%', size:'32px' } },
      { id: 's_flower', name: '花园', icon: '🌸', price: 40, pos: { left:'3%', bottom:'5%', size:'28px' } },
      { id: 's_rocket', name: '火箭', icon: '🚀', price: 55, pos: { right:'8%', top:'3%', size:'30px' } },
      { id: 's_rainbow', name: '彩虹桥', icon: '🌈', price: 50, pos: { left:'30%', top:'0%', size:'34px' } },
      { id: 's_trophy', name: '奖杯', icon: '🏆', price: 45, pos: { right:'30%', bottom:'60%', size:'26px' } },
      { id: 's_castle', name: '小城堡', icon: '🏰', price: 60, pos: { right:'3%', bottom:'55%', size:'34px' } },
      { id: 's_ferris', name: '摩天轮', icon: '🎡', price: 55, pos: { left:'3%', bottom:'50%', size:'34px' } }
    ]
  },
  pet: {
    label: '宠物', icon: '🐾', zone: 'pet',
    items: [
      { id: 'p_dog', name: '小狗', icon: '🐕', price: 60, gif: 'gifs/dog.gif', voice: 'dog' },
      { id: 'p_cat', name: '小猫', icon: '🐈', price: 60, gif: 'gifs/cat.gif', voice: 'cat' },
      { id: 'p_rabbit', name: '兔子', icon: '🐰', price: 50, gif: 'gifs/rabbit.gif', voice: 'rabbit' },
      { id: 'p_hamster', name: '仓鼠', icon: '🐹', price: 45, gif: 'gifs/hamster.gif', voice: 'hamster' },
      { id: 'p_bird', name: '小鸟', icon: '🐦', price: 50, gif: 'gifs/bird.gif', voice: 'bird' },
      { id: 'p_fish', name: '金鱼', icon: '🐟', price: 40, gif: 'gifs/gold_fish.gif', aquatic: true, voice: 'fish' },
      { id: 'p_panda', name: '熊猫', icon: '🐼', price: 70, gif: 'gifs/panada.gif', voice: 'panda' },
      { id: 'p_dragon', name: '小恐龙', icon: '🦖', price: 80, gif: 'gifs/Tyrannosaurus_rex.gif', voice: 'dragon' },
      { id: 'p_unicorn', name: '独角兽', icon: '🦄', price: 80, gif: 'gifs/unicorn.gif', voice: 'unicorn' },
      { id: 'p_whale', name: '抹香鲸', icon: '🐋', price: 70, gif: 'gifs/whale.gif', aquatic: true, voice: 'whale' },
      { id: 'p_shark', name: '鲨鱼宝宝', icon: '🦈', price: 65, gif: 'gifs/shark.gif', aquatic: true, voice: 'shark' }
    ]
  },
  music: {
    label: '音乐', icon: '🎵', zone: 'music',
    items: [
      { id: 'bgm_happy',     name: '欢乐曲', icon: '😄', price: 30, file: 'music/happy.mp3' },
      { id: 'bgm_adventure', name: '冒险曲', icon: '⚔️', price: 40, file: 'music/adventure.mp3' },
      { id: 'bgm_lullaby',   name: '摇篮曲', icon: '🌙', price: 30, file: 'music/lullaby.mp3' },
      { id: 'bgm_hero',      name: '英雄曲', icon: '🦸', price: 50, file: 'music/hero.mp3' },
      { id: 'bgm_magic',     name: '魔法曲', icon: '✨', price: 40, file: 'music/magic.mp3' }
    ]
  }
};

const MONSTERS = [
  { id: 'm1', name: '小怪兽', icon: '👾', maxHp: 10 },
  { id: 'm2', name: '火焰怪', icon: '🔥', maxHp: 10 },
  { id: 'm3', name: '冰霜怪', icon: '🥶', maxHp: 10 },
  { id: 'm4', name: '暗影怪', icon: '👿', maxHp: 10 },
  { id: 'm5', name: '雷电怪', icon: '⚡', maxHp: 10 },
  { id: 'm6', name: '巨石怪', icon: '🗿', maxHp: 10 },
  { id: 'm7', name: '毒蘑菇', icon: '🍄', maxHp: 10 },
  { id: 'm8', name: '幽灵怪', icon: '👻', maxHp: 10 }
];

const BOSSES = [
  { id: 'b1', name: '炎魔王',     icon: '🔥👹', maxHp: 50, rewardPoints: 50 },
  { id: 'b2', name: '冰封巨兽',   icon: '❄️🦖', maxHp: 50, rewardPoints: 50 },
  { id: 'b3', name: '暗影恶龙',   icon: '🐲',   maxHp: 50, rewardPoints: 50 },
  { id: 'b4', name: '雷霆魔神',   icon: '⚡👿', maxHp: 50, rewardPoints: 50 },
  { id: 'b5', name: '终极大魔王', icon: '💀',   maxHp: 50, rewardPoints: 80 }
];

// ============ 像素宠物 ============
// 12x12 网格，字符映射颜色，0=透明
// 每只宠物有 happy/normal/sad 三种表情

const PIXEL_PETS = {
  // 小狗 - 棕色垂耳小狗
  p_dog: {
    colors: { c:'#7B4B2A', a:'#C68642', b:'#F2D2A0', w:'#FFF', e:'#1A1A2E', p:'#FFB0C0', n:'#4D3319', t:'#FF7777', s:'#74b9ff' },
    happy: [
      '00cc0000cc00',
      '0caac00caac0',
      '0cbbc00cbbc0',
      '00cbbbbbbc00',
      '0cbbbbbbbbc0',
      '0cbwebbwebc0',
      'pcbbebbbebcp',
      '00cbbnnbbc00',
      '00cbbtbbbc00',
      '000cbbbbc000',
      '000cb00bc000',
      '000cc00cc000',
    ],
    normal: [
      '00cc0000cc00',
      '0caac00caac0',
      '0cbbc00cbbc0',
      '00cbbbbbbc00',
      '0cbbbbbbbbc0',
      '0cbwebbwebc0',
      'pcbbebbbebcp',
      '00cbbnnbbc00',
      '00cbbbbbbc00',
      '000cbbbbc000',
      '000cb00bc000',
      '000cc00cc000',
    ],
    sad: [
      '00cc0000cc00',
      '0caac00caac0',
      '0cbbc00cbbc0',
      '00cbbbbbbc00',
      '0cbbbbbbbbc0',
      '0cbbebbbebsc',
      'pcbwebbbwecp',
      '00cbbnnbbc00',
      '00cbbtbbbc00',
      '000cbbbbc000',
      '000cb00bc000',
      '000cc00cc000',
    ],
  },
  // 小猫 - 橘色三角耳猫咪
  p_cat: {
    colors: { c:'#CC6A00', a:'#FF9933', b:'#FFCC80', w:'#FFF', e:'#1A1A2E', p:'#FFB0C0', n:'#5C3D2E', t:'#FF7777', s:'#74b9ff', d:'#E87A00' },
    happy: [
      '00c000000c00',
      '0cac0000cac0',
      '0caacbbcaac0',
      '00cbbbbbbc00',
      '0cbbbbbbbbc0',
      '0cbwebbwebc0',
      'pcbbebbbebcp',
      '00cbbnnbbc00',
      '00cbbtbbbc00',
      '000cbbbbc000',
      '000cb00bc0c0',
      '000cc00cccc0',
    ],
    normal: [
      '00c000000c00',
      '0cac0000cac0',
      '0caacbbcaac0',
      '00cbbbbbbc00',
      '0cbbbbbbbbc0',
      '0cbwebbwebc0',
      'pcbbebbbebcp',
      '00cbbnnbbc00',
      '00cbbbbbbc00',
      '000cbbbbc000',
      '000cb00bc0c0',
      '000cc00cccc0',
    ],
    sad: [
      '00c000000c00',
      '0cac0000cac0',
      '0caacbbcaac0',
      '00cbbbbbbc00',
      '0cbbbbbbbbc0',
      '0cbbebbbebsc',
      'pcbwebbbwecp',
      '00cbbnnbbc00',
      '00cbbtbbbc00',
      '000cbbbbc000',
      '000cb00bc0c0',
      '000cc00cccc0',
    ],
  },
  // 兔子 - 白色长耳朵粉内耳
  p_rabbit: {
    colors: { c:'#C0AABC', a:'#FFFFFF', b:'#F5EEF5', w:'#FFF', e:'#1A1A2E', p:'#FFB0C0', n:'#DDAAAA', t:'#FF7777', s:'#74b9ff' },
    happy: [
      '0cc000000cc0',
      '0cpc0000cpc0',
      '0cpc0000cpc0',
      '0cacbbbbcac0',
      '0cbbbbbbbbc0',
      '0cbwebbwebc0',
      'pcbbebbbebcp',
      '00cbbnbbbc00',
      '00cbbtbbbc00',
      '000cbbbbc000',
      '000cb00bc000',
      '000cc00cc000',
    ],
    normal: [
      '0cc000000cc0',
      '0cpc0000cpc0',
      '0cpc0000cpc0',
      '0cacbbbbcac0',
      '0cbbbbbbbbc0',
      '0cbwebbwebc0',
      'pcbbebbbebcp',
      '00cbbnbbbc00',
      '00cbbbbbbc00',
      '000cbbbbc000',
      '000cb00bc000',
      '000cc00cc000',
    ],
    sad: [
      '0cc000000cc0',
      '0cpc0000cpc0',
      '0cpc0000cpc0',
      '0cacbbbbcac0',
      '0cbbbbbbbbc0',
      '0cbbebbbebsc',
      'pcbwebbbwecp',
      '00cbbnbbbc00',
      '00cbbtbbbc00',
      '000cbbbbc000',
      '000cb00bc000',
      '000cc00cc000',
    ],
  },
  // 仓鼠 - 圆胖大脸颊
  p_hamster: {
    colors: { c:'#A0673C', a:'#D4954A', b:'#F5DDB8', w:'#FFF', e:'#1A1A2E', p:'#FFB0C0', n:'#6B4226', t:'#FF7777', s:'#74b9ff', k:'#FFE8CC' },
    happy: [
      '00cc0000cc00',
      '0caaccccaac0',
      'cabbbbbbbbac',
      'kbbbbbbbbbbk',
      'kbbwebbwebbk',
      'pbbbebbbebbp',
      'kbbbbnnbbbbk',
      '0cbbbttbbbc0',
      '00cbbbbbbc00',
      '000cbbbbc000',
      '000cb00bc000',
      '000cc00cc000',
    ],
    normal: [
      '00cc0000cc00',
      '0caaccccaac0',
      'cabbbbbbbbac',
      'kbbbbbbbbbbk',
      'kbbwebbwebbk',
      'pbbbebbbebbp',
      'kbbbbnnbbbbk',
      '0cbbbbbbbbc0',
      '00cbbbbbbc00',
      '000cbbbbc000',
      '000cb00bc000',
      '000cc00cc000',
    ],
    sad: [
      '00cc0000cc00',
      '0caaccccaac0',
      'cabbbbbbbbac',
      'kbbbbbbbbbbk',
      'kbbbebbbebsk',
      'pbbwebbbbwep',
      'kbbbbnnbbbbk',
      '0cbbbtbbbbc0',
      '00cbbbbbbc00',
      '000cbbbbc000',
      '000cb00bc000',
      '000cc00cc000',
    ],
  },
  // 小鸟 - 蓝色圆身黄嘴
  p_bird: {
    colors: { c:'#0277BD', a:'#4FC3F7', b:'#B3E5FC', w:'#FFF', e:'#1A1A2E', p:'#FFB0C0', n:'#01579B', y:'#FFD54F', t:'#FF7777', s:'#74b9ff' },
    happy: [
      '000000000000',
      '0000cccc0000',
      '000cbbbbc000',
      '00cbbbbbbc00',
      '00cbwebbbc00',
      '00cbbebbbc00',
      'nncbbbbbbcpp',
      'nnncbbbbbc00',
      '000ybbbby000',
      '000cybbyc000',
      '0000yy0yy000',
      '000000000000',
    ],
    normal: [
      '000000000000',
      '0000cccc0000',
      '000cbbbbc000',
      '00cbbbbbbc00',
      '00cbwebbbc00',
      '00cbbebbbc00',
      'nncbbbbbbcpp',
      'nnncbbbbbc00',
      '000ybbbby000',
      '000cybbyc000',
      '0000yy0yy000',
      '000000000000',
    ],
    sad: [
      '000000000000',
      '0000cccc0000',
      '000cbbbbc000',
      '00cbbbbbbc00',
      '00cbbebsbc00',
      '00cbwebbbc00',
      'nncbbbbbbcpp',
      'nnncbbbbbc00',
      '000ybttby000',
      '000cybbyc000',
      '0000yy0yy000',
      '000000000000',
    ],
  },
  // 金鱼 - 金橙色飘逸尾鳍
  p_fish: {
    colors: { c:'#E65100', a:'#FF9800', b:'#FFE0B2', w:'#FFF', e:'#1A1A2E', p:'#FFB0C0', n:'#BF360C', t:'#FF7777', s:'#74b9ff' },
    happy: [
      '000000000000',
      '00000ccc0000',
      '0000cbbbc000',
      'n00cbbbbbc00',
      'nn0cbwebbc00',
      'nnncbbebbcpp',
      'nn0cbbbbbc00',
      'n00cbbbbbc00',
      '0000cbbbc000',
      '00000ccc0000',
      '000000000000',
      '000000000000',
    ],
    normal: [
      '000000000000',
      '00000ccc0000',
      '0000cbbbc000',
      'n00cbbbbbc00',
      'nn0cbwebbc00',
      'nnncbbebbcpp',
      'nn0cbbbbbc00',
      'n00cbbbbbc00',
      '0000cbbbc000',
      '00000ccc0000',
      '000000000000',
      '000000000000',
    ],
    sad: [
      '000000000000',
      '00000ccc0000',
      '0000cbbbc000',
      'n00cbbbbbc00',
      'nn0cbbebsc00',
      'nnncbwebbc00',
      'nn0cbbbbbc00',
      'n00cbbtbbc00',
      '0000cbbbc000',
      '00000ccc0000',
      '000000000000',
      '000000000000',
    ],
  },
  // 熊猫 - 黑白经典大眼圈
  p_panda: {
    colors: { c:'#222', a:'#000', b:'#FFF', w:'#FFF', e:'#1A1A2E', p:'#FFB0C0', n:'#444', t:'#FF7777', s:'#74b9ff', g:'#E8E8E8' },
    happy: [
      '0cc000000cc0',
      'cac000000cac',
      'caacggggcaac',
      '00cgbbbbgc00',
      '0cgbbbbbbgc0',
      '0cawebcwebgc',
      'pcaebbcaebgp',
      '00cgbbbbgc00',
      '00cgbttbgc00',
      '000cgbbgc000',
      '000ca00ac000',
      '000cc00cc000',
    ],
    normal: [
      '0cc000000cc0',
      'cac000000cac',
      'caacggggcaac',
      '00cgbbbbgc00',
      '0cgbbbbbbgc0',
      '0cawebcwebgc',
      'pcaebbcaebgp',
      '00cgbbbbgc00',
      '00cgbbbbgc00',
      '000cgbbgc000',
      '000ca00ac000',
      '000cc00cc000',
    ],
    sad: [
      '0cc000000cc0',
      'cac000000cac',
      'caacggggcaac',
      '00cgbbbbgc00',
      '0cgbbbbbbgc0',
      '0caebbcaebsc',
      'pcawebcawebp',
      '00cgbbbbgc00',
      '00cgbtbgc000',
      '000cgbbgc000',
      '000ca00ac000',
      '000cc00cc000',
    ],
  },
  // 小恐龙 - 绿色Q版恐龙
  p_dragon: {
    colors: { c:'#2E7D32', a:'#4CAF50', b:'#A5D6A7', w:'#FFF', e:'#1A1A2E', p:'#FFB0C0', n:'#1B5E20', t:'#FF7777', s:'#74b9ff', y:'#FFEB3B', d:'#81C784' },
    happy: [
      '0y00y00y0000',
      '0cyccyccyc00',
      '00cbbbbbbc00',
      '0cbbbbbbbbc0',
      '0cbwebbwebc0',
      'pcbbebbbebcp',
      '00cbbnnbbc00',
      '00cbbtbbbc0n',
      '000cbbbbc0n0',
      '000cb00bcn00',
      '000cc00cc000',
      '000000000000',
    ],
    normal: [
      '0y00y00y0000',
      '0cyccyccyc00',
      '00cbbbbbbc00',
      '0cbbbbbbbbc0',
      '0cbwebbwebc0',
      'pcbbebbbebcp',
      '00cbbnnbbc00',
      '00cbbbbbbc0n',
      '000cbbbbc0n0',
      '000cb00bcn00',
      '000cc00cc000',
      '000000000000',
    ],
    sad: [
      '0y00y00y0000',
      '0cyccyccyc00',
      '00cbbbbbbc00',
      '0cbbbbbbbbc0',
      '0cbbebbbebsc',
      'pcbwebbbwecp',
      '00cbbnnbbc00',
      '00cbbtbbbc0n',
      '000cbbbbc0n0',
      '000cb00bcn00',
      '000cc00cc000',
      '000000000000',
    ],
  },
  // 独角兽 - 白色金角彩虹鬃毛
  p_unicorn: {
    colors: { c:'#CCBBDD', a:'#FFF', b:'#F5EEF8', w:'#FFF', e:'#1A1A2E', p:'#FFB0C0', n:'#DDCCDD', t:'#FF7777', s:'#74b9ff', g:'#FFD700', h:'#FF69B4', u:'#9B59B6', r:'#FF6B6B', o:'#FFB347' },
    happy: [
      '0000g0000000',
      '000gac000000',
      '00gacbbbc0u0',
      '00cbbbbbcuu0',
      '0cbbbbbbbbc0',
      '0cbwebbwebc0',
      'pcbbebbbebcp',
      '00chbnnbhc00',
      '00cbbtbbbc00',
      '000cbbbbc000',
      '000cb00bc000',
      '000cc00cc000',
    ],
    normal: [
      '0000g0000000',
      '000gac000000',
      '00gacbbbc0u0',
      '00cbbbbbcuu0',
      '0cbbbbbbbbc0',
      '0cbwebbwebc0',
      'pcbbebbbebcp',
      '00chbnnbhc00',
      '00cbbbbbbc00',
      '000cbbbbc000',
      '000cb00bc000',
      '000cc00cc000',
    ],
    sad: [
      '0000g0000000',
      '000gac000000',
      '00gacbbbc0u0',
      '00cbbbbbcuu0',
      '0cbbbbbbbbc0',
      '0cbbebbbebsc',
      'pcbwebbbwecp',
      '00chbnnbhc00',
      '00cbbtbbbc00',
      '000cbbbbc000',
      '000cb00bc000',
      '000cc00cc000',
    ],
  },
};

function renderPixelPet(petId, mood) {
  const pet = PIXEL_PETS[petId];
  if (!pet) return '';
  const grid = pet[mood] || pet.normal;
  const colors = pet.colors;
  const rows = grid.length;
  const cols = grid[0].length;
  const total = Math.max(rows, cols);
  const size = Math.floor(100 / total);
  const ox = Math.floor((100 - cols * size) / 2);
  const oy = Math.floor((100 - rows * size) / 2);
  let rects = '';
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const ch = grid[y][x];
      if (ch === '0') continue;
      const color = colors[ch] || '#CCC';
      rects += `<rect x="${ox + x * size}" y="${oy + y * size}" width="${size}" height="${size}" fill="${color}" rx="1"/>`;
    }
  }
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="image-rendering:pixelated">${rects}</svg>`;
}

// ============ 云同步配置 ============
const SYNC_URL = 'https://kids-hero-sync.yiyuluzhb.workers.dev';
const SYNC_TOKEN = 'hero2026safe';

// ============ 音效引擎 ============
const SFX = {
  ctx: null,
  unlocked: false,
  init() {
    if (this.ctx) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch(e) { return; }
    // 微信浏览器必须在用户交互中播放一个静音buffer才能解锁音频
    this._unlock();
  },
  _unlock() {
    if (this.unlocked || !this.ctx) return;
    const buf = this.ctx.createBuffer(1, 1, 22050);
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.connect(this.ctx.destination);
    src.start(0);
    if (this.ctx.state === 'suspended') this.ctx.resume();
    this.unlocked = true;
  },
  play(type) {
    if (!this.ctx) this.init();
    if (!this.ctx) return;
    if (!this.unlocked) this._unlock();
    if (this.ctx.state === 'suspended') this.ctx.resume();
    switch(type) {
      case 'task': this._beep(523,0.1,'sine'); this._beep(659,0.1,'sine',0.12); this._beep(784,0.15,'sine',0.24); break;
      case 'penalty': this._beep(300,0.15,'sawtooth'); this._beep(200,0.25,'sawtooth',0.15); break;
      case 'attack': this._beep(150,0.08,'square'); this._noise(0.08); break;
      case 'bigAttack': this._sweep(200,900,0.3); this._noise(0.15); break;
      case 'victory': this._beep(523,0.12,'sine'); this._beep(659,0.12,'sine',0.15); this._beep(784,0.12,'sine',0.3); this._beep(1047,0.25,'sine',0.45); break;
      case 'buy': this._beep(880,0.06,'sine'); this._beep(1100,0.1,'sine',0.08); break;
      case 'feed': this._beep(400,0.1,'triangle'); this._beep(500,0.1,'triangle',0.12); break;
      case 'bossVictory':
        // 扫频上行 + 多重和弦 + 尾音
        this._sweep(200, 1200, 0.4);
        this._beep(523, 0.2, 'sine', 0.3);
        this._beep(659, 0.2, 'sine', 0.3);
        this._beep(784, 0.3, 'sine', 0.3);
        this._beep(1047, 0.4, 'sine', 0.6);
        break;
      // 宠物叫声
      case 'pet_dog':     this._beep(180,0.12,'square'); this._beep(120,0.15,'square',0.13); break;
      case 'pet_cat':     this._beep(700,0.08,'sine'); this._beep(900,0.15,'sine',0.09); break;
      case 'pet_rabbit':  this._beep(1200,0.05,'sine'); this._beep(1400,0.05,'sine',0.07); this._beep(1200,0.05,'sine',0.14); break;
      case 'pet_hamster': this._beep(1600,0.04,'sine'); this._beep(1800,0.04,'sine',0.05); this._beep(1600,0.04,'sine',0.1); break;
      case 'pet_bird':    this._beep(1800,0.05,'triangle'); this._beep(2100,0.05,'triangle',0.06); this._beep(1900,0.05,'triangle',0.12); break;
      case 'pet_fish':    this._noise(0.08); this._beep(300,0.06,'sine',0.1); break;
      case 'pet_panda':   this._beep(120,0.18,'sine'); this._beep(100,0.2,'sine',0.18); break;
      case 'pet_dragon':  this._sweep(400,100,0.35); this._noise(0.2); break;
      case 'pet_unicorn': this._beep(800,0.08,'sine'); this._beep(1000,0.08,'sine',0.08); this._beep(1200,0.08,'sine',0.16); this._beep(1500,0.15,'sine',0.24); break;
      case 'pet_whale':   this._beep(80,0.4,'sine'); this._beep(100,0.3,'sine',0.4); break;
      case 'pet_shark':   this._beep(90,0.15,'sawtooth'); this._beep(70,0.2,'sawtooth',0.15); break;
    }
  },
  _beep(freq, dur, type, delay) {
    delay = delay || 0;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type || 'sine';
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.15, this.ctx.currentTime + delay);
    g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + dur);
    o.connect(g); g.connect(this.ctx.destination);
    o.start(this.ctx.currentTime + delay);
    o.stop(this.ctx.currentTime + delay + dur + 0.05);
  },
  _noise(dur) {
    const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * dur, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * 0.1;
    const s = this.ctx.createBufferSource();
    const g = this.ctx.createGain();
    s.buffer = buf;
    g.gain.setValueAtTime(0.12, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
    s.connect(g); g.connect(this.ctx.destination);
    s.start(); s.stop(this.ctx.currentTime + dur);
  },
  _sweep(f1, f2, dur) {
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(f1, this.ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(f2, this.ctx.currentTime + dur);
    g.gain.setValueAtTime(0.12, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
    o.connect(g); g.connect(this.ctx.destination);
    o.start(); o.stop(this.ctx.currentTime + dur + 0.05);
  }
};

// ============ 背景音乐引擎 ============
const BGM = {
  audio: null,
  currentId: null,
  init() {
    if (this.audio) return;
    this.audio = new Audio();
    this.audio.loop = true;
    this.audio.volume = 0.35;
    this.audio.preload = 'auto';
  },
  play(trackId, file) {
    this.init();
    if (this.currentId === trackId && !this.audio.paused) return;
    this.currentId = trackId;
    this.audio.src = file;
    const p = this.audio.play();
    if (p && p.catch) p.catch(() => { /* 静默失败，等待下次用户交互 */ });
  },
  stop() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    this.currentId = null;
  },
  isPlaying(trackId) {
    return this.audio && !this.audio.paused && this.currentId === trackId;
  }
};

// ============ 应用主类 ============

const app = {
  data: null,
  currentPage: 'home',
  pinBuffer: '',
  pinCallback: null,
  pendingBuyItem: null,
  shopCategory: 'furniture',
  battleAnimating: false,
  currentNurturePetId: null,
  _syncTimer: null,

  // ---- 初始化 ----
  init() {
    // 注册 Service Worker（网络优先策略，确保 PWA 及时更新）
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').then((reg) => {
        // 检测到新版本时自动激活
        reg.addEventListener('updatefound', () => {
          const nw = reg.installing;
          if (!nw) return;
          nw.addEventListener('statechange', () => {
            if (nw.state === 'installed' && navigator.serviceWorker.controller) {
              nw.postMessage('SKIP_WAITING');
            }
          });
        });
      }).catch((e) => console.warn('[SW] 注册失败:', e));
      // 新 SW 接管后刷新页面一次，确保加载新资源
      let refreshed = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshed) return;
        refreshed = true;
        window.location.reload();
      });
    }

    const unlockAudio = () => {
      SFX.init();
      this.tryRestoreBGM();
    };
    document.addEventListener('touchstart', unlockAudio, { once: true });
    document.addEventListener('click', unlockAudio, { once: true });
    if (typeof WeixinJSBridge !== 'undefined') {
      WeixinJSBridge.invoke('getNetworkType', {}, unlockAudio);
    } else {
      document.addEventListener('WeixinJSBridgeReady', unlockAudio, { once: true });
    }
    // 关键：在 loadData() 之前从 localStorage 读取原始 _lastSync 快照
    // 因为 loadData() 内部会调用 saveData() 把时间戳改成 now
    let origLastSync = 0;
    try {
      const raw = localStorage.getItem('babyTaskGame_v3');
      if (raw) origLastSync = (JSON.parse(raw)._lastSync) || 0;
    } catch(e) {}
    this._bootSync = origLastSync;
    // 阻止 init 期间的云同步，防止把默认数据推到云端覆盖真实数据
    this._cloudLoadPending = true;
    this.loadData();
    this.renderHome();
    this.updateAllPoints();
    this.updateMuteButton();
    this._loadFromCloud();
  },

  // ---- 数据管理 ----
  getDefaultHouse() {
    return { items: [], floor: null, pets: [] };
  },

  loadData() {
    const saved = localStorage.getItem('babyTaskGame_v3');
    if (saved) {
      this.data = JSON.parse(saved);
    } else {
      // 迁移旧数据积分
      let oldPoints = 0;
      for (const key of ['babyTaskGame_v2', 'babyTaskGame']) {
        const old = localStorage.getItem(key);
        if (old) { try { oldPoints = JSON.parse(old).points || 0; } catch(e) {} break; }
      }
      this.data = {
        currentCharacter: 'leidi',
        points: oldPoints,
        houses: {
          leidi: this.getDefaultHouse(),
          diga: this.getDefaultHouse()
        },
        battle: {
          currentMonster: null,
          currentBoss: null,
          killCount: 0,
          lastFreeAttackDate: null,
          lastPetAttackDates: {},
          trophies: [],
          bossTrophies: []
        },
        music: { owned: [], current: null, enabled: true },
        taskHistory: [],
        parentPin: null
      };
      this.saveData();
    }
    this._applyDataCompat();
    this.decayAllPetStats();
    if (!this.data.battle.currentMonster) this.spawnMonster();
  },

  // ---- 宠物培养数据 ----
  initPetStatus(charId, petId) {
    if (!this.data.petStatus[charId]) this.data.petStatus[charId] = {};
    this.data.petStatus[charId][petId] = {
      meat: 80, veg: 80, rice: 80, clean: 80, happy: 80,
      lastUpdate: this.getToday(),
      todayActions: { feedMeat: 0, feedVeg: 0, feedRice: 0, bath: 0, play: 0 },
      lastActionDate: this.getToday()
    };
  },

  decayAllPetStats() {
    const today = this.getToday();
    for (const charId of Object.keys(CHARACTERS)) {
      const statuses = this.data.petStatus[charId] || {};
      for (const petId of Object.keys(statuses)) {
        const s = statuses[petId];
        // 重置每日免费次数
        if (s.lastActionDate !== today) {
          s.todayActions = { feedMeat: 0, feedVeg: 0, feedRice: 0, bath: 0, play: 0 };
          s.lastActionDate = today;
        }
        // 按天数衰减
        if (s.lastUpdate && s.lastUpdate !== today) {
          const diff = Math.floor((new Date(today) - new Date(s.lastUpdate)) / 86400000);
          if (diff > 0) {
            const decay = diff * 20;
            s.meat = Math.max(0, (s.meat || 0) - decay);
            s.veg  = Math.max(0, (s.veg  || 0) - decay);
            s.rice = Math.max(0, (s.rice || 0) - decay);
            s.clean = Math.max(0, s.clean - decay);
            s.happy = Math.max(0, s.happy - decay);
            s.lastUpdate = today;
          }
        }
      }
    }
    this.saveData();
  },

  getPetMood(charId, petId) {
    const s = this.data.petStatus[charId]?.[petId];
    if (!s) return 'normal';
    const meat = s.meat ?? s.hunger ?? 0;
    const veg  = s.veg  ?? s.hunger ?? 0;
    const rice = s.rice ?? s.hunger ?? 0;
    const min = Math.min(meat, veg, rice, s.clean, s.happy);
    if (min >= 70) return 'happy';
    if (min < 30) return 'sad';
    return 'normal';
  },

  saveData() {
    this.data._lastSync = Date.now();
    localStorage.setItem('babyTaskGame_v3', JSON.stringify(this.data));
    // init 期间阻止云同步（防止默认数据污染云端）
    if (this._cloudLoadPending) return;
    clearTimeout(this._syncTimer);
    this._syncTimer = setTimeout(() => this._syncToCloud(), 2000);
  },

  // ---- 数据兼容性修复 ----
  _applyDataCompat() {
    if (!this.data.battle) this.data.battle = { currentMonster: null, lastFreeAttackDate: null, lastPetAttackDates: {}, trophies: [] };
    if (!this.data.battle.trophies) this.data.battle.trophies = [];
    if (!this.data.battle.lastPetAttackDates) this.data.battle.lastPetAttackDates = {};
    // BOSS 系统字段兼容
    if (this.data.battle.killCount === undefined) this.data.battle.killCount = 0;
    if (!this.data.battle.bossTrophies) this.data.battle.bossTrophies = [];
    if (this.data.battle.currentBoss === undefined) this.data.battle.currentBoss = null;
    // 音乐系统字段兼容
    if (!this.data.music) this.data.music = { owned: [], current: null, enabled: true };
    if (!this.data.music.owned) this.data.music.owned = [];
    if (this.data.music.current === undefined) this.data.music.current = null;
    if (this.data.music.enabled === undefined) this.data.music.enabled = true;
    if (!this.data.houses) this.data.houses = { leidi: this.getDefaultHouse(), diga: this.getDefaultHouse() };
    for (const k of Object.keys(CHARACTERS)) {
      if (!this.data.houses[k]) this.data.houses[k] = this.getDefaultHouse();
      if (!this.data.houses[k].pets) this.data.houses[k].pets = [];
      // 地板数据迁移: string → { current, owned }
      const h = this.data.houses[k];
      if (typeof h.floor === 'string' || h.floor === null) {
        const old = h.floor;
        h.floor = { current: old, owned: old ? [old] : [] };
      }
      if (!h.floor) h.floor = { current: null, owned: [] };
      if (!h.floor.owned) h.floor.owned = [];
    }
    if (!this.data.petStatus) this.data.petStatus = {};
    for (const charId of Object.keys(CHARACTERS)) {
      if (!this.data.petStatus[charId]) this.data.petStatus[charId] = {};
      const pets = this.data.houses[charId]?.pets || [];
      for (const petId of pets) {
        if (!this.data.petStatus[charId][petId]) {
          this.initPetStatus(charId, petId);
        }
      }
      // 宠物状态 todayActions 字段迁移：feed → feedMeat/feedVeg/feedRice
      for (const petId of Object.keys(this.data.petStatus[charId])) {
        const s = this.data.petStatus[charId][petId];
        if (s.todayActions && s.todayActions.feedMeat === undefined) {
          s.todayActions = { feedMeat: 0, feedVeg: 0, feedRice: 0, bath: s.todayActions.bath || 0, play: s.todayActions.play || 0 };
        }
        // 单一 hunger → meat/veg/rice 拆分
        if (s.meat === undefined) {
          const h = s.hunger !== undefined ? s.hunger : 80;
          s.meat = h;
          s.veg = h;
          s.rice = h;
          delete s.hunger;
        }
      }
    }
    if (!this.data.taskConfig) this.data.taskConfig = { overrides: {}, custom: [] };
  },

  // ---- 任务配置 ----
  getActiveTasks() {
    const cfg = this.data.taskConfig || {};
    const overrides = cfg.overrides || {};
    const custom = cfg.custom || [];
    const builtIn = TASKS.filter(t => {
      const o = overrides[t.id];
      return !o || o.enabled !== false;
    }).map(t => {
      const o = overrides[t.id];
      return o && o.points !== undefined ? { ...t, points: o.points } : t;
    });
    return [...builtIn, ...custom.filter(t => t.enabled !== false)];
  },

  // ---- 云同步 ----
  async _syncToCloud() {
    // 硬防线 1：空数据绝对不允许推送到云端（防止污染其他客户端）
    if (this._isDataEmpty(this.data)) {
      console.warn('[Sync] 本地数据为空，拒绝推送到云端');
      this._updateSyncStatus('ok');
      return;
    }
    // 硬防线 2：会话级兜底——如果本次会话从未成功从云端拉到过真实数据，
    // 且本地启动时 localStorage 也是空的，则禁用所有云推送
    // 这防止：新设备/新 PWA 第一次打开时，因为 fetch 慢或失败，用户误操作后
    // 把 "初始空数据 + 几分新数据" 推上去覆盖云端的真实进度
    if (!this._cloudEverLoaded && (this._bootSync || 0) === 0) {
      console.warn('[Sync] 会话未成功加载过云端 + 本地启动为空，禁用推送（保护云端）');
      this._updateSyncStatus('error');
      return;
    }
    this._updateSyncStatus('syncing');
    try {
      const res = await fetch(SYNC_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Auth-Token': SYNC_TOKEN },
        body: JSON.stringify(this.data),
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      this._updateSyncStatus('ok');
    } catch (e) {
      console.warn('[Sync] 上传失败:', e);
      this._updateSyncStatus('error');
    }
  },

  // 判断一份数据是否明显是空的默认状态（没有任何有效进度）
  _isDataEmpty(d) {
    if (!d || !d.houses) return true;
    if ((d.points || 0) > 0) return false;
    for (const k of Object.keys(d.houses || {})) {
      const h = d.houses[k] || {};
      if ((h.items || []).length > 0) return false;
      if ((h.pets || []).length > 0) return false;
      if (h.floor && (h.floor.owned || []).length > 0) return false;
    }
    if (d.battle) {
      if ((d.battle.trophies || []).length > 0) return false;
      if ((d.battle.bossTrophies || []).length > 0) return false;
      if ((d.battle.killCount || 0) > 0) return false;
    }
    if (d.music && (d.music.owned || []).length > 0) return false;
    if ((d.taskHistory || []).length > 0) return false;
    return true;
  },

  async _loadFromCloud() {
    this._updateSyncStatus('syncing');
    let loadOk = false;
    let cloudAdopted = false;
    try {
      const res = await fetch(SYNC_URL, {
        headers: { 'X-Auth-Token': SYNC_TOKEN },
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const cloud = await res.json();
      loadOk = true;
      if (cloud && cloud._lastSync) {
        const bootTs = this._bootSync || 0;
        // 完整性守卫：如果云端是空的默认状态但本地有真实数据，不要盲目采用云端
        // 这样可以从"云端被意外清空"的事故中恢复 — 本地数据会被推回云端
        const cloudEmpty = this._isDataEmpty(cloud);
        const localHasData = !this._isDataEmpty(this.data);
        if (cloudEmpty && localHasData) {
          console.warn('[Sync] 云端为空但本地有数据，保留本地并推送（恢复云端）');
          // 不采用云端，走到下面的推送分支
        } else if (cloud._lastSync > bootTs) {
          this.data = cloud;
          this._applyDataCompat();
          this.decayAllPetStats();
          if (!this.data.battle.currentMonster) this.spawnMonster();
          localStorage.setItem('babyTaskGame_v3', JSON.stringify(this.data));
          this._bootSync = this.data._lastSync;
          cloudAdopted = true;
          this.renderHome();
          this.updateAllPoints();
          this.updateMuteButton();
        }
        // 无论是否采用云端，只要成功拉到了非空云端数据，本会话就标记为"已知道云端有数据"
        // 这样后续的 _syncToCloud 才能放行
        if (!this._isDataEmpty(cloud)) {
          this._cloudEverLoaded = true;
        }
      }
      this._updateSyncStatus('ok');
    } catch (e) {
      console.warn('[Sync] 加载失败:', e);
      this._updateSyncStatus('error');
    }
    // 初始加载完成 — 解除云同步阻塞
    this._cloudLoadPending = false;
    // 只有本地确实有数据（_bootSync > 0 说明 localStorage 之前有内容）且没有采用云端数据时才推送
    // 这避免了"首次安装 + 云端为空"的场景下把空默认数据污染到云端
    if (loadOk && !cloudAdopted && this._bootSync > 0) {
      this._syncToCloud();
    }
  },

  _updateSyncStatus(status) {
    const el = document.getElementById('sync-indicator');
    if (!el) return;
    el.className = 'sync-indicator ' + status;
    if (status === 'syncing') { el.textContent = '☁️'; }
    else if (status === 'ok') { el.textContent = '☁️'; }
    else if (status === 'error') { el.textContent = '⚠️'; }
  },

  // ---- 页面导航 ----
  goToPage(page) {
    if (page === 'task') {
      this.requirePin(() => { this.showPage('task'); this.renderTasks(); });
      return;
    }
    this.showPage(page);
    if (page === 'home') this.renderHome();
    if (page === 'house') this.renderHouse();
    if (page === 'shop') this.renderShop();
    if (page === 'battle') this.renderBattle();
    if (page === 'pet') this.renderPetNurture(this.currentNurturePetId);
  },

  showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    this.currentPage = page;
    this.updateAllPoints();
    // 离开小屋页停止漫游
    if (page !== 'house' && this.petRoamTimer) { clearInterval(this.petRoamTimer); this.petRoamTimer = null; }
  },

  // ---- 积分 ----
  updateAllPoints() {
    const pts = this.data.points;
    document.querySelectorAll('.pts-val').forEach(el => { el.textContent = pts; });
  },

  animatePoints(amount, x, y, negative) {
    const el = document.createElement('div');
    el.className = 'float-points';
    el.textContent = (negative ? '' : '+') + amount;
    if (negative) el.style.color = '#FF6B6B';
    el.style.left = (x || window.innerWidth / 2 - 30) + 'px';
    el.style.top = (y || window.innerHeight / 2) + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
    document.querySelectorAll('.points-display').forEach(pd => {
      pd.classList.remove('bounce'); void pd.offsetWidth; pd.classList.add('bounce');
    });
  },

  // ---- 角色 ----
  switchCharacter() {
    const chars = Object.keys(CHARACTERS);
    const idx = chars.indexOf(this.data.currentCharacter);
    this.data.currentCharacter = chars[(idx + 1) % chars.length];
    this.saveData();
    this.renderHome();
  },

  renderHome() {
    const char = CHARACTERS[this.data.currentCharacter];
    document.getElementById('home-character-stage').innerHTML =
      `<div class="character"><img class="char-img" src="${char.img}" alt="${char.name}"></div>`;
    document.getElementById('home-character-name').textContent = char.name + ' · ' + char.desc;
  },

  // ---- 密码 ----
  requirePin(callback) {
    if (!this.data.parentPin) {
      document.getElementById('pin-title').textContent = '请设置家长密码（4位数字）';
      this.pinCallback = (pin) => { this.data.parentPin = pin; this.saveData(); callback(); };
    } else {
      document.getElementById('pin-title').textContent = '请输入家长密码';
      this.pinCallback = (pin) => {
        if (pin === this.data.parentPin) { callback(); }
        else {
          const d = document.getElementById('pin-display');
          d.classList.add('pin-error');
          setTimeout(() => { d.classList.remove('pin-error'); this.pinBuffer = ''; this.updatePinDots(); }, 400);
          return false;
        }
      };
    }
    this.pinBuffer = '';
    this.updatePinDots();
    document.getElementById('pin-modal').classList.add('show');
  },
  pinInput(n) {
    if (this.pinBuffer.length >= 4) return;
    this.pinBuffer += n;
    this.updatePinDots();
    if (this.pinBuffer.length === 4) {
      setTimeout(() => { if (this.pinCallback(this.pinBuffer) !== false) this.closePin(); }, 200);
    }
  },
  pinDelete() { this.pinBuffer = this.pinBuffer.slice(0, -1); this.updatePinDots(); },
  updatePinDots() {
    document.querySelectorAll('#pin-display .pin-dot').forEach((d, i) => {
      d.classList.toggle('filled', i < this.pinBuffer.length);
    });
  },
  closePin() { document.getElementById('pin-modal').classList.remove('show'); this.pinBuffer = ''; this.pinCallback = null; },

  // ---- 任务 ----
  renderTasks() {
    const today = new Date().toISOString().slice(0, 10);
    const todayDone = this.data.taskHistory.filter(t => t.date === today);
    document.getElementById('task-list').innerHTML = this.getActiveTasks().map(task => {
      const isPenalty = task.points < 0;
      return `<div class="task-item ${isPenalty ? 'task-penalty' : ''}">
        <div class="task-icon">${task.icon}</div>
        <div class="task-info"><div class="task-name">${task.name}</div><div class="task-reward ${isPenalty ? 'penalty' : ''}">${isPenalty ? '' : '&#9733; +'}${task.points} 积分</div></div>
        <button class="task-done-btn ${isPenalty ? 'task-penalty-btn' : ''}" onclick="app.completeTask('${task.id}',event)">${isPenalty ? '&#10007;' : '&#10003;'}</button>
      </div>`;
    }).join('');
    const tl = document.getElementById('today-list');
    tl.innerHTML = todayDone.length === 0 ? '<div class="today-empty">今天还没有完成任务哦~</div>'
      : todayDone.map(t => `<div class="today-item"><span class="check">&#10003;</span><span>${t.task}</span><span style="margin-left:auto;color:#B8860B">+${t.points}</span></div>`).join('');
  },
  completeTask(id, e) {
    const task = this.getActiveTasks().find(t => t.id === id);
    if (!task) return;
    if (task.points < 0) {
      // 扣分：不低于0
      if (this.data.points <= 0) { this.showToast('积分已经是0了'); return; }
      const actual = Math.max(task.points, -this.data.points);
      this.data.points += actual;
      this.data.taskHistory.push({ task: task.name, points: actual, date: new Date().toISOString().slice(0, 10) });
      this.saveData(); this.updateAllPoints();
      this.animatePoints(actual, e.target.getBoundingClientRect().left, e.target.getBoundingClientRect().top, true);
      SFX.play('penalty'); this.renderTasks();
    } else {
      this.data.points += task.points;
      this.data.taskHistory.push({ task: task.name, points: task.points, date: new Date().toISOString().slice(0, 10) });
      this.saveData(); this.updateAllPoints();
      this.animatePoints(task.points, e.target.getBoundingClientRect().left, e.target.getBoundingClientRect().top);
      SFX.play('task'); this.celebrate(); this.renderTasks();
    }
  },

  // ---- 任务管理 ----
  manageTasksPin() {
    this.requirePin(() => this.showTaskManager());
  },

  showTaskManager() {
    const cfg = this.data.taskConfig || { overrides: {}, custom: [] };
    const overrides = cfg.overrides || {};
    const custom = cfg.custom || [];
    const emojis = ['💧','🎵','🎨','🏊','🧮','✏️','🍎','🚿','💊','🙏','🧹','🎯','🌳','📝','🎶','🤝','🧘','🍳','👟','🎮'];

    let html = '<div class="task-mgr-section"><h4>内置任务</h4>';
    html += TASKS.map(t => {
      const o = overrides[t.id] || {};
      const enabled = o.enabled !== false;
      const pts = o.points !== undefined ? o.points : t.points;
      return `<div class="task-mgr-row">
        <span class="task-mgr-icon">${t.icon}</span>
        <span class="task-mgr-name">${t.name}</span>
        <input type="number" class="task-mgr-pts" value="${pts}" onchange="app.updateTaskPoints('${t.id}',this.value)">
        <button class="task-mgr-toggle ${enabled ? 'on' : 'off'}" onclick="app.toggleTask('${t.id}')">${enabled ? '开' : '关'}</button>
      </div>`;
    }).join('');
    html += '</div>';

    if (custom.length > 0) {
      html += '<div class="task-mgr-section"><h4>自定义任务</h4>';
      html += custom.map(t => {
        return `<div class="task-mgr-row">
          <span class="task-mgr-icon">${t.icon}</span>
          <span class="task-mgr-name">${t.name}</span>
          <input type="number" class="task-mgr-pts" value="${t.points}" onchange="app.updateCustomTaskPoints('${t.id}',this.value)">
          <button class="task-mgr-del" onclick="app.removeCustomTask('${t.id}')">✕</button>
        </div>`;
      }).join('');
      html += '</div>';
    }

    html += '<div class="task-mgr-section"><h4>添加新任务</h4>';
    html += `<div class="task-mgr-add">
      <div class="task-mgr-emoji-pick" id="task-emoji-pick">
        ${emojis.map(e => `<span class="emoji-opt" onclick="app.pickTaskEmoji('${e}')">${e}</span>`).join('')}
      </div>
      <div class="task-mgr-add-row">
        <span class="task-mgr-icon" id="new-task-emoji">❓</span>
        <input type="text" id="new-task-name" class="task-mgr-input" placeholder="任务名称" maxlength="10">
        <input type="number" id="new-task-pts" class="task-mgr-pts" value="5" min="-20" max="50">
        <button class="task-mgr-add-btn" onclick="app.addCustomTask()">+</button>
      </div>
    </div>`;

    document.getElementById('task-mgr-content').innerHTML = html;
    document.getElementById('task-mgr-modal').classList.add('show');
  },

  pickTaskEmoji(emoji) {
    document.getElementById('new-task-emoji').textContent = emoji;
  },

  toggleTask(id) {
    const cfg = this.data.taskConfig;
    if (!cfg.overrides[id]) cfg.overrides[id] = {};
    cfg.overrides[id].enabled = cfg.overrides[id].enabled === false ? true : false;
    this.saveData();
    this.showTaskManager();
  },

  updateTaskPoints(id, val) {
    const pts = parseInt(val);
    if (isNaN(pts)) return;
    const cfg = this.data.taskConfig;
    if (!cfg.overrides[id]) cfg.overrides[id] = {};
    cfg.overrides[id].points = pts;
    this.saveData();
  },

  updateCustomTaskPoints(id, val) {
    const pts = parseInt(val);
    if (isNaN(pts)) return;
    const t = this.data.taskConfig.custom.find(c => c.id === id);
    if (t) { t.points = pts; this.saveData(); }
  },

  addCustomTask() {
    const name = document.getElementById('new-task-name').value.trim();
    const icon = document.getElementById('new-task-emoji').textContent;
    const pts = parseInt(document.getElementById('new-task-pts').value) || 5;
    if (!name) { this.showToast('请输入任务名称'); return; }
    if (icon === '❓') { this.showToast('请选择一个图标'); return; }
    const id = 'custom_' + Date.now();
    this.data.taskConfig.custom.push({ id, name, icon, points: pts });
    this.saveData();
    this.showTaskManager();
  },

  removeCustomTask(id) {
    this.data.taskConfig.custom = this.data.taskConfig.custom.filter(t => t.id !== id);
    this.saveData();
    this.showTaskManager();
  },

  closeTaskManager() {
    document.getElementById('task-mgr-modal').classList.remove('show');
    this.renderTasks();
  },

  // ---- 小屋 ----
  switchHouseCharacter() {
    const chars = Object.keys(CHARACTERS);
    const idx = chars.indexOf(this.data.currentCharacter);
    this.data.currentCharacter = chars[(idx + 1) % chars.length];
    this.saveData();
    this.renderHouse();
  },

  renderHouse() {
    const charId = this.data.currentCharacter;
    const char = CHARACTERS[charId];
    const house = this.data.houses[charId];
    const trophies = this.data.battle.trophies;
    const bossTrophies = this.data.battle.bossTrophies || [];

    document.getElementById('house-title').textContent = char.name + '的小屋';

    // 地板墙纸
    const floorId = house.floor && house.floor.current ? house.floor.current : null;
    const floorItem = floorId ? this.findItem(floorId) : null;
    const wallEl = document.getElementById('room-wall');
    const floorEl = document.getElementById('room-floor');
    wallEl.style.background = floorItem ? floorItem.wallBg : '';
    floorEl.style.background = floorItem ? floorItem.floorBg : '';

    // 墙上装饰 — 绝对定位
    const wallItems = house.items.filter(id => this.findItemCategory(id) === 'wallDecor')
      .map(id => this.findItem(id)).filter(Boolean);
    document.getElementById('room-wall-decor').innerHTML = wallItems.map(i => {
      const p = i.pos || {};
      return `<span class="room-item-placed" style="${p.left?'left:'+p.left+';':''}${p.right?'right:'+p.right+';':''}${p.top?'top:'+p.top+';':''}${p.bottom?'bottom:'+p.bottom+';':''}font-size:${p.size||'26px'}">${i.icon}</span>`;
    }).join('');

    // 战利品墙（右侧）- 按钮入口
    let trophyHtml = '';
    if (trophies.length > 0) {
      trophyHtml += `<button class="trophy-wall-btn" onclick="app.showTrophyWall()">
        <span class="trophy-wall-icon">🏆</span>
        <span class="trophy-wall-label">怪兽墙</span>
        <span class="trophy-wall-count">${trophies.length}</span>
      </button>`;
    }
    if (bossTrophies.length > 0) {
      trophyHtml += `<button class="trophy-wall-btn boss-trophy-btn" onclick="app.showBossTrophyWall()">
        <span class="trophy-wall-icon">👑</span>
        <span class="trophy-wall-label">BOSS墙</span>
        <span class="trophy-wall-count">${bossTrophies.length}</span>
      </button>`;
    }
    document.getElementById('room-trophies').innerHTML = trophyHtml;

    // 角色（中间）
    document.getElementById('room-character').innerHTML =
      `<img src="${char.img}" alt="${char.name}" style="width:90px;height:110px;object-fit:contain;filter:drop-shadow(0 3px 6px rgba(0,0,0,0.2))">`;

    // 所有宠物统一漫游（不再区分水生/陆地）
    const pets = (house.pets || []).map(id => this.findItem(id)).filter(Boolean);
    const petsRow = document.getElementById('room-pets-row');
    petsRow.innerHTML = pets.map((pet, i) => {
      const mood = this.getPetMood(charId, pet.id);
      const startX = 10 + (i * 25) % 75;
      const startY = 10 + ((i * 37) % 60);
      return `<div class="room-pet-roam ${pet.aquatic ? 'aquatic' : ''}" data-pet-id="${pet.id}"
        style="left:${startX}%;top:${startY}%"
        onclick="app.openPetNurture('${pet.id}')">
        <span class="room-pet clickable">${pet.icon}</span>
        <span class="pet-mood-dot ${mood}"></span>
      </div>`;
    }).join('');
    this.startPetRoaming();

    // 家具 — 绝对定位到地板
    const furnitureItems = house.items.filter(id => this.findItemCategory(id) === 'furniture')
      .map(id => this.findItem(id)).filter(Boolean);
    document.getElementById('room-furniture').innerHTML = furnitureItems.map(i => {
      const p = i.pos || {};
      return `<span class="room-item-placed" style="${p.left?'left:'+p.left+';':''}${p.right?'right:'+p.right+';':''}${p.top?'top:'+p.top+';':''}${p.bottom?'bottom:'+p.bottom+';':''}font-size:${p.size||'28px'}">${i.icon}</span>`;
    }).join('');

    // 特殊装饰 — 绝对定位到地板
    const specialItems = house.items.filter(id => this.findItemCategory(id) === 'special')
      .map(id => this.findItem(id)).filter(Boolean);
    document.getElementById('room-special').innerHTML = specialItems.map(i => {
      const p = i.pos || {};
      return `<span class="room-item-placed" style="${p.left?'left:'+p.left+';':''}${p.right?'right:'+p.right+';':''}${p.top?'top:'+p.top+';':''}${p.bottom?'bottom:'+p.bottom+';':''}font-size:${p.size||'26px'}">${i.icon}</span>`;
    }).join('');
  },

  // 宠物漫游动画
  petRoamTimer: null,

  startPetRoaming() {
    if (this.petRoamTimer) clearInterval(this.petRoamTimer);
    this.petRoamTimer = setInterval(() => {
      if (this.currentPage !== 'house') { clearInterval(this.petRoamTimer); this.petRoamTimer = null; return; }
      document.querySelectorAll('.room-pet-roam').forEach(el => {
        if (Math.random() < 0.3) return;
        const curLeft = parseFloat(el.style.left) || 30;
        const curTop = parseFloat(el.style.top) || 30;
        let newLeft = curLeft + (Math.random() - 0.5) * 20;
        let newTop = curTop + (Math.random() - 0.5) * 15;
        newLeft = Math.max(5, Math.min(85, newLeft));
        newTop = Math.max(5, Math.min(75, newTop));
        const dir = newLeft > curLeft ? 1 : -1;
        el.querySelector('.room-pet').style.transform = `scaleX(${dir})`;
        el.style.left = newLeft + '%';
        el.style.top = newTop + '%';
      });
    }, 2000);
  },

  // ---- 商店 ----
  renderShop() {
    const tabs = document.getElementById('shop-tabs');
    tabs.innerHTML = Object.entries(SHOP_ITEMS).map(([key, cat]) => `
      <button class="shop-tab ${key === this.shopCategory ? 'active' : ''}"
              onclick="app.switchShopTab('${key}')">${cat.icon} ${cat.label}</button>
    `).join('');

    const grid = document.getElementById('shop-grid');
    const items = SHOP_ITEMS[this.shopCategory].items;
    const charId = this.data.currentCharacter;
    const house = this.data.houses[charId];
    const floorOwned = house.floor && house.floor.owned ? house.floor.owned : [];
    const musicOwned = (this.data.music && this.data.music.owned) || [];
    const ownedIds = [...house.items, ...floorOwned, ...(house.pets || []), ...musicOwned].filter(Boolean);
    const char = CHARACTERS[charId];

    // 商店提示
    let notice = '';
    if (this.shopCategory === 'pet') {
      const petCount = (house.pets || []).length;
      notice = `<div class="shop-notice">${char.name}已有 ${petCount} 只宠物</div>`;
    }
    if (this.shopCategory === 'floor') {
      notice = `<div class="shop-notice">购买后立即应用到${char.name}的小屋</div>`;
    }
    if (this.shopCategory === 'music') {
      notice = `<div class="shop-notice">购买后点击"播放"即可聆听 🎵</div>`;
    }

    grid.innerHTML = notice + items.map(item => {
      const owned = ownedIds.includes(item.id);
      if (this.shopCategory === 'music' && owned) {
        // 已购买的音乐显示播放/停止按钮
        const isPlaying = this.data.music.current === item.id && this.data.music.enabled;
        return `<div class="shop-item owned music-item" onclick="app.toggleMusic('${item.id}')">
          <div class="shop-item-icon">${item.icon}</div>
          <div class="shop-item-name">${item.name}</div>
          <div class="shop-item-price">${isPlaying ? '⏸ 停止' : '▶️ 播放'}</div>
        </div>`;
      }
      return `<div class="shop-item ${owned ? 'owned' : ''}" onclick="app.tryBuy('${item.id}')">
        <div class="shop-item-icon">${item.icon}</div>
        <div class="shop-item-name">${item.name}</div>
        <div class="shop-item-price">${owned ? '已拥有' : '&#9733; ' + item.price}</div>
      </div>`;
    }).join('');
  },

  switchShopTab(cat) { this.shopCategory = cat; this.renderShop(); },

  findItem(id) {
    for (const cat of Object.values(SHOP_ITEMS)) {
      const f = cat.items.find(i => i.id === id);
      if (f) return f;
    }
    return null;
  },

  findItemCategory(id) {
    for (const [key, cat] of Object.entries(SHOP_ITEMS)) {
      if (cat.items.find(i => i.id === id)) return key;
    }
    return null;
  },

  tryBuy(itemId) {
    const charId = this.data.currentCharacter;
    const house = this.data.houses[charId];
    const floorOwned = house.floor && house.floor.owned ? house.floor.owned : [];
    const musicOwned = (this.data.music && this.data.music.owned) || [];
    const allOwned = [...house.items, ...floorOwned, ...(house.pets || []), ...musicOwned].filter(Boolean);
    if (allOwned.includes(itemId)) return;

    const item = this.findItem(itemId);
    if (!item) return;

    const cat = this.findItemCategory(itemId);

    this.pendingBuyItem = item;
    document.getElementById('buy-preview').textContent = item.icon;
    document.getElementById('buy-name').textContent = item.name;
    document.getElementById('buy-price-num').textContent = item.price;
    document.getElementById('buy-modal').classList.add('show');
  },

  closeBuy() { document.getElementById('buy-modal').classList.remove('show'); this.pendingBuyItem = null; },

  // ---- 背景音乐控制 ----
  toggleMusic(itemId) {
    if (!this.data.music) this.data.music = { owned: [], current: null, enabled: true };
    const item = this.findItem(itemId);
    if (!item || !item.file) return;
    // 如果当前这首正在播，则停止
    if (this.data.music.current === itemId && this.data.music.enabled) {
      BGM.stop();
      this.data.music.current = null;
    } else {
      // 切换到新的曲目（即使静音状态，也更新选中项，但启用时才播放）
      this.data.music.current = itemId;
      this.data.music.enabled = true;
      BGM.play(itemId, item.file);
    }
    this.saveData();
    this.updateMuteButton();
    if (this.currentPage === 'shop') this.renderShop();
  },

  toggleMute() {
    if (!this.data.music) this.data.music = { owned: [], current: null, enabled: true };
    this.data.music.enabled = !this.data.music.enabled;
    if (!this.data.music.enabled) {
      BGM.stop();
    } else if (this.data.music.current) {
      const item = this.findItem(this.data.music.current);
      if (item && item.file) BGM.play(this.data.music.current, item.file);
    }
    this.saveData();
    this.updateMuteButton();
    if (this.currentPage === 'shop') this.renderShop();
  },

  updateMuteButton() {
    const btn = document.getElementById('mute-btn');
    if (!btn) return;
    const enabled = this.data && this.data.music && this.data.music.enabled;
    btn.textContent = enabled ? '🔊' : '🔇';
  },

  tryRestoreBGM() {
    if (!this.data || !this.data.music) return;
    if (!this.data.music.enabled) return;
    if (!this.data.music.current) return;
    const item = this.findItem(this.data.music.current);
    if (item && item.file) BGM.play(this.data.music.current, item.file);
  },

  confirmBuy() {
    const item = this.pendingBuyItem;
    if (!item) return;
    if (this.data.points < item.price) {
      document.getElementById('buy-name').textContent = '积分不够哦~';
      document.getElementById('buy-name').style.color = '#FF6B6B';
      setTimeout(() => { document.getElementById('buy-name').style.color = ''; this.closeBuy(); }, 1000);
      return;
    }
    this.data.points -= item.price;
    const charId = this.data.currentCharacter;
    const house = this.data.houses[charId];
    const cat = this.findItemCategory(item.id);

    if (cat === 'floor') {
      if (!house.floor || !house.floor.owned) house.floor = { current: null, owned: [] };
      house.floor.owned.push(item.id);
      house.floor.current = item.id;
    } else if (cat === 'pet') {
      house.pets.push(item.id);
      this.initPetStatus(charId, item.id);
    } else if (cat === 'music') {
      if (!this.data.music) this.data.music = { owned: [], current: null, enabled: true };
      this.data.music.owned.push(item.id);
    } else {
      house.items.push(item.id);
    }

    this.saveData(); this.updateAllPoints(); this.closeBuy(); SFX.play('buy'); this.celebrate(); this.renderShop();

    // 如果购买的是有GIF的宠物，播放GIF动画
    if (cat === 'pet' && item.gif) {
      this.showGif(item.gif, `🎉 ${item.name}来啦！`, 3000);
    }
  },

  showToast(msg) {
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2000);
  },

  // ---- 宠物培养 ----
  openPetNurture(petId) {
    this.currentNurturePetId = petId;
    // 进入宠物页时播放一声叫声
    const pet = this.findItem(petId);
    if (pet && pet.voice) SFX.play('pet_' + pet.voice);
    this.closePetList();
    this.goToPage('pet');
  },

  petEmojiClick(petId) {
    const pet = this.findItem(petId);
    if (!pet) return;
    if (pet.voice) SFX.play('pet_' + pet.voice);
    if (pet.gif) this.showGif(pet.gif, pet.name, 3000);
  },

  renderPetNurture(petId) {
    const charId = this.data.currentCharacter;
    const pet = this.findItem(petId);
    if (!pet) return;
    const status = this.data.petStatus[charId]?.[petId];
    if (!status) return;
    const mood = this.getPetMood(charId, petId);

    // 标题
    document.getElementById('pet-nurture-title').textContent = pet.name;

    // 大号 emoji 宠物 + 心情特效
    const moodClass = { happy: 'mood-happy', normal: 'mood-normal', sad: 'mood-sad' };
    const moodEffects = { happy: '✨', normal: '', sad: '💧' };
    document.getElementById('pet-emoji-display').innerHTML =
      `<span class="pet-big-emoji ${moodClass[mood]}" style="cursor:pointer" onclick="app.petEmojiClick('${petId}')">${pet.icon}</span>` +
      (moodEffects[mood] ? `<span class="pet-mood-effect">${moodEffects[mood]}</span>` : '');
    document.getElementById('pet-anim-layer').innerHTML = '';

    // 心情文字
    const moodTexts = { happy: '很开心！ 😊', normal: '还不错~ 😐', sad: '不太开心... 😢' };
    document.getElementById('pet-mood-text').textContent = pet.name + moodTexts[mood];

    // 状态条
    document.getElementById('pet-stats').innerHTML = [
      { icon: '🍖', key: 'meat',  label: '肉',   cls: 'meat' },
      { icon: '🥬', key: 'veg',   label: '菜',   cls: 'veg' },
      { icon: '🍚', key: 'rice',  label: '饭',   cls: 'rice' },
      { icon: '🛁', key: 'clean', label: '清洁', cls: 'clean' },
      { icon: '🎾', key: 'happy', label: '快乐', cls: 'happy' }
    ].map(s => `
      <div class="pet-stat-row">
        <span class="pet-stat-icon">${s.icon}</span>
        <div class="pet-stat-bar-wrap">
          <div class="pet-stat-bar ${s.cls}" style="width:${status[s.key] || 0}%"></div>
        </div>
        <span class="pet-stat-val">${status[s.key] || 0}</span>
      </div>
    `).join('');

    // 操作按钮
    const today = this.getToday();
    if (status.lastActionDate !== today) {
      status.todayActions = { feedMeat: 0, feedVeg: 0, feedRice: 0, bath: 0, play: 0 };
      status.lastActionDate = today;
      this.saveData();
    }
    const actions = [
      { key: 'feedMeat', icon: '🍖', label: '喂肉', cls: 'pet-action-feed-meat', stat: 'meat' },
      { key: 'feedVeg',  icon: '🥬', label: '喂菜', cls: 'pet-action-feed-veg',  stat: 'veg' },
      { key: 'feedRice', icon: '🍚', label: '喂饭', cls: 'pet-action-feed-rice', stat: 'rice' },
      { key: 'bath',     icon: '🛁', label: '洗澡', cls: 'pet-action-bath',      stat: 'clean' },
      { key: 'play',     icon: '🎾', label: '玩耍', cls: 'pet-action-play',      stat: 'happy' }
    ];
    document.getElementById('pet-nurture-actions').innerHTML = actions.map(a => {
      const isFree = (status.todayActions[a.key] || 0) < 1;
      const costText = isFree ? '免费' : '⭐ 5';
      const isMax = (status[a.stat] || 0) >= 100;
      return `<button class="pet-action-btn ${a.cls} ${isMax ? 'disabled' : ''}"
        onclick="app.doPetAction('${petId}', '${a.key}')"
        ${isMax ? 'disabled' : ''}>
        <span class="action-icon">${a.icon}</span>
        <span>${a.label}</span>
        <span class="action-cost">${isMax ? '已满' : costText}</span>
      </button>`;
    }).join('');
  },

  doPetAction(petId, action) {
    const charId = this.data.currentCharacter;
    const status = this.data.petStatus[charId]?.[petId];
    if (!status) return;

    // 每种动作对应独立的属性条
    const statMap = { feedMeat: 'meat', feedVeg: 'veg', feedRice: 'rice', bath: 'clean', play: 'happy' };
    const stat = statMap[action];
    if (!stat) return;
    if ((status[stat] || 0) >= 100) { this.showToast('已经满了哦~'); return; }

    const isFree = (status.todayActions[action] || 0) < 1;
    if (!isFree && this.data.points < 5) { this.showToast('积分不够哦~'); return; }

    if (!isFree) {
      this.data.points -= 5;
    }
    status.todayActions[action] = (status.todayActions[action] || 0) + 1;
    // 每次操作 +30
    status[stat] = Math.min(100, (status[stat] || 0) + 30);

    this.saveData();
    this.updateAllPoints();

    // 音效 + 丰富的反馈动画
    SFX.play('feed');
    this.playNurtureAnim(action, petId);
  },

  playNurtureAnim(action, petId) {
    const layer = document.getElementById('pet-anim-layer');
    const petEl = document.getElementById('pet-emoji-display');
    layer.innerHTML = '';

    const foodMap = {
      feedMeat: ['🍖','🍗','🥩','🍖','🍗'],
      feedVeg:  ['🥬','🥕','🥦','🌽','🥬'],
      feedRice: ['🍚','🍙','🍱','🍚','🍙']
    };
    if (foodMap[action]) {
      // 食物从上方掉落，宠物吃东西弹跳
      const foods = foodMap[action];
      for (let i = 0; i < 5; i++) {
        const f = document.createElement('span');
        f.className = 'anim-food-drop';
        f.textContent = foods[i % foods.length];
        f.style.left = (20 + Math.random() * 60) + '%';
        f.style.animationDelay = (i * 0.15) + 's';
        layer.appendChild(f);
      }
      petEl.classList.add('anim-eat');
      setTimeout(() => {
        petEl.classList.remove('anim-eat');
        layer.innerHTML = '';
        // 满足后冒星星
        for (let i = 0; i < 4; i++) {
          const s = document.createElement('span');
          s.className = 'anim-star-pop';
          s.textContent = '⭐';
          s.style.left = (25 + Math.random() * 50) + '%';
          s.style.top = (20 + Math.random() * 30) + '%';
          s.style.animationDelay = (i * 0.1) + 's';
          layer.appendChild(s);
        }
        setTimeout(() => { layer.innerHTML = ''; this.renderPetNurture(petId); }, 600);
      }, 900);
    } else if (action === 'bath') {
      // 气泡从四周冒出，宠物摇晃
      const bubbles = ['🫧','💧','🫧','💧','✨','🫧','💧','🫧'];
      for (let i = 0; i < 8; i++) {
        const b = document.createElement('span');
        b.className = 'anim-bubble';
        b.textContent = bubbles[i];
        b.style.left = (10 + Math.random() * 80) + '%';
        b.style.bottom = '0';
        b.style.animationDelay = (i * 0.12) + 's';
        layer.appendChild(b);
      }
      petEl.classList.add('anim-shake');
      setTimeout(() => {
        petEl.classList.remove('anim-shake');
        layer.innerHTML = '';
        // 干净闪光
        for (let i = 0; i < 5; i++) {
          const s = document.createElement('span');
          s.className = 'anim-sparkle';
          s.textContent = '✨';
          s.style.left = (15 + Math.random() * 70) + '%';
          s.style.top = (10 + Math.random() * 60) + '%';
          s.style.animationDelay = (i * 0.08) + 's';
          layer.appendChild(s);
        }
        setTimeout(() => { layer.innerHTML = ''; this.renderPetNurture(petId); }, 600);
      }, 1000);
    } else if (action === 'play') {
      // 球弹跳，宠物跳跃，冒爱心
      const ball = document.createElement('span');
      ball.className = 'anim-ball-bounce';
      ball.textContent = '🎾';
      layer.appendChild(ball);
      petEl.classList.add('anim-jump');
      setTimeout(() => {
        petEl.classList.remove('anim-jump');
        layer.innerHTML = '';
        const hearts = ['💕','💖','💗','🌟','💕'];
        for (let i = 0; i < 5; i++) {
          const h = document.createElement('span');
          h.className = 'anim-heart-float';
          h.textContent = hearts[i];
          h.style.left = (20 + Math.random() * 60) + '%';
          h.style.animationDelay = (i * 0.12) + 's';
          layer.appendChild(h);
        }
        setTimeout(() => { layer.innerHTML = ''; this.renderPetNurture(petId); }, 700);
      }, 900);
    } else {
      this.renderPetNurture(petId);
    }
  },

  showPetList() {
    const charId = this.data.currentCharacter;
    const house = this.data.houses[charId];
    const pets = (house.pets || []).map(id => this.findItem(id)).filter(Boolean);
    const grid = document.getElementById('pet-list-grid');

    if (pets.length === 0) {
      grid.innerHTML = '<div class="pet-empty">还没有宠物哦~<br>去商店买一只吧！</div>';
    } else {
      grid.innerHTML = pets.map(pet => {
        const status = this.data.petStatus[charId]?.[pet.id];
        const mood = this.getPetMood(charId, pet.id);
        const m = status?.meat || 0;
        const v = status?.veg || 0;
        const r = status?.rice || 0;
        const c = status?.clean || 0;
        const hp = status?.happy || 0;
        return `<div class="pet-list-card" onclick="app.openPetNurture('${pet.id}')">
          <div class="pet-list-icon">${pet.icon}</div>
          <div class="pet-list-info">
            <div class="pet-list-name">${pet.name}</div>
            <div class="pet-list-bars">
              <div class="pet-mini-bar"><div class="pet-mini-bar-fill meat" style="width:${m}%"></div></div>
              <div class="pet-mini-bar"><div class="pet-mini-bar-fill veg" style="width:${v}%"></div></div>
              <div class="pet-mini-bar"><div class="pet-mini-bar-fill rice" style="width:${r}%"></div></div>
              <div class="pet-mini-bar"><div class="pet-mini-bar-fill clean" style="width:${c}%"></div></div>
              <div class="pet-mini-bar"><div class="pet-mini-bar-fill happy" style="width:${hp}%"></div></div>
            </div>
          </div>
          <div class="pet-list-mood ${mood}"></div>
        </div>`;
      }).join('');
    }
    document.getElementById('pet-list-modal').classList.add('show');
  },

  closePetList() {
    document.getElementById('pet-list-modal').classList.remove('show');
  },

  showTrophyWall() {
    const trophies = this.data.battle.trophies;
    const modal = document.getElementById('trophy-wall-modal');
    const titleEl = modal.querySelector('h3');
    if (titleEl) titleEl.textContent = '🏆 怪兽墙';
    document.getElementById('trophy-wall-subtitle').textContent =
      `已打败 ${trophies.length} 只怪兽！`;
    const grouped = {};
    trophies.forEach(t => {
      if (!grouped[t.id]) grouped[t.id] = { ...t, count: 0, dates: [] };
      grouped[t.id].count++;
      grouped[t.id].dates.push(t.defeatedDate);
    });
    document.getElementById('trophy-wall-grid').innerHTML =
      Object.values(grouped).map(t => `
        <div class="trophy-wall-card">
          <div class="trophy-card-icon">${t.icon}</div>
          <div class="trophy-card-name">${t.name}</div>
          <div class="trophy-card-count">x${t.count}</div>
          <div class="trophy-card-date">${t.dates[t.dates.length - 1]}</div>
        </div>
      `).join('');
    modal.classList.add('show');
  },

  closeTrophyWall() {
    document.getElementById('trophy-wall-modal').classList.remove('show');
  },

  showBossTrophyWall() {
    const trophies = this.data.battle.bossTrophies || [];
    document.getElementById('trophy-wall-subtitle').textContent =
      `已击败 ${trophies.length} 只 BOSS！`;
    // 标题改为 BOSS 墙
    const modal = document.getElementById('trophy-wall-modal');
    const titleEl = modal.querySelector('h3');
    if (titleEl) titleEl.textContent = '👑 BOSS 战利品墙';
    const grouped = {};
    trophies.forEach(t => {
      if (!grouped[t.id]) grouped[t.id] = { ...t, count: 0, dates: [] };
      grouped[t.id].count++;
      grouped[t.id].dates.push(t.defeatedDate);
    });
    document.getElementById('trophy-wall-grid').innerHTML =
      Object.values(grouped).map(t => `
        <div class="trophy-wall-card boss-trophy-card">
          <div class="trophy-card-icon" style="font-size:48px">${t.icon}</div>
          <div class="trophy-card-name">${t.name}</div>
          <div class="trophy-card-count">x${t.count}</div>
          <div class="trophy-card-date">${t.dates[t.dates.length - 1]}</div>
        </div>
      `).join('');
    modal.classList.add('show');
  },

  // ---- 换装系统 ----
  showFloorPicker() {
    const house = this.data.houses[this.data.currentCharacter];
    const owned = house.floor && house.floor.owned ? house.floor.owned : [];
    if (owned.length === 0) {
      this.showToast('还没有地板哦，去商店逛逛吧！');
      return;
    }
    const current = house.floor.current;
    const grid = document.getElementById('floor-picker-grid');
    grid.innerHTML = owned.map(id => {
      const item = this.findItem(id);
      if (!item) return '';
      const isActive = id === current;
      return `<div class="floor-picker-item ${isActive ? 'active' : ''}" onclick="app.switchFloor('${id}')">
        <div class="floor-picker-preview" style="background:linear-gradient(180deg,${item.wallBg},${item.floorBg})"></div>
        <div class="floor-picker-icon">${item.icon}</div>
        <div class="floor-picker-name">${item.name}</div>
        <div class="floor-picker-status">${isActive ? '使用中' : '切换'}</div>
      </div>`;
    }).join('');
    document.getElementById('floor-picker-modal').classList.add('show');
  },

  switchFloor(floorId) {
    const house = this.data.houses[this.data.currentCharacter];
    house.floor.current = floorId;
    this.saveData();
    this.renderHouse();
    this.closeFloorPicker();
  },

  closeFloorPicker() {
    document.getElementById('floor-picker-modal').classList.remove('show');
  },

  // ---- 打怪兽 ----
  getToday() { return new Date().toISOString().slice(0, 10); },

  spawnMonster() {
    const defeated = this.data.battle.trophies.map(t => t.id);
    let avail = MONSTERS.filter(m => !defeated.includes(m.id));
    if (avail.length === 0) avail = [...MONSTERS];
    const m = avail[Math.floor(Math.random() * avail.length)];
    this.data.battle.currentMonster = { ...m, hp: m.maxHp };
    this.data.battle.currentBoss = null;
    this.saveData();
  },

  spawnBoss() {
    const defeated = (this.data.battle.bossTrophies || []).map(t => t.id);
    let avail = BOSSES.filter(b => !defeated.includes(b.id));
    if (avail.length === 0) avail = [...BOSSES];
    const b = avail[Math.floor(Math.random() * avail.length)];
    this.data.battle.currentBoss = { ...b, hp: b.maxHp };
    this.data.battle.currentMonster = null;
    this.saveData();
  },

  getBattleTarget() {
    return this.data.battle.currentBoss || this.data.battle.currentMonster;
  },

  isBossBattle() {
    return !!this.data.battle.currentBoss;
  },

  canFreeAttack() { return this.data.battle.lastFreeAttackDate !== this.getToday(); },

  canPetAttack(petId) {
    return this.data.battle.lastPetAttackDates[petId] !== this.getToday();
  },

  getCurrentPets() {
    const charId = this.data.currentCharacter;
    const house = this.data.houses[charId];
    return (house.pets || []).map(id => this.findItem(id)).filter(Boolean);
  },

  renderBattle() {
    const target = this.getBattleTarget();
    if (!target) { this.spawnMonster(); return this.renderBattle(); }
    const isBoss = this.isBossBattle();

    // BOSS 模式切换容器 class
    const monsterEl = document.getElementById('battle-monster');
    if (isBoss) monsterEl.classList.add('boss-mode');
    else monsterEl.classList.remove('boss-mode');

    // BOSS 来袭标签
    let nameHtml = target.name;
    if (isBoss) nameHtml = '👑 BOSS 来袭！ ' + target.name;
    document.getElementById('monster-name').innerHTML = nameHtml;
    document.getElementById('monster-icon').textContent = target.icon;
    const pct = Math.max(0, (target.hp / target.maxHp) * 100);
    document.getElementById('monster-hp-bar').style.width = pct + '%';
    document.getElementById('monster-hp-text').textContent = `HP: ${target.hp} / ${target.maxHp}`;

    const char = CHARACTERS[this.data.currentCharacter];
    document.getElementById('battle-hero').innerHTML =
      `<img class="char-img" src="${char.img}" alt="${char.name}" style="width:80px;height:100px;object-fit:contain">`;

    const canFree = this.canFreeAttack();
    let actionsHTML = `
      <button class="atk-btn atk-normal ${canFree ? '' : 'disabled'}" onclick="app.attack('normal')">
        <span class="atk-icon">👊</span><span class="atk-label">普通攻击</span>
        <span class="atk-cost">${canFree ? '免费(每日1次)' : '今日已用'}</span><span class="atk-dmg">伤害 1</span>
      </button>
      <button class="atk-btn atk-strong" onclick="app.attack('strong')">
        <span class="atk-icon">⚡</span><span class="atk-label">强力攻击</span>
        <span class="atk-cost">&#9733; 10 积分</span><span class="atk-dmg">伤害 3</span>
      </button>
      <button class="atk-btn atk-ultimate" onclick="app.attack('ultimate')">
        <span class="atk-icon">💥</span><span class="atk-label">必杀技</span>
        <span class="atk-cost">&#9733; 25 积分</span><span class="atk-dmg">伤害 8</span>
      </button>`;
    document.getElementById('battle-actions').innerHTML = actionsHTML;

    // 宠物攻击按钮
    const pets = this.getCurrentPets();
    const petArea = document.getElementById('pet-actions');
    if (pets.length === 0) {
      petArea.innerHTML = '<div class="pet-hint">养宠物后，宠物也能帮你打怪兽哦！</div>';
    } else {
      petArea.innerHTML = '<div class="pet-actions-title">🐾 宠物助攻</div>' + pets.map(pet => {
        const canAtk = this.canPetAttack(pet.id);
        return `<button class="pet-atk-btn ${canAtk ? '' : 'disabled'}" onclick="app.petAttack('${pet.id}')">
          <span class="pet-atk-icon">${pet.icon}</span>
          <span class="pet-atk-info">${pet.name}${canAtk ? ' 攻击！' : ' (今日已攻击)'}</span>
          <span class="pet-atk-dmg">伤害 2</span>
        </button>`;
      }).join('');
    }
  },

  attack(type) {
    if (this.battleAnimating) return;
    const target = this.getBattleTarget();
    if (!target || target.hp <= 0) return;
    let damage = 0, cost = 0;
    if (type === 'normal') { if (!this.canFreeAttack()) return; damage = 1; this.data.battle.lastFreeAttackDate = this.getToday(); }
    else if (type === 'strong') { cost = 10; damage = 3; }
    else if (type === 'ultimate') { cost = 25; damage = 8; }
    if (cost > 0 && this.data.points < cost) { this.showBattleLog('积分不够哦~', '#FF6B6B'); return; }
    if (cost > 0) this.data.points -= cost;
    this.doAttackAnim(damage, type === 'ultimate', cost);
    const labels = { normal: '普通攻击', strong: '强力攻击', ultimate: '必杀技' };
    this.showBattleLog(`${labels[type]}！造成 ${damage} 点伤害！`, type === 'ultimate' ? '#e84393' : '#0984e3');
  },

  petAttack(petId) {
    if (this.battleAnimating) return;
    if (!this.canPetAttack(petId)) return;
    const target = this.getBattleTarget();
    if (!target || target.hp <= 0) return;
    const pet = this.findItem(petId);
    if (!pet) return;
    this.data.battle.lastPetAttackDates[petId] = this.getToday();
    // 如果宠物有GIF，先播放GIF再攻击
    if (pet.gif) {
      this.showBattleGif(pet.gif, 2000);
    }
    this.doAttackAnim(2, false, 0);
    this.showBattleLog(`${pet.icon} ${pet.name} 发动攻击！造成 2 点伤害！`, '#00b894');
  },

  doAttackAnim(damage, big, cost) {
    const target = this.getBattleTarget();
    if (!target) return;
    target.hp = Math.max(0, target.hp - damage);
    this.saveData(); this.updateAllPoints();
    this.battleAnimating = true;
    const mEl = document.getElementById('battle-monster');
    const hEl = document.getElementById('battle-hero');
    hEl.classList.add('hero-attack');
    SFX.play(big ? 'bigAttack' : 'attack');
    if (cost > 0) this.animatePoints(-cost, window.innerWidth / 2, 60, true);
    setTimeout(() => {
      hEl.classList.remove('hero-attack');
      mEl.classList.add(big ? 'monster-hit-big' : 'monster-hit');
      this.showDamageNumber(damage, mEl);
      setTimeout(() => {
        mEl.classList.remove('monster-hit', 'monster-hit-big');
        this.battleAnimating = false;
        this.renderBattle();
        if (target.hp <= 0) this.monsterDefeated();
      }, 400);
    }, 300);
  },

  showDamageNumber(dmg, target) {
    const el = document.createElement('div');
    el.className = 'damage-number';
    el.textContent = '-' + dmg;
    target.appendChild(el);
    setTimeout(() => el.remove(), 800);
  },

  showBattleLog(msg, color) {
    document.getElementById('battle-log').innerHTML = `<div class="battle-log-msg" style="color:${color||'#333'}">${msg}</div>`;
  },

  monsterDefeated() {
    const modal = document.getElementById('victory-modal');
    const titleEl = modal.querySelector('h3');
    const textEl = document.getElementById('victory-text');
    const iconEl = modal.querySelector('.victory-icon') || modal.querySelector('div[style*="font-size:60px"]');

    if (this.isBossBattle()) {
      const b = this.data.battle.currentBoss;
      // 加入 BOSS 战利品墙
      this.data.battle.bossTrophies.push({ id: b.id, name: b.name, icon: b.icon, defeatedDate: this.getToday() });
      this.data.battle.currentBoss = null;
      this._justDefeatedBoss = true;
      // 发奖励
      const reward = b.rewardPoints || 50;
      this.data.points += reward;
      this.saveData();
      this.updateAllPoints();
      SFX.play('bossVictory');
      this.celebrate();
      // 再撒一轮彩带，加强效果
      setTimeout(() => this.celebrate(), 300);
      if (iconEl) iconEl.textContent = '👑';
      if (titleEl) { titleEl.textContent = 'BOSS 被击败啦！'; titleEl.style.color = '#FFB300'; }
      textEl.innerHTML = `你打败了 <b>${b.name}</b>！<br><span style="color:#FFB300;font-size:20px;font-weight:800">+${reward} 积分</span>`;
      modal.classList.add('boss-victory');
    } else {
      const m = this.data.battle.currentMonster;
      this.data.battle.trophies.push({ id: m.id, name: m.name, icon: m.icon, defeatedDate: this.getToday() });
      this.data.battle.currentMonster = null;
      this.data.battle.killCount = (this.data.battle.killCount || 0) + 1;
      this.saveData();
      SFX.play('victory');
      this.celebrate();
      if (iconEl) iconEl.textContent = '🎉';
      if (titleEl) { titleEl.textContent = '怪兽被打败啦！'; titleEl.style.color = '#FF6B6B'; }
      textEl.textContent = `你打败了 ${m.name}！战利品已加入小屋墙上！`;
      modal.classList.remove('boss-victory');
    }
    modal.classList.add('show');
  },

  closeVictory() {
    const modal = document.getElementById('victory-modal');
    modal.classList.remove('show');
    modal.classList.remove('boss-victory');
    // 判断下一个对手
    if (!this.data.battle.currentBoss && !this.data.battle.currentMonster) {
      const kc = this.data.battle.killCount || 0;
      // 刚击败 BOSS 的话直接回到小怪
      if (this._justDefeatedBoss) {
        this._justDefeatedBoss = false;
        this.spawnMonster();
      } else if (kc > 0 && kc % 5 === 0) {
        // 累计击杀每 5 只触发 BOSS
        this.spawnBoss();
      } else {
        this.spawnMonster();
      }
    }
    this.renderBattle();
  },

  // ---- GIF动画 ----
  showGif(gifUrl, text, duration) {
    const modal = document.getElementById('gif-modal');
    const img = document.getElementById('gif-image');
    const txt = document.getElementById('gif-text');
    // 先清空再设置src，强制重新加载GIF（不用时间戳参数，兼容微信）
    img.removeAttribute('src');
    void img.offsetHeight;
    img.src = gifUrl;
    txt.textContent = text || '';
    modal.classList.add('show');
    if (duration) {
      setTimeout(() => this.closeGif(), duration);
    }
  },

  closeGif() {
    const modal = document.getElementById('gif-modal');
    modal.classList.remove('show');
    document.getElementById('gif-image').removeAttribute('src');
  },

  // 在战斗区域内播放GIF覆盖动画
  showBattleGif(gifUrl, duration) {
    const battleArea = document.getElementById('battle-monster');
    const overlay = document.createElement('div');
    overlay.className = 'battle-gif-overlay';
    overlay.innerHTML = `<img src="${gifUrl}" alt="攻击动画" style="max-width:100%;max-height:100%;">`;
    battleArea.appendChild(overlay);
    setTimeout(() => overlay.remove(), duration || 2000);
  },

  // ---- 庆祝 ----
  celebrate() {
    const c = document.getElementById('celebration');
    const colors = ['#FF6B6B', '#FFE066', '#55efc4', '#74b9ff', '#fd79a8', '#a29bfe'];
    for (let i = 0; i < 30; i++) {
      const d = document.createElement('div');
      d.className = 'confetti';
      d.style.left = Math.random() * 100 + '%';
      d.style.top = '-10px';
      d.style.background = colors[Math.floor(Math.random() * colors.length)];
      d.style.animationDelay = Math.random() * 0.5 + 's';
      d.style.animationDuration = (1 + Math.random()) + 's';
      d.style.width = (6 + Math.random() * 8) + 'px';
      d.style.height = (6 + Math.random() * 8) + 'px';
      c.appendChild(d);
    }
    setTimeout(() => { c.innerHTML = ''; }, 2000);
  }
};

document.addEventListener('DOMContentLoaded', () => app.init());
