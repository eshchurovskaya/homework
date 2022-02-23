$('.carousel').slick({
    dots: true,
    slidesToShow: 4,
    variableWidth: true,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 5,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 360,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
            }
        },
    ]
});

$('.carousel-clients').slick({
    slidesToShow: 3,
    slidesToScroll: 1.5,
    dots: true,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1.5
            }
        },
        {
            breakpoint: 1090,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
    ]
});

