(function(){
    "use strict";
    
    let convertType = "miles";
    const heading = document.querySelector("h1");
    const intro  = document.querySelector("p");
    const answerDiv = document.querySelector("#answer");
    const form = document.querySelector("form");
   
    document.addEventListener("keydown", function(event){
       var key = event.code;
   
       if (key === "KeyM"){
           convertType = "miles";
           heading.textContent = "Miles to Kilometers Converter";
           intro.textContent = "Type in a number of miles and click the button to convert the distance to kilometers.";
       }
       else if (key === "KeyK"){
           convertType = "kilometers";
           heading.textContent = "Kilometers to Miles Converter";
           intro.textContent = "Type in a number of kilometers and click the button to convert the distance to miles.";
       }
    });
   
    form.addEventListener("submit", function(event){
       event.preventDefault();
       const distance = parseFloat(document.getElementById('distance').value);
   
       if(distance) {
           if (convertType === "miles") {
               const converted = (distance * 1.60934).toFixed(3);
               answerDiv.textContent = `${distance} miles converts to ${converted} kilometers`;
           }
           else {
              const converted = (distance * 0.621371).toFixed(3);
              answerDiv.textContent = `${distance} kilometers converts to ${converted} miles`;
           }
       }
       else {
           answerDiv.textContent = "Please enter a number";
       }
    });
   
   })();
   