$(function(){

  var mixer = mixitup('.products__inner-box'); 

  $(".rate-star").rateYo({
    rating: 3.6,
    starWidth: "12px",
    readOnly: true
  });

  $(".product-slider__inner").slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });

});