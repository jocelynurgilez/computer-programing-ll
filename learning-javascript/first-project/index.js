const select = document.getElementById("weather");
const paragrpah = document.getElementById("weather-rec");

select.addEventListener("change",setWeather);

function setWeather(){
	const choice = select.value;
	/*alert("You chose " + choice + "!"); */
	if(choice === "sunny"){
		paragrpah.innerText ="Don't wear to much cloths.";
	}
	else if(choice === "rainy"){
		paragrpah.innerText ="Wear a jacket.";
	}
	else if(choice === "cloudy"){
		paragrpah.innerText ="Wear a hoodie.";
	}
	else if(choice === "snowing"){
		paragrpah.innerText ="Don't wear little cloths.";
	}
	 else if(choice === "sunny"){
		paragrpah.innerText ="Don't wear to much cloths.";
	}
	else{
		paragrpah.innerText ="Get a rain jacket.";
	}
	
	
}