$(document).ready(function showContent() {
  $(".about").click(function(){
    $('.content').addClass('hide');
    $('#about').removeClass('hide');
  });
  $(".timeline").click(function(){
    $('.content').addClass('hide');
    $('#timeline').removeClass('hide');
  });
  $(".links").click(function(){
    $('.content').addClass('hide');
    $('#links').removeClass('hide');
  });
  $(".coding").click(function(){
    $('.content').addClass('hide');
    $('#coding').removeClass('hide');
  });
  $(".ny").click(function(){
    $('.content').addClass('hide');
    $('#ny').removeClass('hide');
  });
  $(".travel").click(function(){
    $('.content').addClass('hide');
    $('#travel').removeClass('hide');
  });
  $(".btc").click(function(){
    $('.content').addClass('hide');
    $('#btc').removeClass('hide');
  });
  $(".back").click(function(){
    $('.content').addClass('hide');
    $('#back').removeClass('hide');
  });
  $('#about, #ny, #timeline, #links, #coding, #travel, #btc, #back').click(function() {
    $('.content').addClass('hide');
  });
});

$(document).ready(function showJob() {
  $(".exp1").hover(function(){
    $('.job').addClass('hide');
    $('#exeter').removeClass('hide');
  });
  $(".exp2").hover(function(){
    $('.job').addClass('hide');
    $('#experian').removeClass('hide');
  });
  $(".exp3").hover(function(){
    $('.job').addClass('hide');
    $('#google').removeClass('hide');
  });
  $(".exp4").hover(function(){
    $('.job').addClass('hide');
    $('#bloc').removeClass('hide');
  });
  $(".exp5").hover(function(){
    $('.job').addClass('hide');
    $('#thinkful').removeClass('hide');
  });
  $('.exp1, .exp2, .exp3, .exp4, .exp5').mouseleave(function() {
    $('.job').addClass('hide');
  });
});