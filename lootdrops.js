var droptable = [];
var droptablemax = 0;
var quantumbox;

function LootDrop(item, label, rarity){
	this.item = item;
	this.label = label;
	this.rarity = rarity;
}

function init_droptable(){
	
	droptable.push(new LootDrop(
		new ResourceUnlock(data.gold, 10),
		"10 Gold.",
		1
	));
	droptable.push(new LootDrop(
		new ResourceUnlock(data.gold, 100),
		"100 Gold!",
		5
	));
	droptable.push(new LootDrop(
		new ResourceUnlock(data.gold, 1),
		"1 Gold???",
		20
	));
	droptable.push(new LootDrop(
		new ResourceUnlock(data.gold, 1000),
		"1000 Gold!!!",
		100
	));
	droptable.push(new LootDrop(
		new ResourceUnlock(data.lootboxes, 1),
		"another lootbox!",
		50
	));
	droptable.push(new LootDrop(
		new ResourceUnlock(data.experience, 100),
		"a 100 EXP boost!",
		5
	));
	droptable.push(new LootDrop(
		new ResourceUnlock(data.common_hats, 1),
		"a common hat.",
		5
	));
	droptable.push(new LootDrop(
		new ResourceUnlock(data.uncommon_hats, 1),
		"an uncommon hat.",
		10
	));
	droptable.push(new LootDrop(
		new ResourceUnlock(data.rare_hats, 1),
		"a rare hat!",
		20
	));
	droptable.push(new LootDrop(
		new ResourceUnlock(data.ultrarare_hats, 1),
		"an ULTRA rare hat!",
		100
	));
	droptable.push(new LootDrop(
		new ResourceUnlock(data.legendary_hats, 1),
		"a LEGENDARY HAT!!",
		250
	));
	droptable.push(new LootDrop(
		new ResourceUnlock(data.mythical_hats, 1),
		"a MYTHICAL HAT!!!!!",
		500
	));
	droptable.push(new LootDrop(
		new ResourceUnlock(data.cursed_hats, 1),
		"a... cursed hat?",
		1000
	));
	droptable.push(new LootDrop(
		new ResourceUnlock(data.nothingness, 1),
		"... nothing...",
		100
	));
	
	
	droptablemax = 0;
	for(var i = 0; i<droptable.length; i++){
		droptablemax += 100.0/droptable[i].rarity;
	}
	
	calc_quantum();
}

function calc_quantum(){
	quantumbox = new MultiUnlock();
	for(var i = 0; i<droptable.length; i++){
		var weight = (100.0/droptable[i].rarity) / droptablemax;
		quantumbox.purchases.push(new ResourceUnlock(droptable[i].item.resource, droptable[i].item.amount * weight));
	}
}

function choose(arr){
	return arr[Math.floor(Math.random()*arr.length)];
}

var openmessage = [
	"You opened a loot box!",
	"You ripped open a loot box!",
	"You tore open a loot box!",
	"You burst open a loot box!",
];
var containmessage = [
	"It had",
	"It contained",
	"You got",
	"You obtained",
];

function open_lootbox(){
	if(data.quantumboxes){
		open_multiple(1);
	} else {
		
		
		choice = Math.random()*droptablemax;
		
		if(data.nothingness.value < 5 && Math.random()<(1.0/(50+data.nothingness.value*50))){ //bonus to the first few points of nothingness (was too slow originally)
			choice = 99999;
		}
		
		for(var i = 0; i<droptable.length; i++){
			choice -= 100.0/droptable[i].rarity;
			if(choice < 0 || i == droptable.length-1){
				droptable[i].item.unlock();
				
				UpdateGameboxInfoTicker(choose(openmessage));
				UpdateGameboxInfoTicker(choose(containmessage)+" "+droptable[i].label);
				
				return;
			}
		}
	}
}


function open_multiple(amount){
	amount = Math.floor(amount);
	if(amount == 0) return;
	if(data.quantumboxes){
		quantumbox.unlock(amount);
		if(amount == 1){
			UpdateGameboxInfoTicker("You opened a quantum lootbox and it contained E V E R Y T H I N G.");
		} else {
			UpdateGameboxInfoTicker("You opened "+F(amount)+" quantum lootboxes and they contained E V E R Y T H I N G.");
		}
	} else {
		if(amount > 25) {
			amount = 0;
			UpdateGameboxInfoTicker("You tried to open too many lootboxes and they all dissapeared due to quantum instability! If ONLY THERE WAS A WAY to make them stable on a quantum level.");
		}
		for(var i = 0; i<amount; i++){
			open_lootbox();
		}
	}
}