//owlCarousel
$('.slider').owlCarousel({
    items:1,
    loop:true,
    nav:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    autoplay:true,
    autoplayTimeout:3000,
    dots:true
})
//owlCarousel

//wow js
wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
)
wow.init();
//wow js