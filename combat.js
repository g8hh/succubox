var weaponinfo = []

function generate_weapons(){
	data.swords = new Resource("Swords", 0); data.swords.singular = "Sword";
	data.magicswords = new Resource("Magic Swords", 0); data.magicswords.singular = "Magic Sword";
	data.magicguns = new Resource("Magic Guns", 0); data.magicguns.singular = "Magic Gun";
	data.soulswords = new Resource("Soul Swords", 0); data.soulswords.singular = "Soul Sword";
	data.soulguns = new Resource("Sentient Guns", 0); data.soulguns.singular = "Sentient Gun";
	data.selfswords = new Resource("Swords of Thyself", 0); data.selfswords.singular = "Sword of Thyself";
	data.selfguns = new Resource("Guns of Thyself", 0); data.selfguns.singular = "Gun of Thyself";
	data.trueswords = new Resource("True Swords of Thyself", 0); data.trueswords.singular = "True Sword of Thyself";
	data.trueguns = new Resource("True Guns of Thyself", 0); data.trueguns.singular = "True Gun of Thyself";
	
	weaponinfo = [
		"Fists", 1, data.free,
		"Knife", 5, data.knives,
		"Sword", 100, data.swords,
		"Gun", 5000, data.guns,
		"Magic Sword", 7000, data.magicswords,
		"Magic Gun", 700000, data.magicguns,
		"Soul Sword", 6.66e8, data.soulswords,
		"Sentient Gun", 6.66e12, data.soulguns,
		"Sword of Thyself", 7.77e35, data.selfswords,
		"Gun of Thyself", 7.77e40, data.selfguns,
		"True Sword of Thyself", 9.99e99, data.trueswords,
		"True Gun of Thyself", Number.POSITIVE_INFINITY, data.trueguns,
	];
}


var weapequipnext = 0;
function update_weaponequipbtn(){
	var equiplevel = 0;
	for(var i = data.weapon.value+1; i<weaponinfo.length/3; i++){
		if(weaponinfo[i*3+2].value >= 1) equiplevel = i;
	}
	weapequipnext = equiplevel;
	
	if(equiplevel != 0){
		objects.equipbutton.hidden = false;
		
		objects.equipbutton.label = "Equip "+weaponinfo[weapequipnext*3+0];
	} else {
		objects.equipbutton.hidden = true;
	}
}

function weaponname(v){
	return weaponinfo[v*3];
}
function weaponatk(v){
	return weaponinfo[v*3+1];
}


function exp_per_enemy(){
	var level = data.enemylevel.value / 10 + 1;
	return Math.floor((level*(level+1))/2);
}
function gold_per_enemy(){
	var level = data.enemylevel.value / 20 + 1;
	return Math.floor((level*(level+1))/2 * 5);
}
function health_per_enemy(){
	var level = data.enemylevel.value / 10 + 1;
	if(data.hardmode) level += 1000;
	
	return Math.floor(Math.pow(2, level)*5);
}
function exp_needed(){
	var level = data.level.value;
	if(level >= 100 || data.levellocked) return Number.POSITIVE_INFINITY;
	if(data.hardmode) level += 50;
	
	return Math.floor(Math.pow(3, level) + (level*(level+1))/2);
}

function init_combat(){

	
	//stats
	
	data.enemylevel = new Resource("Enemy Level", 1);
	data.enemy_health = new Resource("Enemy Health", 10);
	data.skillpoints = new Resource("Skill Points", 0);
	data.enemy_health.format = function(v){
		if(v <= 0) return "DEAD"
		return F(v)+" HP";
	}
	
	data.weapon = new Resource("Current Weapon", 0);
	data.weapon.format = function(v){
		return weaponname(v)+" ("+F(weaponatk(v))+" ATK)";
	}
	data.strength = new Resource("Strength", 1);
	data.intelligence = new Resource("Intelligence", 1);
	data.enemyrespawntimer = 0;
	
	//UI
	panes.combat_btns = addDiv(panes.play_tab, "combat_btns");
	panes.combat_display = addDiv(panes.play_tab, "combat_display");
	panes.combat_stats = addDiv(panes.play_tab, "combat_stats");
	
	//displays
	objects.cbenemdisp = new ResourceDisplayBar(panes.combat_display, data.enemy_health);
	
	objects.cbleveldisp = new ResourceDisplay(panes.combat_stats, data.level);
	objects.cbexpdisp = new ResourceDisplay(panes.combat_stats, data.experience);
	objects.cbexpneeddisp = new ResourceDisplay(panes.combat_stats, data.expneeded);
	objects.cbweapdisp = new ResourceDisplay(panes.combat_stats, data.weapon);
	objects.cbweapdisp.hidden = false;
	objects.cbexpdisp.hidden = false;
	objects.cbstrdisp = new ResourceDisplay(panes.combat_stats, data.strength);
	objects.cbintdisp = new ResourceDisplay(panes.combat_stats, data.intelligence);
	objects.spdisp = new ResourceDisplay(panes.combat_stats, data.skillpoints);
	
	//buttons
	objects.cbfight = new Button(panes.combat_btns, "Fight!", function(){
		fight(1);
	});
	objects.skillstr = new PurchaseButton(panes.combat_btns, "Skill Str", new Cost(data.skillpoints, 1), new ResourceUnlock(data.strength, 1));
	objects.skillint = new PurchaseButton(panes.combat_btns, "Skill Int", new Cost(data.skillpoints, 1), new ResourceUnlock(data.intelligence, 1));
	objects.equipbutton = new Button(panes.combat_btns, "Equip", function(){
		if(weapequipnext > data.weapon.value){
			data.weapon.value = weapequipnext;
			weaponinfo[weapequipnext*3+2].value -= 1;
			this.hidden = true;
		}
	});
	objects.equipbutton.hidden = true;
	
	objects.cbexit = new Button(panes.combat_btns, "Back", function(){
		showDiv(panes.game_tab);
		hideDiv(panes.play_tab);
	});
	
	
	panes.levelup = addDiv(panes.topdiv, "levelup");
}

function fight(amount){
	if(data.enemy_health.value > 0){
			data.enemy_health.value -= data.strength.value * weaponatk(data.weapon.value) * amount;
			if(data.enemy_health.value <= 0){
				var overkill = -data.enemy_health.value / health_per_enemy();

				data.enemylevel.value += 1;
				data.experience.value += exp_per_enemy() * data.intelligence.value;
				data.gold.value += gold_per_enemy();
				UpdateGameboxInfoTicker("You killed an enemy and got "+F(exp_per_enemy()*data.intelligence.value)+" EXP and "+F(gold_per_enemy())+" gold!");
				
				
				
				if(overkill >= 1){
					var oexp = exp_per_enemy() * data.intelligence.value * Math.floor(Math.pow(overkill, .7));
					data.experience.value += oexp;
					UpdateGameboxInfoTicker("OVERKILL BONUS: +"+F(oexp)+" EXP!");
				}
			}
		}
}

function update_combat(){
	if(data.enemy_health.value <= 0){
		data.enemyrespawntimer += 1;
		if(data.enemyrespawntimer >= 100){
			data.enemyrespawntimer = 0;
			data.enemy_health.value = health_per_enemy();
			UpdateGameboxInfoTicker("A new enemy spawned!");
		}
	}
	
	objects.cbenemdisp.percent = (data.enemy_health.value*100 / health_per_enemy());
	if(data.enemy_health.value <= 0){
		objects.cbenemdisp.percent = 0;
	}
	
	data.expneeded.value = exp_needed();
	if(data.experience.value >= data.expneeded.value && data.level.value <= 100 && !data.levellocked){
		UpdateGameboxInfoTicker("You leveled up! You got "+data.level.value+" skill points!");
		data.skillpoints.value += data.level.value;
		data.level.value += 1;
		data.expneeded.value = exp_needed();
		
		
		panes.levelup.classList.remove("levelupanimation");
		void panes.levelup.offsetWidth;
		panes.levelup.innerHTML = "Level "+data.level.value+"!!!";
		panes.levelup.classList.add("levelupanimation");
	}
}