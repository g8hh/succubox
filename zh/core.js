//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Fists': '拳头',
    'Bank Account': '银行账户',
    'Paperwork': '文书工作',
    'Wage': '工资',
    'Research': '研究',
    'Work Ethic': '职业道德',
    'Credit Score': '信用评分',
    'Research Bots': '研究机器人',
    'Real Knives': '真刀',
    'Real Fabrication Modules': '真正的制造模块',
    'Level': '等级',
    'EXP': '经验',
    'EXP Needed': '需要经验',
    'Loot Boxes': '战利品盒子',
    'Gold': '黄金',
    'Box Cutter Bots': '盒形切割机器人',
    'Common Hats': '常见的帽子',
    'Uncommon Hats': '不寻常的帽子',
    'Rare Hats': '罕见的帽子',
    'Ultra Rare Hats': '超罕见的帽子',
    'Legendary Hats': '传奇的帽子',
    'Mythical Hats': '神秘的帽子',
    'Cursed Hats': '被诅咒的帽子',
    'Junk': '废物',
    'Metal': '金属',
    'Knives': '刀子',
    'Gears': '齿轮',
    'Fabric': '织品',
    'Cursed Fabric': '诅咒面料',
    'Robots': '机器人',
    'Magic': '魔法',
    'Souls': '灵魂',
    'My Own Merged Soul': '自己融合的灵魂',
    'Mass Fabrication Modules': '大规模制造模块',
    'Guns': '枪',
    'Swords': '剑',
    'Nothingness': '虚无',
    'Animosity': '仇恨',
    'Guilt': '罪恶感',
    'Honesty': '诚实',
    'Freedom': '自由',
    'Fulfillment': '实现',
    'Anticipation': '预感',
    'Mojo': '魔力',
    'Current Weapon': '当前武器',
    'Strength': '力量',
    'Intelligence': '智力',
    'Skill Points': '技能点',
    'Unassigned Employees': '未分配员工',
    'Total Employees': '员工总数',
    'Max Employees': '最大员工数',
    'Employee Upkeep': '员工保养',
    'Revenue': '收入',
    '\'Security\'': '安保',
    'Aliens Discovered': '发现外星人',
    'Wage': '工资',
    '"Security"': '“安全”',
    '"Security" Upkeep': '“安全”维护',
    'Aliens "Secured"': '外星人“安全”',
    '"Alien Security" Spending Rate': '“外星人安全”支出率',
    'At <strike>War</strike> A "Security Disagreement" With': '在 <strike>战争</strike> "安全的分歧" 与',
    'Get A Job': '找到一份工作',
    'ITS HERE!!!': '就在这儿!!!',
    'BOX QUEST 1': '搜索盒子 1',
    '???': '???',
    'Back Box Quest 2 on Kickstarter': '在Kickstarter上回到箱子探索2',
    'Increase Box Quest 2 Kicstarter Pledge': '增加箱子探索2Kickstarter的承诺',
    'Buy Lootboxes with Real Money': '用真钱买个战利品盒子',
    'Hide The Real Money Button': '隐藏真正的金钱按钮',
    'Get a Raise!': '加薪!',
    'Get a Promotion!': '升职!',
    'Start a company': '开办一家公司',
    'DLC!': 'DLC!',
    'Strategy Guide': '策略指导',
    'Truth': '真理',
    'Read the Book of Riddles': '读谜语书',
    'Credit Card': '信用卡',
    'Raise Credit Limit': '提高信用额度',
    'Bored': '无聊',
    'Quantum CPU': '量子CPU',
    'Mass Fabricator': '大规模制造商',
    'Dup Glitch': 'Dup故障',
    'Free Crafting Glitch': '免费制作故障',
    'Mass Fabricator Manual': '质量制造手册',
    'Reverse fabricate yourself into the game': '让自己融入游戏',
    'Get an office': '得到一个办公室',
    'Get a bigger office': '找个更大的办公室',
    'Get an even bigger office': '找一个更大的办公室',
    'Get an office block': '找一个办公区',
    'Get an office building': '得到一个办公大楼',
    'Get an even taller office building': '得到一个更高的办公大楼',
    'Get a work campus': '得到一个工作的校园',
    'Buy the local government': '购买当地政府',
    'Expand!': '扩张！',
    'Skirt regulations': '裙子规定',
    'Skirt regulations again': '再次裙子规则',
    'Antarctic Offices': '南极办事处',
    'Increase Productivity': '提高生产力',
    'Motivational Posters': '激励海报',
    'Motivational Robot': '激励机器人',
    'Motivational Meeting': '激励会议',
    'Motivational Pets': '激励宠物',
    'Motivational Knife': '激励刀',
    'Motivational Dance': '激励舞蹈',
    'Motivational Execution of the Holdouts': '激励抵抗者的阴谋',
    'Motivational Guilt Trip': '激励罪恶感',
    'Motivational Sword': '激励剑',
    'MOTIVATIONAL GUN': '激励枪',
    'Motivational Planetary Annihilation': '激励行星毁灭',
    'Motivational Space Communism': '国际空间共产主义',
    'Human Resources Department': '人力资源部门',
    '"Security" Department': '“安全”部门',
    '"Secure" The USA': '“安全”美国',
    '"Secure" Mexico': '“安全”墨西哥',
    '"Secure" Canada': '“安全”加拿大',
    '"Secure" Central America': '“安全”中美洲',
    '"Secure" Europe': '“安全”欧洲',
    '"Secure" China': '“安全”中国',
    '"Secure" The Rest of Asia': '“安全”亚洲其它地区的安全',
    '"Secure" Africa': '“安全”非洲',
    '"Secure" South America': '“安全”南美',
    '"Secure" Australia': '“安全”澳大利亚',
    '"Secure" Antarctica': '“安全”南极洲',
    'Robot Workers': '机器人工人',
    'I don\'t understand': '我不明白',
    'Recruit Literally Every Living Being in the Universe': '招募宇宙中的每一个生物',
    'Space Program': '太空计划',
    '"Secure" The Aliens': '“安全”外星人',
    'Warp Drive': '扭曲驱动',
    'Neutrino Bombs': '微子炸弹',
    'Wormholes': '虫洞',
    'Guilt Drive': '罪恶驱动',
    'Time Warp': '时间扭曲',
    'Reboot Nuclear Program': '重启核项目',
    'Security Squad': '安全小组',
    'Get Rid of the Free Soul': '摆脱自由的灵魂',
    'SuccuBox (the game\'s publisher) calls it the best game of the year!': '魔盒（游戏的发行商）称它为年度最佳游戏！',
    'You can finally stop playing.': '你终于可以停止玩了。',
    'THEY\'RE MAKING A SEQUEL!!!!!!!': '他们在拍续集!!',
    'It doesn\'t look like its gonna make it...': '看起来不会成功的…',
    'BOX QUEST 2!!!! ': '搜索盒子 2!!!! ',
    'Do work, get money. Simplest job on the planet.': '工作，赚钱。这是地球上最简单的工作。',
    'Give me money!': '给我钱!',
    'Ok fine, you bought one. You can hide that button now if you want.': '好吧，你买了一个。如果你愿意，你现在可以隐藏那个按钮。',
    'Salary': '工资',
    'You deserve it.': '这是你应得的。',
    'More money! More money! More money!': '更多的钱!更多的钱!更多的钱!',
    'Switch over to a full time worker. Earn a consistent salary instead of an hourly wage, as long as you keep doing your paperwork.': '转换到全职工作。只要你继续做文书工作，你就能得到稳定的工资，而不是每小时的工资。',
    'Easier job, same pay. Paperwork builds up slower.': '工作简单，薪水一样。文书工作积累得更慢。',
    'This job sucks. I could make way more on my own.': '这工作烂透了。我自己可以做得更多。',
    'They added crafting! When asked about the price, SuccuBox said "People will pay for it."': '他们增加了手工艺!当被问及价格时，魔盒说:“人们会为它买单的。”',
    'They added trading! You don\'t really need any more hats, but you can sell the spare gold you got from boxes. What is it useful for anyway? The going rate is 1$ for 10 gold, and you can sell it REALLY fast.': '他们加入了交易!你并不真的需要更多的帽子，但是你可以卖掉你从盒子里得到的多余的黄金。它到底有什么用呢?现在的价格是10黄金=1美元，你可以很快卖掉它。',
    'Volume 1: Basic Crafting Recipes': '第一卷:基本工艺配方',
    'Volume 2: Like 2 more crafting recipes': '第二卷:再加两个工艺配方',
    'You\'re scared...': '你害怕…',
    'With this you can finally enable those auto payments.': '有了这个，你终于可以启用那些自动支付。',
    'Can auto-spend money faster.': '可以更快地自动花钱。',
    'Channel your boredom into your work.': '把你的无聊情绪投入到工作中去。',
    'An attachment for your computer that changes lootboxes into quantum lootboxes. Each quantum loot box contains one billion one-billionths of a loot box.': '您的计算机的一个附件，它将查找框更改为量子战利品盒子。每个量子战利品盒子包含十亿分之一的战利品盒。',
    'Enables crafting of real-life objects from within the game. Ok it\'s really just a fancy 3D printer and you didn\'t really discover it, just backed it on kickstarter.': '允许在游戏中制作真实的物品。好吧，这只是一个非常棒的3D打印机，你并没有真正发现它，只是在kickstarter上支持它。',
    'Examine the games code for a way to get double the results from crafting.': '检查游戏代码，寻找一种方法，以获得加倍的结果从工艺。',
    '3 Junk': '3 垃圾',
    '1 Metal': '1 金属',
    '1 metal': '1 金属',
    '2 Metal': '2 金属',
    '3 Metal': '3 金属',
    '5 Metal': '5 金属',
    '1 Robot': '1 机器人',
    '1 Knife': '1 刀子',
    '1 knife': '1 刀子',
    '1 Fabric': '1 织物',
    '1 fabric': '1 织物',
    '2 Fabric': '2 织物',
    '3 Fabric': '3 织物',
    '25 Fabric': '25 织物',
    '1 Gear': '1 齿轮',
    '2 Gear': '2 齿轮',
    '3 Gears': '3 齿轮',
    '1 Uncommon Hat': '1 不寻常的帽子',
    '1 Common Hat': '1 常见的帽子',
    '1 Legendary Hat': '1 传奇的帽子',
    '1 Fabric + 1 Knife': '1 织物 + 1 刀子',
    '2 Fabric + 1 Knife': '2 织物 + 1 刀子',
    '5 Magic': '5 魔法',
    '1 Real Knife': '1 真刀',
    '1 Mass Fabrication Module': '1 质量制造模块',
    '1 刀子 + 1 Mass Fabrication Module': '1 刀子 + 1 质量制造模块',
    '1 Mythical Hat': '1 神秘的帽子',
    '10 Fabric + 1 Magic + 1 Knife': '10 织物 + 1 魔法 + 1 刀子',
    'Level *huff* 10 *huff*. Ok a few more before bed...': '级别*怒气* 10 *怒气*。好吧，睡前再喝几杯……',
    'a mass fabrication module!': '大规模制造模块!',
    '1 gear': '1 齿轮',
    'Ok that thing is annoying. Lets take care of it.': '好吧，那件事很烦人。让我们来处理它。',
    'Security bots are basically useless on their own, but as a squad they can provide a morale boost to the rest of your soldiers.': '安全机器人基本上是无用的，但作为一个小队，他们可以为你的其他士兵提供士气提升。',
    'Crafting no longer consumes resources. Just don\'t tell SuccuBox about the glitch so they won\'t patch it out.': '制作不再消耗资源。不要告诉魔盒这个小故障，这样他们就不会修补了。',
    'Knew I should have gotten the manual too...': '我就知道我也应该拿到手册…',
    'What? sure I guess...': '什么?当然，我想……',
    'More room for more employees!': '更多的空间,更多的员工!',
    'Even more room for more employees!': '为更多的员工提供更多的空间!',
    'The biggest office on the block.': '这个街区最大的办公室。',
    'Yeah you probably need the whole block anyway.': '是的，你可能需要整条街。',
    'Work': '工人',
    'Human Resources': '人力资源',
    'Space Exploration': '太空探索',
    'Grind': '战斗',
    'Buy Lootboxes': '购买战利品盒子',
    'Open Lootboxes': '打开战利品盒子',
    'Sell Gold': '出售黄金',
    'You know what lets just get a whole building.': '知道吗，我们去弄整栋楼。',
    'The towering pillar of my budding empire! I mean... uh... "company"...': '我萌芽中的帝国的巍峨支柱!我的意思是……嗯…“公司”…',
    'My employees can live where they work and work where they live! Win-win!': '我的员工可以住在他们工作的地方，也可以在住的地方工作!双赢!',
    'Convert the whole town into office space.': '把整个城镇变成办公场所。',
    'Set up more office campuses. You know, in the states that will let you.': '建立更多的办公园区。你要知道，在那些会让你这么做的国家里。',
    'Who cares if the states dont want you in, what can they do about it?': '谁在乎美国不希望你加入，他们能做些什么呢?',
    '<b>All must join The Corporation.</b>': '<b>所有人都必须加入公司。</b>',
    '<b>And you need to help.</b>': '<b>你需要帮助。</b>',
    '<b>He needs to hit level 100 in this game he\'s playing.</b>': '<b>他需要在这个游戏中达到100级</b>',
    '<b>It is the dream of The Founder.</b>': '<b>这是创始人的梦想</b>',
    '<b>None CAN resist.</b>': '<b>没有人能抗拒</b>',
    '<b>None shall resist.</b>': '<b>无人抗拒。</b>',
    '<b>The reason is simple.</b>': '<b>原因很简单</b>',
    '<b>There can be no holdouts.</b>': '<b>不可能有拒绝者。</b>',
    '<b>We promise "Security" for all.</b>': '<b>我们向所有人保证“安全”</b>',
    '<b>Why, you ask?</b>': '<b>你会问为什么</b>',
    'The aliens need "security"!': '外星人需要“安全”!',
    'The government won\'t let us expand anymore.... everything has a solution.': '政府不会再让我们扩张了…每件事都有解决的办法。',
    'The USA sabotaged their nuclear arsenal before we took over so we couldn\'t use it. We need to restart it so we can create "Security" even faster.': '在我们接手之前，美国破坏了他们的核武库，所以我们不能使用它。我们需要重新启动它，这样我们才能更快地创建“安全”。',
    'There was talk of an escape. Your security forces discovered an illegal wormhole and confiscated it. We can use this to explore even faster!': '有人说要逃跑。你们的安全部队发现了一个非法的虫洞并没收了它。我们可以用它来更快地探索!',
    'Act scary around employees. They\'ll work harder purely out of fear! You heard about this in a TED talk.': '在员工面前表现得可怕。他们工作更努力纯粹是出于恐惧!你在TED演讲中听说过。',
    'Explore faster!': '探索得更快!',
    'Fill the continent with office space! There\'s so much room here!!': '用办公空间填满整个大陆!这里有这么大的空间!!',
    'Fine lets do this.': '好吧，我们就这么做。',
    'Gather your employees for a meeting, and let them know their families will starve if they don\'t work harder. You got the idea from a TV show!': '召集你的员工开会，让他们知道如果他们不更加努力工作，他们的家庭将会挨饿。你是从电视节目里得到这个主意的!',
    'How many damn employees do I need to hit level 100? They don\'t want me to like, recruit literally every living being in the universe, or something, right?': '我需要多少该死的员工才能达到100级?他们不想让我招募宇宙中的每一个生物，或者别的什么，对吧?',
    'It forces employees to work harder, increasing profits! A friend with an MBA told you about this.': '它迫使员工更加努力工作，增加利润!一位拥有MBA学位的朋友告诉过你这一点。',
    'Lets just do that again? It worked the first time.': '让我们再做一次?第一次就成功了。',
    'Managing all these employees is tough. We should really get a human resources department to handle hires and assignments.': '管理所有这些员工是困难的。我们真的应该找个人力资源部来处理招聘和分配工作。',
    'You heard about this in the Book of Riddles.': '你在谜语书里听说过。',
    'Why even bother paying employees at this point? Lets get rid of all our costs. They\'ll still work hard, you know cause of that whole planet thing. A post on reddit really sold you on this idea.': '为什么要在这个时候给员工发工资呢?让我们摆脱所有的成本。他们仍然会努力工作，因为整个地球的事情。reddit上的一篇文章真的向你推销了这个想法。',
    'Whole lot of potential employees live here don\'t they. They won\'t even see it coming.': '很多潜在的员工都住在这里，不是吗?他们甚至不会看到它的到来。',
    '"Security Disagreement" Progress': '“安全分歧”进展',
    '...': '...',
    'Show your employees who\'s the boss! You saw this work in a youtube video.': '让你的员工知道谁是老板!你在youtube视频上看到过这个。',
    'Somehow you can harness built up guilt into faster ships AND better weapons? Who knew! Guilt is awesome!': '不知何故，你能将罪恶感转化为更快的船和更好的武器?谁知道!内疚是太棒了!',
    'Robot Resources': '机器人人力资源',
    'Alien Resources': '外星人人力资源',
    'Enemy Health': '敌人生命值',
    'Nobody': '无',
    'USA': '美国',
    'Mexico': '墨西哥',
    'Canada': '加拿大',
    'Central America': '中美洲',
    'Europe': '欧洲',
    'Asia': '亚洲',
    'China': '中国',
    'Africa': '非洲',
    'Antarctic': '南极',
    'South America': '南美',
    'Australia': '澳大利亚',
    'Blow up an alien homeplanet! They\'ll definitetely work harder after that. You came up with the idea all on your own, and absolutely not cause you saw it in a movie.': '炸毁一个外星人的家园星球！ 他们肯定会在那之后更加努力。 你自己想出了这个想法，绝对不会因为你在电影中看到它。',
    'Employees accomplish all tasks 10x faster.': '员工完成所有任务的速度提高了10倍。',
    'Every employee gets a pet tiger! If they don\'t work hard enough, the tiger will go hungry and eat them! A tiger salesman convinced you this would work.': '每个员工都有一只宠物虎！ 如果他们不够努力，老虎会饿着吃它们！ 一位老虎推销员说服你，这样可行。',
    'Encourages employees to work harder, increasing profits! A business blog on the internet suggested it.': '鼓励员工更加努力，增加利润！ 互联网上的商业博客提出了这个建议。',
    'No more humans left on the planet to hire, but we reckon we could fit about 350 billion robot workers on this rock.': '没有更多人类留在这个星球上，但我们认为我们可以在这块岩石上安装大约3500亿机器人工人。',
    'Our margins are way too low. We need to figure out how to increase productivity so we can earn more from each employee.': '我们的利润太低了。 我们需要弄清楚如何提高生产力，以便我们可以从每位员工那里获得更多收益。',
    'Seduce your employees with your sexy moves, and they\'ll work harder for you. You learned this dance from a... tv show...': '通过性感动作诱惑员工，他们会更加努力地为您服务。 你从......电视节目中学到了这种舞蹈......',
    'The fastest way to ensure \"Security\"! You overheard an alien talking about developing this technology in order to start a revolution. He was promptly \"secured\", of course.': '确保“安全”的最快方法！ 你无意中听到一个外星人谈论开发这项技术，以便开始一场革命。 当然，他很快就被“安全”了。',
    'A few people don\'t want to get hired by your company. Set an example of them, and your employees will work harder! You were taught about this in an \"Intro to Management\" class.': '有些人不想被贵公司录用。 树立一个例子，你的员工将更加努力！ 您在“管理入门”课程中了解到了这一点。',
    'Blame your employees for the atrocities you ordered them to commit! There is salvation in working harder. You read about this in <i>Entrepreneurship Weekly</i>.': '责怪你的员工你要求他们犯下的暴行！ 在努力工作中有拯救。 您在<i> 创业周刊 </ i>中了解到这一点。',
    '1 Soul': '1 灵魂',
    '1 Security Bot': '1 安全机器人',
    '1 Book of Riddles': '1 谜语书',
    '1 Sword': '1 剑',
    '3 Cursed Fabric': '3 被诅咒的织物',
    '2 织物 + 3 Cursed Fabric': '2 织物 + 3 被诅咒的织物',
    '1 box cutting robot': '1 盒子切割机器人',
    '1 robot without purpose': '1 没有目的的机器人',
    '1 Ultra Rare Hat': '1 超稀有帽子',
    '10 Fabric + 5 Metal + 100 Gold + 1 Knife': '10 织物 + 5 金属 + 100 黄金 + 1 刀子',
    '10 fabric and 1 magic': '10 织物 和 1 魔法',
    '10 fabric, 5 metal and 100 gold': '10 织物, 5 金属 和 100 黄金',
    '2 Fabric + 1 Gear + 1 Knife': '2 织物 + 1 齿轮 + 1 刀子',
    '2 fabric and 1 gear': '2 织物 和 1 齿轮',
    'Cmon this one better contain a mythical hat. I NEED them!': '这个里面最好有个神秘的帽子。我需要',
    'Crafting is so cool. I wish they would put it in e…s where it makes zero sense, like a clicker game.': '制作很酷。 我希望他们能把它放在没有意义的地方，就像点击游戏一样。',
    'So I guess knifing a hat gives me what it was made out of? I wonder if I can knife ANY hat...': '所以我猜一把帽子给我的是什么呢？ 我想知道我是否可以任意戴刀...',
    'ha ha HA HA AHah ha HA': '哈哈哈啊哈哈哈',
    'THIS GAME ROCKS AND ANYONE WHO DOESNT LIKE IT HAS A LOW IQ': '这个游戏很刺激，任何不喜欢它的人智商都很低',
    'My brother is only level 35 right now. He has so much to learn.': '我哥哥现在只有35级。 他有很多东西需要学习。',
    '1 My Own Merged Soul + 1 剑': '1 我自己的合并灵魂 + 1 剑',
    '1 My Own Merged Soul + 1 剑 + 1 虚无 + 1 仇恨 + 1 Guilt + 1 Honesty + 1 Freedom + 1 Mojo': '1 我自己的合并灵魂 + 1 剑 + 1 虚无 + 1 仇恨 + 1 罪恶感 + 1 诚实 + 1 自由 + 1 魔力',
    '1 My Own Merged Soul': '1 我自己的合并灵魂',
    '1 Mojo': '1 魔力',
    '1 Rare Hat': '1 稀有帽子',
    '1 Gun': '1 枪',
    '1 Guilt': '1 罪恶感',
    '1 Freedom': '1 自由',
    '1 Honesty': '1诚实',
    ' Cursed Hat': ' 被诅咒的帽子',
    '1 Fabric + 1 Metal + 1 Knife': '1布+ 1金属+ 1刀',
    '1 Cursed Fabric + 1 Soul + 1 Knife': '1 诅咒布 + 1 灵魂 + 1刀',
    '1 Real Fabrication Module': '1 真实制作模块',
    '1 Real Gun': '1 真枪',
    '1 Real Hat + 1.00 million Mojo': '1 真帽 + 1 million 魔力',
    '1 Real Soul': '1 真实灵魂',
    '1 Real Sword': '1 真剑',
    '1 Sentient Gun': '1 科学枪',
    '1 Soul Sword': '1灵魂之剑',
    '1 Sword of Thyself': '1你自己的剑',
    '1 True Sword of Thyself': '1你自己的真剑',
    '15 Magic': '15 魔法',
    '15 Metal': '金属',
    '15 Metal + 15 Magic': '15 金属 + 15 魔法',
    '2 Mass Fabrication Modules': '2批量制造模块',
    'Asian domination.': '亚洲的统治。',
    'Back Box Quest 4 on Kickstarter': '在众筹平台回到盒子探索4',
    'BOX QUEST 3': '盒子探索3',
    'BOX QUEST 4!!!! ': '盒子探索4 ! ! ! !',
    'I AM STILL UNSATISFIED': '我仍然不满意',
    'I guess Africa Africouldn\'t stop me.': '我想非洲不会阻止我。',
    'Increase Box Quest 4 Kicstarter Pledge': '增加魔盒任务 4 众筹网站承诺',
    'My empire... it grows': '我的帝国......它在成长',
    'Omg that felt so much better than the last 5 levels.': '天哪，感觉比前5级好多了。',
    'Really got a lot of other things I need to be doing right now but grinding a few more levels out couldn\'t hurt.': '我现在还有很多其他的事情要做，但是再多做几层也无妨。',
    'Shut up MOM you can\'t pause this game, let me just hit level 100 first.': '闭嘴，妈妈你不能暂停这个游戏，让我先达到100级。',
    'OK': '好的',
    'Open Loot Box': '打开战利品盒子',
    'Robots: ': '机器人：',
    'Robot Workers ': '机器人工人 ',
    'SHOP': '商店',
    'Bank Account: ': '银行账户：',
    'Clear': '清除',
    'Equip': '装备',
    'Fight!': '战斗！',
    'Freedom: ': '自由：',
    'Game by': '游戏作者',
    'Version': '版本号',
    'Are you sure you want to reset your save?': '您确定要重置游戏存档吗?',
    'RESET SAVE?': '重置存档？',
    'Yes': '确定',
    'No': '取消',
    'Reset Save': '重置存档',
    'EXP: ': '经验：',
    'EXP Needed: ': '所需经验：',
    'Expand! ': '扩张!',
    'Fabric: ': '面料：',
    'FINANCES': '财务状况',
    'Free!': '自由了！',
    'THIS IS THE CYBER POLICE. You\'re trying to cheat! Please come with us.': '这是网络警察。你敢作弊!请跟我们去喝杯茶。',
    'CYBER POLICE': '网络警察',
    'Back': '返回',
    'Animosity: ': '仇恨:',
    'CONSCIENCE': '道德心',
    'I\'ve been hyped for this game for ages! I hope it was worth the wait.': '我为这个游戏兴奋了好多年了!我希望这次等待是值得的。',
    'Aliens "Secured": ': '外星人“安保”：',
    'And you need to help.': '你需要帮助。',
    'Craft!': '制作！',
    'Metal: ': '金属：',
    'Mojo: ': '魔力',
    'Motivational Dance ': '励志舞蹈',
    'Enemy Health: ': '敌人生命值：',
    'Strength: ': '力量：',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    '': '',
    '': '',

}

//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
var cnRegReplace = new Map([
	[/^(\d+) Work Ethic$/, '$1 职业道德'],
	[/^(\d+) Credit Score$/, '$1 信用评分'],
	[/^(\d+) Levels$/, '$1 级'],
	[/^(\d+) Research$/, '$1 研究点'],
	[/^\$([\d\.]+) billion$/, '\$$1 billion'],
	[/^\$([\d\.]+) trillion$/, '\$$1 trillion'],
	[/^\$([\d\.]+) million$/, '\$$1 million'],
	[/^\$([\d\.]+) quadrillion$/, '\$$1 quadrillion'],
	[/^([\d\.]+) Research, \$$/, '$1 研究点, \$'],
	[/^([\d\.]+) trillion Research$/, '$1 trillion 研究点'],
	[/^([\d\.]+) billion Research$/, '$1 billion 研究点'],
	[/^([\d\.]+) quadrillion Research$/, '$1 quadrillion 研究点'],
	[/^([\d\.]+) million Mojo$/, '$1 million 魔力'],
	[/^([\d\.]+) trillion Total Employees$/, '$1 trillion 总员工'],
	[/^(\d+) Animosity$/, '$1 仇恨'],
	[/^(\d+) Security Bots$/, '$1 安保机器人'],
	[/^(\d+) Animosity, (\d+) Real Gun$/, '$1 仇恨，$2 真枪'],
	[/^([\d\.]+) billion "Security"$/, '$1 billion “安保”'],
	[/^([\d\.]+) million "Security"$/, '$1 million “安保”'],
	[/^([\d\.]+) trillion "Security"$/, '$1 trillion “安保”'],
	[/^([\d\.]+) Real Hat + ([\d\.]+) Mojo$/, '$1 真帽 + $2 魔力'],

]);

//2.采集新词
//20190320@JAR

var cnItem = function () {

    //传参是否非空字串
    if (!arguments[0]) return;

    //检验传参是否对象
    let text = arguments[0],
        s = '';
    if (typeof (text) != "string")
        return text;
    else
        s = arguments[0].charCodeAt();

    //检验传参是否英文
    // if (
    //     s < 65 || (s > 90 && s < 97) || (s > 122)
    //
    // ) return text;

    //处理前缀
    let text_prefix = "";
    for (let prefix in cnPrefix) {
        if (text.substr(0, prefix.length) === prefix) {
            text_prefix = cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }
    //处理后缀
    let text_postfix = "";
    for (let postfix in cnPostfix) {
        if (text.substr(-postfix.length) === postfix) {
            text_postfix = cnPostfix[postfix];
            text = text.substr(0, text.length - postfix.length);
        }
    }
    //处理正则后缀
    let text_reg_exclude_postfix = "";
    for (let reg of cnExcludePostfix) {
        let result = text.match(reg);
        if (result) {
            text_reg_exclude_postfix = result[0];
            text = text.substr(0, text.length - text_reg_exclude_postfix.length);
        }
    }

    //检验字典是否可存
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];

    //检查是否排除
    for (let reg of cnExcludeWhole) {
        if (reg.test(text)) {
            return arguments[0];
        }
    }

    //尝试正则替换
    for (let [key, value] of cnRegReplace.entries()) {
        if (key.test(text)) {
            return text_prefix + text.replace(key, value) + text_reg_exclude_postfix + text_postfix;
        }
    }

    //遍历尝试匹配
    for (let i in cnItems) {
        //字典已有词汇或译文、且译文不为空，则返回译文
        if (
            text == i || text == cnItems[i] &&
            cnItems[i] != ''
        )
            return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
    }

    //调整收录的词条，0=收录原文，1=收录去除前后缀的文本
    let save_cfg = 1;
    let save_text = save_cfg ? text : arguments[0]
    //遍历生词表是否收录
    for (
        let i = 0; i < cnItems._OTHER_.length; i++
    ) {
        //已收录则直接返回
        if (save_text == cnItems._OTHER_[i])
            return arguments[0];
    }

    if (cnItems._OTHER_.length < 500) {
        //未收录则保存
        cnItems._OTHER_.push(save_text);
        cnItems._OTHER_.sort(
            function (a, b) {
                return a.localeCompare(b)
            }
        );
    }

    /*
        //开启生词打印
        //console.log(
            '有需要汉化的英文：', text
        );
    */

    //返回生词字串
    return arguments[0];
};

transTaskMgr = {
    tasks: [],
    addTask: function (node, attr, text) {
        this.tasks.push({
            node,
            attr,
            text
        })
    },
    doTask: function () {
        let task = null;
        while (task = this.tasks.pop())
            task.node[task.attr] = task.text;
    },
}

function TransSubTextNode(node) {
    if (node.childNodes.length > 0) {
        for (let subnode of node.childNodes) {
            if (subnode.nodeName === "#text") {
                let text = subnode.textContent;
                let cnText = cnItem(text);
                cnText !== text && transTaskMgr.addTask(subnode, 'textContent', cnText);
                //console.log(subnode);
            } else if (subnode.nodeName !== "SCRIPT" && subnode.nodeName !== "TEXTAREA" && subnode.innerHTML && subnode.innerText) {
                if (subnode.innerHTML === subnode.innerText) {
                    let text = subnode.innerText;
                    let cnText = cnItem(text);
                    cnText !== text && transTaskMgr.addTask(subnode, 'innerText', cnText);
                    //console.log(subnode);
                } else {
                    TransSubTextNode(subnode);
                }
            } else {
                // do nothing;
            }
        }
    }
}

! function () {
    console.log("加载汉化模块");

    let observer_config = {
        attributes: false,
        characterData: true,
        childList: true,
        subtree: true
    };
    let targetNode = document.body;
    //汉化静态页面内容
    TransSubTextNode(targetNode);
    transTaskMgr.doTask();
    //监听页面变化并汉化动态内容
    let observer = new MutationObserver(function (e) {
        //window.beforeTransTime = performance.now();
        observer.disconnect();
        for (let mutation of e) {
            if (mutation.target.nodeName === "SCRIPT" || mutation.target.nodeName === "TEXTAREA") continue;
            if (mutation.target.innerHTML && mutation.target.innerText && mutation.target.innerHTML === mutation.target.innerText) {
                mutation.target.innerText = cnItem(mutation.target.innerText);
            } else if (mutation.target.nodeName === "#text") {
                mutation.target.textContent = cnItem(mutation.target.textContent);
            } else if (mutation.addedNodes.length > 0) {
                for (let node of mutation.addedNodes) {
                    if (node.nodeName === "#text") {
                        node.textContent = cnItem(node.textContent);
                        //console.log(node);
                    } else if (node.nodeName !== "SCRIPT" && node.nodeName !== "TEXTAREA" && node.innerHTML && node.innerText) {
                        if (node.innerHTML === node.innerText) {
                            node.innerText = cnItem(node.innerText);
                        } else {
                            TransSubTextNode(node);
                            transTaskMgr.doTask();
                        }
                    }
                }
            }
        }
        observer.observe(targetNode, observer_config);
        //window.afterTransTime = performance.now();
        //console.log("捕获到页面变化并执行汉化，耗时" + (afterTransTime - beforeTransTime) + "毫秒");
    });
    observer.observe(targetNode, observer_config);
}();
