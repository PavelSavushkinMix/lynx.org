$(document)
  .ready(() => {
    $('.gallery__slick')
      .slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    $('.team__slick')
      .slick({
        arrows: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        dots: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              centerPadding: '60px',
            },
          },
          {
            breakpoint: 445,
            settings: {
              slidesToShow: 1,
              centerPadding: '60px',
            },
          },
        ],
      });
    $('.partners__slick')
      .slick({
        arrows: true,
        slidesToShow: 4,
        dots: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              centerPadding: '60px',
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              centerPadding: '60px',
            },
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 1,
              centerPadding: '60px',
            },
          },
        ],
      });
  });
