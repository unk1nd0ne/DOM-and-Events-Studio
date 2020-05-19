// Write your JavaScript code here.
// Remember to pay attention to page loading!

function abortMission(shuttle) {
    shuttle.flying = false;
    for (button of shuttle.controls){
        button.disabled = true;
    }
    shuttle.rocket.style.top = "250px";
    shuttle.background.style.backgroundColor = "green";
    shuttle.height.innerHTML = "0";
    shuttle.status.innerHTML = "Mission aborted.";
    //shuttle.chatter[2].innerHTML = "Game over, man, game over!";

}

function landMission(shuttle){
    alert("The shuttle is landing. Landing gear engaged.")
    shuttle.flying = false;
    for (button of shuttle.controls){
        button.disabled = true;
    }
    shuttle.rocket.style.top = "250px";
    shuttle.background.style.backgroundColor = "green";
    shuttle.height.innerHTML = "0";
    shuttle.status.innerHTML = "The shuttle has landed.";
    //shuttle.chatter[2].innerHTML = "Houston, mission success";

}

function flyMission(shuttle) {
    
    shuttle.status.innerHTML = "Shuttle in flight.";
    shuttle.verticalPos = 200;
    shuttle.rocket.style.top = shuttle.verticalPos + "px";
    shuttle.height.innerHTML = "10,000";
    shuttle.background.style.backgroundColor = "blue";
    //shuttle.chatter[2].innerHTML = "Houston, we have liftoff";

    shuttle.controls[0].addEventListener("click", function (event) {

        try {
            if (shuttle.verticalPos === 0) {
                throw Error("You cannot leave the game area!");
            } else {
                shuttle.verticalPos -= 50;
                shuttle.rocket.style.top = shuttle.verticalPos + "px";
                shuttle.height.innerHTML = (Number(shuttle.height.innerHTML.replace(',','')) + 10000).toLocaleString();
            }
                
            } catch (error) {
                alert(error.message);
            }   
    });

    shuttle.controls[1].addEventListener("click", function (event) {
        
        try {
            if (shuttle.verticalPos === 250) {
                throw Error("You cannot leave the game area!");
            } else {
                shuttle.verticalPos += 50;
                shuttle.rocket.style.top = shuttle.verticalPos + "px";
                shuttle.height.innerHTML = (Number(shuttle.height.innerHTML.replace(',','')) - 10000).toLocaleString();
            }
                
            } catch (error) {
                alert(error.message);
            }
       

    });

    shuttle.controls[2].addEventListener("click", function (event) {
        
        try {
            if (shuttle.horizontalPos > 540) {
                throw Error("You cannot leave the game area!");
            } else {
                shuttle.horizontalPos += 10;
                shuttle.rocket.style.left = shuttle.horizontalPos + "px";
            }
                
            } catch (error) {
                alert(error.message);
            }

    });

    shuttle.controls[3].addEventListener("click", function (event) {
        
        try {
        if (shuttle.horizontalPos < 0) {
            throw Error("You cannot leave the game area!");
        } else {
            shuttle.horizontalPos -= 10;
            shuttle.rocket.style.left = shuttle.horizontalPos + "px";
        }
            
        } catch (error) {
            alert(error.message);
        }
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
        controls: document.getElementsByTagName("button"),
        takeOff: document.getElementById("takeoff"),
        land: document.getElementById("landing"),
        abort: document.getElementById("missionAbort"),
        status: document.getElementById("flightStatus"),
        height: document.getElementById("spaceShuttleHeight"),
        background: document.getElementById("shuttleBackground"),
        rocket: document.getElementById("rocket"),
        verticalPos: 250,
        horizontalPos: 275,
        chatter: document.getElementsByTagName("p")
        
    };
    shuttle.rocket.style.position = "absolute";
    shuttle.rocket.style.top = shuttle.verticalPos + "px";
    shuttle.rocket.style.left = shuttle.horizontalPos + "px";
    shuttle.land.disabled = true;
    shuttle.abort.disabled = true;
    
    shuttle.takeOff.addEventListener("click", function (event) {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            shuttle.takeOff.disabled = true;
            shuttle.land.disabled = false;
            shuttle.abort.disabled = false;
            flyMission(shuttle);
        }
    });
 
}
window.onload = init;