$(document).ready(function(){
  $('.btn-ingles').click(function(e){
      $('.ing').removeClass('esconder')
      $('.pt').addClass('esconder')
  }) 
  $('.btn-port').click(function(e){
    $('.pt').removeClass('esconder')
    $('.ing').addClass('esconder')
})


})