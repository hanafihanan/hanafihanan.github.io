$(document).ready(function(){
    $('.sidenav').sidenav();


    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        // indicators: true,
        dist: 0
    });
     var autoplay = true;
    setInterval(function() { 
        if(autoplay) $('.carousel.carousel-slider').carousel('next'); 
    }, 4500);

    $('.carousel.carousel-slider').hover(function(){
        autoplay = false; 
    },function(){ autoplay = true; 
    
    });

    $('.sidenav').sidenav();
  
  });

  $('.page-scroll').on('click',function(e){
	//menangkap href
	var tujuan = $(this).attr('href');
	//mengambil elemen
	var elemenTujuan = $(tujuan);

	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000);

	// e.preventDefalut();

});

  $(window).scroll(function() {
	const wr = $(this).scrollTop();
    const nav = document.querySelector('nav');
    

    if (wr>$('#sosial').offset().top) {
        nav.classList.add('white');
        nav.classList.remove('z-depth-0');
    }else{
        nav.classList.remove('white');
        nav.classList.add('z-depth-0');
    }
    
});