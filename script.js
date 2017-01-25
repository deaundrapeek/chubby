
$(document).ready(function() {

   /* code for button 1  -- Turn the light Red */
   $('#button1').click(
     function() {
         $('#top-light').css("background", "red");
     }
   );
   /* code for button 2 --- Say STOP */
   $('#button2').click(
     function() {
         $('#top-light').html("<p> STOP </p>");
     }
   );
   $('#button3').click(
     function() {
         $('#middle-light').css("background", "yellow");
     }
   );

   $('#button4').click(
     function() {
         $('#bottom-light').css("background", "green");
     }
   );

   $('#button5').click(
     function() {
         $('#bottom-light').html("<p> GO! </p>");
     }
   )

   $('#button6').click(
     function() {
        $('#bottom-light').css("background", "red").fadeOut(100).fadeIn(200)
      }
    )
});
