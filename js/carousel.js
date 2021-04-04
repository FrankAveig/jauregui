window.addEventListener('load', function(){
  
  new Glider(document.querySelector('.carousel_lista'), {
    slidesToShow: 5,
    slidesToScroll: 5,
    draggable: true,
    dots: '.carousel_indicadores',
    arrows: {
      prev: '.carousel_anterior',
      next: '.carousel_siguiente'
    },

  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 800,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
  });


})