// Write your JavaScript code here.
// Remember to pay attention to page loading!

function abortMission(shuttle) {
    shuttle.flying = false;
    shuttle.land.disabled = true;
    shuttle.abort.disabled = true;
    shuttle.takeOff.disabled = true;
    shuttle.rocket.style.top = "250px";
    shuttle.background.style.backgroundColor = "green";
    shuttle.height.innerHTML = "0";
    shuttle.status.innerHTML = "Mission aborted.";
}

function landMission(shuttle){
    alert("The shuttle is landing. Landing gear engaged.")
    shuttle.flying = false;
    shuttle.land.disabled = true;
    shuttle.takeOff.disabled = true;
    shuttle.abort.disabled = true;
    shuttle.rocket.style.top = "250px";
    shuttle.background.style.backgroundColor = "green";
    shuttle.height.innerHTML = "0";
    shuttle.status.innerHTML = "The shuttle has landed.";
}

function flyMission(shuttle) {
    
    shuttle.status.innerHTML = "Shuttle in flight.";
    shuttle.verticalPos = 200;
    shuttle.rocket.style.top = shuttle.verticalPos + "px";
    shuttle.height.innerHTML = "10,000";
    shuttle.background.style.backgroundColor = "blue";

    shuttle.controls[0].addEventListener("click", function (event) {
        
        shuttle.verticalPos -= 50;
        shuttle.rocket.style.top = shuttle.verticalPos + "px";
        shuttle.height.innerHTML = (Number(shuttle.height.innerHTML.replace(',','')) + 10000).toLocaleString();
    

    });

    shuttle.controls[1].addEventListener("click", function (event) {
        
        shuttle.verticalPos += 50;
        shuttle.rocket.style.top = shuttle.verticalPos + "px";
        shuttle.height.innerHTML = (Number(shuttle.height.innerHTML.replace(',','')) - 10000).toLocaleString();

    });

    shuttle.controls[2].addEventListener("click", function (event) {
        
        shuttle.horizontalPos += 10;
        shuttle.rocket.style.left = shuttle.horizontalPos + "px";

    });

    shuttle.controls[3].addEventListener("click", function (event) {
        
    shuttle.horizontalPos -= 10;
    shuttle.rocket.style.left = shuttle.horizontalPos + "px";

    });

    shuttle.land.addEventListener("click", function (event) {
        shuttle.flying = false;
        landMission(shuttle);
    });

    shuttle.abort.addEventListener("click", function (event) {
        if (confirm("Confirm that you want to abort the mission.")) {
            shuttle.flying = false;
            abortMission(shuttle);
        }
    });
    
    
    
}

function init () {
    let shuttle = {
        flying: false,
        controls: document.getElementsByTagName("button"),
        takeOff: document.getElementById("takeoff"),
        land: document.getElementById("landing"),
        abort: document.getElementById("missionAbort"),
        status: document.getElementById("flightStatus"),
        height: document.getElementById("spaceShuttleHeight"),
        background: document.getElementById("shuttleBackground"),
        rocket: document.getElementById("rocket"),
        verticalPos: 250,
        horizontalPos: 250
        
    };
    shuttle.rocket.style.position = "absolute";
    shuttle.rocket.style.top = shuttle.verticalPos + "px";
    shuttle.rocket.style.left = shuttle.horizontalPos + "px";

    shuttle.land.disabled = true;
    shuttle.abort.disabled = true;
    
    shuttle.takeOff.addEventListener("click", function (event) {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            shuttle.land.disabled = false;
            shuttle.abort.disabled = false;
            shuttle.flying = true;
            flyMission(shuttle);
        }
    });
 
}
window.onload = init;