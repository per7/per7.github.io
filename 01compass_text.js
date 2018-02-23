//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
        heading = e.webkitCompassHeading;
        alpha = e.alpha;
        if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = e.alpha;
        }
    
        //calls function to alter content based on heading
        myOrientation();
    }

//device orientation listener calls oriented function when heading changes
	window.addEventListener('deviceorientation', oriented, false);
    


//create arrays of possible content	
var content_rilke = ["trees", "moss", "a rubber mask of a deer" ];
var content_stein = ["a hidden quarry", "a nightclub", "the frozen sea", "rubber boots" ];
var content_perec = ["nothing", "trees", "a rock formation", "something unorganic left there by man" ];
var content_house = ["i", "the frozen storm", "a black pipe", "the door thorugh which you came" ];

//set content variable to one array
var content = content_perec;
//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");


    function myOrientation(){
        //text_area.innerHTML = compassdir;

        if(compassHeading > 0 && compassHeading <=90) {
            //text_area.innerHTML = source[Math.floor(Math.random()*source.length)];
            text_area.innerHTML = content[0];

        }
         if(compassHeading > 90 && compassHeading <=180) {
           
            text_area.innerHTML = content[1];

        }
         if(compassHeading > 180 && compassHeading <=270) {
            text_area.innerHTML = content[2];
      
        }
         if(compassHeading > 270 && compassHeading <=360) {
          
            text_area.innerHTML = content[3];
            
            
        }
	}


