// Write your JavaScript code here.
// Remember to pay attention to page loading!

let abortMission = null;
let landing = null;
let takeOff = null;
let status = null;
let shuttleBkgrnd = null;
let altitude = null;
let startingPoint = null;
let image = null;
let altNum = 0;

function init () {
    abortMission = document.getElementById("missionAbort");
    landing = document.getElementById("landing");
    takeOff = document.getElementById("takeoff");
    status = document.getElementById("flightStatus");
    shuttleBkgrnd = document.getElementById("shuttleBackground");
    altitude = document.getElementById("spaceShuttleHeight");
    image = document.querySelector("img");
    let move = null;
     
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

    image.style.position ="absolute";
    image.style.left ="0px";
    image.style.bottom ="0px";
    
    document.getElementById("up").onclick = function() {
        startingPoint += 10;
        move = String(startingPoint) + "px"
        image.style.bottom = move;
        altNum = Number(altitude.innerHTML)
        altitude.innerHTML = altNum + 10000;
    };

    document.getElementById("down").onclick = function() {
        startingPoint -= 10;
        move = String(startingPoint) + "px"
        image.style.bottom = move;
        altNum = Number(altitude.innerHTML)
        altitude.innerHTML = altNum - 10000;
    };
    
    document.getElementById("left").onclick = function() {
        startingPoint += 10;
        move = String(startingPoint) + "px"
        image.style.left = move;
    };

    document.getElementById("right").onclick = function() {
        startingPoint -= 10;
        move = String(startingPoint) + "px"
        image.style.left = move;
    };
}

window.onload = init;