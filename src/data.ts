export interface Fact {
  label: string
  value: string
  note?: string
}

export type AvatarKind = 'pig' | 'sheep' | 'rabbit'
export type Accessory = 'bow' | 'dino' | 'glasses' | 'flower' | 'none'

export interface Character {
  id: string
  name: string
  en: string
  role: string
  desc: string
  kind: AvatarKind
  tone: string
  outfit: string
  accessory: Accessory
  tag: string
}

export interface Theme {
  id: string
  title: string
  en: string
  desc: string
  icon: 'puddle' | 'cake' | 'playground' | 'grandparents' | 'dino' | 'bike'
  color: string
}

export const facts: Fact[] = [
  { label: '原名', value: 'Peppa Pig', note: '中文名「小猪佩奇」' },
  { label: '别名', value: '粉红猪小妹', note: '中国香港、中国台湾地区译名' },
  { label: '类型', value: '英国学龄前动画', note: '亲子、益智、日常生活' },
  { label: '首播', value: '2004 年 5 月 31 日', note: '英国电视五台 / Nick Jr.' },
  { label: '创作者', value: 'Neville Astley、Mark Baker', note: '内维尔·阿斯特利、马克·贝克' },
  { label: '单集时长', value: '约 5 分钟', note: '短篇单元剧形式' },
  { label: '制作', value: 'Astley Baker Davies', note: '现由 Hasbro Entertainment 与 Karrot Animation 制作' },
  { label: '播出范围', value: '180 多个国家与地区', note: '2015 年 6 月引进中国大陆' },
]

export const awards: string[] = [
  '法国安纳西国际动画节大奖',
  'BAFTA 最佳学前动画片奖',
  '英国儿童学会奖',
]

export const characters: Character[] = [
  {
    id: 'peppa',
    name: '佩奇',
    en: 'Peppa Pig',
    role: '主角 · 5 岁',
    desc: '有点小主意、爱笑也爱指挥。最喜欢跳泥坑、扮仙女公主，还有意大利面和巧克力蛋糕。',
    kind: 'pig',
    tone: '#f7a8bf',
    outfit: '#e8443f',
    accessory: 'none',
    tag: '跳泥坑达人',
  },
  {
    id: 'george',
    name: '乔治',
    en: 'George Pig',
    role: '弟弟',
    desc: '活泼调皮，最宝贝的玩具是恐龙先生。不管别人问什么，他常常只回答一句「恐龙！」。',
    kind: 'pig',
    tone: '#f9b6c8',
    outfit: '#3f8fd8',
    accessory: 'dino',
    tag: '恐龙先生',
  },
  {
    id: 'daddy',
    name: '猪爸爸',
    en: 'Daddy Pig',
    role: '爸爸',
    desc: '会开车、会做饭，偶尔有点迷糊，总爱自称某方面专家。还是跳泥坑的世界冠军。',
    kind: 'pig',
    tone: '#ef9fb4',
    outfit: '#3f6f9f',
    accessory: 'glasses',
    tag: '跳泥坑世界冠军',
  },
  {
    id: 'mummy',
    name: '猪妈妈',
    en: 'Mummy Pig',
    role: '妈妈',
    desc: '温柔又从容，在家工作、照顾全家，也总能想出好办法解决小麻烦。',
    kind: 'pig',
    tone: '#f6a9c0',
    outfit: '#e5824a',
    accessory: 'none',
    tag: '万能妈妈',
  },
  {
    id: 'suzy',
    name: '苏西羊',
    en: 'Suzy Sheep',
    role: '佩奇最好的朋友',
    desc: '和佩奇同龄，常一起玩扮家家、参加学前游戏小组，也会偶尔闹点小别扭。',
    kind: 'sheep',
    tone: '#fdf3e7',
    outfit: '#f2a0b6',
    accessory: 'bow',
    tag: '最好的朋友',
  },
  {
    id: 'rebecca',
    name: '瑞贝卡兔',
    en: 'Rebecca Rabbit',
    role: '朋友',
    desc: '住在山上的洞窟里，喜欢吃胡萝卜，说话时会像小兔子一样吱吱叫。',
    kind: 'rabbit',
    tone: '#fbf1e6',
    outfit: '#88b6dd',
    accessory: 'flower',
    tag: '胡萝卜爱好者',
  },
]

export const themes: Theme[] = [
  {
    id: 'puddle',
    title: '跳泥坑',
    en: 'Muddy Puddles',
    desc: '雨过天晴，换上雨靴，全家一起在泥坑里跳上跳下——几乎是这部作品最著名的画面。',
    icon: 'puddle',
    color: '#e6a06b',
  },
  {
    id: 'birthday',
    title: '生日派对',
    en: 'Birthday Party',
    desc: '蛋糕、蜡烛、气球和小游戏，佩奇与乔治的生日总是热闹又温馨。',
    icon: 'cake',
    color: '#ef8fa8',
  },
  {
    id: 'playground',
    title: '游乐场',
    en: 'The Playground',
    desc: '滑梯、秋千、攀爬架，和朋友们轮流排队、学着分享与等待。',
    icon: 'playground',
    color: '#8db9df',
  },
  {
    id: 'grandparents',
    title: '拜访爷爷奶奶',
    en: 'Granny & Grandpa Pig',
    desc: '坐小火车、在菜园种菜、去阁楼翻旧东西，祖孙之间的日常格外柔软。',
    icon: 'grandparents',
    color: '#9dc79a',
  },
  {
    id: 'dino',
    title: '恐龙先生',
    en: 'Mr. Dinosaur',
    desc: '乔治最爱的玩具一旦走丢，全家就会出动一起寻找，最后总能平安回家。',
    icon: 'dino',
    color: '#86bf9c',
  },
  {
    id: 'bike',
    title: '骑自行车',
    en: 'Bicycles',
    desc: '戴上头盔、练习平衡，摔倒也没关系——故事总在鼓励孩子再试一次。',
    icon: 'bike',
    color: '#b29ad9',
  },
]
