


function executeThisCodeAfterFileLoads() {
  
  var dogsData = JSON.parse(this.responseText).dogs;
  //console.log("dogs", dogsData);
  getBreeds(dogsData);

  // domString(data.cats); //data
  
}




function executeThisCodeAfterFileErrors() {
  console.log("Shit broke");

}




var myDawgs = new XMLHttpRequest;

myDawgs.addEventListener("load", executeThisCodeAfterFileLoads);
myDawgs.addEventListener("error", executeThisCodeAfterFileErrors);
myDawgs.open("GET", "dogs.json"); //type request, get file
myDawgs.send();



function getBreeds(dogz) {
//console.log("dogs array inside getBreedz", dogz);
var myBreeds = new XMLHttpRequest;
myBreeds.addEventListener("load", executeThisCodeAfterFileLoads2);
myBreeds.addEventListener("error", executeThisCodeAfterFileErrors);
myBreeds.open("GET", "breeds.json"); //type request, get file
myBreeds.send();

function executeThisCodeAfterFileLoads2() {
  
  var breedsData = JSON.parse(this.responseText).breeds;
  //console.log("breeds", breedsData);
  //console.log("dogs next to breeds", dogz);
  combinedArray(dogz, breedsData);

}




}



function combinedArray(dogsArray, breedsArray) {
     console.log("dogsArray", dogsArray);
     console.log("breedsArray", breedsArray);
	

	//loop through dogs and look at breed-id
	dogsArray.forEach(function(dog){
		//console.log("one dog", dog);
		var  currentBreedId = dog["breed-id"];

		//console.log("dog breed_id", currentBreedId);
		breedsArray.forEach(function(breed){
			if (currentBreedId === breed.id) {


			console.log("one breed", breed);
			dog["dogBreed"] = breed.name;
			dog["basePrice"] = breed["base-price"];
			dog["description"] = breed.description;
			dog["finalPrice"] = dog.basePrice + dog["add-on-price"];
			}



		});
			//console.log("one dog", dog);
	});

	//loop thrrough breeds and find matching breed_id
	//make final price

    console.log("all the dogs", dogsArray);
    domString(dogsArray)
}

function domString(dogs) {
 var reallyLongDomString = "";
//usual sttuff - fat for loop
  writeToDom(reallyLongDomString)

}


function writeToDom(strang) {

// 
}








