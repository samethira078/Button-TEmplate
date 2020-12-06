document.getElementById(0).style.display = "inline-block";
getal =0;
for(var i=0; i<3; i++){
	getal++;
	document.getElementById("but"+ getal).innerHTML = 0;
}

function knop(knop){
	num = 1;
	document.getElementById("but" + knop).addEventListener("click", function(){
	document.getElementById("but" + knop).innerHTML++;
	document.getElementById(num++).style.display = "inline-block";});
}
knop(1); knop(2); knop(3);