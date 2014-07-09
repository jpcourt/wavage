var gearItem = function(wowApiItem, slot){
	this.slot = slot;
	this.name = wowApiItem['name'];
	this.ilevel = wowApiItem['itemLevel'];
}

var gear = function(wowApiGear){
	this.ilevel = wowApiGear['averageItemLevel'];
	this.head = new gearItem(wowApiGear['head'], head);
	this.neck = new gearItem(wowApiGear['neck'], neck);
	this.shoulder = new gearItem(wowApiGear['shoulder'], shoulder);
	this.back = new gearItem(wowApiGear['back'], back);
	this.chest = new gearItem(wowApiGear['chest'], chest);
	this.wrist = new gearItem(wowApiGear['wrist'], wrist);
	this.hands = new gearItem(wowApiGear['hands'], hands);
	this.waist = new gearItem(wowApiGear['waist'], waist);
	this.legs = new gearItem(wowApiGear['legs'], legs);
	this.feet = new gearItem(wowApiGear['feet'], feet);
	this.finger1 = new gearItem(wowApiGear['finger1'], finger1);
	this.finger2 = new gearItem(wowApiGear['finger2'], finger2);
	this.trinket1 = new gearItem(wowApiGear['trinket1'], trinket1);
	this.trinket2 = new gearItem(wowApiGear['trinket2'], trinket2);
	this.mainHand = new gearItem(wowApiGear['mainHand'], mainHand);
	this.offHand = new gearItem(wowApiGear['offHand'], offHand);
}

var character = function(wowApiData){
	this.name = wowApiData['name'];
	this.ilevel = wowApiData['items']['averageItemLevel'];
	this.race = wowApiData['race'];
	this.class = wowApiData['class'];
	this.gender = wowApiData['gender'];
	this.gear = new gear(wowApiData['items']);
}

gear.prototype.display = function(col){
	
}

gearItem.prototype.display = function(){
	var displayContent = "<div id='"+this.slot+"'>";
	displayContent += this.name+"<br>";
	displayContent += this.slot+"<br>";
	displayContent + "Ilevel : "+this.ilevel+"<br>";
	displayContent += "</div>";
	return displayContent;

}