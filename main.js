var data = new Object();
var objects = new Object();
var crafting_items = new Object();
var shop_items = new Object();
var panes = new Object();
var game_events = new Object();
var tickrate = 100;
var uiupdate_tickrate = 30;
var unlockevents_tickrate = 10;
var company_tickrate = 1;
var ascensionlevel = 1;
var paused = false;
var numnames = ["hundred", "thousand", 
					"million", 
					"billion", 
					"trillion", 
					"quadrillion", 
					"quintillion", 
					"sextillion", 
					"septillion", 
					"octillion",
					"nonillion",
					"decillion",
					"undecillion",
					"duodecillion",
					"tredecillion",
					"quattuordecillion",
					"quindecillion",
					"sexdecillion",
					"septendecillion",
					"octodecillion",
					"novemdecillion",
					"vigintillion",
					"unvigintillion",
					"duovigintillion",
					"trevigintillion",
					"quattuorvigintillion",
					"quinvigintillion",
					"sexvigintillion",
					"septenvigintillion",
					"octovigintillion",
					"novemvigintillion",
					"trigintillion",
					"untrigintillion",
					"duotrigintillion",
					"tretrigintillion",
					"quattuortrigintillion",
					"quintrigintillion",
					"sextrigintillion",
					"septentrigintillion",
					"octotrigintillion",
					"novemtrigintillion",				
					"quadragintillion",
					"unquadragintillion",
					"duoquadragintillion",
					"trequadragintillion",
					"quattuorquadragintillion",
					"quinquadragintillion",
					"sexquadragintillion",
					"septenquadragintillion",
					"octoquadragintillion",
					"novemquadragintillion",
					"quinquagintillion",
					"unquinquagintillion",
					"duoquinquagintillion",
					"trequinquagintillion",
					"quattuorquinquagintillion",
					"quinquinquagintillion",
					"sexquinquagintillion",
					"septenquinquagintillion",
					"octoquinquagintillion",
					"novemquinquagintillion",
					"sexagintillion",
					"unsexagintillion",
					"duosexagintillion",
					"tresexagintillion",
					"quattuorsexagintillion",
					"quinsexagintillion",
					"sexsexagintillion",
					"septensexagintillion",
					"octosexagintillion",
					"novemsexagintillion",
					"septuagintillion",
					"unseptuagintillion",
					"duoseptuagintillion",
					"treseptuagintillion",
					"quattuorseptuagintillion",
					"quinseptuagintillion",
					"sexseptuagintillion",
					"septenseptuagintillion",
					"octoseptuagintillion",
					"novemseptuagintillion",
					"octogintillion",
					"unoctogintillion",
					"duooctogintillion",
					"treoctogintillion",
					"quattuoroctogintillion",
					"quinoctogintillion",
					"sexoctogintillion",
					"septenoctogintillion",
					"octooctogintillion",
					"novemoctogintillion",
					"nonagintillion",
					"unnonagintillion",
					"duononagintillion",
					"trenonagintillion",
					"quattuornonagintillion",
					"quinnonagintillion",
					"sexnonagintillion",
					"septennonagintillion",
					"octononagintillion",
					"novemnonagintillion",
					"centillion",
					"fuckloadillion",
];

function F(v){
	if(v<1000000) return Math.floor(v).toFixed(0);
	if(v>=Number.POSITIVE_INFINITY || isNaN(v)) return "Infinity";
	
	var digits = Math.log10(v)
	var index = Math.floor(digits/3);
	
	var adj_number = v / Math.pow(10, index*3);
	return adj_number.toFixed(2)+ " "+numnames[index];
}

function F2(v){
	if(v<1000000) return (Math.round(v*100)/100).toFixed(2);
	if(v>=Number.POSITIVE_INFINITY || isNaN(v)) return "Infinity";
	
	var digits = Math.log10(v)
	var index = Math.floor(digits/3);
	
	var adj_number = v / Math.pow(10, index*3);
	return adj_number.toFixed(2)+ " "+numnames[index];
}

init();
setInterval(update, 1000/tickrate);
setInterval(updateui, 1000/uiupdate_tickrate);
setInterval(updateevents, 1000/unlockevents_tickrate);
setTimeout(update_company, 1000/company_tickrate);
setInterval(jailtimer, 1000);
setInterval(autosave, 1000 * 60);

function Ft(v){
    var h = Math.floor(v/(60*60));
    var m = Math.floor((v-(h*60*60))/60);
    var s = v - (h*60*60)-(m*60);
    if (h   < 10) {h   = "0"+h;}
    if (m < 10) {m = "0"+m;}
    if (s < 10) {s = "0"+s;}
    return h+':'+m+':'+s;
}

function jailtimer(){
	if(data.jailtimer > 0) {
		paused = true;
		showDiv(select("jail"));
		data.jailtimer -= 1;
		select("jailtime").innerHTML = "Time Left: "+Ft(data.jailtimer);
		if(data.jailtimer <= 0){
			hideDiv(select("jail"));
			paused = false;
			data.freedom.value += 1;
		}
	}
}

function init(){
	
	objects.popupyes = new Button(select("popupfooter"), "Yes", function(){
		closePopup();
		if(popupRespondYes) popupRespondYes();
	});
	objects.popupno = new Button(select("popupfooter"), "No", function(){
		closePopup();
		if(popupRespondNo) popupRespondNo();
	});
	objects.popupok = new Button(select("popupfooter"), "OK", function(){
		closePopup();
		if(popupRespondOk) popupRespondOk();
	});
	
	
	if(window.localStorage["ascension"]) ascensionlevel = JSON.parse(window.localStorage["ascension"]);
	
	data.free = new Resource("Free", 0);
	data.free.format_full = function(v){return "Free!";};
	
	data.everything = new Resource("Everything", 1);
	data.everything.format_full = function(v){return "Everything";};
	
	data.globalticker = 0;
	
	data.wagelevel = 0;
	data.joblevel = 0;
	data.creditlimit = 0;
	data.broketimer = 0;
	data.workstreak = 0;
	data.bumtimer = 0;
	data.paperworkbuildup = 0;
	data.boughtgame = false;
	data.crafting_available = false;
	data.totalspent = 0;
	data.spentaccum = 0;
	data.creditenabled = false;
	data.autopayon = false;
	data.autopaycounter = 0;
	data.cuttercounter = 0;
	data.paperworktimermax = 5;
	data.researchgain = 0;
	data.guide1 = false;
	data.guide2 = false;
	data.quantumboxes = false;
	data.fabricator = false;
	data.fabricatedself = false;
	data.company = false;
	data.animosityrate = 0;
	data.anticipationrate = 0;
	data.conquestenabled = false;
	data.levellocked = false;
	data.cybertimer = 0;
	data.jailtimer = 0;
	data.hidbutton = false;
	data.craftyield = 1;
	data.freecrafting = false;
	data.antarctica = false;
	data.hardmode = false;
	
	data.conq1 = false;
	data.conq2 = false;
	data.conq3 = false;
	data.conq4 = false;
	data.conq5 = false;
	data.conq6 = false;
	data.conq7 = false;
	data.conq8 = false;
	data.conq9 = false;
	data.conq10 = false;
	data.conq11 = false;
	
	data.money = new Resource("Bank Account", 100);
	data.money.format = function(v){return "$"+F2(v);};
	data.money.format_full = function(v){return "$"+F(v);};
	data.realmoney = new Resource("Real Money", 1e50);
	data.realmoney.format = function(v){return "Real Money";};
	data.realmoney.format_full = function(v){return "Real Money";};
	data.boughtboxes = new Resource("Real Money Boxes", 0);
	
	data.workethic = new Resource("Work Ethic", 0);
	data.paperwork = new Resource("Paperwork", 0);
	data.salary = new Resource("Wage", 0);
	data.salary.format = function(v){return "$"+F(v);};
	data.research = new Resource("Research", 0);
	data.creditscore = new Resource("Credit Score", 0);
	data.fabknives = new Resource("Real Knives", 0); data.fabknives.singular = "Real Knife";
	data.fabswords = new Resource("Real Swords", 0); data.fabswords.singular = "Real Sword";
	data.fabguns = new Resource("Real Guns", 0); data.fabguns.singular = "Real Gun";
	data.fabfabs = new Resource("Real Fabrication Modules", 0); data.fabfabs.singular = "Real Fabrication Module";
	data.researchbots = new Resource("Research Bots", 0); data.researchbots.singular = "Research Bot";
	data.securitybots = new Resource("Security Bots", 0); data.securitybots.singular = "Security Bot";
	data.fabhats = new Resource("Real Hats", 0); data.fabhats.singular = "Real Hat";
	data.fabsouls = new Resource("Real Souls", 0); data.fabsouls.singular = "Real Soul";
	
	 
	
	data.level = new Resource("Level", 1);
	data.level.format_full = function(v){return F(v)+" Levels"};
	data.experience = new Resource("EXP", 0);
	data.expneeded = new Resource("EXP Needed", exp_needed());
	data.lootboxes = new Resource("Loot Boxes", 0); data.lootboxes.singular = "Loot Box";
	data.gold = new Resource("Gold", 0);
	
	//consciousness resources
	data.nothingness = new Resource("Nothingness", 0);
	data.animosity = new Resource("Animosity", 0);
	data.guilt = new Resource("Guilt", 0);
	data.honesty = new Resource("Honesty", 0);
	data.freedom = new Resource("Freedom", 0);
	data.mojo = new Resource("Mojo", 0);
	data.fulfillment = new Resource("Fulfillment", 0);
	data.anticipation = new Resource("Anticipation", 0);
	
	
	
	//hats
	data.common_hats = new Resource("Common Hats", 0); data.common_hats.singular = "Common Hat";
	data.uncommon_hats = new Resource("Uncommon Hats", 0); data.uncommon_hats.singular = "Uncommon Hat";
	data.rare_hats = new Resource("Rare Hats", 0); data.rare_hats.singular = "Rare Hat";
	data.ultrarare_hats = new Resource("Ultra Rare Hats", 0); data.ultrarare_hats.singular = "Ultra Rare Hat";
	data.legendary_hats = new Resource("Legendary Hats", 0); data.legendary_hats.singular = "Legendary Hat";
	data.mythical_hats = new Resource("Mythical Hats", 0); data.mythical_hats.singular = "Mythical Hat";
	data.cursed_hats = new Resource("Cursed Hats", 0); data.cursed_hats.singular = "Cursed Hat";
	
	//crafting items
	data.junk = new Resource("Junk", 0);
	data.metal = new Resource("Metal", 0);
	data.knives = new Resource("Knives", 0); data.knives.singular = "Knife";
	data.gears = new Resource("Gears", 0); data.gears.singular = "Gear";
	data.fabric = new Resource("Fabric", 0);
	data.cursedfabric = new Resource("Cursed Fabric", 0);
	data.magic = new Resource("Magic", 0);
	data.souls = new Resource("Souls", 0); data.souls.singular = "Soul";
	data.mysouls = new Resource("My Own Merged Soul", 0);
	data.fabricators = new Resource("Mass Fabrication Modules", 0); data.fabricators.singular = "Mass Fabrication Module";
	data.riddlebook = new Resource("Books of Riddles", 0); data.riddlebook.singular = "Book of Riddles";
	data.guns = new Resource("Guns", 0); data.guns.singular = "Gun";
	data.darksouls = new Resource("Dark Souls", 0); data.darksouls.singular = "Dark Soul";
	
	//crafting results
	data.boxcutters = new Resource("Box Cutter Bots", 0); data.boxcutters.singular = "Box Cutter Bot";
	data.robots = new Resource("Robots", 0); data.robots.singular = "Robot";
	data.sentientbots = new Resource("Sentient Robots", 0); data.sentientbots.singular = "Sentient Robot";
	generate_weapons();
	
	panes.rootdiv = select("root");
	panes.topdiv = select("overlays");
	panes.job = addDiv(panes.rootdiv, "job");
	panes.game = addDiv(panes.rootdiv, "game");
	panes.shop = addDiv(panes.rootdiv, "shop");
	panes.conscience = addDiv(panes.rootdiv, "conscience");

	addDiv(panes.job, "paneheader").innerHTML = "FINANCES";
	addDiv(panes.game, "paneheader").innerHTML = "BOX QUEST "+F(ascensionlevel);
	addDiv(panes.shop, "paneheader").innerHTML = "SHOP";
	addDiv(panes.conscience, "paneheader").innerHTML = "CONSCIENCE";
	
	panes.job_tab = addDiv(panes.job, "jobtab");
	panes.job_tab2 = addDiv(panes.job, "jobtab");
	hideDiv(panes.job_tab2);
	panes.company_tab = addDiv(panes.job, "companytab");
	hideDiv(panes.company_tab);
	
	panes.game_tab = addDiv(panes.game, "game_tab");
	panes.play_tab = addDiv(panes.game, "play_tab");
	panes.recipes = addDiv(panes.game, "recipes");
	panes.crafting_tab = addDiv(panes.game, "crafting_tab");
	panes.crafting_btns = addDiv(panes.crafting_tab, "crafting_btns");
	panes.crafting_rsc = addDiv(panes.crafting_tab, "crafting_rsc");
	hideDiv(panes.crafting_tab);
	hideDiv(panes.play_tab);
	hideDiv(panes.recipes);
	panes.recipebtns = addDiv(panes.recipes, "recipebtns");
	recipebtns.classList.add("fullwidth");
	panes.recipelist = addDiv(panes.recipes, "recipelist");
	
	panes.game_btns = addDiv(panes.game_tab, "game_btns");
	panes.game_rsc = addDiv(panes.game_tab, "game_rsc");
	panes.game_info = addDiv(panes.game, "game_info");
	
	panes.conscience_btns = addDiv(panes.conscience, "con_btns");
	panes.conscience_rsc = addDiv(panes.conscience, "con_rsc");
	panes.conscience_info = addDiv(panes.conscience, "con_info");
	
	panes.shop_available = addDiv(panes.shop, "shop_top");
	panes.shop_bought = addDiv(panes.shop, "shop_bought");
	
	panes.finance_btns = addDiv(panes.job_tab, "job_btns");
	panes.finance_rsc = addDiv(panes.job_tab, "job_rsc");
	
	
	
	//work items
	objects.moneydisp = new ResourceDisplay(panes.finance_rsc, data.money);
	objects.paperworkdisp = new ResourceDisplay(panes.finance_rsc, data.paperwork);
	objects.saldisp = new ResourceDisplay(panes.finance_rsc, data.salary);
	objects.researchdsp = new ResourceDisplay(panes.finance_rsc, data.research);
	objects.workdisp = new ResourceDisplay(panes.finance_rsc, data.workethic);
	objects.creditdisp = new ResourceDisplay(panes.finance_rsc, data.creditscore);
	objects.researchbotdisp = new ResourceDisplay(panes.finance_rsc, data.researchbots);
	objects.fabknivesdisp = new ResourceDisplay(panes.finance_rsc, data.fabknives);
	objects.fabfabsdisp = new ResourceDisplay(panes.finance_rsc, data.fabfabs);
	
	//game items
	objects.leveldisp = new ResourceDisplay(panes.game_rsc, data.level);
	objects.expdisp = new ResourceDisplay(panes.game_rsc, data.experience);
	objects.expdisp.hidden = false;
	objects.gexpneeddisp = new ResourceDisplay(panes.game_rsc, data.expneeded);
	objects.lootboxes = new ResourceDisplay(panes.game_rsc, data.lootboxes);
	objects.golddisp = new ResourceDisplay(panes.game_rsc, data.gold);
	
	//crafting items
	//maindisp
	objects.cutters = new ResourceDisplay(panes.game_rsc, data.boxcutters);
	objects.h1dsp = new ResourceDisplay(panes.game_rsc, data.common_hats);
	objects.h2dsp = new ResourceDisplay(panes.game_rsc, data.uncommon_hats);
	objects.h3dsp = new ResourceDisplay(panes.game_rsc, data.rare_hats);
	objects.h4dsp = new ResourceDisplay(panes.game_rsc, data.ultrarare_hats);
	objects.h5dsp = new ResourceDisplay(panes.game_rsc, data.legendary_hats);
	objects.h6dsp = new ResourceDisplay(panes.game_rsc, data.mythical_hats);
	objects.h7dsp = new ResourceDisplay(panes.game_rsc, data.cursed_hats);
	
	
	//craftdisp
	crafting_items.h1cft = new CraftingItem(panes.crafting_rsc, data.common_hats);
	crafting_items.h2cft = new CraftingItem(panes.crafting_rsc, data.uncommon_hats);
	crafting_items.h3cft = new CraftingItem(panes.crafting_rsc, data.rare_hats);
	crafting_items.h4cft = new CraftingItem(panes.crafting_rsc, data.ultrarare_hats);
	crafting_items.h5cft = new CraftingItem(panes.crafting_rsc, data.legendary_hats);
	crafting_items.h6cft = new CraftingItem(panes.crafting_rsc, data.mythical_hats);
	crafting_items.h7cft = new CraftingItem(panes.crafting_rsc, data.cursed_hats);
	crafting_items.junkcft = new CraftingItem(panes.crafting_rsc, data.junk);
	crafting_items.metalcft = new CraftingItem(panes.crafting_rsc, data.metal);
	crafting_items.knifecft = new CraftingItem(panes.crafting_rsc, data.knives);
	crafting_items.gearcft = new CraftingItem(panes.crafting_rsc, data.gears);
	crafting_items.fabriccft = new CraftingItem(panes.crafting_rsc, data.fabric);
	crafting_items.cfabriccft = new CraftingItem(panes.crafting_rsc, data.cursedfabric);
	crafting_items.bots = new CraftingItem(panes.crafting_rsc, data.robots);
	crafting_items.cutters = new CraftingItem(panes.crafting_rsc, data.boxcutters);
	crafting_items.magic = new CraftingItem(panes.crafting_rsc, data.magic);
	crafting_items.souls = new CraftingItem(panes.crafting_rsc, data.souls);
	crafting_items.selfsouls = new CraftingItem(panes.crafting_rsc, data.mysouls);
	crafting_items.fabs = new CraftingItem(panes.crafting_rsc, data.fabricators);
	crafting_items.guns = new CraftingItem(panes.crafting_rsc, data.guns);
	crafting_items.swords = new CraftingItem(panes.crafting_rsc, data.swords);
	
	crafting_items.nothing = new CraftingItem(panes.crafting_rsc, data.nothingness);
	crafting_items.animosity = new CraftingItem(panes.crafting_rsc, data.animosity);
	crafting_items.guilt = new CraftingItem(panes.crafting_rsc, data.guilt);
	crafting_items.honesty = new CraftingItem(panes.crafting_rsc, data.honesty);
	crafting_items.freedom = new CraftingItem(panes.crafting_rsc, data.freedom);
	crafting_items.fulfillment = new CraftingItem(panes.crafting_rsc, data.fulfillment);
	crafting_items.anticipation = new CraftingItem(panes.crafting_rsc, data.anticipation);
	crafting_items.mojo = new CraftingItem(panes.crafting_rsc, data.mojo);
	
	//conscience items
	objects.nothing = new ResourceDisplay(panes.conscience_rsc, data.nothingness);
	objects.animosity = new ResourceDisplay(panes.conscience_rsc, data.animosity);
	objects.guilt = new ResourceDisplay(panes.conscience_rsc, data.guilt);
	objects.honesty = new ResourceDisplay(panes.conscience_rsc, data.honesty);
	objects.freedom = new ResourceDisplay(panes.conscience_rsc, data.freedom);
	objects.fulfillment = new ResourceDisplay(panes.conscience_rsc, data.fulfillment);
	objects.anticipation = new ResourceDisplay(panes.conscience_rsc, data.anticipation);
	objects.mojo = new ResourceDisplay(panes.conscience_rsc, data.mojo);
	
	objects.work = new Button(panes.finance_btns, "Work", function(){
		if(data.joblevel==1) data.money.value += data.salary.value/10.0 + 0.000001; 
		data.workstreak += 1; 
		if(data.paperwork.value > 0){
			data.paperwork.value -= 1; 
		} else if(data.joblevel > 1){
			data.research.value += data.researchgain;
		}
		data.bumtimer = 0;
	});
	objects.play = new Button(panes.game_btns, "Play", function(){
		showDiv(panes.play_tab);
		hideDiv(panes.game_tab);
	});
	objects.buy = new PurchaseButton(panes.game_btns, "Buy Loot Box ($10)", new Cost(data.money, 10), new ResourceUnlock(data.lootboxes, 1));
	objects.buy2 = new PurchaseButton(panes.game_btns, "Buy Loot Box (100 Gold)", new Cost(data.gold, 100), new ResourceUnlock(data.lootboxes, 1));
	objects.open = new PurchaseButton(panes.game_btns, "Open Loot Box", new Cost(data.lootboxes, 1), new FunctionUnlock(open_lootbox));
	objects.craft = new Button(panes.game_btns, "Crafting", function(){
		showDiv(panes.crafting_tab);
		hideDiv(panes.game_tab);
	});
	objects.toggleautopay = new Button(panes.game_btns, "Toggle Autopay", function(){
		data.autopayon = !data.autopayon;
	});
	
	objects.ccraft = new Button(panes.crafting_btns, "Craft!", function(){
		craft();
	});
	objects.ccraft.enabled_condition = cancraft;
	objects.creset = new Button(panes.crafting_btns, "Clear", function(){
		for(ingredient in crafting_items){
			crafting_items[ingredient].number = 0;
		}
	});
	objects.cguide = new Button(panes.crafting_btns, "Recipes", function(){
		showDiv(panes.recipes);
		update_recipes();
		hideDiv(panes.crafting_tab);
	});
	objects.cexit = new Button(panes.crafting_btns, "Back", function(){
		showDiv(panes.game_tab);
		hideDiv(panes.crafting_tab);
		for(ingredient in crafting_items){
			crafting_items[ingredient].number = 0;
		}
	});
	objects.rexit = new Button(panes.recipebtns, "Back", function(){
		showDiv(panes.crafting_tab);
		hideDiv(panes.recipes);
	});
	
	
	objects.work_lock = new UnlockableElementGroup([objects.work], function(){return data.wagelevel>0;});
	objects.craft_lock = new UnlockableElementGroup([objects.craft], function(){return data.crafting_available;});
	objects.autopay_lock = new UnlockableElementGroup([objects.toggleautopay], function(){return data.creditlimit > 0;});
	objects.recipe_lock = new UnlockableElementGroup([objects.cguide], function(){return data.guide1;});
	
	init_compoany_rsc();
	
	init_shop();
	init_droptable();
	init_events();
	init_combat();
	init_crafting();
	init_company();
	
	load();
	
	if(data.fabknives.value >= 1){
		unlockRaises();
	}
	
	update();
	updateui();
	
	
	jailtimer();
	
	if(paused){
		update_list(shop_items);
	}
}


function update_list(list){
	for(elem in list){
		if(list[elem].update) list[elem].update();
	}
}

function updateui(){
	update_company_ui();
	update_list(objects);
	update_list(crafting_items);
	
	if(data.mysouls.value == 0){
		hideDiv(crafting_items.nothing.contentdiv);
		hideDiv(crafting_items.animosity.contentdiv);
		hideDiv(crafting_items.guilt.contentdiv);
		hideDiv(crafting_items.honesty.contentdiv);
		hideDiv(crafting_items.freedom.contentdiv);
		hideDiv(crafting_items.fulfillment.contentdiv);
		hideDiv(crafting_items.anticipation.contentdiv);
	}
	
	
	if(data.boughtgame){
		panes.game.style.visibility = "";
	} else {
		panes.game.style.visibility = "hidden";
	}
	
	if(data.joblevel > 1) {
		data.salary.name = "Salary"; 
	} else {
		data.salary.name = "Wage";
	}
	
	if(data.autopayon) {
		objects.toggleautopay.label = "Toggle Autopay Off";
	} else {
		objects.toggleautopay.label = "Toggle Autopay On";
	}
	
	if(data.level.value>=100) {
		objects.fulfillment.hidden = false;
	}
	
	if(data.hidbutton) showDiv(select("givemoney"));
	if(data.fabsouls.value > 0) select("ghost").classList.add("gfadein");
}

function updateevents(){
	if(paused) return;
	
	update_list(shop_items);
	update_list(game_events);
	update_weaponequipbtn();
}

function update(){
	if(paused) return;
	
	update_combat();
	
	if(data.money.value == 0) data.broketimer += 1/tickrate;
	
	data.bumtimer += 1/tickrate;
	if(data.bumtimer > 2){
		data.workstreak = 0;
	}

	if(data.workstreak > 50){
		data.workstreak -= 50;
		data.workethic.value += 1;
	}

	if(data.creditenabled){
		if(data.spentaccum >= 30){
			data.spentaccum -= 30;
			data.creditscore.value += 1;
		}
	}
	
	data.salary.value = data.wagelevel;
	
	data.globalticker += 1;
	data.cuttercounter += 1;
	data.autopaycounter += 1;
	
	if(data.everything.value == 0){
		data.anticipation.value += data.anticipationrate;
		data.anticipationrate *= 2;
	}
	
	
	if(data.globalticker >= 100){
		if(data.boughtboxes.value > 0) data.cybertimer += 1;
		
		data.globalticker = 0;
		data.animosity.value += data.animosityrate;
		data.anticipation.value += data.anticipationrate;
		if(data.joblevel == 2 && !data.company){
			if(data.paperwork.value < 20){
				data.money.value += data.salary.value;
			}
			if(data.paperwork.value < 10){	
				data.workstreak += [12, 6, 3, 2, 1, 1, 1, 1, 1, 1][data.paperwork.value];
				data.bumtimer = 0;
			}
			
			data.paperworkbuildup += 1;
			if(data.paperworkbuildup > data.paperworktimermax) {
				data.paperwork.value += 1;
				data.paperworkbuildup = 0;
			}

		}
	}
	
	if(data.boxcutters.value > 0){
		if(data.quantumboxes){
			data.boxcutters.value = 0;
			UpdateGameboxInfoTicker("Your box cutter robots exploded due to a quantum instability event!");
		} else {
			if(data.cuttercounter >= 100/Math.max(1,data.boxcutters.value)){
				data.cuttercounter = 0;		
				objects.open.onClick();
			}
		}
	}
	
	if(data.autopayon){
		if(data.autopaycounter >= (500)/Math.max(1, data.creditlimit)){	
			data.autopaycounter = 0;	
			objects.buy.onClick();
		}
	}
	
	
	
}

