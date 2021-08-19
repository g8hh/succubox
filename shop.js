

function init_shop(){
	shop_items.buygame = new UpgradeButton(panes.shop_available, "BOX QUEST "+F(ascensionlevel), "SuccuBox (the game's publisher) calls it the best game of the year!", new Cost(data.money, 60), 
		function(){ //showcond
			return true;
		},
	
		function(){ //unlock
			data.boughtgame = true;
			UpdateInfoTicker("I've been hyped for this game for ages! I hope it was worth the wait.");
		}
	);
	
	shop_items.finalitem = new UpgradeButton(panes.shop_available, "Fulfillment", "You can finally stop playing.", new Cost(data.level, 100), 
		function(){ //showcond
			return data.boughtgame;
		},
	
		function(){ //unlock
			data.animosityrate = 0;
			data.fulfillment.value = 1;
			showDiv(select("win"));
			setTimeout(function(){
				select("wininc").innerHTML = 1;
				select("wininc").classList.add("flashGreen");
			}, 3000);
			
			window.onbeforeunload = null;
			window.localStorage.clear();
			save = null;
			data.levellocked = true;
		}
	);
	shop_items.reallyfinalitem = new UpgradeButton(panes.shop_available, "???", "???", new Cost(data.level, 101), 
		function(){ //showcond
			return data.level.value >= 100;
		},
	
		function(){ //unlock
			UpdateInfoTicker("...");
			data.animosityrate = 0;
			data.anticipationrate = 1;
			data.levellocked = true;
		}
	);
	shop_items.ascend1 = new UpgradeButton(panes.shop_available, "Back Box Quest "+F(ascensionlevel+1)+" on Kickstarter", "THEY'RE MAKING A SEQUEL!!!!!!!", new Cost(data.money, 60), 
		function(){ //showcond
			return data.anticipation.value >= 10;
		},
	
		function(){ //unlock
			data.animosity.value = 0;
			data.anticipationrate = 1e50;
		}
	);
	shop_items.ascend2 = new UpgradeButton(panes.shop_available, "Increase Box Quest "+F(ascensionlevel+1)+" Kicstarter Pledge", "It doesn't look like its gonna make it...", new Cost(data.everything, 1), 
		function(){ //showcond
			return data.anticipation.value >= 1e51;
		},
	
		function(){ //unlock
			for(obj in data){
				data[obj].value = 0;
			}
			quantumbox.unlock(Number.POSITIVE_INFINITY);
		}
	);
	shop_items.ascend3 = new UpgradeButton(panes.shop_available, "ITS HERE!!!", "BOX QUEST "+F(ascensionlevel+1)+"!!!! ", new Cost(data.anticipation, Number.POSITIVE_INFINITY), 
		function(){ //showcond
			return data.anticipation.value >= Number.POSITIVE_INFINITY;
		},
	
		function(){ //unlock
			Ascend();
		}
	);
	
	shop_items.getjob = new UpgradeButton(panes.shop_available, "Get A Job", "Do work, get money. Simplest job on the planet.", new Cost(data.free, 0), 
		function(){ //showcond
			return data.money.value == 0
		},
		
		function(){ //unlock
			data.wagelevel = 1;
			data.joblevel = 1;
		},
		3
	);
	
	shop_items.realmoney1 = new UpgradeButton(panes.shop_available, "Buy Lootboxes with Real Money", "Give me money!", new Cost(data.realmoney, 0), 
		function(){ //showcond
			return data.money.value == 0 && data.broketimer > 3;
		},
	
		function(){ //unlock
			shop_items.realmoney1.bought = false;
			this.enabled = true;
			
			alertCANCEL("GIVE ME MONEY",paypalbuttons)
		}
	);
	shop_items.realmoney2 = new UpgradeButton(panes.shop_available, "Hide The Real Money Button", "Ok fine, you bought one. You can hide that button now if you want.", new Cost(data.free, 0), 
		function(){ //showcond
			return data.boughtboxes.value >= 1;
		},
	
		function(){ //unlock
			shop_items.realmoney1.bought = true;
			shop_items.realmoney1.enabled = false;
			data.hidbutton = true;
			
			alertOK("I'M A POPUP!","Ok. I'll just stick that down in the footer for you. You know, just in case you wanna buy more.")
		}
	);
	
	
	//raises
	shop_items.raise1 = new UpgradeButton(panes.shop_available, "Get a Raise!", "You deserve it.", new Cost(data.workethic, 2), 
		function(){ //showcond
			return data.wagelevel == 1 && data.workethic.value >= 2;
		},
		
		function(){ //unlock
			data.wagelevel += 1;
		}
	);
	
	//generate repeat raises
	for(var i = 2; i<100; i++){ //raises
		var cost = i*2-1;
		shop_items["raise"+i] = new UpgradeButton(panes.shop_available, "Get a Raise!", "More money! More money! More money!", new Cost(data.workethic, cost), 
			function(){ //showcond
				if(!shop_items["raise"+(this.i-1)]) return false;
				return shop_items["raise"+(this.i-1)].bought;
			},
			
			function(){ //unlock
				data.wagelevel += 1;
			}
		);
		shop_items["raise"+i].i = i;
		shop_items["raise"+i].hidebought = true;
	}
	
	/*shop_items.fraise1 = new UpgradeButton(panes.shop_available, "Demand a raise.", "I have a knife.", new Cost(data.free, 0), 
		function(){ //showcond
			return data.fabknives.value >= 1;
		},
		
		function(){ //unlock
			data.wagelevel += 1;
		}
	);
	//generate repeat raises
	for(var i = 2; i<100; i++){ //raises
		shop_items["fraise"+i] = new UpgradeButton(panes.shop_available, "Demand a raise.", "I have a knife.", new Cost(data.free, 0), 
			function(){ //showcond
				if(!shop_items["fraise"+(this.i-1)]) return false;
				return shop_items["fraise"+(this.i-1)].bought;
			},
			
			function(){ //unlock
				data.wagelevel += 1;
			}
		);
		shop_items["fraise"+i].i = i;
	}*/
	
	//promotions
	shop_items.promotion1 = new UpgradeButton(panes.shop_available, "Get a Promotion!", "Switch over to a full time worker. Earn a consistent salary instead of an hourly wage, as long as you keep doing your paperwork.", new Cost(data.workethic, 5), 
		function(){ //showcond
			return data.joblevel == 1 && data.workethic.value >= 2;
		},
		
		function(){ //unlock
			data.joblevel = 2;
			data.paperwork.value += 10;
		}
	);
	
	//generate repeat promotions
	for(var i = 2; i<10; i++){ //promotions
		var cost = ((i+1)*(i+1+1))/2;
		shop_items["promotion"+i] = new UpgradeButton(panes.shop_available, "Get a Promotion!", "Easier job, same pay. Paperwork builds up slower.", new Cost(data.workethic, cost), 
			function(){ //showcond
				if(!shop_items["promotion"+(this.i-1)]) return false;
				return shop_items["promotion"+(this.i-1)].bought;
			},
			
			function(){ //unlock
				data.paperworktimermax += 3;
			}
		);
		shop_items["promotion"+i].i = i;
		shop_items["promotion"+i].hidebought = true;
	}
	
	//dlcs
	shop_items.company = new UpgradeButton(panes.shop_available, "Start a company", "This job sucks. I could make way more on my own.", new MultiCost(new Cost(data.money, 50000), new Cost(data.nothingness, 10), new Cost(data.workethic, 100)), 
		function(){ //showcond
			if(!shop_items["promotion9"]) return false;
			return shop_items["promotion9"].bought && data.researchgain >= 1;
		},
		
		function(){ //unlock
			data.company = true;
			clearCompanyUpgrades();
		}
	);
	
	
	//dlcs
	shop_items.dlc1 = new UpgradeButton(panes.shop_available, "DLC!", "They added crafting! When asked about the price, SuccuBox said \"People will pay for it.\"", new Cost(data.money, 1000), 
		function(){ //showcond
			return data.level.value >= 5 && data.common_hats.value >= 3;
		},
		
		function(){ //unlock
			data.crafting_available = true;
		}
	);
	shop_items.dlc2 = new UpgradeButton(panes.shop_available, "DLC!", "They added trading! You don't really need any more hats, but you can sell the spare gold you got from boxes. What is it useful for anyway? The going rate is 1$ for 10 gold, and you can sell it REALLY fast.", new Cost(data.money, 100e15), 
		function(){ //showcond
			return data.company && data.conquestenabled && data.money.value >= 1e15;
		},
		
		function(){ //unlock
			data.selling_available = true;
		}
	);
	
	//misc
	shop_items.strategyguide1 = new UpgradeButton(panes.shop_available, "Strategy Guide", "Volume 1: Basic Crafting Recipes", new Cost(data.money, 2000), 
		function(){ //showcond
			if(data.junk.value >= 1){
				UpdateInfoTicker("This is confusing. I should have gotten that strategy guide.");
				return true;
			}
			return false;
		},
		
		function(){ //unlock
			UpdateInfoTicker("Oh THATS how crafting works!");
			UpdateGameboxInfoTicker("Recipes added!");
			data.guide1 = true;
			DiscoverRecipes(1);
			alertOK("SUCCUA GUIDES","You read the guide and added all the crafting recipes it told you about to your recipe book! Check it out in the crafting menu.");
		}
	);
	
	shop_items.strategyguide2 = new UpgradeButton(panes.shop_available, "Strategy Guide", "Volume 2: Like 2 more crafting recipes", new Cost(data.money, 5e14), 
		function(){ //showcond
			return data.money.value >= 1e14;
		},
		
		function(){ //unlock
			UpdateGameboxInfoTicker("Recipes added!");
			DiscoverRecipes(3);
			alertOK("SUCCU GUIDES","You read the guide and added all the crafting recipes it told you about to your recipe book! Check it out in the crafting menu.");
		}
	);
	
	shop_items.strategyguide3 = new UpgradeButton(panes.shop_available, "Truth", "", new Cost(data.mysouls, 1), 
		function(){ //showcond
			return data.level.value >= 101;
		},
		
		function(){ //unlock
			UpdateGameboxInfoTicker("Recipes added!");
			DiscoverRecipes(5);
			alertOK("GOD","God told you the Truth. You wrote it down in your recipe book.");
		}
	);
	
	shop_items.riddles = new UpgradeButton(panes.shop_available, "Read the Book of Riddles", "You're scared...", new Cost(data.riddlebook, 1), 
		function(){ //showcond
			return data.riddlebook.value >= 1;
		},
		
		function(){ //unlock
			UpdateGameboxInfoTicker("Recipes added!");
			DiscoverRecipes(4);
			alertOK("THE BOOK OF RIDDLES","The book of riddles told you how to craft a gun.");
		}
	);
	
	shop_items.credit1 = new UpgradeButton(panes.shop_available, "Credit Card", "With this you can finally enable those auto payments.", new Cost(data.creditscore, 200), 
		function(){ //showcond
			return data.creditscore.value >= 100;
		},
		
		function(){ //unlock
			data.creditlimit = 1;
			data.autopayon = true;
		}
	);
	
	//generate repeat credit raises
	for(var i = 2; i<19; i++){ //credit raises
		var cost = 20+i*10;
		shop_items["credit"+i] = new UpgradeButton(panes.shop_available, "Raise Credit Limit", "Can auto-spend money faster.", new Cost(data.creditscore, cost), 
			function(){ //showcond
				if(!shop_items["credit"+(this.i-1)]) return false;
				return shop_items["credit"+(this.i-1)].bought;
			},
			
			function(){ //unlock
				data.creditlimit += 1;
			}
		);
		shop_items["credit"+i].i = i;
		shop_items["credit"+i].hidebought = true;
	}
	
	shop_items.boredom = new UpgradeButton(panes.shop_available, "Bored", "Channel your boredom into your work.", new Cost(data.nothingness, 5), 
		function(){ //showcond
			return data.nothingness.value >= 2;
		},
		
		function(){ //unlock
			data.researchgain = 1;
		}
	);
	
	
	//research
	shop_items.quantum = new UpgradeButton(panes.shop_available, "Quantum CPU", "An attachment for your computer that changes lootboxes into quantum lootboxes. Each quantum loot box contains one billion one-billionths of a loot box.", new Cost(data.research, 20000), 
		function(){ //showcond
			return data.research.value >= 1;
		},
		
		function(){ //unlock
			data.quantumboxes = true;
		}
	);
	shop_items.massfabricator = new UpgradeButton(panes.shop_available, "Mass Fabricator", "Enables crafting of real-life objects from within the game. Ok it's really just a fancy 3D printer and you didn't really discover it, just backed it on kickstarter.", new MultiCost(new Cost(data.research, 150), new Cost(data.money, 500)), 
		function(){ //showcond
			return data.research.value >= 1 && data.crafting_available;
		},
		
		function(){ //unlock
			data.fabricator = true;
		}
	);
	shop_items.dup1 = new UpgradeButton(panes.shop_available, "Dup Glitch", "Examine the games code for a way to get double the results from crafting.", 
		new Cost(data.research, 250), 
		function(){ //showcond
			return data.research.value >= 1;
		},
		
		function(){ //unlock
			data.craftyield = 2;
		}
	);
	shop_items.dup2 = new UpgradeButton(panes.shop_available, "Free Crafting Glitch", "Crafting no longer consumes resources. Just don't tell SuccuBox about the glitch so they won't patch it out.", 
		new Cost(data.research, 500), 
		function(){ //showcond
			return data.research.value >= 1;
		},
		
		function(){ //unlock
			data.freecrafting = true;
		}
	);
	shop_items.massfabricatormanual = new UpgradeButton(panes.shop_available, "Mass Fabricator Manual", "Knew I should have gotten the manual too...", new Cost(data.money, 1000), 
		function(){ //showcond
			return data.fabricator;
		},
		
		function(){ //unlock
			data.guide2 = true;
			DiscoverRecipes(2);
			alertOK("MASSFAB","You read the manual and added new crafting recipes to your recipe book! Check it out in the crafting menu!");
		}
	);
	
	shop_items.fabself = new UpgradeButton(panes.shop_available, "Reverse fabricate yourself into the game", "What? sure I guess...", new Cost(data.fabfabs, 1), 
		function(){ //showcond
			return data.fabfabs.value >= 1;
		},
		
		function(){ //unlock
			data.mysouls.value += 1;
			data.fabricatedself = true;
			UpdateInfoTicker("OH GOD I'M IN THE GAME");
			setTimeout(function(){UpdateInfoTicker("Oh wait. Guess it's just my soul that's in the game. I hope that's not bad or anything!")}, 2000);
			setTimeout(function(){UpdateInfoTicker("I AM ONE WITH THE LOOT BOXES")}, 4000);
		}
	);
	
	
	
	
	//company items
	
	//offices
	shop_items.office1 = new UpgradeButton(panes.shop_available, "Get an office", "More room for more employees!", new Cost(data.money, 200000), 
		function(){ //showcond
			return data.company;
		},
		
		function(){ //unlock
			data.maxemployees.value += 30;//50;
		}
	);
	shop_items.office2 = new UpgradeButton(panes.shop_available, "Get a bigger office", "Even more room for more employees!", new Cost(data.money, 500000), 
		function(){ //showcond
			if(!shop_items["office1"]) return false;
			return shop_items["office1"].bought;
		},
		
		function(){ //unlock
			data.maxemployees.value += 50;//100;
		}
	);
	shop_items.office3 = new UpgradeButton(panes.shop_available, "Get an even bigger office", "The biggest office on the block.", new Cost(data.money, 1000000), 
		function(){ //showcond
			if(!shop_items["office2"]) return false;
			return shop_items["office2"].bought;
		},
		
		function(){ //unlock
			data.maxemployees.value += 400;//500;
		}
	);
	shop_items.office4 = new UpgradeButton(panes.shop_available, "Get an office block", "Yeah you probably need the whole block anyway.", new Cost(data.money, 10000000), 
		function(){ //showcond
			if(!shop_items["office3"]) return false;
			return shop_items["office3"].bought;
		},
		
		function(){ //unlock
			data.maxemployees.value += 4500;//5000;
		}
	);
	shop_items.office5 = new UpgradeButton(panes.shop_available, "Get an office building", "You know what lets just get a whole building.", new Cost(data.money, 30000000), 
		function(){ //showcond
			if(!shop_items["office4"]) return false;
			return shop_items["office4"].bought;
		},
		
		function(){ //unlock
			data.maxemployees.value += 5000;// 10000;
		}
	);
	shop_items.office6 = new UpgradeButton(panes.shop_available, "Get an even taller office building", "The towering pillar of my budding empire! I mean... uh... \"company\"...", new Cost(data.money, 100000000), 
		function(){ //showcond
			if(!shop_items["office5"]) return false;
			return shop_items["office5"].bought;
		},
		
		function(){ //unlock
			data.maxemployees.value += 20000;// 30000;
		}
	);
	shop_items.office7 = new UpgradeButton(panes.shop_available, "Get a work campus", "My employees can live where they work and work where they live! Win-win!", new Cost(data.money, 1000000000), 
		function(){ //showcond
			if(!shop_items["office6"]) return false;
			return shop_items["office6"].bought;
		},
		
		function(){ //unlock
			data.maxemployees.value += 70000;// 100000;
		}
	);
	shop_items.office8 = new UpgradeButton(panes.shop_available, "Buy the local government", "Convert the whole town into office space.", new Cost(data.money, 10000000000), 
		function(){ //showcond
			if(!shop_items["office7"]) return false;
			return shop_items["office7"].bought;
		},
		
		function(){ //unlock
			data.maxemployees.value += 150000;// 250000;
		}
	);
	shop_items.office9 = new UpgradeButton(panes.shop_available, "Expand!", "Set up more office campuses. You know, in the states that will let you.", new Cost(data.money, 100000000000), 
		function(){ //showcond
			if(!shop_items["office8"]) return false;
			return shop_items["office8"].bought;
		},
		
		function(){ //unlock
			data.maxemployees.value += 750000;//1000000;
		}
	);
	shop_items.office10 = new UpgradeButton(panes.shop_available, "Skirt regulations", "Who cares if the states dont want you in, what can they do about it?", new Cost(data.money, 5e11), 
		function(){ //showcond
			if(!shop_items["office9"]) return false;
			return shop_items["office9"].bought;
		},
		
		function(){ //unlock
			data.maxemployees.value += 4000000;//5000000;
		}
	);
	shop_items.office11 = new UpgradeButton(panes.shop_available, "Skirt regulations again", "Lets just do that again? It worked the first time.", new Cost(data.money, 1e12), 
		function(){ //showcond
			if(!shop_items["office10"]) return false;
			return shop_items["office10"].bought;
		},
		
		function(){ //unlock
			//data.animosityrate = 1;
			//alertOK("THE GOVERNMENT","The government shut down your campuses before you could complete them");
		}
	);
	shop_items.office12 = new UpgradeButton(panes.shop_available, "Antarctic Offices", "Fill the continent with office space! There's so much room here!!", new Cost(data.money, 1e16), 
		function(){ //showcond
			return data.antarctica;
		},
		
		function(){ //unlock
			data.maxemployees.value += 1e9;
		}
	);
	
	
	//earnings
	shop_items.prod1 = new UpgradeButton(panes.shop_available, "Increase Productivity", "Our margins are way too low. We need to figure out how to increase productivity so we can earn more from each employee.", 
		new Cost(data.research, 350), 
		function(){ //showcond
			return data.company && data.employees.value >= 20;
		},
		
		function(){ //unlock
			data.employeerev.value = 120;
		}
	);
	shop_items.prod2 = new UpgradeButton(panes.shop_available, "Motivational Posters", "Encourages employees to work harder, increasing profits! A business blog on the internet suggested it.", 
		new MultiCost(new Cost(data.research, 750), new Cost(data.money, 100)),
		function(){ //showcond
			if(!shop_items["prod1"]) return false;
			return shop_items["prod1"].bought;
		},
		
		function(){ //unlock
			data.employeerev.value = 150;
		}
	);
	shop_items.prod3 = new UpgradeButton(panes.shop_available, "Motivational Robot", "It forces employees to work harder, increasing profits! A friend with an MBA told you about this.", 
		new MultiCost(new Cost(data.research, 50000), new Cost(data.money, 2000000)),
		function(){ //showcond
			if(!shop_items["prod2"]) return false;
			return shop_items["prod2"].bought;
		},
		
		function(){ //unlock
			data.employeerev.value = 200;
		}
	);
	shop_items.prod4 = new UpgradeButton(panes.shop_available, "Motivational Meeting", "Gather your employees for a meeting, and let them know their families will starve if they don't work harder. You got the idea from a TV show!", 
		new MultiCost(new Cost(data.research, 1000000), new Cost(data.money, 10000000)),
		function(){ //showcond
			if(!shop_items["prod3"]) return false;
			return shop_items["prod3"].bought;
		},
		
		function(){ //unlock
			data.employeerev.value = 500;
		}
	);
	shop_items.prod5 = new UpgradeButton(panes.shop_available, "Motivational Pets", "Every employee gets a pet tiger! If they don't work hard enough, the tiger will go hungry and eat them! A tiger salesman convinced you this would work.", 
		new MultiCost(new Cost(data.research, 5000000), new Cost(data.money, 1e9)),
		function(){ //showcond
			if(!shop_items["prod4"]) return false;
			return shop_items["prod4"].bought;
		},
		
		function(){ //unlock
			data.employeerev.value = 1000;
		}
	);
	shop_items.prod6 = new UpgradeButton(panes.shop_available, "Motivational Knife", "Act scary around employees. They'll work harder purely out of fear! You heard about this in a TED talk.", 
		new MultiCost(new Cost(data.animosity, 100), new Cost(data.fabknives, 1)),
		function(){ //showcond
			if(!shop_items["prod5"]) return false;
			return shop_items["prod5"].bought && data.animosity.value >= 50;
		},
		
		function(){ //unlock
			data.employeerev.value += 9000; //10000
		}
	);
	shop_items.prod6b = new UpgradeButton(panes.shop_available, "Motivational Dance", "Seduce your employees with your sexy moves, and they'll work harder for you. You learned this dance from a... tv show...", 
		new Cost(data.mojo, 6.9e6),
		function(){ //showcond
			if(!shop_items["prod5"]) return false;
			return shop_items["prod5"].bought && data.mojo.value >= 1;
		},
		
		function(){ //unlock
			data.employeerev.value += 9000; //10000
		}
	);
	shop_items.prod7 = new UpgradeButton(panes.shop_available, "Motivational Execution of the Holdouts", "A few people don't want to get hired by your company. Set an example of them, and your employees will work harder! You were taught about this in an \"Intro to Management\" class.", 
		new Cost(data.animosity, 1000),
		function(){ //showcond
			if(!shop_items["prod5"]) return false;
			return shop_items["prod5"].bought && data.totalconquered.value >= 3;
		},
		
		function(){ //unlock
			data.employeerev.value += 90000; //100000
			data.guilt.value += 1;
		}
	);
	
	shop_items.prod8 = new UpgradeButton(panes.shop_available, "Motivational Guilt Trip", "Blame your employees for the atrocities you ordered them to commit! There is salvation in working harder. You read about this in <i>Entrepreneurship Weekly</i>.", 
		new Cost(data.guilt, 10),
		function(){ //showcond
			if(!shop_items["prod7"]) return false;
			return shop_items["prod7"].bought && data.guilt.value >= 5;
		},
		
		function(){ //unlock
			data.employeerev.value += 150000; //250000
			data.guilt.value += 1;
		}
	);
	
	shop_items.prod8c = new UpgradeButton(panes.shop_available, "Motivational Sword", "Show your employees who's the boss! You saw this work in a youtube video.", 
		new MultiCost(new Cost(data.animosity, 500), new Cost(data.fabswords, 1)),
		function(){ //showcond
			if(!shop_items["prod5"]) return false;
			return shop_items["prod5"].bought && data.fabswords.value >= 1 && data.animosity.value >= 1;
		},
		
		function(){ //unlock
			//data.animosityrate += 1;
		}
	);
	shop_items.prod8b = new UpgradeButton(panes.shop_available, "MOTIVATIONAL GUN", "You heard about this in the Book of Riddles.", 
		new MultiCost(new Cost(data.animosity, 1000), new Cost(data.fabguns, 1)),
		function(){ //showcond
			if(!shop_items["prod5"]) return false;
			return shop_items["prod5"].bought && data.fabguns.value >= 1 && data.animosity.value >= 1;
		},
		
		function(){ //unlock
			data.employeerev.value += 150000; //10000
		}
	);
	
	
	shop_items.prod9 = new UpgradeButton(panes.shop_available, "Motivational Planetary Annihilation", "Blow up an alien homeplanet! They'll definitetely work harder after that. You came up with the idea all on your own, and absolutely not cause you saw it in a movie.", 
		new MultiCost(new Cost(data.employees, 1e14)),
		function(){ //showcond
			return data.employees.value >= 1e13;
		},
		
		function(){ //unlock
			data.maxemployees.value -= 1e14;
			data.employeerev.value += 750000; //1m
			data.guilt.value += 1;
		}
	);
	
	shop_items.prod10 = new UpgradeButton(panes.shop_available, "Motivational Space Communism", "Why even bother paying employees at this point? Lets get rid of all our costs. They'll still work hard, you know cause of that whole planet thing. A post on reddit really sold you on this idea.", 
		new MultiCost(new Cost(data.animosity, 12000), new Cost(data.guilt, 1e19)),
		function(){ //showcond
			return shop_items.prod9.bought && data.animosity.value >= 10000;
		},
		
		function(){ //unlock
			data.employee_upkeep_rate.value = 0;
			data.employee_conquest_rate.value = 0;
		}
	);
	
	
	//departments
	shop_items.hrdept = new UpgradeButton(panes.shop_available, "Human Resources Department", "Managing all these employees is tough. We should really get a human resources department to handle hires and assignments.", new Cost(data.money, 1000000), 
		function(){ //showcond
			if(!data.employees) return false;
			return data.employees.value >= 200;
		},
		
		function(){ //unlock
			data.hr_available = true;
			recalcHR();
		}
	);
	
	//conquest
	shop_items.military = new UpgradeButton(panes.shop_available, "\"Security\" Department", "The government won't let us expand anymore.... everything has a solution.", new MultiCost(new Cost(data.animosity, 100), new Cost(data.money, 5e12), new Cost(data.research, 1e9)), 
		function(){ //showcond
			return data.animosity.value >= 50;
		},
		
		function(){ //unlock
			data.conquestenabled = true;
		}
	);
	
	
	shop_items.conquest1 = new UpgradeButton(panes.shop_available, "\"Secure\" The USA", "Whole lot of potential employees live here don't they. They won't even see it coming.", 
		new Cost(data.security, 1e6), 
		function(){ //showcond
			return data.security.value >= 1;
		},
		
		function(){ //unlock1
			//data.conquestenabled = true;
			Conquest(1);
		}
	);
	
	
	shop_items.conquest2 = new UpgradeButton(panes.shop_available, "\"Secure\" Mexico", "<b>There can be no holdouts.</b>", 
		new Cost(data.security, 4e8), 
		function(){ //showcond
			return data.totalconquered.value >= 1;
		},
		
		function(){ //unlock
			//data.conquestenabled = true;
			Conquest(2);
		}
	);
	shop_items.conquest3 = new UpgradeButton(panes.shop_available, "\"Secure\" Canada", "<b>All must join The Corporation.</b>", 
		new Cost(data.security, 1e8), 
		function(){ //showcond
			return data.totalconquered.value >= 1;
		},
		
		function(){ //unlock
			//data.conquestenabled = true;
			Conquest(3);
		}
	);
	shop_items.conquest4 = new UpgradeButton(panes.shop_available, "\"Secure\" Central America", "<b>We promise \"Security\" for all.</b>", 
		new Cost(data.security, 1e7), 
		function(){ //showcond
			return data.totalconquered.value >= 1;
		},
		
		function(){ //unlock
			//data.conquestenabled = true;
			Conquest(4);
		}
	);
	shop_items.conquest5 = new UpgradeButton(panes.shop_available, "\"Secure\" Europe", "<b>None shall resist.</b>", 
		new Cost(data.security, 7e8), 
		function(){ //showcond
			return data.totalconquered.value >= 4;
		},
		
		function(){ //unlock
			//data.conquestenabled = true;
			Conquest(5);
		}
	);
	shop_items.conquest7 = new UpgradeButton(panes.shop_available, "\"Secure\" China", "<b>None CAN resist.</b>", 
		new Cost(data.security, 5e9), 
		function(){ //showcond
			return data.totalconquered.value >= 4;
		},
		
		function(){ //unlock
			//data.conquestenabled = true;
			Conquest(7);
		}
	);
	shop_items.conquest6 = new UpgradeButton(panes.shop_available, "\"Secure\" The Rest of Asia", "<b>It is the dream of The Founder.</b>", 
		new Cost(data.security, 5e10), 
		function(){ //showcond
			return data.totalconquered.value >= 4;
		},
		
		function(){ //unlock
			//data.conquestenabled = true;
			Conquest(6);
		}
	);
	
	shop_items.conquest8 = new UpgradeButton(panes.shop_available, "\"Secure\" Africa", "<b>Why, you ask?</b>", 
		new Cost(data.security, 4e9), 
		function(){ //showcond
			return data.totalconquered.value >= 4;
		},
		
		function(){ //unlock
			//data.conquestenabled = true;
			Conquest(8);
		}
	);
	shop_items.conquest10 = new UpgradeButton(panes.shop_available, "\"Secure\" South America", "<b>The reason is simple.</b>", 
		new Cost(data.security, 4e8), 
		function(){ //showcond
			return data.totalconquered.value >= 4;
		},
		
		function(){ //unlock
			//data.conquestenabled = true;
			Conquest(10);
		}
	);
	shop_items.conquest11 = new UpgradeButton(panes.shop_available, "\"Secure\" Australia", "<b>He needs to hit level 100 in this game he's playing.</b>", 
		new Cost(data.security, 1e8), 
		function(){ //showcond
			return data.totalconquered.value >= 4;
		},
		
		function(){ //unlock
			//data.conquestenabled = true;
			Conquest(11);
		}
	);
	shop_items.conquest9 = new UpgradeButton(panes.shop_available, "\"Secure\" Antarctica", "<b>And you need to help.</b>", 
		new Cost(data.security, 1e6), 
		function(){ //showcond
			return data.totalconquered.value >= 4;
		},
		
		function(){ //unlock
			//data.conquestenabled = true;
			Conquest(9);
		}
	);
	
	shop_items.conquest1.enabled_condition = function(){
		return this.cost.met()&&data.currentconquest.value==0;
	}
	shop_items.conquest2.enabled_condition = function(){
		return this.cost.met()&&data.currentconquest.value==0;
	}
	shop_items.conquest3.enabled_condition = function(){
		return this.cost.met()&&data.currentconquest.value==0;
	}
	shop_items.conquest4.enabled_condition = function(){
		return this.cost.met()&&data.currentconquest.value==0;
	}
	shop_items.conquest5.enabled_condition = function(){
		return this.cost.met()&&data.currentconquest.value==0;
	}
	shop_items.conquest6.enabled_condition = function(){
		return this.cost.met()&&data.currentconquest.value==0;
	}
	shop_items.conquest7.enabled_condition = function(){
		return this.cost.met()&&data.currentconquest.value==0;
	}
	shop_items.conquest8.enabled_condition = function(){
		return this.cost.met()&&data.currentconquest.value==0;
	}
	shop_items.conquest9.enabled_condition = function(){
		return this.cost.met()&&data.currentconquest.value==0;
	}
	shop_items.conquest10.enabled_condition = function(){
		return this.cost.met()&&data.currentconquest.value==0;
	}
	shop_items.conquest11.enabled_condition = function(){
		return this.cost.met()&&data.currentconquest.value==0;
	}
	
	shop_items.conquest1.descfunc = function(){
		if(data.currentconquest.value==0) return this.description;
		return this.description+"<br>"+"(You can only <strike>conquer</strike> bring \"security\" to one region at a time. Resolve your current \"Security Disagreement\" first.)"
	}
	shop_items.conquest2.descfunc = function(){
		if(data.currentconquest.value==0) return this.description;
		return this.description+"<br>"+"(You can only <strike>conquer</strike> bring \"security\" to one region at a time. Resolve your current \"Security Disagreement\" first.)"
	}
	shop_items.conquest3.descfunc = function(){
		if(data.currentconquest.value==0) return this.description;
		return this.description+"<br>"+"(You can only <strike>conquer</strike> bring \"security\" to one region at a time. Resolve your current \"Security Disagreement\" first.)"
	}
	shop_items.conquest4.descfunc = function(){
		if(data.currentconquest.value==0) return this.description;
		return this.description+"<br>"+"(You can only <strike>conquer</strike> bring \"security\" to one region at a time. Resolve your current \"Security Disagreement\" first.)"
	}
	shop_items.conquest5.descfunc = function(){
		if(data.currentconquest.value==0) return this.description;
		return this.description+"<br>"+"(You can only <strike>conquer</strike> bring \"security\" to one region at a time. Resolve your current \"Security Disagreement\" first.)"
	}
	shop_items.conquest6.descfunc = function(){
		if(data.currentconquest.value==0) return this.description;
		return this.description+"<br>"+"(You can only <strike>conquer</strike> bring \"security\" to one region at a time. Resolve your current \"Security Disagreement\" first.)"
	}
	shop_items.conquest7.descfunc = function(){
		if(data.currentconquest.value==0) return this.description;
		return this.description+"<br>"+"(You can only <strike>conquer</strike> bring \"security\" to one region at a time. Resolve your current \"Security Disagreement\" first.)"
	}
	shop_items.conquest8.descfunc = function(){
		if(data.currentconquest.value==0) return this.description;
		return this.description+"<br>"+"(You can only <strike>conquer</strike> bring \"security\" to one region at a time. Resolve your current \"Security Disagreement\" first.)"
	}
	shop_items.conquest9.descfunc = function(){
		if(data.currentconquest.value==0) return this.description;
		return this.description+"<br>"+"(You can only <strike>conquer</strike> bring \"security\" to one region at a time. Resolve your current \"Security Disagreement\" first.)"
	}
	shop_items.conquest10.descfunc = function(){
		if(data.currentconquest.value==0) return this.description;
		return this.description+"<br>"+"(You can only <strike>conquer</strike> bring \"security\" to one region at a time. Resolve your current \"Security Disagreement\" first.)"
	}
	shop_items.conquest11.descfunc = function(){
		if(data.currentconquest.value==0) return this.description;
		return this.description+"<br>"+"(You can only <strike>conquer</strike> bring \"security\" to one region at a time. Resolve your current \"Security Disagreement\" first.)"
	}
	
	
	
	//post conquest employee upgrades
	shop_items.robots = new UpgradeButton(panes.shop_available, "Robot Workers", "No more humans left on the planet to hire, but we reckon we could fit about 350 billion robot workers on this rock.", 
		new MultiCost(new Cost(data.research, 1e12), new Cost(data.money, 1e18)),
		function(){ //showcond
			return data.totalconquered.value >= 11 && data.employees.value == data.maxemployees.value;
		},
		
		function(){ //unlock
			data.maxemployees.value += 3.5e11;
		}
	);
	
	shop_items.space1 = new UpgradeButton(panes.shop_available, "I don't understand", "How many damn employees do I need to hit level 100? They don't want me to like, recruit literally every living being in the universe, or something, right?", 
		new Cost(data.nothingness, 1e11),
		function(){ //showcond
			return shop_items.robots.bought && data.employees.value >= 350e9;
		},
		
		function(){ //unlock
			
		}
	);
	shop_items.space2 = new UpgradeButton(panes.shop_available, "Recruit Literally Every Living Being in the Universe", "...", 
		new Cost(data.nothingness, 1e11),
		function(){ //showcond
			return shop_items.space1.bought;
		},
		
		function(){ //unlock
			
		}
	);
	shop_items.space3 = new UpgradeButton(panes.shop_available, "Space Program", "Fine lets do this.", 
		new MultiCost(new Cost(data.research, 2.5e13), new Cost(data.money, 5e19)),
		function(){ //showcond
			return shop_items.space2.bought;
		},
		
		function(){ //unlock
			data.space_enabled = true;
		}
	);
	shop_items.space4 = new UpgradeButton(panes.shop_available, "\"Secure\" The Aliens", "The aliens need \"security\"!", 
		new Cost(data.security, 1e12), 
		function(){ //showcond
			return data.aliens_discovered.value >= 1e9;
		},
		
		function(){ //unlock
			data.alien_security_enabled = true;
		}
	);
	
	
	shop_items.space5 = new UpgradeButton(panes.shop_available, "Warp Drive", "Explore faster!", 
		new Cost(data.research, 1e14),
		function(){ //showcond
			return data.aliens_discovered.value >= 1e9;
		},
		
		function(){ //unlock
			data.explorationrate.value += 9;
		}
	);
	shop_items.space6 = new UpgradeButton(panes.shop_available, "Neutrino Bombs", "The fastest way to ensure \"Security\"! You overheard an alien talking about developing this technology in order to start a revolution. He was promptly \"secured\", of course.", 
		new Cost(data.research, 5e14),
		function(){ //showcond
			return data.aliens_secured.value >= 1e12;
		},
		
		function(){ //unlock
			data.securityrate.value += 40;
		}
	);
	shop_items.space7 = new UpgradeButton(panes.shop_available, "Wormholes", "There was talk of an escape. Your security forces discovered an illegal wormhole and confiscated it. We can use this to explore even faster!", 
		new Cost(data.research, 1e16),
		function(){ //showcond
			return data.aliens_secured.value >= 1e13;
		},
		
		function(){ //unlock
			data.explorationrate.value += 40;
		}
	);
	
	
	shop_items.space8 = new UpgradeButton(panes.shop_available, "Guilt Drive", "Somehow you can harness built up guilt into faster ships AND better weapons? Who knew! Guilt is awesome!", 
		new MultiCost(new Cost(data.guilt, 1e20), new Cost(data.research, 1e30)),
		function(){ //showcond
			return data.guilt.value >= 1e15;
		},
		
		function(){ //unlock
			data.explorationrate.value += 50;
			data.securityrate.value += 50;
		}
	);
	
	
	shop_items.space9 = new UpgradeButton(panes.shop_available, "Time Warp", "Employees accomplish all tasks 10x faster.", 
		new MultiCost(new Cost(data.money, 1e70), new Cost(data.research, 1e60)),
		function(){ //showcond
			return data.money.value >= 1e60;
		},
		
		function(){ //unlock
			data.timescale.value = 10;
		}
	);
	
	//military science
	shop_items.science1 = new UpgradeButton(panes.shop_available, "Reboot Nuclear Program", "The USA sabotaged their nuclear arsenal before we took over so we couldn't use it. We need to restart it so we can create \"Security\" even faster.", 
		new Cost(data.research, 1e9), 
		function(){ //showcond
			return data.totalconquered.value >= 1;
		},
		
		function(){ //unlock
			data.securityrate.value += 9;
		}
	);
	
	shop_items.science2 = new UpgradeButton(panes.shop_available, "Security Squad", "Security bots are basically useless on their own, but as a squad they can provide a morale boost to the rest of your soldiers.", 
		new Cost(data.securitybots, 10), 
		function(){ //showcond
			return data.securitybots.value >= 1;
		},
		
		function(){ //unlock
			data.securityrate.value += 10;
		}
	);
	
	
	shop_items.hidesoul = new UpgradeButton(panes.shop_available, "Get Rid of the Free Soul", "Ok that thing is annoying. Lets take care of it.", 
		new MultiCost(new Cost(data.soulswords, 1), new Cost(data.fabricators, 1)),
		function(){ //showcond
			return data.fabsouls.value >= 1;
		},
		
		function(){ //unlock
			data.fabsouls.value = -100;
			select("ghost").classList.remove("gfadein");
			select("ghost").classList.add("gfadeout");
			var audio = new Audio('ghostno.mp3');
			audio.play();
		},
		30
	);
	
}

function clearCompanyUpgrades(){
	for(var i = 1; i<100; i++){ //raises
		shop_items["raise"+i].unlock();
	}
	for(var i = 1; i<10; i++){ //promotions
		shop_items["promotion"+i].unlock();
	}
	for(var i = 1; i<19; i++){ //credit raises
		shop_items["credit"+i].unlock();
	}
}


function purchasetree(amount){
	plural = ""; if(amount != 1) plural = "es";
	setTimeout(function(){
		alertOK("GIVE ME MONEY", "You Bought "+F(amount)+" Loot Box"+plural+"!", 
		function(){
			alertYESNO("GIVE ME MONEY","Wait a minute.... you actually paid right?", 
			function(){
				alertYESNO("GIVE ME MONEY","Be honest. I'm not actually like, checking this. Too much work for a dumb lootbox game you know.", 
				function(){
					alertYESNO("GIVE ME MONEY","I hope you know, if you're lying, that's just as bad as piracy or murder.", 
					function(){
						alertOK("GIVE ME MONEY","OK. I Believe you. Enjoy your loot box"+plural+"!");
						data.lootboxes.value += amount;
						data.cybertimer = 0;
						if(amount == 1) data.boughtboxes.value += 5;
						if(amount == 5) data.boughtboxes.value += 10;
						if(amount == 10) data.boughtboxes.value += 25;
					},
					function(){
						alertOK("GIVE ME MONEY","Thanks for being honest.");
						data.honesty.value += 1;
					});
				},
				function(){
					alertOK("GIVE ME MONEY","Thanks for being honest.");
					data.honesty.value += 1;
				});
			},
			function(){
				alertOK("GIVE ME MONEY","Ok. I'm not actually checking this, so thanks for being honest.");
				data.honesty.value += 1;
			});
		})
	}, 1000);
}


function buy1(){
	purchasetree(1);
	return true;
}
function buy5(){
	purchasetree(5);
	return true;
}
function buy10(){
	purchasetree(10);
	return true;
}


function unlockRaises(){
	for(var i = 1; i<100; i++){
		if(!shop_items["raise"+i].bought){
			shop_items["raise"+i].label = "Demand a raise.";
			shop_items["raise"+i].description = "I have a knife.";
			shop_items["raise"+i].cost = new Cost(data.free, 0);
		}
	}
	for(var i = 1; i<10; i++){
		if(!shop_items["promotion"+i].bought){
			shop_items["promotion"+i].label = "Demand a promotion.";
			shop_items["promotion"+i].description = "I have a knife.";
			shop_items["promotion"+i].cost = new Cost(data.free, 0);
		}
	}
}