var crafttable = [];


function init_crafting(){
	crafttable.push(new craft_recipe(
		[
			I(data.junk, 3)
		], 
		"1 metal",
		new ResourceUnlock(data.metal, 1),
		1
	));
	
	crafttable.push(new craft_recipe(
		[
			I(data.metal, 2)
		], 
		"1 knife",
		new ResourceUnlock(data.knives, 1),
		1
	));
	
	crafttable.push(new craft_recipe(
		[
			I(data.metal, 3)
		], 
		"1 gear",
		new ResourceUnlock(data.gears, 1),
		1
	));
	
	crafttable.push(new craft_recipe(
		[
			I(data.knives, 1),
			I(data.common_hats, 1)
		], 
		"1 fabric",
		new MultiUnlock(
			new ResourceUnlock(data.fabric, 1),
			new ResourceUnlock(data.knives, 1)
		),
		1
	));
	
	crafttable.push(new craft_recipe(
		[
			I(data.knives, 1),
			I(data.uncommon_hats, 1)
		], 
		"2 fabric",
		new MultiUnlock(
			new ResourceUnlock(data.fabric, 2),
			new ResourceUnlock(data.knives, 1)
		),
		1
	));
	
	crafttable.push(new craft_recipe(
		[
			I(data.knives, 1),
			I(data.rare_hats, 1)
		], 
		"1 fabric and 1 metal",
		new MultiUnlock(
			new ResourceUnlock(data.fabric, 1),
			new ResourceUnlock(data.metal, 1),
			new ResourceUnlock(data.knives, 1)
		),
	));
	
	crafttable.push(new craft_recipe(
		[
			I(data.knives, 1),
			I(data.ultrarare_hats, 1)
		], 
		"2 fabric and 1 gear",
		new MultiUnlock(
			new ResourceUnlock(data.fabric, 2),
			new ResourceUnlock(data.gears, 1),
			new ResourceUnlock(data.knives, 1)
		),
	));
	
	crafttable.push(new craft_recipe(
		[
			I(data.knives, 1),
			I(data.legendary_hats, 1)
		], 
		"10 fabric, 5 metal and 100 gold",
		new MultiUnlock(
			new ResourceUnlock(data.fabric, 10),
			new ResourceUnlock(data.metal, 5),
			new ResourceUnlock(data.gold, 100),
			new ResourceUnlock(data.knives, 1)
		),
	));
	
	crafttable.push(new craft_recipe(
		[
			I(data.knives, 1),
			I(data.mythical_hats, 1)
		], 
		"10 fabric and 1 magic",
		new MultiUnlock(
			new ResourceUnlock(data.fabric, 10),
			new ResourceUnlock(data.magic, 1),
			new ResourceUnlock(data.knives, 1)
		),
		2
	));
	
	crafttable.push(new craft_recipe(
		[
			I(data.knives, 1),
			I(data.cursed_hats, 1)
		], 
		"1 cursed fabric and 1 free soul",
		new MultiUnlock(
			new ResourceUnlock(data.cursedfabric, 1),
			new ResourceUnlock(data.souls, 1),
			new ResourceUnlock(data.knives, 1)
		),
	));
	
	crafttable.push(new craft_recipe(
		[
			I(data.metal, 3),
			I(data.gears, 3),
			I(data.fabric, 3),
		], 
		"1 robot without purpose",
		new ResourceUnlock(data.robots, 1),
		1
	));
	
	crafttable.push(new craft_recipe(
		[
			I(data.robots, 1),
			I(data.knives, 1)
		], 
		"1 box cutting robot",
		new ResourceUnlock(data.boxcutters, 1),
		1
	));
	crafttable[crafttable.length-1].important = true;
	
	crafttable.push(new craft_recipe(
		[
			I(data.robots, 1),
			I(data.souls, 1)
		], 
		"a sentient robot! It has its own free will and just ran away.",
		new ResourceUnlock(data.sentientbots, 1)
	));
	
	
	//weapons
	crafttable.push(new craft_recipe(
		[
			I(data.metal, 5),
			I(data.fabric, 1),
		], 
		"a sword!",
		new ResourceUnlock(data.swords, 1),
		3
	));
	crafttable.push(new craft_recipe(
		[
			I(data.swords, 1),
			I(data.magic, 1),
		], 
		"a Magic Sword",
		new ResourceUnlock(data.magicswords, 1)
	));
	crafttable.push(new craft_recipe(
		[
			I(data.guns, 1),
			I(data.magic, 1),
		], 
		"a Magic Gun",
		new ResourceUnlock(data.magicguns, 1)
	));
	crafttable.push(new craft_recipe(
		[
			I(data.swords, 1),
			I(data.souls, 1),
		], 
		"a Soul Sword",
		new ResourceUnlock(data.soulswords, 1),
		4
	));
	crafttable.push(new craft_recipe(
		[
			I(data.guns, 1),
			I(data.souls, 1),
		], 
		"a Sentient Gun",
		new ResourceUnlock(data.soulguns, 1),
		4
	));
	crafttable.push(new craft_recipe(
		[
			I(data.swords, 1),
			I(data.mysouls, 1),
		], 
		"the Sword of Thyself",
		new ResourceUnlock(data.selfswords, 1),
		5
	));
	crafttable[crafttable.length-1].important = true;
	
	crafttable.push(new craft_recipe(
		[
			I(data.guns, 1),
			I(data.mysouls, 1),
		], 
		"the Gun of Thyself",
		new ResourceUnlock(data.selfguns, 1)
	));
	
	crafttable.push(new craft_recipe(
		[
			I(data.swords, 1),
			I(data.mysouls, 1),
			I(data.nothingness, 1),
			I(data.animosity, 1),
			I(data.guilt, 1),
			I(data.honesty, 1),
			I(data.freedom, 1),
			I(data.mojo, 1),
		], 
		"the True Sword of Thyself",
		new ResourceUnlock(data.trueswords, 1),
		5
	));
	crafttable[crafttable.length-1].important = true;
	crafttable.push(new craft_recipe(
		[
			I(data.guns, 1),
			I(data.mysouls, 1),
			I(data.nothingness, 1),
			I(data.animosity, 1),
			I(data.guilt, 1),
			I(data.honesty, 1),
			I(data.freedom, 1),
			I(data.mojo, 1),
		], 
		"the True Gun of Thyself",
		new ResourceUnlock(data.trueguns, 1)
	));
	crafttable[crafttable.length-1].important = true;
	
	
	
	crafttable.push(new craft_recipe(
		[
			I(data.metal, 5),
			I(data.magic, 5),
			I(data.fabric, 25),
		], 
		"a mass fabrication module!",
		new ResourceUnlock(data.fabricators, 1),
		2
	));
	
	crafttable.push(new craft_recipe(
		[
			I(data.fabricators, 1),
			I(data.knives, 1),
		], 
		"a knife",
		new ResourceUnlock(data.fabknives, 1),
		2
	));
	crafttable[crafttable.length-1].important = true;
	
	crafttable.push(new craft_recipe(
		[
			I(data.fabricators, 1),
			I(data.swords, 1),
		], 
		"a sword",
		new ResourceUnlock(data.fabswords, 1)
	));
	
	crafttable.push(new craft_recipe(
		[
			I(data.fabricators, 2),
		], 
		"a... fabricator",
		new ResourceUnlock(data.fabfabs, 1),
	));
	
	crafttable.push(new craft_recipe(
		[
			I(data.fabricators, 1),
			I(data.robots, 1),
			I(data.souls, 1),
		], 
		"A Security Robot",
		new ResourceUnlock(data.securitybots, 1),
		3,
	));
	crafttable[crafttable.length-1].important = true;
	
	crafttable.push(new craft_recipe(
		[
			I(data.cursedfabric, 3),
			I(data.fabric, 2),
		], 
		"The Book of Riddles",
		new ResourceUnlock(data.riddlebook, 1),
		3,
	));
	crafttable[crafttable.length-1].important = true;
	
	crafttable.push(new craft_recipe(
		[
			I(data.magic, 15),
			I(data.metal, 15),
		], 
		"a gun",
		new ResourceUnlock(data.guns, 1),
		4
	));
	crafttable[crafttable.length-1].important = true;
	
	crafttable.push(new craft_recipe(
		[
			I(data.fabricators, 1),
			I(data.guns, 1),
		], 
		"a gun",
		new ResourceUnlock(data.fabguns, 1),
		4
	));
	
	
	crafttable.push(new craft_recipe(
		[
			I(data.fabricators, 1),
			I(data.common_hats, 1),
		], 
		"a hat",
		new MultiUnlock(new ResourceUnlock(data.fabhats, 1), new ResourceUnlock(data.mojo, 1))
	));
	crafttable.push(new craft_recipe(
		[
			I(data.fabricators, 1),
			I(data.uncommon_hats, 1),
		], 
		"a hat",
		new MultiUnlock(new ResourceUnlock(data.fabhats, 1), new ResourceUnlock(data.mojo, 10))
	));
	crafttable.push(new craft_recipe(
		[
			I(data.fabricators, 1),
			I(data.rare_hats, 1),
		], 
		"a hat",
		new MultiUnlock(new ResourceUnlock(data.fabhats, 1), new ResourceUnlock(data.mojo, 1e2))
	));
	crafttable.push(new craft_recipe(
		[
			I(data.fabricators, 1),
			I(data.ultrarare_hats, 1),
		], 
		"a hat",
		new MultiUnlock(new ResourceUnlock(data.fabhats, 1), new ResourceUnlock(data.mojo, 1e3))
	));
	crafttable.push(new craft_recipe(
		[
			I(data.fabricators, 1),
			I(data.legendary_hats, 1),
		], 
		"a hat",
		new MultiUnlock(new ResourceUnlock(data.fabhats, 1), new ResourceUnlock(data.mojo, 1e4))
	));
	crafttable.push(new craft_recipe(
		[
			I(data.fabricators, 1),
			I(data.mythical_hats, 1),
		], 
		"a hat",
		new MultiUnlock(new ResourceUnlock(data.fabhats, 1), new ResourceUnlock(data.mojo, 1e5))
	));
	crafttable.push(new craft_recipe(
		[
			I(data.fabricators, 1),
			I(data.cursed_hats, 1),
		], 
		"a hat",
		new MultiUnlock(new ResourceUnlock(data.fabhats, 1), new ResourceUnlock(data.mojo, 1e6))
	));
	
	crafttable.push(new craft_recipe(
		[
			I(data.fabricators, 1),
			I(data.souls, 1),
		], 
		"a soul",
		new ResourceUnlock(data.fabsouls, 1),
	));
	
	
	crafttable.push(new craft_recipe(
		[
			I(data.nothingness, 1),
			I(data.souls, 1),
		], 
		"a Dark Soul",
		new ResourceUnlock(data.darksouls, 1),
	));
	
	
	
}



function craft(){
	if(cancraft()){
		var didcraft = false;
		for(var i = 0; i<crafttable.length; i++){
			if(crafttable[i].cancraft()){
				crafttable[i].craft();
				didcraft = true;
				break;
			}
		}
		
		if(!didcraft){
			var junkgain = 0;
			for(ingredient in crafting_items){
				junkgain += crafting_items[ingredient].number;
			}
			data.junk.value += junkgain * data.craftyield;
			UpdateGameboxInfoTicker("You crafted... junk");
		} else {
			if(!data.fabricator){
				if(data.fabricators.value > 0){
					data.fabricators.value = 0;
					UpdateGameboxInfoTicker("And it disappeared!");
				}
			}
		}
		
		if(!data.freecrafting){
			for(ingredient in crafting_items){
				crafting_items[ingredient].spend();
			}
		} else {
			crafting_items.selfsouls.spend();
			if(crafting_items.selfsouls.number > 0){
				UpdateGameboxInfoTicker("The free crafting glitch didn't work on your soul! Hope you spent it wisely...");
			}
		}
	}
}
function cancraft(){
	var atleast_1 = false;
	for(ingredient in crafting_items){
		if(!crafting_items[ingredient].canspend()){
			return false;
		}
		if(crafting_items[ingredient].number > 0){
			atleast_1 = true;
		}
	}
	return atleast_1;
}


function I(resource, cost){
	var obj = {};
	obj.resource = resource;
	obj.cost = cost;
	return obj;
}

function craft_recipe(ingredients, msg, product, guidelevel = 0){
	this.basecraftcosts = {};
	this.basecraftrsc = {};
	this.product = product;
	this.msg = msg;
	this.discovered = false;
	this.guidelevel = guidelevel;
	this.important = false;
	for(ingredient in crafting_items){
		this.basecraftcosts[crafting_items[ingredient].resource.name] = 0;
		this.basecraftrsc[crafting_items[ingredient].resource.name] = crafting_items[ingredient].resource;
	}
	for(var i = 0; i<ingredients.length; i++){
		this.basecraftcosts[ingredients[i].resource.name] = ingredients[i].cost;
	}
	
	this.cancraft = function(){
		for(ingredient in crafting_items){
			if(this.basecraftcosts[crafting_items[ingredient].resource.name] != crafting_items[ingredient].number){
				return false;
			}
		}
		return true;
	}
	
	this.craft = function(){
		product.unlock(data.craftyield);
		
		var mult = "";
		if(data.craftyield > 1) mult = " (x"+F(data.craftyield)+")";
		
		if(this.basecraftcosts[data.fabricators.name] > 0){
			UpdateGameboxInfoTicker("You fabricated "+this.msg+mult+" in real life!");
		} else {
			UpdateGameboxInfoTicker("You crafted "+this.msg+mult);
		}
		if(!this.discovered){
			this.discovered = true;
			UpdateGameboxInfoTicker("Recipe added!");
		}
	}
	
	
	this.textRecipe = function(){
		var lefthalf = "";
		
		for(i in this.basecraftcosts){
			if(this.basecraftcosts[i]>0){
				if(lefthalf.length > 0){
					lefthalf += " + ";
				}
				lefthalf += this.basecraftrsc[i].format_full(this.basecraftcosts[i]);
			}
		}
		if(this.important) lefthalf = "\u2B50 "+lefthalf;
		var righthalf = this.product.str(" + ");
		
		return "<div class='recipe_left'>"+lefthalf + "</div><div class='recipe_middle'>&nbsp=>&nbsp</div><div class='recipe_right'>"+righthalf+"</div>";
	}
}

var rboxHTML = ""
function update_recipes(){
	rboxHTML = "<b>Crafting Recipes (\u2B50 = important)</b>";
	
	for(var i = 0; i<crafttable.length; i++){
		if(crafttable[i].discovered){
			rboxHTML += "<div class='recipe'>"
			rboxHTML += crafttable[i].textRecipe();
			rboxHTML += "</div>"
		}
	}
	rboxHTML += "<div class='recipe'><div class='recipe_left'>Anything Else</div><div class='recipe_middle'>&nbsp=>&nbsp</div><div class='recipe_right'>Junk</div></div>"
	panes.recipelist.innerHTML = rboxHTML;
}

function DiscoverRecipes(level){
	for(var i = 0; i<crafttable.length; i++){
		if(crafttable[i].guidelevel == level){
			crafttable[i].discovered = true;
		}
	}
}
