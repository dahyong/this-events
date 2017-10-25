//Secret Menu Challenge!
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var menuElem = document.getElementsByClassName("name");

for(var i = 0; i<menuElem; i++){
	menuElem[i].addeEventListener("click", showSecret);
}

function showSecret(){
	var secretMenu = this.querySelectorAll(".menu")[0];
	if(secretMenu.style.visability === "hidden"){
		secretMenu.style.visability = "visible";
	}else{
		secretMenu.style.visability = "hidden";
	}
}