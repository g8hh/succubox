function emp_format(v){
	if(data.hr_available){
		return ""+Math.floor(v).toFixed(0)+"%";
	} else {
		return ""+Math.floor(v).toFixed(0);
	}
}

conquest_info = [ //name, health, population
	"Nobody", 0,     	 	     0,
	"USA", 1e6,             318100000,
	"Mexico", 4e8, 		    127500000,
	"Canada", 1e8, 		     36290000,
	"Central America", 1e7,  42688190,
	"Europe", 1e9, 	        743100000,
	"Asia", 1e11, 	       3057000000,
	"China", 1e10, 	       1379000000,
	"Africa", 1e10, 	   1216000000,
	"Antarctica", 1e6, 	         1000,
	"South America", 1e9,   422500000,
	"Australia", 1e8, 	     24130000,
];

function init_compoany_rsc(){
	data.hr_available = false;
	data.space_enabled = false;
	data.alien_security_enabled = false;
	data.selling_available = false;
	
	data.totalconquered = new Resource("Total Regions Conquered", 0);
	data.employees = new Resource("Total Employees", 10);
	data.maxemployees = new Resource("Max Employees", 20);
	data.employeerev = new Resource("Revenue Per Employee", 110);
	data.security = new Resource("\"Security\"", 0);
	data.currentconquest = new Resource("At <strike>War</strike> A \"Security Disagreement\" With", 0);
	data.conquestprogress = new Resource("\"Security Disagreement\" Progress", 0);
	data.conquestpcent = new Resource("\"Security Disagreement\" Progress", 0);
	data.conquestcost = new Resource("\"Security\" Upkeep", 0);
	data.timescale = new Resource("Timescale", 1);
	
	data.employee_upkeep_rate = new Resource("Upkeep Per Employee", 100);
	data.employee_conquest_rate = new Resource("Upkeep Per Conquest", 50000);
	
	data.aliens_discovered = new Resource("Aliens Discovered", 0);
	data.aliens_secured = new Resource("Aliens \"Secured\"", 0);
	data.aliens_spendingrate = new Resource("\"Alien Security\" Spending Rate", 0);
	
	data.conquestpcent.format = function(v){return F2(v/100)+"%";};
	
	data.securityrate = new Resource("Security Rate", 1);
	data.explorationrate = new Resource("Exploration Rate", 1);
	
	data.currentconquest.format = function(v){
		return conquest_info[v*3];
	}
}

function Conquest(n){
	data.currentconquest.value = n;
	data.conquestprogress.value = conquest_info[n*3+1];
}

function init_company(){
	//misc
	
	
	//employees
	
	
	//assignment
	data.e_unassigned = new Resource("Unassigned Employees", 0);
	
	data.e_unassigned.format = emp_format;
	
	//work
	data.e_work = new Resource("Work", 10);
	data.e_research = new Resource("Research", 0);
	data.e_hr = new Resource("Human Resources", 0);
	data.e_conquest = new Resource("\"Security\"", 0);
	data.e_explore = new Resource("Space Exploration", 0);
	
	//game
	data.e_fight = new Resource("Grind", 0);
	data.e_buy = new Resource("Buy Lootboxes", 0);
	data.e_open = new Resource("Open Lootboxes", 0);
	data.e_sell = new Resource("Sell Gold", 0);
	
	data.e_work.format = emp_format;
	data.e_research.format = emp_format;
	data.e_hr.format = emp_format;
	data.e_conquest.format = emp_format;
	data.e_explore.format = emp_format;
	
	data.e_fight.format = emp_format;
	data.e_buy.format = emp_format;
	data.e_open.format = emp_format;
	data.e_sell.format = emp_format;
	
	//calc
	data.employee_upkeep = new Resource("Employee Upkeep", 0);
	data.employee_earnings = new Resource("Revenue", 0);
	data.employee_satisfaction = new Resource("Employee Satisfaction", 100);
	
	data.employee_upkeep.format = function(v){return "$"+F(v);};
	data.employee_upkeep.format_full = function(v){return "$"+F(v);};
	
	data.employee_earnings.format = function(v){return "$"+F(v);};
	data.employee_earnings.format_full = function(v){return "$"+F(v);};
	
	data.conquestcost.format = function(v){return "$"+F(v);};
	data.conquestcost.format_full = function(v){return "$"+F(v);};
	
	//elements
	addDiv(panes.company_tab, "panesubheader").innerHTML = "EMPLOYEE ASSIGNMENT";
	
	panes.leftassignments = addDiv(panes.company_tab, "employee_list");
	panes.rightassignments = addDiv(panes.company_tab, "employee_list");
	//addDiv(panes.leftassignments, "panesubheader").innerHTML = "WORK";
	//addDiv(panes.rightassignments, "panesubheader").innerHTML = "PLAY";
	

	
	objects.e_work = new EmployeeAssignmentButton(panes.leftassignments, data.e_work);
	objects.e_research = new EmployeeAssignmentButton(panes.leftassignments, data.e_research);
	objects.e_hr = new EmployeeAssignmentButton(panes.leftassignments, data.e_hr);
	objects.e_conquest = new EmployeeAssignmentButton(panes.leftassignments, data.e_conquest);
	objects.e_explore = new EmployeeAssignmentButton(panes.leftassignments, data.e_explore);
	
	objects.e_fight = new EmployeeAssignmentButton(panes.rightassignments, data.e_fight);
	objects.e_buy = new EmployeeAssignmentButton(panes.rightassignments, data.e_buy);
	objects.e_open = new EmployeeAssignmentButton(panes.rightassignments, data.e_open);
	objects.e_sell = new EmployeeAssignmentButton(panes.rightassignments, data.e_sell);
	addDiv(panes.rightassignments, "element_shell").innerHTML = "&nbsp<br>&nbsp";
	objects.eunassigned = new ResourceDisplay(panes.rightassignments, data.e_unassigned);
	
	
	
	objects.e_sell.hidden = true;
	objects.e_conquest.hidden = true;
	objects.e_hr.hidden = true;
	objects.e_explore.hidden = true;
	
	panes.company_btns = addDiv(panes.job_tab2, "company_btns");
	panes.company_rsc = addDiv(panes.job_tab2, "company_rsc");
	
	objects.hire = new PurchaseButton(panes.company_btns, "Hire Employee ($1000)", new Cost(data.money, 0), new FunctionUnlock(function(){
		employee_hr(1);
	}));
	objects.hire.enabled_condition = function(){
		return data.money.value >= data.employee_upkeep_rate.value*10 && data.employees.value <= data.maxemployees.value-1;
	}
	objects.research = new Button(panes.company_btns, "Research", function(){
		data.research.value += 1;
	});
	
	objects.compmoneydisp = new ResourceDisplay(panes.company_rsc, data.money);
	objects.compresearchdsp = new ResourceDisplay(panes.company_rsc, data.research);
	//objects.compfabfabsdisp = new ResourceDisplay(panes.company_rsc, data.fabfabs);
	
	objects.etotal = new ResourceDisplay(panes.company_rsc, data.employees);
	objects.emax = new ResourceDisplay(panes.company_rsc, data.maxemployees);
	objects.employee_upkeep = new ResourceDisplay(panes.company_rsc, data.employee_upkeep);
	objects.employee_earnings = new ResourceDisplay(panes.company_rsc, data.employee_earnings);
	//objects.employee_satisfaction = new ResourceDisplay(panes.company_rsc, data.employee_satisfaction);
	//objects.eunassigned = new ResourceDisplay(panes.company_rsc, data.e_unassigned);
	objects.security = new ResourceDisplay(panes.company_rsc, data.security);
	objects.c0 = new ResourceDisplay(panes.company_rsc, data.currentconquest);
	objects.c1 = new ResourceDisplayBar(panes.company_rsc, data.conquestpcent);
	objects.c2 = new ResourceDisplay(panes.company_rsc, data.conquestcost);
	
	objects.a0 = new ResourceDisplay(panes.company_rsc, data.aliens_discovered);
	objects.a1 = new ResourceDisplay(panes.company_rsc, data.aliens_secured);
	objects.a2 = new ResourceDisplay(panes.company_rsc, data.aliens_spendingrate);
	
	objects.etotal.hidden = false;
	objects.emax.hidden = false;
	objects.eunassigned.hidden = false;
	objects.employee_upkeep.hidden = false;
	objects.employee_earnings.hidden = false;
	//objects.employee_satisfaction.hidden = false;
}

function update_company_ui(){
	
	if(data.company){
		hideDiv(panes.job_tab);
		showDiv(panes.job_tab2);
		showDiv(panes.company_tab);
	} else {
		showDiv(panes.job_tab);
		hideDiv(panes.job_tab2);
		hideDiv(panes.company_tab);
		return;
	}
	
	if(data.hr_available){
		data.employee_upkeep.value = data.employees.value*data.employee_upkeep_rate.value;
		data.employee_earnings.value = (data.e_work.value/100.0 * data.employees.value)*data.employeerev.value;
		data.conquestcost.value = (data.e_conquest.value/100.0 * data.employees.value)*data.employee_conquest_rate.value;
	} else {
		data.employee_upkeep.value = data.employees.value*data.employee_upkeep_rate.value;
		data.employee_earnings.value = data.e_work.value*data.employeerev.value;
		data.conquestcost.value = data.e_conquest.value*data.employee_conquest_rate.value;
	}
	
	if(isNaN(data.employee_upkeep.value)) data.employee_upkeep.value = 0;
	if(isNaN(data.conquestcost.value)) data.conquestcost.value = 0;
	
	if(data.currentconquest.value == 0 && !data.alien_security_enabled){
		data.conquestcost.value = 0;
	}
	
	if(data.currentconquest.value != 0){
		data.conquestpcent.value = 10000-(data.conquestprogress.value / conquest_info[data.currentconquest.value*3+1])*10000;
	} else {
		data.conquestpcent.value = 0;
	}
	objects.c1.percent = data.conquestpcent.value/100;
	
	objects.e_hr.hidden = !data.hr_available;
	objects.e_conquest.hidden = !data.conquestenabled;
	objects.e_explore.hidden = !data.space_enabled;
	objects.e_sell.hidden = !data.selling_available;
	
	if(data.space_enabled){
		objects.c0.hidden = true;
		objects.c1.hidden = true;
	}
	
	if(data.employees.value >= 10e9){
		data.e_hr.name = "Robot Resources";
	}
	if(data.employees.value >= 1e12){
		data.e_hr.name = "Alien Resources";
	}
}


function update_company(){
	if(!data.company || paused) {
		setTimeout(update_company, 1000/company_tickrate);
		return;
	}
	
	update_company_ui();
	//calc upkeep
	
	company_tickrate = data.timescale.value;
	
	if(data.hr_available){
		employee_work(data.e_work.value/100.0 * data.employees.value);
		data.money.value -= data.employee_upkeep.value;
		data.money.value -= data.conquestcost.value;
		if(data.money.value < 0) {
			data.money.value = 0;
		} else {
			employee_research(data.e_research.value/100.0 * data.employees.value);
			employee_hr(data.e_hr.value/100.0 * data.employees.value);
			employee_conquest(data.e_conquest.value/100.0 * data.employees.value + data.securitybots.value);
			employee_explore(data.e_explore.value/100.0 * data.employees.value );
			
			employee_fight(data.e_fight.value/100.0 * data.employees.value);
			employee_buy(data.e_buy.value/100.0 * data.employees.value);
			employee_open(data.e_open.value/100.0 * data.employees.value);
			employee_sell(data.e_sell.value/100.0 * data.employees.value);
		}
	} else {
		employee_work(data.e_work.value);
		data.money.value -= data.employee_upkeep.value;
		data.money.value -= data.conquestcost.value;
		if(data.money.value < 0) {
			data.money.value = 0;
		} else {
			employee_research(data.e_research.value);
			employee_hr(data.e_hr.value);
			employee_conquest(data.e_conquest.value + data.securitybots.value);
			employee_explore(data.e_explore.value);
			
			employee_fight(data.e_fight.value);
			employee_buy(data.e_buy.value);
			employee_open(data.e_open.value);
			employee_sell(data.e_sell.value);
		}
	}
	if(isNaN(data.money.value)) data.money.value = Number.POSITIVE_INFINITY;
	
	setTimeout(update_company, 1000/company_tickrate);
	
}



function employee_work(amount){
	if(isNaN(amount)) return;
	data.money.value += amount*data.employeerev.value;
}
function employee_research(amount){
	if(isNaN(amount)) return;
	data.research.value += amount;
}
function employee_hr(amount){
	if(isNaN(amount)) return;
	var amt_possible = Math.floor(data.money.value / (data.employee_upkeep_rate.value*10));
	if(amt_possible < amount) amount = amt_possible;
	
	amt_possible = (data.maxemployees.value+.001) - data.employees.value;
	if(amt_possible < amount) amount = amt_possible;
	
	data.employees.value += Math.floor(amount);
	if(!data.hr_available){
		data.e_unassigned.value += amount;
	}
	data.money.value -= amount*(data.employee_upkeep_rate.value*10);
}
function employee_conquest(amount){
	if(isNaN(amount)) return;
	if(data.currentconquest.value > 0){
		data.conquestprogress.value -= amount/1000 * data.securityrate.value;
		if(data.conquestprogress.value <= 0){
			if(data.currentconquest.value==9) data.antarctica = true;
			data["conq"+data.currentconquest.value] = true;
			data.maxemployees.value += conquest_info[data.currentconquest.value*3+2];
			data.currentconquest.value = 0;
			data.conquestprogress.value = 0;
			data.totalconquered.value += 1;
			data.guilt.value += 1;
		}
	} else {
		if(data.alien_security_enabled){
			var converted = amount/1000 * data.securityrate.value;
			if(converted+data.aliens_secured.value > data.aliens_discovered.value){
				var aconverted = data.aliens_discovered.value-data.aliens_secured.value
				var overflow = converted - aconverted;
				
				data.aliens_secured.value += aconverted;
				data.maxemployees.value += aconverted;
				data.security.value += overflow;
				data.guilt.value += aconverted/1e12;
			} else {
				data.maxemployees.value += amount/1000 * data.securityrate.value;
				data.aliens_secured.value += amount/1000 * data.securityrate.value;
				data.guilt.value += (amount/1000 * data.securityrate.value)/1e12;
			}
			
			if(amount == Number.POSITIVE_INFINITY) data.security.value = Number.POSITIVE_INFINITY;
			
		} else {
			data.security.value += amount/1000 * data.securityrate.value;
		}
	}
}
function employee_explore(amount){
	if(isNaN(amount)) return;
	data.aliens_discovered.value += amount/500 * data.explorationrate.value;
}

function employee_fight(amount){
	if(amount == 0) return;
	if(isNaN(amount)) return;
	fight(amount);
	if(data.enemy_health.value <= 0){ data.enemyrespawntimer += 90; }
	//update_combat();
}
function employee_buy(amount){
	if(isNaN(amount)) return;
	amount = Math.floor(amount);
	
	var amt_possible = Math.floor(data.money.value / 10);
	if(amt_possible < amount) amount = amt_possible;
	data.money.value -= amount*10;
	data.lootboxes.value += amount;
	if(data.lootboxes.value < 1) data.lootboxes.value = 0;
}
function employee_open(amount){
	if(isNaN(amount)) return;
	amount = Math.floor(amount);
	var amt_possible = data.lootboxes.value;
	if(amt_possible < amount) amount = amt_possible;

	data.lootboxes.value -= amount;
	if(data.lootboxes.value < 1) data.lootboxes.value = 0;
	open_multiple(amount);
	
}
function employee_sell(amount){
	if(isNaN(amount)) return;
	amount *= 1000;
	var amt_possible = Math.floor(data.gold.value);
	if(amt_possible < amount) amount = amt_possible;
	
	data.gold.value -= amount;
	data.money.value += amount/10;
}


function recalcHR(){
	var mperc = 100;
	
	data.e_unassigned.value = Math.floor(data.e_unassigned.value / data.employees.value);
	
	data.e_work.value = Math.floor(data.e_work.value / data.employees.value);
	data.e_research.value = Math.floor(data.e_research.value / data.employees.value);
	data.e_hr.value = Math.floor(data.e_hr.value / data.employees.value);
	data.e_conquest.value = Math.floor(data.e_conquest.value / data.employees.value);
	data.e_explore.value = Math.floor(data.e_explore.value / data.employees.value);
	
	
	data.e_fight.value = Math.floor(data.e_fight.value / data.employees.value);
	data.e_buy.value = Math.floor(data.e_buy.value / data.employees.value);
	data.e_open.value = Math.floor(data.e_open.value / data.employees.value);
	data.e_sell.value = Math.floor(data.e_sell.value / data.employees.value);
	
	mperc -= 	data.e_unassigned.value+
				data.e_work.value + data.e_research.value + data.e_hr.value + data.e_conquest.value + data.e_explore.value +
			    data.e_fight.value + data.e_buy.value + data.e_open.value + data.e_sell.value;
			 
	data.e_work.value += mperc;
}




function EmployeeAssignmentButton(rootdiv, resource){
	CreateGenericElement.bind(this)(rootdiv);
	this.resource = resource;
	
	this.aleftbtn = new Button(this.contentdiv, "\u00ab", function(){
		for(var i = 0; i<10; i++){
			if(this.resource.value > 0) {
				this.resource.value -= 1;
				data.e_unassigned.value += 1;
			}
		}
	}.bind(this));
	this.leftbtn = new Button(this.contentdiv, "<", function(){
		if(this.resource.value > 0) {
			this.resource.value -= 1;
			data.e_unassigned.value += 1;
		}
	}.bind(this));
	
	this.numdiv = addDiv(this.contentdiv, "empcount");

	this.rightbtn = new Button(this.contentdiv, ">", function(){
		if(data.e_unassigned.value > 0) {
			this.resource.value += 1;
			data.e_unassigned.value -= 1;
		}
	}.bind(this));
	this.arightbtn = new Button(this.contentdiv, "\u00bb", function(){
		for(var i = 0; i<10; i++){
			if(data.e_unassigned.value > 0) {
				this.resource.value += 1;
				data.e_unassigned.value -= 1;
			}
		}
	}.bind(this));
	
	addDiv(this.contentdiv, "spacer");
	
	this.labeldiv = addDiv(this.contentdiv, "label");
	this.labeldiv.className = "element_shell_inline"
	
	this.updateself = function(){
		if(!data.hr_available){
			this.aleftbtn.hidden = true;
			this.arightbtn.hidden = true;
		} else {
			this.aleftbtn.hidden = false;
			this.arightbtn.hidden = false;
		}
		this.leftbtn.update();
		this.rightbtn.update();
		this.aleftbtn.update();
		this.arightbtn.update();
		
		
		this.numdiv.innerHTML = this.resource.format(this.resource.value);
		this.labeldiv.innerHTML = this.resource.name;
		
	}
}