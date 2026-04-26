// ============ 游戏数据定义 ============

const CHARACTERS = {
  leidi: { name: '乐迪', desc: '超级飞侠', img: 'icons/leidi.png' },
  diga: { name: '迪迦', desc: '奥特曼', img: 'icons/dijia.png' }
};

// 心愿商店：50 钱 = 1 元人民币
const WISH_RATE = 50;

const TASK_CATEGORIES = {
  basic:   { label: '基础任务', desc: '每天的好习惯' },
  growth:  { label: '成长任务', desc: '让自己变得更厉害' },
  special: { label: '特别奖励', desc: '今天表现特别棒才有' },
  penalty: { label: '扣分项',   desc: '小心不要这样做哦' }
};
const TASK_CATEGORY_ORDER = ['basic', 'growth', 'special', 'penalty'];

const TASKS = [
  // 基础任务（每日满分 65）
  { id: 'brush',         name: '刷牙',           icon: '🪥', points: 5,   category: 'basic' },
  { id: 'kindergarten',  name: '乖乖上幼儿园',   icon: '🎒', points: 10,  category: 'basic' },
  { id: 'eat',           name: '自己吃饭',       icon: '🍚', points: 10,  category: 'basic' },
  { id: 'veggie',        name: '吃青菜',         icon: '🥦', points: 10,  category: 'basic' },
  { id: 'meat',          name: '吃肉',           icon: '🍖', points: 10,  category: 'basic' },
  { id: 'bath_ok',       name: '洗澡配合',       icon: '🛁', points: 10,  category: 'basic' },
  { id: 'sleep10',       name: '10点前上床',     icon: '🌙', points: 10,  category: 'basic' },
  // 成长任务（每日满分 50）
  { id: 'english',       name: '学英语',                 icon: '🔤', points: 10,  category: 'growth' },
  { id: 'read',          name: '看书',                   icon: '📖', points: 10,  category: 'growth' },
  { id: 'outdoor',       name: '户外运动',               icon: '⚽', points: 15,  category: 'growth' },
  { id: 'express',       name: '主动表达自己的想法',     icon: '💬', points: 15,  category: 'growth' },
  // 特别奖励（家长按需发放）
  { id: 'brave',         name: '勇敢宝宝奖',     icon: '🦁', points: 20,  category: 'special' },
  { id: 'emotion',       name: '情绪管理奖',     icon: '😌', points: 20,  category: 'special' },
  { id: 'apology',       name: '主动道歉奖',     icon: '🤝', points: 15,  category: 'special' },
  { id: 'persist',       name: '坚持完成奖',     icon: '💪', points: 20,  category: 'special' },
  { id: 'cooperate',     name: '超级配合奖',     icon: '🌟', points: 20,  category: 'special' },
  // 扣分项
  { id: 'hit',           name: '打人',           icon: '🚫', points: -10, category: 'penalty' }
];

const SHOP_ITEMS = {
  furniture: {
    label: '家具', icon: '🛋️', zone: 'floor',
    items: [
      { id: 'f_sofa', name: '小沙发', icon: '🛋️', price: 70, pos: { left:'3%', bottom:'32%', size:'34px' } },
      { id: 'f_table', name: '小桌子', icon: '🪑', price: 50, pos: { left:'25%', bottom:'28%', size:'28px' } },
      { id: 'f_bed', name: '小床', icon: '🛏️', price: 90, pos: { right:'3%', bottom:'35%', size:'34px' } },
      { id: 'f_shelf', name: '书架', icon: '📚', price: 70, pos: { right:'5%', bottom:'65%', size:'28px' } },
      { id: 'f_tv', name: '电视', icon: '📺', price: 110, pos: { left:'42%', bottom:'68%', size:'30px' } },
      { id: 'f_lamp', name: '台灯', icon: '💡', price: 50, pos: { left:'2%', bottom:'58%', size:'24px' } },
      { id: 'f_bath', name: '浴缸', icon: '🛁', price: 110, pos: { right:'25%', bottom:'5%', size:'30px' } },
      { id: 'f_piano', name: '钢琴', icon: '🎹', price: 140, pos: { left:'12%', bottom:'5%', size:'32px' } },
      { id: 'f_computer', name: '电脑', icon: '💻', price: 90, pos: { right:'18%', bottom:'55%', size:'26px' } },
      { id: 'f_fridge', name: '冰箱', icon: '🧊', price: 70, pos: { right:'2%', bottom:'55%', size:'28px' } },
      // BOSS 专属奖励（不在商店出售，bossOnly）
      { id: 'br_b1', name: '火焰王座', icon: '🔥', price: 0, bossOnly: true, pos: { left:'38%', bottom:'25%', size:'40px' } },
      { id: 'br_b2', name: '冰雕熊',   icon: '🐻‍❄️', price: 0, bossOnly: true, pos: { right:'35%', bottom:'30%', size:'40px' } }
    ]
  },
  wallDecor: {
    label: '墙饰', icon: '🖼️', zone: 'wall',
    items: [
      { id: 'w_paint', name: '挂画', icon: '🖼️', price: 40, pos: { left:'5%', top:'12%', size:'28px' } },
      { id: 'w_clock', name: '时钟', icon: '🕐', price: 50, pos: { left:'22%', top:'8%', size:'24px' } },
      { id: 'w_photo', name: '照片墙', icon: '📷', price: 50, pos: { right:'22%', top:'10%', size:'24px' } },
      { id: 'w_cert', name: '奖状', icon: '📜', price: 70, pos: { left:'38%', top:'5%', size:'24px' } },
      { id: 'w_mirror', name: '镜子', icon: '🪞', price: 50, pos: { right:'5%', top:'12%', size:'26px' } },
      { id: 'w_flag', name: '小旗帜', icon: '🚩', price: 40, pos: { left:'5%', top:'55%', size:'22px' } },
      { id: 'w_map', name: '世界地图', icon: '🗺️', price: 70, pos: { right:'5%', top:'50%', size:'26px' } },
      { id: 'w_note', name: '音符墙', icon: '🎵', price: 50, pos: { left:'22%', top:'50%', size:'22px' } },
      { id: 'w_heart', name: '爱心墙', icon: '❤️', price: 40, pos: { right:'22%', top:'48%', size:'24px' } },
      { id: 'w_star', name: '星星灯', icon: '🌟', price: 70, pos: { left:'55%', top:'5%', size:'24px' } },
      // BOSS 专属奖励（不在商店出售，bossOnly）
      { id: 'br_b3', name: '龙鳞盾', icon: '🛡️', price: 0, bossOnly: true, pos: { left:'40%', top:'30%', size:'34px' } },
      { id: 'br_b4', name: '雷神锤', icon: '🔨', price: 0, bossOnly: true, pos: { right:'40%', top:'30%', size:'34px' } }
    ]
  },
  floor: {
    label: '地板墙纸', icon: '🎨', zone: 'bg',
    items: [
      { id: 'fl_star', name: '星空', icon: '⭐', price: 130, wallBg: '#1a1a3e', floorBg: '#0c0c2e' },
      { id: 'fl_rainbow', name: '彩虹', icon: '🌈', price: 160, wallBg: '#ffe0ec', floorBg: '#ffd0d0' },
      { id: 'fl_grass', name: '草地', icon: '🌿', price: 120, wallBg: '#c8e6c9', floorBg: '#4CAF50' },
      { id: 'fl_ocean', name: '海洋', icon: '🌊', price: 160, wallBg: '#b3e5fc', floorBg: '#0288d1' },
      { id: 'fl_cloud', name: '云朵天空', icon: '☁️', price: 130, wallBg: '#e3f2fd', floorBg: '#bbdefb' },
      { id: 'fl_sunset', name: '晚霞', icon: '🌅', price: 160, wallBg: '#ff8a65', floorBg: '#d84315' },
      { id: 'fl_candy', name: '糖果屋', icon: '🍬', price: 130, wallBg: '#f8bbd0', floorBg: '#f48fb1' },
      { id: 'fl_space', name: '太空', icon: '🪐', price: 200, wallBg: '#1a0033', floorBg: '#0d001a' }
    ]
  },
  special: {
    label: '特殊装饰', icon: '✨', zone: 'special',
    items: [
      { id: 's_tree', name: '圣诞树', icon: '🎄', price: 200, pos: { right:'3%', bottom:'8%', size:'36px' } },
      { id: 's_balloon', name: '气球', icon: '🎈', price: 160, pos: { left:'8%', top:'5%', size:'30px' } },
      { id: 's_lights', name: '彩灯', icon: '🎆', price: 180, pos: { left:'50%', top:'2%', size:'28px' } },
      { id: 's_fountain', name: '喷泉', icon: '⛲', price: 240, pos: { left:'42%', bottom:'3%', size:'32px' } },
      { id: 's_flower', name: '花园', icon: '🌸', price: 160, pos: { left:'3%', bottom:'5%', size:'28px' } },
      { id: 's_rocket', name: '火箭', icon: '🚀', price: 220, pos: { right:'8%', top:'3%', size:'30px' } },
      { id: 's_rainbow', name: '彩虹桥', icon: '🌈', price: 200, pos: { left:'30%', top:'0%', size:'34px' } },
      { id: 's_trophy', name: '奖杯', icon: '🏆', price: 180, pos: { right:'30%', bottom:'60%', size:'26px' } },
      { id: 's_castle', name: '小城堡', icon: '🏰', price: 240, pos: { right:'3%', bottom:'55%', size:'34px' } },
      { id: 's_ferris', name: '摩天轮', icon: '🎡', price: 220, pos: { left:'3%', bottom:'50%', size:'34px' } },
      // BOSS 专属奖励（不在商店出售，bossOnly）
      { id: 'br_b5', name: '黄金王冠', icon: '👑', price: 0, bossOnly: true, pos: { left:'45%', bottom:'25%', size:'40px' } }
    ]
  },
  pet: {
    label: '宠物', icon: '🐾', zone: 'pet',
    items: [
      // 普通宠物（200 钱）— 常见动物
      { id: 'p_dog',     name: '小狗',     icon: '🐕', price: 200, tier: 'common', gif: 'gifs/dog.gif',     voice: 'dog' },
      { id: 'p_cat',     name: '小猫',     icon: '🐈', price: 200, tier: 'common', gif: 'gifs/cat.gif',     voice: 'cat' },
      { id: 'p_rabbit',  name: '兔子',     icon: '🐰', price: 200, tier: 'common', gif: 'gifs/rabbit.gif',  voice: 'rabbit' },
      { id: 'p_hamster', name: '仓鼠',     icon: '🐹', price: 200, tier: 'common', gif: 'gifs/hamster.gif', voice: 'hamster' },
      { id: 'p_bird',    name: '小鸟',     icon: '🐦', price: 200, tier: 'common', gif: 'gifs/bird.gif',    voice: 'bird' },
      { id: 'p_fish',    name: '金鱼',     icon: '🐟', price: 200, tier: 'common', gif: 'gifs/gold_fish.gif', aquatic: true, voice: 'fish' },
      { id: 'p_panda',   name: '熊猫',     icon: '🐼', price: 200, tier: 'common', gif: 'gifs/panada.gif',  voice: 'panda' },
      // 稀有宠物（400 钱）— 奇幻/异国
      { id: 'p_dragon',  name: '小恐龙',   icon: '🦖', price: 400, tier: 'rare',   gif: 'gifs/Tyrannosaurus_rex.gif', voice: 'dragon' },
      { id: 'p_unicorn', name: '独角兽',   icon: '🦄', price: 400, tier: 'rare',   gif: 'gifs/unicorn.gif',  voice: 'unicorn' },
      { id: 'p_whale',   name: '抹香鲸',   icon: '🐋', price: 400, tier: 'rare',   gif: 'gifs/whale.gif',    aquatic: true, voice: 'whale' },
      { id: 'p_shark',   name: '鲨鱼宝宝', icon: '🦈', price: 400, tier: 'rare',   gif: 'gifs/shark.gif',    aquatic: true, voice: 'shark' }
    ]
  },
  music: {
    label: '音乐', icon: '🎵', zone: 'music',
    items: [
      { id: 'bgm_happy',     name: '欢乐曲', icon: '😄', price: 120, file: 'music/happy.mp3' },
      { id: 'bgm_adventure', name: '冒险曲', icon: '⚔️', price: 160, file: 'music/adventure.mp3' },
      { id: 'bgm_lullaby',   name: '摇篮曲', icon: '🌙', price: 120, file: 'music/lullaby.mp3' },
      { id: 'bgm_hero',      name: '英雄曲', icon: '🦸', price: 200, file: 'music/hero.mp3' },
      { id: 'bgm_magic',     name: '魔法曲', icon: '✨', price: 160, file: 'music/magic.mp3' }
    ]
  },
  // 心愿商店占位：tab 入口用，items 由 this.data.wishShop.items 动态提供
  wish: {
    label: '心愿', icon: '💝', zone: 'wish',
    items: []
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
  { id: 'b1', name: '炎魔王',     icon: '🔥👹', maxHp: 50, rewardPoints: 50,
    rewardItem: { id: 'br_b1', name: '火焰王座', icon: '🔥', zone: 'floor' } },
  { id: 'b2', name: '冰封巨兽',   icon: '❄️🦖', maxHp: 50, rewardPoints: 50,
    rewardItem: { id: 'br_b2', name: '冰雕熊',   icon: '🐻‍❄️', zone: 'floor' } },
  { id: 'b3', name: '暗影恶龙',   icon: '🐲',   maxHp: 50, rewardPoints: 50,
    rewardItem: { id: 'br_b3', name: '龙鳞盾',   icon: '🛡️', zone: 'wall' } },
  { id: 'b4', name: '雷霆魔神',   icon: '⚡👿', maxHp: 50, rewardPoints: 50,
    rewardItem: { id: 'br_b4', name: '雷神锤',   icon: '🔨', zone: 'wall' } },
  { id: 'b5', name: '终极大魔王', icon: '💀',   maxHp: 50, rewardPoints: 80,
    rewardItem: { id: 'br_b5', name: '黄金王冠', icon: '👑', zone: 'special' } }
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
// 阿里云 Function Compute 部署的同步后端（替换原 Cloudflare Worker，因 workers.dev 在中国大陆部分网络不可达）
const SYNC_URL = 'https://kids-hero-sync-hvwpmkqqqp.cn-shenzhen.fcapp.run';
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

// ============ 用户认证 ============

// 结构化认证错误：phase 取值 'network' | 'timeout' | 'parse' | 'server'
class AuthError extends Error {
  constructor(code, phase, raw) {
    super(code);
    this.code = code;
    this.phase = phase;
    this.raw = raw || '';
  }
}

const Auth = {
  // 客户端哈希：sha256(username + ':' + value)，用户名作为盐
  async hash(salt, value) {
    const buf = new TextEncoder().encode(salt + ':' + value);
    const h = await crypto.subtle.digest('SHA-256', buf);
    return Array.from(new Uint8Array(h)).map(b => b.toString(16).padStart(2, '0')).join('');
  },

  // 带 10 秒超时 + 1 次自动重试的 fetch
  // 失败时抛 AuthError({code, phase, raw})，由调用方分类展示
  async _post(path, body) {
    const url = SYNC_URL + path;
    const opts = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Auth-Token': SYNC_TOKEN },
      body: JSON.stringify(body)
    };

    const attempt = async () => {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 10000);
      try {
        const res = await fetch(url, { ...opts, signal: ctrl.signal });
        clearTimeout(timer);
        let json;
        try { json = await res.json(); }
        catch (e) { throw new AuthError('PARSE', 'parse', String(e && e.message || e)); }
        if (!json || !json.ok) {
          throw new AuthError(json && json.error || 'UNKNOWN', 'server', json && json.message || '');
        }
        return json;
      } catch (e) {
        clearTimeout(timer);
        if (e instanceof AuthError) throw e;
        // AbortError -> timeout；其他 TypeError 等都视为 network 层
        if (e && e.name === 'AbortError') {
          throw new AuthError('TIMEOUT', 'timeout', '10s 内未收到响应');
        }
        throw new AuthError('NETWORK_FAIL', 'network', String(e && e.message || e));
      }
    };

    try {
      return await attempt();
    } catch (e) {
      // 仅网络层 / 超时层失败时重试一次（服务端错误 / parse 错误不重试）
      if (e instanceof AuthError && (e.phase === 'network' || e.phase === 'timeout')) {
        await new Promise(r => setTimeout(r, 1000));
        return await attempt();
      }
      throw e;
    }
  },

  async register({ username, password, hint, hintAnswer, data }) {
    const passwordHash = await this.hash(username, password);
    const hintAnswerHash = await this.hash(username, hintAnswer.trim().toLowerCase());
    await this._post('/auth/register', { username, passwordHash, hint, hintAnswerHash, data });
    return { username, passwordHash };
  },

  async login({ username, password }) {
    const passwordHash = await this.hash(username, password);
    const json = await this._post('/auth/login', { username, passwordHash });
    return { username, passwordHash, data: json.data, _lastSync: json._lastSync };
  },

  async fetchHint({ username }) {
    const json = await this._post('/auth/hint', { username });
    return json.hint;
  },

  async reset({ username, hintAnswer, newPassword }) {
    const hintAnswerHash = await this.hash(username, hintAnswer.trim().toLowerCase());
    const newPasswordHash = await this.hash(username, newPassword);
    const json = await this._post('/auth/reset', { username, hintAnswerHash, newPasswordHash });
    return { username, passwordHash: newPasswordHash, data: json.data, _lastSync: json._lastSync };
  }
};

const AUTH_ERR_MSG = {
  USER_EXISTS: '用户名已存在，换一个试试',
  INVALID: '用户名或密码错误',
  NOT_FOUND: '用户名不存在',
  WRONG_ANSWER: '答案错误',
  BAD_USERNAME: '用户名格式错误（3-20 字符，中英文/数字/下划线）',
  MISSING: '请填写完整',
  NETWORK_FAIL: '🔌 连接服务器失败 — 你这台手机的网络可能屏蔽了同步服务器。请尝试：① 换 4G/5G 流量 ② 换其他 Wi-Fi ③ 在 Safari（不是微信）里打开。仍然不行请点下方的「网络诊断」截图反馈',
  TIMEOUT: '⏱️ 请求超时（10秒）— 你这台手机连不上服务器。请试试别的网络，或点下方「网络诊断」查看详情',
  PARSE: '服务端返回异常，请点「网络诊断」查看详情',
  DEPRECATED: '服务端已升级，请刷新页面',
  FORBIDDEN: '访问被拒绝',
  UNKNOWN: '未知错误'
};

// ============ 应用主类 ============

const app = {
  data: null,
  currentPage: 'home',
  pendingBuyItem: null,
  shopCategory: 'furniture',
  battleAnimating: false,
  currentNurturePetId: null,
  _syncTimer: null,
  _authUser: null,       // { username, passwordHash } — 已登录用户
  _authTab: 'login',     // 'login' | 'register' | 'reset' — 登录页当前 tab
  _needMigration: false, // 本机有遗留数据，首次注册可勾选"上传现有数据"

  // ---- 初始化 ----
  init() {
    // 注册 Service Worker（网络优先策略，确保 PWA 及时更新）
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').then((reg) => {
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

    // 检查登录态
    const authRaw = localStorage.getItem('kids_hero_auth_v1');
    if (authRaw) {
      try {
        this._authUser = JSON.parse(authRaw);
      } catch (e) {
        localStorage.removeItem('kids_hero_auth_v1');
        this._authUser = null;
      }
    }

    if (this._authUser && this._authUser.username && this._authUser.passwordHash) {
      // 已登录 — 加载本地数据并从云端同步
      let origLastSync = 0;
      try {
        const raw = localStorage.getItem('babyTaskGame_v3');
        if (raw) origLastSync = (JSON.parse(raw)._lastSync) || 0;
      } catch(e) {}
      this._bootSync = origLastSync;
      this._cloudLoadPending = true;
      this.loadData();
      this.showPage('home');
      this.renderHome();
      this.updateAllPoints();
      this.updateMuteButton();
      this._updateLogoutBtn();
      this._loadFromCloud();
    } else {
      // 未登录 — 判断是否有老数据需要迁移
      const legacy = localStorage.getItem('babyTaskGame_v3');
      let hasExisting = false;
      if (legacy) {
        try { hasExisting = !this._isDataEmpty(JSON.parse(legacy)); } catch(e) {}
      }
      this._needMigration = hasExisting;
      this.loadData();  // 仍需 this.data 存在以便注册时可上传
      this.showPage('auth');
      this.switchAuthTab(hasExisting ? 'register' : 'login');
      this.updateMuteButton();
    }
  },

  // 未登录也能安全调用（无 sync-indicator 等元素时跳过）
  _updateLogoutBtn() {
    const btn = document.getElementById('logout-btn');
    if (!btn) return;
    btn.style.display = this._authUser ? '' : 'none';
    btn.title = this._authUser ? ('退出 ' + this._authUser.username) : '';
  },

  // ---- 数据管理 ----
  getDefaultHouse() {
    return { items: [], floor: null, pets: [] };
  },

  _buildDefaultData(oldPoints = 0) {
    return {
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
      taskHistory: []
    };
  },

  loadData() {
    const saved = localStorage.getItem('babyTaskGame_v3');
    if (saved) {
      this.data = JSON.parse(saved);
    } else {
      let oldPoints = 0;
      for (const key of ['babyTaskGame_v2', 'babyTaskGame']) {
        const old = localStorage.getItem(key);
        if (old) { try { oldPoints = JSON.parse(old).points || 0; } catch(e) {} break; }
      }
      this.data = this._buildDefaultData(oldPoints);
      // 已登录才写 localStorage + 推云端；未登录仅在内存中保留默认数据（认证页用）
      if (this._authUser) this.saveData();
    }
    this._applyDataCompat();
    this.decayAllPetStats();
    this._checkBossExpiry();
    if (!this.data.battle.currentMonster && !this.data.battle.currentBoss) this.spawnMonster();
  },

  // ---- 宠物培养数据 ----
  // 每个动作消耗的钱
  PET_ACTION_COST: 4,

  initPetStatus(charId, petId) {
    if (!this.data.petStatus[charId]) this.data.petStatus[charId] = {};
    this.data.petStatus[charId][petId] = {
      hunger: 80, clean: 80, happy: 80,
      lastUpdate: this.getToday(),
      todayActions: { feed: 0, bath: 0, play: 0 },
      lastActionDate: this.getToday()
    };
  },

  decayAllPetStats() {
    const today = this.getToday();
    for (const charId of Object.keys(CHARACTERS)) {
      const statuses = this.data.petStatus[charId] || {};
      for (const petId of Object.keys(statuses)) {
        const s = statuses[petId];
        // 重置每日次数
        if (s.lastActionDate !== today) {
          s.todayActions = { feed: 0, bath: 0, play: 0 };
          s.lastActionDate = today;
        }
        // 按天数衰减
        if (s.lastUpdate && s.lastUpdate !== today) {
          const diff = Math.floor((new Date(today) - new Date(s.lastUpdate)) / 86400000);
          if (diff > 0) {
            const decay = diff * 20;
            s.hunger = Math.max(0, (s.hunger || 0) - decay);
            s.clean  = Math.max(0, (s.clean  || 0) - decay);
            s.happy  = Math.max(0, (s.happy  || 0) - decay);
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
    const min = Math.min(s.hunger || 0, s.clean || 0, s.happy || 0);
    if (min >= 70) return 'happy';
    if (min < 30) return 'sad';
    return 'normal';
  },

  // 当天三项照顾全部完成，宠物才能辅助打怪
  hasFullCareToday(charId, petId) {
    const s = this.data.petStatus[charId]?.[petId];
    if (!s) return false;
    if (s.lastActionDate !== this.getToday()) return false;
    const a = s.todayActions || {};
    return (a.feed || 0) >= 1 && (a.bath || 0) >= 1 && (a.play || 0) >= 1;
  },

  saveData() {
    // 未登录不写磁盘也不推云（认证页面展示用的 this.data 仅存在于内存）
    if (!this._authUser) return;
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
    // BOSS 限时字段（v28+）：老 currentBoss 无 spawnedAt → 给个宽限期（从现在起算 3 天）
    if (this.data.battle.currentBoss && this.data.battle.currentBoss.spawnedAt === undefined) {
      this.data.battle.currentBoss.spawnedAt = Date.now();
    }
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
      // v29 宠物属性精简：5 字段 (meat/veg/rice/clean/happy) → 3 字段 (hunger/clean/happy)
      // 检测到旧结构则整体重置宠物属性
      for (const petId of Object.keys(this.data.petStatus[charId])) {
        const s = this.data.petStatus[charId][petId];
        const isLegacy = s.meat !== undefined || s.veg !== undefined || s.rice !== undefined
          || (s.todayActions && (s.todayActions.feedMeat !== undefined || s.todayActions.feedVeg !== undefined || s.todayActions.feedRice !== undefined));
        if (isLegacy) {
          this.data.petStatus[charId][petId] = {
            hunger: 80, clean: 80, happy: 80,
            lastUpdate: this.getToday(),
            todayActions: { feed: 0, bath: 0, play: 0 },
            lastActionDate: this.getToday()
          };
        }
      }
    }
    // 宠物位上限：默认初始 2 个位
    if (!this.data.petSlots) this.data.petSlots = { unlockedCount: 2 };
    if (typeof this.data.petSlots.unlockedCount !== 'number') this.data.petSlots.unlockedCount = 2;
    // 宠物乐园：默认空（按角色分）
    if (!this.data.petPark) {
      this.data.petPark = {};
      for (const k of Object.keys(CHARACTERS)) this.data.petPark[k] = [];
    }
    for (const k of Object.keys(CHARACTERS)) {
      if (!Array.isArray(this.data.petPark[k])) this.data.petPark[k] = [];
    }
    // 老用户超过 4 只宠物时，把多余的尾部迁到乐园
    for (const charId of Object.keys(CHARACTERS)) {
      const h = this.data.houses[charId];
      if (h && h.pets && h.pets.length > 4) {
        const overflow = h.pets.slice(4);
        h.pets = h.pets.slice(0, 4);
        this.data.petPark[charId].push(...overflow);
      }
    }
    if (!this.data.taskConfig) this.data.taskConfig = { overrides: {}, custom: [], order: {} };
    if (!this.data.taskConfig.order) this.data.taskConfig.order = {};
    // 老的 custom 任务没有 category 字段，默认归到"特别奖励"
    (this.data.taskConfig.custom || []).forEach(t => { if (!t.category) t.category = 'special'; });
    // 心愿商店
    if (!this.data.wishShop) this.data.wishShop = { items: [] };
    if (!Array.isArray(this.data.wishShop.items)) this.data.wishShop.items = [];
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
    const customActive = custom.filter(t => t.enabled !== false).map(t => ({
      ...t,
      category: t.category || 'special'
    }));
    return [...builtIn, ...customActive];
  },

  // 按分类分组返回，每组按 taskConfig.order[cat] 排序（缺省按数组原始顺序）
  getActiveTasksByCategory() {
    const tasks = this.getActiveTasks();
    const order = (this.data.taskConfig && this.data.taskConfig.order) || {};
    const groups = { basic: [], growth: [], special: [], penalty: [] };
    tasks.forEach(t => {
      const c = t.category || 'special';
      (groups[c] || groups.special).push(t);
    });
    for (const cat of Object.keys(groups)) {
      const ord = order[cat] || [];
      const indexOf = id => {
        const i = ord.indexOf(id);
        return i === -1 ? Number.MAX_SAFE_INTEGER : i;
      };
      groups[cat].sort((a, b) => indexOf(a.id) - indexOf(b.id));
    }
    return groups;
  },

  // ---- 云同步 ----
  async _syncToCloud() {
    // 未登录绝对不推送
    if (!this._authUser) return;
    // 硬防线：会话级兜底——如果本次会话从未成功从云端拉到过数据，禁止推送
    // 防止 fetch 慢时用户误操作用初始默认数据覆盖云端真实进度
    if (!this._cloudEverLoaded) {
      console.warn('[Sync] 会话未成功加载过云端数据，禁用推送（保护云端）');
      this._updateSyncStatus('error');
      return;
    }
    this._updateSyncStatus('syncing');
    try {
      const res = await fetch(SYNC_URL + '/data/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Auth-Token': SYNC_TOKEN },
        body: JSON.stringify({
          username: this._authUser.username,
          passwordHash: this._authUser.passwordHash,
          data: this.data
        }),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok || !json || !json.ok) {
        // 401/INVALID — 凭据失效，强制登出
        if (json && (json.error === 'INVALID' || json.error === 'NOT_FOUND')) {
          alert('登录已失效，请重新登录');
          this._forceLogout();
          return;
        }
        throw new Error((json && json.error) || 'HTTP ' + res.status);
      }
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

  async _loadFromCloud(opts = {}) {
    const { forceReplace = false } = opts;
    if (!this._authUser) {
      this._cloudLoadPending = false;
      return;
    }
    this._updateSyncStatus('syncing');
    let loadOk = false;
    let cloudAdopted = false;
    try {
      const res = await fetch(SYNC_URL + '/data/load', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Auth-Token': SYNC_TOKEN },
        body: JSON.stringify({
          username: this._authUser.username,
          passwordHash: this._authUser.passwordHash
        })
      });
      const json = await res.json().catch(() => null);
      if (!res.ok || !json || !json.ok) {
        if (json && (json.error === 'INVALID' || json.error === 'NOT_FOUND')) {
          alert('登录已失效，请重新登录');
          this._forceLogout();
          return;
        }
        throw new Error((json && json.error) || 'HTTP ' + res.status);
      }
      loadOk = true;
      const cloud = json.data;
      const cloudTs = json._lastSync || 0;
      if (cloud && typeof cloud === 'object') {
        const bootTs = this._bootSync || 0;
        const cloudEmpty = this._isDataEmpty(cloud);
        const localHasData = !this._isDataEmpty(this.data);
        // 登录/注册后强制采用云端（即使云端为空，因为我们知道它是权威）
        if (forceReplace) {
          this.data = Object.keys(cloud).length > 0 ? cloud : this._buildDefaultData();
          this._applyDataCompat();
          this.decayAllPetStats();
          if (!this.data.battle.currentMonster && !this.data.battle.currentBoss) this.spawnMonster();
          this.data._lastSync = cloudTs || Date.now();
          localStorage.setItem('babyTaskGame_v3', JSON.stringify(this.data));
          this._bootSync = this.data._lastSync;
          cloudAdopted = true;
        } else if (cloudEmpty && localHasData) {
          console.warn('[Sync] 云端为空但本地有数据，保留本地并推送（恢复云端）');
        } else if (cloudTs > bootTs) {
          this.data = cloud;
          this._applyDataCompat();
          this.decayAllPetStats();
          if (!this.data.battle.currentMonster && !this.data.battle.currentBoss) this.spawnMonster();
          this.data._lastSync = cloudTs;
          localStorage.setItem('babyTaskGame_v3', JSON.stringify(this.data));
          this._bootSync = cloudTs;
          cloudAdopted = true;
        }
        this._cloudEverLoaded = true;   // 登录后 load 成功 → 放开推送闸门
        if (cloudAdopted) {
          this.renderHome();
          this.updateAllPoints();
          this.updateMuteButton();
        }
      }
      this._updateSyncStatus('ok');
    } catch (e) {
      console.warn('[Sync] 加载失败:', e);
      this._updateSyncStatus('error');
    }
    this._cloudLoadPending = false;
    // 本地有真实数据且未采用云端 → 推送回云端（恢复云端场景）
    if (loadOk && !cloudAdopted && !this._isDataEmpty(this.data)) {
      this._syncToCloud();
    }
  },

  // 凭据失效时的强制登出（不弹确认）
  // 注意：保留 babyTaskGame_v3，让用户能在迁移到新后端时通过"重新注册 + 上传现有数据"恢复进度
  // 真正想清空数据时用 logout()（手动登出）
  _forceLogout() {
    localStorage.removeItem('kids_hero_auth_v1');
    this._authUser = null;
    BGM.stop();
    setTimeout(() => location.reload(), 300);
  },

  _updateSyncStatus(status) {
    const el = document.getElementById('sync-indicator');
    if (!el) return;
    el.className = 'sync-indicator ' + status;
    if (status === 'syncing') { el.textContent = '☁️'; }
    else if (status === 'ok') { el.textContent = '☁️'; }
    else if (status === 'error') { el.textContent = '⚠️'; }
  },

  // ---- 认证：登录/注册/重置 ----
  switchAuthTab(tab) {
    this._authTab = tab;
    document.querySelectorAll('.auth-tab').forEach(el => {
      el.classList.toggle('active', el.dataset.tab === tab);
    });
    this.renderAuth();
  },

  renderAuth() {
    const box = document.getElementById('auth-form');
    if (!box) return;
    const tab = this._authTab || 'login';
    if (tab === 'login') {
      box.innerHTML = `
        <input class="auth-input" id="auth-login-username" type="text" placeholder="用户名" autocomplete="username" maxlength="20">
        <input class="auth-input" id="auth-login-password" type="password" placeholder="密码" autocomplete="current-password" maxlength="40">
        <div class="auth-error" id="auth-login-error"></div>
        <button class="auth-btn auth-btn-primary" onclick="app.doLogin()">登录</button>
      `;
    } else if (tab === 'register') {
      const migrationBlock = this._needMigration ? `
        <label class="auth-checkbox">
          <input type="checkbox" id="auth-register-migrate" checked>
          <span>把本机现有游戏数据上传到我的账户（否则从零开始）</span>
        </label>
      ` : '';
      box.innerHTML = `
        <input class="auth-input" id="auth-register-username" type="text" placeholder="用户名（3-20 字符）" autocomplete="username" maxlength="20">
        <input class="auth-input" id="auth-register-password" type="password" placeholder="密码（至少 4 位）" autocomplete="new-password" maxlength="40">
        <input class="auth-input" id="auth-register-password2" type="password" placeholder="再输一次密码" autocomplete="new-password" maxlength="40">
        <input class="auth-input" id="auth-register-hint" type="text" placeholder="密码提示问题（如：我的宠物叫什么）" maxlength="50">
        <input class="auth-input" id="auth-register-answer" type="text" placeholder="答案（忘记密码时用于验证）" maxlength="50">
        ${migrationBlock}
        <div class="auth-error" id="auth-register-error"></div>
        <button class="auth-btn auth-btn-primary" onclick="app.doRegister()">注册</button>
      `;
    } else if (tab === 'reset') {
      box.innerHTML = `
        <input class="auth-input" id="auth-reset-username" type="text" placeholder="用户名" autocomplete="username" maxlength="20">
        <button class="auth-btn auth-btn-secondary" onclick="app.fetchHintForReset()">查看我的提示问题</button>
        <div class="auth-hint" id="auth-reset-hint"></div>
        <input class="auth-input" id="auth-reset-answer" type="text" placeholder="提示问题的答案" maxlength="50">
        <input class="auth-input" id="auth-reset-password" type="password" placeholder="新密码（至少 4 位）" autocomplete="new-password" maxlength="40">
        <div class="auth-error" id="auth-reset-error"></div>
        <button class="auth-btn auth-btn-primary" onclick="app.doReset()">重置密码并登录</button>
      `;
    }
  },

  _showAuthError(id, codeOrErr) {
    const el = document.getElementById(id);
    if (!el) return;
    let code, raw, phase;
    if (codeOrErr instanceof AuthError) {
      code = codeOrErr.code; raw = codeOrErr.raw; phase = codeOrErr.phase;
    } else {
      code = String(codeOrErr); raw = ''; phase = '';
    }
    const msg = AUTH_ERR_MSG[code] || ('出错了: ' + code);
    const isNetwork = (phase === 'network' || phase === 'timeout');
    const detailHtml = (raw || phase) ? `
      <details class="auth-error-detail">
        <summary>查看详情</summary>
        <div>错误码: ${code}${phase ? '（' + phase + '）' : ''}</div>
        ${raw ? `<div>原因: ${this._escapeHtml(raw)}</div>` : ''}
        <div>时间: ${new Date().toLocaleString()}</div>
        <div>UA: ${this._escapeHtml(navigator.userAgent)}</div>
      </details>` : '';
    const diagBtn = isNetwork ? `<button class="auth-error-diag" onclick="app.runDiagnostics()">🔍 网络诊断</button>` : '';
    el.innerHTML = `<div class="auth-error-msg">${msg}</div>${diagBtn}${detailHtml}`;
  },

  _escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  },

  _clearAuthError(id) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = '';
  },

  _validateUsername(u) {
    return /^[一-龥a-zA-Z0-9_]{3,20}$/.test(u);
  },

  async doLogin() {
    this._clearAuthError('auth-login-error');
    const username = (document.getElementById('auth-login-username').value || '').trim();
    const password = document.getElementById('auth-login-password').value || '';
    if (!this._validateUsername(username)) {
      this._showAuthError('auth-login-error', 'BAD_USERNAME'); return;
    }
    if (password.length < 4) {
      document.getElementById('auth-login-error').textContent = '密码至少 4 位'; return;
    }
    const btn = document.querySelector('#auth-form .auth-btn-primary');
    if (btn) { btn.disabled = true; btn.textContent = '登录中…'; }
    try {
      const { passwordHash, data, _lastSync } = await Auth.login({ username, password });
      this._authUser = { username, passwordHash };
      localStorage.setItem('kids_hero_auth_v1', JSON.stringify(this._authUser));
      this.data = (data && Object.keys(data).length > 0) ? data : this._buildDefaultData();
      this._applyDataCompat();
      this.decayAllPetStats();
      if (!this.data.battle.currentMonster && !this.data.battle.currentBoss) this.spawnMonster();
      this.data._lastSync = _lastSync || Date.now();
      localStorage.setItem('babyTaskGame_v3', JSON.stringify(this.data));
      this._bootSync = this.data._lastSync;
      this._cloudEverLoaded = true;
      this._cloudLoadPending = false;
      this.showPage('home');
      this.renderHome();
      this.updateAllPoints();
      this.updateMuteButton();
      this._updateLogoutBtn();
    } catch (e) {
      this._showAuthError('auth-login-error', e instanceof AuthError ? e : (e && e.message));
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = '登录'; }
    }
  },

  async doRegister() {
    this._clearAuthError('auth-register-error');
    const username = (document.getElementById('auth-register-username').value || '').trim();
    const password = document.getElementById('auth-register-password').value || '';
    const password2 = document.getElementById('auth-register-password2').value || '';
    const hint = (document.getElementById('auth-register-hint').value || '').trim();
    const hintAnswer = (document.getElementById('auth-register-answer').value || '').trim();
    const migrateEl = document.getElementById('auth-register-migrate');
    const migrate = !!(migrateEl && migrateEl.checked);

    if (!this._validateUsername(username)) {
      this._showAuthError('auth-register-error', 'BAD_USERNAME'); return;
    }
    if (password.length < 4) {
      document.getElementById('auth-register-error').textContent = '密码至少 4 位'; return;
    }
    if (password !== password2) {
      document.getElementById('auth-register-error').textContent = '两次密码不一致'; return;
    }
    if (!hint || !hintAnswer) {
      document.getElementById('auth-register-error').textContent = '请填写提示问题和答案'; return;
    }

    // 如果勾了迁移，把当前 this.data 作为初始数据；否则构建默认数据
    const dataToUpload = migrate ? this.data : this._buildDefaultData();

    const btn = document.querySelector('#auth-form .auth-btn-primary');
    if (btn) { btn.disabled = true; btn.textContent = '注册中…'; }
    try {
      const { passwordHash } = await Auth.register({
        username, password, hint, hintAnswer, data: dataToUpload
      });
      this._authUser = { username, passwordHash };
      localStorage.setItem('kids_hero_auth_v1', JSON.stringify(this._authUser));
      this.data = dataToUpload;
      this._applyDataCompat();
      this.decayAllPetStats();
      if (!this.data.battle.currentMonster && !this.data.battle.currentBoss) this.spawnMonster();
      this.data._lastSync = Date.now();
      localStorage.setItem('babyTaskGame_v3', JSON.stringify(this.data));
      this._bootSync = this.data._lastSync;
      this._cloudEverLoaded = true;
      this._cloudLoadPending = false;
      this._needMigration = false;
      this.showPage('home');
      this.renderHome();
      this.updateAllPoints();
      this.updateMuteButton();
      this._updateLogoutBtn();
    } catch (e) {
      this._showAuthError('auth-register-error', e instanceof AuthError ? e : (e && e.message));
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = '注册'; }
    }
  },

  async fetchHintForReset() {
    this._clearAuthError('auth-reset-error');
    const hintEl = document.getElementById('auth-reset-hint');
    if (hintEl) hintEl.textContent = '';
    const username = (document.getElementById('auth-reset-username').value || '').trim();
    if (!this._validateUsername(username)) {
      this._showAuthError('auth-reset-error', 'BAD_USERNAME'); return;
    }
    try {
      const hint = await Auth.fetchHint({ username });
      if (hintEl) hintEl.textContent = '提示：' + hint;
    } catch (e) {
      this._showAuthError('auth-reset-error', e instanceof AuthError ? e : (e && e.message));
    }
  },

  async doReset() {
    this._clearAuthError('auth-reset-error');
    const username = (document.getElementById('auth-reset-username').value || '').trim();
    const hintAnswer = (document.getElementById('auth-reset-answer').value || '').trim();
    const newPassword = document.getElementById('auth-reset-password').value || '';
    if (!this._validateUsername(username)) {
      this._showAuthError('auth-reset-error', 'BAD_USERNAME'); return;
    }
    if (!hintAnswer) {
      document.getElementById('auth-reset-error').textContent = '请填写答案'; return;
    }
    if (newPassword.length < 4) {
      document.getElementById('auth-reset-error').textContent = '新密码至少 4 位'; return;
    }
    const btn = document.querySelector('#auth-form .auth-btn-primary');
    if (btn) { btn.disabled = true; btn.textContent = '处理中…'; }
    try {
      const { passwordHash, data, _lastSync } = await Auth.reset({ username, hintAnswer, newPassword });
      this._authUser = { username, passwordHash };
      localStorage.setItem('kids_hero_auth_v1', JSON.stringify(this._authUser));
      this.data = (data && Object.keys(data).length > 0) ? data : this._buildDefaultData();
      this._applyDataCompat();
      this.decayAllPetStats();
      if (!this.data.battle.currentMonster && !this.data.battle.currentBoss) this.spawnMonster();
      this.data._lastSync = _lastSync || Date.now();
      localStorage.setItem('babyTaskGame_v3', JSON.stringify(this.data));
      this._bootSync = this.data._lastSync;
      this._cloudEverLoaded = true;
      this._cloudLoadPending = false;
      this.showPage('home');
      this.renderHome();
      this.updateAllPoints();
      this.updateMuteButton();
      this._updateLogoutBtn();
    } catch (e) {
      this._showAuthError('auth-reset-error', e instanceof AuthError ? e : (e && e.message));
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = '重置密码并登录'; }
    }
  },

  logout() {
    if (!confirm('确定要退出登录吗？\n本设备的数据会清除，但云端数据保留。')) return;
    localStorage.removeItem('kids_hero_auth_v1');
    localStorage.removeItem('babyTaskGame_v3');
    this._authUser = null;
    BGM.stop();
    location.reload();
  },

  // ---- 网络诊断 ----
  // 依次跑几个 probe，定位"Load failed"到底是什么层失败
  async runDiagnostics() {
    const modal = document.getElementById('diag-modal');
    const body = document.getElementById('diag-body');
    if (!modal || !body) return;
    modal.classList.add('show');

    const ua = navigator.userAgent;
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const connInfo = conn ? `${conn.effectiveType || '?'} (downlink: ${conn.downlink || '?'} Mbps)` : '未知';
    const ts = new Date().toLocaleString();

    const probes = [
      {
        name: '基础网络（Cloudflare DNS over HTTPS）',
        url: 'https://cloudflare-dns.com/dns-query?name=cloudflare.com&type=A',
        opts: { headers: { 'accept': 'application/dns-json' } }
      },
      {
        name: 'Worker 域名是否可达（kids-hero-sync.yiyuluzhb.workers.dev）',
        url: SYNC_URL + '/auth/hint',
        opts: {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'X-Auth-Token': SYNC_TOKEN },
          body: JSON.stringify({ username: '__diag_probe__' })
        }
      }
    ];

    body.innerHTML = `
      <div class="diag-row">⏳ 检测中…</div>
      <div class="diag-meta">设备: ${this._escapeHtml(ua)}</div>
      <div class="diag-meta">网络类型: ${this._escapeHtml(connInfo)}</div>
      <div class="diag-meta">时间: ${ts}</div>
    `;

    const results = [];
    let cryptoOk = false;
    try {
      await crypto.subtle.digest('SHA-256', new TextEncoder().encode('test'));
      cryptoOk = true;
    } catch(e) {}
    results.push({
      name: '浏览器加密 API（crypto.subtle）',
      ok: cryptoOk,
      detail: cryptoOk ? '可用' : '不可用 — 此设备可能 iOS 太老或为隐私模式'
    });

    for (const p of probes) {
      const t0 = Date.now();
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 8000);
      try {
        const res = await fetch(p.url, { ...p.opts, signal: ctrl.signal });
        clearTimeout(timer);
        const ms = Date.now() - t0;
        results.push({
          name: p.name,
          ok: true,
          detail: `HTTP ${res.status}，耗时 ${ms} ms`
        });
      } catch (e) {
        clearTimeout(timer);
        const ms = Date.now() - t0;
        const reason = e && e.name === 'AbortError' ? '8 秒超时' : (e && e.message || e);
        results.push({
          name: p.name,
          ok: false,
          detail: `失败（${ms} ms）: ${reason}`
        });
      }
    }

    const rowsHtml = results.map(r => `
      <div class="diag-row ${r.ok ? 'diag-ok' : 'diag-fail'}">
        <div class="diag-name">${r.ok ? '✅' : '❌'} ${this._escapeHtml(r.name)}</div>
        <div class="diag-detail">${this._escapeHtml(r.detail)}</div>
      </div>`).join('');

    body.innerHTML = `
      ${rowsHtml}
      <div class="diag-meta">设备: ${this._escapeHtml(ua)}</div>
      <div class="diag-meta">网络类型: ${this._escapeHtml(connInfo)}</div>
      <div class="diag-meta">时间: ${ts}</div>
    `;

    // 给"复制结果"按钮挂载文本
    const copyBtn = document.getElementById('diag-copy');
    if (copyBtn) {
      const summary = results.map(r => `${r.ok ? '[OK]' : '[FAIL]'} ${r.name}: ${r.detail}`).join('\n');
      const fullText = `=== 网络诊断 ===\n时间: ${ts}\n设备: ${ua}\n网络: ${connInfo}\n\n${summary}`;
      copyBtn.onclick = async () => {
        try {
          await navigator.clipboard.writeText(fullText);
          copyBtn.textContent = '✓ 已复制';
          setTimeout(() => { copyBtn.textContent = '📋 复制结果'; }, 2000);
        } catch (e) {
          // clipboard API 在不安全上下文不可用，回退到 prompt
          prompt('请手动复制下面的诊断结果：', fullText);
        }
      };
    }
  },

  closeDiag() {
    const modal = document.getElementById('diag-modal');
    if (modal) modal.classList.remove('show');
  },

  // ---- 页面导航 ----
  goToPage(page) {
    this.showPage(page);
    if (page === 'home') this.renderHome();
    if (page === 'house') this.renderHouse();
    if (page === 'shop') this.renderShop();
    if (page === 'battle') this.renderBattle();
    if (page === 'task') this.renderTasks();
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

  // ---- 钱 ----
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

  // ---- 任务 ----
  renderTasks() {
    const today = new Date().toISOString().slice(0, 10);
    const todayDone = this.data.taskHistory.filter(t => t.date === today);
    const groups = this.getActiveTasksByCategory();
    const html = TASK_CATEGORY_ORDER.map(cat => {
      const tasks = groups[cat];
      if (!tasks || tasks.length === 0) return '';
      const meta = TASK_CATEGORIES[cat];
      const itemsHTML = tasks.map(task => {
        const isPenalty = task.points < 0;
        return `<div class="task-item ${isPenalty ? 'task-penalty' : ''}">
          <div class="task-icon">${task.icon}</div>
          <div class="task-info"><div class="task-name">${task.name}</div><div class="task-reward ${isPenalty ? 'penalty' : ''}">${isPenalty ? '' : '&#9733; +'}${task.points} 钱</div></div>
          <button class="task-done-btn ${isPenalty ? 'task-penalty-btn' : ''}" onclick="app.completeTask('${task.id}',event)">${isPenalty ? '&#10007;' : '&#10003;'}</button>
        </div>`;
      }).join('');
      return `<div class="task-group task-group-${cat}">
        <div class="task-group-header">
          <span class="task-group-label">${meta.label}</span>
          <span class="task-group-desc">${meta.desc}</span>
        </div>
        ${itemsHTML}
      </div>`;
    }).join('');
    document.getElementById('task-list').innerHTML = html;
    const tl = document.getElementById('today-list');
    tl.innerHTML = todayDone.length === 0 ? '<div class="today-empty">今天还没有完成任务哦~</div>'
      : todayDone.map(t => `<div class="today-item"><span class="check">&#10003;</span><span>${t.task}</span><span style="margin-left:auto;color:#B8860B">+${t.points}</span></div>`).join('');
  },
  completeTask(id, e) {
    const task = this.getActiveTasks().find(t => t.id === id);
    if (!task) return;
    if (task.points < 0) {
      // 扣分：不低于0
      if (this.data.points <= 0) { this.showToast('钱已经是0了'); return; }
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
  showTaskManager() {
    const cfg = this.data.taskConfig || { overrides: {}, custom: [], order: {} };
    const overrides = cfg.overrides || {};
    const groups = this.getActiveTasksByCategory();
    // 同时把已禁用的内置任务也显示出来（用于重新启用）
    const allByCat = { basic: [], growth: [], special: [], penalty: [] };
    TASKS.forEach(t => allByCat[t.category].push({ ...t, _builtin: true }));
    (cfg.custom || []).forEach(t => {
      const cat = t.category || 'special';
      allByCat[cat].push({ ...t, _builtin: false });
    });
    // 应用顺序
    const order = cfg.order || {};
    for (const cat of Object.keys(allByCat)) {
      const ord = order[cat] || [];
      const idx = id => { const i = ord.indexOf(id); return i === -1 ? Number.MAX_SAFE_INTEGER : i; };
      allByCat[cat].sort((a, b) => idx(a.id) - idx(b.id));
    }
    const emojis = ['💧','🎵','🎨','🏊','🧮','✏️','🍎','🚿','💊','🙏','🧹','🎯','🌳','📝','🎶','🤝','🧘','🍳','👟','🎮'];

    let html = '';
    for (const cat of TASK_CATEGORY_ORDER) {
      const meta = TASK_CATEGORIES[cat];
      const items = allByCat[cat];
      html += `<div class="task-mgr-section task-mgr-section-${cat}"><h4>${meta.label}</h4>`;
      if (items.length === 0) {
        html += '<div class="task-mgr-empty">这个分类还没有任务</div>';
      } else {
        html += items.map((t, i) => {
          const isFirst = i === 0;
          const isLast = i === items.length - 1;
          if (t._builtin) {
            const o = overrides[t.id] || {};
            const enabled = o.enabled !== false;
            const pts = o.points !== undefined ? o.points : t.points;
            return `<div class="task-mgr-row">
              <span class="task-mgr-icon">${t.icon}</span>
              <span class="task-mgr-name">${t.name}</span>
              <button class="task-mgr-move" onclick="app.moveTask('${t.id}','up')" ${isFirst ? 'disabled' : ''}>↑</button>
              <button class="task-mgr-move" onclick="app.moveTask('${t.id}','down')" ${isLast ? 'disabled' : ''}>↓</button>
              <input type="number" class="task-mgr-pts" value="${pts}" onchange="app.updateTaskPoints('${t.id}',this.value)">
              <button class="task-mgr-toggle ${enabled ? 'on' : 'off'}" onclick="app.toggleTask('${t.id}')">${enabled ? '开' : '关'}</button>
            </div>`;
          } else {
            return `<div class="task-mgr-row">
              <span class="task-mgr-icon">${t.icon}</span>
              <span class="task-mgr-name">${t.name}</span>
              <button class="task-mgr-move" onclick="app.moveTask('${t.id}','up')" ${isFirst ? 'disabled' : ''}>↑</button>
              <button class="task-mgr-move" onclick="app.moveTask('${t.id}','down')" ${isLast ? 'disabled' : ''}>↓</button>
              <input type="number" class="task-mgr-pts" value="${t.points}" onchange="app.updateCustomTaskPoints('${t.id}',this.value)">
              <button class="task-mgr-del" onclick="app.removeCustomTask('${t.id}')">✕</button>
            </div>`;
          }
        }).join('');
      }
      html += '</div>';
    }

    html += '<div class="task-mgr-section"><h4>添加新任务</h4>';
    html += `<div class="task-mgr-add">
      <div class="task-mgr-emoji-pick" id="task-emoji-pick">
        ${emojis.map(e => `<span class="emoji-opt" onclick="app.pickTaskEmoji('${e}')">${e}</span>`).join('')}
      </div>
      <div class="task-mgr-add-row">
        <span class="task-mgr-icon" id="new-task-emoji">❓</span>
        <input type="text" id="new-task-name" class="task-mgr-input" placeholder="任务名称" maxlength="12">
        <input type="number" id="new-task-pts" class="task-mgr-pts" value="5" min="-20" max="50">
      </div>
      <div class="task-mgr-add-row task-mgr-cat-row">
        <span class="task-mgr-cat-label">分类：</span>
        <select id="new-task-cat" class="task-mgr-cat-sel">
          <option value="basic">基础任务</option>
          <option value="growth">成长任务</option>
          <option value="special" selected>特别奖励</option>
          <option value="penalty">扣分项</option>
        </select>
        <button class="task-mgr-add-btn" onclick="app.addCustomTask()">+ 添加</button>
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
    const category = document.getElementById('new-task-cat').value || 'special';
    if (!name) { this.showToast('请输入任务名称'); return; }
    if (icon === '❓') { this.showToast('请选择一个图标'); return; }
    const id = 'custom_' + Date.now();
    this.data.taskConfig.custom.push({ id, name, icon, points: pts, category });
    this.saveData();
    this.showTaskManager();
  },

  removeCustomTask(id) {
    this.data.taskConfig.custom = this.data.taskConfig.custom.filter(t => t.id !== id);
    // 同步从 order 中清掉
    const order = this.data.taskConfig.order || {};
    for (const cat of Object.keys(order)) {
      order[cat] = (order[cat] || []).filter(x => x !== id);
    }
    this.saveData();
    this.showTaskManager();
  },

  // 在分类内上/下移动任务
  moveTask(id, dir) {
    // 找到任务及其分类
    const builtin = TASKS.find(t => t.id === id);
    const customT = (this.data.taskConfig.custom || []).find(t => t.id === id);
    const cat = builtin ? builtin.category : (customT ? (customT.category || 'special') : null);
    if (!cat) return;
    if (!this.data.taskConfig.order) this.data.taskConfig.order = {};
    // 按当前展示顺序构造一个完整的 id 列表
    const items = [];
    TASKS.filter(t => t.category === cat).forEach(t => items.push(t.id));
    (this.data.taskConfig.custom || []).forEach(t => {
      if ((t.category || 'special') === cat) items.push(t.id);
    });
    // 应用现有 order
    const ord = this.data.taskConfig.order[cat] || [];
    const idx = x => { const i = ord.indexOf(x); return i === -1 ? Number.MAX_SAFE_INTEGER : i; };
    items.sort((a, b) => idx(a) - idx(b));
    const i = items.indexOf(id);
    if (i === -1) return;
    const j = dir === 'up' ? i - 1 : i + 1;
    if (j < 0 || j >= items.length) return;
    [items[i], items[j]] = [items[j], items[i]];
    this.data.taskConfig.order[cat] = items;
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

    // 心愿商店走专门的渲染路径
    if (this.shopCategory === 'wish') {
      this.renderWishShop();
      return;
    }

    const grid = document.getElementById('shop-grid');
    const items = SHOP_ITEMS[this.shopCategory].items.filter(i => !i.bossOnly);
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
      const slots = (this.data.petSlots && this.data.petSlots.unlockedCount) || 2;
      const parkCount = (this.data.petPark && this.data.petPark[charId] && this.data.petPark[charId].length) || 0;
      notice = `<div class="shop-notice">${char.name}的家：${petCount} / ${slots} 只宠物` +
               (parkCount > 0 ? ` · 乐园里 ${parkCount} 只` : '') + `</div>`;
      if (slots < 4) {
        const nextCost = slots === 2 ? 300 : 800;
        notice += `<button class="pet-slot-unlock-btn" onclick="app.unlockPetSlot()">解锁第 ${slots + 1} 个宠物位（${nextCost} 钱）</button>`;
      }
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
      const tierBadge = item.tier === 'rare'
        ? '<span class="shop-tier-badge rare">稀有</span>'
        : (item.tier === 'common' ? '<span class="shop-tier-badge common">普通</span>' : '');
      return `<div class="shop-item ${owned ? 'owned' : ''} ${item.tier ? 'tier-' + item.tier : ''}" onclick="app.tryBuy('${item.id}')">
        ${tierBadge}
        <div class="shop-item-icon">${item.icon}</div>
        <div class="shop-item-name">${item.name}</div>
        <div class="shop-item-price">${owned ? '已拥有' : '&#9733; ' + item.price}</div>
      </div>`;
    }).join('');
  },

  switchShopTab(cat) { this.shopCategory = cat; this.renderShop(); },

  // ---- 心愿商店 ----
  renderWishShop() {
    const grid = document.getElementById('shop-grid');
    const items = (this.data.wishShop && this.data.wishShop.items) || [];
    const visibleItems = items.filter(i => i.status === 'active' || i.status === 'pending');
    const points = this.data.points || 0;

    let html = `<div class="wish-header">
      <div class="wish-subtitle">把每天赚到的钱存起来，换一个真正想要的小心愿 💝</div>
      <button class="wish-mgr-btn" onclick="app.showWishManager()">⚙️ 家长管理</button>
    </div>`;

    if (visibleItems.length === 0) {
      html += '<div class="wish-empty">还没有心愿哦~<br>请爸爸妈妈在"家长管理"里添加</div>';
    } else {
      html += '<div class="wish-grid">' + visibleItems.map(it => {
        const icon = it.icon || '🎁';
        const rmb = it.rmbPrice || 0;
        const game = it.gamePrice || rmb * WISH_RATE;
        if (it.status === 'pending') {
          return `<div class="wish-card wish-pending">
            <div class="wish-icon">${icon}</div>
            <div class="wish-name">${this._esc(it.name)}</div>
            <div class="wish-rmb">参考价 ¥${rmb}</div>
            <div class="wish-pending-tag">⏳ 等待发放中...</div>
          </div>`;
        }
        const enough = points >= game;
        return `<div class="wish-card ${enough ? 'wish-ready' : ''}">
          <div class="wish-icon">${icon}</div>
          <div class="wish-name">${this._esc(it.name)}</div>
          <div class="wish-rmb">参考价 ¥${rmb}</div>
          <div class="wish-game-price">⭐ 需要 ${game} 钱</div>
          ${enough
            ? `<button class="wish-redeem-btn" onclick="app.redeemWish('${it.id}')">我要兑换 ✨</button>`
            : `<div class="wish-short">还差 ${game - points} 钱</div>`}
        </div>`;
      }).join('') + '</div>';
    }
    grid.innerHTML = html;
  },

  // 简单 HTML 转义，防止家长输入的心愿名带特殊字符破坏 UI
  _esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  },

  redeemWish(wishId) {
    const item = (this.data.wishShop.items || []).find(i => i.id === wishId);
    if (!item) return;
    if (item.status !== 'active') return;
    const cost = item.gamePrice || (item.rmbPrice * WISH_RATE);
    if (this.data.points < cost) { this.showToast('钱不够哦~'); return; }
    // 防误点二次确认
    if (!confirm(`确认兑换"${item.name}"吗？\n将扣除 ${cost} 钱。`)) return;
    if (this.data.points < cost) { this.showToast('钱不够哦~'); return; }
    this.data.points -= cost;
    item.status = 'pending';
    item.redeemedAt = Date.now();
    this.saveData();
    this.updateAllPoints();
    SFX.play('buy');
    this.celebrate();
    this.showToast('兑换成功！爸爸妈妈会帮你准备这个心愿 ✨');
    this.renderShop();
  },

  // ---- 心愿商店：家长管理 ----
  showWishManager() {
    const items = (this.data.wishShop && this.data.wishShop.items) || [];
    const active = items.filter(i => i.status === 'active');
    const pending = items.filter(i => i.status === 'pending');
    const completed = items.filter(i => i.status === 'completed').slice(-5).reverse();
    const emojis = ['🎁','🍫','🍬','🍭','🎈','🚀','🎮','🚗','🧸','🎨','📚','🍦','🎪','⚽','🪀','🏰','🦖','🎵','🌟','💫'];

    let html = '<div class="wish-mgr-section"><h4>添加新心愿</h4>';
    html += `<div class="wish-mgr-add">
      <div class="task-mgr-emoji-pick">
        ${emojis.map(e => `<span class="emoji-opt" onclick="app.pickWishIcon('${e}')">${e}</span>`).join('')}
      </div>
      <div class="wish-mgr-add-row">
        <span class="task-mgr-icon" id="new-wish-icon">🎁</span>
        <input type="text" id="new-wish-name" class="task-mgr-input" placeholder="心愿名称" maxlength="20">
      </div>
      <div class="wish-mgr-add-row">
        <span class="wish-mgr-label">参考价：</span>
        <input type="number" id="new-wish-rmb" class="wish-mgr-rmb" placeholder="0" min="0" oninput="app.syncWishGamePrice()">
        <span class="wish-mgr-unit">元</span>
        <span class="wish-mgr-arrow">→</span>
        <input type="number" id="new-wish-game" class="wish-mgr-game" placeholder="0" min="0">
        <span class="wish-mgr-unit">钱</span>
      </div>
      <div class="wish-mgr-hint">默认 1 元 = ${WISH_RATE} 钱（可手动改"钱"那一栏覆盖）</div>
      <button class="task-mgr-add-btn wish-mgr-add-btn" onclick="app.addWishItem()">+ 添加心愿</button>
    </div>`;
    html += '</div>';

    html += `<div class="wish-mgr-section"><h4>进行中的心愿（${active.length}）</h4>`;
    if (active.length === 0) {
      html += '<div class="task-mgr-empty">还没有上架的心愿</div>';
    } else {
      html += active.map(it => `<div class="wish-mgr-row">
        <span class="task-mgr-icon">${it.icon || '🎁'}</span>
        <span class="wish-mgr-name">${this._esc(it.name)}</span>
        <span class="wish-mgr-price">¥${it.rmbPrice} / ⭐${it.gamePrice}</span>
        <button class="task-mgr-del" onclick="app.delistWishItem('${it.id}')" title="下架">✕</button>
      </div>`).join('');
    }
    html += '</div>';

    html += `<div class="wish-mgr-section"><h4>等待发放（${pending.length}）</h4>`;
    if (pending.length === 0) {
      html += '<div class="task-mgr-empty">没有等待发放的心愿</div>';
    } else {
      html += pending.map(it => `<div class="wish-mgr-row wish-mgr-pending">
        <span class="task-mgr-icon">${it.icon || '🎁'}</span>
        <span class="wish-mgr-name">${this._esc(it.name)}</span>
        <span class="wish-mgr-price">⭐${it.gamePrice}</span>
        <button class="wish-mgr-fulfill" onclick="app.fulfillWishItem('${it.id}')">已发放</button>
      </div>`).join('');
    }
    html += '</div>';

    if (completed.length > 0) {
      html += `<div class="wish-mgr-section"><h4>最近完成（${completed.length}）</h4>`;
      html += completed.map(it => {
        const date = it.fulfilledAt ? new Date(it.fulfilledAt).toLocaleDateString() : '';
        return `<div class="wish-mgr-row wish-mgr-done">
          <span class="task-mgr-icon">${it.icon || '🎁'}</span>
          <span class="wish-mgr-name">${this._esc(it.name)}</span>
          <span class="wish-mgr-date">${date}</span>
        </div>`;
      }).join('');
      html += '</div>';
    }

    document.getElementById('wish-mgr-content').innerHTML = html;
    document.getElementById('wish-mgr-modal').classList.add('show');
  },

  pickWishIcon(emoji) {
    document.getElementById('new-wish-icon').textContent = emoji;
  },

  syncWishGamePrice() {
    const rmb = parseInt(document.getElementById('new-wish-rmb').value) || 0;
    document.getElementById('new-wish-game').value = rmb * WISH_RATE;
  },

  addWishItem() {
    const name = document.getElementById('new-wish-name').value.trim();
    const icon = document.getElementById('new-wish-icon').textContent;
    const rmb = parseInt(document.getElementById('new-wish-rmb').value) || 0;
    let game = parseInt(document.getElementById('new-wish-game').value);
    if (!name) { this.showToast('请输入心愿名称'); return; }
    if (rmb <= 0 && (!game || game <= 0)) { this.showToast('请填写价格'); return; }
    if (!game || game <= 0) game = rmb * WISH_RATE;
    this.data.wishShop.items.push({
      id: 'wish_' + Date.now(),
      name, icon,
      rmbPrice: rmb,
      gamePrice: game,
      status: 'active',
      createdAt: Date.now(),
      redeemedAt: null,
      fulfilledAt: null
    });
    this.saveData();
    this.showWishManager();
  },

  delistWishItem(id) {
    if (!confirm('确认下架这个心愿吗？孩子将看不到它。')) return;
    const it = this.data.wishShop.items.find(x => x.id === id);
    if (!it) return;
    it.status = 'delisted';
    this.saveData();
    this.showWishManager();
  },

  fulfillWishItem(id) {
    const it = this.data.wishShop.items.find(x => x.id === id);
    if (!it) return;
    it.status = 'completed';
    it.fulfilledAt = Date.now();
    this.saveData();
    this.showWishManager();
    if (this.currentPage === 'shop') this.renderShop();
  },

  closeWishManager() {
    document.getElementById('wish-mgr-modal').classList.remove('show');
    if (this.currentPage === 'shop' && this.shopCategory === 'wish') this.renderShop();
  },

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

    // 宠物位上限检查
    if (cat === 'pet') {
      const charId = this.data.currentCharacter;
      const house = this.data.houses[charId];
      const slots = (this.data.petSlots && this.data.petSlots.unlockedCount) || 2;
      if ((house.pets || []).length >= slots) {
        const slotMsg = slots < 4
          ? `家里宠物位满了（${slots}/${slots}）！\n先把一只送去宠物乐园，或解锁第 ${slots + 1} 个宠物位。`
          : `家里宠物位满了（4/4）！\n先把一只送去宠物乐园再买。`;
        alert(slotMsg);
        return;
      }
    }

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
      document.getElementById('buy-name').textContent = '钱不够哦~';
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

    // 状态条（3 项）
    document.getElementById('pet-stats').innerHTML = [
      { icon: '🍽️', key: 'hunger', label: '饱食', cls: 'meat' },
      { icon: '🛁', key: 'clean',  label: '清洁', cls: 'clean' },
      { icon: '🎾', key: 'happy',  label: '快乐', cls: 'happy' }
    ].map(s => `
      <div class="pet-stat-row">
        <span class="pet-stat-icon">${s.icon}</span>
        <div class="pet-stat-bar-wrap">
          <div class="pet-stat-bar ${s.cls}" style="width:${status[s.key] || 0}%"></div>
        </div>
        <span class="pet-stat-val">${status[s.key] || 0}</span>
      </div>
    `).join('');

    // 操作按钮（3 项 — 每次都扣 4 钱）
    const today = this.getToday();
    if (status.lastActionDate !== today) {
      status.todayActions = { feed: 0, bath: 0, play: 0 };
      status.lastActionDate = today;
      this.saveData();
    }
    const cost = this.PET_ACTION_COST;
    const actions = [
      { key: 'feed', icon: '🍽️', label: '喂饭', cls: 'pet-action-feed-rice', stat: 'hunger' },
      { key: 'play', icon: '🎾', label: '陪玩', cls: 'pet-action-play',      stat: 'happy' },
      { key: 'bath', icon: '🛁', label: '洗澡', cls: 'pet-action-bath',      stat: 'clean' }
    ];
    document.getElementById('pet-nurture-actions').innerHTML = actions.map(a => {
      const used = (status.todayActions[a.key] || 0) >= 1;
      const isMax = (status[a.stat] || 0) >= 100;
      const disabled = used || isMax;
      const costText = used ? '今日已做' : (isMax ? '已满' : ('⭐ ' + cost));
      return `<button class="pet-action-btn ${a.cls} ${disabled ? 'disabled' : ''}"
        onclick="app.doPetAction('${petId}', '${a.key}')"
        ${disabled ? 'disabled' : ''}>
        <span class="action-icon">${a.icon}</span>
        <span>${a.label}</span>
        <span class="action-cost">${costText}</span>
      </button>`;
    }).join('');
  },

  doPetAction(petId, action) {
    const charId = this.data.currentCharacter;
    const status = this.data.petStatus[charId]?.[petId];
    if (!status) return;

    const statMap = { feed: 'hunger', bath: 'clean', play: 'happy' };
    const stat = statMap[action];
    if (!stat) return;
    if ((status[stat] || 0) >= 100) { this.showToast('已经满了哦~'); return; }
    if ((status.todayActions[action] || 0) >= 1) { this.showToast('今天已经做过啦~'); return; }

    const cost = this.PET_ACTION_COST;
    if (this.data.points < cost) { this.showToast('钱不够哦~'); return; }

    this.data.points -= cost;
    status.todayActions[action] = (status.todayActions[action] || 0) + 1;
    // 每次操作 +30
    status[stat] = Math.min(100, (status[stat] || 0) + 30);

    this.saveData();
    this.updateAllPoints();

    // 音效 + 反馈动画
    SFX.play('feed');
    this.playNurtureAnim(action, petId);
  },

  playNurtureAnim(action, petId) {
    const layer = document.getElementById('pet-anim-layer');
    const petEl = document.getElementById('pet-emoji-display');
    layer.innerHTML = '';

    const foodMap = {
      feed: ['🍖','🥬','🍚','🍗','🍙']
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
    const slots = (this.data.petSlots && this.data.petSlots.unlockedCount) || 2;
    const parkCount = (this.data.petPark && this.data.petPark[charId] && this.data.petPark[charId].length) || 0;

    let header = `<div class="pet-list-header">
      <span>家里 ${pets.length} / ${slots} 只</span>
      <button class="pet-park-btn" onclick="app.showPetPark()">🏞️ 宠物乐园 (${parkCount})</button>
    </div>`;
    // 解锁更多宠物位
    if (slots < 4) {
      const nextCost = slots === 2 ? 300 : 800;
      header += `<button class="pet-slot-unlock-btn" onclick="app.unlockPetSlot()">解锁第 ${slots + 1} 个宠物位（${nextCost} 钱）</button>`;
    }

    let body;
    if (pets.length === 0) {
      body = '<div class="pet-empty">还没有宠物哦~<br>去商店买一只吧！</div>';
    } else {
      body = pets.map(pet => {
        const status = this.data.petStatus[charId]?.[pet.id];
        const mood = this.getPetMood(charId, pet.id);
        const hg = status?.hunger || 0;
        const c = status?.clean || 0;
        const hp = status?.happy || 0;
        return `<div class="pet-list-card">
          <div class="pet-list-main" onclick="app.openPetNurture('${pet.id}')">
            <div class="pet-list-icon">${pet.icon}</div>
            <div class="pet-list-info">
              <div class="pet-list-name">${pet.name}</div>
              <div class="pet-list-bars">
                <div class="pet-mini-bar"><div class="pet-mini-bar-fill meat" style="width:${hg}%"></div></div>
                <div class="pet-mini-bar"><div class="pet-mini-bar-fill clean" style="width:${c}%"></div></div>
                <div class="pet-mini-bar"><div class="pet-mini-bar-fill happy" style="width:${hp}%"></div></div>
              </div>
            </div>
            <div class="pet-list-mood ${mood}"></div>
          </div>
          <button class="pet-send-park-btn" onclick="app.sendPetToPark('${pet.id}')" title="送去宠物乐园">🏞️</button>
        </div>`;
      }).join('');
    }
    grid.innerHTML = header + body;
    document.getElementById('pet-list-modal').classList.add('show');
  },

  // ---- 宠物乐园 ----
  showPetPark() {
    const charId = this.data.currentCharacter;
    const parkIds = (this.data.petPark && this.data.petPark[charId]) || [];
    const grid = document.getElementById('pet-list-grid');
    const slots = (this.data.petSlots && this.data.petSlots.unlockedCount) || 2;
    const homeCount = (this.data.houses[charId].pets || []).length;

    let header = `<div class="pet-list-header">
      <span>乐园里 ${parkIds.length} 只</span>
      <button class="pet-park-btn" onclick="app.showPetList()">🏠 回到家里</button>
    </div>`;

    let body;
    if (parkIds.length === 0) {
      body = '<div class="pet-empty">乐园里还没有宠物哦~</div>';
    } else {
      body = parkIds.map(id => {
        const pet = this.findItem(id);
        if (!pet) return '';
        const canBring = homeCount < slots;
        return `<div class="pet-list-card">
          <div class="pet-list-main">
            <div class="pet-list-icon">${pet.icon}</div>
            <div class="pet-list-info">
              <div class="pet-list-name">${pet.name}</div>
              <div class="pet-list-park-hint">在乐园里玩得很开心~</div>
            </div>
          </div>
          <button class="pet-bring-back-btn ${canBring ? '' : 'disabled'}" onclick="app.bringPetHome('${pet.id}')" ${canBring ? '' : 'disabled'}>
            ${canBring ? '接回家 ⭐ 20' : '家里满了'}
          </button>
        </div>`;
      }).join('');
    }
    grid.innerHTML = header + body;
    document.getElementById('pet-list-modal').classList.add('show');
  },

  sendPetToPark(petId) {
    const charId = this.data.currentCharacter;
    const house = this.data.houses[charId];
    const idx = house.pets.indexOf(petId);
    if (idx === -1) return;
    house.pets.splice(idx, 1);
    if (!this.data.petPark[charId]) this.data.petPark[charId] = [];
    this.data.petPark[charId].push(petId);
    this.saveData();
    SFX.play('buy');
    this.showToast('已送去宠物乐园 🏞️');
    this.showPetList();
    if (this.currentPage === 'house') this.renderHouse();
    if (this.currentPage === 'battle') this.renderBattle();
  },

  bringPetHome(petId) {
    const charId = this.data.currentCharacter;
    const slots = this.data.petSlots.unlockedCount;
    const house = this.data.houses[charId];
    if ((house.pets || []).length >= slots) {
      this.showToast('家里宠物位满了~');
      return;
    }
    if (this.data.points < 20) { this.showToast('钱不够哦~'); return; }
    const park = this.data.petPark[charId] || [];
    const idx = park.indexOf(petId);
    if (idx === -1) return;
    this.data.points -= 20;
    park.splice(idx, 1);
    house.pets.push(petId);
    // 如果乐园回来的宠物没有 status，初始化一下
    if (!this.data.petStatus[charId]) this.data.petStatus[charId] = {};
    if (!this.data.petStatus[charId][petId]) this.initPetStatus(charId, petId);
    this.saveData();
    this.updateAllPoints();
    SFX.play('buy');
    this.showToast('欢迎回家~');
    this.showPetPark();
    if (this.currentPage === 'house') this.renderHouse();
  },

  unlockPetSlot() {
    const slots = this.data.petSlots.unlockedCount;
    if (slots >= 4) return;
    const cost = slots === 2 ? 300 : 800;
    if (this.data.points < cost) { this.showToast('钱不够哦~'); return; }
    if (!confirm(`确认花 ${cost} 钱解锁第 ${slots + 1} 个宠物位？`)) return;
    this.data.points -= cost;
    this.data.petSlots.unlockedCount = slots + 1;
    this.saveData();
    this.updateAllPoints();
    SFX.play('buy');
    this.celebrate();
    this.showToast(`第 ${slots + 1} 个宠物位已解锁！`);
    this.showPetList();
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
    this.data.battle.currentBoss = { ...b, hp: b.maxHp, spawnedAt: Date.now() };
    this.data.battle.currentMonster = null;
    this.saveData();
  },

  // 检查 BOSS 是否超时（3 天没打完则 BOSS 逃跑）
  // 返回 true 表示 BOSS 已逃跑（已清空 currentBoss），调用方应继续处理
  _checkBossExpiry() {
    const boss = this.data.battle.currentBoss;
    if (!boss) return false;
    const spawnedAt = boss.spawnedAt || 0;
    if (spawnedAt === 0) return false;  // 老数据无 spawnedAt 不强制
    const THREE_DAYS = 3 * 24 * 3600 * 1000;
    if (Date.now() - spawnedAt > THREE_DAYS) {
      const name = boss.name;
      this.data.battle.currentBoss = null;
      this.saveData();
      // 让 alert 在下一帧弹（避免阻塞渲染）
      setTimeout(() => alert(`👑 ${name} 逃跑了！下次再战！`), 100);
      return true;
    }
    return false;
  },

  getBattleTarget() {
    return this.data.battle.currentBoss || this.data.battle.currentMonster;
  },

  isBossBattle() {
    return !!this.data.battle.currentBoss;
  },

  canFreeAttack() { return this.data.battle.lastFreeAttackDate !== this.getToday(); },

  canPetAttack(petId) {
    if (this.data.battle.lastPetAttackDates[petId] === this.getToday()) return false;
    // 必须当天三项照顾全部完成
    return this.hasFullCareToday(this.data.currentCharacter, petId);
  },

  // 区分"今日已攻击" vs "未照顾完"，让按钮文案更准确
  petAttackBlockReason(petId) {
    if (this.data.battle.lastPetAttackDates[petId] === this.getToday()) return 'used';
    if (!this.hasFullCareToday(this.data.currentCharacter, petId)) return 'care';
    return null;
  },

  getCurrentPets() {
    const charId = this.data.currentCharacter;
    const house = this.data.houses[charId];
    return (house.pets || []).map(id => this.findItem(id)).filter(Boolean);
  },

  renderBattle() {
    // BOSS 限时检查（如逃跑则清空，让下一行重新刷小怪）
    this._checkBossExpiry();
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
        <span class="atk-cost">&#9733; 10 钱</span><span class="atk-dmg">伤害 3</span>
      </button>
      <button class="atk-btn atk-ultimate" onclick="app.attack('ultimate')">
        <span class="atk-icon">💥</span><span class="atk-label">必杀技</span>
        <span class="atk-cost">&#9733; 25 钱</span><span class="atk-dmg">伤害 8</span>
      </button>`;
    document.getElementById('battle-actions').innerHTML = actionsHTML;

    // 宠物攻击按钮
    const pets = this.getCurrentPets();
    const petArea = document.getElementById('pet-actions');
    if (pets.length === 0) {
      petArea.innerHTML = '<div class="pet-hint">养宠物后，宠物也能帮你打怪兽哦！</div>';
    } else {
      petArea.innerHTML = '<div class="pet-actions-title">🐾 宠物助攻 <span class="pet-actions-hint">（今日喂饭+陪玩+洗澡都做完才能助攻）</span></div>' + pets.map(pet => {
        const canAtk = this.canPetAttack(pet.id);
        const blockReason = this.petAttackBlockReason(pet.id);
        let stateLabel;
        if (canAtk) stateLabel = ' 攻击！';
        else if (blockReason === 'used') stateLabel = ' (今日已攻击)';
        else stateLabel = ' (照顾完才能助攻)';
        return `<button class="pet-atk-btn ${canAtk ? '' : 'disabled'}" onclick="app.petAttack('${pet.id}')">
          <span class="pet-atk-icon">${pet.icon}</span>
          <span class="pet-atk-info">${pet.name}${stateLabel}</span>
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
    if (cost > 0 && this.data.points < cost) { this.showBattleLog('钱不够哦~', '#FF6B6B'); return; }
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
      // 发奖励：钱
      const reward = b.rewardPoints || 50;
      this.data.points += reward;
      // 发奖励：BOSS 专属装饰加入当前角色的小屋（如已有则跳过，避免重复击败同一 BOSS 时多次添加）
      let rewardItem = null;
      if (b.rewardItem) {
        const charId = this.data.currentCharacter;
        const house = this.data.houses[charId];
        if (!house.items.includes(b.rewardItem.id)) {
          house.items.push(b.rewardItem.id);
        }
        rewardItem = b.rewardItem;
      }
      this.saveData();
      this.updateAllPoints();
      SFX.play('bossVictory');
      this.celebrate();
      // 再撒一轮彩带，加强效果
      setTimeout(() => this.celebrate(), 300);
      if (iconEl) iconEl.textContent = '👑';
      if (titleEl) { titleEl.textContent = 'BOSS 被击败啦！'; titleEl.style.color = '#FFB300'; }
      const itemLine = rewardItem
        ? `<br><span style="color:#666;font-size:15px">获得专属装饰：${rewardItem.icon} ${rewardItem.name}</span>`
        : '';
      textEl.innerHTML = `你打败了 <b>${b.name}</b>！<br><span style="color:#FFB300;font-size:20px;font-weight:800">+${reward} 钱</span>${itemLine}`;
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
      // 刚击败 BOSS 的话直接回到小怪（避免连续刷 BOSS）
      if (this._justDefeatedBoss) {
        this._justDefeatedBoss = false;
        this.spawnMonster();
      } else if (Math.random() < 0.25) {
        // 25% 随机触发 BOSS
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
