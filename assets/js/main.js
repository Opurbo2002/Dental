$(document).ready(function(){
  $(".banner-carousol").owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    autoplaytimeout:5000,
    anitmateIn:true,
    anitmateOut:true,
    smartSpeed:500,
    responsive:{
        0:{
            items:1,
            dots:false
        },
        320:{
            items:1,
            dots:false
        },
        425:{
            items:1,
            dots:false
        },
        767:{
            items:1,
            dots:false,
            navs:false
        },
        768:{
            items:1,
            nav:true
        }
    }
  });
});



$(document).ready(function(){
  $(".client-carousol").owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    autoplaytimeout:5000,
    anitmateIn:true,
    anitmateOut:true,
    smartSpeed:500,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            dots:false

        },
        425:{
            items:2,
            dots:false
        },
        525:{
            items:3,
            dots:false
        },
        767:{
            items:3,
            nav:false,
            center:true
        },
        768:{
            items:4,
            nav:false
        },
        1680:{
            items:4,
            nav:true,
            loop:true
        },
        1681:{
            items:5,
            nav:true,
            loop:true
        },
        3000:{
            items:5,
            nav:true,
            loop:true
        }
    }
  });
});



for(let i = 0; i < 10; i++){
  let parentEl = document.createElement("div");
  parentEl.classList.add("strand");
  parentEl.innerHTML = `
    <div class="top" style="animation-delay:${i * -0.2}s"></div>
    <div class="bottom" style="animation-delay:${-1.5 - (i * 0.2)}s"></div>
  `
  document.querySelector(".heading span").appendChild(parentEl);
}