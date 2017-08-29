


function executeThisCodeAfterFileLoads() {
  
  var data = JSON.parse(this.responseText).breeds;
  console.log("breeds", data);
  // domString(data.cats); //data
  
}

function executeThisCodeAfterFileLoads2() {
  
  var data = JSON.parse(this.responseText).dogs;
  console.log("dogs", data)
}


function executeThisCodeAfterFileErrors() {
  console.log("Shit broke");

}




var myDawgs = new XMLHttpRequest;
var myBreeds = new XMLHttpRequest;



myDawgs.addEventListener("load", executeThisCodeAfterFileLoads2);
myDawgs.addEventListener("error", executeThisCodeAfterFileErrors);
myDawgs.open("GET", "dogs.json"); //type request, get file
myDawgs.send();

myBreeds.addEventListener("load", executeThisCodeAfterFileLoads);
myBreeds.addEventListener("error", executeThisCodeAfterFileErrors);
myBreeds.open("GET", "breeds.json"); //type request, get file
myBreeds.send();