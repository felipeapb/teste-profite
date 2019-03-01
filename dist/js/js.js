$( document ).ready( function(){
    var largurajanela = $('.product-item').length;  
    var larguraItem =$('.product-item').width();
    $('.carousel-giro').css( "width",largurajanela* larguraItem);
   
   
    //pegar numeros de itens para verificar paginacao
    //criar paginacao 
   
    //1° pegar tamanho da tela
   
    var tamanhoTela = $(window).width();
       if(tamanhoTela<600){
        var itensPaginados = 2
    }
    else{
       var itensPaginados = 4
    }

    var numerodePaginas = largurajanela/itensPaginados ;
    
    var restoPaginas2 = largurajanela%itensPaginados ;
    if((numerodePaginas>0)&&(restoPaginas2>0) ) {
        numerodePaginacao = numerodePaginas+1
    }
    if((numerodePaginas>0)&&(restoPaginas2==0) ) {
        numerodePaginacao = numerodePaginas
    } 
    
    for (i = 1; i <= numerodePaginacao; i++) {
        
        pg = i-1;
        if(i==1){
            $('.paginacao--produtos').append('<li data-pg="'+i+'" class="active"></li>')
        }else{
        $('.paginacao--produtos').append('<li data-pg="'+i+'" ></li>')
    }
      }

    //clck na paginacao
    
    $('.paginacao--produtos').find('li').click(function(){
        $('.paginacao--produtos').find('li').removeClass('active');
        $(this).addClass('active');
        var pg = $(this).data('pg');
        var deslocamento= ((pg-1)*largurajanela* larguraItem)*-1;
        if(pg==1){
            $('.carousel-giro').css( "margin-left",0)
        }else{
            $('.carousel-giro').css( "margin-left",deslocamento+55);
        }
    })
    $('.last').click(function(){
    $('.carousel-giro').css( "margin-left",largurajanela* larguraItem)
    })

  v=1;
  if(v==1){
    $('.last').hide(); 
} 
   
    $('.next').click(function(){
      
  
        $('.carousel-giro').css( "margin-left",largurajanela* larguraItem*-1*v+55);
        
        v++;
        if(v>1){
            $('.last').show(); 
        } 
        if(v==1){
            $('.last').hide(); 
        } 
        if(v>Math.trunc(numerodePaginacao)){
            $('.carousel-giro').css( "margin-left",largurajanela);
        } 

        
    })
    $('.last').click(function(){
    
        
       
     
        $('.carousel-giro').css( "margin-left",largurajanela);
        
      

        v--;
        if(v>1){
            $('.last').show(); 
        } 
        if(v==1){
            $('.last').hide(); 
        } 
        
    })
   
  //paginacao slide

  //clck na paginacao
    
  var largurajanelaSlide = $('.lista-slide').length;  
  for (t = 1; t <= largurajanelaSlide; t++) {
    
    if(t==1){
        $('.paginacaos--slide').append('<li data-sl="'+t+'" class="active"></li>')
    }else{
    $('.paginacaos--slide').append('<li data-sl="'+t+'" ></li>')
    }
  }
  $('.lista-slide').hide();
  $('.s1').fadeIn(1000);
  paginaatual = 1;
  $('.paginacaos--slide').find('li').click(function(){
     $('.paginacaos--slide').find('li').removeClass('active');
    $(this).addClass('active');
    
    var sl = $(this).data('sl');
    $('.lista-slide').hide();
    $('.s'+sl).fadeIn(1000);
    paginaatual = sl;
    
})
$('.lastslide').click(function(){
   
    if(paginaatual==1){
        pag=1
    }else{
        var pag=paginaatual-1;
    }
    
    $('.lista-slide').hide();
    $('.s'+pag).fadeIn(1000);
})
$('.nextslide').click(function(){
    if(paginaatual>largurajanelaSlide){
        $('.lista-slide').hide();
        $('.s1').fadeIn(1000);
    }else{
        var pag=paginaatual+1;
        $('.lista-slide').hide();
        $('.s'+pag).fadeIn(1000);
    }
  
})
})