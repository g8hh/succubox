function init_events(){
	
	game_events.creditscore = new GameEvent(
		function(){ //condition
			return data.totalspent >= 500;
		},
		function(){ //result
			data.creditscore.value += 100;
			data.creditenabled = true;
			data.spentaccum = 0;
		}
	);
	
	game_events.knife = new GameEvent(
		function(){ //condition
			return data.fabknives.value >= 1;
		},
		function(){ //result
			unlockRaises();
		}
	);
	
	game_events.job1 = new GameEvent(
		function(){ //condition
			return data.money.value == 0;
		},
		function(){ //result
			UpdateInfoTicker("Man I am broke. If only there was a way to earn more money...");
		},
		3
	);
	
	game_events.job2 = new GameEvent(
		function(){ //condition
			return game_events.job1.unlocked && data.money.value >= 5;
		},
		function(){ //result
			UpdateInfoTicker("Wow this job sucks. But I need money... for loot boxes!");
		},
		3
	);
	game_events.job3 = new GameEvent(
		function(){ //condition
			return game_events.job2.unlocked && data.money.value >= 5;
		},
		function(){ //result
			UpdateInfoTicker("I mean I don't really need the loot boxes, the game is perfectly playable without buying any, according to the internet.");
		},
		3
	);
	
	game_events.nothing = new GameEvent(
		function(){ //condition
			return data.nothingness.value >= 1;
		},
		function(){ //result
			UpdateInfoTicker("The loot box contained nothing? What? I got ripped off!!!");
		}
	);
	
	
	game_events.craftdumb = new GameEvent(
		function(){ //condition
			return data.boxcutters.value >= 2;
		},
		function(){ //result
			UpdateInfoTicker("Crafting is so cool. I wish they would put it in every single game even the ones where it makes zero sense, like a clicker game.");
		}
	);
	
	game_events.craft2 = new GameEvent(
		function(){ //condition
			return data.fabric.value >= 1;
		},
		function(){ //result
			UpdateInfoTicker("So I guess knifing a hat gives me what it was made out of? I wonder if I can knife ANY hat...");
		},
		10
	);
	
	game_events.craft3 = new GameEvent(
		function(){ //condition
			return data.magic.value >= 1;
		},
		function(){ //result
			UpdateInfoTicker("Cmon this one better contain a mythical hat. I NEED them!");
		},
		10
	);
	
	game_events.craft4 = new GameEvent(
		function(){ //condition
			return data.mojo.value >= 1;
		},
		function(){ //result
			UpdateInfoTicker("This hat looks fabulous on me.");
		},
		1
	);
	
	
	
	game_events.comp1 = new GameEvent(
		function(){ //condition
			return data.company && data.employee_upkeep.value > data.employee_earnings.value && data.money.value <= 10;
		},
		function(){ //result
			UpdateInfoTicker("My employees stopped working? What, is it cause I don't have the money to pay them or something? Oh yeah, that's probably it. I guess I should assign them to work that actually makes money...");
		},
		10
	);
	
	game_events.comp2 = new GameEvent(
		function(){ //condition
			return shop_items.office11.bought;
		},
		function(){ //result
			data.animosityrate = 1;
			alertOK("THE GOVERNMENT","The government shut down your new campuses before you could complete them. Says you skirted too many regulations this time.");
		},
		3
	);

	game_events.comp3 = new GameEvent(
		function(){ //condition
			return shop_items.office10.bought;
		},
		function(){ //result
			UpdateInfoTicker("Haha the government has no power compared to ME!!!");
		},
		1
	);
	
	game_events.comp4 = new GameEvent(
		function(){ //condition
			return data.employees.value >= 50000;
		},
		function(){ //result
			UpdateInfoTicker("My employees are asking me what we even do as a company. It should be obvious, guys.");
		},
		1
	);
	
	
	game_events.swords = new GameEvent(
		function(){ //condition
			return shop_items.prod8c.bought;
		},
		function(){ //result
			data.animosityrate += 1;
			alertOK("YOUR EMPLOYEES","Sorry, nobody takes you seriously with a sword.");
		},
		3
	);
	
	game_events.hardmode = new GameEvent(
		function(){ //condition
			return data.darksouls.value >= 1;
		},
		function(){ //result
			data.hardmode = true;
			alertOK("SUCCUBOX","You crafted a Dark Soul.<br>Hard Mode Enabled.");
		}
	);
	
	
	game_events.cyber1 = new GameEvent(
		function(){ //condition
			return data.cybertimer >= 60 * 60;
		},
		function(){ //result
			alertYESNO("CYBER POLICE","Hi, Cyber Police here. You bought a few lootboxes with real money earlier this game, right? Word on the street is you said you actually paid for them. We're just checking in to make sure. You did actually pay, right?", 
				function(){
					alertOK("CYBER POLICE","Thanks. Sorry for bothering you sir, enjoy your game.");
				},
				function(){
					alertOK("CYBER POLICE","KNEW IT. Put your hands behind your back sir, you're coming with us.", function(){
						data.jailtimer = 60*60;
					});
					data.cybertimer = 0;
			});
		}
	);
	
	game_events.cyber2 = new GameEvent(
		function(){ //condition
			return data.cybertimer >= 10 && data.boughtboxes.value > 100;
		},
		function(){ //result
			alertYESNO("CYBER POLICE","Hi, Cyber Police here. Mind if we ask you a few questions? We see you spent $"+F(data.boughtboxes.value)+" of real money on loot boxes. Thats quite a lot to spend on this dumb game, don't you think? That is, if you ACTUALLY SPENT IT. <br><br>Did you?", 
				function(){
					alertOK("CYBER POLICE","Sorry for bothering you sir, enjoy your game, and thanks for being a great customer.");
				},
				function(){
					alertOK("CYBER POLICE","KNEW IT. Put your hands behind your back sir, you're coming with us.", function(){
						data.jailtimer = 60*60;
					});
			});
		}
	);
	
	
	game_events.cyber3 = new GameEvent(
		function(){ //condition
			return window.devtools.open;
		},
		function(){ //result
			alertOK("CYBER POLICE","THIS IS THE CYBER POLICE. You're trying to cheat! Please come with us.", function(){
				data.jailtimer = 60*60;
			});
		}
	);
	
	
	game_events.conq1 = new GameEvent(
		function(){ //condition
			return data.conq1;
		},
		function(){ //result
			UpdateInfoTicker("The USA belongs to ME now hahahahahah!!");
		}
	);
	game_events.conq2 = new GameEvent(
		function(){ //condition
			return data.conq2;
		},
		function(){ //result
			UpdateInfoTicker("Mexico? More like.... Mexi-no.");
		}
	);
	game_events.conq3 = new GameEvent(
		function(){ //condition
			return data.conq3;
		},
		function(){ //result
			UpdateInfoTicker("Canada apoligized for trying to resist at least.");
		}
	);
	game_events.conq4 = new GameEvent(
		function(){ //condition
			return data.conq4;
		},
		function(){ //result
			UpdateInfoTicker("Central America? More like... I got nothing. They're mine now though!");
		}
	);
	game_events.conq5 = new GameEvent(
		function(){ //condition
			return data.conq5;
		},
		function(){ //result
			UpdateInfoTicker("Europe can eur-help me get some loot boxes.");
		}
	);
	game_events.conq6 = new GameEvent(
		function(){ //condition
			return data.conq6;
		},
		function(){ //result
			UpdateInfoTicker("Asian domination.");
		}
	);
	game_events.conq7 = new GameEvent(
		function(){ //condition
			return data.conq7;
		},
		function(){ //result
			UpdateInfoTicker("China? How about 'Office 6b'. Yeah thats better.");
		}
	);
	game_events.conq8 = new GameEvent(
		function(){ //condition
			return data.conq8;
		},
		function(){ //result
			UpdateInfoTicker("I guess Africa Africouldn't stop me.");
		}
	);
	game_events.conq9 = new GameEvent(
		function(){ //condition
			return data.conq9;
		},
		function(){ //result
			UpdateInfoTicker("Antartica? I hardly know'er!");
		}
	);
	game_events.conq10 = new GameEvent(
		function(){ //condition
			return data.conq10;
		},
		function(){ //result
			UpdateInfoTicker("South America? More like... Mouth... Blabarica...");
		}
	);
	game_events.conq11 = new GameEvent(
		function(){ //condition
			return data.conq11;
		},
		function(){ //result
			UpdateInfoTicker("Australia has one more deadly creature now. Me. I'm the deadly creature. Y'all got that one right? Just making sure.");
		}
	);
	
	
	
	game_events.lev5 = new GameEvent(
		function(){ //condition
			var t = 5;
			return data.level.value >= t && data.level.value<t+5; //prevent massive overlap when jumping tons of levels at once
		},
		function(){ //result
			UpdateInfoTicker("Wow this is so easy. Level 100 here I come! Should take about 15 minutes if this is how long it took to get to level 5.");
		},
		1
	);
	game_events.lev10 = new GameEvent(
		function(){ //condition
			var t = 10;
			return data.level.value >= t && data.level.value<t+5; //prevent massive overlap when jumping tons of levels at once
		},
		function(){ //result
			UpdateInfoTicker("Level *huff* 10 *huff*. Ok a few more before bed...");
		},
		1
	);
	game_events.lev15 = new GameEvent(
		function(){ //condition
			var t = 15;
			return data.level.value >= t && data.level.value<t+5; //prevent massive overlap when jumping tons of levels at once
		},
		function(){ //result
			UpdateInfoTicker("All progress is an accomplishment.");
		},
		1
	);
	game_events.lev20 = new GameEvent(
		function(){ //condition
			var t = 20;
			return data.level.value >= t && data.level.value<t+5; //prevent massive overlap when jumping tons of levels at once
		},
		function(){ //result
			UpdateInfoTicker("This game is good because when you win its because of your skill and your skill only.");
		},
		1
	);
	game_events.lev25 = new GameEvent(
		function(){ //condition
			var t = 25;
			return data.level.value >= t && data.level.value<t+5; //prevent massive overlap when jumping tons of levels at once
		},
		function(){ //result
			UpdateInfoTicker("It's not paying to win, its just paying to speed things up a little. I could get here without spending money if I wanted to...");
		},
		1
	);
	game_events.lev30 = new GameEvent(
		function(){ //condition
			var t = 30;
			return data.level.value >= t && data.level.value<t+5; //prevent massive overlap when jumping tons of levels at once
		},
		function(){ //result
			UpdateInfoTicker("Ok, so I spent money. So what? I just really like this game and want to support the devs.");
		},
		1
	);
	game_events.lev35 = new GameEvent(
		function(){ //condition
			var t = 35;
			return data.level.value >= t && data.level.value<t+5; //prevent massive overlap when jumping tons of levels at once
		},
		function(){ //result
			UpdateInfoTicker("ha ha HA HA AHah ha HA");
		},
		1
	);
	game_events.lev40 = new GameEvent(
		function(){ //condition
			var t = 40;
			return data.level.value >= t && data.level.value<t+5; //prevent massive overlap when jumping tons of levels at once
		},
		function(){ //result
			UpdateInfoTicker("THIS GAME ROCKS AND ANYONE WHO DOESNT LIKE IT HAS A LOW IQ");
		},
		1
	);
	game_events.lev45 = new GameEvent(
		function(){ //condition
			var t = 45;
			return data.level.value >= t && data.level.value<t+5; //prevent massive overlap when jumping tons of levels at once
		},
		function(){ //result
			UpdateInfoTicker("My brother is only level 35 right now. He has so much to learn.");
		},
		1
	);
	game_events.lev50 = new GameEvent(
		function(){ //condition
			var t = 50;
			return data.level.value >= t && data.level.value<t+5; //prevent massive overlap when jumping tons of levels at once
		},
		function(){ //result
			UpdateInfoTicker("Half way there!!!");
		},
		1
	);
	game_events.lev55 = new GameEvent(
		function(){ //condition
			var t = 55;
			return data.level.value >= t && data.level.value<t+5; //prevent massive overlap when jumping tons of levels at once
		},
		function(){ //result
			UpdateInfoTicker("Really got a lot of other things I need to be doing right now but grinding a few more levels out couldn't hurt.");
		},
		1
	);
	game_events.lev60 = new GameEvent(
		function(){ //condition
			var t = 60;
			return data.level.value >= t && data.level.value<t+5; //prevent massive overlap when jumping tons of levels at once
		},
		function(){ //result
			UpdateInfoTicker("Shut up MOM you can't pause this game, let me just hit level 100 first.");
		},
		1
	);
	game_events.lev65 = new GameEvent(
		function(){ //condition
			var t = 65;
			return data.level.value >= t && data.level.value<t+5; //prevent massive overlap when jumping tons of levels at once
		},
		function(){ //result
			UpdateInfoTicker("My empire... it grows");
		},
		1
	);
	game_events.lev70 = new GameEvent(
		function(){ //condition
			var t = 70;
			return data.level.value >= t && data.level.value<t+5; //prevent massive overlap when jumping tons of levels at once
		},
		function(){ //result
			UpdateInfoTicker("I AM STILL UNSATISFIED");
		},
		1
	);
	game_events.lev75 = new GameEvent(
		function(){ //condition
			var t = 75;
			return data.level.value >= t && data.level.value<t+5; //prevent massive overlap when jumping tons of levels at once
		},
		function(){ //result
			UpdateInfoTicker("Omg that felt so much better than the last 5 levels.");
		},
		1
	);
	game_events.lev80 = new GameEvent(
		function(){ //condition
			var t = 80;
			return data.level.value >= t && data.level.value<t+5; //prevent massive overlap when jumping tons of levels at once
		},
		function(){ //result
			UpdateInfoTicker("Fulfillment is imminent I can FEEL it.");
		},
		1
	);
	game_events.lev85 = new GameEvent(
		function(){ //condition
			var t = 85;
			return data.level.value >= t && data.level.value<t+5; //prevent massive overlap when jumping tons of levels at once
		},
		function(){ //result
			UpdateInfoTicker("Its a good investment cause I hear people will buy level 100 accounts for like, $100.");
		},
		1
	);
	game_events.lev90 = new GameEvent(
		function(){ //condition
			var t = 90;
			return data.level.value >= t && data.level.value<t+5; //prevent massive overlap when jumping tons of levels at once
		},
		function(){ //result
			UpdateInfoTicker("Victory is PALPABLE");
		},
		1
	);
	game_events.lev95 = new GameEvent(
		function(){ //condition
			var t = 95;
			return data.level.value >= t && data.level.value<t+5; //prevent massive overlap when jumping tons of levels at once
		},
		function(){ //result
			UpdateInfoTicker("Cmon.... CMON");
		},
		1
	);
	game_events.lev100 = new GameEvent(
		function(){ //condition
			var t = 100;
			return data.level.value == t; //prevent massive overlap when jumping tons of levels at once
		},
		function(){ //result
			UpdateInfoTicker("I DID IT!!! wait what...");
		},
		1
	);
	game_events.lev101 = new GameEvent(
		function(){ //condition
			var t = 101;
			return data.level.value == t; //prevent massive overlap when jumping tons of levels at once
		},
		function(){ //result
			UpdateInfoTicker("Good game.");
			UpdateInfoTicker("Good game.");
			UpdateInfoTicker("A bit short though.");
			UpdateInfoTicker("Should complain.");
		},
		1
	);
	
}

function GameEvent(condition, effect, delay = 0){
	this.unlocked = false;
	this.condition = condition;
	this.effect = effect;
	this.delay = delay;
	this.update = function(){
		if(!this.unlocked){
			if(this.condition()){
				this.delay -= 1/unlockevents_tickrate;
				if(this.delay < 0){
					this.unlocked = true;
					this.effect();
				}
			}
		}
	}
}

//detect devtools opened
//https://github.com/sindresorhus/devtools-detect/blob/gh-pages/index.js
(function () {
	'use strict';
	var devtools = {
		open: false,
		orientation: null
	};
	var threshold = 250;
	var emitEvent = function (state, orientation) {
		window.dispatchEvent(new CustomEvent('devtoolschange', {
			detail: {
				open: state,
				orientation: orientation
			}
		}));
	};

	setInterval(function () {
		var widthThreshold = window.outerWidth - window.innerWidth > threshold;
		var heightThreshold = window.outerHeight - window.innerHeight > threshold;
		
		var thresholdDifferential = Math.abs((window.outerWidth/window.innerWidth)-(window.outerHeight-window.innerHeight)) > .2;
		if(!thresholdDifferential) {
			widthThreshold = false;
			heightThreshold = false;
		}
		
		var orientation = widthThreshold ? 'vertical' : 'horizontal';

		if (!(heightThreshold && widthThreshold) &&
      ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)) {
			if (!devtools.open || devtools.orientation !== orientation) {
				emitEvent(true, orientation);
			}

			devtools.open = true;
			devtools.orientation = orientation;
		} else {
			if (devtools.open) {
				emitEvent(false, null);
			}

			devtools.open = false;
			devtools.orientation = null;
		}
	}, 500);

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = devtools;
	} else {
		window.devtools = devtools;
	}
})();