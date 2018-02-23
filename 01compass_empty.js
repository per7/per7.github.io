//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
        heading = e.webkitCompassHeading;
        alpha = e.alpha;
        if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = e.alpha;
        }
        
        if(compassHeading > 00 && compassHeading < 20) {
                text_area.textContent = "Was he a part of that group? I cant remember. ";
        }

        if(compassHeading >= 40 && compassHeading < 60) {
                text_area.textContent = "I think he was. He’s on the opposite side of the room. ";
        }

        if(compassHeading >= 60 && compassHeading < 80) {
                text_area.textContent = "He’s watching, writing. I cant tell if he is actively taking part or not.";
        }

        if(compassHeading >= 80 && compassHeading < 100) {
                text_area.textContent = "Looks like he is writing what he is seeing. Like I am writing what I am seeing, only I’m not seeing much of what the rest of the group is doing.";
        }
        
        if(compassHeading > 100 && compassHeading < 120) {
                text_area.textContent = "Or rather, I do see what they are doing and I understand what it is they are doing, maybe Im not very interested in it.";
        }

        if(compassHeading >= 120 && compassHeading < 140) {
                text_area.textContent = "Probably because I understand it. I don’t really understand what he is doing. I move closer, first to the north side of the room.";
        }

        if(compassHeading >= 140 && compassHeading < 160) {
                text_area.textContent = ". I stay there for a while, as if Im looking at what the rest of the group is doing, but really Im trying to get closer to him.";
        }

        if(compassHeading >= 160 && compassHeading < 180) {
            text_area.textContent = "From this angle I see him writing in his notebook, he probably is writing what they are doing.";
        }

        if(compassHeading > 180 && compassHeading < 200) {
                text_area.textContent = ". If he is, will he use it? If he is going to use it in some way, he needs to be quick.";
        }

        if(compassHeading >= 200 && compassHeading < 220) {
                text_area.textContent = "My inner clock tells me they have about one minute left, but I cant be sure. I move closer, I want to peek behind his shoulder to see what he has written";
        }

        if(compassHeading >= 220 && compassHeading < 240) {
                text_area.textContent = " I remember sitting quite closely to where he is sitting now.";
        }

        if(compassHeading >= 240 && compassHeading < 260) {
                text_area.textContent = "I remember watching a group of people in the middle of the room. I remember writing what I was seing";
        }
        
        if(compassHeading > 260 && compassHeading < 280) {
                text_area.textContent = "The time must be up soon. Maybe he will say something just as the time is up, is he aware of the time?";
        }

        if(compassHeading >= 280 && compassHeading < 360) {
                text_area.textContent = "I dont see him looking at a clock or phone. The time is up. He doesnt say anything.";

        }

        
        // text_area.textContent = compassHeading;
        // calls function to alter content based on heading
        // myOrientation();
    }

//device orientation that can track orientation on space
	window.addEventListener('deviceorientation', oriented, false);
    


//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");


    function myOrientation(){
     
            text_area.textContent = "empty compass";
        
	}


