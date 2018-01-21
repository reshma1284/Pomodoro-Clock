$(document).ready(function(){

  //Declaring global variables
  var storeSession,storeBreak,sessionRunning,sessionTimer;

 $(".incr").click(function() {
   var currentV = $(".breakTime").attr("value");
   currentV++;
   $(".breakTime").val(currentV);
   $(".breakTime").html(currentV);
 });

 $(".decr").click(function() {
   var currentV = $(".breakTime").attr("value");
   if(currentV>1){
     currentV--;
   }
   $(".breakTime").val(currentV);
   $(".breakTime").html(currentV);
 });

 $( ".incrSession" ).click(function() {
   var currentV = $(".sessionTime").attr("value");
   currentV++;
   $(".sessionTime").val(currentV);
   $(".sessionTime").html(currentV);
   $("#timer").html(currentV);
 });

 $( ".decrSession" ).click(function() {
   var currentV = $(".sessionTime").attr("value");
   if(currentV>1){
     currentV--;
   }
   $(".sessionTime").val(currentV);
   $(".sessionTime").html(currentV);
   $("#timer").html(currentV);
 });

 $( ".startSession" ).click(function() {
   var currentV = $(".sessionTime").attr("value");
   storeSession = currentV;
   storeBreak = $(".breakTime").attr("value");

   var timeInSec = currentV * 60;
   sessionRunning = "true";
   display = $('#timer');
   startTimer(timeInSec, display);
});

$( ".resetSession" ).click(function() {
  //alert('hi');
    console.log("function def: " + sessionTimer);
    clearInterval(sessionTimer);
    $("#timer").html(storeSession);
});

function startTimer(duration, display) {
   var timer = duration;
   var minutes = 0;
   var seconds = 0;

   sessionTimer = setInterval(function () {
   //   console.log("timer: " + timer);
   // console.log("minutes: " + minutes);
   // console.log("secnds: " + seconds)
       minutes = parseInt(timer / 60, 10)
       seconds = parseInt(timer % 60, 10);

       minutes = minutes < 10 ? "0" + minutes : minutes;
       seconds = seconds < 10 ? "0" + seconds : seconds;
       display.text(minutes + ":" + seconds);
       if ((--timer < 0) && (sessionRunning == "true")) {
           sessionRunning = "false";
           $('#timerHeader').text("Break !");
           $('.circle').css({"backgroundColor": "pink"});
           document.getElementById('myAudio').play();
           timer = storeBreak * 60;
       }
      else if ((timer < 0) && (sessionRunning == "false")) {
           $('#timerHeader').text("Session");
           $('.circle').css({"backgroundColor": "red"})
           sessionRunning = "true";
           document.getElementById('myAudio').play();
           timer = storeSession * 60;
       }
   }, 1000);
}

});
