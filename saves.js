var loaded_successfully = false;


function save(){
	var storage = window.localStorage;
	
	storage.setItem("save_exists", JSON.stringify(true));
	
	for(obj in data){
		if(data[obj].hasOwnProperty("value")){
			if(data[obj].value == Number.POSITIVE_INFINITY || isNaN(data[obj].value)){
				storage.setItem("data-"+obj, "inf");
			} else {
				storage.setItem("data-"+obj, JSON.stringify(data[obj].value));
			}
		} else {
			storage.setItem("data-"+obj, JSON.stringify(data[obj]));
		}
	}
	
	for(obj in objects){
		if(objects[obj].hasOwnProperty("autoshow")){
			storage.setItem("disp-"+obj, JSON.stringify(objects[obj].hidden));
		}
	}
	
	for(obj in crafting_items){
		if(crafting_items[obj].hasOwnProperty("rscdisp")){
			storage.setItem("cdisp-"+obj, JSON.stringify(crafting_items[obj].rscdisp.hidden));
		}
	}
	
	for(obj in shop_items){
		storage.setItem("shopbought-"+obj, JSON.stringify(shop_items[obj].bought));
		storage.setItem("shopavailable-"+obj, JSON.stringify(shop_items[obj].available));
	}
	
	for(obj in game_events){
		storage.setItem("event-"+obj, JSON.stringify(game_events[obj].unlocked));
	}
	
	for(var i = 0; i<crafttable.length; i++){
		storage.setItem("r"+i, JSON.stringify(crafttable[i].discovered));
	}
}

function saverecipes(){
	var storage = window.localStorage;
	for(var i = 0; i<crafttable.length; i++){
		storage.setItem("r"+i, JSON.stringify(crafttable[i].discovered));
	}
}

function load(){
	var storage = window.localStorage;
	if(storage.getItem("save_exists")){
		
		for(obj in data){
			var name = "data-"+obj;
			
			if(storage.getItem(name)){
				if(data[obj].hasOwnProperty("value")){
					if(storage.getItem(name)=="inf"){
						data[obj].value = Number.POSITIVE_INFINITY;
					} else {
						data[obj].value = JSON.parse(storage.getItem(name));
					}
				} else {
					data[obj] = JSON.parse(storage.getItem(name));
				}
			}
		}
		
		for(obj in objects){
			if(objects[obj].hasOwnProperty("autoshow")){
				if(storage.getItem("disp-"+obj)){
					objects[obj].hidden = JSON.parse(storage.getItem("disp-"+obj))
				}
			}
		}
		for(obj in crafting_items){
			if(crafting_items[obj].hasOwnProperty("rscdisp")){
				if(storage.getItem("cdisp-"+obj)){
					crafting_items[obj].rscdisp.hidden = JSON.parse(storage.getItem("cdisp-"+obj))
				}
			}
		}
		
		for(obj in shop_items){
			if(storage.getItem("shopbought-"+obj)){
				shop_items[obj].bought = JSON.parse(storage.getItem("shopbought-"+obj));
				shop_items[obj].available = JSON.parse(storage.getItem("shopavailable-"+obj));
			}
		}
		
		for(obj in game_events){
			if(storage.getItem("event-"+obj)){
				game_events[obj].unlocked = JSON.parse(storage.getItem("event-"+obj));
			}
		}
		for(var i = 0; i<crafttable.length; i++){
			if(storage.getItem("r"+i)){
				crafttable[i].discovered = JSON.parse(storage.getItem("r"+i));
			}
		}
	} else if(ascensionlevel>1){
		for(var i = 0; i<crafttable.length; i++){
			if(storage.getItem("r"+i)){
				crafttable[i].discovered = JSON.parse(storage.getItem("r"+i));
			}
		}
	}
	
	loaded_successfully = true;
}


window.onbeforeunload = function (e) {
	if(loaded_successfully){
		save();
	}
};

function autosave(){ //sep function cause save needs to get set to null sometimes
	save();
}

function unJail(){
	data.jailtimer = 1;
	closePopup();
}
function dbg1(){ //crafting start
	unJail();
	shop_items.buygame.unlock();
	shop_items.getjob.unlock();
	shop_items.promotion1.unlock();
	shop_items.dlc1.unlock();
	shop_items.strategyguide1.unlock();
	shop_items.boredom.unlock();
	data.lootboxes.value = 500;
	closePopup();
}
function dbg2(){ //company start
	dbg1();
	shop_items.massfabricator.unlock();
	shop_items.company.unlock();
	closePopup();
}
function dbg3(){ //conquest start
	dbg2();
	shop_items.office1.unlock();
	shop_items.office2.unlock();
	shop_items.office3.unlock();
	shop_items.office4.unlock();
	shop_items.office5.unlock();
	shop_items.office6.unlock();
	shop_items.office7.unlock();
	shop_items.office8.unlock();
	shop_items.office9.unlock();
	shop_items.office10.unlock();
	shop_items.office11.unlock();
	shop_items.prod1.unlock();
	shop_items.prod2.unlock();
	shop_items.prod3.unlock();
	shop_items.prod4.unlock();
	shop_items.prod5.unlock();
	shop_items.prod5.unlock();
	shop_items.prod6.unlock();
	shop_items.quantum.unlock();
	data.employees.value = 5e6;
	shop_items.military.unlock();
	shop_items.hrdept.unlock();
	closePopup();
}
function dbg4(){ //space start
	dbg3();
	closePopup();
	shop_items.prod7.unlock();
	shop_items.prod8.unlock();
	shop_items.conquest1.unlock();
	shop_items.conquest2.unlock();
	shop_items.conquest3.unlock();
	shop_items.conquest4.unlock();
	shop_items.conquest5.unlock();
	shop_items.conquest6.unlock();
	shop_items.conquest7.unlock();
	shop_items.conquest8.unlock();
	shop_items.conquest9.unlock();
	shop_items.conquest10.unlock();
	shop_items.conquest11.unlock();
	shop_items.science1.unlock();
	data.totalconquered.value = 11;
	data.currentconquest.value = 0;
	data.guilt.value = 2;
	shop_items.robots.unlock();
	data.employees.value = data.maxemployees.value;
	data.nothingness.value = 1e12;
	data.research.value = 1e14;
	data.money.value = 1e20;
	closePopup();
}

function dbg5(){ //close to 100 levels
	dbg4();	
	shop_items.space1.unlock();
	shop_items.space2.unlock();
	shop_items.space3.unlock();
	shop_items.space4.unlock();
	shop_items.space5.unlock();
	shop_items.space6.unlock();
	shop_items.space7.unlock();
	shop_items.space8.unlock();
	data.maxemployees.value = 1e40;
	data.employees.value = 1e40;
}


function resetSave(){
	window.onbeforeunload = null;
	window.localStorage.clear();
	save = null;
	location.reload();
}

function ResetPrompt(){
	alertYESNO("RESET SAVE?","Are you sure you want to reset your save?", resetSave);
}



function Ascend(){
	window.onbeforeunload = null;
	window.localStorage.clear();
	save = null;
	window.localStorage["ascension"] = JSON.stringify(ascensionlevel+1);
	saverecipes();
	location.reload();
}