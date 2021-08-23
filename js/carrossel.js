var n = 1

$(document).ready(function(){
    $('.btn-next').click(function(e){
      n++;
      
      switch(n){
          case 1:
            $('.foto1').removeClass('esconder')
            $('.foto2').addClass('esconder')
            $('.foto3').addClass('esconder')
            break;
            case 2:
            $('.foto1').addClass('esconder')
            $('.foto2').removeClass('esconder')
            $('.foto3').addClass('esconder')
            break;
            case 3:
            $('.foto1').addClass('esconder')
            $('.foto2').addClass('esconder')
            $('.foto3').removeClass('esconder')
            break;
            default:
              n = 1
              $('.foto1').removeClass('esconder')
              $('.foto2').addClass('esconder')
              $('.foto3').addClass('esconder')
                break;
            
      }    
      
      
    })
    $('.btn-prev').click(function(e){
      n--;
      switch(n){
        case 1:
          $('.foto1').removeClass('esconder')
          $('.foto2').addClass('esconder')
          $('.foto3').addClass('esconder')
          break;
          case 2:
          $('.foto1').addClass('esconder')
          $('.foto2').removeClass('esconder')
          $('.foto3').addClass('esconder')
          break;
          case 3:
          $('.foto1').addClass('esconder')
          $('.foto2').addClass('esconder')
          $('.foto3').removeClass('esconder')
          break;
          default:
            n = 3
            $('.foto1').addClass('esconder')
            $('.foto2').addClass('esconder')
            $('.foto3').removeClass('esconder')
              break;
          
    }    
    })
})