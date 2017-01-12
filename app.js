$(document).ready(function() {
  var color = 'black';
  var colors = 'red purple blue green yellow black'
  $('#red').on('click', function(){
    color = 'red';
  })
  $('#purple').on('click', function(){
    color = 'purple';
  })
  $('#blue').on('click', function(){
    color = 'blue';
  })
  $('#green').on('click', function(){
    color = 'green';
  })
  $('#yellow').on('click', function(){
    color = 'yellow';
  })
  $('#white').on('click', function(){
    color = 'black';
  })
  $('.box').on('click', function(){
        $(this).addClass(color);
  })
  $('.box').on('dblclick', function(){
    $(this).removeClass(colors);
  })
  $("#reset").on('click', function(){
    $('.box').removeClass(colors)
  })
})
