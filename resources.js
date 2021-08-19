function Resource(name, initial_value){
	this.name = name;
	this.value = initial_value;
	this.singular = name;
	
	this.format = function(v){
		return ""+F(v);
	}
	this.format_full = function(v){
		if(v == 1){
			return this.format(v)+ " "+this.singular;
		} else {
			return this.format(v)+ " "+this.name;
		}
	}
}


function Cost(resource, cost){
	this.resource = resource;
	this.cost = cost;
	
	this.met = function(){
		return this.resource.value >= this.cost;
	}
	this.spend = function(){
		this.resource.value -= this.cost;
		if(this.resource == data.money){
			data.totalspent += this.cost;
			data.spentaccum += this.cost;
		}
	}
	
	this.str = function(separator=", "){
		return this.resource.format_full(this.cost);
	}
}

function MultiCost(){
	this.costs = []
	
	for (var i = 0; i < arguments.length; i++) {
		this.costs.push(arguments[i]);
	}
	
	this.met = function(){
		for (var i = 0; i < this.costs.length; i++) {
			if(!this.costs[i].met()){
				return false;
			}
		}
		return true;
	}
	this.spend = function(){
		for (var i = 0; i < this.costs.length; i++) {
			this.costs[i].spend();
		}
	}
	
	this.str = function(separator=", "){
		var s = "";
		for(var i = 0; i<this.costs.length; i++){
			if(s.length != "") s += separator;
			s += this.costs[i].str(separator);
		}
		return s;
	}
}


function ResourceUnlock(resource, amount){
	this.resource = resource;
	this.amount = amount;
	
	this.unlock = function(multiplier = 1){
		this.resource.value += this.amount * multiplier;
	}
	
	
	this.str = function(separator=", "){
		return this.resource.format_full(this.amount);
	}
}

function FunctionUnlock(func){
	this.func = func;
	
	this.unlock = function(multiplier = 1){
		this.func();
	}
	
	this.str = function(separator=", "){
		return "Something!";
	}
}

function MultiUnlock(){
	this.purchases = []
	
	for (var i = 0; i < arguments.length; i++) {
		this.purchases.push(arguments[i]);
	}

	this.unlock = function(multiplier = 1){
		for (var i = 0; i < this.purchases.length; i++) {
			this.purchases[i].unlock(multiplier);
		}
	}
	
	this.str = function(separator=", "){
		var s = "";
		for(var i = 0; i<this.purchases.length; i++){
			if(s.length != "") s += separator;
			s += this.purchases[i].str(separator);
		}
		return s;
	}
}
