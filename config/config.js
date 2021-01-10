let InstalledModules = {
  "two_ops_calc": {
    "description": "二元加减法",
    "enabled": 1,
    "sequence": 10,
    "jsfile": "modules/math/two_ops_calc.js",
    "config": {
      "max_num": 20
    }
  },
  "three_ops_calc": {
    "description": "三元加减法",
    "enabled": 1,
    "sequence": 20,
    "jsfile": "modules/math/three_ops_calc.js",
    "config": {
      "max_num": 20
    }
  },
  "multiplication": {
    "description": "九九乘法",
    "enabled": 1,
    "sequence": 25,
    "jsfile": "modules/math/multiplication.js"
  },
  "chinese_handwriting": {
    "description": "汉字书写",
    "enabled": 1,
    "sequence": 30,
    "jsfile": "modules/chinese/handwriting.js",
    "cssfile": "modules/chinese/handwriting.css",
    "config": {
      "characters": [
        // 课本写字表
        "一二三上口目耳手日田禾火虫云山八十了子人大月儿头里可东西天四是女开水去来不小少牛果",
        "鸟早书刀尺本木林土力心中五立正在后我好长比巴把下个雨们问有半从你才明同学自己衣白的",
        "又和竹牙马用几只石多出见对妈全回工厂",
        // 课本内容拓展写字
        "足会片叶树秋看闪江鱼北采青蛙春夏冬说色远近还黄猫鸭苹作笔课尘森包红么升左右朋它友公",
        "写点以彩空到方老师什时得快"
      ]
    }
  },
  "chinese_pinyin": {
    "description": "汉字注音",
    "enabled": 1,
    "sequence": 40,
    "jsfile": "modules/chinese/pinyin.js",
    "config": {
      "characters": [
        // 课本识字表
        "天地人你我他一二三四五上下口耳目手足站坐日月水火山石田禾对云雨风花鸟虫六七八九十爸",
        "妈马土不画打棋鸡字词语句子桌纸文数学音乐妹奶小桥台雪儿白草家是车路灯走秋气了树叶片",
        "大飞会个的船两头在里看见闪星江南可采莲鱼东西北尖说春青蛙夏弯皮就冬男女开关正反远有",
        "色近听无声去还来多少黄牛只猫边鸭苹果杏桃书包尺作业本笔刀课早校明力尘从众双木林森条",
        "心升国旗中红歌起么美丽立午晚昨今年影前后黑狗左右它好朋友比尾巴谁长短把伞兔最公写诗",
        "点要过给当串们以成彩半空问到方没更绿出睡那海真老师吗同什才亮时候觉得自己很穿衣服快",
        "蓝又笑着向和贝娃挂活金哥姐弟叔爷群竹牙用几步为参加洞乌鸦处找办旁许法放进高住孩玩吧",
        "发芽爬呀久回全变工厂医院生",
        // 课本古诗词识字
        "戏曲拨餐疑浪浮项掌惊皆镜竿锄瑶盘呼端解斜"
      ]
    }
  },
  "chinese_word_combine": {
    "description": "汉字组词",
    "enabled": 1,
    "sequence": 45,
    "jsfile": "modules/chinese/word_combination.js",
    "config": {
      "characters": [
        // 课本写字表
        "一二三上口目耳手日田禾火虫云山八十了子人大月儿头里可东西天四是女开水去来不小少牛果",
        "鸟早书刀尺本木林土力心中五立正在后我好长比巴把下个雨们问有半从你才明同学自己衣白的",
        "又和竹牙马用几只石多出见对妈全回工厂",
        // 课本内容拓展写字
        "足会片叶树秋看闪江鱼北采青蛙春夏冬说色远近还黄猫鸭苹作笔课尘森包红么升左右朋它友公",
        "写点以彩空到方老师什时得快"
      ]
    }
  },
  "eng_words": {
    "description": "英语单词释义",
    "enabled": 1,
    "sequence": 50,
    "jsfile": "modules/english/word.js",
    "config": {
      "words": [
        // 课本要求必会词汇
        "morning,afternoon,book,ruler,pencil,rubber,bag,eye,mouth,face,nose,ear",
        "dance,read,sing,draw,grandfather,grandmother,father,mother,me,fat,thin",
        "tall,short,one,two,three,four,five,six,apple,pear,peach,orange,hamburger",
        "pizza,cake,pie,chick,duck,cow,pig,bear,tiger,monkey,panda,red,blue,yellow",
        "green",
        // 课本内容拓展词汇
        "hello,hi,good,goodbye,I,am,see,you,here,are,give,please,thank,nice,can,my",
        "your,touch,look,not,do,flower,house,he,she,who,is,how,classmate,friend",
        "and,many,rabbit,little,round,juicy,sweet,love,eat,may,pie,help,banana",
        "soup,what,this,that,cut,stick,lion,zoo,colour,small,big,kite,sky,brown",
        "fly,high,seven,eight,nine,ten,up,down,very,snack"
      ]
    }
  },
  "eng_sentences": {
    "description": "英语句子释义",
    "enabled": 1,
    "sequence": 60,
    "jsfile": "modules/english/sentence.js",
    "config": {
      "sentences": [
        "Hi! I'm Danny.",
        "Hello! I'm Kitty.",
        "Good morning!",
        "Good afternoon!",
        "Give me a rubber, please.",
        "Here you are.",
        "Thank you.",
        "This is my mouth.",
        "Look! This is your nose.",
        "Touch your ear.",
        "What can you do?",
        "I can read.",
        "I can draw.",
        "How are you?",
        "Fine, thank you.",
        "Who is he?",
        "He's my father.",
        "She's my grandmother.",
        "How many pears?",
        "Three pears",
        "How many apples?",
        "Two apples.",
        "Can I help you?",
        "May I have a pie, please?",
        "What's this?",
        "It's a chick.",
        "What's that?",
        "It's a cow.",
        "What is it?",
        "Is this a monkey?",
        "Is that a bear?",
        "No. It's a panda.",
        "What colour is it?",
        "It's red.",
        "Colour the pencil green."
      ]
    }
  },
};