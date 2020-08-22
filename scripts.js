// Write your JavaScript code here.
// Remember to pay attention to page loading!

let abortMission = null;
let landing = null;
let takeOff = null;
let status = null;
let shuttleBkgrnd = null;
let altitude = null;

function init () {
    abortMission = document.getElementById("missionAbort");
    landing = document.getElementById("landing");
    takeOff = document.getElementById("takeoff");
    status = document.getElementById("flightStatus");
    shuttleBkgrnd = document.getElementById("shuttleBackground");
    altitude = document.getElementById("spaceShuttleHeight");
    let altNum = Number(altitude.innerHTML);
    let image = document.querySelector("img");
    
    
    // landing = document.querySelector("p");

    takeOff.addEventListener("click", function (event) {
      let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
      if (response) {
          status.innerHTML = "Shuttle in flight.";
          shuttleBkgrnd.style.backgroundColor = "blue";
          altitude.innerHTML = altNum + 10000;
 
      } else {
          console.log(false)
      }
    
    }); 

    landing.addEventListener("click", function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed";
        shuttleBkgrnd.style.backgroundColor = "green";
        altitude.innerHTML = "0";
    }); 
  

    abortMission.addEventListener("click", function (event) {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            status.innerHTML = "Mission aborted.";
            shuttleBkgrnd.style.backgroundColor = "green";
            altitude.innerHTML = "0";
        } else {
            console.log(false)
        }
      
      });
 
}

let startingPoint = null;

function moveImgUp() {
    let image = document.querySelector("img");
    image.style.position ="relative";
    startingPoint += -10
    let move = String(startingPoint) + "px"
    image.style.top = move;
    altitude = document.getElementById("spaceShuttleHeight");
    let altNum = Number(altitude.innerHTML);
    altitude.innerHTML = altNum + 10000;
 }

 function moveImgDown() {
    let image = document.querySelector("img");
    image.style.position ="relative";
    startingPoint += -10
    let move = String(startingPoint) + "px"
    image.style.bottom = move;
    altitude = document.getElementById("spaceShuttleHeight");
    let altNum = Number(altitude.innerHTML);
    altitude.innerHTML = altNum - 10000;
 }

 function moveImgLeft() {
    let image = document.querySelector("img");
    image.style.position ="relative";
    startingPoint += 10
    let move = String(startingPoint) + "px"
    image.style.left = move;

 }

 function moveImgRight() {
    let image = document.querySelector("img");
    image.style.position ="relative";
    startingPoint += 10
    let move = String(startingPoint) + "px"
    image.style.right = move;

 }

window.onload = init;