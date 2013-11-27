$(document).ready(function(){
  $("#intro").hide();
  $("#welcome").click(function(){
    $(this).slideUp('slowly');
    $("#intro:nth-child(0)").show();
  });
  
});