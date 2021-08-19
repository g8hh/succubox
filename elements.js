//basic element modification

function select(name){
	return document.getElementById(name);
}

function addDiv(parent_element, id){
	var newdiv = document.createElement('div');
	newdiv.id = id;
	newdiv.className = id;
	parent_element.appendChild(newdiv);
	return newdiv;
}

function hideDiv(element){
	element.style.display = "none";
}
function showDiv(element){
	element.style.display = "";
}
function setInner(element, text){
	if(element.innerHTML != text) element.innerHTML = text;
}


function CreateGenericElement(rootdiv){
	this.rootdiv = rootdiv;
	this.contentdiv = addDiv(this.rootdiv, "element_shell");
	
	this.hidden = false;
	this.hide = function(){
		this.contentdiv.style.display = "none"
	}
	this.show = function(){
		this.contentdiv.style.display = "";
	}
	
	this.update = function(){
		if(this.updateself) this.updateself();
		if(this.hidden) this.hide(); else this.show();
	}
}


function ResourceDisplayEX(rootdiv, label, resource, prefix = ""){
	CreateGenericElement.bind(this)(rootdiv);
	
	this.label = label;
	this.resource = resource;
	this.prefix = prefix;
	this.pval = this.resource.value;


	this.labeldiv = addDiv(this.contentdiv, "rd_label");
	this.valuediv = addDiv(this.contentdiv, "rd_value");
	
	this.autoshow = true;
	this.autohide = false;
	this.hidden = true;

	this.updateself = function(){
		var cval = Math.floor(this.resource.value);
		
		if(this.autoshow && cval > 0) this.hidden = false;
		if(this.autohide && cval <= 0) this.hidden = true;
		
		this.labeldiv.innerHTML = this.resource.name+":&nbsp";
		this.valuediv.innerHTML = this.resource.format(this.resource.value);
		
		if(this.pval > cval){
			this.valuediv.classList.remove("flashRed");
			this.valuediv.classList.remove("flashGreen");
			void this.valuediv.offsetWidth;
			this.valuediv.classList.add("flashRed");
		}
		if(this.pval < cval){
			this.valuediv.classList.remove("flashRed");
			this.valuediv.classList.remove("flashGreen");
			void this.valuediv.offsetWidth;
			this.valuediv.classList.add("flashGreen");
		}
		
		this.pval = cval;
	}
	
	this.update();
}

function ResourceDisplay(rootdiv, resource){
	ResourceDisplayEX.bind(this)(rootdiv, resource.name, resource);
}


function ResourceDisplayBar(rootdiv, resource){
	CreateGenericElement.bind(this)(rootdiv);
	
	this.label = resource.name;
	this.resource = resource;
	this.pval = this.resource.value;
	
	this.percent = 0;

	this.labeldiv = addDiv(this.contentdiv, "bar_label");
	
	this.barbgdiv = addDiv(this.contentdiv, "bar_bg");
	this.barfilldiv = addDiv(this.barbgdiv, "bar_fill");
	this.valuediv = addDiv(this.barbgdiv, "bar_value");
	
	this.autoshow = true;
	this.autohide = false;
	this.hidden = true;

	this.updateself = function(){
		var cval = Math.floor(this.resource.value);
		
		if(this.autoshow && cval > 0) this.hidden = false;
		if(this.autohide && cval <= 0) this.hidden = true;
		
		this.barfilldiv.style.width = this.percent+"%";
		
		this.labeldiv.innerHTML = this.resource.name+":&nbsp";
		this.valuediv.innerHTML = this.resource.format(this.resource.value);
		
		if(this.pval > cval){
			this.valuediv.classList.remove("flashRed");
			this.valuediv.classList.remove("flashGreen");
			void this.valuediv.offsetWidth;
			this.valuediv.classList.add("flashRed");
		}
		if(this.pval < cval){
			this.valuediv.classList.remove("flashRed");
			this.valuediv.classList.remove("flashGreen");
			void this.valuediv.offsetWidth;
			this.valuediv.classList.add("flashGreen");
		}
		
		this.pval = cval;
	}
	
	this.update();
}

function Button(rootdiv, label, func){
	CreateGenericElement.bind(this)(rootdiv);
	
	this.label = label;
	this.func = func;
	
	this.enabled = true;
	this.enabled_condition = function(){return true;}

	this.contentdiv.className = "button";
	
	this.onClick = function(){
		if(this.enabled && this.enabled_condition()){
			this.func();
		}
		
	}
	
	this.contentdiv.addEventListener('click', this.onClick.bind(this));
	
	this.updateself = function(){
		if(this.enabled && this.enabled_condition()){
			this.contentdiv.classList.remove("disabled_button");
		} else {
			this.contentdiv.classList.add("disabled_button")
		}
		
		setInner(this.contentdiv, this.label);
	}
	
	this.update();
}


function PurchaseButton(rootdiv, label, cost, result){
	this.cost = cost;
	this.result = result;

	Button.bind(this)(rootdiv, label, function(){
		this.cost.spend();
		this.result.unlock();
	});
	
	this.enabled_condition = function(){return this.cost.met();}
	
	this.update();
}

function UpgradeButton(rootdiv, label, description, cost, showcond, result, delay=0){
	this.bought = false;
	this.available = false;
	this.showcond = showcond;
	this.unlockfunc = result;
	this.hidebought = false;
	this.i = 1;
	this.delaytimer = delay;
	this.unlock = function(){
		if(!this.bought){
			this.bought = true;
			this.enabled = false;
			this.unlockfunc();
			
		}
	};
	PurchaseButton.bind(this)(rootdiv, label, cost, new FunctionUnlock(this.unlock.bind(this)));
	this.description = description;
	this.contentdiv.innerHTML = "";
	this.labeldiv = addDiv(this.contentdiv, "up_label");
	this.ilabeldiv = addDiv(this.labeldiv, "up_ilabel");
	this.ilabelcostdiv = addDiv(this.labeldiv, "up_icost");
	this.descdiv = addDiv(this.contentdiv, "up_desc");
	
	this.descfunc = function(){return this.description;}
	
	this.updateself = function(){
		if(!this.bought && !this.available){
			if(this.showcond()){
				this.delaytimer -= 1/unlockevents_tickrate;
				if(this.delaytimer < 0){
					this.available = true;
				}
			}
		}
		
		if(this.available) {
			this.hidden = false;
			if(!this.bought) this.contentdiv.classList.add("fadein")
		} else {
			this.hidden = true;
		}
		
		if(this.bought && this.hidebought){
			this.hidden = true;
		}
		
		if(this.enabled && this.enabled_condition()){
			this.contentdiv.classList.remove("disabled_upbutton");
		} else {
			this.contentdiv.classList.add("disabled_upbutton")
		}
		if(this.bought){
			this.available = true;
			setInner(this.ilabelcostdiv, "(Bought)");
			this.contentdiv.classList.remove("disabled_upbutton");
			this.contentdiv.classList.add("bought_upbutton")
			
			if(this.contentdiv.parentElement != panes.shop_bought){
				this.contentdiv.classList.remove("fadein")
				this.contentdiv.parentElement.removeChild(this.contentdiv);
				
				panes.shop_bought.appendChild(this.contentdiv);
			}
		} else {
			setInner(this.ilabelcostdiv, "("+this.cost.str()+")");
			this.contentdiv.classList.remove("bought_upbutton")
			
			if(this.contentdiv.parentElement != panes.shop_available){
				this.contentdiv.parentElement.removeChild(this.contentdiv);
				panes.shop_bought.appendChild(this.contentdiv);
			}
		}
		setInner(this.descdiv, this.descfunc());
		setInner(this.ilabeldiv, this.label+"&nbsp");
	}
	
	this.contentdiv.className = "up_button";
	this.update();
}


function CraftingItem(rootdiv, resource){
	CreateGenericElement.bind(this)(rootdiv);
	this.resource = resource;
	this.number = 0;
	this.leftbtn = new Button(this.contentdiv, "<", function(){
		this.number -= 1; if(this.number < 0) this.number = 0;
	}.bind(this));
	
	this.numdiv = addDiv(this.contentdiv, "craftcount");
	
	this.rightbtn = new Button(this.contentdiv, ">", function(){
		this.number += 1;
	}.bind(this));
	
	addDiv(this.contentdiv, "spacer");
	
	this.rscdisp = new ResourceDisplay(this.contentdiv, this.resource);
	this.rscdisp.contentdiv.className = "element_shell_inline";
	
	this.updateself = function(){
		this.hidden = this.rscdisp.hidden;
		this.numdiv.innerHTML = this.number;
		this.leftbtn.update();
		this.rightbtn.update();
		this.rscdisp.update();
		
		if(this.number > 0) {
			this.numdiv.classList.add("highlight");
		} else {
			this.numdiv.classList.remove("highlight");
		}
	}
	
	this.spend = function(){
		if(this.canspend()){
			this.resource.value -= this.number;
		}
	}
	this.canspend = function(){
		return this.resource.value >= this.number;
	}
}



function UnlockableElementGroup(elements, unlockcondition){
	this.elements = elements;
	this.cond = unlockcondition;
	
	
	this.update = function(){
		if(this.cond()){
			this.unlocked = true;
			for(var i = 0; i<this.elements.length; i++){
				this.elements[i].hidden = false;
			}
		} else {
			for(var i = 0; i<this.elements.length; i++){
				this.elements[i].hidden = true;
			}
		}
	}
	
	this.update();
}

var popupRespondYes;
var popupRespondNo;
var popupRespondOk;
var closePopup = function(){
	hideDiv(select("popup"));
	paused = false;
}
var openPopup = function(){
	showDiv(select("popup"));
	paused = true;
}



function alertOK(title, msg, onok=null){
	popupRespondOk = onok;
	select("popupcontent").innerHTML = msg;
	select("popupheader").innerHTML = title;
	objects.popupyes.hidden = true;
	objects.popupno.hidden = true;
	objects.popupok.hidden = false;
	objects.popupok.label = "OK";
	objects.popupyes.update();
	objects.popupno.update();
	objects.popupok.update();
	openPopup();
}

function alertCANCEL(title, msg, onok=null){
	popupRespondOk = onok;
	select("popupcontent").innerHTML = msg;
	select("popupheader").innerHTML = title;
	objects.popupyes.hidden = true;
	objects.popupno.hidden = true;
	objects.popupok.hidden = false;
	objects.popupok.label = "Cancel";
	objects.popupyes.update();
	objects.popupno.update();
	objects.popupok.update();
	openPopup();
}

function alertYESNO(title, msg, onyes=null, onno=null){
	popupRespondYes = onyes;
	popupRespondNo = onno;
	select("popupcontent").innerHTML = msg;
	select("popupheader").innerHTML = title;
	objects.popupyes.hidden = false;
	objects.popupno.hidden = false;
	objects.popupok.hidden = true;
	objects.popupyes.update();
	objects.popupno.update();
	objects.popupok.update();
	openPopup();
}



function UpdateGameboxInfoTicker(str){
	addDiv(panes.game_info, "game_infobox_item").innerHTML = str;
	
	if(panes.game_info.children.length > 100){
		panes.game_info.removeChild(panes.game_info.children[0]);
	}
	
	panes.game_info.scrollTop = panes.game_info.scrollHeight;
}

function UpdateInfoTicker(str){
	addDiv(panes.conscience_info, "infobox_item").innerHTML = str;
	
	if(panes.conscience_info.children.length > 5){
		panes.conscience_info.removeChild(panes.conscience_info.children[0]);
	}
	
	panes.conscience_info.scrollTop = panes.conscience_info.scrollHeight;
}





var paypalbuttons = "                                                                                                                                                                \
<div class='paycont'>                                                                                                                                                                \
	<div class='paycolumn'>                                                                                                                                                          \
		<br>1 Loot Box ($5)<br><br>                                                                                                                                                  \
		<form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_blank' onsubmit='return buy1()'>                                                                                            \
		<input type='hidden' name='cmd' value='_s-xclick'>                                                                                                                           \
		<input type='hidden' name='hosted_button_id' value='KHG8R469HR54W'>                                                                                                          \
		<input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!'>          \
		<img alt='' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1'>                                                                       \
		</form>                                                                                                                                                                      \
		\ud83c\udf81                                                                                                                                                                     \
	</div>                                                                                                                                                                           \
	<div class='paycolumn'>                                                                                                                                                          \
		<br>5 Loot Boxes ($10)<br><br>                                                                                                                                               \
		<form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_blank' onsubmit='return buy5()'>                                                                                            \
		<input type='hidden' name='cmd' value='_s-xclick'>                                                                                                                           \
		<input type='hidden' name='hosted_button_id' value='NFNNMQHFGD5MG'>                                                                                                          \
		<input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!'>          \
		<img alt='' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1'>                                                                       \
		</form>                                                                                                                                                                      \
		\ud83c\udf81\ud83c\udf81\ud83c\udf81\ud83c\udf81\ud83c\udf81                                                                                                                                                                        \
	</div>                                                                                                                                                                           \
	<div class='paycolumn'>                                                                                                                                                          \
		10 Loot Boxes ($25)<br><b>(Best Value!)</b><br><br>                                                                                                                                 \
		<form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_blank' onsubmit='return buy10()'>                                                                                            \
		<input type='hidden' name='cmd' value='_s-xclick'>                                                                                                                           \
		<input type='hidden' name='hosted_button_id' value='QS9F4ZBKVUQJJ'>                                                                                                          \
		<input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!'>          \
		<img alt='' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1'>                                                                       \
		</form>                                                                                                                                                                      \
		\ud83c\udf81\ud83c\udf81\ud83c\udf81\ud83c\udf81\ud83c\udf81<br>\ud83c\udf81\ud83c\udf81\ud83c\udf81\ud83c\udf81\ud83c\udf81                                                                                                                                                             \
	</div>                                                                                                                                                                           \
	</div>                                                                                                                                                                           \
"
